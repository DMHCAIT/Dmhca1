export type CourseCurrency = "INR" | "USD";
export type CoursePrices = { priceINR: number; priceUSD?: number | null };

export function currencyForCountry(country: string | null | undefined): CourseCurrency | null {
  if (!country || !/^[A-Z]{2}$/i.test(country) || country.toUpperCase() === "XX") return null;
  return country.toUpperCase() === "IN" ? "INR" : "USD";
}

export function calculateCoursePrice(course: CoursePrices, currency: CourseCurrency) {
  const base = currency === "INR" ? course.priceINR : course.priceUSD;
  if (typeof base !== "number" || !Number.isFinite(base) || base <= 0) {
    throw new Error(
      currency === "USD" ? "Contact us for international pricing" : "Contact us for course pricing",
    );
  }
  const subtotal = Math.round(base * 100) / 100;
  const gst = currency === "INR" ? Math.round(subtotal * 0.18) : 0;
  const razorpayFee = currency === "INR" ? Math.round(subtotal * 0.04) : 0;
  const total = Math.round((subtotal + gst + razorpayFee) * 100) / 100;
  return { currency, subtotal, gst, razorpayFee, total };
}

export function formatCourseMoney(amount: number, currency: CourseCurrency) {
  return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);
}
