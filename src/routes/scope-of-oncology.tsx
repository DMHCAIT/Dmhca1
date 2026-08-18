import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/scope-of-oncology")({
  head: () => ({
    meta: [
      { title: "Scope of Oncology in India — DMHCA" },
      { name: "description", content: "Career prospects and opportunities in oncology and cancer specialization." },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700"></div>
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-red-500/20 border border-red-300/50 rounded-full text-red-200 text-xs font-semibold mb-2">
              Medical Specialty Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              Scope of Oncology: Career Opportunities & Specializations
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Explore the rapidly advancing field of cancer medicine. Master modern treatment modalities, develop specialized expertise, and build a fulfilling career with exceptional earning potential.
            </p>
          </div>
          
          {/* Key Metrics */}
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
                <div className="font-bold text-sm sm:text-lg">Rapid</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4 sm:py-6 md:py-8 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img src="/blog-images/Scope-of-Oncology.webp" alt="Scope of Oncology" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            
            {/* Quick Summary */}
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-red-50 via-rose-50 to-pink-50 dark:from-red-900/30 dark:via-rose-900/30 dark:to-pink-900/30 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-red-200 dark:border-red-800/50 not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-red-900 dark:text-red-200 mb-4">Career Scope in Oncology</h2>
              <p className="text-sm sm:text-base text-red-800 dark:text-red-300 mb-6 leading-relaxed">
                Oncology is a rapidly advancing medical specialty with tremendous career potential. As cancer incidence rises and treatment options expand, demand for qualified oncologists continues to grow. The specialty offers multiple pathways with exceptional earning potential and opportunities for innovation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 text-xl">✓</span>
                  <span className="text-red-900 dark:text-red-200">7 major career pathways</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 text-xl">✓</span>
                  <span className="text-red-900 dark:text-red-200">Subspecialization options</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 text-xl">✓</span>
                  <span className="text-red-900 dark:text-red-200">Research opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 text-xl">✓</span>
                  <span className="text-red-900 dark:text-red-200">Highest earning potential</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 sm:mb-14 md:mb-16 p-4 sm:p-6 md:p-8 bg-slate-100 dark:bg-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 not-prose">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">Table of Contents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { num: 1, title: "Cancer Treatment" },
                  { num: 2, title: "Hospital Employment" },
                  { num: 3, title: "Private Practice" },
                  { num: 4, title: "Subspecialization" },
                  { num: 5, title: "Research & Trials" },
                  { num: 6, title: "Academic Roles" },
                  { num: 7, title: "Global Opportunities" },
                ].map((item) => (
                  <a
                    key={item.num}
                    href={`#section-${item.num}`}
                    className="p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-block px-2 sm:px-2.5 py-1 bg-red-600 text-white text-xs font-bold rounded flex-shrink-0">
                        {item.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-red-600 dark:group-hover:text-red-400 line-clamp-2">
                        {item.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Sections 1-7 */}
            {/* Section 1 */}
            <div id="section-1" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-red-200 dark:border-red-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-full text-red-700 dark:text-red-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 dark:text-red-100 mb-3 sm:mb-4">Cancer Treatment and Patient Management</h2>
              <div className="space-y-3 text-red-900 dark:text-red-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Diagnosis and Treatment Planning</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Diagnose and manage various types of cancers including solid tumors and hematologic malignancies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Comprehensive Treatment Approach</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Develop personalized treatment plans combining chemotherapy, targeted therapy, and immunotherapy</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Patient Care and Supportive Services</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Provide comprehensive supportive care and manage treatment-related complications</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Cancer Prevention and Screening</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Perform cancer screening programs and early detection initiatives</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-rose-200 dark:border-rose-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-rose-100 dark:bg-rose-900/30 border border-rose-300 dark:border-rose-700 rounded-full text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-900 dark:text-rose-100 mb-3 sm:mb-4">Hospital and Cancer Center Employment</h2>
              <div className="space-y-3 text-rose-900 dark:text-rose-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Government Hospital Positions</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Work in government hospitals and medical college oncology departments</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Cancer Center Leadership</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Lead oncology departments and manage cancer treatment services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Corporate Hospital Opportunities</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Work in corporate cancer centers with advanced treatment facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Modern Treatment Facilities</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Access state-of-the-art equipment and latest cancer treatment technologies</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-pink-50 to-red-50 dark:from-pink-900/20 dark:to-red-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-pink-200 dark:border-pink-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-pink-100 dark:bg-pink-900/30 border border-pink-300 dark:border-pink-700 rounded-full text-pink-700 dark:text-pink-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-900 dark:text-pink-100 mb-3 sm:mb-4">Private Practice and Entrepreneurship</h2>
              <div className="space-y-3 text-pink-900 dark:text-pink-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Independent Oncology Practice</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Establish independent oncology clinics and cancer treatment centers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Patient Consultation Services</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Provide specialized oncology consultations and second opinions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Patient Relationship Building</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Build patient base through quality care and reputation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">High Income Potential</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Private oncology practice offers exceptional earning potential</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-red-200 dark:border-red-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 rounded-full text-red-700 dark:text-red-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-900 dark:text-red-100 mb-3 sm:mb-4">Subspecialization Opportunities</h2>
              <div className="space-y-3 text-red-900 dark:text-red-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Medical Oncology</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Specialize in chemotherapy and systemic cancer treatment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Surgical Oncology</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Pursue surgical oncology for cancer surgery specialization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Organ-Specific Oncology</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Focus on breast oncology, lung cancer, or other organ-specific cancers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-600 dark:text-red-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Specialist Consultant Roles</p>
                    <p className="text-xs sm:text-sm text-red-800 dark:text-red-300">Develop expertise in specific cancer types and treatment protocols</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50 to-red-50 dark:from-rose-900/20 dark:to-red-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-rose-200 dark:border-rose-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-rose-100 dark:bg-rose-900/30 border border-rose-300 dark:border-rose-700 rounded-full text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-900 dark:text-rose-100 mb-3 sm:mb-4">Research and Clinical Trials</h2>
              <div className="space-y-3 text-rose-900 dark:text-rose-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Clinical Trial Participation</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Conduct and participate in cancer clinical trials and research studies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Drug Development</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Participate in cancer drug development and novel therapy research</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Research Publishing</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Publish research in prestigious oncology journals advancing cancer care</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-rose-600 dark:text-rose-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Innovation and Discovery</p>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-300">Contribute to innovation in cancer treatment and research</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-pink-200 dark:border-pink-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-pink-100 dark:bg-pink-900/30 border border-pink-300 dark:border-pink-700 rounded-full text-pink-700 dark:text-pink-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pink-900 dark:text-pink-100 mb-3 sm:mb-4">Academic and Teaching Roles</h2>
              <div className="space-y-3 text-pink-900 dark:text-pink-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Medical College Faculty</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Pursue academic career as faculty in medical colleges and universities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Student and Resident Training</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Train medical students and oncology residents in cancer management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Leadership Opportunities</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Lead oncology departments as professors and academic leaders</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Knowledge Dissemination</p>
                    <p className="text-xs sm:text-sm text-pink-800 dark:text-pink-300">Share expertise and mentor next generation of oncologists</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="section-7" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-orange-200 dark:border-orange-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-orange-100 dark:bg-orange-900/30 border border-orange-300 dark:border-orange-700 rounded-full text-orange-700 dark:text-orange-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-900 dark:text-orange-100 mb-3 sm:mb-4">Global Opportunities and International Practice</h2>
              <div className="space-y-3 text-orange-900 dark:text-orange-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">International Practice Opportunities</p>
                    <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-300">Work in oncology hospitals and cancer centers globally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Advanced Technology Access</p>
                    <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-300">Access cutting-edge cancer treatment technology internationally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Fellowship Training</p>
                    <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-300">Pursue fellowships and advanced training internationally</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-orange-600 dark:text-orange-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Global Network</p>
                    <p className="text-xs sm:text-sm text-orange-800 dark:text-orange-300">Build international oncology network and professional connections</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Career Timeline</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/30 dark:to-rose-900/30 border border-red-200 dark:border-red-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-red-700 dark:text-red-300 font-semibold mb-1">12 to MBBS</p>
                  <p className="text-2xl sm:text-3xl font-bold text-red-900 dark:text-red-100">5.5 years</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900/30 dark:to-pink-900/30 border border-rose-200 dark:border-rose-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-300 font-semibold mb-1">MBBS to MD Oncology</p>
                  <p className="text-2xl sm:text-3xl font-bold text-rose-900 dark:text-rose-100">3-4 years</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-pink-100 to-red-100 dark:from-pink-900/30 dark:to-red-900/30 border border-pink-200 dark:border-pink-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-pink-700 dark:text-pink-300 font-semibold mb-1">Total Duration</p>
                  <p className="text-2xl sm:text-3xl font-bold text-pink-900 dark:text-pink-100">8.5-9.5 years</p>
                </div>
              </div>
            </div>

            {/* Key Tips Section */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Key Tips for Success</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: "Cancer Biology Foundation", desc: "Develop strong fundamentals in cancer pathology and biology" },
                  { title: "Stay Updated", desc: "Stay updated with latest cancer treatment protocols and guidelines" },
                  { title: "Hands-on Experience", desc: "Gain hands-on experience in cancer diagnostics and treatment" },
                  { title: "Research Engagement", desc: "Engage in research to advance cancer treatment knowledge" },
                  { title: "Develop Compassion", desc: "Develop compassion and emotional intelligence for patient care" },
                  { title: "Pursue Fellowships", desc: "Pursue fellowships and additional training in specialized cancers" },
                ].map((tip, i) => (
                  <div key={i} className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg">
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ {tip.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-r from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 rounded-2xl border border-red-400/20 dark:border-red-500/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Ready to Pursue Oncology?</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    Explore comprehensive oncology programs and build a rewarding career in cancer medicine.
                  </p>
                  <Link to="/top-medical-courses" className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-red-600 font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                    Explore Programs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">Frequently Asked Questions</h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">Get answers to common questions about oncology career opportunities.</p>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              { q: "What is the scope of oncology in India?", a: "Oncology is rapidly expanding in India with increasing cancer incidence, improved healthcare infrastructure, and growing private sector investment. There are excellent opportunities in cancer centers, hospitals, research institutions, and private practice. India is becoming a hub for oncology professionals." },
              { q: "What are the different subspecialties in oncology?", a: "Oncology includes Medical Oncology, Surgical Oncology, Radiation Oncology, Hematology-Oncology, and Pediatric Oncology. Each subspecialty offers distinct career paths and specialization opportunities with excellent earning potential." },
              { q: "What is the career progression in oncology?", a: "Career progression includes positions as resident, senior resident, assistant consultant, consultant, and senior consultant. Many oncologists establish cancer centers, lead research teams, pursue academic roles, or develop specialized treatment protocols." },
              { q: "Are there research opportunities in oncology?", a: "Yes, India has significant research opportunities in cancer biology, immunotherapy, targeted therapy, and precision medicine. Many institutions offer fellowships in clinical research and opportunities to collaborate with pharmaceutical companies." },
              { q: "What is the earning potential for oncologists?", a: "Oncologists have high earning potential with government positions offering 10-15 lakhs annually. Private sector consultants earn 20-40 lakhs, while those in private centers can earn 30-50+ lakhs, making it one of the highest-paying specialties." },
              { q: "Can oncologists work internationally?", a: "Yes, Indian oncologists can work in USA, Canada, UK, and Australia after qualifying relevant exams. Many international cancer centers actively recruit experienced Indian oncologists due to their expertise." }
            ].map((faq, idx) => (
              <div key={idx} className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                <details className="group">
                  <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                    <span className="flex-1 text-left pr-4">{faq.q}</span>
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </summary>
                  <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
                </details>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 border-2 border-red-200 dark:border-red-800 rounded-lg sm:rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-red-900 dark:text-red-200 mb-2">Still have questions?</h3>
            <p className="text-sm sm:text-base text-red-800 dark:text-red-300 mb-4">
              Don't hesitate to reach out to our expert counselors who can provide personalized guidance for your oncology specialization career journey.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition text-sm sm:text-base">
              Contact Our Experts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
