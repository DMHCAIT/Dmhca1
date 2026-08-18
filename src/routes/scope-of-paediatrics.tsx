import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/scope-of-paediatrics")({
  head: () => ({
    meta: [
      { title: "Scope of Pediatrics in India — DMHCA" },
      { name: "description", content: "Career opportunities and scope in pediatrics and child health specialization." },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/95 to-cyan-600/95 dark:from-blue-700 dark:to-cyan-700"></div>
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-blue-500/20 border border-blue-300/50 rounded-full text-blue-200 text-xs font-semibold mb-2">
              Medical Specialty Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              Scope of Pediatrics: Career Opportunities & Specializations
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Explore rewarding careers in child health. Master pediatric care, develop subspecialties, and build a fulfilling practice with excellent opportunities in India and globally.
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
            <img src="/blog-images/Scope-of-Paediatrics.webp" alt="Scope of Pediatrics" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            
            {/* Quick Summary */}
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-900/30 dark:via-cyan-900/30 dark:to-teal-900/30 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-blue-200 dark:border-blue-800/50 not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">Career Scope in Pediatrics</h2>
              <p className="text-sm sm:text-base text-blue-800 dark:text-blue-300 mb-6 leading-relaxed">
                Pediatrics is one of the most rewarding medical specialties focusing on child health and development. In India, pediatrics offers tremendous scope with expanding healthcare infrastructure, government health programs, and excellent private sector opportunities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
                  <span className="text-blue-900 dark:text-blue-200">7 major career pathways</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
                  <span className="text-blue-900 dark:text-blue-200">Pediatric subspecialties</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
                  <span className="text-blue-900 dark:text-blue-200">Research opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
                  <span className="text-blue-900 dark:text-blue-200">Strong global demand</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 sm:mb-14 md:mb-16 p-4 sm:p-6 md:p-8 bg-slate-100 dark:bg-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 not-prose">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">Table of Contents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { num: 1, title: "Clinical Practice" },
                  { num: 2, title: "Hospital Settings" },
                  { num: 3, title: "Private Practice" },
                  { num: 4, title: "Subspecialties" },
                  { num: 5, title: "Public Health" },
                  { num: 6, title: "Academic Career" },
                  { num: 7, title: "Global Opportunities" },
                ].map((item) => (
                  <a
                    key={item.num}
                    href={`#section-${item.num}`}
                    className="p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-block px-2 sm:px-2.5 py-1 bg-blue-600 text-white text-xs font-bold rounded flex-shrink-0">
                        {item.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                        {item.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Sections 1-7 */}
            {/* Section 1 */}
            <div id="section-1" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-blue-200 dark:border-blue-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-3 sm:mb-4">Clinical Pediatric Practice</h2>
              <div className="space-y-3 text-blue-900 dark:text-blue-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Preventive Child Care</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Immunization programs and health screening for children</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Diagnosis and Treatment</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Diagnosis and treatment of childhood acute and chronic diseases</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Development Monitoring</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Child growth and development assessment and monitoring</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Family Education</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Parent education and nutritional counseling services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-cyan-200 dark:border-cyan-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-300 dark:border-cyan-700 rounded-full text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-900 dark:text-cyan-100 mb-3 sm:mb-4">Hospital and Healthcare Settings</h2>
              <div className="space-y-3 text-cyan-900 dark:text-cyan-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Government Hospitals</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Work in government hospitals and medical colleges</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Corporate Healthcare</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Corporate hospital positions with modern facilities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">NICU Management</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Neonatal intensive care unit management and expertise</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Emergency Services</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Pediatric emergency department and critical care roles</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-teal-200 dark:border-teal-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-teal-100 dark:bg-teal-900/30 border border-teal-300 dark:border-teal-700 rounded-full text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 dark:text-teal-100 mb-3 sm:mb-4">Private Practice and Clinical Services</h2>
              <div className="space-y-3 text-teal-900 dark:text-teal-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Private Clinic Establishment</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Establish private pediatric clinics and practice centers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Patient Consultation</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Pediatric consultations and specialized care services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Flexible Schedule</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Flexible practice schedule and regular work hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">High Income Potential</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Excellent earning potential in private practice</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-blue-200 dark:border-blue-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 dark:text-blue-100 mb-3 sm:mb-4">Pediatric Subspecialties</h2>
              <div className="space-y-3 text-blue-900 dark:text-blue-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Neonatology</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Neonatal care and intensive neonatal management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Pediatric Cardiology</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Cardiac care and congenital heart disease management</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Pediatric Nephrology</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Kidney and urinary system disease specialization</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Other Subspecialties</p>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-300">Gastroenterology, neurology, oncology and other specialties</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-cyan-200 dark:border-cyan-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-300 dark:border-cyan-700 rounded-full text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-900 dark:text-cyan-100 mb-3 sm:mb-4">Community Health and Public Health</h2>
              <div className="space-y-3 text-cyan-900 dark:text-cyan-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Community Health Programs</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Child health promotion and community health initiatives</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Public Health Career</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Public health expertise and child health policy work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">NGO and International Work</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">International organizations and global health NGOs</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Health Education</p>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-300">Child health education and health awareness programs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-teal-200 dark:border-teal-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-teal-100 dark:bg-teal-900/30 border border-teal-300 dark:border-teal-700 rounded-full text-teal-700 dark:text-teal-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-900 dark:text-teal-100 mb-3 sm:mb-4">Academic and Research Career</h2>
              <div className="space-y-3 text-teal-900 dark:text-teal-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Medical Education</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Teaching medical students and pediatric residents</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Clinical Research</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Clinical research and pediatric medical studies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Academic Leadership</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Department leadership and academic positions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-600 dark:text-teal-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Research Publications</p>
                    <p className="text-xs sm:text-sm text-teal-800 dark:text-teal-300">Publication in medical journals and research advancement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="section-7" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-teal-50 dark:from-indigo-900/20 dark:to-teal-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-indigo-200 dark:border-indigo-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 sm:mb-4">International Opportunities</h2>
              <div className="space-y-3 text-indigo-900 dark:text-indigo-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Global Demand</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">High demand for pediatricians in developed countries</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">International Practice</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Practice opportunities in USA, UK, Canada, Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Fellowship Training</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">International fellowship and advanced training opportunities</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">→</span>
                  <div>
                    <p className="font-semibold">Professional Network</p>
                    <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-300">Build international pediatric professional networks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Timeline */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Career Timeline</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-200 dark:border-blue-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 font-semibold mb-1">12 to MBBS</p>
                  <p className="text-2xl sm:text-3xl font-bold text-blue-900 dark:text-blue-100">5.5 years</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-cyan-100 to-teal-100 dark:from-cyan-900/30 dark:to-teal-900/30 border border-cyan-200 dark:border-cyan-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-cyan-700 dark:text-cyan-300 font-semibold mb-1">MBBS to MD Pediatrics</p>
                  <p className="text-2xl sm:text-3xl font-bold text-cyan-900 dark:text-cyan-100">3-4 years</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900/30 dark:to-blue-900/30 border border-teal-200 dark:border-teal-700 rounded-lg">
                  <p className="text-xs sm:text-sm text-teal-700 dark:text-teal-300 font-semibold mb-1">Total Duration</p>
                  <p className="text-2xl sm:text-3xl font-bold text-teal-900 dark:text-teal-100">8.5-9.5 years</p>
                </div>
              </div>
            </div>

            {/* Key Tips Section */}
            <div className="mb-12 sm:mb-14 md:mb-16 not-prose">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Key Tips for Success</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: "Develop Patience", desc: "Develop patience and understanding with children and their families" },
                  { title: "Stay Updated", desc: "Stay current with pediatric advances and vaccine schedules" },
                  { title: "Clinical Exposure", desc: "Gain diverse clinical exposure in different pediatric settings" },
                  { title: "Learn Programs", desc: "Learn government health programs and public health initiatives" },
                  { title: "Child Health Advocacy", desc: "Advocate for child health and welfare in your practice" },
                  { title: "Specialization", desc: "Consider subspecialization for enhanced career prospects" },
                ].map((tip, i) => (
                  <div key={i} className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg">
                    <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ {tip.title}</p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">{tip.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-r from-blue-600/95 to-cyan-600/95 dark:from-blue-700 dark:to-cyan-700 rounded-2xl border border-blue-400/20 dark:border-blue-500/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Ready to Pursue Pediatrics?</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    Explore comprehensive pediatrics programs and build a rewarding career in child health medicine.
                  </p>
                  <Link to="/top-medical-courses" className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
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
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">Get answers to common questions about pediatrics career opportunities.</p>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              { q: "What is the scope of pediatrics in India?", a: "Pediatrics has excellent scope in India with expanding healthcare infrastructure, government programs, and private sector growth. Large pediatric population ensures steady demand. Subspecialization opportunities are abundant with increasing parent expectations for specialized care." },
              { q: "What are the major pediatric subspecialties?", a: "Major subspecialties include Neonatology, Pediatric Cardiology, Nephrology, Gastroenterology, Neurology, and Oncology. Each offers distinct career prospects and specialized practice opportunities with higher earning potential." },
              { q: "Is government employment available?", a: "Yes, government employment is available in medical colleges, government hospitals, and public health centers. Competitive exams like NEET qualify candidates. Government positions offer job security and pension benefits." },
              { q: "What is the earning potential?", a: "Government positions: ₹10-15 lakhs/year. Private consultants: ₹20-40 lakhs/year. Private practice: ₹30-50+ lakhs/year. Subspecialists earn significantly more, especially with established practice." },
              { q: "Is there private practice scope?", a: "Yes, strong private practice scope with growing number of dedicated pediatric clinics. Good work-life balance with scheduled hours. Regular hours suit family-oriented practitioners." },
              { q: "Are international opportunities available?", a: "Yes, high demand in USA, UK, Canada, and Australia. Indian pediatricians are sought after for their training. International practice offers higher income and advanced infrastructure." }
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

          <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg sm:rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">Still have questions?</h3>
            <p className="text-sm sm:text-base text-blue-800 dark:text-blue-300 mb-4">
              Don't hesitate to reach out to our expert counselors who can provide personalized guidance for your pediatrics specialization career journey.
            </p>
            <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition text-sm sm:text-base">
              Contact Our Experts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
