import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/scope-of-neurology")({
  head: () => ({
    meta: [
      { title: "Scope of Neurology in India — DMHCA" },
      { name: "description", content: "Career opportunities and advancement in neurology and neurological specialization." },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-600/95 to-indigo-600/95 dark:from-purple-700 dark:to-indigo-700"></div>
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-purple-500/20 border border-purple-300/50 rounded-full text-purple-200 text-xs font-semibold mb-2">
              Medical Career Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              Scope of Neurology: Career Opportunities & Specializations
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Explore the fascinating field of neurology. Master neurological diagnosis, develop advanced clinical skills, and build a successful practice with excellent earning potential and global opportunities.
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
                <div className="font-bold text-sm sm:text-lg">High</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4 sm:py-6 md:py-8 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img src="/blog-images/Scope-of-Neurology.webp" alt="Scope of Neurology" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            
            {/* Quick Summary */}
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 via-indigo-50 to-violet-50 dark:from-purple-900/30 dark:via-indigo-900/30 dark:to-violet-900/30 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-purple-200 dark:border-purple-800/50 not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-purple-900 dark:text-purple-200 mb-4">Career Scope in Neurology</h2>
              <p className="text-sm sm:text-base text-purple-800 dark:text-purple-300 mb-6 leading-relaxed">
                Neurology offers exceptional career scope with high patient demand, excellent earning potential, and opportunities for subspecialization and research. The field encompasses diagnosis and treatment of neurological disorders affecting millions worldwide.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-purple-900 dark:text-purple-200">7 major career pathways</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-purple-900 dark:text-purple-200">Subspecialization options</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-purple-900 dark:text-purple-200">Research opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 text-xl">✓</span>
                  <span className="text-purple-900 dark:text-purple-200">Strong global demand</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 sm:mb-14 md:mb-16 p-4 sm:p-6 md:p-8 bg-slate-100 dark:bg-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 not-prose">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">Table of Contents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { num: 1, title: "Diagnostic Opportunities" },
                  { num: 2, title: "Patient Management" },
                  { num: 3, title: "Research & Academic" },
                  { num: 4, title: "Subspecialties" },
                  { num: 5, title: "International Practice" },
                  { num: 6, title: "Earning Potential" },
                  { num: 7, title: "Work-Life Balance" },
                ].map((item) => (
                  <a
                    key={item.num}
                    href={`#section-${item.num}`}
                    className="p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-block px-2 sm:px-2.5 py-1 bg-purple-600 text-white text-xs font-bold rounded flex-shrink-0">
                        {item.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 line-clamp-2">
                        {item.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Sections 1-7 */}
            {/* Section 1 */}
            <div id="section-1" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-purple-200 dark:border-purple-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 rounded-full text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 dark:text-purple-100 mb-3 sm:mb-4">Diagnostic Opportunities</h2>
              <div className="space-y-3 text-purple-900 dark:text-purple-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Advanced Imaging Interpretation</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Advanced imaging interpretation (CT, MRI, EEG) and diagnostic expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Clinical Examination</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Clinical neurological examination expertise and diagnostic skills</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Neurosurgical Consultation</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Neurosurgical consultation and planning for complex cases</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Post-operative Management</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Post-operative neurological management and monitoring</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-indigo-200 dark:border-indigo-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 sm:mb-4">Patient Management</h2>
              <div className="space-y-3 text-indigo-900 dark:text-indigo-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Chronic Disease Management</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Chronic disease management and long-term patient care</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Outpatient Consultations</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Regular outpatient consultations and patient relationships</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Hospital Inpatient Care</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Hospital inpatient care and acute patient management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Emergency Stroke Management</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Emergency stroke and seizure management capabilities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-violet-200 dark:border-violet-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-violet-100 dark:bg-violet-900/30 border border-violet-300 dark:border-violet-700 rounded-full text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-900 dark:text-violet-100 mb-3 sm:mb-4">Research & Academic Career</h2>
              <div className="space-y-3 text-violet-900 dark:text-violet-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-violet-600 dark:text-violet-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Clinical Trials</p>
                    <p className="text-xs sm:text-sm text-violet-800 dark:text-violet-300">Clinical trials participation and research studies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-600 dark:text-violet-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Research Publications</p>
                    <p className="text-xs sm:text-sm text-violet-800 dark:text-violet-300">Neurological research publications in peer-reviewed journals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-600 dark:text-violet-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Medical Education</p>
                    <p className="text-xs sm:text-sm text-violet-800 dark:text-violet-300">Medical education and teaching responsibilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-600 dark:text-violet-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Academic Career</p>
                    <p className="text-xs sm:text-sm text-violet-800 dark:text-violet-300">Academic career advancement and professional development</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-purple-200 dark:border-purple-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 rounded-full text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 dark:text-purple-100 mb-3 sm:mb-4">Subspecialties</h2>
              <div className="space-y-3 text-purple-900 dark:text-purple-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Neuroradiology</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Neuroradiology and imaging subspecialization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Neurophysiology</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Neurophysiology and EEG expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Movement Disorders</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Movement disorders and specialized treatment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Neuro-oncology</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Neuro-oncology and brain tumor management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-indigo-200 dark:border-indigo-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 sm:mb-4">International Practice</h2>
              <div className="space-y-3 text-indigo-900 dark:text-indigo-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Global Demand</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">High demand in developed countries worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Global Recognition</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Excellent global recognition and professional standing</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Immigration Pathways</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Multiple immigration pathways and opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Fellowship Training</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">International fellowship opportunities and training</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-violet-50 to-indigo-50 dark:from-violet-900/20 dark:to-indigo-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-violet-200 dark:border-violet-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-violet-100 dark:bg-violet-900/30 border border-violet-300 dark:border-violet-700 rounded-full text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-violet-900 dark:text-violet-100 mb-3 sm:mb-4">Earning Potential</h2>
              <div className="space-y-3 text-violet-900 dark:text-violet-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-violet-600 dark:text-violet-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Government Positions</p>
                    <p className="text-xs sm:text-sm text-violet-800 dark:text-violet-300">Government positions: ₹10-15 lakhs/year</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-600 dark:text-violet-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Hospital Consultants</p>
                    <p className="text-xs sm:text-sm text-violet-800 dark:text-violet-300">Hospital consultants: ₹20-40 lakhs/year</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-600 dark:text-violet-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Private Practice</p>
                    <p className="text-xs sm:text-sm text-violet-800 dark:text-violet-300">Private practice: ₹30-60+ lakhs/year</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-violet-600 dark:text-violet-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Research Positions</p>
                    <p className="text-xs sm:text-sm text-violet-800 dark:text-violet-300">Research and academic positions with high income</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="section-7" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-purple-200 dark:border-purple-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 rounded-full text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-900 dark:text-purple-100 mb-3 sm:mb-4">Work-Life Balance</h2>
              <div className="space-y-3 text-purple-900 dark:text-purple-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Better than Surgical</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Generally better than many surgical specialties</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Scheduled Hours</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Scheduled outpatient hours and regular schedule</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Limited On-call</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Limited on-call duties in diagnostic settings</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Remote Opportunities</p>
                    <p className="text-xs sm:text-sm text-purple-800 dark:text-purple-300">Remote consultation opportunities available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Career Timeline</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 border border-purple-200 dark:border-purple-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-purple-700 dark:text-purple-300 font-semibold mb-1">12 to MBBS</p>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-900 dark:text-purple-100">5.5 years</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30 border border-indigo-200 dark:border-indigo-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-indigo-700 dark:text-indigo-300 font-semibold mb-1">MBBS to MD Neurology</p>
                  <p className="text-2xl sm:text-3xl font-bold text-indigo-900 dark:text-indigo-100">3-4 years</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30 border border-violet-200 dark:border-violet-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-violet-700 dark:text-violet-300 font-semibold mb-1">Total Duration</p>
                  <p className="text-2xl sm:text-3xl font-bold text-violet-900 dark:text-violet-100">8.5-9.5 years</p>
                </div>
              </div>
            </div>

            {/* Key Tips Section */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Key Tips for Success</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: "Develop Examination Skills", desc: "Build strong neurological examination skills and diagnostic abilities" },
                  { title: "Stay Updated", desc: "Stay current with neurological advances and new treatment protocols" },
                  { title: "Research Record", desc: "Develop research and publication record for career advancement" },
                  { title: "Consider Subspecialization", desc: "Consider subspecialization in your area of interest" },
                  { title: "Build Patient Relationships", desc: "Build strong patient relationships for long-term practice" },
                  { title: "Professional Networking", desc: "Network with neurologists and develop professional connections" },
                ].map((tip, i) => (
                  <div key={i} className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg">
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ {tip.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-r from-purple-600/95 to-indigo-600/95 dark:from-purple-700 dark:to-indigo-700 rounded-2xl border border-purple-400/20 dark:border-purple-500/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Ready to Pursue Neurology?</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    Explore comprehensive neurology programs and build a successful career in neurological medicine.
                  </p>
                  <Link to="/top-medical-courses" className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-purple-600 font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
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
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">Get answers to common questions about neurology career opportunities.</p>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              { q: "What is the scope of neurology?", a: "Neurology encompasses diagnosis and treatment of brain, spinal cord, and peripheral nerve diseases. Large patient base with chronic conditions requiring long-term care. Growing demand due to increasing neurological disorder prevalence." },
              { q: "What is the global demand for neurologists?", a: "High demand globally, especially in developed countries. Neurological disorders are increasing due to aging populations and lifestyle changes. Strong opportunities in USA, Canada, UK, Australia, and Gulf countries." },
              { q: "What are earning prospects in neurology?", a: "Government: ₹10-15 lakhs/year. Private consultant: ₹20-40 lakhs/year. Private practice: ₹30-60+ lakhs/year. Excellent earning potential with established practice and subspecialization." },
              { q: "Can neurologists subspecialize?", a: "Yes, subspecialties include neuroradiology, neurophysiology, neuro-oncology, movement disorders, and stroke management. Each subspecialty offers enhanced career prospects and earning potential." },
              { q: "Is there good work-life balance?", a: "Yes, neurology generally offers better balance than surgical specialties, though emergency stroke cases may require availability. Scheduled outpatient hours provide predictable work schedule." },
              { q: "What skills are essential?", a: "Strong clinical examination skills, imaging interpretation, excellent communication, patience with chronic disease management, and research aptitude are essential for success in neurology." }
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

          <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg sm:rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-purple-900 dark:text-purple-200 mb-2">Still have questions?</h3>
            <p className="text-sm sm:text-base text-purple-800 dark:text-purple-300 mb-4">
              Don't hesitate to reach out to our expert counselors who can provide personalized guidance for your neurology specialization career journey.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition text-sm sm:text-base">
              Contact Our Experts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
