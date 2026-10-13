import { createJiti } from "jiti";
import { readdirSync, writeFileSync } from "node:fs";
import { join, resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const base = "https://www.dmhca.in";
const today = new Date().toISOString().split("T")[0];

const jiti = createJiti(import.meta.url, { alias: { "@": join(root, "src") }, moduleCache: false });
const { courses, categories } = await jiti.import(join(root, "src/data/courses.tsx"));
const { cityWiseCourses } = await jiti.import(join(root, "src/data/cityWiseCourses.ts"));
const { events } = await jiti.import(join(root, "src/data/events.ts"));

const routeFiles = readdirSync(join(root, "src", "routes"));
const blogSlugs = routeFiles
  .filter((f) => /^blog\..+\.tsx$/.test(f) && f !== "blog.index.tsx")
  .map((f) => f.slice(5, -4))
  .sort();
const specialtyPages = routeFiles
  .filter((f) => /-courses\.index\.tsx$/.test(f))
  .map((f) => f.replace(/\.index\.tsx$/, ""))
  .sort();

const entries = [];
const add = (path, changefreq, priority) => entries.push({ path, changefreq, priority });

add("/", "daily", "1.0");
add("/top-medical-courses", "daily", "0.95");
["fellowships", "pg-diplomas", "certificates"].forEach((f) =>
  add(`/top-medical-courses/${f}`, "weekly", "0.9"),
);
categories.forEach((c) => add(`/course-category/${c.slug}`, "weekly", "0.85"));
courses.forEach((c) => add(`/courses/${c.slug}`, "weekly", "0.8"));
specialtyPages.forEach((s) => add(`/${s}`, "weekly", "0.75"));
cityWiseCourses.forEach((c) => add(`/${c.slug}`, "monthly", "0.6"));
add("/city-wise-medical-courses", "monthly", "0.6");
add("/blog", "weekly", "0.8");
blogSlugs.forEach((s) => add(`/blog/${s}`, "monthly", "0.7"));
add("/events", "weekly", "0.6");
events.forEach((e) => add(`/events/${e.slug}`, "monthly", "0.5"));
["/about", "/about-dmhca", "/faculty", "/contact-us", "/admission", "/fellowship"].forEach((p) =>
  add(p, "monthly", "0.6"),
);
["/privacy-policy", "/term-conditions", "/refund-returns-policy", "/disclaimer", "/sitemap"].forEach(
  (p) => add(p, "yearly", "0.3"),
);

const seen = new Set();
const unique = entries.filter((e) => !seen.has(e.path) && seen.add(e.path));
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${unique
  .map(
    (e) => `  <url>
    <loc>${esc(base + (e.path === "/" ? "/" : e.path))}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(join(root, "public", "sitemap.xml"), xml);
console.log(`Wrote public/sitemap.xml with ${unique.length} URLs`);
