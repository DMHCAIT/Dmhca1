import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo } from "react";
import { courses, formatINR, getCategory } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/echocardiography-courses/")({
  head: () => ({
    meta: [
      { title: "Echocardiography Courses — DMHCA" },
      {
        name: "description",
        content: "Browse all echocardiography courses, fellowships, and certifications at DMHCA.",
      },
    ],
  }),
  component: SpecialtyCourses,
});

function SpecialtyCourses() {
  const categorySlug = "cardiology";
  const displayName = "Echocardiography";

  const filteredCourses = useMemo(() => {
    return courses.filter((c) => c.categories.includes(categorySlug));
  }, []);

  const category = useMemo(() => {
    return getCategory(categorySlug);
  }, []);

  const fellowships = useMemo(
    () => filteredCourses.filter((c) => c.program === "Fellowship"),
    []
  );
  const pgDiplomas = useMemo(
    () => filteredCourses.filter((c) => c.program === "PG Diploma"),
    []
  );
  const certificates = useMemo(
    () => filteredCourses.filter((c) => (c.program || "Certificate") === "Certificate"),
    []
  );

  return (
    <div>
      <section className="site-hero">
        <div className="container-x">
          <Link
            to="/sitemap"
            className="inline-flex items-center gap-2 text-sm text-navy-deep hover:text-navy-deep/70 mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Sitemap
          </Link>
          <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule">Specialization</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-deep mt-3">{displayName} Courses</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {category?.tagline || `Explore all ${displayName.toLowerCase()} programs offered at DMHCA.`}
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-navy-deep">{filteredCourses.length}</span> courses available
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-x">
          {fellowships.length > 0 && (
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="font-display text-3xl text-navy-deep mb-2">Fellowships</h2>
                <p className="text-muted-foreground">Advanced specialization programs ({fellowships.length})</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {fellowships.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>
          )}

          {pgDiplomas.length > 0 && (
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="font-display text-3xl text-navy-deep mb-2">PG Diplomas</h2>
                <p className="text-muted-foreground">Postgraduate diploma programs ({pgDiplomas.length})</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {pgDiplomas.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>
          )}

          {certificates.length > 0 && (
            <div className="mb-16">
              <div className="mb-8">
                <h2 className="font-display text-3xl text-navy-deep mb-2">Certificates</h2>
                <p className="text-muted-foreground">Professional certification programs ({certificates.length})</p>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {certificates.map((course) => (
                  <CourseCard key={course.slug} course={course} />
                ))}
              </div>
            </div>
          )}

          {filteredCourses.length === 0 && (
            <div className="py-16 text-center">
              <h3 className="text-xl font-semibold text-navy-deep mb-2">No Courses Found</h3>
              <p className="text-muted-foreground mb-6">
                We don't currently have courses in {displayName.toLowerCase()}.
              </p>
              <Link to="/top-medical-courses" className="inline-flex items-center justify-center px-5 py-2.5 bg-navy-deep text-primary-foreground rounded-lg hover:bg-navy-deep/90 transition">
                View All Courses
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
