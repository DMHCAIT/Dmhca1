import React, { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Star, BookOpen, Clock, Award, GraduationCap, Globe, FileCheck, ArrowUpRight } from "lucide-react";
import { type Course } from "@/data/courses";

export function CourseDetail({ course, primaryCat, ptype, gstAmount, totalPrice, formatINR, related }: { course: Course; primaryCat: any; ptype: string; gstAmount: number; totalPrice: number; formatINR: (n:number)=>string; related: Course[] }) {
  return (
    <div>
      <section className="site-hero">
        <img src={course.image} alt="" aria-hidden referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/95 via-blue-900/90 to-navy-deep/85" />
        <div className="relative container-x py-6 lg:py-8">
          <Link to="/course-category/$slug" params={{ slug: primaryCat.slug }} className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.22em] text-gold hover:opacity-80">
            <ArrowLeft className="w-3.5 h-3.5" /> {primaryCat.name}
          </Link>
          <h1 className="font-display text-3xl md:text-4xl mt-3 max-w-3xl leading-tight">{course.title}</h1>
          {course.overview && (
            <HeroOverviewText text={course.overview} />
          )}
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/85">
            {course.rating && (
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 fill-gold text-gold" /> {course.rating} <span className="text-primary-foreground/55">({course.reviewCount} reviews)</span></span>
            )}
            {course.lessons != null && <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-gold" /> {course.lessons} lessons</span>}
            {course.weeks != null && <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /> {course.weeks} weeks</span>}
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-gold" /> {ptype}</span>
            <span className="capitalize flex items-center gap-2"><GraduationCap className="w-4 h-4 text-gold" /> {course.level}</span>
          </div>
        </div>
      </section>

      <nav className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="container-x flex gap-6 overflow-x-auto text-sm">
          {[
            "overview",
            "curriculum",
            "instructor",
            "faqs",
          ].map((id) => (
            <a key={id} href={`#${id}`} className="py-3.5 capitalize text-muted-foreground hover:text-navy-deep border-b-2 border-transparent hover:border-gold transition whitespace-nowrap">{id}</a>
          ))}
        </div>
      </nav>

      <section className="container-x py-12 lg:py-14 grid lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-14">
          <div id="overview">
            <h2 className="font-display text-2xl text-navy-deep">Course Overview</h2>
            {course.overview && <p className="mt-3 text-muted-foreground leading-relaxed">{course.overview}</p>}

            {course.learn.length > 0 && (
              <>
                <h3 className="font-display text-xl text-navy-deep mt-8">What you’ll learn</h3>
                <div className="mt-4 grid sm:grid-cols-2 gap-4">
                  {course.learn.map((o: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1">
                        <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-gold" />
                      </div>
                      <div className="text-sm text-navy-deep leading-relaxed">{o}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {course.requirements.length > 0 && (
              <>
                <h3 className="font-display text-xl text-navy-deep mt-8">Requirements</h3>
                <ul className="mt-3 space-y-1.5 list-disc list-inside text-sm text-muted-foreground marker:text-gold">
                  {course.requirements.map((r: string) => <li key={r}>{r}</li>)}
                </ul>
              </>
            )}
          </div>

          {course.modules.length > 0 && (
            <div id="curriculum">
              <div className="flex items-end justify-between flex-wrap gap-2">
                <h2 className="font-display text-2xl text-navy-deep">Curriculum</h2>
                <div className="text-xs text-muted-foreground">
                  {course.modules.length} Sections · {course.lessons ?? "—"} Lessons · {course.weeks ?? "—"} Weeks
                </div>
              </div>
              <div className="mt-4 border border-border rounded-md overflow-hidden divide-y divide-border bg-card">
                {course.modules.map((m: string, i: number) => (
                  <details key={m + i} className="border-b border-border bg-card" open={i === 0}>
                    <summary className="cursor-pointer px-4 py-3 flex items-center justify-between font-medium text-navy-deep">
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-muted-foreground w-6">{String(i + 1).padStart(2, "0")}</div>
                        <div>{m.replace(/^Module \d+:\s*/, '')}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-sm text-muted-foreground">{Array.isArray(course.moduleDetails?.[i]) ? (course.moduleDetails[i] as string[]).length : '—'}</div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 10-14 0v3a2 2 0 002 2h10a2 2 0 002-2v-3z" /></svg>
                      </div>
                    </summary>
                    <div className="px-4 pb-4">
                      {course.moduleDetails && course.moduleDetails[i]
                        ? Array.isArray(course.moduleDetails[i])
                          ? (
                            <ul className="divide-y divide-border bg-white rounded-md overflow-hidden border border-border mt-2">
                              {(course.moduleDetails[i] as string[]).map((lesson, li) => (
                                <li key={li} className="flex items-center justify-between px-4 py-3 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M9 16h6M9 8h6" /></svg>
                                    <span className="text-sm text-navy-deep">{lesson}</span>
                                  </div>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11V7a3 3 0 10-6 0v4" /><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /></svg>
                                </li>
                              ))}
                            </ul>
                          )
                          : <div className="text-sm text-muted-foreground">{course.moduleDetails[i]}</div>
                        : <div className="text-sm text-muted-foreground">Module description and learning objectives.</div>}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          <div id="instructor">
            <h2 className="font-display text-2xl text-navy-deep">Instructors</h2>
            <div className="mt-4 grid sm:grid-cols-2 gap-4">
              {(course.trainers && course.trainers.length > 0 ? course.trainers : [{ name: "DMHCA Faculty", title: "Expert Faculty", bio: "Experienced clinicians and educators." }]).map((trainer, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 border border-border rounded-md bg-card">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 overflow-hidden border border-gray-200">
                    <img src={trainer.image || "/logo.webp"} alt={trainer.name} className="w-11 h-11 object-contain" />
                  </div>
                  <div>
                    <div className="font-display text-lg text-navy-deep">{trainer.name}</div>
                    {trainer.title && <div className="text-sm text-gold font-medium">{trainer.title}</div>}
                    {trainer.bio && <div className="text-xs text-muted-foreground mt-2 leading-relaxed">{trainer.bio}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews removed per request */}

          {course.faqs.length > 0 && (
            <div id="faqs">
              <h2 className="font-display text-2xl text-navy-deep">Frequently Asked Questions</h2>
              <div className="mt-4 border border-border rounded-md divide-y divide-border bg-card">
                {course.faqs.map((f: { q: string; a: string }, i: number) => (
                  <details key={i} className="p-4" open={i === 0}>
                    <summary className="cursor-pointer font-medium text-navy-deep">{f.q}</summary>
                    <div className="mt-2 text-sm text-muted-foreground">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-32 bg-card border border-border rounded-md overflow-hidden">
            <div className="aspect-[5/3] bg-navy-deep relative">
              <img src={course.image} alt="" referrerPolicy="no-referrer" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Course Price</div>
                <div className="flex items-baseline gap-2">
                  <div className="text-3xl font-semibold text-navy-deep">{formatINR(course.priceINR)}</div>
                  <div className="text-sm text-muted-foreground">+ GST</div>
                </div>
                <div className="text-xs text-muted-foreground pt-2">Total: {formatINR(totalPrice)}</div>
              </div>
              <Link to="/contact-us" className="w-full inline-flex justify-center items-center px-5 py-3 bg-navy-deep text-primary-foreground text-sm rounded-sm hover:bg-navy">Apply Now</Link>
              <a href="tel:+917042011441" className="mt-2 w-full inline-flex justify-center items-center px-5 py-3 border border-border text-navy-deep text-sm rounded-sm hover:border-navy-deep">Book a Demo Class</a>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <div className="text-xs uppercase tracking-widest text-muted-foreground min-w-28">Duration</div>
                    <div className="font-medium text-navy-deep">{course.meta?.duration || course.weeks + " weeks"}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-gold flex-shrink-0" />
                    <div className="text-xs uppercase tracking-widest text-muted-foreground min-w-28">Lessons</div>
                    <div className="font-medium text-navy-deep">{course.lessons ?? "—"}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-gold flex-shrink-0" />
                    <div className="text-xs uppercase tracking-widest text-muted-foreground min-w-28">Language</div>
                    <div className="font-medium text-navy-deep">{course.meta?.language || "English"}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-4 h-4 text-gold flex-shrink-0" />
                    <div className="text-xs uppercase tracking-widest text-muted-foreground min-w-28">Program Type</div>
                    <div className="font-medium text-navy-deep">{ptype}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileCheck className="w-4 h-4 text-gold flex-shrink-0" />
                    <div className="text-xs uppercase tracking-widest text-muted-foreground min-w-28">Certificate</div>
                    <div className="font-medium text-navy-deep">{course.meta?.certificate === "no" ? "No" : "Yes"}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-secondary/40 border-t border-border">
          <div className="container-x py-16">
            <div className="text-xs uppercase tracking-[0.25em] text-navy-deep gold-rule">Related programs</div>
            <h2 className="font-display text-3xl text-navy-deep mt-3 mb-8">Related Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => {
                const relCat = primaryCat;
                const relProgramType = r.meta?.skill_level || (r.title.toLowerCase().includes("fellowship") ? "Fellowship" : r.title.toLowerCase().includes("pg diploma") ? "PG Diploma" : "Certificate");
                return (
                  <Link
                    key={r.slug}
                    to="/courses/$slug"
                    params={{ slug: r.slug }}
                    className="group block bg-card border border-border rounded-md overflow-hidden hover:border-navy-deep/40 hover:shadow-[0_24px_50px_-30px_rgba(15,27,61,0.45)] transition"
                  >
                    <div className="aspect-[5/3] relative overflow-hidden bg-navy-deep">
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/30 to-transparent" />
                      <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] px-2 py-1 bg-primary-foreground/15 text-primary-foreground rounded-sm backdrop-blur">
                        <span className="w-1 h-1 rounded-full bg-gold" /> {relProgramType}
                      </div>
                      {r.rating && (
                        <div className="absolute top-3 right-3 inline-flex items-center gap-1 text-[11px] px-2 py-1 bg-primary-foreground/95 text-navy-deep rounded-sm">
                          <Star className="w-3 h-3 fill-gold text-gold" /> {r.rating} <span className="text-muted-foreground">({r.reviewCount})</span>
                        </div>
                      )}
                      <div className="absolute bottom-3 left-3 right-3">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-gold/90 mb-1">{relCat?.name}</div>
                        <div className="font-display text-primary-foreground text-lg leading-tight line-clamp-2">{r.title}</div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {r.lessons != null && <span className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> {r.lessons} lessons</span>}
                        {r.weeks != null && <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {r.weeks} week</span>}
                        <span className="capitalize">{r.level}</span>
                      </div>
                      <div className="mt-4 flex items-end justify-between">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Tuition</div>
                          <div className="text-lg font-semibold text-navy-deep tracking-tight">{formatINR(r.priceINR)}</div>
                        </div>
                        <span className="inline-flex items-center gap-1 text-sm text-navy-deep group-hover:text-gold transition">
                          View <ArrowUpRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default CourseDetail;

function HeroOverviewText({ text }: { text: string }) {
  // Generate a concise abstract (not raw truncation): prefer first sentence(s), fallback to 140 chars
  let summary = text;
  const firstPeriod = text.indexOf('.');
  if (firstPeriod !== -1 && firstPeriod < 140) {
    // take first sentence; if short, try two sentences
    summary = text.slice(0, firstPeriod + 1);
    const secondPeriod = text.indexOf('.', firstPeriod + 1);
    if (secondPeriod !== -1 && secondPeriod < 220) {
      summary = text.slice(0, secondPeriod + 1);
    }
  } else if (text.length > 140) {
    // smart cut at last space before limit
    const cut = text.slice(0, 140);
    const lastSpace = cut.lastIndexOf(' ');
    summary = (lastSpace > 80 ? cut.slice(0, lastSpace) : cut) + '…';
  }

  return (
    <div className="max-w-2xl">
      <p className="text-primary-foreground/85 text-sm md:text-base" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' } as React.CSSProperties}>
        {summary}
      </p>
    </div>
  );
}
