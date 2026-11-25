import { test } from "node:test";
import assert from "node:assert/strict";
import { normalizeHtmlMetadata } from "../src/lib/html-metadata.ts";

test("keeps the canonical and both types of description when no override is supplied", () => {
  const html =
    '<head><link rel="canonical" href="https://www.dmhca.in/course"><meta name="description" content="page"><meta property="og:description" content="social"></head>';
  assert.equal(normalizeHtmlMetadata(html), html);
});

test("deduplicates each metadata type independently and uses the last value", () => {
  const html =
    '<head><title>Old</title><title>New</title><meta name="description" content="old"><meta property="og:description" content="social"><meta name="description" content="new"></head>';
  const result = normalizeHtmlMetadata(html);
  assert.doesNotMatch(result, /<title>Old<\/title>|content="old"/);
  assert.match(result, /<title>New<\/title>/);
  assert.match(result, /name="description" content="new"/);
  assert.match(result, /property="og:description" content="social"/);
});

test("replaces a route canonical only when a configured override is present", () => {
  const html = '<head><link rel="canonical" href="https://www.dmhca.in/old"></head>';
  const result = normalizeHtmlMetadata(html, "https://www.dmhca.in/new");
  assert.doesNotMatch(result, /dmhca\.in\/old/);
  assert.match(result, /rel="canonical" href="https:\/\/www\.dmhca\.in\/new"/);
  assert.equal((result.match(/rel="canonical"/g) || []).length, 1);
});
