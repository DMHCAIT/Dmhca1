import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Users, Award, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/how-to-crack-neet-pg")({
  head: () => ({
    meta: [
      { title: "How to Crack NEET PG: Complete 2025 Preparation Guide — DMHCA" },
      { name: "description", content: "Comprehensive guide to cracking NEET PG with proven strategies, subject-wise tips, and success frameworks. Master the exam with expert guidance." },
    ],
  }),
  component: BlogContent,
});

function BlogContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/95 to-indigo-600/95 dark:from-blue-700 dark:to-indigo-800"></div>
        <div className="relative container-x py-4 sm:py-6 md:py-8">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-2 transition text-xs sm:text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
          <div className="max-w-3xl">
            <div className="inline-block px-3 sm:px-4 py-1 bg-blue-500/20 border border-blue-300/50 rounded-full text-blue-200 text-xs font-semibold mb-2">
              NEET PG Exam Guide • 2025 Edition
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight tracking-tight">
              How to Crack NEET PG: Complete Preparation Strategy
            </h1>
            <p className="text-sm sm:text-base text-white/90 max-w-2xl mb-4 leading-relaxed">
              Master the NEET PG exam with proven strategies, comprehensive subject guidance, and expert tips. Your complete roadmap to postgraduate medical education success.
            </p>
          </div>
          
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mt-3 pt-3 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Clock className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Read Time</div>
                <div className="font-bold text-sm sm:text-lg">10 min</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Users className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Candidates Yearly</div>
                <div className="font-bold text-sm sm:text-lg">2+ Lakh</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <Award className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Success Rate</div>
                <div className="font-bold text-sm sm:text-lg">85%+</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 text-white">
              <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
              <div>
                <div className="text-xs sm:text-sm text-white/70">Career Growth</div>
                <div className="font-bold text-sm sm:text-lg">Assured</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-4 sm:py-6 md:py-8 bg-white dark:bg-slate-800 px-4 sm:px-0">
        <div className="container-x flex justify-center">
          <div className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg sm:shadow-xl md:shadow-2xl w-full max-w-[992px]">
            <img src="/blog-images/How-to-Crack-NEET-PG.webp" alt="How to Crack NEET PG" className="w-full h-auto aspect-[992/496] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 md:py-16 bg-white/50 dark:bg-slate-800/30 backdrop-blur-sm px-4 sm:px-0">
        <div className="container-x max-w-4xl">
          <div className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            
            {/* Quick Summary */}
            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/30 dark:via-indigo-900/30 dark:to-purple-900/30 rounded-lg sm:rounded-xl md:rounded-2xl border-2 border-blue-200 dark:border-blue-800/50 not-prose">
              <h2 className="text-xl sm:text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">What You'll Learn in This Guide</h2>
              <p className="text-sm sm:text-base text-blue-800 dark:text-blue-300 mb-6 leading-relaxed">
                This comprehensive guide walks you through everything you need to crack NEET PG—from understanding the exam pattern to mastering subject-wise strategies. Learn how thousands of doctors have achieved success with structured preparation and proven techniques.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
                  <span className="text-blue-900 dark:text-blue-200">Complete exam pattern explained</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
                  <span className="text-blue-900 dark:text-blue-200">12-month prep timeline</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
                  <span className="text-blue-900 dark:text-blue-200">Subject-wise strategies</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 dark:text-blue-400 text-xl">✓</span>
                  <span className="text-blue-900 dark:text-blue-200">Proven success formulas</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="mb-12 sm:mb-14 md:mb-16 p-4 sm:p-6 md:p-8 bg-slate-100 dark:bg-slate-700/50 rounded-lg sm:rounded-xl md:rounded-2xl border border-slate-200 dark:border-slate-600 not-prose">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-4 sm:mb-6">Table of Contents</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {[
                  { num: 1, title: "Understand the Exam Pattern" },
                  { num: 2, title: "Create a Preparation Plan" },
                  { num: 3, title: "Gather Quality Study Resources" },
                  { num: 4, title: "Subject-wise Preparation Strategy" },
                  { num: 5, title: "Practice with Mock Tests" },
                  { num: 6, title: "Effective Revision Technique" },
                  { num: 7, title: "Final Month Strategy" },
                  { num: 8, title: "Key Success Tips" },
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

            {/* Section 1 */}
            <div id="section-1" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24">
              <div className="inline-block px-3 sm:px-4 py-1 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4 not-prose">
                SECTION 1
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Understand the Exam Pattern</h2>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 sm:p-6 rounded mb-4 sm:mb-6 not-prose">
                <p className="text-blue-900 dark:text-blue-200 font-semibold mb-2 text-sm sm:text-base">📋 Exam Specifications</p>
                <ul className="text-xs sm:text-sm text-blue-800 dark:text-blue-300 space-y-2">
                  <li>• <strong>Total Questions:</strong> 300 MCQs covering all medical subjects</li>
                  <li>• <strong>Duration:</strong> 3 hours 30 minutes for the entire exam</li>
                  <li>• <strong>Marking:</strong> +4 for correct, -1 for incorrect, 0 for unattempted</li>
                  <li>• <strong>Language:</strong> Conducted in English and Hindi</li>
                </ul>
              </div>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                Understanding the exact exam pattern is crucial for effective preparation. NEET PG tests your comprehensive medical knowledge across 19 subjects, with emphasis on clinical subjects. The negative marking system makes accuracy as important as speed.
              </p>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-indigo-200 dark:border-indigo-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 rounded-full text-indigo-700 dark:text-indigo-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 2
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-indigo-900 dark:text-indigo-100 mb-3 sm:mb-4">Create a Preparation Plan</h2>
              <p className="text-sm sm:text-base text-indigo-800 dark:text-indigo-300 mb-4 sm:mb-6">
                Strategic planning is the foundation of successful NEET PG preparation. A well-structured timeline ensures comprehensive coverage and adequate revision time.
              </p>
              <div className="space-y-3 text-indigo-900 dark:text-indigo-100 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold">Allocate 10-12 months for comprehensive preparation</p>
                    <p className="text-xs sm:text-sm text-indigo-700 dark:text-indigo-300">Most successful candidates start 12 months before their target exam</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold">Divide time: 6 months theory, 4 months practice tests, 2 months revision</p>
                    <p className="text-xs sm:text-sm text-indigo-700 dark:text-indigo-300">This structure ensures both depth and breadth of knowledge</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold">Study 4-6 hours daily for effective preparation</p>
                    <p className="text-xs sm:text-sm text-indigo-700 dark:text-indigo-300">Consistency matters more than marathon study sessions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold text-lg">→</span>
                  <div>
                    <p className="font-semibold">Create a subject-wise study schedule</p>
                    <p className="text-xs sm:text-sm text-indigo-700 dark:text-indigo-300">Allocate time based on subject weightage and your weak areas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div id="section-3" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 rounded-full text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 3
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Gather Quality Study Resources</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                The right study materials can significantly impact your preparation quality. Focus on high-yield, clinically-oriented resources rather than quantity.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg sm:rounded-xl">
                  <h3 className="text-lg sm:text-2xl font-bold text-purple-900 dark:text-purple-100 mb-3 sm:mb-4">Standard Textbooks</h3>
                  <ul className="space-y-2 text-purple-900 dark:text-purple-100 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">•</span>
                      <span><strong>Harrison's Internal Medicine</strong> - Comprehensive internal medicine reference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">•</span>
                      <span><strong>Bailey & Love Surgery</strong> - Complete surgical knowledge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 dark:text-purple-400">•</span>
                      <span><strong>DC Dutta Obstetrics</strong> - Obstetrics and gynecology</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg sm:rounded-xl">
                  <h3 className="text-lg sm:text-2xl font-bold text-blue-900 dark:text-blue-100 mb-3 sm:mb-4">Additional Resources</h3>
                  <ul className="space-y-2 text-blue-900 dark:text-blue-100 text-xs sm:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <span><strong>High-Yield Notes</strong> - Prepare condensed notes during theory phase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <span><strong>Question Banks</strong> - Use quality MCQ banks for practice</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 dark:text-blue-400">•</span>
                      <span><strong>Online Coaching</strong> - Consider reputable online institutes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div id="section-4" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 rounded-full text-amber-700 dark:text-amber-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 4
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Subject-wise Preparation Strategy</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                Not all subjects are equally important in NEET PG. Understanding subject weightage helps you allocate your time more effectively.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 sm:p-6 rounded mb-6 not-prose">
                <p className="text-amber-900 dark:text-amber-200 font-semibold mb-3 text-sm sm:text-base">🎯 High-Yield Subject Focus</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-amber-800 dark:text-amber-300 text-xs sm:text-sm">
                  <div>
                    <p className="font-semibold mb-1">Priority Subjects:</p>
                    <ul className="space-y-1">
                      <li>• Internal Medicine (40-45 questions)</li>
                      <li>• Surgery (25-30 questions)</li>
                      <li>• Pediatrics (20-25 questions)</li>
                      <li>• Obstetrics & Gynecology (15-20 questions)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Foundation Subjects:</p>
                    <ul className="space-y-1">
                      <li>• Pathology (10-15 questions)</li>
                      <li>• Pharmacology (10-15 questions)</li>
                      <li>• Physiology & Anatomy (10-15 questions)</li>
                      <li>• PSM & Other (20-30 questions)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Balanced approach is essential—don't neglect any subject completely. Focus more on clinical subjects, but ensure basic concepts are strong in all areas.
              </p>
            </div>

            {/* Section 5 */}
            <div id="section-5" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-green-200 dark:border-green-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full text-green-700 dark:text-green-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 5
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-900 dark:text-green-100 mb-3 sm:mb-4">Practice with Mock Tests</h2>
              <p className="text-sm sm:text-base text-green-800 dark:text-green-300 mb-4 sm:mb-6">
                Mock tests are your practice ground. They help you familiarize with the exam format, improve time management, and identify weak areas before the actual exam.
              </p>
              <div className="space-y-3 text-green-900 dark:text-green-100">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Start mock tests after completing initial theory</p>
                    <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">This ensures you have basic concept clarity before practice</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Attempt 2-3 full-length mocks per week</p>
                    <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">Increase frequency as exam date approaches</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Analyze every mock test thoroughly</p>
                    <p className="text-xs sm:text-sm text-green-700 dark:text-green-300">Understand why you made mistakes, not just correct answers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div id="section-6" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-cyan-100 dark:bg-cyan-900/30 border border-cyan-300 dark:border-cyan-700 rounded-full text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 6
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Effective Revision Technique</h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed">
                Revision is where success is sealed. A structured revision approach ensures you retain maximum information and stay sharp till exam day.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="p-3 sm:p-4 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-700 rounded">
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">Review your high-yield notes regularly</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Keep a compiled revision book with key points</p>
                </div>
                <div className="p-3 sm:p-4 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-700 rounded">
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">Revise weak areas twice</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Spend double time on topics where you scored low</p>
                </div>
                <div className="p-3 sm:p-4 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-700 rounded">
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">Use flashcards for memorizing facts</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Effective for quick review of formulas and facts</p>
                </div>
                <div className="p-3 sm:p-4 bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-700 rounded">
                  <p className="font-semibold text-slate-900 dark:text-slate-100 mb-2 text-sm sm:text-base">Practice previous years' questions</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Understand question patterns and frequently asked topics</p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div id="section-7" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 rounded-lg sm:rounded-xl md:rounded-2xl border border-rose-200 dark:border-rose-800 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-rose-100 dark:bg-rose-900/30 border border-rose-300 dark:border-rose-700 rounded-full text-rose-700 dark:text-rose-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 7
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-900 dark:text-rose-100 mb-3 sm:mb-4">Final Month Strategy</h2>
              <p className="text-sm sm:text-base text-rose-800 dark:text-rose-300 mb-4 sm:mb-6">
                The final month determines your success. This is when you leverage everything you've learned and bring it together for peak performance.
              </p>
              <div className="space-y-3 text-rose-900 dark:text-rose-100">
                <div className="flex items-start gap-3">
                  <span className="inline-block px-2 py-1 bg-rose-600 text-white text-xs font-bold rounded">1</span>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Attempt one full-length mock daily</p>
                    <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-300">Build exam stamina and get comfortable with 3.5 hours of continuous work</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-block px-2 py-1 bg-rose-600 text-white text-xs font-bold rounded">2</span>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Focus on accuracy and time management</p>
                    <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-300">Quality of attempts matters more than quantity in final month</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-block px-2 py-1 bg-rose-600 text-white text-xs font-bold rounded">3</span>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Revise important formulas and facts daily</p>
                    <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-300">Keep high-yield topics fresh in your mind</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="inline-block px-2 py-1 bg-rose-600 text-white text-xs font-bold rounded">4</span>
                  <div>
                    <p className="font-semibold text-sm sm:text-base">Maintain healthy routine and sleep</p>
                    <p className="text-xs sm:text-sm text-rose-700 dark:text-rose-300">Health and mental clarity are crucial for peak performance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div id="section-8" className="mb-12 sm:mb-14 md:mb-16 scroll-mt-24 not-prose">
              <div className="inline-block px-3 sm:px-4 py-1 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-full text-yellow-700 dark:text-yellow-300 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                SECTION 8
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4 sm:mb-6">Key Success Tips</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Consistency is Key</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Study daily without major breaks. Small consistent efforts compound over 12 months.</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Focus on Understanding</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Don't just memorize facts. Understand concepts for better retention and application.</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Take Care of Health</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Exercise regularly, eat well, and sleep 7-8 hours. A healthy mind performs better.</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Join Study Groups</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Peer learning helps clarify concepts and keeps motivation high.</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Stay Motivated</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Keep your goal in mind. Remember why you started when motivation dips.</p>
                </div>
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 rounded-lg">
                  <p className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base mb-2">✓ Avoid Distractions</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Minimize social media and other distractions during prep hours.</p>
                </div>
              </div>
            </div>

            <div className="mt-20 p-10 bg-gradient-to-r from-blue-600/95 to-indigo-600/95 dark:from-blue-700 dark:to-indigo-800 rounded-2xl border border-blue-400/20 dark:border-blue-500/30 shadow-lg not-prose">
              <div className="flex items-start gap-6">
                <BookOpen className="w-10 h-10 text-white flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-slate-50 mb-3">Ready to Crack NEET PG?</h3>
                  <p className="text-slate-100 dark:text-slate-300 mb-6 leading-relaxed text-lg">
                    Start your systematic preparation today with expert guidance and proven resources. Your success begins with a single step.
                  </p>
                  <Link to="/top-medical-courses" className="inline-flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 text-blue-600 font-bold rounded-lg transition shadow-md hover:shadow-lg transform hover:scale-105">
                    Explore NEET PG Programs →
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
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm sm:text-base">Get answers to common questions about NEET PG preparation and exam details.</p>
          
          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "What is the eligibility criteria for NEET PG?",
                a: "You must possess an MBBS degree from a recognized university, have completed or be completing a one-year internship, and be registered with MCI/State Medical Council."
              },
              {
                q: "How much time should I dedicate to NEET PG preparation?",
                a: "Ideally, you should dedicate 10-12 months for effective NEET PG preparation. This allows thorough coverage of the syllabus and sufficient time for revisions and mock tests."
              },
              {
                q: "What are the best books for NEET PG preparation?",
                a: "Standard books like Harrison's Principles of Internal Medicine, Bailey and Love's Short Practice of Surgery, and Textbook of OBG are recommended. Supplement with high-yield notes and question banks."
              },
              {
                q: "How many mock tests should I attempt?",
                a: "You should attempt at least 2-3 full-length mocks per week during preparation phase, and daily mocks in the final month before the exam."
              },
              {
                q: "What is the passing marks for NEET PG?",
                a: "The passing marks typically vary based on category. Generally, you need around 50% marks to qualify. Check the official NBE website for exact cutoff."
              },
              {
                q: "What is the exam pattern for NEET PG?",
                a: "NEET PG consists of 300 MCQs with 4 options each, to be completed in 3.5 hours. Each correct answer gives 4 marks, incorrect answer deducts 1 mark, and no mark for unattempted questions."
              }
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

          <div className="mt-10 sm:mt-12 p-4 sm:p-6 md:p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg sm:rounded-xl">
            <h3 className="text-lg sm:text-xl font-bold text-blue-900 dark:text-blue-200 mb-2">Still have questions?</h3>
            <p className="text-sm sm:text-base text-blue-800 dark:text-blue-300 mb-4">
              Don't hesitate to reach out to our expert counselors who can provide personalized guidance for your NEET PG preparation journey.
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
