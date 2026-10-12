import { createFileRoute, useParams, notFound } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { categories, type Course, courses } from "@/data/courses";
import { fetchCoursesFromSupabase } from "@/lib/courses-remote";
import { CourseCatalogue } from "@/components/site/CourseCatalogue";

export const Route = createFileRoute("/top-medical-courses/$specialty")({
  beforeLoad: ({ params }) => {
    // Only allow valid specialty slugs
    if (!categories.some((c) => c.slug === params.specialty)) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const specialty = categories.find((c) => c.slug === params.specialty);
    const title = specialty ? `${specialty.name} Courses — DMHCA` : "Courses — DMHCA";
    return {
      meta: [
        { title },
        {
          name: "description",
          content: specialty
            ? `Browse all ${specialty.name.toLowerCase()} courses across all formats.`
            : "Browse medical courses across all specialties.",
        },
      ],
    };
  },
  component: SpecialtyCourses,
});

function programType(c: Course) {
  return c.program || "Certificate";
}

function SpecialtyCourses() {
  const { specialty: specialtySlug } = useParams({ from: "/top-medical-courses/$specialty" });

  const specialty = categories.find((c) => c.slug === specialtySlug);

  const [remoteCourses, setRemoteCourses] = useState<Course[] | null>(null);

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
    updateUrl({ q });
  }, []);

  // Keep URL in sync when filters change (so links are shareable)
  function updateUrl(params: { q?: string }) {
    const u = new URL(window.location.href);
    const s = u.searchParams;
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
          (specialtySlug === "all" || (c.categories || []).includes(specialtySlug)) &&
          (q.trim() === "" || (c.title || "").toLowerCase().includes(q.toLowerCase())),
      ),
    [specialtySlug, q, allSource],
  );

  // CollectionPage Schema for specialty courses
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: specialty ? `${specialty.name} Courses` : "Medical Courses",
    description: specialty
      ? `Browse all ${specialty.name.toLowerCase()} courses across all formats.`
      : "Browse medical courses across all specialties.",
    url: `https://dmhca.in/top-medical-courses/${specialtySlug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filtered.slice(0, 50).map((course, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        url: `https://dmhca.in/courses/${course.slug}`,
        name: course.title,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CourseCatalogue
        title={`${specialty?.name || "All"} programs.`}
        description={`Filter ${specialty?.name.toLowerCase() || "medical"} courses across all formats — Certificate, PG Diploma, and Fellowship.`}
        courses={filtered}
        selectedFormat="all"
        selectedSpecialty={specialtySlug}
        search={q}
        onSearchChange={setQ}
        formatHref={(slug) =>
          slug === "all"
            ? `/top-medical-courses/${specialtySlug}`
            : `/top-medical-courses/${slug}/${specialtySlug}`
        }
        specialtyHref={(slug) =>
          slug === "all" ? "/top-medical-courses" : `/top-medical-courses/${slug}`
        }
        resetHref={`/top-medical-courses/${specialtySlug}`}
      />
    </>
  );
}
