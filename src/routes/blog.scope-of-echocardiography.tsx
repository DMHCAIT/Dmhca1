import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/blog/scope-of-echocardiography")({
  head: () => ({
    meta: [
      { title: "Scope of Echocardiography in India — DMHCA" },
      {
        name: "description",
        content: "Career opportunities and specializations in cardiac ultrasound.",
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
              Scope of Echocardiography
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Explore the growing field of cardiac ultrasound.
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
                <div className="font-bold text-sm sm:text-lg">Very High</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 sm:py-3 md:py-4 bg-white px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img
              src="/blog-images/Scope-of-Echocardiography.webp"
              alt="Scope of Echocardiography"
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
                  { label: "Career Overview in Echocardiography", href: "#career-overview" },
                  { label: "Clinical Settings and Practice", href: "#clinical-settings" },
                  { label: "Advanced Imaging Techniques", href: "#imaging-techniques" },
                  { label: "Procedure and Application Scope", href: "#procedure-scope" },
                  { label: "Specialization Opportunities", href: "#specializations" },
                  { label: "Earning Potential", href: "#earning-potential" },
                  { label: "Future Growth and Innovation", href: "#future-growth" },
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
                Career Overview in Echocardiography
              </h2>
              <p className="text-[#800020] text-sm sm:text-base leading-relaxed">
                Echocardiographers specialize in cardiac ultrasound imaging, providing diagnostic
                information for cardiac assessment. They perform sophisticated imaging studies,
                interpret findings, and assist in treatment planning.
              </p>
            </div>

            <div
              id="clinical-settings"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Clinical Settings and Practice
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Cardiology Centers:</strong> Work in specialized cardiac centers and
                    hospitals
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Diagnostic Labs:</strong> Operate diagnostic ultrasound centers
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Catheterization Labs:</strong> Provide imaging support during
                    interventions
                  </div>
                </div>
              </div>
            </div>

            <div
              id="imaging-techniques"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Advanced Imaging Techniques
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Transthoracic echocardiography (TTE) with complete protocols</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Transesophageal echocardiography (TEE) for advanced imaging</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>3D echocardiography and volumetric analysis</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Stress echocardiography for ischemia assessment</div>
                </div>
              </div>
            </div>

            <div
              id="procedure-scope"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Procedure and Application Scope
              </h2>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Assess cardiac function and structure</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Evaluate valvular disease and function</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Diagnose congenital heart diseases</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Guide interventional procedures</div>
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
                Specialization Opportunities
              </h2>
              <p className="text-[#800020] text-sm sm:text-base leading-relaxed mb-3">
                Echocardiographers can specialize in various areas:
              </p>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Stress Echo Specialist</strong> - Ischemia detection and risk assessment
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>TEE Expert</strong> - Perioperative and advanced imaging
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>
                    <strong>Pediatric Echocardiography</strong> - Congenital and pediatric cardiac
                    disease
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
                  <div>Hospital echocardiographers: 10-22 lakhs annually</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Cardiology clinic-based: 20-40 lakhs annually</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Private diagnostic center: 40-70 lakhs annually</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>International opportunities: 50+ lakhs annually</div>
                </div>
              </div>
            </div>

            <div
              id="future-growth"
              className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-[#f7cbd7]/25 to-[#f7cbd7]/25 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#f7cbd7] not-prose"
            >
              <div className="inline-block px-3 sm:px-4 py-1 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-full text-[#800020] text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#800020] mb-3 sm:mb-4">
                Future Growth and Innovation
              </h2>
              <p className="text-[#800020] text-sm sm:text-base leading-relaxed mb-3">
                Echocardiography continues to evolve with technology:
              </p>
              <div className="space-y-3 text-[#800020] text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>AI-assisted image analysis and diagnosis</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Point-of-care echocardiography expansion</div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#800020] font-bold">•</span>
                  <div>Advanced strain imaging and myocardial mechanics</div>
                </div>
              </div>
            </div>

            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29334a] mb-4 sm:mb-6">
                Echocardiography Scope Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="text-xs uppercase tracking-wide text-[#800020] font-bold">
                    Skill Demand
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-[#800020] mt-2">Very High</p>
                </div>
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="text-xs uppercase tracking-wide text-[#800020] font-bold">
                    Technology Integration
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-[#800020] mt-2">Cutting-Edge</p>
                </div>
                <div className="p-4 bg-[#f7cbd7]/25 border border-[#f7cbd7] rounded-lg">
                  <p className="text-xs uppercase tracking-wide text-[#800020] font-bold">
                    Job Security
                  </p>
                  <p className="text-xl sm:text-2xl font-bold text-[#800020] mt-2">Excellent</p>
                </div>
              </div>
            </div>

            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#29334a] mb-4 sm:mb-6">
                Key Tips for Excelling in Echocardiography
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Master cardiac anatomy in great detail",
                  "Develop excellent hand-eye coordination",
                  "Practice extensively on patients",
                  "Stay updated with imaging technology",
                  "Attend advanced echocardiography courses",
                  "Maintain certification and CME credits",
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
                    q: "What is the scope of echocardiography in India?",
                    a: "Echocardiography has excellent scope due to high prevalence of cardiac diseases. Echocardiographers can work in hospitals, diagnostic centers, cardiology clinics, and private practice with strong job security and competitive salaries.",
                  },
                  {
                    q: "What career opportunities exist after fellowship in echocardiography?",
                    a: "Echocardiographers can work in cardiology centers, establish diagnostic ultrasound clinics, perform procedures in catheterization labs, work as independent contractors, teach in medical colleges, engage in research, and explore international opportunities.",
                  },
                  {
                    q: "What types of echocardiography can specialists perform?",
                    a: "Specialists can perform Transthoracic Echocardiography (TTE), Transesophageal Echocardiography (TEE), 3D echocardiography, Doppler studies, Stress echocardiography, and advanced cardiac imaging with expertise in different protocols.",
                  },
                  {
                    q: "What is the earning potential for echocardiographers?",
                    a: "Hospital echocardiographers earn 10-22 lakhs annually, clinic-based specialists earn 20-40 lakhs annually, while private practitioners with their own ultrasound center earn 40-70+ lakhs annually depending on patient volume.",
                  },
                  {
                    q: "Is echocardiography a good career choice?",
                    a: "Yes, echocardiography offers excellent career prospects with good earning potential, job security, and flexibility. It combines technical skills with clinical decision-making and provides immediate diagnostic impact on patient care.",
                  },
                  {
                    q: "What skills are required for success in echocardiography?",
                    a: "Essential skills include strong cardiac anatomy knowledge, proficiency with ultrasound technology, image acquisition and interpretation expertise, excellent hand-eye coordination, ability to handle complex cardiac cases, and continuous learning of new imaging modalities.",
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
                guidance for your echocardiography specialization career journey.
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
