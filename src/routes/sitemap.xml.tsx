import { createFileRoute } from "@tanstack/react-router";
import { courses, categories } from "@/data/courses";

export const Route = createFileRoute("/sitemap/xml")({
  beforeLoad: () => ({
    doNotLayoutOrScroll: true,
  }),
  component: Sitemap,
});

function Sitemap() {
  const baseUrl = "https://dmhca.in";
  
  const urls = [
    // Homepage
    {
      loc: baseUrl,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: "1.0",
    },
    // All courses page
    {
      loc: `${baseUrl}/top-medical-courses`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: "0.9",
    },
    // Category pages
    ...categories.map((cat) => ({
      loc: `${baseUrl}/course-category/${cat.slug}`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "weekly",
      priority: "0.8",
    })),
    // Individual course pages
    ...courses.map((course) => ({
      loc: `${baseUrl}/courses/${course.slug}`,
      lastmod: new Date().toISOString().split("T")[0],
      changefreq: "monthly",
      priority: "0.7",
    })),
  ];

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xmlContent, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
