import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/scope-of-echocardiography")({
  head: () => ({
    meta: [
      { title: "Scope of Echocardiography - DMHCA" },
      { name: "description", content: "Comprehensive guide to the scope, career opportunities, and specializations in echocardiography." },
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
      question: "What is the scope of echocardiography in India?",
      answer: "Echocardiography has excellent scope due to high prevalence of cardiac diseases. Echocardiographers can work in hospitals, diagnostic centers, cardiology clinics, and private practice with strong job security and competitive salaries."
    },
    {
      question: "What career opportunities exist after fellowship in echocardiography?",
      answer: "Echocardiographers can work in cardiology centers, establish diagnostic ultrasound clinics, perform procedures in catheterization labs, work as independent contractors, teach in medical colleges, engage in research, and explore international opportunities."
    },
    {
      question: "What types of echocardiography can specialists perform?",
      answer: "Specialists can perform Transthoracic Echocardiography (TTE), Transesophageal Echocardiography (TEE), 3D echocardiography, Doppler studies, Stress echocardiography, and advanced cardiac imaging with expertise in different protocols."
    },
    {
      question: "What is the earning potential for echocardiographers?",
      answer: "Hospital echocardiographers earn 10-22 lakhs annually, clinic-based specialists earn 20-40 lakhs annually, while private practitioners with their own ultrasound center earn 40-70+ lakhs annually depending on patient volume."
    },
    {
      question: "Is echocardiography a good career choice?",
      answer: "Yes, echocardiography offers excellent career prospects with good earning potential, job security, and flexibility. It combines technical skills with clinical decision-making and provides immediate diagnostic impact on patient care."
    },
    {
      question: "What skills are required for success in echocardiography?",
      answer: "Essential skills include strong cardiac anatomy knowledge, proficiency with ultrasound technology, image acquisition and interpretation expertise, excellent hand-eye coordination, ability to handle complex cardiac cases, and continuous learning of new imaging modalities."
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
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 to-blue-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Scope of Echocardiography</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Career opportunities and specializations in cardiac ultrasound</p>
          
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
              src="/blog-images/Scope-of-Echocardiography.webp"
              alt="Scope of Echocardiography"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Explore the growing field of cardiac ultrasound</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Navigation */}
            <div className="bg-cyan-50 rounded-xl p-6 mb-12 border border-cyan-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-cyan-600" />
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li><a href="#career-overview" className="text-cyan-600 hover:text-cyan-700 text-sm">Career Overview in Echocardiography</a></li>
                <li><a href="#clinical-settings" className="text-cyan-600 hover:text-cyan-700 text-sm">Clinical Settings and Practice</a></li>
                <li><a href="#imaging-techniques" className="text-cyan-600 hover:text-cyan-700 text-sm">Advanced Imaging Techniques</a></li>
                <li><a href="#procedure-scope" className="text-cyan-600 hover:text-cyan-700 text-sm">Procedure and Application Scope</a></li>
                <li><a href="#specializations" className="text-cyan-600 hover:text-cyan-700 text-sm">Specialization Opportunities</a></li>
                <li><a href="#earning-potential" className="text-cyan-600 hover:text-cyan-700 text-sm">Earning Potential</a></li>
                <li><a href="#future-growth" className="text-cyan-600 hover:text-cyan-700 text-sm">Future Growth and Innovation</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Understanding the Scope of Echocardiography</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Echocardiography is one of the most important non-invasive diagnostic modalities in cardiology with tremendous scope and excellent career prospects. The increasing prevalence of cardiac diseases creates consistent demand for skilled echocardiographers.
                </p>
              </section>

              {/* Point 1 */}
              <div id="career-overview" className="bg-white rounded-xl p-8 border-l-4 border-cyan-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Career Overview in Echocardiography</h3>
                    <p className="text-gray-700 mb-4">Echocardiographers specialize in cardiac ultrasound imaging, providing diagnostic information for cardiac assessment. They perform sophisticated imaging studies, interpret findings, and assist in treatment planning.</p>
                  </div>
                </div>
              </div>

              {/* Point 2 */}
              <div id="clinical-settings" className="bg-white rounded-xl p-8 border-l-4 border-cyan-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Clinical Settings and Practice</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Cardiology Centers:</strong> Work in specialized cardiac centers and hospitals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Diagnostic Labs:</strong> Operate diagnostic ultrasound centers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Catheterization Labs:</strong> Provide imaging support during interventions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 3 */}
              <div id="imaging-techniques" className="bg-white rounded-xl p-8 border-l-4 border-cyan-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Advanced Imaging Techniques</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Transthoracic echocardiography (TTE) with complete protocols</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Transesophageal echocardiography (TEE) for advanced imaging</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>3D echocardiography and volumetric analysis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Stress echocardiography for ischemia assessment</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 4 */}
              <div id="procedure-scope" className="bg-white rounded-xl p-8 border-l-4 border-cyan-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Procedure and Application Scope</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Assess cardiac function and structure</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Evaluate valvular disease and function</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Diagnose congenital heart diseases</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Guide interventional procedures</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 5 */}
              <div id="specializations" className="bg-white rounded-xl p-8 border-l-4 border-cyan-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialization Opportunities</h3>
                    <p className="text-gray-700 mb-4">Echocardiographers can specialize in various areas:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Stress Echo Specialist</strong> - Ischemia detection and risk assessment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>TEE Expert</strong> - Perioperative and advanced imaging</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Pediatric Echocardiography</strong> - Congenital and pediatric cardiac disease</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 6 */}
              <div id="earning-potential" className="bg-white rounded-xl p-8 border-l-4 border-cyan-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Earning Potential</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Hospital echocardiographers: 10-22 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Cardiology clinic-based: 20-40 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Private diagnostic center: 40-70 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>International opportunities: 50+ lakhs annually</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 7 */}
              <div id="future-growth" className="bg-white rounded-xl p-8 border-l-4 border-cyan-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-cyan-600 font-bold text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Future Growth and Innovation</h3>
                    <p className="text-gray-700 mb-4">Echocardiography continues to evolve with technology:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>AI-assisted image analysis and diagnosis</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Point-of-care echocardiography expansion</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Advanced strain imaging and myocardial mechanics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scope Summary Box */}
              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Echocardiography Scope Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Skill Demand</p>
                    <p className="text-2xl font-bold text-cyan-600">Very High</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Technology Integration</p>
                    <p className="text-2xl font-bold text-cyan-600">Cutting-Edge</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Job Security</p>
                    <p className="text-2xl font-bold text-cyan-600">Excellent</p>
                  </div>
                </div>
              </div>

              {/* Key Tips Section */}
              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Tips for Excelling in Echocardiography</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Master cardiac anatomy in great detail</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop excellent hand-eye coordination</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Practice extensively on patients</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Stay updated with imaging technology</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Attend advanced echocardiography courses</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Maintain certification and CME credits</p>
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
                    <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-cyan-300 transition">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 hover:bg-cyan-50 transition text-left"
                      >
                        <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-cyan-600 transition-transform ${
                            expandedFaq === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-6 bg-cyan-50 border-t border-gray-200">
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
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-xl border border-cyan-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Share your thoughts, questions, or experiences..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:border-transparent mb-4"
                    rows={4}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Post Comment
                  </button>
                </form>

                {/* Comments Display */}
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-cyan-300 transition">
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
            <section className="mt-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Begin Your Echocardiography Career</h3>
              <p className="text-white/90 mb-6 text-lg">Ready to specialize in cardiac ultrasound? Get guidance from experienced echocardiography professionals.</p>
              <Link to="/contact-us" className="inline-block bg-white text-cyan-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                Connect With Us
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
                    <p className="text-2xl font-bold text-cyan-600">{readingTime} min</p>
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
              <div className="bg-cyan-50 rounded-xl p-6 border border-cyan-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Echocardiography is one of the most accessible high-income specialties. With increasing demand and advancing technology, it offers excellent growth potential throughout your career.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
