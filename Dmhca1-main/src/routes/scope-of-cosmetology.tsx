import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/scope-of-cosmetology")({
  head: () => ({
    meta: [
      { title: "Scope of Cosmetology - DMHCA" },
      { name: "description", content: "Comprehensive guide to the scope, career opportunities, and specializations in cosmetology." },
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
      question: "What is the scope of cosmetology in India?",
      answer: "Cosmetology has excellent scope in India with growing demand for aesthetic procedures. Cosmetologists can work in dermatology clinics, aesthetic centers, spas, corporate hospitals, and private practice with strong earning potential."
    },
    {
      question: "What are the career opportunities after MD in Dermatology with Cosmetology focus?",
      answer: "Cosmetologists can establish aesthetic clinics, work in dermatology centers, perform advanced procedures, conduct workshops, engage in research, teach in medical colleges, offer telemedicine consultations, and expand internationally."
    },
    {
      question: "What procedures can cosmetologists perform?",
      answer: "Common procedures include Botox injections, dermal fillers, laser treatments, chemical peels, microneedling, PRP therapy, thread lifts, skin resurfacing, hair restoration, and body contouring procedures."
    },
    {
      question: "What is the earning potential for cosmetologists?",
      answer: "Hospital-based cosmetologists earn 12-25 lakhs annually, while private practitioners typically earn 25-50+ lakhs annually. With established clinics and high-end procedures, income can exceed 60+ lakhs annually."
    },
    {
      question: "Is cosmetology a rewarding specialty?",
      answer: "Yes, cosmetology is highly rewarding both financially and professionally. It combines medical knowledge with aesthetic skills, offers flexibility, and provides immediate patient satisfaction through visible results."
    },
    {
      question: "What skills are required for success in cosmetology?",
      answer: "Essential skills include strong dermatological knowledge, artistic sense, procedural precision, excellent patient communication, business acumen, continuous learning about new technologies, and dedication to patient satisfaction and safety."
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
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-rose-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Scope of Cosmetology</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Career opportunities and specializations in cosmetic dermatology</p>
          
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
              src="/blog-images/Scope-of-Cosmetology.webp"
              alt="Scope of Cosmetology"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Explore the growing field of cosmetic dermatology</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Navigation */}
            <div className="bg-pink-50 rounded-xl p-6 mb-12 border border-pink-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-pink-600" />
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li><a href="#career-overview" className="text-pink-600 hover:text-pink-700 text-sm">Career Overview in Cosmetology</a></li>
                <li><a href="#clinical-practice" className="text-pink-600 hover:text-pink-700 text-sm">Clinical Practice Settings</a></li>
                <li><a href="#aesthetic-procedures" className="text-pink-600 hover:text-pink-700 text-sm">Aesthetic Procedures</a></li>
                <li><a href="#technology" className="text-pink-600 hover:text-pink-700 text-sm">Advanced Technologies</a></li>
                <li><a href="#specializations" className="text-pink-600 hover:text-pink-700 text-sm">Specialization Areas</a></li>
                <li><a href="#earning-potential" className="text-pink-600 hover:text-pink-700 text-sm">Earning Potential</a></li>
                <li><a href="#business-scope" className="text-pink-600 hover:text-pink-700 text-sm">Business and Entrepreneurship</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Understanding the Scope of Cosmetology</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Cosmetic dermatology is one of the fastest-growing specialties with immense scope in India and globally. The rising awareness about aesthetics and self-care creates tremendous opportunities for qualified cosmetologists.
                </p>
              </section>

              {/* Point 1 */}
              <div id="career-overview" className="bg-white rounded-xl p-8 border-l-4 border-pink-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Career Overview in Cosmetology</h3>
                    <p className="text-gray-700 mb-4">Cosmetic dermatology combines medical science with aesthetic artistry. Cosmetologists diagnose skin conditions, perform aesthetic procedures, counsel patients on skincare, and stay updated with latest aesthetic trends.</p>
                  </div>
                </div>
              </div>

              {/* Point 2 */}
              <div id="clinical-practice" className="bg-white rounded-xl p-8 border-l-4 border-pink-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Clinical Practice Settings</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Dermatology Clinics:</strong> Work in established dermatology centers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Aesthetic Centers:</strong> Dedicated aesthetic clinics and spas</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Private Practice:</strong> Establish own aesthetic clinic</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 3 */}
              <div id="aesthetic-procedures" className="bg-white rounded-xl p-8 border-l-4 border-pink-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Aesthetic Procedures</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Botox and facial rejuvenation procedures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Dermal fillers and volume restoration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Laser treatments and skin resurfacing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Chemical peels and microneedling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 4 */}
              <div id="technology" className="bg-white rounded-xl p-8 border-l-4 border-pink-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Technologies</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Advanced laser systems for skin rejuvenation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Radiofrequency and ultrasound technologies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>PRP and stem cell therapy applications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>AI-powered skin analysis tools</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 5 */}
              <div id="specializations" className="bg-white rounded-xl p-8 border-l-4 border-pink-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialization Areas</h3>
                    <p className="text-gray-700 mb-4">Cosmetologists can pursue various specializations:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Anti-aging Specialist</strong> - Facial rejuvenation and preventive aging</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Body Contouring Specialist</strong> - Fat reduction and body shaping</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Hair Restoration Expert</strong> - Hair loss treatment and restoration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 6 */}
              <div id="earning-potential" className="bg-white rounded-xl p-8 border-l-4 border-pink-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Earning Potential</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Hospital/clinic-based: 12-25 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Established practice: 25-50 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Premium aesthetic clinic: 50-100+ lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>International opportunities: 80+ lakhs annually</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 7 */}
              <div id="business-scope" className="bg-white rounded-xl p-8 border-l-4 border-pink-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Business and Entrepreneurship</h3>
                    <p className="text-gray-700 mb-4">Cosmetologists have excellent entrepreneurial opportunities:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Start own aesthetic clinic or chain of clinics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Develop skincare product lines</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Conduct training and workshops for professionals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scope Summary Box */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cosmetology Scope Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Market Growth</p>
                    <p className="text-2xl font-bold text-pink-600">Fastest Growing</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Earning Potential</p>
                    <p className="text-2xl font-bold text-pink-600">Excellent</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Patient Satisfaction</p>
                    <p className="text-2xl font-bold text-pink-600">Highest</p>
                  </div>
                </div>
              </div>

              {/* Key Tips Section */}
              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Tips for Excelling in Cosmetology</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop strong aesthetic sense and artistic skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Master latest aesthetic technologies and techniques</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Focus on patient safety and ethical practices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Build strong patient communication skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Stay updated with international aesthetic trends</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop business acumen for entrepreneurial ventures</p>
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
                    <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-pink-300 transition">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 hover:bg-pink-50 transition text-left"
                      >
                        <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-pink-600 transition-transform ${
                            expandedFaq === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-6 bg-pink-50 border-t border-gray-200">
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
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-pink-50 to-rose-50 p-8 rounded-xl border border-pink-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Share your thoughts, questions, or experiences..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent mb-4"
                    rows={4}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Post Comment
                  </button>
                </form>

                {/* Comments Display */}
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-pink-300 transition">
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
            <section className="mt-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Begin Your Cosmetology Career</h3>
              <p className="text-white/90 mb-6 text-lg">Ready to join the booming aesthetic medicine field? Connect with our experts for career guidance.</p>
              <Link to="/contact-us" className="inline-block bg-white text-pink-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                Start Today
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
                    <p className="text-2xl font-bold text-pink-600">{readingTime} min</p>
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
              <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">The aesthetic medicine market in India is growing at 20%+ annually. Early entry into this field positions you well for long-term success and financial growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
