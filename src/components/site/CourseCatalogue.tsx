import { BookOpen, Search, SlidersHorizontal } from "lucide-react";
import { categories, type Course } from "@/data/courses";
import { CourseCard } from "@/components/site/CourseCard";

const formats = [
  { label: "All", slug: "all" },
  { label: "Certificate", slug: "certificates" },
  { label: "PG Diploma", slug: "pg-diplomas" },
  { label: "Fellowship", slug: "fellowships" },
];

export function CourseCatalogue({
  title,
  description,
  courses,
  selectedFormat,
  selectedSpecialty,
  search,
  onSearchChange,
  formatHref,
  specialtyHref,
  resetHref,
}: {
  title: string;
  description: string;
  courses: Course[];
  selectedFormat: string;
  selectedSpecialty: string;
  search: string;
  onSearchChange: (value: string) => void;
  formatHref: (slug: string) => string;
  specialtyHref: (slug: string) => string;
  resetHref: string;
}) {
  const headingLength = Math.max(title.length, 1);
  const headingViewportScale = 80 / (headingLength * 0.58);
  const headingContainerScale = 95 / (headingLength * 0.58);

  return (
    <div className="course-catalogue-page course-page home-page min-h-screen">
      <section className="course-hero relative mx-auto mt-6 w-[calc(100%-2.5rem)] max-w-[92rem] md:mt-8 md:w-[calc(100%-4rem)]">
        <div className="course-hero-content">
          <div className="course-hero-copy w-full space-y-5">
            <h1
              className="whitespace-nowrap font-display leading-tight tracking-[-0.04em] text-navy-deep"
              style={{
                fontSize: `clamp(0.625rem, min(${headingViewportScale.toFixed(2)}vw, ${headingContainerScale.toFixed(2)}cqi), 4.25rem)`,
              }}
            >
              {title}
            </h1>
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </section>

      <section className="home-surface py-7 md:py-9">
        <div className="container-home max-w-[96rem]">
          <div className="course-catalogue-heading mb-7 sm:mb-8">
            <div className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              <BookOpen className="h-4 w-4" aria-hidden="true" />
              Find your next step
            </div>
            <h2 className="font-display text-2xl font-bold text-navy-deep sm:text-3xl">
              Browse the catalogue
            </h2>
          </div>

          <div className="course-catalogue-filters mb-8 space-y-6 rounded-2xl border border-border bg-card p-4 shadow-[0_18px_45px_-35px_rgba(41,51,74,0.45)] sm:p-6">
            <div className="grid gap-5 lg:grid-cols-[minmax(240px,1fr)_auto] lg:items-center">
              <label className="relative block">
                <span className="sr-only">Search courses by title</span>
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
                  aria-hidden="true"
                />
                <input
                  value={search}
                  onChange={(event) => onSearchChange(event.target.value)}
                  placeholder="Search courses by title…"
                  className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground transition placeholder:text-muted-foreground/80 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/15"
                />
              </label>

              <div className="flex flex-wrap items-center gap-2">
                <span className="mr-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                  Format
                </span>
                {formats.map((format) => (
                  <a
                    key={format.slug}
                    href={formatHref(format.slug)}
                    aria-current={selectedFormat === format.slug ? "page" : undefined}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${selectedFormat === format.slug ? "border-[#800020] bg-[#800020] text-white" : "border-border bg-background text-muted-foreground hover:text-[#800020]"}`}
                  >
                    {format.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="course-catalogue-specialties border-t border-border pt-5">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Specialty
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href={specialtyHref("all")}
                  aria-current={selectedSpecialty === "all" ? "page" : undefined}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${selectedSpecialty === "all" ? "border-[#800020] bg-[#800020] text-white" : "border-border bg-background text-muted-foreground hover:text-[#800020]"}`}
                >
                  All specialties
                </a>
                {categories.map((category) => (
                  <a
                    key={category.slug}
                    href={specialtyHref(category.slug)}
                    aria-current={selectedSpecialty === category.slug ? "page" : undefined}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${selectedSpecialty === category.slug ? "border-[#800020] bg-[#800020] text-white" : "border-border bg-background text-muted-foreground hover:text-[#800020]"}`}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {courses.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card px-6 py-20 text-center text-muted-foreground shadow-sm">
              No courses match — try clearing filters.{" "}
              <a
                href={resetHref}
                className="font-semibold text-[#800020] underline underline-offset-4 hover:text-[#68001e]"
              >
                Reset
              </a>
            </div>
          ) : (
            <div className="course-catalogue-grid grid grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),1fr))] gap-6 xl:gap-x-6 xl:gap-y-8">
              {courses.map((course) => (
                <CourseCard key={course.slug} course={course} compact />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
