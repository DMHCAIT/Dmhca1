import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import vm from "node:vm";
import ts from "typescript";

async function loadServer(handler, entryFile = "server.ts") {
  const errors = [];
  const cancellations = [];
  const context = vm.createContext({
    Request,
    Response,
    URL,
    console: {
      error: (...args) => errors.push(args),
      info: (...args) => cancellations.push(args),
    },
  });
  const entry = new vm.SyntheticModule(
    ["default"],
    function () {
      this.setExport("default", { fetch: handler });
    },
    { context },
  );
  await entry.link(() => {});
  await entry.evaluate();

  const start = new vm.SyntheticModule(
    ["createStart", "createMiddleware"],
    function () {
      this.setExport("createStart", (options) => options());
      this.setExport("createMiddleware", () => ({ server: (middleware) => middleware }));
    },
    { context },
  );
  await start.link(() => {});
  await start.evaluate();

  const modules = new Map();
  async function load(url) {
    const key = url.href;
    if (modules.has(key)) return modules.get(key);
    const source = await readFile(url, "utf8");
    const { outputText } = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
      fileName: fileURLToPath(url),
    });
    const module = new vm.SourceTextModule(outputText, {
      context,
      identifier: key,
      importModuleDynamically(specifier) {
        assert.equal(specifier, "@tanstack/react-start/server-entry");
        return entry;
      },
    });
    modules.set(key, module);
    await module.link((specifier) =>
      specifier === "@tanstack/react-start" ? start : load(new URL(`${specifier}.ts`, url)),
    );
    return module;
  }
  const module = await load(new URL(`../src/${entryFile}`, import.meta.url));
  await module.evaluate();
  return {
    server: module.namespace.default,
    middleware: module.namespace.startInstance?.requestMiddleware[0],
    errors,
    cancellations,
  };
}

function catastrophicResponse() {
  return Response.json({ status: 500, unhandled: true, message: "HTTPError" }, { status: 500 });
}

test("normal responses pass through unchanged", async () => {
  const expected = new Response("OK");
  const { server, errors } = await loadServer(() => expected);
  assert.equal(await server.fetch(new Request("http://localhost/")), expected);
  assert.equal(errors.length, 0);
});

test("already cancelled requests do not invoke SSR", async () => {
  let called = false;
  const controller = new AbortController();
  controller.abort();
  const { server, errors, cancellations } = await loadServer(() => {
    called = true;
    return new Response("OK");
  });
  const response = await server.fetch(
    new Request("http://localhost/", { signal: controller.signal }),
  );
  assert.equal(response.status, 499);
  assert.equal(response.body, null);
  assert.equal(called, false);
  assert.equal(errors.length, 0);
  assert.equal(cancellations.length, 1);
});

for (const outcome of ["throw", "h3 response", "normal response"]) {
  test(`cancellation during SSR with ${outcome} is not an application failure`, async () => {
    const controller = new AbortController();
    const { server, errors, cancellations } = await loadServer(() => {
      controller.abort();
      if (outcome === "throw") {
        throw Object.assign(new Error("aborted"), { code: "ECONNRESET" });
      }
      return outcome === "h3 response" ? catastrophicResponse() : new Response("OK");
    });
    const response = await server.fetch(
      new Request("http://localhost/", { signal: controller.signal }),
    );
    assert.equal(response.status, 499);
    assert.equal(response.body, null);
    assert.equal(errors.length, 0);
    assert.equal(cancellations.length, 1);
  });
}

test("an upstream ECONNRESET on a live request remains a logged 500", async () => {
  const failure = Object.assign(new Error("upstream disconnected"), { code: "ECONNRESET" });
  const { server, errors } = await loadServer(() => {
    throw failure;
  });
  const response = await server.fetch(new Request("http://localhost/"));
  assert.equal(response.status, 500);
  assert.match(response.headers.get("content-type"), /text\/html/);
  assert.equal(errors[0][0], failure);
});

test("genuine h3 SSR failures still render and log an error", async () => {
  const { server, errors } = await loadServer(catastrophicResponse);
  const response = await server.fetch(new Request("http://localhost/"));
  assert.equal(response.status, 500);
  assert.match(response.headers.get("content-type"), /text\/html/);
  assert.match(await response.text(), /<!doctype html>/i);
  assert.equal(errors.length, 1);
});

test("unrelated JSON 500 responses pass through unchanged", async () => {
  const expected = Response.json({ message: "API failure" }, { status: 500 });
  const { server, errors } = await loadServer(() => expected);
  assert.equal(await server.fetch(new Request("http://localhost/")), expected);
  assert.equal(errors.length, 0);
});

for (const cancelled of [false, true]) {
  test(`response-body failures ${cancelled ? "after cancellation return 499" : "remain logged 500s"}`, async () => {
    const controller = new AbortController();
    const { server, errors } = await loadServer(() => {
      const response = catastrophicResponse();
      response.clone = () => ({
        async text() {
          if (cancelled) controller.abort();
          throw new Error("body read failed");
        },
      });
      return response;
    });
    const response = await server.fetch(
      new Request("http://localhost/", { signal: controller.signal }),
    );
    assert.equal(response.status, cancelled ? 499 : 500);
    assert.equal(errors.length, cancelled ? 0 : 2);
  });
}

for (const cancelled of [false, true]) {
  test(`error middleware preserves ${cancelled ? "request cancellation" : "real SSR failures"}`, async () => {
    const controller = new AbortController();
    const { middleware, errors } = await loadServer(undefined, "start.ts");
    const response = await middleware({
      request: new Request("http://localhost/", { signal: controller.signal }),
      next() {
        if (cancelled) controller.abort();
        throw new Error("render interrupted");
      },
    });
    assert.equal(response.status, cancelled ? 499 : 500);
    assert.equal(errors.length, cancelled ? 0 : 1);
  });
}

test("error middleware still rethrows HTTP status errors on live requests", async () => {
  const failure = { statusCode: 404 };
  const { middleware, errors } = await loadServer(undefined, "start.ts");
  await assert.rejects(
    middleware({
      request: new Request("http://localhost/"),
      next() {
        throw failure;
      },
    }),
    (error) => error === failure,
  );
  assert.equal(errors.length, 0);
});
