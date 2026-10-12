import { createFileRoute, Link } from "@tanstack/react-router";
import {
  courses,
  fellowships,
  pgDiplomas,
  certificates,
  formatINR,
  categories,
} from "@/data/courses";
import { cityWiseCourses, getAllSpecialties } from "@/data/cityWiseCourses";
import { events } from "@/data/events";
import { BookOpen, ChevronRight } from "lucide-react";
import { useMemo } from "react";
import { ResourceHero } from "@/components/site/ResourceHero";

export const Route = createFileRoute("/sitemap/")({
  head: () => ({
    meta: [
      { title: "Sitemap — DMHCA" },
      {
        name: "description",
        content:
          "Browse all medical courses, fellowships, PG diplomas, and certificates offered by DMHCA.",
      },
    ],
  }),
  component: Sitemap,
});

function Sitemap() {
  const specialties = getAllSpecialties();

  // Group courses by specialty
  const coursesBySpecialty = useMemo(() => {
    const grouped: Record<string, typeof cityWiseCourses> = {};
    specialties.forEach((specialty) => {
      grouped[specialty] = cityWiseCourses.filter((course) => course.specialty === specialty);
    });
    return grouped;
  }, [specialties]);

  // Get unique categories from courses
  const categoriesWithCourses = useMemo(() => {
    return categories
      .map((category) => ({
        ...category,
        courseCount: courses.filter((c) => c.categories.includes(category.slug)).length,
      }))
      .filter((c) => c.courseCount > 0);
  }, []);

  return (
    <div className="home-page resource-page resource-sitemap-page min-h-screen">
      {/* Hero Section */}
      <ResourceHero
        eyebrow="Find your way"
        title="Sitemap"
        description="Explore all medical programs, specialties, and resources available at DMHCA."
      />

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-x space-y-16">
          {/* Original List Of Medical Courses */}
          <div className="mt-12 pt-12 border-t border-[#29334a]/15">
            <h2 className="font-display text-3xl text-navy-deep mb-8">List Of Medical Courses</h2>

            {/* Fellowships */}
            <div className="mb-12">
              <h3 className="font-display text-2xl text-navy-deep mb-4">Fellowship</h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {fellowships.map((course) => (
                  <Link
                    key={course.slug}
                    to="/courses/$slug"
                    params={{ slug: course.slug }}
                    className="flex items-start justify-between p-3 border border-[#29334a]/15 rounded-md hover:bg-[#f8f9fc] transition group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-navy-deep group-hover:text-navy line-clamp-2">
                        {course.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {formatINR(course.priceINR)}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#6b5b68] group-hover:text-navy-deep transition flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>

            {/* PG Diplomas */}
            <div className="mb-12">
              <h3 className="font-display text-2xl text-navy-deep mb-4">PG Diploma</h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {pgDiplomas.map((course) => (
                  <Link
                    key={course.slug}
                    to="/courses/$slug"
                    params={{ slug: course.slug }}
                    className="flex items-start justify-between p-3 border border-[#29334a]/15 rounded-md hover:bg-[#f8f9fc] transition group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-navy-deep group-hover:text-navy line-clamp-2">
                        {course.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {formatINR(course.priceINR)}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#6b5b68] group-hover:text-navy-deep transition flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="font-display text-2xl text-navy-deep mb-4">Certificate</h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {certificates.map((course) => (
                  <Link
                    key={course.slug}
                    to="/courses/$slug"
                    params={{ slug: course.slug }}
                    className="flex items-start justify-between p-3 border border-[#29334a]/15 rounded-md hover:bg-[#f8f9fc] transition group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-navy-deep group-hover:text-navy line-clamp-2">
                        {course.title}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {formatINR(course.priceINR)}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#6b5b68] group-hover:text-navy-deep transition flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* List Of Medical Courses City Wise */}
          <div>
            <h2 className="font-display text-3xl text-navy-deep mb-8">
              List of Medical Courses City Wise
            </h2>

            {/* City-Wise Courses by Specialty */}
            <div className="space-y-12">
              {specialties.map((specialty) => (
                <div key={specialty}>
                  <h3 className="font-display text-2xl text-navy-deep mb-4 capitalize">
                    {specialty} Courses by City
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {coursesBySpecialty[specialty].map((course) => (
                      <Link
                        key={course.slug}
                        to={`/${course.slug}/`}
                        className="flex items-start justify-between p-3 border border-[#29334a]/15 rounded-md hover:bg-[#f8f9fc] transition group"
                      >
                        <div className="flex-1">
                          <div className="font-medium text-navy-deep group-hover:text-navy">
                            {specialty} in {course.city}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1 line-clamp-1">
                            {course.description}
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#6b5b68] group-hover:text-navy-deep transition flex-shrink-0 ml-2" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Course Categories removed per request (Medical Specializations) */}

            {/* Extra curated city links removed to simplify markup; city-wise lists are generated above from data */}
          </div>

          {/* Blogs Section */}
          <div>
            <h2 className="font-display text-3xl text-navy-deep mb-8">Blogs</h2>
            <div className="space-y-6">
              {/* Featured View All Blogs Card */}
              <Link
                to="/blog/"
                className="flex items-center justify-between p-6 border-2 border-gold/50 rounded-lg hover:bg-gold/10 transition group bg-gradient-to-r from-gold/5 to-transparent"
              >
                <div>
                  <div className="text-xl font-bold text-navy-deep group-hover:text-navy">
                    <BookOpen
                      className="mr-2 inline-block h-5 w-5 text-[#800020]"
                      aria-hidden="true"
                    />{" "}
                    View All Blogs
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Explore all 22 medical articles on specializations, career guidance & education
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-gold group-hover:text-navy-deep transition flex-shrink-0" />
              </Link>

              {/* Blog Cards Grid */}
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    to: "/ayush-hybrid-programs",
                    title: "AYUSH Hybrid Programs",
                    category: "Career Path",
                  },
                  {
                    to: "/how-to-crack-neet-pg",
                    title: "How to Crack NEET PG",
                    category: "Exam Prep",
                  },
                  {
                    to: "/courses-after-mbbs-in-india",
                    title: "Courses After MBBS",
                    category: "Pathways",
                  },
                  {
                    to: "/scope-of-cardiology",
                    title: "Scope of Cardiology",
                    category: "Specialty",
                  },
                  {
                    to: "/scope-of-obstetrics-and-gynecology",
                    title: "Scope of OB-GYN",
                    category: "Specialty",
                  },
                  {
                    to: "/scope-of-cosmetology",
                    title: "Scope of Cosmetology",
                    category: "Specialty",
                  },
                  {
                    to: "/scope-of-paediatrics",
                    title: "Scope of Paediatrics",
                    category: "Specialty",
                  },
                  { to: "/scope-of-oncology", title: "Scope of Oncology", category: "Specialty" },
                  { to: "/scope-of-neurology", title: "Scope of Neurology", category: "Specialty" },
                  {
                    to: "/scope-of-echocardiography",
                    title: "Scope of Echocardiography",
                    category: "Specialty",
                  },
                  {
                    to: "/scope-of-diabetology",
                    title: "Scope of Diabetology",
                    category: "Specialty",
                  },
                  {
                    to: "/scope-of-endocrinology",
                    title: "Scope of Endocrinology",
                    category: "Specialty",
                  },
                  {
                    to: "/how-to-become-a-radiologist",
                    title: "Become a Radiologist",
                    category: "Career Path",
                  },
                  {
                    to: "/how-to-become-a-cardiologist",
                    title: "Become a Cardiologist",
                    category: "Career Path",
                  },
                  {
                    to: "/how-to-become-a-cosmetologist",
                    title: "Become a Cosmetologist",
                    category: "Career Path",
                  },
                  {
                    to: "/how-to-become-an-oncologist",
                    title: "Become an Oncologist",
                    category: "Career Path",
                  },
                  {
                    to: "/how-to-become-a-neurologist",
                    title: "Become a Neurologist",
                    category: "Career Path",
                  },
                  {
                    to: "/how-to-become-a-diabetologist",
                    title: "Become a Diabetologist",
                    category: "Career Path",
                  },
                  {
                    to: "/how-to-become-an-endocrinologist",
                    title: "Become an Endocrinologist",
                    category: "Career Path",
                  },
                  {
                    to: "/how-to-become-an-embryologist",
                    title: "Become an Embryologist",
                    category: "Career Path",
                  },
                  {
                    to: "/how-to-become-a-pediatrician",
                    title: "Become a Pediatrician",
                    category: "Career Path",
                  },
                  {
                    to: "/how-to-become-an-obstetrician-gynecologist",
                    title: "Become an OB-GYN",
                    category: "Career Path",
                  },
                ].map((blog) => (
                  <Link
                    key={blog.to}
                    to={blog.to}
                    className="flex items-start justify-between p-4 border border-[#29334a]/15 rounded-lg hover:bg-gold/5 transition group"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-navy-deep group-hover:text-navy line-clamp-2">
                        {blog.title}
                      </div>
                      <div className="text-xs text-gold mt-2 font-medium">{blog.category}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#6b5b68] group-hover:text-gold transition flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
