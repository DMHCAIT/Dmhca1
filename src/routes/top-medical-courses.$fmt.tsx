import { createFileRoute, Outlet, useLocation, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CourseCatalogue } from "@/components/site/CourseCatalogue";
import { categories, type Course, courses } from "@/data/courses";
import { fetchCoursesFromSupabase } from "@/lib/courses-remote";

const formatMap: Record<string, string> = {
  certificates: "Certificate",
  "pg-diplomas": "PG Diploma",
  fellowships: "Fellowship",
};

export const Route = createFileRoute("/top-medical-courses/$fmt")({
  head: ({ params }) => {
    const formatName = formatMap[params.fmt];
    const specialty = categories.find((category) => category.slug === params.fmt);
    const title = specialty
      ? `${specialty.name} Courses — DMHCA`
      : `${formatName || "Courses"} — DMHCA`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: specialty
            ? `Browse all ${specialty.name.toLowerCase()} courses across all formats.`
            : `Browse ${(formatName || "medical courses").toLowerCase()} across every medical specialty.`,
        },
      ],
    };
  },
  component: FilteredCourses,
});

function programType(course: Course) {
  return course.program || "Certificate";
}

function FilteredCourses() {
  const { fmt: segment } = useParams({ from: "/top-medical-courses/$fmt" });
  const location = useLocation();
  const isFormat = Boolean(formatMap[segment]);
  const isSpecialty = categories.some((category) => category.slug === segment);
  const segments = location.pathname.split("/").filter(Boolean);
  const hasCombinedFilter =
    isFormat && segments.length > 2 && categories.some((category) => category.slug === segments[2]);

  if (hasCombinedFilter) return <Outlet />;
  if (isFormat || isSpecialty) {
    return (
      <CataloguePage
        formatSlug={isFormat ? segment : undefined}
        specialtySlug={isSpecialty ? segment : undefined}
      />
    );
  }

  return (
    <div className="container-x py-20 text-center">
      <h1 className="mb-4 text-4xl font-bold text-slate-900">404</h1>
      <p className="mb-8 text-slate-600">Invalid course format or specialty</p>
      <a href="/top-medical-courses" className="text-navy-deep underline">
        Back to all courses
      </a>
    </div>
  );
}

function CataloguePage({
  formatSlug,
  specialtySlug,
}: {
  formatSlug?: string;
  specialtySlug?: string;
}) {
  const format = formatSlug ? formatMap[formatSlug] : "all";
  const specialty = categories.find((category) => category.slug === specialtySlug);
  const selectedSpecialty = specialtySlug || "all";
  const [remoteCourses, setRemoteCourses] = useState<Course[] | null>(null);
  const [search, setSearch] = useState<string>(() => {
    try {
      return new URLSearchParams(window.location.search).get("q") || "";
    } catch {
      return "";
    }
  });

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const remote = await fetchCoursesFromSupabase();
        if (mounted && remote && Array.isArray(remote) && remote.length > 0) {
          setRemoteCourses(remote as Course[]);
        }
      } catch (error) {
        console.warn("Failed to load remote courses", error);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (search) url.searchParams.set("q", search);
    else url.searchParams.delete("q");
    window.history.replaceState({}, "", url.pathname + url.search);
  }, [search]);

  const allCourses = remoteCourses || (courses as Course[]);
  const filteredCourses = useMemo(
    () =>
      allCourses.filter(
        (course) =>
          (!specialtySlug || (course.categories || []).includes(specialtySlug)) &&
          (format === "all" || programType(course) === format) &&
          (search.trim() === "" ||
            (course.title || "").toLowerCase().includes(search.toLowerCase())),
      ),
    [allCourses, format, search, specialtySlug],
  );

  const basePath = formatSlug
    ? `/top-medical-courses/${formatSlug}`
    : specialtySlug
      ? `/top-medical-courses/${specialtySlug}`
      : "/top-medical-courses";
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: specialty ? `${specialty.name} Courses` : `${format} Courses`,
    description: specialty
      ? `Browse all ${specialty.name.toLowerCase()} courses across all formats.`
      : `Browse ${format.toLowerCase()} across every medical specialty.`,
    url: `https://www.dmhca.in${basePath}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filteredCourses.slice(0, 50).map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.dmhca.in/courses/${course.slug}`,
        name: course.title,
      })),
    },
  };

  const title = specialty
    ? `${specialty.name} programs.`
    : `${formatMap[formatSlug || ""]} programs.`;
  const description = specialty
    ? `Filter ${specialty.name.toLowerCase()} courses across all formats — Certificate, PG Diploma, and Fellowship.`
    : `Filter ${format.toLowerCase()} across ${categories.length} specialties.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <CourseCatalogue
        title={title}
        description={description}
        courses={filteredCourses}
        selectedFormat={formatSlug || "all"}
        selectedSpecialty={selectedSpecialty}
        search={search}
        onSearchChange={setSearch}
        formatHref={(slug) => {
          if (slug === "all")
            return specialtySlug ? `/top-medical-courses/${specialtySlug}` : "/top-medical-courses";
          return specialtySlug
            ? `/top-medical-courses/${slug}/${specialtySlug}`
            : `/top-medical-courses/${slug}`;
        }}
        specialtyHref={(slug) => {
          if (slug === "all")
            return formatSlug ? `/top-medical-courses/${formatSlug}` : "/top-medical-courses";
          return formatSlug
            ? `/top-medical-courses/${formatSlug}/${slug}`
            : `/top-medical-courses/${slug}`;
        }}
        resetHref={basePath}
      />
    </>
  );
}
