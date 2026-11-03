import { after, afterEach, beforeEach, test } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const vite = await createServer({
  configFile: false,
  root: fileURLToPath(new URL("..", import.meta.url)),
  server: { middlewareMode: true, watch: null },
  appType: "custom",
  logLevel: "error",
});
after(() => vite.close());

const { courses, relatedCourses } = await vite.ssrLoadModule("/src/data/courses.tsx");
const originalCourses = [...courses];
const baseCourse = courses[0];

beforeEach(() => {
  courses.splice(
    0,
    courses.length,
    { ...baseCourse, slug: "current", categories: ["cardiology"], program: "Fellowship" },
    { ...baseCourse, slug: "missing-program", categories: ["unrelated"], program: undefined },
    { ...baseCourse, slug: "same-category", categories: ["cardiology"], program: "Certificate" },
    { ...baseCourse, slug: "same-program", categories: ["other"], program: "fellowship" },
    { ...baseCourse, slug: "other", categories: ["other"], program: "Certificate" },
  );
});

afterEach(() => {
  courses.splice(0, courses.length, ...originalCourses);
});

test("recommendations prioritize category and program matches when a course has no program", () => {
  assert.deepEqual(
    relatedCourses("current", 3).map((course) => course.slug),
    ["same-category", "same-program", "missing-program"],
  );
});

test("database-only courses use fallback category and program metadata", () => {
  assert.deepEqual(
    relatedCourses("database-only", 3, {
      categories: ["cardiology"],
      program: "Fellowship",
    }).map((course) => course.slug),
    ["current", "same-category", "same-program"],
  );
});

test("recommendations fill from other courses when no categories or programs match", () => {
  assert.deepEqual(
    relatedCourses("database-only", 3, {
      categories: ["not-found"],
      program: "not-found",
    }).map((course) => course.slug),
    ["current", "missing-program", "same-category"],
  );
});
