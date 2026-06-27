import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/courses-after-mbbs-in-india")({
  head: () => ({
    meta: [
      { title: "Courses After MBBS in India - DMHCA" },
      { name: "description", content: "Explore all postgraduate and specialization courses available for MBBS graduates in India." },
    ],
  }),
  component: BlogPost,
});

function BlogPost() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [comments, setComments] = useState<Array<{name: string; email: string; text: string; date: string}>>([]);
  const [formData, setFormData] = useState({ name: '', email: '', comment: '' });
  const readingTime = 8;

  const faqs = [
    {
      question: "What are the main postgraduate options after MBBS in India?",
      answer: "After MBBS, you can pursue MD (Doctorate of Medicine), MS (Master of Surgery), PG Diploma, or super-specialty courses like DM or MCh. Each has different duration and requirements."
    },
    {
      question: "Is NEET-PG mandatory for all postgraduate courses?",
      answer: "Yes, NEET-PG is the primary entrance exam for most MD, MS, and PG Diploma programs in India. Some institutions may have their own entrance exams."
    },
    {
      question: "How long is an MD/MS program?",
      answer: "MD (Doctorate of Medicine) and MS (Master of Surgery) programs typically last 3 years with mandatory thesis/research component."
    },
    {
      question: "Can I study abroad after MBBS?",
      answer: "Yes, many medical graduates pursue postgraduate studies abroad. Popular destinations include USA (USMLE), UK (FRCPS), Canada, and Australia (RACGP)."
    },
    {
      question: "What is a PG Diploma and how is it different from MD?",
      answer: "PG Diploma programs are typically 2-3 years long and focus on practical clinical training with less emphasis on research compared to MD programs."
    },
    {
      question: "What are super-specialty courses (DM/MCh)?",
      answer: "DM (Doctor of Medicine) and MCh (Master of Chirurgie) are 3-year super-specialty courses pursued after completing MD/MS. They provide advanced specialized knowledge."
    }
  ];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.comment) {
      setComments([...comments, {
        name: formData.name,
        email: formData.email,
        text: formData.comment,
        date: new Date().toLocaleDateString()
      }]);
      setFormData({ name: '', email: '', comment: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Courses After MBBS in India</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Explore all postgraduate and specialization courses available for MBBS graduates in India</p>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={18} />
              <span>Career Planning Guide</span>
            </div>
            <div className="text-sm text-white/70">Updated: June 2025</div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Featured Image */}
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/blog-images/Courses-After-MBBS-in-India.webp"
              alt="Courses After MBBS in India"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Complete guide to postgraduate medical education options in India</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Navigation */}
            <div className="bg-blue-50 rounded-xl p-6 mb-12 border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-600" />
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li><a href="#option-1" className="text-blue-600 hover:text-blue-700 text-sm">MD (Doctorate of Medicine)</a></li>
                <li><a href="#option-2" className="text-blue-600 hover:text-blue-700 text-sm">MS (Master of Surgery)</a></li>
                <li><a href="#option-3" className="text-blue-600 hover:text-blue-700 text-sm">PG Diploma Programs</a></li>
                <li><a href="#option-4" className="text-blue-600 hover:text-blue-700 text-sm">DM (Super-specialty)</a></li>
                <li><a href="#option-5" className="text-blue-600 hover:text-blue-700 text-sm">MCh (Super-specialty)</a></li>
                <li><a href="#option-6" className="text-blue-600 hover:text-blue-700 text-sm">MBA in Healthcare</a></li>
                <li><a href="#option-7" className="text-blue-600 hover:text-blue-700 text-sm">International Opportunities</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Postgraduate Options After MBBS in India</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  After completing your MBBS degree, you have multiple pathways for career advancement in medical education and practice. This comprehensive guide explores all the postgraduate courses available for MBBS graduates in India, helping you make an informed decision about your career trajectory.
                </p>
              </section>

              {/* Option 1 */}
              <div id="option-1" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">MD (Doctorate of Medicine)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Duration:</strong> 3 years full-time postgraduate degree</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Eligibility:</strong> MBBS completion + 1 year internship + NEET-PG qualification</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Focus:</strong> Clinical training with research and thesis component</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Specialties:</strong> Internal Medicine, Pediatrics, Psychiatry, Surgery, etc.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Option 2 */}
              <div id="option-2" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">MS (Master of Surgery)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Duration:</strong> 3 years full-time postgraduate degree</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Eligibility:</strong> MBBS completion + 1 year internship + NEET-PG qualification</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Focus:</strong> Surgical training with research and thesis requirement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Specialties:</strong> General Surgery, Orthopedics, ENT, Ophthalmology, etc.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Option 3 */}
              <div id="option-3" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">PG Diploma Programs</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Duration:</strong> 2-3 years depending on specialty</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Focus:</strong> More practical, less research emphasis than MD/MS</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Specialties:</strong> Anesthesia, Radiology, Pathology, etc.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Benefit:</strong> Faster completion with clinically oriented training</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Option 4 */}
              <div id="option-4" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">DM (Doctor of Medicine - Super-specialty)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Duration:</strong> 3 years advanced specialization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Eligibility:</strong> MD in relevant specialty + entrance exam</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Examples:</strong> DM Cardiology, DM Neurology, DM Nephrology, etc.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Career:</strong> Highly specialized practice and research opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Option 5 */}
              <div id="option-5" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">MCh (Master of Chirurgie - Super-specialty)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Duration:</strong> 3 years advanced surgical specialization</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Eligibility:</strong> MS in relevant surgical specialty + entrance exam</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Examples:</strong> MCh Urology, MCh Pediatric Surgery, MCh CTVS, etc.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Career:</strong> Advanced surgical expertise and specialized centers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Option 6 */}
              <div id="option-6" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">MBA in Healthcare/Hospital Administration</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Duration:</strong> 2 years full-time or 3-4 years part-time</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Focus:</strong> Healthcare management, hospital administration, policy</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Career Path:</strong> Hospital director, healthcare consultant, policy maker</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Benefit:</strong> Blend clinical knowledge with management expertise</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Option 7 */}
              <div id="option-7" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">International Postgraduate Studies</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>USA:</strong> USMLE (United States Medical Licensing Exam)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>UK:</strong> FRCPS (Royal College of Physicians), FRCS (Surgery)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Australia/Canada:</strong> RACGP, CCPA, and other certifications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Benefit:</strong> Global career opportunities and international recognition</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Comparison Summary Box */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Postgraduate Program Comparison</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">MD/MS</p>
                    <p className="text-gray-700">3 years, research-focused, highest recognition</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">PG Diploma</p>
                    <p className="text-gray-700">2-3 years, clinical-focused, faster completion</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">DM/MCh</p>
                    <p className="text-gray-700">3 years super-specialty, highest expertise</p>
                  </div>
                </div>
              </div>

              {/* Key Tips Section */}
              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Planning Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Choose specialization based on your interest, not demand</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Gain clinical exposure during internship year</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Start preparation for entrance exams early</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Research institutes and mentors thoroughly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Consider international opportunities if interested</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Balance academics with professional development</p>
                  </div>
                </div>
              </section>
            </article>

            {/* FAQs Section */}
            <section className="mt-12">
              <div className="border-t-2 border-gray-200 pt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 hover:bg-blue-50 transition text-left"
                      >
                        <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-blue-600 transition-transform ${
                            expandedFaq === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-6 bg-blue-50 border-t border-gray-200">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Comments Section */}
            <section className="mt-12">
              <div className="border-t-2 border-gray-200 pt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Share Your Thoughts</h2>
                
                {/* Comment Form */}
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Share your thoughts, questions, or experiences..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent mb-4"
                    rows={4}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Post Comment
                  </button>
                </form>

                {/* Comments Display */}
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <p className="font-semibold text-gray-900">{comment.name}</p>
                            <p className="text-sm text-gray-600">{comment.email}</p>
                          </div>
                          <p className="text-sm text-gray-500 whitespace-nowrap">{comment.date}</p>
                        </div>
                        <p className="text-gray-700 leading-relaxed">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            {/* CTA Section */}
            <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Choose Your Path?</h3>
              <p className="text-white/90 mb-6 text-lg">Get personalized guidance from our medical education experts to choose the best postgraduate course for your career goals.</p>
              <Link to="/contact-us" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                Contact Us for Guidance
              </Link>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Article Info Card */}
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm">Reading Time</p>
                    <p className="text-2xl font-bold text-blue-600">{readingTime} min</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">Category</p>
                    <p className="text-lg font-semibold text-gray-800">Career Planning</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">Last Updated</p>
                    <p className="text-lg font-semibold text-gray-800">June 2025</p>
                  </div>
                </div>
              </div>

              {/* Related Info Box */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Start exploring your interests early during your MBBS studies. Gain practical exposure during internship year to make an informed choice about your specialization.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
