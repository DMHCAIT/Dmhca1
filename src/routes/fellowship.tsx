import { createFileRoute } from "@tanstack/react-router";
import { courses } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";

export const Route = createFileRoute("/fellowship")({
  head: () => ({
    meta: [
      { title: "Fellowship Programs — DMHCA" },
      { name: "description", content: "Advanced clinical fellowships at DMHCA across radiology, cardiology, pulmonology, surgery, and more." },
    ],
  }),
  component: Fellowship,
});

function Fellowship() {
  const fellowships = courses.filter((c) => c.program === "Fellowship");
  return (
    <div>
      <section className="bg-navy-deep text-primary-foreground">
        <div className="container-x py-16">
          <div className="text-xs uppercase tracking-[0.25em] text-gold">Fellowships</div>
          <h1 className="font-display text-4xl md:text-5xl mt-3 max-w-3xl">Advanced clinical fellowships for sub-specialty expertise.</h1>
          <p className="mt-4 max-w-2xl text-primary-foreground/75">A year of structured, case-based mentorship from senior consultants — designed for postgraduates ready to deepen their practice.</p>
        </div>
      </section>
      <section className="container-x py-14">
        <div className="text-xs text-muted-foreground mb-5">{fellowships.length} fellowship programs</div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fellowships.map((c) => <CourseCard key={c.slug} course={c} />)}
        </div>
      </section>
    </div>
  );
}
