import { useMemo, type ReactNode } from "react";
import { useCoursesData } from "@/hooks/useCoursesData";
import { CourseCard } from "@/components/site/CourseCard";

export default function FeaturedPrograms({ loadingFallback }: { loadingFallback: ReactNode }) {
  const { courses, loading } = useCoursesData();
  const featured = useMemo(() => {
    const result = [...courses].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)).slice(0, 6);
    const replacementMap = [
      { find: /interventional cardiology/i, replaceWith: "Fellowship in Pediatrics" },
      { find: /pediatric rheumatology/i, replaceWith: "PG Diploma in HIV Medicine" },
      { find: /cardiothoracic surgery/i, replaceWith: "PG Diploma In Diabetology" },
      { find: /cardio oncology/i, replaceWith: "Certificate in Child Health" },
      { find: /abdominal imaging/i, replaceWith: "Fellowship in Clinical Hematology" },
    ];
    for (const { find, replaceWith } of replacementMap) {
      const idx = result.findIndex((course) => find.test(course.title));
      if (idx !== -1) {
        const replacement = courses.find((course) => course.title.includes(replaceWith));
        if (replacement) result[idx] = replacement;
      }
    }
    return result;
  }, [courses]);

  if (loading) return loadingFallback;

  return (
    <div className="home-program-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featured.map((course) => (
        <CourseCard key={course.slug} course={course} />
      ))}
    </div>
  );
}
