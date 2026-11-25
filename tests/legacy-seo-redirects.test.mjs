import { test } from "node:test";
import assert from "node:assert/strict";

const server = (await import("../.vercel/output/functions/__server.func/index.mjs")).default;
const origin = "https://www.dmhca.in";
const context = { waitUntil() {} };

test("legacy URLs permanently redirect to the requested destinations", async () => {
  const redirects = [
    ["/paediatrics-courses", "/top-medical-courses/pediatrics"],
    ["/paediatrics-courses/delhi", "/top-medical-courses/pediatrics"],
    ["/paediatrics-courses/mumbai/", "/top-medical-courses/pediatrics"],
    ["/top-medical-courses/paediatrics", "/top-medical-courses/pediatrics"],
    ["/radiology-courses-after-12th-in-india", "/top-medical-courses/radiology"],
    ["/scope-of-radiology", "/blog"],
    ["/fellowship", "/top-medical-courses/fellowships"],
  ];

  for (const [source, destination] of redirects) {
    const response = await server.fetch(new Request(`${origin}${source}`), {}, context);
    assert.equal(response.status, 301, source);
    assert.equal(response.headers.get("location"), `${origin}${destination}`, source);
  }
});

test("redirect destinations serve their own canonical and relevant content", async () => {
  const destinations = [
    ["/top-medical-courses/pediatrics", /Pediatrics programs/i],
    ["/top-medical-courses/radiology", /Radiology programs/i],
    ["/top-medical-courses/fellowships", /Fellowship programs/i],
    ["/blog", /Medical Blogs/i],
  ];

  for (const [path, content] of destinations) {
    const response = await server.fetch(new Request(`${origin}${path}`), {}, context);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, content, path);
    const canonicalTags = html.match(/<link\b[^>]*\brel=["']canonical["'][^>]*>/gi) ?? [];
    assert.equal(canonicalTags.length, 1, path);
    assert.ok(canonicalTags[0].includes(`href="${origin}${path}"`), path);
  }
});

test("nested fellowship pages do not inherit the fellowship listing canonical", async () => {
  const response = await server.fetch(
    new Request(`${origin}/top-medical-courses/fellowships/pediatrics`),
    {},
    context,
  );
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.doesNotMatch(
    html,
    /rel="canonical" href="https:\/\/www\.dmhca\.in\/top-medical-courses\/fellowships"/,
  );
});
