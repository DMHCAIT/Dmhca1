import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/scope-of-cardiology")({
  head: () => ({
    meta: [
      { title: "Scope of Cardiology: Career Opportunities & Specializations — DMHCA" },
      { name: "description", content: "Explore diverse career opportunities in cardiology. Master clinical practice, interventional procedures, research, and achieve exceptional earning potential in this high-demand medical specialty." },
    ],
  }),
  component: CardioContent,
});

function CardioContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700"></div>
        <div className="relative container-x py-2 sm:py-3 md:py-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-red-500/20 border border-red-300/50 rounded-full text-red-200 text-xs font-semibold mb-2">
              Medical Career Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 leading-tight tracking-tight">
              Scope of Cardiology: Career Opportunities & Specializations
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-2 leading-relaxed">
              Explore diverse career opportunities in cardiology. Master clinical practice, interventional procedures, research, and achieve exceptional earning potential in this high-demand medical specialty.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-2 pt-2 border-t border-white/20">
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
            <img src="/blog-images/Scope-of-Cardiology.webp" alt="Scope of Cardiology" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            
            {/* Quick Summary */}
            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">What You'll Learn in This Guide</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6 text-sm sm:text-base">This comprehensive guide explores the vast scope of cardiology—one of the most dynamic and rewarding medical specialties. Discover diverse career pathways from clinical practice to interventional procedures, research opportunities, and exceptional earning potential.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ 7 major career pathways</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Clinical practice opportunities</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Procedural expertise guide</p>
                </div>
                <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Earning potential insights</p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Table of Contents</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Link to="#section-1" className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition">
                  <span className="font-bold text-red-600 dark:text-red-400">1</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">Career Overview</span>
                </Link>
                <Link to="#section-2" className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition">
                  <span className="font-bold text-red-600 dark:text-red-400">2</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">Clinical Practice</span>
                </Link>
                <Link to="#section-3" className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition">
                  <span className="font-bold text-red-600 dark:text-red-400">3</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">Interventional Cardiology</span>
                </Link>
                <Link to="#section-4" className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition">
                  <span className="font-bold text-red-600 dark:text-red-400">4</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">Research & Academics</span>
                </Link>
                <Link to="#section-5" className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition">
                  <span className="font-bold text-red-600 dark:text-red-400">5</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">Advanced Specializations</span>
                </Link>
                <Link to="#section-6" className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition">
                  <span className="font-bold text-red-600 dark:text-red-400">6</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">Earning Potential</span>
                </Link>
                <Link to="#section-7" className="flex items-center gap-3 p-3 bg-slate-100 dark:bg-slate-700/50 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/20 transition col-span-1 sm:col-span-2">
                  <span className="font-bold text-red-600 dark:text-red-400">7</span>
                  <span className="text-slate-900 dark:text-slate-100 font-semibold">International Opportunities</span>
                </Link>
              </div>
            </div>

            {/* Section 1 */}
            <div id="section-1" className="mb-12 not-prose scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 text-white font-bold">1</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">Career Overview in Cardiology</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Diverse Career Paths</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Cardiology offers pathways across diagnostic, therapeutic, and preventive domains</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Professional Roles</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Diagnose and treat heart diseases, perform procedures, conduct research, and educate medical professionals</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Rising Demand</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Rising prevalence of cardiovascular diseases creates tremendous opportunities in India and globally</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Dynamic Specialty</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">One of the most rewarding medical specialties with exceptional career prospects</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-12 not-prose scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 text-white font-bold">2</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">Clinical Practice Opportunities</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Hospital Practice</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Work as cardiologist in government or private hospitals with comprehensive patient care responsibilities</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Private Clinic</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Establish own cardiac clinic with consultation services and patient management</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Diagnostic Centers</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Provide cardiac imaging and consultation services in specialized imaging centers</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Preventive Cardiology</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Focus on disease prevention, lifestyle modification, and risk management programs</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="mb-12 not-prose scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 text-white font-bold">3</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">Interventional Cardiology</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Coronary Interventions</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Perform coronary angiography and angioplasty procedures with advanced catheterization techniques</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Complex Procedures</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Conduct complex percutaneous coronary interventions for challenging cases</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Emergency Care</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Manage acute coronary syndromes and emergency cardiac care situations</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Structural Procedures</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Specialize in structural heart procedures and advanced interventional techniques</p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="mb-12 not-prose scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 text-white font-bold">4</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">Research and Academics</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Cardiac Research</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Conduct research in cardiac pathophysiology and therapeutic advancements</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Academic Teaching</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Teach in medical colleges and research institutions with mentorship opportunities</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Publications</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Publish research in international journals and contribute to medical knowledge</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Protocol Development</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Develop new cardiac treatment protocols and practice guidelines</p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="mb-12 not-prose scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 text-white font-bold">5</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">Advanced Specializations</h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 text-sm sm:text-base">After MD Cardiology, pursue additional fellowships in specialized areas:</p>
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Interventional Cardiology Fellowship</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Advanced catheterization and percutaneous intervention procedures</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Electrophysiology Specialization</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Heart rhythm management and ablation procedures expertise</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Heart Failure & Transplant</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Transplantation and advanced device therapy specialization</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Pediatric Cardiology</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Specialized care for congenital and acquired heart diseases in children</p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="mb-12 not-prose scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 text-white font-bold">6</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">Earning Potential</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Hospital Cardiologists: ₹15-30 Lakhs Annually</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Competitive government and private hospital positions</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Private Practitioners: ₹30+ Lakhs Annually</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Higher earning potential with own clinic practice</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Interventional Specialists: ₹40+ Lakhs Annually</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Premium compensation for advanced procedural skills</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ International Opportunities: ₹60+ Lakhs Annually</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Excellent compensation in USA, UK, Australia, and Gulf countries</p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="section-7" className="mb-12 not-prose scroll-mt-20">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gradient-to-br from-red-600/95 to-rose-600/95 text-white font-bold">7</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">International Opportunities</h2>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 text-sm sm:text-base">Cardiologists from India have strong prospects globally with excellent career advancement opportunities.</p>
              <div className="space-y-4">
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Global Work Opportunities</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Work in hospitals in USA, UK, Australia, Canada, and Gulf countries</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Higher Compensation</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Significantly higher compensation packages and better working conditions</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Advanced Technology</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Access to cutting-edge cardiac technology and advanced equipment</p>
                </div>
                <div className="p-4 sm:p-5 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-900/20 dark:to-rose-900/20 rounded-lg border border-red-200 dark:border-red-800/50">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">→ Research Opportunities</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base">Access to extensive research opportunities and international collaborations</p>
                </div>
              </div>
            </div>

            {/* Essential Skills */}
            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Essential Skills for Cardiology Success</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Clinical Expertise</p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">Strong fundamentals in cardiac pathophysiology</p>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Technical Skills</p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">Master ECG interpretation and cardiac imaging</p>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Procedural Training</p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">Pursue hands-on training in procedures early</p>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Research Skills</p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">Engage in clinical research and publications</p>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Continuous Learning</p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">Stay updated with latest cardiac guidelines</p>
                </div>
                <div className="p-4 bg-slate-100 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-600 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base">✓ Mentorship</p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mt-1">Build mentorship with experienced cardiologists</p>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-12 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">Frequently Asked Questions</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-8 text-sm sm:text-base">Get answers to common questions about cardiology career opportunities.</p>
              <div className="space-y-4">
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">What is the scope of cardiology in India?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Cardiology has tremendous scope in India due to rising cardiovascular diseases. Cardiologists can work in hospitals, diagnostic centers, private practice, research institutions, and academic medical centers with excellent earning potential and job security.</p>
                  </details>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">What are the career opportunities after MD Cardiology?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">After MD, cardiologists can pursue private practice, work as consultants in hospitals, engage in research, teach in medical colleges, specialize in interventional cardiology, electrophysiology, or heart transplantation. International opportunities are also available.</p>
                  </details>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">What subspecialties are available in cardiology?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Popular subspecialties include Interventional Cardiology, Clinical Cardiac Electrophysiology, Heart Failure and Transplant Cardiology, Preventive Cardiology, Pediatric Cardiology, and Non-invasive Cardiac Imaging. Each offers unique career prospects.</p>
                  </details>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">What is the salary potential for cardiologists?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Cardiologists command high salaries in India. In hospitals, they earn 15-30 lakhs annually, while private practitioners often earn significantly more. International opportunities offer even higher compensation packages.</p>
                  </details>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">Is cardiology a good specialty to pursue?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Yes, cardiology is excellent for those interested in acute care, procedures, and research. With increasing cardiovascular diseases, demand is consistently high. It offers both clinical and procedural satisfaction with excellent earning potential.</p>
                  </details>
                </div>
                <div className="p-4 sm:p-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700/50 dark:to-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg sm:rounded-xl hover:shadow-md transition">
                  <details className="group">
                    <summary className="flex items-start justify-between cursor-pointer font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                      <span className="flex-1 text-left pr-4">What skills are required for a successful cardiology career?</span>
                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-open:rotate-180 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      </span>
                    </summary>
                    <p className="text-slate-700 dark:text-slate-300 mt-3 text-xs sm:text-sm leading-relaxed">Essential skills include strong clinical assessment, proficiency in cardiac imaging and ECG interpretation, procedural skills, problem-solving abilities, continuous learning mindset, excellent communication for patient counseling, and research aptitude.</p>
                  </details>
                </div>
              </div>
            </div>

            {/* Still Have Questions */}
            <div className="mt-20 p-10 bg-gradient-to-r from-red-600/95 to-rose-600/95 dark:from-red-700 dark:to-rose-700 rounded-2xl border border-red-400/20 dark:border-red-500/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Still have questions?</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">Don't hesitate to reach out to our expert counselors who can provide personalized guidance for your cardiology specialization career journey.</p>
                  <Link to="/contact-us" className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-red-600 font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                    Contact Our Experts →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
