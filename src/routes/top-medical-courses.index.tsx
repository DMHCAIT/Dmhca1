import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { categories, courses, type Course } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";
import { useEffect } from "react";

export const Route = createFileRoute("/top-medical-courses/")({
  head: () => ({
    meta: [
      { title: "All Courses — DMHCA" },
      { name: "description", content: "Browse fellowships, PG diplomas, and certificate courses across every medical specialty." },
    ],
  }),
  component: AllCourses,
});

function programType(c: Course) {
  return c.program || "Certificate";
}

function AllCourses() {
  const location = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(location.search || ''), [location.search]);
  const cat = useMemo(() => {
    try {
      const p = searchParams.get('cat');
      if (p) {
        const slug = p.toLowerCase();
        if (categories.some(c => c.slug === slug)) return slug;
      }
    } catch (e) {}
    return 'all';
  }, [searchParams]);
  const [fmt, setFmt] = useState<string>("all");
  // Initialize fmt from URL (so external links like ?fmt=Fellowship work)
  useEffect(() => {
    try {
      const p = new URLSearchParams(location.search || '').get('fmt');
      if (p) setFmt(p);
    } catch (e) {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);
  const [q, setQ] = useState<string>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('q') || '';
    } catch (e) { return ''; }
  });

  // Keep URL syncronization on mount (no-op if already present)
  useEffect(() => { updateUrl({ cat, q }); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, []);

  // Keep URL in sync when filters change (so links are shareable)
  function updateUrl(params: { cat?: string; fmt?: string; q?: string }) {
    const u = new URL(window.location.href);
    const s = u.searchParams;
    if (params.cat !== undefined) {
      if (params.cat === 'all' || !params.cat) s.delete('cat'); else s.set('cat', params.cat);
    }
    if (params.fmt !== undefined) {
      if (params.fmt === 'all' || !params.fmt) s.delete('fmt'); else s.set('fmt', params.fmt);
    }
    if (params.q !== undefined) {
      if (!params.q) s.delete('q'); else s.set('q', params.q);
    }
    const newUrl = u.pathname + (s.toString() ? `?${s.toString()}` : '');
    window.history.replaceState({}, '', newUrl);
  }

  const filtered = useMemo(() => courses.filter((c) =>
    (cat === "all" || c.categories.includes(cat)) &&
    (fmt === "all" || programType(c) === fmt) &&
    (q.trim() === "" || c.title.toLowerCase().includes(q.toLowerCase()))
  ), [cat, fmt, q]);

  return (
    <div>
      <section className="site-hero">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule">Catalogue</div>
          <h1 className="font-display text-4xl md:text-5xl text-navy-deep mt-3">All programs.</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Filter across {categories.length} specialties and three program formats — Certificate, PG Diploma, and Fellowship.</p>
        </div>
      </section>

      <section className="container-x py-10 text-navy-deep">
        {/* Top filter bar */}
        <div className="bg-card border border-border rounded-md p-5 mb-8 space-y-5">
          <div className="grid md:grid-cols-[1fr_auto] gap-4 items-center">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search courses by title…"
              className="w-full px-4 py-2.5 border border-border rounded-sm bg-background text-sm focus:outline-none focus:border-navy-deep"
            />
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mr-1">Format</span>
              {["all", "Certificate", "PG Diploma", "Fellowship"].map((f) => {
                const s = new URLSearchParams(location.search || '');
                if (f === 'all') s.delete('fmt'); else s.set('fmt', f);
                const searchObj = Object.fromEntries(s.entries());
                return (
                  <Link
                    key={f}
                    to="/top-medical-courses"
                    search={searchObj}
                    className={`text-xs px-3 py-1.5 rounded-sm border transition ${fmt === f ? "bg-navy-deep text-primary-foreground border-navy-deep" : "border-border text-muted-foreground hover:border-navy-deep hover:text-navy-deep"}`}
                  >
                    {f === "all" ? "All" : f}
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-2.5">Specialty</div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => { updateUrl({ cat: 'all' }); }}
                className={`text-xs px-3 py-1.5 rounded-sm border transition ${cat === "all" ? "bg-navy-deep text-primary-foreground border-navy-deep" : "border-border text-muted-foreground hover:border-navy-deep hover:text-navy-deep"}`}
              >All specialties</button>
              {categories.map((c) => (
                <button
                  key={c.slug}
                  onClick={() => { updateUrl({ cat: c.slug }); }}
                  className={`text-xs px-3 py-1.5 rounded-sm border transition ${cat === c.slug ? "bg-navy-deep text-primary-foreground border-navy-deep" : "border-border text-muted-foreground hover:border-navy-deep hover:text-navy-deep"}`}
                >{c.name}</button>
              ))}
            </div>
          </div>
        </div>

        <div className="text-xs text-muted-foreground mb-5">{filtered.length} program{filtered.length === 1 ? "" : "s"}</div>
        {filtered.length === 0 ? (
          <div className="py-20 text-center text-muted-foreground">No courses match — try clearing filters. <Link to="/top-medical-courses" className="text-navy-deep underline">Reset</Link></div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => <CourseCard key={c.slug} course={c} />)}
          </div>
        )}
      </section>
    </div>
  );
}
