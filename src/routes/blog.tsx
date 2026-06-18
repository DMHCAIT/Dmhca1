import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — DMHCA" },
      { name: "description", content: "Notes from DMHCA — clinical updates, course launches, and faculty insights." },
    ],
  }),
  component: Blog,
});

const posts = [
  { slug: "choosing-a-fellowship", title: "How to choose the right fellowship for your career", date: "Mar 2026", excerpt: "Five questions to ask before committing to a year of sub-specialty training." },
  { slug: "imaging-2026", title: "Imaging trends to watch in 2026", date: "Feb 2026", excerpt: "AI co-pilots, abbreviated MRI protocols, and what they mean for the working radiologist." },
  { slug: "primary-care-diabetes", title: "Updating your primary-care diabetes playbook", date: "Jan 2026", excerpt: "Pragmatic guidance on GLP-1s, CGM, and shared decision making." },
];

function Blog() {
  return (
    <div>
      <section className="border-b border-border bg-secondary/40">
        <div className="container-x py-14">
          <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule">Journal</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-deep mt-3">Notes &amp; updates.</h1>
        </div>
      </section>
      <section className="container-x py-14 grid md:grid-cols-3 gap-8">
        {posts.map((p) => (
          <article key={p.slug} className="group">
            <div className="aspect-[5/3] rounded-md site-hero mb-5 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold">{p.date}</div>
            <h2 className="font-display text-xl text-navy-deep mt-2 group-hover:text-navy">{p.title}</h2>
            <p className="text-sm text-muted-foreground mt-2">{p.excerpt}</p>
            <Link to="/blog" className="text-sm text-navy-deep mt-3 inline-block hover:text-gold">Read →</Link>
          </article>
        ))}
      </section>
    </div>
  );
}
