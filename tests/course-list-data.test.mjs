import { test } from "node:test";
import assert from "node:assert/strict";
import { mergeCourseListData } from "../src/lib/course-list-data.ts";

test("homepage cards use saved course details instead of stale database defaults", () => {
  const course = mergeCourseListData(
    {
      id: "1",
      slug: "fellowship-in-pediatric-cardiology",
      title: "Fellowship in Pediatric Cardiology",
      category: "cardiology",
      categories: [],
      program: "Certificate",
      duration_weeks: 0,
      testimonials: JSON.stringify({
        program: "Fellowship",
        lessons: 60,
        months: 12,
        level: "expert",
        rating: 4.5,
        reviewCount: 267,
        heroDescription: "Advanced clinical training",
      }),
    },
    [],
  );
  assert.equal(course.program, "Fellowship");
  assert.equal(course.lessons, 60);
  assert.equal(course.months, 12);
  assert.equal(course.level, "expert");
  assert.equal(course.rating, 4.5);
  assert.equal(course.reviewCount, 267);
  assert.equal(course.heroDescription, "Advanced clinical training");
  assert.deepEqual(course.categories, ["cardiology"]);
});

test("missing or zero values use known static details without inventing card values", () => {
  const row = {
    id: "2",
    slug: "fellowship-in-example",
    title: "Fellowship in Example",
    testimonials: { lessons: 0, months: 0 },
  };
  const unknown = mergeCourseListData(row, []);
  assert.equal(unknown.program, "Fellowship");
  assert.equal(unknown.lessons, undefined);
  assert.equal(unknown.months, undefined);

  const known = mergeCourseListData(row, [
    { slug: row.slug, title: row.title, lessons: 44, months: 12, level: "expert" },
  ]);
  assert.equal(known.lessons, 44);
  assert.equal(known.months, 12);
});

test("legacy duration saved in duration_weeks is shown in months as in the admin editor", () => {
  const course = mergeCourseListData(
    { id: "3", slug: "example", title: "Example", duration_weeks: 12 },
    [],
  );
  assert.equal(course.months, 12);
});
