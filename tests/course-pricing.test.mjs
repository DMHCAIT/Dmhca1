import { test } from "node:test";
import assert from "node:assert/strict";
import {
  calculateCoursePrice,
  currencyForCountry,
  formatCourseMoney,
} from "../src/lib/course-pricing.ts";

test("India uses INR; US, Philippines and every other known country use USD", () => {
  assert.equal(currencyForCountry("IN"), "INR");
  for (const country of ["US", "PH", "GB", "AE", "NP", "CA", "AU", "de"]) {
    assert.equal(currencyForCountry(country), "USD");
  }
});

test("unknown location never silently selects Indian pricing", () => {
  for (const country of [null, undefined, "", "XX", "USA", "India"]) {
    assert.equal(currencyForCountry(country), null);
  }
});

test("INR preserves 18% GST and 4% gateway fee on base course price", () => {
  assert.deepEqual(calculateCoursePrice({ priceINR: 10000, priceUSD: 150 }, "INR"), {
    currency: "INR",
    subtotal: 10000,
    gst: 1800,
    razorpayFee: 400,
    total: 12200,
  });
});

test("USD is exactly the admin total, with no added taxes, fees or conversion", () => {
  for (const value of [1, 19.99, 299.5, 1500]) {
    const quote = calculateCoursePrice({ priceINR: 10000, priceUSD: value }, "USD");
    assert.equal(quote.subtotal, value);
    assert.equal(quote.total, value);
    assert.equal(quote.gst, 0);
    assert.equal(quote.razorpayFee, 0);
    assert.equal(Math.round(quote.total * 100), Math.round(value * 100));
  }
});

test("missing or invalid USD price blocks checkout without INR fallback", () => {
  for (const priceUSD of [null, undefined, 0, -1, NaN, Infinity, "100"]) {
    assert.throws(
      () => calculateCoursePrice({ priceINR: 10000, priceUSD }, "USD"),
      /Contact us for international pricing/,
    );
  }
});

test("invalid INR price blocks checkout and currencies are explicitly formatted", () => {
  assert.throws(() => calculateCoursePrice({ priceINR: 0 }, "INR"), /Contact us/);
  assert.match(formatCourseMoney(199.99, "USD"), /USD.*199\.99/);
  assert.match(formatCourseMoney(100000, "INR"), /₹1,00,000/);
});
