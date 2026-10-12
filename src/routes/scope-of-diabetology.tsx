import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/scope-of-diabetology")({
  head: () => ({
    meta: [
      { title: "Scope of Diabetology in India — DMHCA" },
      {
        name: "description",
        content: "Career opportunities and specializations in diabetes management.",
      },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="home-page resource-page resource-article min-h-screen">
      <section className="resource-hero relative overflow-hidden">
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-[#800020]/20 border border-[#f7cbd7]/50 rounded-full text-[#f7cbd7] text-xs font-semibold mb-2">
              Medical Career Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              Scope of Diabetology
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Explore career opportunities in diabetes management.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-3 pt-3 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Clock className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Read Time</div>
                <div className="font-bold text-sm sm:text-lg">8 min</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Users className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Career Paths</div>
                <div className="font-bold text-sm sm:text-lg">7+</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Award className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Job Market</div>
                <div className="font-bold text-sm sm:text-lg">Excellent</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Growth Rate</div>
                <div className="font-bold text-sm sm:text-lg">Stable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 sm:py-3 md:py-4 bg-white px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img
              src="/blog-images/Scope-of-Diabetology.webp"
              alt="Scope of Diabetology"
              className="w-full h-auto aspect-[992/496] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-white/50 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate max-w-none">
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 via-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-[#f7cbd7] not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-[#800020] mb-4">
                Quick Navigation
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { label: "Career Overview in Diabetology", href: "#career-overview" },
                  { label: "Patient Care and Management", href: "#patient-care" },
                  { label: "Prevention and Education", href: "#prevention" },
                  { label: "Research and Innovation", href: "#research" },
                  { label: "Specialization Areas", href: "#specializations" },
                  { label: "Earning Potential", href: "#earning-potential" },
                  { label: "Public Health Scope", href: "#public-health" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm sm:text-base text-[#800020] hover:text-[#800020] font-medium"
                  >
                    • {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              id="career-overview"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Career Overview in Diabetology
              </h2>
              <p className="text-[#800020] text-sm sm:text-base leading-relaxed">
                Diabetologists specialize in diagnosing and managing diabetes and metabolic
                disorders. They provide comprehensive care including lifestyle modification,
                medication management, complication prevention, and patient education.
              </p>
            </div>

            <div
              id="patient-care"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Patient Care and Management
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Outpatient Clinics:</strong> Manage diabetes patients in specialized
                    diabetes clinics
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Hospital Practice:</strong> Manage hospitalized diabetic patients and
                    emergencies
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Private Practice:</strong> Establish own diabetes care center
                  </div>
                </div>
              </div>
            </div>

            <div
              id="prevention"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Prevention and Education
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Develop diabetes prevention programs for at-risk populations</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Conduct lifestyle modification and dietary counseling</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Provide patient education on self-management</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Prevent or delay diabetes complications</div>
                </div>
              </div>
            </div>

            <div
              id="research"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Research and Innovation
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Conduct clinical research on new diabetes treatments</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Participate in international diabetes research</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Develop innovative management protocols</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Publish in peer-reviewed journals</div>
                </div>
              </div>
            </div>

            <div
              id="specializations"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Specialization Areas
              </h2>
              <p className="text-[#800020] text-sm sm:text-base leading-relaxed mb-3">
                Diabetologists can specialize in various areas:
              </p>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Type 1 Diabetes Specialist</strong> - Insulin management and immunology
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Type 2 Diabetes and Obesity</strong> - Metabolic management
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Gestational Diabetes Specialist</strong> - Pregnancy and diabetes
                  </div>
                </div>
              </div>
            </div>

            <div
              id="earning-potential"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Earning Potential
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Hospital diabetologists: 12-25 lakhs annually</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Specialized diabetes clinics: 20-40 lakhs annually</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Private practitioners: 25-45 lakhs annually</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Corporate/research positions: 40+ lakhs annually</div>
                </div>
              </div>
            </div>

            <div
              id="public-health"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Public Health Scope
              </h2>
              <p className="text-[#800020] text-sm sm:text-base leading-relaxed mb-3">
                Significant opportunities in public health and preventive medicine:
              </p>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Lead national diabetes screening programs</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Develop community health initiatives</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Work in diabetes health policy and guidelines</div>
                </div>
              </div>
            </div>

            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29334a] mb-4 sm:mb-6">
                Diabetology Scope Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="text-xs uppercase tracking-wide text-[#800020] font-bold">
                    Job Demand
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-[#800020] mt-2">Very High</p>
                </div>
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="text-xs uppercase tracking-wide text-[#800020] font-bold">
                    Disease Prevalence
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-[#800020] mt-2">Rising</p>
                </div>
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="text-xs uppercase tracking-wide text-[#800020] font-bold">
                    Growth Trajectory
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-[#800020] mt-2">Stable</p>
                </div>
              </div>
            </div>

            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29334a] mb-4 sm:mb-6">
                Key Tips for Excelling in Diabetology
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Master latest diabetes management protocols",
                  "Develop strong patient counseling skills",
                  "Stay updated with new medications and treatments",
                  "Focus on complication prevention strategies",
                  "Engage in research on diabetes management",
                  "Build expertise in preventive programs",
                ].map((tip, idx) => (
                  <div key={idx} className="p-4 bg-[#f8f9fc] border border-[#29334a]/15 rounded-lg">
                    <p className="font-bold text-[#29334a] text-sm sm:text-base">✓ {tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29334a] mb-4 sm:mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  {
                    q: "What is the scope of diabetology in India?",
                    a: "Diabetology has exceptional scope in India as diabetes prevalence is among the highest globally. Diabetologists can work in hospitals, clinics, research centers, and private practice with excellent job security and earning potential.",
                  },
                  {
                    q: "What are the career opportunities after MD in Internal Medicine with Diabetology focus?",
                    a: "Diabetologists can work in diabetes care centers, endocrinology clinics, hospitals, engage in research on diabetes management, teach in medical colleges, establish diabetes prevention programs, conduct public health initiatives, and offer telemedicine services.",
                  },
                  {
                    q: "What specializations are available in diabetology?",
                    a: "Popular specializations include Type 1 Diabetes Management, Type 2 Diabetes and Obesity, Gestational Diabetes, Pediatric Diabetes, Diabetic Complications Management, and Preventive Diabetology focusing on lifestyle modification programs.",
                  },
                  {
                    q: "What is the salary potential for diabetologists?",
                    a: "Hospital-based diabetologists earn 12-25 lakhs annually, while private practitioners typically earn 25-45 lakhs annually. Those with diabetes prevention programs and corporate contracts earn 45+ lakhs annually.",
                  },
                  {
                    q: "Is diabetology a good specialty to pursue?",
                    a: "Yes, diabetology offers excellent career prospects due to high disease prevalence. It combines clinical practice, preventive medicine, and research opportunities with consistent patient flow and good earning potential.",
                  },
                  {
                    q: "What skills are required for success in diabetology?",
                    a: "Essential skills include strong metabolic knowledge, expertise in diabetes management protocols, understanding of newer medications, counseling and lifestyle coaching abilities, research aptitude, and excellent communication for patient education.",
                  },
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-6 bg-gradient-to-br from-[#f8f9fc] to-[#f8f9fc] border border-[#29334a]/15 rounded-lg sm:rounded-xl hover:shadow-md transition"
                  >
                    <details className="group">
                      <summary className="flex items-start justify-between cursor-pointer font-semibold text-[#29334a] text-sm sm:text-base">
                        <span className="flex-1 text-left pr-4">{faq.q}</span>
                        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-[#6b5b68] group-open:rotate-180 transition-transform">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </summary>
                      <p className="text-[#29334a] mt-3 text-xs sm:text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 mb-12 not-prose">
              <div className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base px-4 py-3 bg-[#f8f9fc] rounded-lg border border-[#29334a]/15">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-[#29334a]">Reading Time</span>
                  <span className="text-[#29334a]">8 min</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-[#29334a]">Category</span>
                  <span className="text-[#29334a]">Specialty Guide</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-semibold text-[#29334a]">Last Updated</span>
                  <span className="text-[#29334a]">June 2025</span>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 border-2 border-[#f7cbd7] rounded-lg sm:rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-[#800020] mb-2">
                Still have questions?
              </h3>
              <p className="text-sm sm:text-base text-[#800020] mb-4">
                Don't hesitate to reach out to our expert counselors who can provide personalized
                guidance for your diabetology specialization career journey.
              </p>
              <Link
                to="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#800020] hover:bg-[#68001e] text-white font-semibold rounded-lg transition text-sm sm:text-base"
              >
                Contact Our Experts →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
