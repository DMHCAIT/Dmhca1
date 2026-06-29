import React, { useState, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, Star, BookOpen, Clock, Award, GraduationCap, Globe, FileCheck, ArrowUpRight } from "lucide-react";
import { type Course } from "@/data/courses";

// Mapping of DMHCA course titles to IBM Practitioner course names for form pre-selection
const courseNameMapping: Record<string, string> = {
  "Fellowship in Echocardiography": "Echocardiography",
  "Certificate Course in Hypertension": "Hypertension Management",
  "Fellowship in Interventional Cardiology": "Interventional Cardiology",
  "Fellowship in Clinical Cardiology": "Clinical Cardiology",
  // Add more mappings as needed
};

function getIBMCourseName(dmhcaTitle: string): string {
  // Check exact match first
  if (courseNameMapping[dmhcaTitle]) {
    return courseNameMapping[dmhcaTitle];
  }
  
  // Fallback: extract specialty from title
  // e.g., "Fellowship in X" -> "X", "Certificate Course in Y" -> "Y"
  const match = dmhcaTitle.match(/(?:Fellowship|PG Diploma|Certificate Course) in\s+(.+)/i);
  if (match) {
    return match[1];
  }
  
  return dmhcaTitle; // Return original if no pattern matches
}

export function CourseDetail({ course, primaryCat, ptype, gstAmount, razorpayAmount, totalPrice, formatINR, related }: { course: Course; primaryCat: any; ptype: string; gstAmount: number; razorpayAmount: number; totalPrice: number; formatINR: (n:number)=>string; related: Course[] }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // JSON-LD Schemas
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.overview,
    "provider": {
      "@type": "Organization",
      "name": "DMHCA",
      "url": "https://dmhca.in",
      "logo": "https://dmhca.in/logo.webp"
    },
    "image": course.image,
    "duration": course.weeks ? `PT${course.weeks}W` : undefined,
    "numberOfLessons": course.lessons || undefined,
    "educationLevel": course.level,
    "url": `https://dmhca.in/courses/${course.slug}`,
    "aggregateRating": course.rating && course.reviewCount ? {
      "@type": "AggregateRating",
      "ratingValue": course.rating,
      "ratingCount": course.reviewCount
    } : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dmhca.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Courses",
        "item": "https://dmhca.in/top-medical-courses"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": primaryCat.name,
        "item": `https://dmhca.in/course-category/${primaryCat.slug}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": course.title,
        "item": `https://dmhca.in/courses/${course.slug}`
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DMHCA",
    "url": "https://dmhca.in",
    "logo": "https://dmhca.in/logo.webp",
    "description": "Top institute for accredited medical courses and fellowships",
    "sameAs": [
      "https://www.facebook.com/dmhca",
      "https://twitter.com/dmhca",
      "https://www.linkedin.com/company/dmhca"
    ]
  };

  // FAQ Schema
  const faqSchema = course.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": course.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : null;

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border-b border-slate-700">
        <div className="absolute inset-0 opacity-5">
          <img src={course.heroImage || course.image} alt="" aria-hidden className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="relative container-x py-6 lg:py-8">
          <Link to="/course-category/$slug" params={{ slug: primaryCat.slug }} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white mb-3 group">
            <ArrowLeft className="w-4 h-4 transition group-hover:-translate-x-1" /> {primaryCat.name}
          </Link>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 max-w-4xl leading-tight">{course.heroTitle || course.title}</h1>
          {course.heroDescription && (
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
              {course.heroDescription}
            </p>
          )}
          <div className="mt-4 flex flex-wrap gap-4 text-xs md:text-sm">
            {course.rating && (
              <div className="flex items-center gap-2"><div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-500 text-yellow-500" /> <span className="font-semibold text-white">{course.rating}</span></div> <span className="text-slate-400">({course.reviewCount} reviews)</span></div>
            )}
            {course.lessons != null && <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-slate-400" /> <span className="font-medium text-slate-300">{course.lessons} lessons</span></div>}
            {course.weeks != null && <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> <span className="font-medium text-slate-300">{course.weeks} weeks</span></div>}
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-slate-400" /> <span className="font-medium text-slate-300">{ptype}</span></div>
            <div className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-slate-400" /> <span className="font-medium text-slate-300">{course.level}</span></div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-16 z-30 bg-slate-900/95 border-b border-slate-700 shadow-sm">
        <div className="container-x flex gap-8 overflow-x-auto text-sm">
          {[
            "overview",
            "curriculum",
            "instructor",
            "faqs",
            "reviews",
          ].map((id) => (
            <a key={id} href={`#${id}`} className="py-4 capitalize font-medium text-slate-400 border-b-2 border-transparent hover:text-white hover:border-yellow-500 transition whitespace-nowrap">{id}</a>
          ))}
        </div>
      </nav>

      <section className="bg-white min-h-screen">
        <div className="container-x py-10 lg:py-14 grid lg:grid-cols-3 gap-10 course-detail-container">
        <div className="lg:col-span-2 space-y-10">
          <div id="overview" className="space-y-10">
            {/* Course Overview */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-500"></div>
                Course Overview
              </h2>
              <div className="bg-white border border-slate-300 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <p className="text-slate-700 leading-relaxed text-base font-medium tracking-wide">{course.overview}</p>
              </div>
            </div>

            {/* What you'll learn */}
            {course.learn.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-emerald-600 to-emerald-500"></div>
                  What You'll Learn
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.learn.map((o: string, idx: number) => (
                    <div key={idx} className="border border-slate-300 rounded-xl p-5 bg-white hover:border-emerald-300 hover:shadow-md transition-all">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-4 h-4 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                        </div>
                        <p className="text-slate-700 text-base font-medium tracking-wide">{o}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Requirements */}
            {course.requirements.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-orange-600 to-orange-500"></div>
                  Requirements
                </h2>
                <div className="flex flex-wrap gap-3">
                  {course.requirements.map((r: string, idx: number) => (
                    <span key={idx} className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 text-slate-700 text-base font-semibold rounded-full hover:shadow-md transition-all hover:border-orange-300">
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-600"></div>
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CURRICULUM SECTION */}
          {course.modules.length > 0 && (
            <div id="curriculum">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-blue-500"></div>
                Curriculum
              </h2>
              <p className="text-sm text-slate-600 mb-5">{course.modules.length} Sections · {course.lessons ?? "—"} Lessons · {course.weeks ?? "—"} Weeks</p>
              <div className="space-y-3">
                {course.modules.map((m: string, i: number) => (
                  <details key={m + i} className="group border border-slate-300 hover:border-blue-400 rounded-xl overflow-hidden transition-all bg-white hover:shadow-md">
                    <summary className="cursor-pointer px-6 py-5 flex items-center justify-between font-semibold text-slate-900 hover:bg-blue-50/40 transition list-none">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="text-base text-slate-900 font-semibold tracking-wide">{m.replace(/^Module \d+:\s*/, '')}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1.5 rounded-full font-semibold">
                          {Array.isArray(course.moduleDetails?.[i]) ? (course.moduleDetails[i] as string[]).length : '—'} lessons
                        </span>
                        <svg className="w-5 h-5 text-slate-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-6 pb-5 bg-blue-50/20 border-t border-slate-300">
                      {course.moduleDetails && course.moduleDetails[i]
                        ? Array.isArray(course.moduleDetails[i])
                          ? (
                            <ul className="space-y-2">
                              {(course.moduleDetails[i] as string[]).map((lesson, li) => (
                                <li key={li} className="flex items-center gap-3 p-3.5 rounded-lg border border-slate-300 bg-white hover:bg-blue-50/30 transition">
                                  <svg className="w-5 h-5 text-blue-700 flex-shrink-0 font-bold" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                  </svg>
                                  <span className="text-base text-slate-700 font-medium tracking-wide">{lesson}</span>
                                </li>
                              ))}
                            </ul>
                          )
                          : <div className="text-base text-slate-700 font-medium">{course.moduleDetails[i]}</div>
                        : <div className="text-base text-slate-600 font-medium">Module details will be provided during enrollment.</div>}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          )}

          {/* INSTRUCTORS SECTION */}
          <div id="instructor">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-teal-600 to-teal-500"></div>
              Instructor
            </h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {(course.trainers && course.trainers.length > 0 ? course.trainers : [{ name: "DMHCA Faculty", title: "Expert Faculty", bio: "Experienced clinicians and educators." }]).map((trainer, idx) => (
                <div key={idx} className="border border-slate-300 rounded-xl p-6 bg-white hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="flex gap-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-3 border-slate-200 bg-slate-100">
                      <img src={trainer.image || "/logo.webp"} alt={trainer.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900 text-base tracking-wide">{trainer.name}</div>
                      {trainer.title && <div className="text-sm text-teal-700 font-semibold mt-1 tracking-wide">{trainer.title}</div>}
                      {trainer.bio && <div className="text-sm text-slate-700 mt-2.5 leading-relaxed font-medium">{trainer.bio}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Student Reviews Section */}
          {(() => {
            // Local state for reviews with localStorage persistence per course slug
            const [localReviews, setLocalReviews] = useState(() => {
              try {
                const key = `reviews:${course.slug}`;
                const saved = window.localStorage.getItem(key);
                if (saved) return JSON.parse(saved);
              } catch (e) {}
              // normalize existing course.reviews into student-style shape
              try {
                const src = course.reviews || [];
                return src.map((r: any) => ({
                  id: r.id || `r-${course.slug}-${Math.random().toString(36).slice(2,9)}`,
                  studentName: r.studentName || r.author || r.name || 'Student',
                  studentImage: r.studentImage || r.image || '',
                  rating: r.rating || 5,
                  title: r.title || (r.comment ? r.comment.split('.').slice(0,1)[0].slice(0,40) : ''),
                  comment: r.comment || r.text || '',
                  date: r.date || (r.createdAt ? r.createdAt.slice(0,10) : new Date().toISOString().slice(0,10)),
                  verified: r.verified || false,
                  helpful: r.helpful || 0,
                  adminReply: (r.adminReply || r.reply || undefined),
                }));
              } catch (e) {
                return course.reviews || [];
              }
            });

            const nameRef = useRef<HTMLInputElement | null>(null);
            const titleRef = useRef<HTMLSelectElement | null>(null);
            const textRef = useRef<HTMLTextAreaElement | null>(null);
            const ratingRef = useRef<HTMLSelectElement | null>(null);

            function saveReviews(revs: any[]) {
              try {
                window.localStorage.setItem(`reviews:${course.slug}`, JSON.stringify(revs));
              } catch (e) {}
            }

            function handleAdminReply(index: number) {
              try {
                const isAdmin = window.localStorage.getItem('isAdmin') === '1';
                if (!isAdmin) {
                  alert('Admin reply: enable admin mode by setting localStorage key isAdmin = 1');
                  return;
                }
                const existing = localReviews[index] || {};
                const reply = window.prompt('Enter admin reply for this review', existing.adminReply || '');
                if (reply === null) return;
                const updated = localReviews.map((r: any, i: number) => i === index ? { ...r, adminReply: reply } : r);
                setLocalReviews(updated);
                saveReviews(updated);
              } catch (e) {}
            }

            function handleSubmit(e: React.FormEvent) {
              e.preventDefault();
              const name = nameRef.current?.value?.trim() || 'Anonymous';
              const title = titleRef.current?.value?.trim() || 'Great course';
              const comment = textRef.current?.value?.trim() || '';
              const rating = parseInt(ratingRef.current?.value || '5', 10);
              if (!comment) return;
              const newReview = {
                id: `r-${course.slug}-${Date.now()}`,
                studentName: name,
                studentImage: '',
                rating,
                title,
                comment,
                date: new Date().toISOString().slice(0,10),
                verified: false,
                helpful: 0,
              };
              const updated = [newReview, ...localReviews];
              setLocalReviews(updated);
              saveReviews(updated);
              if (nameRef.current) nameRef.current.value = '';
              if (titleRef.current) titleRef.current.value = 'Practical';
              if (textRef.current) textRef.current.value = '';
            }

            return (
              <div id="reviews">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-rose-600 to-rose-500"></div>
                  Student Reviews
                </h2>
                <div className="space-y-4">
                  {localReviews.map((r: any, i: number) => (
                    <div key={r.id || i} className="p-5 border border-slate-300 rounded-xl bg-white hover:shadow-lg transition-all">
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-2 border-slate-300">
                          <img src={r.studentImage || '/reviews/default-avatar.svg'} alt={r.studentName} className="w-13 h-13 object-contain" onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = '/reviews/default-avatar.svg'; }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="font-bold text-base text-slate-900 tracking-wide">{r.studentName}</div>
                              <div className="text-sm text-slate-600 mt-1 font-semibold">{r.title ? r.title + ' · ' : ''}<span className="text-rose-700 font-bold">{r.rating} ★</span></div>
                            </div>
                            <div className="text-xs text-slate-500 font-medium whitespace-nowrap">{r.date}</div>
                          </div>
                          <div className="mt-3 text-base text-slate-700 leading-relaxed font-medium tracking-wide">{r.comment}</div>
                          {r.adminReply && (
                            <div className="mt-4 p-4 border border-slate-300 rounded-lg bg-slate-50 text-sm">
                              <div className="text-xs text-slate-600 font-bold uppercase mb-2 tracking-wider">Admin Reply</div>
                              <div className="text-base text-slate-700 font-medium tracking-wide">{r.adminReply}</div>
                            </div>
                          )}
                        </div>
                        <button type="button" onClick={() => handleAdminReply(i)} className="text-xs px-3 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-900 hover:text-white transition flex-shrink-0 font-semibold tracking-wide">Reply</button>
                      </div>
                    </div>
                  ))}

                  <div className="p-6 border border-dashed border-slate-400 rounded-xl bg-slate-50">
                    <div className="text-sm text-slate-700 font-bold text-center mb-4 tracking-wide">Have feedback? Add a review below:</div>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input ref={nameRef} className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-base text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="Your name" />
                      <select ref={titleRef} defaultValue="Practical" className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-base text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent">
                        <option value="Practical">Practical</option>
                        <option value="Learned">Learned</option>
                        <option value="Well structured">Well structured</option>
                        <option value="Good pacing">Good pacing</option>
                        <option value="Concise modules">Concise modules</option>
                        <option value="Excellent content">Excellent content</option>
                      </select>
                      <textarea ref={textRef} className="w-full px-4 py-3 border border-slate-300 rounded-lg bg-white text-base text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" rows={3} placeholder="Your review" />
                      <div className="flex gap-3 items-center">
                        <label className="text-base text-slate-700 font-bold tracking-wide">Rating:</label>
                        <select ref={ratingRef} defaultValue="5" className="px-3 py-2.5 border border-slate-300 rounded-lg bg-white text-base font-semibold focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent">
                          <option value="5">5 ★</option>
                          <option value="4">4 ★</option>
                          <option value="3">3 ★</option>
                          <option value="2">2 ★</option>
                          <option value="1">1 ★</option>
                        </select>
                        <button type="submit" className="ml-auto px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-base font-bold transition tracking-wide">Submit Review</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            );
          })()}

          {course.faqs.length > 0 && (
            <div id="faqs">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-indigo-500"></div>
                Frequently Asked Questions
              </h2>
              <div className="border border-slate-300 rounded-xl overflow-hidden bg-white shadow-sm divide-y divide-slate-300">
                {course.faqs.map((f: { q: string; a: string }, i: number) => (
                  <details key={i} className="group" open={i === 0}>
                    <summary className="cursor-pointer px-6 py-5 font-bold text-base text-slate-900 hover:bg-indigo-50/40 transition flex items-center justify-between list-none tracking-wide">
                      <span>{f.q}</span>
                      <svg className="w-5 h-5 text-slate-700 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </summary>
                    <div className="px-6 py-5 bg-indigo-50/20 text-base text-slate-700 leading-relaxed font-medium border-t border-slate-300 tracking-wide">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          )}
        </div>

        <aside className="lg:col-span-1">
          <div className="sticky top-32 space-y-6">
            {/* Video Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-xl">
              {/* Video Block */}
              <div className="aspect-[5/3] relative overflow-hidden bg-slate-900 group">
                {!isVideoPlaying ? (
                  <>
                    {/* Thumbnail View */}
                    <img 
                      src="https://img.youtube.com/vi/5-2QOkBu180/maxresdefault.jpg" 
                      alt="Course Video" 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://img.youtube.com/vi/5-2QOkBu180/hqdefault.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                    {/* Play Button */}
                    <button 
                      onClick={() => setIsVideoPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                    >
                      <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 hover:bg-red-700">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  </>
                ) : (
                  <>
                    {/* Video Player */}
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/5-2QOkBu180?autoplay=1&controls=1&rel=0&fs=1&modestbranding=1"
                      title="Course Video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                    {/* Close Video Button */}
                    <button 
                      onClick={() => setIsVideoPlaying(false)}
                      className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded-full flex items-center justify-center transition z-10"
                      title="Close video"
                    >
                      ✕
                    </button>
                  </>
                )}
              </div>

              {/* Card Footer */}
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-5 py-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs uppercase tracking-widest text-amber-300 font-bold">Premium Course</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setIsVideoPlaying(true)}
                    className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition font-bold text-xs flex items-center gap-1.5"
                    title="Play Video"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Play
                  </button>
                  <a 
                    href="https://www.youtube.com/watch?v=5-2QOkBu180"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition font-bold text-xs whitespace-nowrap"
                    title="Watch on YouTube"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                    Youtube
                  </a>
                </div>
              </div>
            </div>

            {/* Pricing Card */}
            <div className="bg-white border border-slate-300 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all">
              <div className="p-6 space-y-3 mb-5 pb-6 border-b border-slate-300">
                <div className="text-xs uppercase tracking-widest text-slate-600 font-bold">Course Price</div>
                <div className="flex items-baseline gap-3">
                  <div className="text-4xl font-black text-slate-900">{formatINR(course.priceINR)}</div>
                  <div className="text-lg font-bold text-slate-700">+GST+Misc.</div>
                </div>
                <div className="text-sm text-slate-700 font-semibold">Total: {formatINR(totalPrice)}</div>
              </div>
              <div className="px-6 pb-6 space-y-3">
                <Link 
                  to="/apply"
                  search={{ program: course.program, course: getIBMCourseName(course.title) }}
                  className="w-full inline-flex justify-center items-center px-5 py-3.5 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 hover:from-slate-800 hover:via-slate-800 hover:to-slate-700 text-white text-base font-bold rounded-lg transition shadow-md hover:shadow-lg tracking-wide"
                >
                  Apply Now
                </Link>
                {/* Removed 'Book a Demo Class' per request; only Apply Now remains */}
              </div>

              <div className="px-6 py-6 border-t border-slate-300 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-slate-900 flex-shrink-0 font-bold" />
                  <div className="text-xs uppercase tracking-widest text-slate-600 font-bold min-w-24">Duration</div>
                  <div className="font-bold text-slate-900 text-base tracking-wide">{course.meta?.duration || course.weeks + " weeks"}</div>
                </div>
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-slate-900 flex-shrink-0 font-bold" />
                  <div className="text-xs uppercase tracking-widest text-slate-600 font-bold min-w-24">Lessons</div>
                  <div className="font-bold text-slate-900 text-base tracking-wide">{course.lessons ?? "—"}</div>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-slate-900 flex-shrink-0 font-bold" />
                  <div className="text-xs uppercase tracking-widest text-slate-600 font-bold min-w-24">Language</div>
                  <div className="font-bold text-slate-900 text-base tracking-wide">{course.meta?.language || "English"}</div>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-slate-900 flex-shrink-0 font-bold" />
                  <div className="text-xs uppercase tracking-widest text-slate-600 font-bold min-w-24">Type</div>
                  <div className="font-bold text-slate-900 text-base tracking-wide">{ptype}</div>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-slate-900 flex-shrink-0 font-bold" />
                  <div className="text-xs uppercase tracking-widest text-slate-600 font-bold min-w-24">Certificate</div>
                  <div className="font-bold text-slate-900 text-base tracking-wide">{course.meta?.certificate === "no" ? "No" : "Yes"}</div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="bg-gradient-to-br from-slate-50 to-white border-t border-slate-300">
          <div className="container-x py-16 lg:py-20">
            <div className="text-xs uppercase tracking-widest text-slate-600 font-bold mb-2">Explore More</div>
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Related Courses</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {related.map((r) => {
                const relCat = primaryCat;
                const relProgramType = r.meta?.skill_level || (r.title.toLowerCase().includes("fellowship") ? "Fellowship" : r.title.toLowerCase().includes("pg diploma") ? "PG Diploma" : "Certificate");
                return (
                  <Link
                    key={r.slug}
                    to="/courses/$slug"
                    params={{ slug: r.slug }}
                    className="group block bg-white border border-slate-300 rounded-xl overflow-hidden hover:border-slate-500 hover:shadow-2xl transition-all"
                  >
                    <div className="aspect-[5/3] relative overflow-hidden bg-slate-900">
                      <img
                        src={r.image}
                        alt={r.title}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-700"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent" />
                      <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest px-3 py-1.5 bg-slate-900/95 text-white rounded-lg font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> {relProgramType}
                      </div>
                      {r.rating && (
                        <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 text-[11px] px-3 py-1.5 bg-white text-slate-900 rounded-lg font-bold shadow-lg">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" /> {r.rating} <span className="text-slate-700 font-semibold">({r.reviewCount})</span>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-[10px] uppercase tracking-widest text-emerald-300 mb-2 font-bold">{relCat?.name}</div>
                        <div className="font-bold text-white text-lg leading-tight line-clamp-2 tracking-wide">{r.title}</div>
                      </div>
                    </div>
                    <div className="p-6 space-y-5">
                      <div className="flex items-center gap-5 text-xs text-slate-700 font-semibold">
                        {r.lessons != null && <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-slate-900" /> {r.lessons} lessons</span>}
                        {r.weeks != null && <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-900" /> {r.weeks} weeks</span>}
                        <span className="capitalize px-3 py-1 bg-slate-200 text-slate-800 rounded-full font-bold">{r.level}</span>
                      </div>
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-slate-600 font-bold mb-1.5">Tuition</div>
                          <div className="text-2xl font-black text-slate-900 tracking-wide">{formatINR(r.priceINR)}</div>
                        </div>
                        <span className="inline-flex items-center gap-2 text-base font-bold text-slate-900 group-hover:text-slate-900 transition tracking-wide">
                          View <ArrowUpRight className="w-5 h-5" />
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
