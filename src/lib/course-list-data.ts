import type { Course } from "../data/courses";
import type { CourseData } from "../hooks/useCoursesData";

type CourseRow = {
  id: string;
  slug: string;
  title: string;
  category?: string | null;
  categories?: string[] | null;
  image_url?: string | null;
  program?: string | null;
  price?: number | null;
  rating?: number | null;
  review_count?: number | null;
  short_description?: string | null;
  duration_weeks?: number | null;
  testimonials?: unknown;
};

function positiveNumber(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? value : undefined;
}

export function mergeCourseListData(row: CourseRow, staticCourses: Course[]): CourseData {
  let saved: Partial<Course> & { category?: string } = {};
  if (row.testimonials) {
    try {
      const value =
        typeof row.testimonials === "string" ? JSON.parse(row.testimonials) : row.testimonials;
      if (value && typeof value === "object" && !Array.isArray(value)) saved = value;
    } catch (error) {
      console.warn(`Could not parse saved course details for ${row.slug}`, error);
    }
  }

  const fallback = staticCourses.find(
    (course) => course.slug === row.slug || course.title === row.title,
  );
  const inferredProgram = /\bfellowship\b/i.test(row.title)
    ? "Fellowship"
    : /\bpg\s+diploma\b/i.test(row.title)
      ? "PG Diploma"
      : /\bcertificate\b/i.test(row.title)
        ? "Certificate"
        : undefined;
  const categories = row.categories?.length
    ? row.categories
    : saved.categories?.length
      ? saved.categories
      : undefined;

  return {
    id: row.id,
    slug: row.slug || fallback?.slug || "",
    title: row.title || fallback?.title || "",
    category: row.category || saved.category || fallback?.categories?.[0] || "",
    categories:
      categories ||
      (row.category ? [row.category] : undefined) ||
      (saved.category ? [saved.category] : undefined) ||
      fallback?.categories ||
      [],
    image: row.image_url || saved.image || fallback?.image || "",
    program: saved.program || row.program || fallback?.program || inferredProgram,
    priceINR: row.price ?? saved.priceINR ?? fallback?.priceINR ?? 0,
    lessons: positiveNumber(saved.lessons) ?? positiveNumber(fallback?.lessons),
    months:
      positiveNumber(saved.months) ??
      positiveNumber(row.duration_weeks) ??
      positiveNumber(fallback?.months),
    level: saved.level || fallback?.level || "",
    rating:
      positiveNumber(saved.rating) ??
      positiveNumber(row.rating) ??
      positiveNumber(fallback?.rating),
    reviewCount: saved.reviewCount ?? row.review_count ?? fallback?.reviewCount ?? 0,
    overview: saved.overview || row.short_description || fallback?.overview || "",
    heroDescription: saved.heroDescription || fallback?.heroDescription || "",
    learn: saved.learn || fallback?.learn || [],
    requirements: saved.requirements || fallback?.requirements || [],
    modules: saved.modules || fallback?.modules || [],
    moduleDetails: saved.moduleDetails || fallback?.moduleDetails,
    faqs: saved.faqs || fallback?.faqs || [],
    trainers: saved.trainers || fallback?.trainers,
    reviews: saved.reviews || fallback?.reviews,
    meta: saved.meta || fallback?.meta || {},
  };
}
