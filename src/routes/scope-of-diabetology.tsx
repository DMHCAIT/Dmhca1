import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/scope-of-diabetology")({
  head: () => ({
    meta: [
      { title: "Scope of Diabetology - DMHCA" },
      { name: "description", content: "Comprehensive guide to the scope, career opportunities, and specializations in diabetology." },
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
      question: "What is the scope of diabetology in India?",
      answer: "Diabetology has exceptional scope in India as diabetes prevalence is among the highest globally. Diabetologists can work in hospitals, clinics, research centers, and private practice with excellent job security and earning potential."
    },
    {
      question: "What are the career opportunities after MD in Internal Medicine with Diabetology focus?",
      answer: "Diabetologists can work in diabetes care centers, endocrinology clinics, hospitals, engage in research on diabetes management, teach in medical colleges, establish diabetes prevention programs, conduct public health initiatives, and offer telemedicine services."
    },
    {
      question: "What specializations are available in diabetology?",
      answer: "Popular specializations include Type 1 Diabetes Management, Type 2 Diabetes and Obesity, Gestational Diabetes, Pediatric Diabetes, Diabetic Complications Management, and Preventive Diabetology focusing on lifestyle modification programs."
    },
    {
      question: "What is the salary potential for diabetologists?",
      answer: "Hospital-based diabetologists earn 12-25 lakhs annually, while private practitioners typically earn 25-45 lakhs annually. Those with diabetes prevention programs and corporate contracts earn 45+ lakhs annually."
    },
    {
      question: "Is diabetology a good specialty to pursue?",
      answer: "Yes, diabetology offers excellent career prospects due to high disease prevalence. It combines clinical practice, preventive medicine, and research opportunities with consistent patient flow and good earning potential."
    },
    {
      question: "What skills are required for success in diabetology?",
      answer: "Essential skills include strong metabolic knowledge, expertise in diabetes management protocols, understanding of newer medications, counseling and lifestyle coaching abilities, research aptitude, and excellent communication for patient education."
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
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 to-orange-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Scope of Diabetology</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Career opportunities and specializations in diabetes management</p>
          
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
              src="/blog-images/Scope-of-Diabetology.webp"
              alt="Scope of Diabetology"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Explore career opportunities in diabetes management</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Navigation */}
            <div className="bg-amber-50 rounded-xl p-6 mb-12 border border-amber-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-amber-600" />
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li><a href="#career-overview" className="text-amber-600 hover:text-amber-700 text-sm">Career Overview in Diabetology</a></li>
                <li><a href="#patient-care" className="text-amber-600 hover:text-amber-700 text-sm">Patient Care and Management</a></li>
                <li><a href="#prevention" className="text-amber-600 hover:text-amber-700 text-sm">Prevention and Education</a></li>
                <li><a href="#research" className="text-amber-600 hover:text-amber-700 text-sm">Research and Innovation</a></li>
                <li><a href="#specializations" className="text-amber-600 hover:text-amber-700 text-sm">Specialization Areas</a></li>
                <li><a href="#earning-potential" className="text-amber-600 hover:text-amber-700 text-sm">Earning Potential</a></li>
                <li><a href="#public-health" className="text-amber-600 hover:text-amber-700 text-sm">Public Health Scope</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Understanding the Scope of Diabetology</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Diabetology is one of the most important specialties with enormous scope. With over 77 million diabetics in India, the demand for qualified diabetologists is consistently high across all healthcare settings.
                </p>
              </section>

              {/* Point 1 */}
              <div id="career-overview" className="bg-white rounded-xl p-8 border-l-4 border-amber-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Career Overview in Diabetology</h3>
                    <p className="text-gray-700 mb-4">Diabetologists specialize in diagnosing and managing diabetes and metabolic disorders. They provide comprehensive care including lifestyle modification, medication management, complication prevention, and patient education.</p>
                  </div>
                </div>
              </div>

              {/* Point 2 */}
              <div id="patient-care" className="bg-white rounded-xl p-8 border-l-4 border-amber-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Patient Care and Management</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Outpatient Clinics:</strong> Manage diabetes patients in specialized diabetes clinics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Hospital Practice:</strong> Manage hospitalized diabetic patients and emergencies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Private Practice:</strong> Establish own diabetes care center</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 3 */}
              <div id="prevention" className="bg-white rounded-xl p-8 border-l-4 border-amber-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Prevention and Education</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Develop diabetes prevention programs for at-risk populations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Conduct lifestyle modification and dietary counseling</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Provide patient education on self-management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Prevent or delay diabetes complications</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 4 */}
              <div id="research" className="bg-white rounded-xl p-8 border-l-4 border-amber-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Research and Innovation</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Conduct clinical research on new diabetes treatments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Participate in international diabetes research</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Develop innovative management protocols</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Publish in peer-reviewed journals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 5 */}
              <div id="specializations" className="bg-white rounded-xl p-8 border-l-4 border-amber-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialization Areas</h3>
                    <p className="text-gray-700 mb-4">Diabetologists can specialize in various areas:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Type 1 Diabetes Specialist</strong> - Insulin management and immunology</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Type 2 Diabetes and Obesity</strong> - Metabolic management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Gestational Diabetes Specialist</strong> - Pregnancy and diabetes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 6 */}
              <div id="earning-potential" className="bg-white rounded-xl p-8 border-l-4 border-amber-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Earning Potential</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Hospital diabetologists: 12-25 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Specialized diabetes clinics: 20-40 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Private practitioners: 25-45 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Corporate/research positions: 40+ lakhs annually</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 7 */}
              <div id="public-health" className="bg-white rounded-xl p-8 border-l-4 border-amber-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Public Health Scope</h3>
                    <p className="text-gray-700 mb-4">Significant opportunities in public health and preventive medicine:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Lead national diabetes screening programs</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Develop community health initiatives</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Work in diabetes health policy and guidelines</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scope Summary Box */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Diabetology Scope Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Job Demand</p>
                    <p className="text-2xl font-bold text-amber-600">Very High</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Disease Prevalence</p>
                    <p className="text-2xl font-bold text-amber-600">Rising</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Growth Trajectory</p>
                    <p className="text-2xl font-bold text-amber-600">Stable</p>
                  </div>
                </div>
              </div>

              {/* Key Tips Section */}
              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Tips for Excelling in Diabetology</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Master latest diabetes management protocols</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop strong patient counseling skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Stay updated with new medications and treatments</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Focus on complication prevention strategies</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Engage in research on diabetes management</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Build expertise in preventive programs</p>
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
                    <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-amber-300 transition">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 hover:bg-amber-50 transition text-left"
                      >
                        <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-amber-600 transition-transform ${
                            expandedFaq === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-6 bg-amber-50 border-t border-gray-200">
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
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl border border-amber-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Share your thoughts, questions, or experiences..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600 focus:border-transparent mb-4"
                    rows={4}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-amber-600 hover:bg-amber-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Post Comment
                  </button>
                </form>

                {/* Comments Display */}
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-amber-300 transition">
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
            <section className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Pursue Your Diabetology Career</h3>
              <p className="text-white/90 mb-6 text-lg">Ready to specialize in diabetes management? Get expert guidance from our specialists.</p>
              <Link to="/contact-us" className="inline-block bg-white text-amber-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                Get Expert Guidance
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
                    <p className="text-2xl font-bold text-amber-600">{readingTime} min</p>
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
              <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Diabetology is recession-proof. With diabetes prevalence expected to reach 100 million in India by 2030, career opportunities will only increase exponentially.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
