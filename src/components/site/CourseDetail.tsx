import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { CourseCard } from "./CourseCard";
import { OTPLoginModal } from "../OTPLoginModal";
import { SignupFlow } from "../SignupFlow";
import {
  ArrowLeft,
  Star,
  BookOpen,
  Clock,
  Award,
  GraduationCap,
  Globe,
  FileCheck,
  ArrowUpRight,
} from "lucide-react";
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

export function CourseDetail({
  course,
  primaryCat,
  ptype,
  gstAmount,
  razorpayAmount,
  totalPrice,
  formatINR,
  related,
}: {
  course: any;
  primaryCat: any;
  ptype: string;
  gstAmount: number;
  razorpayAmount: number;
  totalPrice: number;
  formatINR: (n: number) => string;
  related: any[];
}) {
  const isFellowship = ptype.trim().toLowerCase() === "fellowship";
  const isPgDiploma = /pg\s*diploma|post\s*graduate\s*diploma/i.test(
    `${ptype} ${course.program ?? ""} ${course.title ?? ""}`,
  );
  const aaaPartner = { src: "/AAA-logo-dark-text.png", name: "American Accreditation Association" };
  const ibmpPartner = {
    src: "/ACADEMIC PARTNERS/ibmp-logo.webp",
    name: "International Board of Medical Practitioners",
  };
  const academicPartners = isPgDiploma
    ? [
        aaaPartner,
        { src: "/ACADEMIC PARTNERS/btu_hero_logo.webp", name: "Bir Tikendrajit University" },
        { src: "/ACADEMIC PARTNERS/duke logo.webp", name: "Duke International University" },
        ibmpPartner,
        {
          src: "/ACADEMIC PARTNERS/logo-srdu.webp",
          name: "Shri Rukmani Dwarkadhish University",
        },
      ]
    : [aaaPartner, ibmpPartner];
  const fellowshipTraining = "11 Months Online + 1 Month Clinical Training";
  const navigate = useNavigate();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showSignupFlow, setShowSignupFlow] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const handleWheel = (event: WheelEvent) => {
      if (
        event.defaultPrevented ||
        !event.cancelable ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
      ) {
        return;
      }

      let target = event.target instanceof Element ? event.target : null;
      while (target && target !== content) {
        const overflowY = getComputedStyle(target).overflowY;
        if (
          target.matches("input, textarea, select, [contenteditable]") ||
          (/(auto|scroll)/.test(overflowY) && target.scrollHeight > target.clientHeight)
        ) {
          return;
        }
        target = target.parentElement;
      }

      const unit =
        event.deltaMode === WheelEvent.DOM_DELTA_LINE
          ? parseFloat(getComputedStyle(content).lineHeight)
          : event.deltaMode === WheelEvent.DOM_DELTA_PAGE
            ? window.innerHeight
            : 1;

      event.preventDefault();
      window.scrollBy({ top: event.deltaY * unit * 0.65, behavior: "instant" });
    };

    content.addEventListener("wheel", handleWheel, { passive: false });
    return () => content.removeEventListener("wheel", handleWheel);
  }, []);

  const handleEnrollClick = () => {
    // Check if user is logged in
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        // User is logged in, navigate to apply
        navigate({
          to: "/apply",
          search: { program: course.program, course: getIBMCourseName(course.title) },
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
    if (typeof window !== "undefined") {
      const key = "cart";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      const item = {
        slug: course.slug,
        title: course.title,
        priceINR: course.priceINR || course.price || 0,
        qty: 1,
      };
      const found = existing.find((c: any) => c.slug === item.slug);
      // Don't add if already in cart - limit to 1 per course
      if (!found) {
        existing.push(item);
      }
      localStorage.setItem(key, JSON.stringify(existing));
      window.location.href = "/cart";
    }
  };

  const handleSignupSuccess = () => {
    setShowSignupFlow(false);
    // Add course to cart after successful signup
    if (typeof window !== "undefined") {
      const key = "cart";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      const item = {
        slug: course.slug,
        title: course.title,
        priceINR: course.priceINR || course.price || 0,
        qty: 1,
      };
      const found = existing.find((c: any) => c.slug === item.slug);
      // Don't add if already in cart - limit to 1 per course
      if (!found) {
        existing.push(item);
      }
      localStorage.setItem(key, JSON.stringify(existing));
      window.location.href = "/cart";
    }
  };

  // JSON-LD Schemas
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.overview,
    provider: {
      "@type": "Organization",
      name: "DMHCA",
      url: "https://www.dmhca.in",
      logo: "https://www.dmhca.in/logo.webp",
    },
    image: course.image,
    duration: course.months ? `PT${course.months}M` : undefined,
    numberOfLessons: course.lessons || undefined,
    educationLevel: course.level,
    url: `https://www.dmhca.in/courses/${course.slug}`,
    aggregateRating:
      course.rating && course.reviewCount
        ? {
            "@type": "AggregateRating",
            ratingValue: course.rating,
            ratingCount: course.reviewCount,
          }
        : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.dmhca.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Courses",
        item: "https://www.dmhca.in/top-medical-courses",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: primaryCat.name,
        item: `https://www.dmhca.in/course-category/${primaryCat.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: course.title,
        item: `https://www.dmhca.in/courses/${course.slug}`,
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DMHCA",
    url: "https://www.dmhca.in",
    logo: "https://www.dmhca.in/logo.webp",
    description: "Top institute for accredited medical courses and fellowships",
    sameAs: [
      "https://www.facebook.com/dmhca",
      "https://twitter.com/dmhca",
      "https://www.linkedin.com/company/dmhca",
    ],
  };

  // FAQ Schema
  const faqSchema =
    course.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: course.faqs.map((faq: any) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.a,
            },
          })),
        }
      : null;

  return (
    <div className="course-detail-page course-page home-page min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <section className="course-hero relative mx-auto mt-6 w-[calc(100%-2.5rem)] max-w-[92rem] md:mt-8 md:w-[calc(100%-4rem)]">
        <div className="course-hero-content">
          <div className="course-hero-copy">
            <Link
              to="/course-category/$slug"
              params={{ slug: primaryCat.slug }}
              className="course-hero-category group mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <ArrowLeft
                className="h-4 w-4 transition group-hover:-translate-x-1"
                aria-hidden="true"
              />{" "}
              {primaryCat.name}
            </Link>
            <h1 className="max-w-6xl text-balance font-display text-3xl leading-tight tracking-[-0.04em] text-navy-deep sm:text-4xl lg:text-5xl">
              {course.title}
            </h1>
            {course.heroDescription && (
              <p className="mt-3 max-w-4xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                {course.heroDescription}
              </p>
            )}
            {isFellowship && (
              <div className="course-hero-training mt-4 flex w-fit max-w-full flex-wrap items-center gap-x-3 gap-y-1 rounded-xl border px-4 py-2">
                <div className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  12-Month Fellowship
                </div>
                <div className="text-balance text-sm font-medium leading-snug">
                  {fellowshipTraining}
                </div>
              </div>
            )}
            <div className="course-hero-metadata mt-5 flex max-w-5xl flex-wrap gap-2.5 md:text-sm">
              {course.rating && (
                <div className="course-hero-meta inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#800020] text-[#800020]" aria-hidden="true" />{" "}
                    <span className="font-semibold">{course.rating}</span>
                  </div>{" "}
                  <span>({course.reviewCount} reviews)</span>
                </div>
              )}
              {course.lessons != null && (
                <div className="course-hero-meta inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
                  <BookOpen className="w-4 h-4 text-[#800020]" aria-hidden="true" />{" "}
                  <span className="font-medium">{course.lessons} lessons</span>
                </div>
              )}
              {course.months != null && (
                <div className="course-hero-meta inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
                  <Clock className="w-4 h-4 text-[#800020]" aria-hidden="true" />{" "}
                  <span className="font-medium">{course.months} months</span>
                </div>
              )}
              <div className="course-hero-meta inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
                <Award className="w-4 h-4 text-[#800020]" aria-hidden="true" />{" "}
                <span className="font-medium">{ptype}</span>
              </div>
              <div className="course-hero-meta inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
                <GraduationCap className="w-4 h-4 text-[#800020]" aria-hidden="true" />{" "}
                <span className="font-medium">
                  {ptype === "Certificate"
                    ? "Intermediate"
                    : ptype === "PG Diploma" || ptype === "Fellowship"
                      ? "Expert"
                      : course.level}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-surface min-h-screen">
        <div className="container-home mx-auto max-w-[96rem] py-6 lg:py-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[15rem_minmax(0,1fr)_18rem] lg:gap-8 xl:grid-cols-[16rem_minmax(0,1fr)_20rem]">
            {/* LEFT SIDEBAR - COURSE DETAILS (static on large screens) */}
            <aside className="min-w-0 h-fit space-y-5 lg:sticky lg:top-32 lg:self-start">
              {/* Course Details Card */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-4 sm:p-5 space-y-4">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-tight sm:tracking-wider">
                  Course Details
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-2 sm:gap-3 pb-3 sm:pb-3.5 border-b border-slate-200 min-w-0">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-[#800020]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-[#800020]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-bold uppercase tracking-tight sm:tracking-wider break-words">
                        Duration
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                        {course.meta?.Duration || (course.months ? `${course.months} months` : "—")}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 pb-3 sm:pb-3.5 border-b border-slate-200 min-w-0">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-[#800020]/10 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-4 sm:w-5 h-4 sm:h-5 text-[#800020]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-600 font-bold uppercase tracking-tight sm:tracking-wider">
                        Lessons
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        {course.lessons ?? "—"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 pb-3 sm:pb-3.5 border-b border-slate-200 min-w-0">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-[#800020]/10 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 sm:w-5 h-4 sm:h-5 text-[#800020]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-600 font-bold uppercase tracking-tight sm:tracking-wider">
                        Language
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        {course.meta?.language || "English"}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 pb-3 sm:pb-3.5 border-b border-slate-200 min-w-0">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-[#800020]/10 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5 text-[#800020]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-600 font-bold uppercase tracking-tight sm:tracking-wider">
                        Type
                      </div>
                      <div className="text-sm font-semibold text-slate-900">{ptype}</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3 min-w-0">
                    <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg bg-[#800020]/10 flex items-center justify-center flex-shrink-0">
                      <FileCheck className="w-4 sm:w-5 h-4 sm:h-5 text-[#800020]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-slate-600 font-bold uppercase tracking-tight sm:tracking-wider">
                        Certificate
                      </div>
                      <div className="text-sm font-semibold text-slate-900">
                        {course.meta?.certificate === "no" ? "No" : "Yes"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Level Badge */}
              <div className="bg-gradient-to-br from-[#800020] to-[#402b43] rounded-2xl p-4 sm:p-5 text-white shadow-lg">
                <div className="text-xs font-bold uppercase tracking-tight sm:tracking-wider opacity-90 mb-2">
                  Level
                </div>
                <div className="text-xl sm:text-2xl font-bold">
                  {ptype === "Certificate"
                    ? "Intermediate"
                    : ptype === "PG Diploma" || ptype === "Fellowship"
                      ? "Expert"
                      : course.level}
                </div>
              </div>
            </aside>

            {/* MAIN CONTENT */}
            <div ref={contentRef} className="min-w-0 space-y-8">
              <div id="overview" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                  <div className="w-1 h-6 bg-gradient-to-b from-navy-deep to-navy"></div>
                  Course Overview
                </h2>
                <div className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-xl p-3 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base font-medium tracking-wide">
                    {course.overview}
                  </p>
                </div>
              </div>

              {/* Academic partners (placed directly below Course Overview) */}
              <section className="py-2">
                <div id="academic-partners" className="scroll-mt-24 mt-2">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 mt-1 flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-navy-deep to-navy"></div>
                    Academic partners
                  </h2>

                  <div className="py-3">
                    <div
                      className={`flex flex-wrap justify-center gap-3 sm:gap-4 ${
                        isPgDiploma ? "" : "sm:max-w-md sm:mx-auto"
                      }`}
                    >
                      {academicPartners.map(({ src, name }) => (
                        <div
                          key={src}
                          className={`academic-logo-item h-28 px-3 sm:px-6 flex items-center justify-center w-[calc(50%-0.375rem)] sm:w-[calc(50%-0.5rem)] ${
                            isPgDiploma ? "sm:!w-[calc(33.333%-0.667rem)]" : ""
                          }`}
                        >
                          <img
                            src={src}
                            alt={name}
                            loading="lazy"
                            style={{
                              maxWidth: `min(100%, ${src === aaaPartner.src ? 210 : src === ibmpPartner.src || src.endsWith("btu_hero_logo.webp") ? 88 : 240}px)`,
                              maxHeight: 88,
                            }}
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* What you'll learn */}
              {course.learn.length > 0 && (
                <div id="learn" className="scroll-mt-24 mt-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#800020] to-[#402b43]"></div>
                    What You'll Learn
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-4">
                    {course.learn.map((o: string, idx: number) => (
                      <div
                        key={idx}
                        className="border border-slate-300 dark:border-slate-700 rounded-xl p-3 sm:p-5 bg-white dark:bg-slate-900 hover:shadow-md transition-all"
                      >
                        <div className="flex gap-2 sm:gap-3">
                          <div className="w-5 sm:w-6 h-5 sm:h-6 rounded-full bg-[#800020]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-3 sm:w-4 h-3 sm:h-4 text-[#800020]"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                            </svg>
                          </div>
                          <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base font-medium tracking-wide">
                            {o}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Requirements */}
              {course.requirements && course.requirements.length > 0 && (
                <div id="requirements" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#800020] to-[#402b43]"></div>
                    Requirements
                  </h2>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {course.requirements.map((r: string, idx: number) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 bg-[#800020]/5 border border-[#800020]/15 text-slate-700 dark:text-slate-300 text-xs sm:text-base font-semibold rounded-full hover:shadow-md transition-all"
                      >
                        <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#800020]"></div>
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CURRICULUM SECTION */}
              {course.modules.length > 0 && (
                <div id="curriculum" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                    <div className="w-1 h-6 bg-gradient-to-b from-navy-deep to-navy"></div>
                    Curriculum
                  </h2>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
                    {course.modules.length} Sections · {course.lessons ?? "—"} Lessons ·{" "}
                    {course.months ? `${course.months} Months` : "—"}
                  </p>
                  <div className="space-y-3">
                    {course.modules.map((m: string, i: number) => (
                      <details
                        key={m + i}
                        className="group border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden transition-all bg-white dark:bg-slate-900 hover:shadow-md"
                      >
                        <summary className="curriculum-summary cursor-pointer px-3 sm:px-6 py-3 sm:py-5 flex items-center justify-between font-semibold text-slate-900 dark:text-slate-100 hover:bg-navy-deep/5 dark:hover:bg-slate-800 transition list-none">
                          <div className="curriculum-module-heading flex min-w-0 items-center gap-2 sm:gap-4">
                            <div className="curriculum-module-number flex shrink-0 items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-gradient-to-br from-navy-deep to-navy text-white font-bold text-xs sm:text-sm">
                              {String(i + 1).padStart(2, "0")}
                            </div>
                            <div className="curriculum-module-title text-sm sm:text-base text-slate-900 dark:text-slate-200 font-semibold tracking-wide">
                              {m.replace(/^Module \d+:\s*/, "")}
                            </div>
                          </div>
                          <div className="curriculum-module-meta flex items-center gap-1 sm:gap-3">
                            <span className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold text-xs">
                              {Array.isArray(course.moduleDetails?.[i])
                                ? (course.moduleDetails[i] as string[]).length
                                : "—"}{" "}
                              lessons
                            </span>
                            <svg
                              className="w-4 sm:w-5 h-4 sm:h-5 text-slate-600 group-open:rotate-180 transition-transform flex-shrink-0"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                              />
                            </svg>
                          </div>
                        </summary>
                        <div className="curriculum-lessons px-3 sm:px-6 pb-3 sm:pb-5 bg-navy-deep/5 dark:bg-slate-800/30 border-t border-slate-300 dark:border-slate-700">
                          {course.moduleDetails && course.moduleDetails[i] ? (
                            Array.isArray(course.moduleDetails[i]) ? (
                              <ul className="space-y-2">
                                {(course.moduleDetails[i] as string[]).map((lesson, li) => (
                                  <li
                                    key={li}
                                    className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-navy-deep/5 transition"
                                  >
                                    <svg
                                      className="w-4 sm:w-5 h-4 sm:h-5 text-navy-deep dark:text-white flex-shrink-0 font-bold"
                                      fill="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                    <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium tracking-wide">
                                      {lesson}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <div className="text-base text-slate-700 dark:text-slate-300 font-medium">
                                {course.moduleDetails[i]}
                              </div>
                            )
                          ) : (
                            <div className="text-base text-slate-600 dark:text-slate-400 font-medium">
                              Module details will be provided during enrollment.
                            </div>
                          )}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* INSTRUCTORS SECTION */}
              <div id="instructor" className="scroll-mt-24">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                  <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#800020] to-[#402b43]"></div>
                  Instructor
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 sm:gap-5">
                  {(course.trainers && course.trainers.length > 0
                    ? course.trainers
                    : [
                        {
                          name: "DMHCA Faculty",
                          title: "Expert Faculty",
                          bio: "Experienced clinicians and educators.",
                        },
                      ]
                  ).map((trainer: any, idx: number) => (
                    <div
                      key={idx}
                      className="border border-slate-300 dark:border-slate-700 rounded-xl p-3 sm:p-6 bg-white dark:bg-slate-900 hover:shadow-lg transition-all"
                    >
                      <div className="flex gap-2 sm:gap-4">
                        <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden border-2 sm:border-3 border-slate-200 dark:border-slate-400 bg-slate-100 dark:bg-white/20">
                          <img
                            src={trainer.image || "/logo.webp"}
                            alt={trainer.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base tracking-wide">
                            {trainer.name}
                          </div>
                          {trainer.title && (
                            <div className="text-xs sm:text-sm text-[#800020] dark:text-[#f7cbd7] font-semibold mt-1 tracking-wide">
                              {trainer.title}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {course.faqs.length > 0 && (
                <div id="faqs" className="scroll-mt-24">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-3">
                    <div className="w-1 h-6 rounded-full bg-gradient-to-b from-[#800020] to-[#402b43]"></div>
                    Frequently Asked Questions
                  </h2>
                  <div className="border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm divide-y divide-slate-300 dark:divide-slate-700">
                    {course.faqs.map((f: { q: string; a: string }, i: number) => (
                      <details key={i} className="group" open={i === 0}>
                        <summary className="cursor-pointer px-3 sm:px-6 py-3 sm:py-5 font-medium text-sm sm:text-base text-slate-900 dark:text-slate-100 hover:bg-[#800020]/5 transition flex items-center justify-between gap-4 list-none">
                          <span>{f.q}</span>
                          <svg
                            className="w-4 sm:w-5 h-4 sm:h-5 text-slate-700 dark:text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                          </svg>
                        </summary>
                        <div className="px-3 sm:px-6 py-3 sm:py-5 bg-[#800020]/5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-medium border-t border-slate-300 dark:border-slate-700 tracking-wide">
                          {f.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}

              {/* Reviews removed per request */}
            </div>

            {/* RIGHT SIDEBAR - RELATED COURSES */}
            <aside className="min-w-0">
              <div className="lg:sticky lg:top-32">
                {/* Video Card */}
                <div className="bg-[#29334a] border border-[#29334a]/20 rounded-2xl overflow-hidden shadow-xl mb-6">
                  {/* Video Block */}
                  <div className="aspect-[5/3] relative overflow-hidden bg-[#29334a] group">
                    {!isVideoPlaying ? (
                      <>
                        {/* Thumbnail View */}
                        <img
                          src="https://img.youtube.com/vi/5-2QOkBu180/maxresdefault.jpg"
                          alt="Course Video"
                          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src =
                              "https://img.youtube.com/vi/5-2QOkBu180/hqdefault.jpg";
                          }}
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                        {/* Play Button */}
                        <button
                          onClick={() => setIsVideoPlaying(true)}
                          className="absolute inset-0 flex items-center justify-center group"
                        >
                          <div className="w-16 h-16 rounded-full bg-[#800020] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 hover:bg-[#68001e]">
                            <svg
                              className="w-6 h-6 text-white ml-1"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
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
                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all mb-6">
                  {isFellowship && (
                    <div className="border-b border-[#800020]/15 bg-[#800020]/5 px-5 py-3 sm:px-6">
                      <div className="mb-1 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#800020]">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        12-Month Fellowship
                      </div>
                      <div className="text-sm font-medium leading-snug text-navy-deep">
                        11 Months Online + 1 Month Clinical
                      </div>
                    </div>
                  )}
                  {/* Header */}
                  <div className="bg-gradient-to-r from-[#800020] to-[#402b43] px-5 sm:px-6 py-4 text-white">
                    <div className="text-xs font-bold uppercase tracking-wider opacity-90 mb-1">
                      Course Fee
                    </div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <div
                        className="text-3xl sm:text-4xl font-black"
                        style={{ letterSpacing: "0.02em" }}
                      >
                        {formatINR(course.priceINR).replace(".00", "")}
                      </div>
                      <div className="text-sm sm:text-base font-bold">+GST</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 space-y-4">
                    <div className="text-sm text-slate-600 dark:text-slate-300 font-semibold">
                      Total:{" "}
                      <span
                        className="text-slate-900 dark:text-slate-100 font-bold"
                        style={{ letterSpacing: "0.02em" }}
                      >
                        ₹ {Math.floor(totalPrice).toLocaleString("en-IN")}
                      </span>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3">
                      <button
                        onClick={() => {
                          try {
                            if (typeof window === "undefined") return;

                            // Check if user is logged in
                            const token = localStorage.getItem("token");
                            if (!token) {
                              // Not authenticated - show signup modal on this page
                              setShowSignupFlow(true);
                              return;
                            }

                            // User is authenticated - add to cart
                            const key = "cart";
                            const userId = localStorage.getItem("userId");
                            const existing = JSON.parse(localStorage.getItem(key) || "[]");
                            const item = {
                              slug: course.slug,
                              title: course.title,
                              priceINR: course.priceINR || course.price || 0,
                              qty: 1,
                            };
                            const found = existing.find((c: any) => c.slug === item.slug);

                            if (found) {
                              // Course already in cart - show alert
                              alert(
                                "This course is already in your cart. You can only purchase one copy of each course.",
                              );
                              return;
                            }

                            existing.push(item);
                            localStorage.setItem(key, JSON.stringify(existing));

                            // Save to database if user is logged in
                            if (userId) {
                              saveCart({ userId, cartItems: existing }).catch((err) => {
                                console.warn("Warning: Could not save cart to database:", err);
                                // Continue even if database save fails
                              });
                            }

                            window.location.href = "/cart";
                          } catch (e) {
                            console.error("Add to study failed", e);
                          }
                        }}
                        className="w-full inline-flex justify-center items-center px-5 py-3 bg-[#800020] hover:bg-[#68001e] text-white text-base font-bold rounded-xl transition shadow-lg hover:shadow-xl tracking-wide"
                      >
                        Add to study
                      </button>
                      <Link
                        to="/contact-us"
                        className="w-full inline-flex justify-center items-center px-5 py-3 bg-[#800020] hover:bg-[#68001e] text-white text-base font-bold rounded-xl transition shadow-lg hover:shadow-xl tracking-wide"
                      >
                        Talk to Counsellor
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Related Courses */}
                {related.length > 0 && (
                  <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-5 sm:p-6">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider mb-4">
                      Recommended Courses
                    </h4>
                    <div className="space-y-4">
                      {related.slice(0, 3).map((r: any) => (
                        <Link
                          key={r.slug}
                          to="/courses/$slug"
                          params={{ slug: r.slug }}
                          className="flex gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition group"
                        >
                          <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700">
                            <img
                              src={r.image}
                              alt={r.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-[#800020] transition line-clamp-2">
                              {r.title}
                            </div>
                            <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                              {r.lessons || 0} lessons
                            </div>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#800020] transition flex-shrink-0" />
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
  const firstPeriod = text.indexOf(".");
  if (firstPeriod !== -1 && firstPeriod < 140) {
    // take first sentence; if short, try two sentences
    summary = text.slice(0, firstPeriod + 1);
    const secondPeriod = text.indexOf(".", firstPeriod + 1);
    if (secondPeriod !== -1 && secondPeriod < 220) {
      summary = text.slice(0, secondPeriod + 1);
    }
  } else if (text.length > 140) {
    // smart cut at last space before limit
    const cut = text.slice(0, 140);
    const lastSpace = cut.lastIndexOf(" ");
    summary = (lastSpace > 80 ? cut.slice(0, lastSpace) : cut) + "…";
  }

  return (
    <div className="max-w-2xl">
      <p
        className="text-primary-foreground/85 text-sm md:text-base"
        style={
          {
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          } as React.CSSProperties
        }
      >
        {summary}
      </p>
    </div>
  );
}
