import { getRequestHeader, setResponseHeader } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";
import { calculateCoursePrice, currencyForCountry } from "./course-pricing.ts";

export function getVisitorPricing() {
  setResponseHeader("Cache-Control", "private, no-store");
  let country =
    process.env.NODE_ENV !== "production" && process.env.PRICING_TEST_COUNTRY
      ? process.env.PRICING_TEST_COUNTRY
      : getRequestHeader("x-vercel-ip-country");
  if (!country && process.env.NODE_ENV === "development") {
    console.info(
      "Local development pricing defaults to India. Set PRICING_TEST_COUNTRY=US to test USD.",
    );
    country = "IN";
  }
  const currency = currencyForCountry(country);
  if (!currency)
    console.error("Pricing country unavailable: configure trusted hosting geolocation");
  return { country: country || null, currency };
}

export async function loadCourseQuote(courseIdentifier: string) {
  const { currency } = getVisitorPricing();
  if (!currency) throw new Error("Unable to determine pricing country. Please contact support.");
  const db = createClient(
    process.env.VITE_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  );
  // Match exact saved identifiers; never use a browser-supplied price.
  const { data: bySlug, error: slugError } = await db
    .from("courses")
    .select("slug, title, price, testimonials")
    .eq("slug", courseIdentifier)
    .maybeSingle();
  if (slugError) throw new Error("Unable to load course pricing");
  let record = bySlug;
  if (!record) {
    const { data, error } = await db
      .from("courses")
      .select("slug, title, price, testimonials")
      .eq("title", courseIdentifier)
      .maybeSingle();
    if (error) throw new Error("Unable to load course pricing");
    record = data;
  }
  if (!record) throw new Error("Course not found. Please choose a course from the catalogue.");
  const details =
    typeof record.testimonials === "string" ? JSON.parse(record.testimonials) : record.testimonials;
  const price = calculateCoursePrice(
    { priceINR: Number(record.price), priceUSD: details?.priceUSD },
    currency,
  );
  return { ...price, slug: record.slug, courseName: record.title };
}

export async function loadCheckoutQuote(items: { course: string; qty: number }[]) {
  const lines = await Promise.all(
    items.map(async (item) => ({
      ...(await loadCourseQuote(item.course)),
      qty: item.qty,
    })),
  );
  if (new Set(lines.map((line) => line.slug)).size !== lines.length) {
    throw new Error("Duplicate course in checkout");
  }
  const currency = lines[0].currency;
  const sum = (key: "subtotal" | "gst" | "razorpayFee" | "total") =>
    Math.round(lines.reduce((total, line) => total + line[key] * line.qty, 0) * 100) / 100;
  return {
    currency,
    lines,
    subtotal: sum("subtotal"),
    gst: sum("gst"),
    razorpayFee: sum("razorpayFee"),
    total: sum("total"),
  };
}
