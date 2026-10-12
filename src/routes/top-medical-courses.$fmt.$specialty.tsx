import { createFileRoute, notFound, useParams } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CourseCatalogue } from "@/components/site/CourseCatalogue";
import { categories, type Course, courses } from "@/data/courses";
import { fetchCoursesFromSupabase } from "@/lib/courses-remote";

const formatMap: Record<string, string> = {
  certificates: "Certificate",
  "pg-diplomas": "PG Diploma",
  fellowships: "Fellowship",
};

export const Route = createFileRoute("/top-medical-courses/$fmt/$specialty")({
  beforeLoad: ({ params }) => {
    if (
      !formatMap[params.fmt] ||
      !categories.some((category) => category.slug === params.specialty)
    ) {
      throw notFound();
    }
  },
  head: ({ params }) => {
    const formatName = formatMap[params.fmt] || "Courses";
    const specialty = categories.find((category) => category.slug === params.specialty);
    const title = specialty ? `${specialty.name} ${formatName} — DMHCA` : `${formatName} — DMHCA`;
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

function programType(course: Course) {
  return course.program || "Certificate";
}

function FilteredCourses() {
  const { fmt: formatSlug, specialty: specialtySlug } = useParams({
    from: "/top-medical-courses/$fmt/$specialty",
  });
  const format = formatMap[formatSlug];
  const specialty = categories.find((category) => category.slug === specialtySlug);
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
          (course.categories || []).includes(specialtySlug) &&
          programType(course) === format &&
          (search.trim() === "" ||
            (course.title || "").toLowerCase().includes(search.toLowerCase())),
      ),
    [allCourses, format, search, specialtySlug],
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${specialty?.name || "Medical"} ${format}`,
    description: `Browse ${format.toLowerCase()} in ${specialty?.name.toLowerCase() || "all specialties"}.`,
    url: `https://dmhca.in/top-medical-courses/${formatSlug}/${specialtySlug}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filteredCourses.slice(0, 50).map((course, index) => ({
        "@type": "ListItem",
        position: index + 1,
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
        title={`${specialty?.name || "Medical"} ${format.toLowerCase()} programs.`}
        description={`Filter ${specialty?.name.toLowerCase() || "medical"} ${format.toLowerCase()} courses.`}
        courses={filteredCourses}
        selectedFormat={formatSlug}
        selectedSpecialty={specialtySlug}
        search={search}
        onSearchChange={setSearch}
        formatHref={(slug) =>
          slug === "all"
            ? `/top-medical-courses/${specialtySlug}`
            : `/top-medical-courses/${slug}/${specialtySlug}`
        }
        specialtyHref={(slug) =>
          slug === "all"
            ? `/top-medical-courses/${formatSlug}`
            : `/top-medical-courses/${formatSlug}/${slug}`
        }
        resetHref={`/top-medical-courses/${formatSlug}/${specialtySlug}`}
      />
    </>
  );
}
