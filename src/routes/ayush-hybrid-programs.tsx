import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Download, MessageSquare, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/ayush-hybrid-programs")({
  head: () => ({
    meta: [
      { title: "AYUSH Doctor Hybrid Programs: The Complete 2025 Guide — DMHCA" },
      { name: "description", content: "Comprehensive guide to PG Diploma, Certificate, and Fellowship Programs for AYUSH doctors. Transform your practice with modern medical skills. Real patient exposure + industry certification." },
    ],
  }),
  component: AYUSHContent,
});

function AYUSHContent() {
  const [comments, setComments] = useState<Array<{ name: string; comment: string }>>([]);
  const [formData, setFormData] = useState({ name: "", email: "", comment: "" });
  const [activeTab, setActiveTab] = useState<"programs" | "learning" | "career">("programs");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.comment) {
      setComments([...comments, { name: formData.name, comment: formData.comment }]);
      setFormData({ name: "", email: "", comment: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/95 to-teal-600/95 dark:from-emerald-700 dark:to-teal-800"></div>
        <div className="relative container-x py-2 sm:py-3 md:py-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-emerald-500/20 border border-emerald-300/50 rounded-full text-emerald-200 text-xs font-semibold mb-2">
              AYUSH Career Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 leading-tight tracking-tight">
              AYUSH Doctor Hybrid Programs: Your Path to Modern Medical Excellence
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-2 leading-relaxed">
              Discover how AYUSH doctors are bridging traditional medicine with cutting-edge diagnostics to build thriving, future-proof practices. A comprehensive guide to programs, pathways, and success.
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-2 pt-2 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Clock className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Read Time</div>
                <div className="font-bold text-sm sm:text-lg">12 min</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Users className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Doctors Trained</div>
                <div className="font-bold text-sm sm:text-lg">2000+</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Award className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Success Rate</div>
                <div className="font-bold text-sm sm:text-lg">94%</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Career Growth</div>
                <div className="font-bold text-sm sm:text-lg">+300%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4 sm:py-6 md:py-8 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img src="/blog-images/ayush_doctor_blog.webp" alt="AYUSH Hybrid Programs" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            
            {/* Quick Summary */}
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-emerald-900/30 dark:via-teal-900/30 dark:to-cyan-900/30 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-emerald-200 dark:border-emerald-800/50 not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-emerald-900 dark:text-emerald-200 mb-4">What You'll Discover in This Guide</h2>
              <p className="text-sm sm:text-base text-emerald-800 dark:text-emerald-300 mb-6 leading-relaxed">
                This comprehensive guide walks you through everything AYUSH doctors need to know about hybrid programs—from choosing the right course to launching a successful modern practice. Learn how 2000+ doctors have transformed their careers and increased their patient capacity by 300%.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                  <span className="text-emerald-900 dark:text-emerald-200">Complete program comparison</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                  <span className="text-emerald-900 dark:text-emerald-200">Hybrid learning model explained</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                  <span className="text-emerald-900 dark:text-emerald-200">Career pathways & opportunities</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-emerald-600 dark:text-emerald-400 text-xl">✓</span>
                  <span className="text-emerald-900 dark:text-emerald-200">Real success stories included</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 sm:mb-14 md:mb-16 p-4 sm:p-6 md:p-8 bg-slate-100 dark:bg-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 not-prose">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">Table of Contents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { num: 1, title: "Why AYUSH Doctors Need Hybrid Programs" },
                  { num: 2, title: "Available Programs Overview" },
                  { num: 3, title: "Hybrid Learning Model Explained" },
                  { num: 4, title: "Who Should Apply?" },
                  { num: 5, title: "Core Competencies You'll Master" },
                  { num: 6, title: "Career Opportunities & Roles" },
                  { num: 7, title: "Certification & Recognition" },
                  { num: 8, title: "Admission Process & Timeline" },
                  { num: 9, title: "Why Choose DMHCA?" },
                  { num: 10, title: "FAQs & Getting Started" },
                ].map((item) => (
                  <a
                    key={item.num}
                    href={`#section-${item.num}`}
                    className="p-3 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition group"
                  >
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="inline-block px-2 sm:px-2.5 py-1 bg-emerald-600 text-white text-xs font-bold rounded flex-shrink-0">
                        {item.num}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 line-clamp-2">
                        {item.title}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Section 1: Why Hybrid Programs */}
            <div id="section-1" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24">
              <div className="inline-block px-3 sm:px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-700 rounded-full text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 not-prose">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Why AYUSH Doctors Need Hybrid Programs Now</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                The healthcare landscape is rapidly evolving. Traditional AYUSH practitioners are increasingly expected to complement their knowledge with modern diagnostic tools, evidence-based protocols, and integrated treatment approaches. This isn't about replacing traditional medicine—it's about enhancing it.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 sm:p-6 rounded mb-4 sm:mb-6 not-prose">
                <p className="text-amber-900 dark:text-amber-200 font-semibold mb-2 text-sm sm:text-base">💡 Industry Insight</p>
                <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-300">AYUSH practitioners with hybrid skills earn 2-3x more than those with traditional training alone, and report 94% patient satisfaction rates when integrating modern diagnostics with traditional wisdom.</p>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                Hybrid programs bridge this gap, teaching you how to integrate modern diagnostics, clinical protocols, and evidence-based practices without abandoning the holistic principles that make AYUSH medicine unique.
              </p>
            </div>

            {/* Intro */}
            <div id="section-2" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-emerald-200 dark:border-emerald-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-700 rounded-full text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-2.5xl md:text-3xl font-bold text-emerald-900 dark:text-emerald-100 mb-3 sm:mb-4">Available Programs at Delhi Medical Healthcare Academy</h2>
              <p className="text-sm sm:text-base text-emerald-800 dark:text-emerald-300 mb-4 sm:mb-6">
                We offer a complete career pathway for AYUSH doctors through carefully structured programs designed for different career timelines and goals. Choose what fits your schedule and ambitions.
              </p>
              <div className="flex justify-center">
                <Link to="/top-medical-courses" className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm sm:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95">
                  Explore Programs →
                </Link>
              </div>
            </div>

            {/* Hybrid Learning Model */}
            <div id="section-3" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">The Hybrid Learning Model: Best of Both Worlds</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                Our proven hybrid learning methodology ensures you don't have to choose between staying current with your practice and advancing your education. Learn theory online, apply it in real hospitals.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <BookOpen className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    <h3 className="text-lg sm:text-2xl font-bold text-blue-900 dark:text-blue-100">Online Learning (LMS)</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200 mb-3 sm:mb-4">Learn at your own pace with our comprehensive online platform:</p>
                  <ul className="space-y-3 text-blue-900 dark:text-blue-100">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">▸</span>
                      <div>
                        <p className="font-semibold">Recorded Video Lectures</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200">Access expert-led content anytime</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">▸</span>
                      <div>
                        <p className="font-semibold">Live Interactive Sessions</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200">Real-time Q&A with instructors</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">▸</span>
                      <div>
                        <p className="font-semibold">Case-Based Learning</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200">Study real clinical scenarios</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">▸</span>
                      <div>
                        <p className="font-semibold">Flexible Scheduling</p>
                        <p className="text-sm text-blue-800 dark:text-blue-200">Study before/after clinic hours</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border-2 border-emerald-200 dark:border-emerald-800 rounded-lg sm:rounded-xl">
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Award className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                    <h3 className="text-lg sm:text-2xl font-bold text-emerald-900 dark:text-emerald-100">Clinical Hospital Training</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200 mb-3 sm:mb-4">Gain hands-on experience in our 100+ partner hospitals:</p>
                  <ul className="space-y-3 text-emerald-900 dark:text-emerald-100">
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">▸</span>
                      <div>
                        <p className="font-semibold">Real Patient Exposure</p>
                        <p className="text-sm text-emerald-800 dark:text-emerald-200">Handle actual cases under supervision</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">▸</span>
                      <div>
                        <p className="font-semibold">Procedural Training</p>
                        <p className="text-sm text-emerald-800 dark:text-emerald-200">Learn modern diagnostic techniques</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">▸</span>
                      <div>
                        <p className="font-semibold">Mentorship Program</p>
                        <p className="text-sm text-emerald-800 dark:text-emerald-200">1-on-1 guidance from experienced doctors</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">▸</span>
                      <div>
                        <p className="font-semibold">Weekend Options</p>
                        <p className="text-sm text-emerald-800 dark:text-emerald-200">Attend training without affecting practice</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-emerald-100 dark:bg-emerald-900/40 border-l-4 border-emerald-600 rounded-lg not-prose">
                <p className="text-emerald-900 dark:text-emerald-100 font-semibold mb-2 text-sm sm:text-base">✓ Average doctor reports 15-20 hours per week time commitment</p>
                <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-200">This means you can continue your practice while earning your certification.</p>
              </div>
            </div>

            {/* Who Should Apply */}
            <div id="section-4" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 rounded-full text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Who Should Apply? (Hint: Probably You!)</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                Whether you're a fresh AYUSH graduate looking to differentiate yourself or an experienced practitioner seeking modern skills, there's a program designed for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {[
                  { icon: "👨‍⚕️", title: "AYUSH Graduates & Interns", desc: "Start your career with modern skills from day one" },
                  { icon: "🏥", title: "Practicing AYUSH Doctors", desc: "Enhance your existing practice and attract more patients" },
                  { icon: "🎓", title: "BAMS/BHMS/BUMS/BSMS Holders", desc: "Perfect credential upgrade for any AYUSH discipline" },
                  { icon: "🌍", title: "Career-Driven Practitioners", desc: "Transition to clinic ownership or hospital roles" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg hover:shadow-md transition">
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{item.icon}</div>
                    <h4 className="text-base sm:text-lg font-bold text-amber-900 dark:text-amber-100 mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-amber-800 dark:text-amber-200">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 sm:p-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg">
                <p className="text-red-900 dark:text-red-100 font-semibold mb-1 text-sm sm:text-base">⚠️ Prerequisites</p>
                <p className="text-xs sm:text-sm text-red-800 dark:text-red-200">Valid BAMS, BHMS, BUMS, or BSMS degree from a recognized institution. No prior modern medicine experience needed—we'll teach you everything.</p>
              </div>
            </div>

            {/* What You Will Learn */}
            <div id="section-5" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">The 6 Core Competencies You'll Master</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-10 leading-relaxed">
                Our curriculum is built around six essential skills that modern AYUSH practitioners need to thrive in today's healthcare landscape.
              </p>
              <div className="space-y-4">
                {[
                  { num: "01", title: "Integrative Medicine Approach", desc: "Learn to blend traditional AYUSH wisdom with evidence-based modern protocols to provide superior patient outcomes." },
                  { num: "02", title: "Modern Diagnostic Interpretation", desc: "Master reading and interpreting lab reports, imaging studies, and modern diagnostic tools alongside traditional assessment methods." },
                  { num: "03", title: "Clinical Case Management", desc: "Develop systematic approaches to complex cases, including documentation, follow-up protocols, and ethical decision-making." },
                  { num: "04", title: "Emergency & Primary Care", desc: "Handle medical emergencies confidently and provide primary care services that expand your patient base." },
                  { num: "05", title: "Preventive & Lifestyle Medicine", desc: "Master lifestyle counseling, preventive protocols, and patient education—the future of healthcare." },
                  { num: "06", title: "Practice Management & Setup", desc: "Learn how to establish and manage a modern clinic, handle patient relations, and scale your practice successfully." },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-6 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg hover:shadow-md transition">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-indigo-600 dark:bg-indigo-700 text-white rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                        {item.num}
                      </div>
                      <div>
                        <h4 className="text-base sm:text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-1 sm:mb-2">{item.title}</h4>
                        <p className="text-xs sm:text-sm text-indigo-800 dark:text-indigo-200">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Specialist Roles */}
            <div id="section-6" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 rounded-full text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">4 Specialist Career Paths After Graduation</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-10 leading-relaxed">
                Our graduates go on to excel in diverse roles. Here are the four most popular career paths:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: "🔬", title: "Integrative Medicine Specialist", color: "purple", benefits: ["Design integrated treatment plans", "Conduct research", "Teach other practitioners", "Earn ₹60-80L annually"] },
                  { icon: "👨‍⚕️", title: "Primary Care Physician", color: "pink", benefits: ["Manage diverse patient populations", "Combine AYUSH + modern care", "Build long-term relationships", "Earn ₹40-60L annually"] },
                  { icon: "🏥", title: "Clinic Owner", color: "orange", benefits: ["Full business autonomy", "Scaled patient management", "Digital health integration", "Earn ₹80-150L+ annually"] },
                  { icon: "🌿", title: "Preventive Care Expert", color: "green", benefits: ["Corporate wellness programs", "Lifestyle coaching services", "Telemedicine practice", "Earn ₹50-75L annually"] },
                ].map((item, idx) => {
                  const colorMap: any = {
                    purple: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800",
                    pink: "bg-pink-50 dark:bg-pink-900/20 border-pink-200 dark:border-pink-800",
                    orange: "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800",
                    green: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
                  };
                  return (
                    <div key={idx} className={`p-4 sm:p-6 border rounded-lg ${colorMap[item.color]}`}>
                      <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">{item.icon}</div>
                      <h4 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">{item.title}</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {item.benefits.map((benefit, bidx) => (
                          <li key={bidx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <span className="text-lg flex-shrink-0">→</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certification */}
            <div id="section-7" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-full text-yellow-700 dark:text-yellow-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Your Certification is Your Credential</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                Unlike generic certificates, your DMHCA certification carries real weight in the healthcare industry. Here's what makes it valuable:
              </p>
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 border-2 border-yellow-300 dark:border-yellow-700 rounded-lg sm:rounded-xl md:rounded-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { icon: "✓", title: "UGC-Recognized", desc: "Approved by University Grants Commission—legally recognized across India" },
                    { icon: "🔐", title: "QR-Verified", desc: "Digital verification prevents forgery and adds credibility" },
                    { icon: "📈", title: "Career Growth", desc: "Opens doors to higher salaries, hospital positions, and leadership roles" },
                    { icon: "🌐", title: "Global Value", desc: "Recognized by international medical boards for professional advancement" },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 sm:p-4 bg-white dark:bg-slate-800 rounded-lg">
                      <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{item.icon}</div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Duration & Flexibility */}
            <div id="section-8" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-300 dark:border-cyan-700 rounded-full text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 8
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Flexible Timeline to Fit Your Life</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                You didn't spend years in AYUSH school to abandon your practice. That's why we built flexibility into every program:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                {[
                  { icon: "⏱️", title: "1-12 Months", desc: "Choose your timeline—intensive or extended—all programs available" },
                  { icon: "🎯", title: "Self-Paced Online", desc: "Complete lectures and assignments on your schedule, not ours" },
                  { icon: "📅", title: "Weekend Training", desc: "Hospital training available on weekends and evenings" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-6 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-lg text-center">
                    <div className="text-3xl sm:text-5xl mb-2 sm:mb-3">{item.icon}</div>
                    <h4 className="text-base sm:text-lg font-bold text-cyan-900 dark:text-cyan-100 mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-200">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-900/30 dark:to-blue-900/30 border border-cyan-300 dark:border-cyan-700 rounded-lg">
                <p className="text-cyan-900 dark:text-cyan-100 font-semibold mb-2 text-sm sm:text-base">⏳ Average time commitment: 15-20 hours per week</p>
                <p className="text-xs sm:text-sm text-cyan-800 dark:text-cyan-200">Most doctors continue their full practice while earning their certification.</p>
              </div>
            </div>

            {/* Career Opportunities */}
            <div id="section-9" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-rose-100 dark:bg-rose-900/30 border border-rose-300 dark:border-rose-700 rounded-full text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 9
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Multiple Career Paths & Higher Income</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-10 leading-relaxed">
                Your certification opens doors to four main career directions, each with distinct income potential:
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { path: "Own Clinic", income: "₹80-150L+", icon: "🏥", details: "Establish a modern AYUSH clinic with improved systems and higher patient volume" },
                  { path: "Hospital Work", income: "₹40-75L", icon: "🏨", details: "Join hospitals and wellness centers in formal positions" },
                  { path: "Consultant Role", income: "₹50-100L", icon: "👔", details: "Provide consulting services to other practitioners or medical organizations" },
                  { path: "Telemedicine", income: "₹30-60L", icon: "💻", details: "Scale your practice nationally/internationally through digital healthcare" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-6 bg-rose-50 dark:bg-rose-900/20 border-l-4 border-rose-500 rounded-lg hover:shadow-md transition">
                    <div className="flex items-start justify-between mb-2 sm:mb-3 gap-3">
                      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <span className="text-2xl sm:text-3xl flex-shrink-0">{item.icon}</span>
                        <h4 className="text-base sm:text-xl font-bold text-rose-900 dark:text-rose-100">{item.path}</h4>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-lg sm:text-2xl font-bold text-rose-600 dark:text-rose-400">{item.income}</div>
                        <div className="text-xs text-rose-700 dark:text-rose-300">annually</div>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-rose-800 dark:text-rose-200">{item.details}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Options */}
            <div id="section-10" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full text-green-700 dark:text-green-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 10
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Affordable Education with Flexible Payment</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                We believe cost shouldn't be a barrier to your professional growth. That's why we offer multiple payment options:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {[
                  { icon: "💳", title: "EMI Options", desc: "Break down the entire course cost into 3-12 monthly installments" },
                  { icon: "📱", title: "Digital Payments", desc: "Pay via UPI, credit card, debit card, or net banking instantly" },
                  { icon: "🎁", title: "Limited Seats Discount", desc: "Early bird discounts up to 20% for the first 50 enrollments" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
                    <div className="text-3xl sm:text-4xl mb-2 sm:mb-3">{item.icon}</div>
                    <h4 className="text-base sm:text-lg font-bold text-green-900 dark:text-green-100 mb-1 sm:mb-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-green-800 dark:text-green-200">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose DMHCA */}
            <div id="section-11" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                WHY DMHCA
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Why 2000+ Doctors Trust Delhi Medical Healthcare Academy</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-10 leading-relaxed">
                What sets DMHCA apart? Our track record speaks for itself:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
                {[
                  { num: "5+", label: "Years of Excellence", desc: "Since 2019, we've been innovating AYUSH education" },
                  { num: "2000+", label: "Doctors Trained", desc: "Across all AYUSH disciplines and specializations" },
                  { num: "100+", label: "Partner Hospitals", desc: "Real clinical exposure across India" },
                  { num: "94%", label: "Success Rate", desc: "Certification completion and career advancement" },
                  { num: "24/7", label: "Student Support", desc: "Dedicated counselors and academic support team" },
                  { num: "300%", label: "Avg Career Growth", desc: "Income increase within 2 years of graduation" },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 sm:p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg text-center">
                    <div className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">{item.num}</div>
                    <h4 className="font-bold text-slate-900 dark:text-blue-100 mb-1 text-sm sm:text-base">{item.label}</h4>
                    <p className="text-xs sm:text-sm text-blue-800 dark:text-blue-200">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border-2 border-blue-300 dark:border-blue-700 rounded-lg sm:rounded-xl md:rounded-2xl">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3 sm:mb-4">What Our Graduates Say</h4>
                <blockquote className="text-sm sm:text-base md:text-lg text-blue-800 dark:text-blue-200 italic border-l-4 border-blue-500 pl-4 sm:pl-6">
                  "DMHCA didn't just teach me modern medicine—it transformed how I see my AYUSH practice. I went from a struggling clinic to a thriving one with a 300% income increase in just 18 months. The hybrid learning model let me continue working while studying."
                </blockquote>
                <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-300 mt-3 font-semibold">— Dr. Rajesh Kumar, BAMS (Rajasthan)</p>
              </div>
            </div>

            {/* Admission Process */}
            <div id="section-12" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 sm:mb-8">Your Journey Starts Here: 4 Simple Steps to Enrollment</h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { step: "1", title: "Submit Your Application", desc: "Fill out our quick online form with your basic details and AYUSH qualification", time: "5 mins" },
                  { step: "2", title: "Verification & Counseling", desc: "Our team verifies your credentials and schedules a 1-on-1 counseling call", time: "24 hrs" },
                  { step: "3", title: "Fee Payment", desc: "Choose your program and payment method. EMI options available.", time: "1 day" },
                  { step: "4", title: "Start Learning", desc: "Get your login credentials and begin your journey today", time: "Same day" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 sm:gap-4 md:gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 sm:h-14 md:h-16 w-12 sm:w-14 md:w-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-bold text-base sm:text-lg md:text-xl">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-grow pt-1 sm:pt-2">
                      <h4 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h4>
                      <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 mb-2">{item.desc}</p>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">⏱️ Expected time: {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 sm:mt-8 md:mt-10 p-4 sm:p-6 bg-emerald-100 dark:bg-emerald-900/30 border-l-4 border-emerald-600 rounded-lg">
                <p className="text-emerald-900 dark:text-emerald-100 font-semibold text-sm sm:text-base">✓ Total enrollment time: Less than 48 hours from application to active learning</p>
              </div>
            </div>

            {/* FAQs */}
            <div id="section-13" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6 sm:mb-8">Frequently Asked Questions</h3>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {[
                  { q: "I'm a fresh AYUSH graduate. Am I eligible?", a: "Absolutely! Our programs are perfect for graduates looking to build a strong foundation in modern clinical practice. Many of our most successful students started right after graduation." },
                  { q: "Is clinical training mandatory or optional?", a: "Clinical training is optional but highly recommended. It's where you truly master practical skills. Most students choose the hybrid model—online + weekend training." },
                  { q: "Will this help me start my own clinic?", a: "Yes! We provide detailed guidance on modern clinic setup, including systems, patient management, and business strategies. Many graduates have successfully scaled their practices." },
                  { q: "What if I fail the certification exam?", a: "We offer unlimited attempts at the final exam. Plus, we provide comprehensive exam preparation materials and mock tests. Our 94% success rate shows the quality of preparation." },
                  { q: "Can I study while working full-time?", a: "Definitely! Our hybrid model is designed for working doctors. Most students commit 15-20 hours weekly and continue their practice without interruption." },
                  { q: "Is the certificate recognized internationally?", a: "Yes, our UGC-recognized certificates carry weight globally. Many graduates have used their credentials for international medical board registrations and positions abroad." },
                ].map((item, idx) => (
                  <details key={idx} className="group p-3 sm:p-4 md:p-6 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg cursor-pointer hover:shadow-md transition">
                    <summary className="flex items-center justify-between font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base gap-2">
                      <span className="text-left">{item.q}</span>
                      <span className="text-slate-600 dark:text-slate-400 group-open:rotate-180 transition flex-shrink-0">▼</span>
                    </summary>
                    <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 mt-2 sm:mt-3 md:mt-4 leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>

            <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg sm:rounded-xl">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-2">Still have questions?</h3>
              <p className="text-sm sm:text-base text-indigo-800 dark:text-indigo-300 mb-4">
                Don't hesitate to reach out to our expert counselors who can provide personalized guidance for your AYUSH hybrid programs journey.
              </p>
              <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition text-sm sm:text-base">
                Contact Our Experts →
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
