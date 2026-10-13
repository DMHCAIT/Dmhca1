import { createFileRoute, useLocation } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { categories, type Course, courses } from "@/data/courses";
import { fetchCoursesFromSupabase } from "@/lib/courses-remote";
import { CourseCatalogue } from "@/components/site/CourseCatalogue";

export const Route = createFileRoute("/top-medical-courses/")({
  head: () => ({
    meta: [
      { title: "Top Medical Courses Online – Fellowships, PG Diplomas & Certificates | DMHCA" },
      {
        name: "description",
        content:
          "Explore the top medical courses online at DMHCA: accredited fellowships, PG diplomas and certificate courses across cardiology, radiology, gynaecology, diabetology, oncology and every medical specialty.",
      },
      { property: "og:title", content: "Top Medical Courses Online | DMHCA" },
      { property: "og:url", content: "https://www.dmhca.in/top-medical-courses" },
    ],
    links: [{ rel: "canonical", href: "https://www.dmhca.in/top-medical-courses" }],
  }),
  component: AllCourses,
});

function programType(c: Course) {
  return c.program || "Certificate";
}

function AllCourses() {
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search || ""), [location.search]);
  const cat = useMemo(() => {
    try {
      const p = searchParams.get("cat");
      if (p) {
        const slug = p.toLowerCase();
        if (categories.some((c) => c.slug === slug)) return slug;
      }
    } catch (e) {}
    return "all";
  }, [searchParams]);
  const [fmt, setFmt] = useState<string>("all");
  const [remoteCourses, setRemoteCourses] = useState<Course[] | null>(null);
  // Initialize fmt from URL (so external links like ?fmt=Fellowship work)
  useEffect(() => {
    try {
      const p = new URLSearchParams(location.search || "").get("fmt");
      setFmt(p || "all");
    } catch (e) {}
  }, [location.search]);

  // Load courses from Supabase (fallback to static file if unavailable)
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const remote = await fetchCoursesFromSupabase();
        if (mounted && remote && Array.isArray(remote) && remote.length > 0)
          setRemoteCourses(remote as Course[]);
      } catch (e) {
        console.warn("Failed to load remote courses", e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);
  const [q, setQ] = useState<string>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get("q") || "";
    } catch (e) {
      return "";
    }
  });

  // Keep URL syncronization on mount (no-op if already present)
  useEffect(() => {
    updateUrl({ cat, q });
  }, []);

  // Keep URL in sync when filters change (so links are shareable)
  function updateUrl(params: { cat?: string; fmt?: string; q?: string }) {
    const u = new URL(window.location.href);
    const s = u.searchParams;
    if (params.cat !== undefined) {
      if (params.cat === "all" || !params.cat) s.delete("cat");
      else s.set("cat", params.cat);
    }
    if (params.fmt !== undefined) {
      if (params.fmt === "all" || !params.fmt) s.delete("fmt");
      else s.set("fmt", params.fmt);
    }
    if (params.q !== undefined) {
      if (!params.q) s.delete("q");
      else s.set("q", params.q);
    }
    const newUrl = u.pathname + (s.toString() ? `?${s.toString()}` : "");
    window.history.replaceState({}, "", newUrl);
  }

  const allSource = remoteCourses || (courses as Course[]);
  const filtered = useMemo(
    () =>
      allSource.filter(
        (c) =>
          (cat === "all" || (c.categories || []).includes(cat)) &&
          (fmt === "all" || programType(c) === fmt) &&
          (q.trim() === "" || (c.title || "").toLowerCase().includes(q.toLowerCase())),
      ),
    [cat, fmt, q, allSource],
  );

  // CollectionPage Schema for all courses
  const allCoursesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "All Medical Courses",
    description:
      "Browse fellowships, PG diplomas, and certificate courses across every medical specialty.",
    url: "https://www.dmhca.in/top-medical-courses",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filtered.slice(0, 50).map((course, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://www.dmhca.in/courses/${course.slug}`,
        name: course.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(allCoursesSchema) }}
      />
      <CourseCatalogue
        title="All programs."
        description={`Filter across ${categories.length} specialties and three program formats — Certificate, PG Diploma, and Fellowship.`}
        courses={filtered}
        selectedFormat={
          fmt === "Certificate"
            ? "certificates"
            : fmt === "PG Diploma"
              ? "pg-diplomas"
              : fmt === "Fellowship"
                ? "fellowships"
                : "all"
        }
        selectedSpecialty={cat}
        search={q}
        onSearchChange={setQ}
        formatHref={(slug) =>
          slug === "all"
            ? cat === "all"
              ? "/top-medical-courses"
              : `/top-medical-courses/${cat}`
            : `/top-medical-courses/${slug}${cat !== "all" ? `/${cat}` : ""}`
        }
        specialtyHref={(slug) =>
          slug === "all"
            ? fmt === "all"
              ? "/top-medical-courses"
              : `/top-medical-courses/${fmt === "Certificate" ? "certificates" : fmt === "PG Diploma" ? "pg-diplomas" : "fellowships"}`
            : fmt === "all"
              ? `/top-medical-courses/${slug}`
              : `/top-medical-courses/${fmt === "Certificate" ? "certificates" : fmt === "PG Diploma" ? "pg-diplomas" : "fellowships"}/${slug}`
        }
        resetHref="/top-medical-courses"
      />
    </>
  );
}
