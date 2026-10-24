import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { ResourceHero } from "@/components/site/ResourceHero";
import { blogsList } from "@/data/blogs";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Medical Blogs — DMHCA" },
      {
        name: "description",
        content:
          "Explore comprehensive medical blogs covering career guidance, specializations, courses, and educational resources.",
      },
    ],
  }),
  component: BlogsListing,
});

const blogImages: Record<string, string> = {
  "ayush-hybrid-programs": "ayush_doctor_blog.webp",
  "how-to-crack-neet-pg": "How-to-Crack-NEET-PG.webp",
  "courses-after-mbbs-in-india": "Courses-After-MBBS-in-India.webp",
  "scope-of-cardiology": "Scope-of-Cardiology.webp",
  "scope-of-obstetrics-and-gynecology": "Scope-of-Obstetrics-and-Gynecology.webp",
  "scope-of-cosmetology": "Scope-of-Cosmetology.webp",
  "scope-of-paediatrics": "Scope-of-Paediatrics.webp",
  "scope-of-oncology": "Scope-of-Oncology.webp",
  "scope-of-neurology": "Scope-of-Neurology.webp",
  "scope-of-echocardiography": "Scope-of-Echocardiography.webp",
  "scope-of-diabetology": "Scope-of-Diabetology.webp",
  "scope-of-endocrinology": "Scope-of-Endocrinology.webp",
  "how-to-become-a-radiologist": "How-to-Become-a-Radiologist.webp",
  "how-to-become-a-cardiologist": "How-to-Become-a-Cardiologist.webp",
  "how-to-become-a-cosmetologist": "How-to-Become-a-Cosmetologist.webp",
  "how-to-become-an-oncologist": "How-to-Become-an-Oncologist.webp",
  "how-to-become-a-neurologist": "How-to-Become-a-Neurologist.webp",
  "how-to-become-a-diabetologist": "How-to-Become-a-Diabetologist.webp",
  "how-to-become-an-endocrinologist": "How-to-Become-an-Endocrinologist.webp",
  "how-to-become-an-embryologist": "How-to-Become-an-Embryologist.webp",
  "how-to-become-a-pediatrician": "How-to-Become-a-Pediatrician.webp",
  "how-to-become-an-obstetrician-gynecologist": "How-to-Become-an-Obstetrician-Gynecologist.webp",
};

function BlogsListing() {
  return (
    <div className="home-page resource-page resource-blogs-page min-h-screen">
      {/* Hero Section */}
      <ResourceHero
        eyebrow="Insights for your medical career"
        title="Medical Blogs"
        description="Explore comprehensive articles on medical specializations, career guidance, and educational resources."
      >
        <div className="mt-6 text-sm text-muted-foreground">
          <span className="font-semibold text-navy-deep">{blogsList.length}</span> articles
          available
        </div>
      </ResourceHero>

      {/* Blogs Grid */}
      <section className="py-16 bg-white">
        <div className="container-x">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogsList.map((blog) => (
              <Link
                key={blog.slug}
                to={`/blog/${blog.slug}`}
                className="resource-card group flex flex-col overflow-hidden rounded-2xl border border-border bg-white transition hover:-translate-y-1"
              >
                <div className="aspect-[2/1] overflow-hidden bg-[#f8f9fc]">
                  <img
                    src={`/blog-images/${blogImages[blog.slug]}`}
                    alt={blog.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="mb-3 text-sm font-medium text-[#800020]">
                    {blog.slug.startsWith("scope-of-") ? "Medical specialties" : "Career guidance"}
                  </span>
                  <h2
                    title={blog.title}
                    className="mb-5 font-display text-xl font-semibold text-navy-deep group-hover:text-[#800020]"
                  >
                    {blog.title}
                  </h2>
                  <div className="mt-auto flex items-center justify-between border-t border-border pt-3 text-sm font-medium text-[#800020]">
                    Read article
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
