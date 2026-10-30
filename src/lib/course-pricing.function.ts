import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const CheckoutItemsSchema = z
  .array(
    z.object({
      course: z.string().trim().min(1).max(500),
      qty: z.number().int().min(1).max(1),
    }),
  )
  .min(1)
  .max(75);

export const getPricingRegion = createServerFn({ method: "GET" }).handler(async () => {
  const { getVisitorPricing } = await import("./course-pricing.server");
  return getVisitorPricing();
});

export const getCourseQuote = createServerFn({ method: "POST" })
  .validator(z.object({ course: z.string().trim().min(1).max(500) }))
  .handler(async ({ data }) => {
    const { loadCourseQuote } = await import("./course-pricing.server");
    return loadCourseQuote(data.course);
  });

export const getCoursePage = createServerFn({ method: "GET" })
  .validator(z.object({ slug: z.string().trim().min(1).max(500) }))
  .handler(async ({ data }) => {
    const { loadCoursePage } = await import("./course-pricing.server");
    return loadCoursePage(data.slug);
  });

export const getCheckoutQuote = createServerFn({ method: "POST" })
  .validator(z.object({ items: CheckoutItemsSchema }))
  .handler(async ({ data }) => {
    const { loadCheckoutQuote } = await import("./course-pricing.server");
    return loadCheckoutQuote(data.items);
  });
