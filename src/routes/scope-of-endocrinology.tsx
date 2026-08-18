import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/scope-of-endocrinology")({
  head: () => ({
    meta: [
      { title: "Scope of Endocrinology in India — DMHCA" },
      { name: "description", content: "Career opportunities and specializations in endocrine disorders." },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-600/95 to-indigo-600/95 dark:from-violet-700 dark:to-indigo-700"></div>
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-violet-500/20 border border-violet-300/50 rounded-full text-violet-200 text-xs font-semibold mb-2">
              Medical Career Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              Scope of Endocrinology
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Explore the diverse field of endocrinology and metabolic disorders.
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
                <div className="font-bold text-sm sm:text-lg">High</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-2 sm:py-3 md:py-4 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img src="/blog-images/Scope-of-Endocrinology.webp" alt="Scope of Endocrinology" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 dark:from-violet-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-violet-200 dark:border-violet-800/50 not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-violet-900 dark:text-violet-200 mb-4">Quick Navigation</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { label: "Career Overview in Endocrinology", href: "#career-overview" },
                  { label: "Clinical Practice Settings", href: "#clinical-practice" },
                  { label: "Disease Management Focus", href: "#disease-management" },
                  { label: "Diagnostic Expertise", href: "#diagnostic-expertise" },
                  { label: "Specialization Areas", href: "#specializations" },
                  { label: "Earning Potential", href: "#earning-potential" },
                  { label: "Research and Academic Opportunities", href: "#research-scope" },
                ].map((item) => (
                  <a key={item.href} href={item.href} className="text-sm sm:text-base text-violet-900 dark:text-violet-200 hover:text-violet-600 dark:hover:text-violet-300 font-medium">
                    • {item.label}
                  </a>
                ))}
              </div>
            </div>

            <div id="career-overview" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-violet-200 dark:border-violet-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-violet-100 dark:bg-violet-900/30 border border-violet-300 dark:border-violet-700 rounded-full text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-900 dark:text-violet-100 mb-3 sm:mb-4">Career Overview in Endocrinology</h2>
              <p className="text-violet-900 dark:text-violet-100 text-sm sm:text-base leading-relaxed">
                Endocrinologists specialize in diagnosing and managing hormonal and metabolic disorders. They provide comprehensive care including diagnosis, treatment planning, long-term management, and preventive strategies for endocrine diseases.
              </p>
            </div>

            <div id="clinical-practice" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-indigo-200 dark:border-indigo-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 sm:mb-4">Clinical Practice Settings</h2>
              <div className="space-y-3 text-indigo-900 dark:text-indigo-100 text-sm sm:text-base">
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div><strong>Hospital Departments:</strong> Work in endocrinology departments of teaching hospitals</div></div>
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div><strong>Specialized Clinics:</strong> Manage thyroid, diabetes, and other endocrine clinics</div></div>
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div><strong>Private Practice:</strong> Establish own endocrinology consultation center</div></div>
              </div>
            </div>

            <div id="disease-management" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-violet-200 dark:border-violet-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-violet-100 dark:bg-violet-900/30 border border-violet-300 dark:border-violet-700 rounded-full text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-900 dark:text-violet-100 mb-3 sm:mb-4">Disease Management Focus</h2>
              <div className="space-y-3 text-violet-900 dark:text-violet-100 text-sm sm:text-base">
                <div className="flex items-start gap-3"><span className="text-violet-600 dark:text-violet-400 font-bold">•</span><div>Thyroid disease management including hypothyroidism and hyperthyroidism</div></div>
                <div className="flex items-start gap-3"><span className="text-violet-600 dark:text-violet-400 font-bold">•</span><div>Diabetes management with integrated care approach</div></div>
                <div className="flex items-start gap-3"><span className="text-violet-600 dark:text-violet-400 font-bold">•</span><div>Pituitary and adrenal disorder diagnosis and management</div></div>
                <div className="flex items-start gap-3"><span className="text-violet-600 dark:text-violet-400 font-bold">•</span><div>Metabolic bone diseases and osteoporosis management</div></div>
              </div>
            </div>

            <div id="diagnostic-expertise" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-indigo-200 dark:border-indigo-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 sm:mb-4">Diagnostic Expertise</h2>
              <div className="space-y-3 text-indigo-900 dark:text-indigo-100 text-sm sm:text-base">
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div>Interpretation of complex hormonal assays and tests</div></div>
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div>Advanced imaging interpretation (MRI, CT for endocrine pathology)</div></div>
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div>Perform diagnostic procedures like thyroid fine needle aspiration</div></div>
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div>Manage complex diagnostic dilemmas</div></div>
              </div>
            </div>

            <div id="specializations" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-violet-200 dark:border-violet-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-violet-100 dark:bg-violet-900/30 border border-violet-300 dark:border-violet-700 rounded-full text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-900 dark:text-violet-100 mb-3 sm:mb-4">Specialization Areas</h2>
              <p className="text-violet-900 dark:text-violet-100 text-sm sm:text-base leading-relaxed mb-3">
                Endocrinologists can develop expertise in specialized areas:
              </p>
              <div className="space-y-3 text-violet-900 dark:text-violet-100 text-sm sm:text-base">
                <div className="flex items-start gap-3"><span className="text-violet-600 dark:text-violet-400 font-bold">•</span><div><strong>Thyroid Specialist</strong> - Comprehensive thyroid disease management</div></div>
                <div className="flex items-start gap-3"><span className="text-violet-600 dark:text-violet-400 font-bold">•</span><div><strong>Pituitary Expert</strong> - Complex pituitary and hypothalamic disorders</div></div>
                <div className="flex items-start gap-3"><span className="text-violet-600 dark:text-violet-400 font-bold">•</span><div><strong>Reproductive Endocrinologist</strong> - Hormonal infertility management</div></div>
              </div>
            </div>

            <div id="earning-potential" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-indigo-200 dark:border-indigo-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 sm:mb-4">Earning Potential</h2>
              <div className="space-y-3 text-indigo-900 dark:text-indigo-100 text-sm sm:text-base">
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div>Hospital endocrinologists: 15-30 lakhs annually</div></div>
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div>Clinic-based specialists: 25-45 lakhs annually</div></div>
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div>Private practitioners: 45-80 lakhs annually</div></div>
                <div className="flex items-start gap-3"><span className="text-indigo-600 dark:text-indigo-400 font-bold">•</span><div>Corporate and pharmaceutical roles: 50+ lakhs annually</div></div>
              </div>
            </div>

            <div id="research-scope" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-violet-200 dark:border-violet-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-violet-100 dark:bg-violet-900/30 border border-violet-300 dark:border-violet-700 rounded-full text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-900 dark:text-violet-100 mb-3 sm:mb-4">Research and Academic Opportunities</h2>
              <div className="space-y-3 text-violet-900 dark:text-violet-100 text-sm sm:text-base">
                <div className="flex items-start gap-3"><span className="text-violet-600 dark:text-violet-400 font-bold">•</span><div>Conduct research on endocrine disorders and new treatments</div></div>
                <div className="flex items-start gap-3"><span className="text-violet-600 dark:text-violet-400 font-bold">•</span><div>Teach in medical colleges and guide residents</div></div>
                <div className="flex items-start gap-3"><span className="text-violet-600 dark:text-violet-400 font-bold">•</span><div>Publish in international endocrinology journals</div></div>
              </div>
            </div>

            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Endocrinology Scope Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"><p className="text-xs uppercase tracking-wide text-red-700 dark:text-red-300 font-bold">Disease Prevalence</p><p className="text-xl sm:text-2xl font-bold text-red-900 dark:text-red-100 mt-2">Very High</p></div>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg"><p className="text-xs uppercase tracking-wide text-purple-700 dark:text-purple-300 font-bold">Research Opportunity</p><p className="text-xl sm:text-2xl font-bold text-purple-900 dark:text-purple-100 mt-2">Abundant</p></div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg"><p className="text-xs uppercase tracking-wide text-green-700 dark:text-green-300 font-bold">Career Flexibility</p><p className="text-xl sm:text-2xl font-bold text-green-900 dark:text-green-100 mt-2">High</p></div>
              </div>
            </div>

            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Key Tips for Excelling in Endocrinology</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  "Master endocrine physiology and biochemistry thoroughly",
                  "Develop expertise in hormone assay interpretation",
                  "Stay updated with new hormone therapies",
                  "Engage in clinical research and publications",
                  "Develop excellent patient counseling skills",
                  "Build expertise in multidisciplinary care",
                ].map((tip, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg">
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ {tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4 sm:space-y-6">
                {[
                  { q: "What is the scope of endocrinology in India?", a: "Endocrinology has tremendous scope in India due to rising metabolic and endocrine disorders. Endocrinologists can work in hospitals, specialized clinics, research centers, and private practice with excellent earning potential and job security" },
                  { q: "What are the career opportunities after MD in Endocrinology?", a: "Endocrinologists can work in hospital endocrinology departments, establish private practice, work in specialized clinics, engage in clinical and basic research, teach in medical colleges, conduct public health programs, and explore international opportunities." },
                  { q: "What subspecialties are available in endocrinology?", a: "Popular subspecialties include Thyroid Disorders, Pituitary and Adrenal Disorders, Reproductive Endocrinology, Metabolic Bone Disease, Neuroendocrinology, Pediatric Endocrinology, and Diabetes Management with integrated care." },
                  { q: "What is the salary potential for endocrinologists?", a: "Hospital endocrinologists earn 15-30 lakhs annually, clinic-based specialists earn 25-45 lakhs annually, while private practitioners with established practice earn 45-80+ lakhs annually depending on patient volume and specialization." },
                  { q: "Is endocrinology a good specialty to pursue?", a: "Yes, endocrinology offers excellent career prospects with good earning potential, intellectual challenges, and diverse patient population. Rising prevalence of thyroid disorders and metabolic diseases ensures consistent demand." },
                  { q: "What skills are required for success in endocrinology?", a: "Essential skills include strong knowledge of endocrine physiology and pathology, proficiency with hormone assays and imaging interpretation, excellent diagnostic acumen, patient counseling abilities, research aptitude, and continuous learning of new therapies." },
                ].map((faq, idx) => (
                  <div key={idx} className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                    <details className="group">
                      <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                        <span className="flex-1 text-left pr-4">{faq.q}</span>
                        <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </span>
                      </summary>
                      <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                    </details>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 sm:space-y-6 mb-12 not-prose">
              <div className="flex flex-col gap-2 sm:gap-3 text-sm sm:text-base px-4 py-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-600">
                <div className="flex items-center justify-between gap-4"><span className="font-semibold text-slate-700 dark:text-slate-300">Reading Time</span><span className="text-slate-900 dark:text-slate-100">8 min</span></div>
                <div className="flex items-center justify-between gap-4"><span className="font-semibold text-slate-700 dark:text-slate-300">Category</span><span className="text-slate-900 dark:text-slate-100">Specialty Guide</span></div>
                <div className="flex items-center justify-between gap-4"><span className="font-semibold text-slate-700 dark:text-slate-300">Last Updated</span><span className="text-slate-900 dark:text-slate-100">June 2025</span></div>
              </div>
            </div>

            <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 border-2 border-violet-200 dark:border-violet-800 rounded-lg sm:rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-violet-900 dark:text-violet-200 mb-2">Still have questions?</h3>
              <p className="text-sm sm:text-base text-violet-800 dark:text-violet-300 mb-4">
                Don't hesitate to reach out to our expert counselors who can provide personalized guidance for your endocrinology specialization career journey.
              </p>
              <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-2.5 bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-lg transition text-sm sm:text-base">
                Contact Our Experts →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
