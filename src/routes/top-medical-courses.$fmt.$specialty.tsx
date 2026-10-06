import { createFileRoute, useLocation, useParams, notFound } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { categories, type Course, courses } from "@/data/courses";
import { fetchCoursesFromSupabase } from "@/lib/courses-remote";
import { CourseCard } from "@/components/site/CourseCard";

// Map URL slugs to program type names
const formatMap: Record<string, string> = {
  certificates: "Certificate",
  "pg-diplomas": "PG Diploma",
  fellowships: "Fellowship",
};

const reverseFormatMap: Record<string, string> = {
  Certificate: "certificates",
  "PG Diploma": "pg-diplomas",
  Fellowship: "fellowships",
};

export const Route = createFileRoute("/top-medical-courses/$fmt/$specialty")({
  // Removed strict beforeLoad validation to handle edge cases
  // Validation now happens in component with better error handling
  head: ({ params }) => {
    const formatName = formatMap[params.fmt] || "Courses";
    const specialty = categories.find((c) => c.slug === params.specialty);
    const title = specialty
      ? `${specialty.name} ${formatName} — DMHCA`
      : `${formatName} — DMHCA`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: specialty
            ? `Browse ${formatName.toLowerCase()} in ${specialty.name.toLowerCase()}.`
            : `Browse ${formatName.toLowerCase()} across all specialties.`,
        },
      ],
    };
  },
  component: FilteredCourses,
});

function programType(c: Course) {
  return c.program || "Certificate";
}

function FilteredCourses() {
  const { fmt: fmtSlug, specialty: specialtySlug } = useParams({
    from: "/top-medical-courses/$fmt/$specialty",
  });
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search || ""), [location.search]);

  // Intelligent parameter validation
  const isValidFormat = formatMap[fmtSlug];
  const isValidSpecialty = categories.some((c) => c.slug === specialtySlug);
  
  // If parameters are invalid, show error
  if (!isValidFormat || !isValidSpecialty) {
    return (
      <div className="container-x py-20 text-center">
        <h1 className="text-2xl font-bold text-navy-deep dark:text-white mb-4">Invalid Parameters</h1>
        <p className="text-muted-foreground mb-6">
          The format or specialty you requested could not be found.
        </p>
        <button
          onClick={() => {
            window.location = window.location.origin + "/top-medical-courses";
          }}
          className="inline-block px-6 py-2 bg-navy-deep text-white rounded-sm hover:bg-navy-deep/90"
        >
          Back to Courses
        </button>
      </div>
    );
  }

  const fmt = formatMap[fmtSlug] || "all";
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
    updateUrl({ q }); /* eslint-disable-next-line react-hooks/exhaustive-deps */
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
    () => {
      const result = allSource.filter(
        (c) =>
          (specialtySlug === "all" || (c.categories || []).includes(specialtySlug)) &&
          (fmt === "all" || programType(c) === fmt) &&
          (q.trim() === "" || (c.title || "").toLowerCase().includes(q.toLowerCase())),
      );
      return result;
    },
    [specialtySlug, fmt, q, allSource],
  );

  // CollectionPage Schema for filtered courses
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: specialty
      ? `${specialty.name} ${formatMap[fmtSlug]}`
      : `${formatMap[fmtSlug]} Courses`,
    description: specialty
      ? `Browse ${formatMap[fmtSlug].toLowerCase()} in ${specialty.name.toLowerCase()}.`
      : `Browse ${formatMap[fmtSlug].toLowerCase()} across all specialties.`,
    url: `https://dmhca.in/top-medical-courses/${fmtSlug}/${specialtySlug}`,
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
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="site-hero">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.25em] text-navy-deep dark:text-white gold-rule">
            Catalogue
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-deep dark:text-white mt-3">
            {specialty ? `${specialty.name} ${formatMap[fmtSlug].toLowerCase()}` : `[DEBUG: specialty=${specialty}, fmtSlug=${fmtSlug}, specialtySlug=${specialtySlug}]`} programs.
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Filter {specialty ? specialty.name.toLowerCase() : "medical"} {formatMap[fmtSlug].toLowerCase()} courses.
          </p>
        </div>
      </section>

      <section className="container-x py-10 text-navy-deep">
        {/* Top filter bar */}
        <div className="bg-card border border-border rounded-md p-5 mb-8 space-y-5">
          <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search courses by title…"
              className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-navy-deep"
            />
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mr-1">
                Format
              </span>
              <button
                onClick={() => {
                  window.location = window.location.origin + "/top-medical-courses/" + specialtySlug;
                }}
                className="text-xs px-3 py-1.5 rounded-sm border transition border-border text-muted-foreground hover:border-navy-deep hover:text-navy-deep"
              >
                All
              </button>
              {Object.entries(reverseFormatMap).map(([formatName, slug]) => (
                <button
                  key={slug}
                  onClick={() => {
                    window.location = window.location.origin + "/top-medical-courses/" + slug + "/" + specialtySlug;
                  }}
                  className={`text-xs px-3 py-1.5 rounded-sm border transition ${fmt === formatName ? "bg-navy-deep text-primary-foreground border-navy-deep" : "border-border text-muted-foreground hover:border-navy-deep hover:text-navy-deep"}`}
                >
                  {formatName}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2.5">
              Specialty
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  window.location = window.location.origin + "/top-medical-courses/" + fmtSlug;
                }}
                className="text-xs px-3 py-1.5 rounded-sm border transition border-border text-muted-foreground hover:border-navy-deep hover:text-navy-deep"
              >
                All specialties
              </button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => {
                    window.location = window.location.origin + "/top-medical-courses/" + fmtSlug + "/" + c.slug;
                  }}
                  className={`text-xs px-3 py-1.5 rounded-sm border transition ${c.slug === specialtySlug ? "bg-navy-deep text-primary-foreground border-navy-deep" : "border-border text-muted-foreground hover:border-navy-deep hover:text-navy-deep"}`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground mb-5">
          {filtered.length} program{filtered.length === 1 ? "" : "s"}
        </div>
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">
            No courses match — try clearing filters.{" "}
            <button
              onClick={() => {
                window.location = window.location.origin + "/top-medical-courses/" + fmtSlug + "/" + specialtySlug;
              }}
              className="text-navy-deep underline bg-transparent border-0 cursor-pointer p-0 hover:text-navy-deep"
            >
              Reset
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
