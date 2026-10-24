import { blogsList } from "../data/blogs.ts";
import { events } from "../data/events.ts";
import { cityWiseCourses } from "../data/cityWiseCourses.ts";

export type SearchCourse = {
  slug: string;
  title: string;
  program?: string;
  categories: string[];
};

const pages = [
  { title: "Home", to: "/", keywords: "dmhca medical education" },
  { title: "About us", to: "/about-dmhca", keywords: "about dmhca team" },
  { title: "Courses", to: "/top-medical-courses", keywords: "medical courses programs catalogue" },
  { title: "Contact us", to: "/contact-us", keywords: "contact support phone email address" },
  { title: "Events", to: "/events", keywords: "events workshops" },
  { title: "Blog", to: "/blog", keywords: "blog blogs articles news" },
  {
    title: "City-wise Medical Courses",
    to: "/city-wise-medical-courses",
    keywords: "city wise cities locations courses",
  },
] as const;

const contentPages = [
  ...blogsList.map((blog) => ({
    title: blog.title,
    to: `/blog/${blog.slug}`,
    keywords: "blog blogs article",
    description: "Blog article",
  })),
  ...events.map((event) => ({
    title: event.title,
    to: `/events/${event.slug}`,
    keywords: `event events webinar workshop ${event.shortDescription} ${event.location}`,
    description: "Event",
  })),
  ...cityWiseCourses.map((page) => ({
    title: `${page.specialty} Courses in ${page.city}`,
    to: `/${page.slug}`,
    keywords: "city wise medical courses",
    description: "City-wise courses",
  })),
];

type SearchResult =
  | { kind: "course"; title: string; slug: string; description: string }
  | { kind: "page"; title: string; to: string; description: string };

function normalize(value: string) {
  return value
    .toLowerCase()
    .replace(/[-\s]+/g, " ")
    .trim();
}

export function searchSite(query: string, courses: readonly SearchCourse[]): SearchResult[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];
  const terms = normalizedQuery.split(" ");
  const matches = (text: string) => terms.every((term) => normalize(text).includes(term));
  const results: SearchResult[] = [];

  for (const page of pages) {
    if (matches(`${page.title} ${page.keywords}`)) {
      results.push({ kind: "page", title: page.title, to: page.to, description: "Website page" });
    }
  }
  for (const course of courses) {
    if (matches(`${course.title} ${course.program ?? ""} ${course.categories.join(" ")}`)) {
      results.push({
        kind: "course",
        title: course.title,
        slug: course.slug,
        description: course.program || "Course",
      });
    }
  }
  for (const page of contentPages) {
    if (matches(`${page.title} ${page.keywords}`)) {
      results.push({
        kind: "page",
        title: page.title,
        to: page.to,
        description: page.description,
      });
    }
  }

  return results.sort(
    (a, b) =>
      Number(normalize(b.title).startsWith(normalizedQuery)) -
      Number(normalize(a.title).startsWith(normalizedQuery)),
  );
}
