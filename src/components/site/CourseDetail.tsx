import React, { useState, useRef } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { CourseCard } from "./CourseCard";
import { OTPLoginModal } from "../OTPLoginModal";
import { SignupFlow } from "../SignupFlow";
import { ArrowLeft, Star, BookOpen, Clock, Award, GraduationCap, Globe, FileCheck, ArrowUpRight } from "lucide-react";
import { type Course } from "@/data/courses";
import { saveCart } from "@/routes/api/save-cart";

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

export function CourseDetail({ course, primaryCat, ptype, gstAmount, razorpayAmount, totalPrice, formatINR, related }: { course: any; primaryCat: any; ptype: string; gstAmount: number; razorpayAmount: number; totalPrice: number; formatINR: (n:number)=>string; related: any[] }) {
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showSignupFlow, setShowSignupFlow] = useState(false);

  const handleEnrollClick = () => {
    // Check if user is logged in
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        // User is logged in, navigate to apply
        navigate({
          to: '/apply',
          search: { program: course.program, course: getIBMCourseName(course.title) }
        });
      } else {
        // User not logged in, show OTP modal
        setShowOtpModal(true);
      }
    }
  };

  const handleLoginSuccess = () => {
    setShowOtpModal(false);
    // Add course to cart after successful login
    if (typeof window !== 'undefined') {
      const key = 'cart';
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      const item = { slug: course.slug, title: course.title, priceINR: course.priceINR || course.price || 0, qty: 1 };
      const found = existing.find((c: any) => c.slug === item.slug);
      // Don't add if already in cart - limit to 1 per course
      if (!found) {
        existing.push(item);
      }
      localStorage.setItem(key, JSON.stringify(existing));
      window.location.href = '/cart';
    }
  };

  const handleSignupSuccess = () => {
    setShowSignupFlow(false);
    // Add course to cart after successful signup
    if (typeof window !== 'undefined') {
      const key = 'cart';
      const existing = JSON.parse(localStorage.getItem(key) || '[]');
      const item = { slug: course.slug, title: course.title, priceINR: course.priceINR || course.price || 0, qty: 1 };
      const found = existing.find((c: any) => c.slug === item.slug);
      // Don't add if already in cart - limit to 1 per course
      if (!found) {
        existing.push(item);
      }
      localStorage.setItem(key, JSON.stringify(existing));
      window.location.href = '/cart';
    }
  };

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
    "duration": course.months ? `PT${course.months}M` : undefined,
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
    "mainEntity": course.faqs.map((faq: any) => ({
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
      <section className="relative overflow-visible bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 border-b border-slate-700">
        <div className="absolute right-0 top-0 bottom-0 opacity-5 pointer-events-none flex items-center justify-end pr-4">
          <img
            src={course.heroImage || course.image}
            alt=""
            aria-hidden
            className="w-auto h-auto max-w-[48%] lg:max-w-[40%] md:max-w-[46%] sm:max-w-[60%] xs:max-w-[80%] max-h-[420px] sm:max-h-[360px] xs:max-h-[240px] object-contain object-right"
            referrerPolicy="no-referrer"
            decoding="async"
            loading="lazy"
          />
        </div>
        <div className="relative container-x py-6 lg:py-8">
          <Link to="/course-category/$slug" params={{ slug: primaryCat.slug }} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white mb-3 group">
            <ArrowLeft className="w-4 h-4 transition group-hover:-translate-x-1" /> {primaryCat.name}
          </Link>
          <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-2 max-w-4xl leading-tight">{course.title}</h1>
          {course.heroDescription && (
            <p className="mt-3 text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed">
              {course.heroDescription}
            </p>
          )}
          {/* Mobile inline image hidden on small screens per request */}
          <div className="hidden">
            <img src={course.heroImage || course.image} alt="" aria-hidden className="w-full h-auto object-contain rounded-xl shadow-md" referrerPolicy="no-referrer" decoding="async" loading="lazy" />
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-xs md:text-sm">
            {course.rating && (
              <div className="flex items-center gap-2"><div className="flex items-center gap-1"><Star className="w-4 h-4 fill-yellow-500 text-yellow-500" /> <span className="font-semibold text-white">{course.rating}</span></div> <span className="text-slate-400">({course.reviewCount} reviews)</span></div>
            )}
            {course.lessons != null && <div className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-slate-400" /> <span className="font-medium text-slate-300">{course.lessons} lessons</span></div>}
            {course.months != null && <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-slate-400" /> <span className="font-medium text-slate-300">{course.months} months</span></div>}
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-slate-400" /> <span className="font-medium text-slate-300">{ptype}</span></div>
            <div className="flex items-center gap-2"><GraduationCap className="w-4 h-4 text-slate-400" /> <span className="font-medium text-slate-300">{ptype === 'Certificate' ? 'Intermediate' : (ptype === 'PG Diploma' || ptype === 'Fellowship' ? 'Expert' : course.level)}</span></div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <nav className="sticky top-16 z-30 bg-slate-900/95 border-b border-slate-700 shadow-sm">
        <div className="container-x flex gap-8 overflow-x-auto text-sm">
          <a href="#overview" className="py-4 font-medium text-slate-400 border-b-2 border-transparent hover:text-white hover:border-yellow-500 transition whitespace-nowrap">Overview</a>
          <a href="#learn" className="py-4 font-medium text-slate-400 border-b-2 border-transparent hover:text-white hover:border-yellow-500 transition whitespace-nowrap">What You'll Learn</a>
          <a href="#requirements" className="py-4 font-medium text-slate-400 border-b-2 border-transparent hover:text-white hover:border-yellow-500 transition whitespace-nowrap">Requirements</a>
          <a href="#curriculum" className="py-4 font-medium text-slate-400 border-b-2 border-transparent hover:text-white hover:border-yellow-500 transition whitespace-nowrap">Curriculum</a>
          <a href="#instructor" className="py-4 font-medium text-slate-400 border-b-2 border-transparent hover:text-white hover:border-yellow-500 transition whitespace-nowrap">Instructor</a>
          <a href="#faqs" className="py-4 font-medium text-slate-400 border-b-2 border-transparent hover:text-white hover:border-yellow-500 transition whitespace-nowrap">FAQs</a>
          <a href="#reviews" className="py-4 font-medium text-slate-400 border-b-2 border-transparent hover:text-white hover:border-yellow-500 transition whitespace-nowrap">Reviews</a>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-slate-50 to-white min-h-screen">
        <div className="container-x py-10 lg:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* LEFT SIDEBAR - COURSE DETAILS */}
            <aside className="lg:col-span-2 space-y-5 h-fit">
              {/* Course Details Card */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-tight sm:tracking-wider">Course Details</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3 pb-3 sm:pb-3.5 border-b border-slate-200 min-w-0">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-indigo-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-600 font-bold uppercase tracking-tight sm:tracking-wider break-words">Duration</div>
                      <div className="text-sm font-semibold text-slate-900">{course.meta?.Duration || (course.months ? `${course.months} months` : "—")}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 pb-3 sm:pb-3.5 border-b border-slate-200 min-w-0">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 text-blue-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-600 font-bold uppercase tracking-tight sm:tracking-wider">Lessons</div>
                      <div className="text-sm font-semibold text-slate-900">{course.lessons ?? "—"}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 pb-3 sm:pb-3.5 border-b border-slate-200 min-w-0">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 sm:w-5 h-4 sm:h-5 text-green-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-600 font-bold uppercase tracking-tight sm:tracking-wider">Language</div>
                      <div className="text-sm font-semibold text-slate-900">{course.meta?.language || "English"}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 pb-3 sm:pb-3.5 border-b border-slate-200 min-w-0">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-purple-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-600 font-bold uppercase tracking-tight sm:tracking-wider">Type</div>
                      <div className="text-sm font-semibold text-slate-900">{ptype}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 min-w-0">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-4 sm:w-5 h-4 sm:h-5 text-amber-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-600 font-bold uppercase tracking-tight sm:tracking-wider">Certificate</div>
                      <div className="text-sm font-semibold text-slate-900">{course.meta?.certificate === "no" ? "No" : "Yes"}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Level Badge */}
              <div className="bg-gradient-to-br from-navy-deep to-navy rounded-2xl p-4 sm:p-5 text-white shadow-lg">
                <div className="text-xs font-bold uppercase tracking-tight sm:tracking-wider opacity-90 mb-2">Level</div>
                <div className="text-xl sm:text-2xl font-bold">{ptype === 'Certificate' ? 'Intermediate' : (ptype === 'PG Diploma' || ptype === 'Fellowship' ? 'Expert' : course.level)}</div>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <div className="lg:col-span-7 space-y-8">
          <div id="overview" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-navy-deep to-navy"></div>
              Course Overview
            </h2>
            <div className="bg-white border border-slate-300 rounded-xl p-3 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-medium tracking-wide">{course.overview}</p>
            </div>
          </div>

          {/* What you'll learn */}
          {course.learn.length > 0 && (
            <div id="learn" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-emerald-600 to-emerald-500"></div>
                What You'll Learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
                {course.learn.map((o: string, idx: number) => (
                  <div key={idx} className="border border-slate-300 rounded-xl p-3 sm:p-5 bg-white hover:border-emerald-300 hover:shadow-md transition-all">
                    <div className="flex gap-2 sm:gap-3">
                      <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 sm:w-4 h-3 sm:h-4 text-emerald-700" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                      <p className="text-slate-700 text-sm sm:text-base font-medium tracking-wide">{o}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Requirements */}
          {course.requirements && course.requirements.length > 0 && (
            <div id="requirements" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-orange-600 to-orange-500"></div>
                Requirements
              </h2>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {course.requirements.map((r: string, idx: number) => (
                  <span key={idx} className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 bg-gradient-to-r from-orange-50 to-orange-100/50 border border-orange-200 text-slate-700 text-xs sm:text-base font-semibold rounded-full hover:shadow-md transition-all hover:border-orange-300">
                    <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-orange-600"></div>
                    {r}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CURRICULUM SECTION */}
          {course.modules.length > 0 && (
            <div id="curriculum" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-navy-deep to-navy"></div>
                Curriculum
              </h2>
              <p className="text-sm text-slate-600 mb-5">{course.modules.length} Sections · {course.lessons ?? "—"} Lessons · {course.months ? `${course.months} Months` : "—"}</p>
              <div className="space-y-3">
                {course.modules.map((m: string, i: number) => (
                  <details key={m + i} className="group border border-slate-300 hover:border-navy-deep/40 rounded-xl overflow-hidden transition-all bg-white hover:shadow-md">
                    <summary className="cursor-pointer px-3 sm:px-6 py-3 sm:py-5 flex items-center justify-between font-semibold text-slate-900 hover:bg-navy-deep/5 transition list-none">
                      <div className="flex items-center gap-2 sm:gap-4">
                        <div className="flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-gradient-to-br from-navy-deep to-navy text-white font-bold text-xs sm:text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <div className="text-sm sm:text-base text-slate-900 font-semibold tracking-wide">{m.replace(/^Module \d+:\s*/, '')}</div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-3">
                        <span className="text-xs bg-slate-100 text-slate-700 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold text-xs">
                          {Array.isArray(course.moduleDetails?.[i]) ? (course.moduleDetails[i] as string[]).length : '—'} lessons
                        </span>
                        <svg className="w-4 sm:w-5 h-4 sm:h-5 text-slate-600 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </summary>
                    <div className="px-3 sm:px-6 pb-3 sm:pb-5 bg-navy-deep/5 border-t border-slate-300">
                      {course.moduleDetails && course.moduleDetails[i]
                        ? Array.isArray(course.moduleDetails[i])
                          ? (
                            <ul className="space-y-2">
                              {(course.moduleDetails[i] as string[]).map((lesson, li) => (
                                <li key={li} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3.5 rounded-lg border border-slate-300 bg-white hover:bg-navy-deep/5 transition">
                                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-navy-deep flex-shrink-0 font-bold" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                  </svg>
                                  <span className="text-sm sm:text-base text-slate-700 font-medium tracking-wide">{lesson}</span>
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
          <div id="instructor" className="scroll-mt-24">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <div className="w-1 h-6 bg-gradient-to-b from-teal-600 to-teal-500"></div>
              Instructor
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
              {(course.trainers && course.trainers.length > 0 ? course.trainers : [{ name: "DMHCA Faculty", title: "Expert Faculty", bio: "Experienced clinicians and educators." }]).map((trainer: any, idx: number) => (
                <div key={idx} className="border border-slate-300 rounded-xl p-3 sm:p-6 bg-white hover:border-teal-300 hover:shadow-lg transition-all">
                  <div className="flex gap-2 sm:gap-4">
                    <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 sm:border-3 border-slate-200 bg-slate-100">
                      <img src={trainer.image || "/logo.webp"} alt={trainer.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900 text-sm sm:text-base tracking-wide">{trainer.name}</div>
                      {trainer.title && <div className="text-xs sm:text-sm text-teal-700 font-semibold mt-1 tracking-wide">{trainer.title}</div>}
                      {trainer.bio && <div className="text-xs sm:text-sm text-slate-700 mt-2 sm:mt-2.5 leading-relaxed font-medium">{trainer.bio}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {course.faqs.length > 0 && (
            <div id="faqs" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <div className="w-1 h-6 bg-gradient-to-b from-indigo-600 to-indigo-500"></div>
                Frequently Asked Questions
              </h2>
              <div className="border border-slate-300 rounded-xl overflow-hidden bg-white shadow-sm divide-y divide-slate-300">
                {course.faqs.map((f: { q: string; a: string }, i: number) => (
                  <details key={i} className="group" open={i === 0}>
                    <summary className="cursor-pointer px-3 sm:px-6 py-3 sm:py-5 font-bold text-sm sm:text-base text-slate-900 hover:bg-indigo-50/40 transition flex items-center justify-between list-none tracking-wide">
                      <span>{f.q}</span>
                      <svg className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700 group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </summary>
                    <div className="px-3 sm:px-6 py-3 sm:py-5 bg-indigo-50/20 text-sm sm:text-base text-slate-700 leading-relaxed font-medium border-t border-slate-300 tracking-wide">{f.a}</div>
                  </details>
                ))}
              </div>
            </div>
          )}

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
                return src.map((r: any, i: number) => ({
                  id: r.id || `r-${course.slug}-${i}`,
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
              <div id="reviews" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-rose-600 to-rose-500"></div>
                  Student Reviews
                </h2>
                <div className="space-y-4">
                  {localReviews.map((r: any, i: number) => (
                    <div key={r.id || i} className="p-3 sm:p-5 border border-slate-300 rounded-xl bg-white hover:shadow-lg transition-all">
                      <div className="flex items-start gap-2 sm:gap-4">
                        <div className="w-10 sm:w-14 h-10 sm:h-14 rounded-full bg-slate-100 flex items-center justify-center overflow-hidden border-2 border-slate-300 flex-shrink-0">
                          <img src={r.studentImage || '/reviews/default-avatar.svg'} alt={r.studentName} className="w-9 sm:w-13 h-9 sm:h-13 object-contain" onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = '/reviews/default-avatar.svg'; }} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <div>
                              <div className="font-bold text-sm sm:text-base text-slate-900 tracking-wide">{r.studentName}</div>
                              <div className="text-xs sm:text-sm text-slate-600 mt-0.5 sm:mt-1 font-semibold">{r.title ? r.title + ' · ' : ''}<span className="text-rose-700 font-bold">{r.rating} ★</span></div>
                            </div>
                          </div>
                          <div className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-700 leading-relaxed font-medium tracking-wide">{r.comment}</div>
                          {r.adminReply && (
                            <div className="mt-3 sm:mt-4 p-2 sm:p-4 border border-slate-300 rounded-lg bg-slate-50 text-xs sm:text-sm">
                              <div className="text-xs text-slate-600 font-bold uppercase mb-1 sm:mb-2 tracking-wider">Admin Reply</div>
                              <div className="text-sm sm:text-base text-slate-700 font-medium tracking-wide">{r.adminReply}</div>
                            </div>
                          )}
                        </div>
                        <button type="button" onClick={() => handleAdminReply(i)} className="text-xs px-2 sm:px-3 py-1 sm:py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-900 hover:text-white transition flex-shrink-0 font-semibold tracking-wide">Reply</button>
                      </div>
                    </div>
                  ))}

                  <div className="p-3 sm:p-6 border border-dashed border-slate-400 rounded-xl bg-slate-50">
                    <div className="text-xs sm:text-sm text-slate-700 font-bold text-center mb-3 sm:mb-4 tracking-wide">Have feedback? Add a review below:</div>
                    <form onSubmit={handleSubmit} className="space-y-2 sm:space-y-3">
                      <input ref={nameRef} className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg bg-white text-sm sm:text-base text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" placeholder="Your name" />
                      <select ref={titleRef} defaultValue="Practical" className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg bg-white text-sm sm:text-base text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent">
                        <option value="Practical">Practical</option>
                        <option value="Learned">Learned</option>
                        <option value="Well structured">Well structured</option>
                        <option value="Good pacing">Good pacing</option>
                        <option value="Concise modules">Concise modules</option>
                        <option value="Excellent content">Excellent content</option>
                      </select>
                      <textarea ref={textRef} className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-slate-300 rounded-lg bg-white text-sm sm:text-base text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent" rows={3} placeholder="Your review" />
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 items-stretch sm:items-center">
                        <label className="text-sm sm:text-base text-slate-700 font-bold tracking-wide">Rating:</label>
                        <select ref={ratingRef} defaultValue="5" className="px-2 sm:px-3 py-2 sm:py-2.5 border border-slate-300 rounded-lg bg-white text-sm sm:text-base font-semibold focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent">
                          <option value="5">5 ★</option>
                          <option value="4">4 ★</option>
                          <option value="3">3 ★</option>
                          <option value="2">2 ★</option>
                          <option value="1">1 ★</option>
                        </select>
                        <button type="submit" className="w-full sm:w-auto sm:ml-auto px-4 sm:px-6 py-2 sm:py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm sm:text-base font-bold transition tracking-wide">Submit Review</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            );
          })()}
            </div>

            {/* RIGHT SIDEBAR - RELATED COURSES */}
            <aside className="lg:col-span-3">
              <div className="sticky top-32">
                {/* Video Card */}
                <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-xl mb-6">
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
                </div>

                {/* Pricing Card */}
                <div className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all mb-6">
                  {/* Header */}
                  <div className="bg-gradient-to-r from-navy-deep to-navy px-5 sm:px-6 py-4 text-white">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-90 mb-1">Course Fee</div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <div className="text-3xl sm:text-4xl font-black" style={{ letterSpacing: '0.02em' }}>{formatINR(course.priceINR).replace('.00', '')}</div>
                      <div className="text-sm sm:text-base font-bold">+GST</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="text-sm text-slate-600 font-semibold">
                      Total: <span className="text-slate-900 font-bold" style={{ letterSpacing: '0.02em' }}>
                        ₹ {Math.floor(totalPrice).toLocaleString('en-IN')}
                      </span>
                    </div>
                    
                    {/* CTAs */}
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          try {
                            if (typeof window === 'undefined') return;
                            
                            // Check if user is logged in
                            const token = localStorage.getItem('token');
                            if (!token) {
                              // Not authenticated - show signup modal on this page
                              setShowSignupFlow(true);
                              return;
                            }
                            
                            // User is authenticated - add to cart
                            const key = 'cart';
                            const userId = localStorage.getItem('userId');
                            const existing = JSON.parse(localStorage.getItem(key) || '[]');
                            const item = { slug: course.slug, title: course.title, priceINR: course.priceINR || course.price || 0, qty: 1 };
                            const found = existing.find((c: any) => c.slug === item.slug);
                            
                            if (found) {
                              // Course already in cart - show alert
                              alert('This course is already in your cart. You can only purchase one copy of each course.');
                              return;
                            }
                            
                            existing.push(item);
                            localStorage.setItem(key, JSON.stringify(existing));
                            
                            // Save to database if user is logged in
                            if (userId) {
                              saveCart({ userId, cartItems: existing }).catch(err => {
                                console.warn('Warning: Could not save cart to database:', err);
                                // Continue even if database save fails
                              });
                            }
                            
                            window.location.href = '/cart';
                          } catch (e) {
                            console.error('Add to study failed', e);
                          }
                        }}
                        className="w-full inline-flex justify-center items-center px-5 py-3 bg-gradient-to-r from-navy-deep to-navy hover:from-navy hover:to-navy-deep text-white text-base font-bold rounded-xl transition shadow-lg hover:shadow-xl tracking-wide"
                      >
                        Add to study
                      </button>
                      <Link 
                        to="/contact-us"
                        className="w-full inline-flex justify-center items-center px-5 py-3 bg-gradient-to-r from-navy-deep to-navy hover:from-navy hover:to-navy-deep text-white text-base font-bold rounded-xl transition shadow-lg hover:shadow-xl tracking-wide"
                      >
                        Talk to Counsellor
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Related Courses */}
                {related.length > 0 && (
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 sm:p-6">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Recommended Courses</h4>
                    <div className="space-y-4">
                      {related.slice(0, 3).map((r: any) => (
                        <Link 
                          key={r.slug}
                          to="/courses/$slug"
                          params={{ slug: r.slug }}
                          className="flex gap-3 p-3 rounded-lg hover:bg-slate-50 transition group"
                        >
                          <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200 border border-slate-300">
                            <img src={r.image} alt={r.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition line-clamp-2">{r.title}</div>
                            <div className="text-xs text-slate-600 mt-1">{r.lessons || 0} lessons</div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition flex-shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Signup Flow Modal */}
      <SignupFlow 
        isOpen={showSignupFlow} 
        onClose={() => setShowSignupFlow(false)} 
        onSuccess={handleSignupSuccess}
        onSwitchToLogin={() => {
          setShowSignupFlow(false);
          setShowOtpModal(true);
        }}
      />

      {/* OTP Login Modal */}
      <OTPLoginModal 
        isOpen={showOtpModal} 
        onClose={() => setShowOtpModal(false)} 
        onSuccess={handleLoginSuccess}
        onSwitchToSignup={() => {
          setShowOtpModal(false);
          setShowSignupFlow(true);
        }}
      />
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
