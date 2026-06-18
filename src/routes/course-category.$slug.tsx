import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getCategory, coursesByCategory, categories } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";

export const Route = createFileRoute("/course-category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, courses: coursesByCategory(params.slug) };
  },
  head: ({ loaderData }) => ({
    meta: loaderData ? [
      { title: `${loaderData.category.name} Courses — DMHCA` },
      { name: "description", content: loaderData.category.tagline },
    ] : [],
  }),
  notFoundComponent: () => (
    <div className="container-x py-24 text-center">
      <h1 className="font-display text-3xl text-navy-deep">Category not found</h1>
      <Link to="/top-medical-courses" className="text-navy-deep underline mt-4 inline-block">All categories</Link>
    </div>
  ),
  component: CategoryPage,
});

function CategoryPage() {
  const { category, courses: list } = Route.useLoaderData();
  return (
    <div>
      <section className="bg-navy-deep text-primary-foreground">
        <div className="container-x py-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Specialty</div>
          <h1 className="font-display text-4xl md:text-5xl mt-3">{category.name}</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">{category.tagline}</p>
        </div>
      </section>

      <section className="container-x py-14 grid lg:grid-cols-4 gap-10">
        <aside className="lg:col-span-1">
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-3">Browse specialties</div>
          <ul className="space-y-1.5">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to="/course-category/$slug" params={{ slug: c.slug }}
                  className={`text-sm ${c.slug===category.slug ? "text-navy-deep font-medium" : "text-muted-foreground hover:text-navy-deep"}`}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
        <div className="lg:col-span-3">
          <div className="text-xs text-muted-foreground mb-5">{list.length} program{list.length===1?"":"s"} in {category.name}</div>
          {list.length === 0 ? (
            <div className="py-12 text-muted-foreground">New programs are being added in this specialty. <Link to="/contact-us" className="text-navy-deep underline">Get notified</Link>.</div>
          ) : (
            <div className="grid sm:grid-cols-2 gap-6">
              {list.map((c: typeof list[number]) => <CourseCard key={c.slug} course={c} />)}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
