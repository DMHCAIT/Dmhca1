import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { getAbortedRequestResponse } from "./lib/request-abort";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(
  request: Request,
  response: Response,
): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  try {
    const body = await response.clone().text();
    const abortedResponse = getAbortedRequestResponse(request);
    if (abortedResponse) return abortedResponse;
    if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
      return response;
    }

    console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  } catch (error) {
    const abortedResponse = getAbortedRequestResponse(request);
    if (abortedResponse) return abortedResponse;

    // Handle connection reset or other errors reading the response body
    console.error("Error reading SSR response body:", error);
    console.error(consumeLastCapturedError() ?? new Error("SSR error with connection reset"));
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const abortedResponse = getAbortedRequestResponse(request);
    if (abortedResponse) return abortedResponse;

    try {
      const handler = await getServerEntry();
      const abortedBeforeHandling = getAbortedRequestResponse(request);
      if (abortedBeforeHandling) return abortedBeforeHandling;

      const response = await handler.fetch(request, env, ctx);
      const abortedAfterHandling = getAbortedRequestResponse(request);
      if (abortedAfterHandling) return abortedAfterHandling;

      return await normalizeCatastrophicSsrResponse(request, response);
    } catch (error) {
      const abortedResponse = getAbortedRequestResponse(request);
      if (abortedResponse) return abortedResponse;

      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
