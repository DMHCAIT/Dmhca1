import { getRequestHeader, setResponseHeader } from "@tanstack/react-start/server";
import { createClient } from "@supabase/supabase-js";
import { calculateCoursePrice, currencyForCountry } from "./course-pricing.ts";
import type { Course } from "../data/courses";
import type { CourseCurrency } from "./course-pricing.ts";

type PricingRecord = {
  slug: string;
  title: string;
  price: number | string | null;
  image_url?: string | null;
};

function quoteFromRecord(
  record: PricingRecord,
  details: Partial<Course> | null,
  currency: CourseCurrency,
) {
  const price = calculateCoursePrice(
    { priceINR: Number(record.price), priceUSD: details?.priceUSD },
    currency,
  );
  const image = record.image_url || details?.image || null;
  return { ...price, slug: record.slug, courseName: record.title, image };
}

export async function loadCoursePage(slug: string) {
  const { currency } = getVisitorPricing();
  const db = createClient(
    process.env.VITE_SUPABASE_URL || "",
    process.env.SUPABASE_SERVICE_ROLE_KEY || "",
  );
  const { data: record, error } = await db
    .from("courses")
    .select("slug, title, price, testimonials, image_url")
    .ilike("slug", slug)
    .maybeSingle();
  if (error) throw new Error("Unable to load course pricing");
  if (!record) throw new Error("Course not found. Please choose a course from the catalogue.");
  const details: Partial<Course> | null =
    typeof record.testimonials === "string" ? JSON.parse(record.testimonials) : record.testimonials;
  const course = details?.title ? { ...details, slug: record.slug } : null;
  if (!currency) {
    return {
      course,
      quote: null,
      pricingError: "Unable to determine pricing country. Please contact support.",
    };
  }
  // Invalid/missing fees must not prevent the course content from rendering.
  try {
    return { course, quote: quoteFromRecord(record, details, currency), pricingError: null };
  } catch (error) {
    if (!(error instanceof Error)) throw error;
    console.error("Unable to calculate course page pricing:", error);
    return { course, quote: null, pricingError: error.message };
  }
}

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
    .select("slug, title, price, testimonials, image_url")
    .eq("slug", courseIdentifier)
    .maybeSingle();
  if (slugError) throw new Error("Unable to load course pricing");
  let record = bySlug;
  if (!record) {
    const { data, error } = await db
      .from("courses")
      .select("slug, title, price, testimonials, image_url")
      .eq("title", courseIdentifier)
      .maybeSingle();
    if (error) throw new Error("Unable to load course pricing");
    record = data;
  }
  if (!record) throw new Error("Course not found. Please choose a course from the catalogue.");
  const details =
    typeof record.testimonials === "string" ? JSON.parse(record.testimonials) : record.testimonials;
  return quoteFromRecord(record, details, currency);
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
