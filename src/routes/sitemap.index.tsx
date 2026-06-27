import { createFileRoute, Link } from "@tanstack/react-router";
import { courses, fellowships, pgDiplomas, certificates, formatINR } from "@/data/courses";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/sitemap/")({
  head: () => ({
    meta: [
      { title: "Sitemap — DMHCA" },
      { name: "description", content: "Browse all medical courses, fellowships, PG diplomas, and certificates offered by DMHCA." },
    ],
  }),
  component: Sitemap,
});

function Sitemap() {
  // Top Medical Courses - Specialty Pages (matching old website structure)
  const topMedicalCourses = [
    { name: "Radiology Courses", slug: "radiology-courses" },
    { name: "Cardiology Courses", slug: "cardiology-courses" },
    { name: "Internal Medicine Courses", slug: "internal-medicine-courses" },
    { name: "Obstetrics and Gynecology Courses", slug: "obstetrics-and-gynecology-courses" },
    { name: "Critical Care Medicine Courses", slug: "critical-care-medicine-courses" },
    { name: "Paediatrics Courses", slug: "paediatrics-courses" },
    { name: "Embryology Courses", slug: "embryology-courses" },
    { name: "Oncology Courses", slug: "oncology-courses" },
    { name: "Cosmetology Courses", slug: "cosmetology-courses" },
    { name: "Clinical Cardiology Courses", slug: "clinical-cardiology-courses" },
    { name: "Clinical Embryology Courses", slug: "clinical-embryology-courses" },
    { name: "Neurology Courses", slug: "neurology-courses" },
    { name: "Echocardiography Courses", slug: "echocardiography-courses" },
    { name: "Endocrinology Courses", slug: "endocrinology-courses" },
    { name: "Diabetology Courses", slug: "diabetology-courses" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="site-hero">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule">Navigation</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-deep mt-3">Sitemap</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Explore all medical programs, specialties, and resources available at DMHCA.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container-x space-y-16">
          {/* Top Medical Courses - Specialty Pages */}
          <div>
            <h2 className="font-display text-3xl text-navy-deep mb-8">Top Medical Courses</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
              {topMedicalCourses.map((specialty) => (
                <Link
                  key={specialty.slug}
                  to={`/${specialty.slug}/`}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:border-navy-deep/40 hover:bg-slate-50 transition group"
                >
                  <div>
                    <div className="text-lg font-semibold text-navy-deep group-hover:text-navy">{specialty.name}</div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-navy-deep transition" />
                </Link>
              ))}
            </div>
          </div>

          {/* List Of Medical Courses */}
          <div>
            <h2 className="font-display text-3xl text-navy-deep mb-8">List Of Medical Courses</h2>
            
            {/* Fellowships */}
            <div className="mb-12">
              <h3 className="font-display text-2xl text-navy-deep mb-4">Fellowship</h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {fellowships.map(course => (
                  <Link
                    key={course.slug}
                    to="/courses/$slug"
                    params={{ slug: course.slug }}
                    className="flex items-start justify-between p-3 border border-slate-200 rounded-md hover:border-navy-deep/40 hover:bg-slate-50 transition group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-navy-deep group-hover:text-navy line-clamp-2">{course.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{formatINR(course.priceINR)}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-navy-deep transition flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>

            {/* PG Diplomas */}
            <div className="mb-12">
              <h3 className="font-display text-2xl text-navy-deep mb-4">PG Diploma</h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {pgDiplomas.map(course => (
                  <Link
                    key={course.slug}
                    to="/courses/$slug"
                    params={{ slug: course.slug }}
                    className="flex items-start justify-between p-3 border border-slate-200 rounded-md hover:border-navy-deep/40 hover:bg-slate-50 transition group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-navy-deep group-hover:text-navy line-clamp-2">{course.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{formatINR(course.priceINR)}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-navy-deep transition flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Certificates */}
            <div>
              <h3 className="font-display text-2xl text-navy-deep mb-4">Certificate</h3>
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {certificates.map(course => (
                  <Link
                    key={course.slug}
                    to="/courses/$slug"
                    params={{ slug: course.slug }}
                    className="flex items-start justify-between p-3 border border-slate-200 rounded-md hover:border-navy-deep/40 hover:bg-slate-50 transition group"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-navy-deep group-hover:text-navy line-clamp-2">{course.title}</div>
                      <div className="text-xs text-muted-foreground mt-1">{formatINR(course.priceINR)}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-navy-deep transition flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Blogs Section */}
          <div>
            <h2 className="font-display text-3xl text-navy-deep mb-8">Blogs</h2>
            <div className="space-y-6">
              {/* Featured View All Blogs Card */}
              <Link
                to="/blog/"
                className="flex items-center justify-between p-6 border-2 border-gold/50 rounded-lg hover:border-gold hover:bg-gold/10 transition group bg-gradient-to-r from-gold/5 to-transparent"
              >
                <div>
                  <div className="text-xl font-bold text-navy-deep group-hover:text-navy">📚 View All Blogs</div>
                  <div className="text-sm text-muted-foreground mt-1">Explore all 22 medical articles on specializations, career guidance & education</div>
                </div>
                <ChevronRight className="w-6 h-6 text-gold group-hover:text-navy-deep transition flex-shrink-0" />
              </Link>

              {/* Blog Cards Grid */}
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                {[
                  { to: "/how-to-crack-neet-pg", title: "How to Crack NEET PG", category: "Exam Prep" },
                  { to: "/courses-after-mbbs-in-india", title: "Courses After MBBS", category: "Pathways" },
                  { to: "/scope-of-radiology", title: "Scope of Radiology", category: "Specialty" },
                  { to: "/scope-of-cardiology", title: "Scope of Cardiology", category: "Specialty" },
                  { to: "/scope-of-obstetrics-and-gynecology", title: "Scope of OB-GYN", category: "Specialty" },
                  { to: "/scope-of-cosmetology", title: "Scope of Cosmetology", category: "Specialty" },
                  { to: "/scope-of-paediatrics", title: "Scope of Paediatrics", category: "Specialty" },
                  { to: "/scope-of-oncology", title: "Scope of Oncology", category: "Specialty" },
                  { to: "/scope-of-neurology", title: "Scope of Neurology", category: "Specialty" },
                  { to: "/scope-of-echocardiography", title: "Scope of Echocardiography", category: "Specialty" },
                  { to: "/scope-of-diabetology", title: "Scope of Diabetology", category: "Specialty" },
                  { to: "/scope-of-endocrinology", title: "Scope of Endocrinology", category: "Specialty" },
                  { to: "/how-to-become-a-radiologist", title: "Become a Radiologist", category: "Career Path" },
                  { to: "/how-to-become-a-cardiologist", title: "Become a Cardiologist", category: "Career Path" },
                  { to: "/how-to-become-a-cosmetologist", title: "Become a Cosmetologist", category: "Career Path" },
                  { to: "/how-to-become-an-oncologist", title: "Become an Oncologist", category: "Career Path" },
                  { to: "/how-to-become-a-neurologist", title: "Become a Neurologist", category: "Career Path" },
                  { to: "/how-to-become-a-diabetologist", title: "Become a Diabetologist", category: "Career Path" },
                  { to: "/how-to-become-an-endocrinologist", title: "Become an Endocrinologist", category: "Career Path" },
                  { to: "/how-to-become-an-embryologist", title: "Become an Embryologist", category: "Career Path" },
                  { to: "/how-to-become-a-pediatrician", title: "Become a Pediatrician", category: "Career Path" },
                  { to: "/how-to-become-an-obstetrician-gynecologist", title: "Become an OB-GYN", category: "Career Path" },
                ].map((blog) => (
                  <Link
                    key={blog.to}
                    to={blog.to}
                    className="flex items-start justify-between p-4 border border-slate-200 rounded-lg hover:border-gold hover:bg-gold/5 transition group"
                  >
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-navy-deep group-hover:text-navy line-clamp-2">{blog.title}</div>
                      <div className="text-xs text-gold mt-2 font-medium">{blog.category}</div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-gold transition flex-shrink-0 ml-2" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Statistics */}
          <div className="bg-slate-50 rounded-xl p-8 border border-slate-200">
            <h2 className="font-display text-2xl text-navy-deep mb-6">Program Overview</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <div className="text-4xl font-black text-gold">{courses.length}+</div>
                <div className="text-sm text-muted-foreground mt-2">Total Programs</div>
              </div>
              <div>
                <div className="text-4xl font-black text-navy-deep">{fellowships.length}</div>
                <div className="text-sm text-muted-foreground mt-2">Fellowships</div>
              </div>
              <div>
                <div className="text-4xl font-black text-navy-deep">{pgDiplomas.length + certificates.length}</div>
                <div className="text-sm text-muted-foreground mt-2">Diplomas & Certificates</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-navy-deep text-primary-foreground rounded-lg py-3 px-6 md:py-4 md:px-10 max-w-4xl mx-auto">
            <h2 className="font-display text-lg mb-3">Quick Links</h2>
            <div className="grid grid-cols-3 gap-y-4 gap-x-8 items-start">
              <div className="">
                <Link to="/" className="text-primary-foreground hover:text-gold transition text-base">Home</Link>
              </div>
              <div>
                <Link to="/simple-event" className="text-primary-foreground hover:text-gold transition text-base">Events</Link>
              </div>
              <div>
                <Link to="/about-dmhca" className="text-primary-foreground hover:text-gold transition text-base">About Us</Link>
              </div>
              <div>
                <Link to="/blog/" className="text-primary-foreground hover:text-gold transition text-base">Blogs</Link>
              </div>
              <div>
                <Link to="/top-medical-courses" className="text-primary-foreground hover:text-gold transition text-base">All Courses</Link>
              </div>
              <div>
                <Link to="/contact-us" className="text-primary-foreground hover:text-gold transition text-base">Contact</Link>
              </div>
            </div>
            </div>
        </div>
      </section>
    </div>
  );
}
