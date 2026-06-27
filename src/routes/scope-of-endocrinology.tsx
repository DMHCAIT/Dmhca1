import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/scope-of-endocrinology")({
  head: () => ({
    meta: [
      { title: "Scope of Endocrinology - DMHCA" },
      { name: "description", content: "Comprehensive guide to the scope, career opportunities, and specializations in endocrinology." },
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
      question: "What is the scope of endocrinology in India?",
      answer: "Endocrinology has tremendous scope in India due to rising metabolic and endocrine disorders. Endocrinologists can work in hospitals, specialized clinics, research centers, and private practice with excellent earning potential and job security."
    },
    {
      question: "What are the career opportunities after MD in Endocrinology?",
      answer: "Endocrinologists can work in hospital endocrinology departments, establish private practice, work in specialized clinics, engage in clinical and basic research, teach in medical colleges, conduct public health programs, and explore international opportunities."
    },
    {
      question: "What subspecialties are available in endocrinology?",
      answer: "Popular subspecialties include Thyroid Disorders, Pituitary and Adrenal Disorders, Reproductive Endocrinology, Metabolic Bone Disease, Neuroendocrinology, Pediatric Endocrinology, and Diabetes Management with integrated care."
    },
    {
      question: "What is the salary potential for endocrinologists?",
      answer: "Hospital endocrinologists earn 15-30 lakhs annually, clinic-based specialists earn 25-45 lakhs annually, while private practitioners with established practice earn 45-80+ lakhs annually depending on patient volume and specialization."
    },
    {
      question: "Is endocrinology a good specialty to pursue?",
      answer: "Yes, endocrinology offers excellent career prospects with good earning potential, intellectual challenges, and diverse patient population. Rising prevalence of thyroid disorders and metabolic diseases ensures consistent demand."
    },
    {
      question: "What skills are required for success in endocrinology?",
      answer: "Essential skills include strong knowledge of endocrine physiology and pathology, proficiency with hormone assays and imaging interpretation, excellent diagnostic acumen, patient counseling abilities, research aptitude, and continuous learning of new therapies."
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-indigo-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Scope of Endocrinology</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Career opportunities and specializations in endocrine disorders</p>
          
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
              src="/blog-images/Scope-of-Endocrinology.webp"
              alt="Scope of Endocrinology"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Explore the diverse field of endocrinology and metabolic disorders</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Navigation */}
            <div className="bg-purple-50 rounded-xl p-6 mb-12 border border-purple-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-purple-600" />
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li><a href="#career-overview" className="text-purple-600 hover:text-purple-700 text-sm">Career Overview in Endocrinology</a></li>
                <li><a href="#clinical-practice" className="text-purple-600 hover:text-purple-700 text-sm">Clinical Practice Settings</a></li>
                <li><a href="#disease-management" className="text-purple-600 hover:text-purple-700 text-sm">Disease Management Focus</a></li>
                <li><a href="#diagnostic-expertise" className="text-purple-600 hover:text-purple-700 text-sm">Diagnostic Expertise</a></li>
                <li><a href="#specializations" className="text-purple-600 hover:text-purple-700 text-sm">Specialization Areas</a></li>
                <li><a href="#earning-potential" className="text-purple-600 hover:text-purple-700 text-sm">Earning Potential</a></li>
                <li><a href="#research-scope" className="text-purple-600 hover:text-purple-700 text-sm">Research and Academic Opportunities</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Understanding the Scope of Endocrinology</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Endocrinology is a fascinating specialty dealing with hormonal and metabolic disorders. With rising prevalence of thyroid disorders, diabetes, and metabolic syndrome, endocrinologists are in high demand across India.
                </p>
              </section>

              {/* Point 1 */}
              <div id="career-overview" className="bg-white rounded-xl p-8 border-l-4 border-purple-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Career Overview in Endocrinology</h3>
                    <p className="text-gray-700 mb-4">Endocrinologists specialize in diagnosing and managing hormonal and metabolic disorders. They provide comprehensive care including diagnosis, treatment planning, long-term management, and preventive strategies for endocrine diseases.</p>
                  </div>
                </div>
              </div>

              {/* Point 2 */}
              <div id="clinical-practice" className="bg-white rounded-xl p-8 border-l-4 border-purple-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Clinical Practice Settings</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Hospital Departments:</strong> Work in endocrinology departments of teaching hospitals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Specialized Clinics:</strong> Manage thyroid, diabetes, and other endocrine clinics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span><strong>Private Practice:</strong> Establish own endocrinology consultation center</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 3 */}
              <div id="disease-management" className="bg-white rounded-xl p-8 border-l-4 border-purple-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Disease Management Focus</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Thyroid disease management including hypothyroidism and hyperthyroidism</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Diabetes management with integrated care approach</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Pituitary and adrenal disorder diagnosis and management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Metabolic bone diseases and osteoporosis management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 4 */}
              <div id="diagnostic-expertise" className="bg-white rounded-xl p-8 border-l-4 border-purple-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Diagnostic Expertise</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Interpretation of complex hormonal assays and tests</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Advanced imaging interpretation (MRI, CT for endocrine pathology)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Perform diagnostic procedures like thyroid fine needle aspiration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Manage complex diagnostic dilemmas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 5 */}
              <div id="specializations" className="bg-white rounded-xl p-8 border-l-4 border-purple-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialization Areas</h3>
                    <p className="text-gray-700 mb-4">Endocrinologists can develop expertise in specialized areas:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Thyroid Specialist</strong> - Comprehensive thyroid disease management</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Pituitary Expert</strong> - Complex pituitary and hypothalamic disorders</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span><strong>Reproductive Endocrinologist</strong> - Hormonal infertility management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 6 */}
              <div id="earning-potential" className="bg-white rounded-xl p-8 border-l-4 border-purple-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">6</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Earning Potential</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Hospital endocrinologists: 15-30 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Clinic-based specialists: 25-45 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Private practitioners: 45-80 lakhs annually</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                        <span>Corporate and pharmaceutical roles: 50+ lakhs annually</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Point 7 */}
              <div id="research-scope" className="bg-white rounded-xl p-8 border-l-4 border-purple-600 shadow-md hover:shadow-lg transition">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-lg">7</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Research and Academic Opportunities</h3>
                    <p className="text-gray-700 mb-4">Strong research and academic opportunities available:</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Conduct research on endocrine disorders and new treatments</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Teach in medical colleges and guide residents</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-purple-600 flex-shrink-0 mt-1" />
                        <span>Publish in international endocrinology journals</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Scope Summary Box */}
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Endocrinology Scope Overview</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Disease Prevalence</p>
                    <p className="text-2xl font-bold text-purple-600">Very High</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Research Opportunity</p>
                    <p className="text-2xl font-bold text-purple-600">Abundant</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Career Flexibility</p>
                    <p className="text-2xl font-bold text-purple-600">High</p>
                  </div>
                </div>
              </div>

              {/* Key Tips Section */}
              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Tips for Excelling in Endocrinology</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Master endocrine physiology and biochemistry thoroughly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop expertise in hormone assay interpretation</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Stay updated with new hormone therapies</p>
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
                    <p className="text-gray-700">Develop excellent patient counseling skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Build expertise in multidisciplinary care</p>
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
                    <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-purple-300 transition">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 hover:bg-purple-50 transition text-left"
                      >
                        <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-purple-600 transition-transform ${
                            expandedFaq === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-6 bg-purple-50 border-t border-gray-200">
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
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-xl border border-purple-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Share your thoughts, questions, or experiences..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mb-4"
                    rows={4}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Post Comment
                  </button>
                </form>

                {/* Comments Display */}
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-purple-300 transition">
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
            <section className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Explore Your Endocrinology Journey</h3>
              <p className="text-white/90 mb-6 text-lg">Ready to specialize in endocrinology? Get expert guidance to shape your career in this dynamic field.</p>
              <Link to="/contact-us" className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
                Contact Our Advisors
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
                    <p className="text-2xl font-bold text-purple-600">{readingTime} min</p>
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
              <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Endocrinology offers the unique combination of research opportunities, clinical excellence, and financial rewards. With thyroid disorders affecting 42 million Indians, demand is consistently high.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
