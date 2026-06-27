import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/scope-of-cardiology")({
  head: () => ({
    meta: [
      { title: "Scope of Cardiology - DMHCA" },
      { name: "description", content: "Comprehensive guide to the scope, career opportunities, and specializations in cardiology." },
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
      question: "What is the scope of cardiology in India?",
      answer: "Cardiology has tremendous scope in India due to rising cardiovascular diseases. Cardiologists can work in hospitals, diagnostic centers, private practice, research institutions, and academic medical centers with excellent earning potential and job security."
    },
    {
      question: "What are the career opportunities after MD Cardiology?",
      answer: "After MD, cardiologists can pursue private practice, work as consultants in hospitals, engage in research, teach in medical colleges, specialize in interventional cardiology, electrophysiology, or heart transplantation. International opportunities are also available."
    },
    {
      question: "What subspecialties are available in cardiology?",
      answer: "Popular subspecialties include Interventional Cardiology, Clinical Cardiac Electrophysiology, Heart Failure and Transplant Cardiology, Preventive Cardiology, Pediatric Cardiology, and Non-invasive Cardiac Imaging. Each offers unique career prospects."
    },
    {
      question: "What is the salary potential for cardiologists?",
      answer: "Cardiologists command high salaries in India. In hospitals, they earn 15-30 lakhs annually, while private practitioners often earn significantly more. International opportunities offer even higher compensation packages."
    },
    {
      question: "Is cardiology a good specialty to pursue?",
      answer: "Yes, cardiology is excellent for those interested in acute care, procedures, and research. With increasing cardiovascular diseases, demand is consistently high. It offers both clinical and procedural satisfaction with excellent earning potential."
    },
    {
      question: "What skills are required for a successful cardiology career?",
      answer: "Essential skills include strong clinical assessment, proficiency in cardiac imaging and ECG interpretation, procedural skills, problem-solving abilities, continuous learning mindset, excellent communication for patient counseling, and research aptitude."
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
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-pink-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Scope of Cardiology</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Career opportunities and specializations in cardiology</p>
          
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
              src="/blog-images/Scope-of-Cardiology.webp"
              alt="Scope of Cardiology"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Explore the diverse career opportunities in cardiology</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Navigation */}
            <div className="bg-red-50 rounded-xl p-6 mb-12 border border-red-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-red-600" />
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li><a href="#career-overview" className="text-red-600 hover:text-red-700 text-sm">Career Overview in Cardiology</a></li>
                <li><a href="#clinical-practice" className="text-red-600 hover:text-red-700 text-sm">Clinical Practice Opportunities</a></li>
                <li><a href="#interventional" className="text-red-600 hover:text-red-700 text-sm">Interventional Cardiology</a></li>
                <li><a href="#research" className="text-red-600 hover:text-red-700 text-sm">Research and Academics</a></li>
                <li><a href="#specializations" className="text-red-600 hover:text-red-700 text-sm">Advanced Specializations</a></li>
                <li><a href="#earning-potential" className="text-red-600 hover:text-red-700 text-sm">Earning Potential</a></li>
                <li><a href="#international-scope" className="text-red-600 hover:text-red-700 text-sm">International Opportunities</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Understanding the Scope of Cardiology</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Cardiology is one of the most dynamic and rewarding medical specialties with exceptional career prospects. The rising prevalence of cardiovascular diseases in India creates tremendous opportunities for qualified cardiologists in diverse settings.
                </p>
              </section>

              {/* Point 1 */}
              <div id="career-overview" className="bg-white rounded-xl p-8 border-l-4 border-red-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Career Overview in Cardiology</h3>
                    <p className="text-gray-700 mb-4">Cardiology offers diverse career paths across diagnostic, therapeutic, and preventive domains. Cardiologists diagnose and treat heart diseases, perform procedures, conduct research, and educate medical professionals.</p>
                  </div>
                </div>
              </div>

              {/* Point 2 */}
              <div id="clinical-practice" className="bg-white rounded-xl p-8 border-l-4 border-red-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Clinical Practice Opportunities</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Hospital Practice:</strong> Work as cardiologist in government or private hospitals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Private Clinic:</strong> Establish own cardiac clinic with consultation services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Diagnostic Centers:</strong> Provide cardiac imaging and consultation services</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 3 */}
              <div id="interventional" className="bg-white rounded-xl p-8 border-l-4 border-red-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Interventional Cardiology</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Perform coronary angiography and angioplasty procedures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Conduct complex percutaneous coronary interventions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Manage acute coronary syndromes and emergency cardiac care</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Specialize in structural heart procedures</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 4 */}
              <div id="research" className="bg-white rounded-xl p-8 border-l-4 border-red-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Research and Academics</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Conduct research in cardiac pathophysiology and therapeutics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Teach in medical colleges and research institutions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Publish research in international journals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Develop new cardiac treatment protocols</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 5 */}
              <div id="specializations" className="bg-white rounded-xl p-8 border-l-4 border-red-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Specializations</h3>
                    <p className="text-gray-700 mb-4">After MD Cardiology, pursue additional fellowships in specialized areas:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Interventional Cardiology</strong> - Catheterization and percutaneous procedures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Electrophysiology</strong> - Heart rhythm management and ablations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Heart Failure Specialist</strong> - Transplantation and device therapy</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 6 */}
              <div id="earning-potential" className="bg-white rounded-xl p-8 border-l-4 border-red-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Earning Potential</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Hospital cardiologists: 15-30 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Private practitioners: 30+ lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Interventional specialists: 40+ lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>International opportunities: 60+ lakhs annually</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 7 */}
              <div id="international-scope" className="bg-white rounded-xl p-8 border-l-4 border-red-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-red-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">International Opportunities</h3>
                    <p className="text-gray-700 mb-4">Cardiologists from India have strong prospects globally:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Work in hospitals in USA, UK, Australia, and Gulf countries</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Higher compensation packages and better working conditions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Access to advanced technology and research opportunities</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scope Summary Box */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border border-red-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cardiology Scope Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Job Market</p>
                    <p className="text-2xl font-bold text-red-600">Excellent</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Growth Rate</p>
                    <p className="text-2xl font-bold text-red-600">High</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Work Diversity</p>
                    <p className="text-2xl font-bold text-red-600">Extensive</p>
                  </div>
                </div>
              </div>

              {/* Key Tips Section */}
              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Tips for Excelling in Cardiology</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop strong fundamentals in cardiac pathophysiology</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Master ECG interpretation and cardiac imaging</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Pursue hands-on training in procedures early</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Engage in clinical research and publications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Stay updated with latest cardiac guidelines</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Build mentorship with experienced cardiologists</p>
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
                    <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-red-300 transition">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 hover:bg-red-50 transition text-left"
                      >
                        <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-red-600 transition-transform ${
                            expandedFaq === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-6 bg-red-50 border-t border-gray-200">
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
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-xl border border-red-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Share your thoughts, questions, or experiences..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent mb-4"
                    rows={4}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Post Comment
                  </button>
                </form>

                {/* Comments Display */}
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-red-300 transition">
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
            <section className="mt-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Cardiology Journey</h3>
              <p className="text-white/90 mb-6 text-lg">Ready to explore a career in cardiology? Connect with our experts for personalized guidance.</p>
              <Link to="/contact-us" className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                Get Guidance Today
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
                    <p className="text-2xl font-bold text-red-600">{readingTime} min</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">Category</p>
                    <p className="text-lg font-semibold text-gray-800">Specialty Guide</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">Last Updated</p>
                    <p className="text-lg font-semibold text-gray-800">June 2025</p>
                  </div>
                </div>
              </div>

              {/* Related Info Box */}
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Cardiology is increasingly recognized as a high-demand specialty. Early exposure to cardiac cases during medical training enhances your preparation for this rewarding career.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
