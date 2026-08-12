import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { courses, categories } from "@/data/courses";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = ["/", "/top-medical-courses", "/fellowship", "/faculty", "/about", "/blog", "/contact-us", "/login"];
        const entries: { path: string; changefreq?: string; priority?: string }[] = [
          ...staticPaths.map((p) => ({ path: p, changefreq: "weekly", priority: p === "/" ? "1.0" : "0.8" })),
          ...categories.map((c) => ({ path: `/course-category/${c.slug}`, changefreq: "weekly", priority: "0.7" })),
          ...courses.map((c) => ({ path: `/courses/${c.slug}`, changefreq: "monthly", priority: "0.6" })),
        ];
        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
