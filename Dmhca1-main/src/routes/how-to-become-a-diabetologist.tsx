import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/how-to-become-a-diabetologist")({
  head: () => ({
    meta: [
      { title: "How to Become a Diabetologist - DMHCA" },
      { name: "description", content: "Complete guide to becoming a diabetologist in India with specialization in endocrinology and diabetes management." },
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
      question: "What is the total duration to become a diabetologist?",
      answer: "The total duration is approximately 12-13 years: 5.5 years MBBS + 1 year internship + 3 years MD in Internal Medicine + 3 years DM in Endocrinology and Diabetes Management."
    },
    {
      question: "Is DM required or can I practice with MD?",
      answer: "You can practice with MD in Internal Medicine. However, DM specialization (Endocrinology and Diabetes) provides advanced expertise, better credentials, and higher income potential."
    },
    {
      question: "What is the competition for DM in Endocrinology?",
      answer: "Endocrinology and Diabetes is a highly competitive specialty with approximately 150-200 DM seats across India. You need NEET cutoff scores above 50th-60th percentile."
    },
    {
      question: "What skills are essential for diabetologists?",
      answer: "Strong clinical knowledge of diabetes and metabolic disorders, patient counseling skills, ability to interpret lab reports, understanding of new diabetes medications, and empathy for chronic disease management are crucial."
    },
    {
      question: "What are career options after DM in Endocrinology?",
      answer: "Government doctor in medical colleges or hospitals, consultant in private hospitals/clinics, diabetologist in diagnostic centers, academic researcher, pharmaceutical consultant, or practice independently."
    },
    {
      question: "What is the earning potential?",
      answer: "Government diabetologist: ₹10-15 lakhs/year. Private consultant: ₹20-40 lakhs/year. Those with own practice: ₹30-60+ lakhs/year depending on location and reputation."
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      {/* Hero Section */}
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">How to Become a Diabetologist</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Master's guide to specializing in endocrinology and diabetes management in India</p>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={18} />
              <span>Medical Career Guide</span>
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
              src="/blog-images/How-to-Become-a-Diabetologist.webp"
              alt="How to Become a Diabetologist"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Expert guide to becoming a diabetologist specializing in endocrinology</p>
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
                <li><a href="#step-1" className="text-blue-600 hover:text-blue-700 text-sm">Step 1: Complete MBBS</a></li>
                <li><a href="#step-2" className="text-blue-600 hover:text-blue-700 text-sm">Step 2: Finish Internship</a></li>
                <li><a href="#step-3" className="text-blue-600 hover:text-blue-700 text-sm">Step 3: Prepare for NEET-PG</a></li>
                <li><a href="#step-4" className="text-blue-600 hover:text-blue-700 text-sm">Step 4: Complete MD in Internal Medicine</a></li>
                <li><a href="#step-5" className="text-blue-600 hover:text-blue-700 text-sm">Step 5: Pursue DM in Endocrinology</a></li>
                <li><a href="#step-6" className="text-blue-600 hover:text-blue-700 text-sm">Step 6: Obtain Specialization</a></li>
                <li><a href="#step-7" className="text-blue-600 hover:text-blue-700 text-sm">Step 7: Begin Practice</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Roadmap to Becoming a Diabetologist</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Endocrinology and Diabetes is a fascinating medical specialty focused on hormonal disorders and diabetes management. This comprehensive guide outlines the complete pathway to becoming a diabetologist in India with 12-13 years of professional training.
                </p>
              </section>

              {/* Step 1 */}
              <div id="step-1" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete MBBS (5.5 Years)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Score well in 10+2 science, clear NEET entrance exam</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Study 5.5 years of medical curriculum in government or private college</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Focus on internal medicine, physiology, and biochemistry subjects</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Build strong foundation in clinical medicine and patient interaction</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div id="step-2" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Internship (1 Year)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Mandatory 1-year rotatory internship in various departments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Gain clinical exposure and develop practical medical skills</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Focus on Internal Medicine department for endocrinology foundation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Obtain Medical License (MCI registration)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div id="step-3" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Prepare & Clear NEET-PG Exam</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Begin intensive preparation 6-12 months before exam</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>300 MCQs in 3.5 hours with +4/-1 marking scheme</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Secure score above 50th percentile for MD in Internal Medicine admission</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Study internal medicine, general medicine, and preventive medicine</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div id="step-4" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete MD in Internal Medicine (3 Years)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>3-year MD program with clinical and research components</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Train in internal medicine at government/private medical colleges</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Write thesis on research topic with publication</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Gain broad knowledge of endocrine conditions and diabetes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div id="step-5" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Prepare for DM Entrance Exam</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Study endocrinology, diabetes, metabolism, and hormone disorders</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Highly competitive with only 150-200 seats nationally</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Secure above 60th percentile for better college selection</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Prepare 6-9 months intensively alongside MD studies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 6 */}
              <div id="step-6" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete DM in Endocrinology (3 Years)</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>3-year DM specialization in Endocrinology and Diabetes Management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Clinical training in diabetes, thyroid, adrenal, and pituitary disorders</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Advanced training in metabolic disorders and hormone management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Complete research thesis with publications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Step 7 */}
              <div id="step-7" className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Start Your Diabetology Practice</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Join government medical college or hospital as faculty</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Work as consultant in private hospital or diagnostic center</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Establish independent diabetology practice or clinic</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Engage in patient education, research, and continuous learning</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Duration Summary */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Duration Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">MBBS & Internship</p>
                    <p className="text-3xl font-bold text-blue-600">6.5 Years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">MD in Medicine</p>
                    <p className="text-3xl font-bold text-purple-600">3 Years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">DM Endocrinology</p>
                    <p className="text-3xl font-bold text-blue-600">3 Years</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-blue-600">
                  <p className="text-2xl font-bold text-gray-900">Total: 12-13 Years</p>
                </div>
              </div>

              {/* Key Tips */}
              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Development Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Build strong clinical skills during MD training</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Stay updated with latest diabetes management guidelines</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop excellent patient counseling and communication skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Publish research papers during DM training</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Join professional bodies like RSSDI (Diabetes Association)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Consider international fellowship for advanced training</p>
                  </div>
                </div>
              </section>
            </article>

            {/* FAQs Section */}
            <section className="mt-12">
              <div className="border-t-2 border-gray-200 pt-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-500 transition">
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
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-slate-800 dark:to-slate-800 p-8 rounded-xl border border-blue-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Share your thoughts, questions, or experiences..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent mb-4"
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in Pursuing Diabetology?</h3>
              <p className="text-white/90 mb-6 text-lg">Get expert guidance on specializations, entrance exams, and building a successful career in endocrinology and diabetes management.</p>
              <Link to="/contact-us" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                Contact Our Experts
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
                    <p className="text-lg font-semibold text-gray-800">Specialization Path</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">Total Duration</p>
                    <p className="text-lg font-semibold text-gray-800">12-13 Years</p>
                  </div>
                </div>
              </div>

              {/* Pro Tip Box */}
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Start gaining interest in endocrinology and diabetes during your MD training. This will help you prepare better for the competitive DM entrance exam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
