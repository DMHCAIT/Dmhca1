import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Medical Blogs — DMHCA" },
      {
        name: "description",
        content: "Explore comprehensive medical blogs covering career guidance, specializations, courses, and educational resources.",
      },
    ],
  }),
  component: BlogsListing,
});

const blogsList = [
  { title: "How to Crack NEET PG", slug: "how-to-crack-neet-pg" },
  { title: "Courses After MBBS In India", slug: "courses-after-mbbs-in-india" },
  { title: "Scope of Radiology", slug: "scope-of-radiology" },
  { title: "Scope of Cardiology", slug: "scope-of-cardiology" },
  { title: "Scope of Obstetrics and Gynecology", slug: "scope-of-obstetrics-and-gynecology" },
  { title: "Scope of Cosmetology", slug: "scope-of-cosmetology" },
  { title: "Scope of Paediatrics", slug: "scope-of-paediatrics" },
  { title: "Scope of Oncology", slug: "scope-of-oncology" },
  { title: "Scope of Neurology", slug: "scope-of-neurology" },
  { title: "Scope of Echocardiography", slug: "scope-of-echocardiography" },
  { title: "Scope of Diabetology", slug: "scope-of-diabetology" },
  { title: "Scope of Endocrinology", slug: "scope-of-endocrinology" },
  { title: "How to Become a Radiologist", slug: "how-to-become-a-radiologist" },
  { title: "How to Become a Cardiologist", slug: "how-to-become-a-cardiologist" },
  { title: "How to Become a Cosmetologist", slug: "how-to-become-a-cosmetologist" },
  { title: "How to Become an Oncologist", slug: "how-to-become-an-oncologist" },
  { title: "How to Become a Neurologist", slug: "how-to-become-a-neurologist" },
  { title: "How to Become a Diabetologist", slug: "how-to-become-a-diabetologist" },
  { title: "How to Become an Endocrinologist", slug: "how-to-become-an-endocrinologist" },
  { title: "How to Become an Embryologist", slug: "how-to-become-an-embryologist" },
  { title: "How to Become a Pediatrician", slug: "how-to-become-a-pediatrician" },
  { title: "How to Become an Obstetrician-Gynecologist", slug: "how-to-become-an-obstetrician-gynecologist" },
];

function BlogsListing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="site-hero">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule">Resources</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-deep mt-3">Medical Blogs</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            Explore comprehensive articles on medical specializations, career guidance, and educational resources.
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            <span className="font-semibold text-navy-deep">{blogsList.length}</span> articles available
          </div>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container-x">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {blogsList.map((blog) => (
              <Link
                key={blog.slug}
                to={`/${blog.slug}`}
                className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-navy-deep/40 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition group"
              >
                <div>
                  <div className="text-lg font-semibold text-navy-deep dark:text-slate-100 group-hover:text-navy dark:group-hover:text-slate-50">{blog.title}</div>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-navy-deep dark:group-hover:text-slate-300 transition" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
