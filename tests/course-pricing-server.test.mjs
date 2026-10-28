import { after, beforeEach, mock, test } from "node:test";
import assert from "node:assert/strict";

let country = "IN";
let databaseError = false;
const headers = new Map();
const records = [
  {
    slug: "course-a",
    title: "Course A",
    price: 10000,
    testimonials: '{"priceUSD":199.99}',
    image_url: "/a.webp",
  },
  {
    slug: "course-b",
    title: "Course B",
    price: 5000,
    testimonials: { priceUSD: 100, image: "/b.webp" },
  },
  { slug: "course-without-usd", title: "No USD", price: 20000, testimonials: "{}" },
];
const originalOverride = process.env.PRICING_TEST_COUNTRY;
const originalMode = process.env.NODE_ENV;
delete process.env.PRICING_TEST_COUNTRY;
after(() => {
  if (originalOverride === undefined) delete process.env.PRICING_TEST_COUNTRY;
  else process.env.PRICING_TEST_COUNTRY = originalOverride;
  if (originalMode === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = originalMode;
});

mock.module("@tanstack/react-start/server", {
  namedExports: {
    getRequestHeader: (name) => {
      assert.equal(name, "x-vercel-ip-country");
      return country;
    },
    setResponseHeader: (name, value) => headers.set(name, value),
  },
});
mock.module("@supabase/supabase-js", {
  namedExports: {
    createClient: () => ({
      from: (table) => {
        assert.equal(table, "courses");
        return {
          select: () => ({
            eq: (field, identifier) => ({
              maybeSingle: async () => ({
                data: records.find((record) => record[field] === identifier) || null,
                error: databaseError ? { message: "database unavailable" } : null,
              }),
            }),
          }),
        };
      },
    }),
  },
});

const { getVisitorPricing, loadCourseQuote, loadCheckoutQuote } =
  await import("../src/lib/course-pricing.server.ts");

beforeEach(() => {
  if (originalMode === undefined) delete process.env.NODE_ENV;
  else process.env.NODE_ENV = originalMode;
  delete process.env.PRICING_TEST_COUNTRY;
  country = "IN";
  databaseError = false;
  headers.clear();
});

test("localhost development without hosting geolocation shows Indian course fees", async () => {
  country = undefined;
  process.env.NODE_ENV = "development";
  assert.deepEqual(getVisitorPricing(), { country: "IN", currency: "INR" });
  const quote = await loadCourseQuote("course-a");
  assert.equal(quote.subtotal, 10000);
  assert.equal(quote.currency, "INR");
});

test("development override and hosting country take priority over local INR default", () => {
  country = undefined;
  process.env.NODE_ENV = "development";
  process.env.PRICING_TEST_COUNTRY = "PH";
  assert.equal(getVisitorPricing().currency, "USD");
  delete process.env.PRICING_TEST_COUNTRY;
  country = "US";
  assert.equal(getVisitorPricing().currency, "USD");
});

test("production without geolocation never defaults to INR, even with a test override", async () => {
  country = undefined;
  process.env.NODE_ENV = "production";
  process.env.PRICING_TEST_COUNTRY = "IN";
  assert.equal(getVisitorPricing().currency, null);
  await assert.rejects(loadCourseQuote("course-a"), /Unable to determine pricing country/);
});

test("regional responses are private and cannot be shared between countries", () => {
  assert.deepEqual(getVisitorPricing(), { country: "IN", currency: "INR" });
  assert.equal(headers.get("Cache-Control"), "private, no-store");
});

test("local testing override cannot change production country", () => {
  const originalMode = process.env.NODE_ENV;
  try {
    process.env.PRICING_TEST_COUNTRY = "PH";
    process.env.NODE_ENV = "development";
    assert.equal(getVisitorPricing().currency, "USD");
    process.env.NODE_ENV = "production";
    assert.equal(getVisitorPricing().currency, "INR");
  } finally {
    delete process.env.PRICING_TEST_COUNTRY;
    if (originalMode === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = originalMode;
  }
});

test("authoritative course quote supports saved slug and exact title", async () => {
  const bySlug = await loadCourseQuote("course-a");
  const byTitle = await loadCourseQuote("Course A");
  assert.deepEqual(bySlug, byTitle);
  assert.equal(bySlug.total, 12200);
  assert.equal(bySlug.currency, "INR");
});

test("US and Philippines checkout use saved final USD totals for every cart course", async () => {
  for (const location of ["US", "PH"]) {
    country = location;
    const quote = await loadCheckoutQuote([
      { course: "course-a", qty: 1 },
      { course: "course-b", qty: 1 },
    ]);
    assert.equal(quote.currency, "USD");
    assert.equal(quote.total, 299.99);
    assert.equal(quote.subtotal, 299.99);
    assert.equal(quote.gst, 0);
    assert.equal(quote.razorpayFee, 0);
    assert.deepEqual(
      quote.lines.map((line) => line.slug),
      ["course-a", "course-b"],
    );
    assert.deepEqual(
      quote.lines.map((line) => line.image),
      ["/a.webp", "/b.webp"],
    );
  }
});

test("Indian multi-course payment sums GST and gateway charges", async () => {
  const quote = await loadCheckoutQuote([
    { course: "course-a", qty: 1 },
    { course: "course-b", qty: 1 },
  ]);
  assert.equal(quote.subtotal, 15000);
  assert.equal(quote.gst, 2700);
  assert.equal(quote.razorpayFee, 600);
  assert.equal(quote.total, 18300);
});

test("one missing international fee blocks the whole cart, without partial charging", async () => {
  country = "PH";
  await assert.rejects(
    loadCheckoutQuote([
      { course: "course-a", qty: 1 },
      { course: "course-without-usd", qty: 1 },
    ]),
    /Contact us for international pricing/,
  );
});

test("slug and title aliases cannot purchase the same course twice", async () => {
  await assert.rejects(
    loadCheckoutQuote([
      { course: "course-a", qty: 1 },
      { course: "Course A", qty: 1 },
    ]),
    /Duplicate course/,
  );
});

test("unknown courses and database failures cannot fall back to static fees", async () => {
  await assert.rejects(loadCourseQuote("unlisted"), /Course not found/);
  databaseError = true;
  await assert.rejects(loadCourseQuote("course-a"), /Unable to load course pricing/);
});
