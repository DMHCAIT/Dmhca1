import { test } from "node:test";
import assert from "node:assert/strict";
import { searchSite } from "../src/lib/site-search.ts";

const courses = [
  {
    slug: "fellowship-in-cardiology",
    title: "Fellowship in Cardiology",
    program: "Fellowship",
    categories: ["clinical-cardiology"],
  },
  {
    slug: "pg-diploma-in-diabetology",
    title: "PG Diploma in Diabetology",
    program: "PG Diploma",
    categories: ["diabetology"],
  },
];

test("empty and whitespace searches do not return results", () => {
  assert.deepEqual(searchSite("", courses), []);
  assert.deepEqual(searchSite("   ", courses), []);
});

test("searches courses by partial title, program, and category without case sensitivity", () => {
  assert.ok(searchSite("CARDIO", courses).some((result) => result.slug === courses[0].slug));
  assert.equal(searchSite(" PG   DIPLOMA ", courses)[0].slug, courses[1].slug);
  assert.ok(
    searchSite("clinical cardiology", courses).some((result) => result.slug === courses[0].slug),
  );
});

test("all search terms must match, regardless of order", () => {
  assert.equal(searchSite("diabetology diploma", courses)[0].slug, courses[1].slug);
  assert.deepEqual(searchSite("cardiology diploma", courses), []);
  assert.deepEqual(searchSite("no-such-course", courses), []);
});

test("main pages are searchable by name and related keywords", () => {
  assert.equal(searchSite("support", courses)[0].to, "/contact-us");
  assert.equal(searchSite("about", courses)[0].to, "/about-dmhca");
  assert.equal(searchSite("blogs", courses)[0].to, "/blog");
  assert.equal(searchSite("events", courses)[0].to, "/events");
});

test("title prefix matches rank first and courses retain their navigation slug", () => {
  const results = searchSite("courses", [
    { slug: "medical-courses", title: "Medical Courses", categories: [] },
  ]);
  assert.equal(results[0].to, "/top-medical-courses");
  assert.ok(results.some((result) => result.slug === "medical-courses"));
});

test("individual blog articles, events, and city pages are searchable", () => {
  assert.ok(
    searchSite("crack neet", []).some((result) => result.to === "/blog/how-to-crack-neet-pg"),
  );
  assert.ok(
    searchSite("female hormones", []).some(
      (result) => result.to === "/events/female-hormones-fertility-and-subfertility",
    ),
  );
  assert.ok(
    searchSite("radiology delhi", []).some((result) => result.to === "/radiology-courses/delhi"),
  );
});
