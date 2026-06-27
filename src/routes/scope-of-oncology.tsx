import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/scope-of-oncology")({
  head: () => ({
    meta: [
      { title: "Career Scope in Oncology - DMHCA" },
      { name: "description", content: "Explore the career scope and opportunities in Oncology medical specialty in India and globally." },
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
      question: "What is the scope of oncology in India?",
      answer: "Oncology is rapidly expanding in India with increasing cancer incidence, improved healthcare infrastructure, and growing private sector investment. There are excellent opportunities in cancer centers, hospitals, research institutions, and private practice. India is becoming a hub for oncology professionals with international recognition."
    },
    {
      question: "What are the different subspecialties in oncology?",
      answer: "Oncology includes Medical Oncology (chemotherapy and systemic therapy), Surgical Oncology (cancer surgery), Radiation Oncology (radiotherapy), Hematology-Oncology (blood cancers), Pediatric Oncology (children's cancers), and Palliative Medicine. Each subspecialty offers distinct career paths and specialization opportunities."
    },
    {
      question: "What is the career progression in oncology?",
      answer: "Career progression includes positions as resident, senior resident, assistant consultant, consultant, and senior consultant/chief of department. Many oncologists establish cancer centers, lead research teams, pursue academic roles as professors, or develop specialized treatment protocols and clinical trials."
    },
    {
      question: "Are there research opportunities in oncology?",
      answer: "India has significant research opportunities in cancer biology, immunotherapy, targeted therapy, and precision medicine. Many institutions offer fellowship in clinical research, MD with research focus, and opportunities to collaborate with international research organizations and pharmaceutical companies."
    },
    {
      question: "What is the earning potential for oncologists?",
      answer: "Oncologists have high earning potential with government positions offering 10-15 lakhs annually plus allowances. Private sector consultants earn 20-40 lakhs annually, while those in private cancer centers or with established practice can earn 30-50+ lakhs, making it one of the highest-paying medical specialties."
    },
    {
      question: "Can oncologists work internationally?",
      answer: "Yes, Indian oncologists can work internationally in developed countries like USA, Canada, UK, and Australia. However, they need to qualify country-specific licensing exams and complete additional training. Many international cancer centers actively recruit experienced Indian oncologists due to their expertise."
    }
  ];

  const titles = [
    "Cancer Treatment and Patient Management",
    "Hospital and Cancer Center Employment",
    "Private Practice and Entrepreneurship",
    "Subspecialization Opportunities",
    "Research and Clinical Trials",
    "Academic and Teaching Roles",
    "Global Opportunities and International Practice"
  ];

  const content = [
    [
      "Diagnose and manage various types of cancers including solid tumors and hematologic malignancies",
      "Develop personalized treatment plans combining chemotherapy, targeted therapy, and immunotherapy",
      "Perform cancer screening programs and early detection initiatives in communities",
      "Provide comprehensive supportive care and manage treatment-related complications"
    ],
    [
      "Work as oncologist in government cancer institutes and hospitals with stable employment",
      "Lead oncology departments managing multidisciplinary teams and cancer programs",
      "Participate in tumor boards and collaborative cancer management decisions",
      "Access to advanced technology, research opportunities, and continuous professional development"
    ],
    [
      "Establish private cancer clinics and diagnostic centers offering personalized care",
      "Build profitable practice through consultation fees, chemotherapy administration, and procedures",
      "Develop patient-centric services including counseling, support groups, and holistic care",
      "Achieve entrepreneurial success by creating specialized cancer treatment centers"
    ],
    [
      "Pursue Medical Oncology specialization for chemotherapy and systemic cancer treatment expertise",
      "Focus on Surgical Oncology learning specialized cancer surgical techniques and approaches",
      "Specialize in Radiation Oncology managing radiotherapy treatment planning and delivery",
      "Develop expertise in specific cancer types like breast cancer, lung cancer, or gastrointestinal cancers"
    ],
    [
      "Participate in clinical trials investigating new cancer drugs and treatment protocols",
      "Conduct translational research bridging laboratory discoveries and patient care",
      "Contribute to epidemiological studies understanding cancer patterns and prevention",
      "Collaborate with pharmaceutical companies in drug development and validation studies"
    ],
    [
      "Secure positions as faculty in medical colleges teaching oncology to future doctors",
      "Lead research teams investigating novel treatment approaches and cancer biology",
      "Publish research findings in high-impact journals advancing oncology knowledge",
      "Mentor junior oncologists and contribute to specialty development through academic excellence"
    ],
    [
      "Work in cancer centers across USA, Canada, Australia, and European countries",
      "Access cutting-edge technology and treatment modalities in developed healthcare systems",
      "Participate in international research collaborations and clinical trials",
      "Build global professional network and pursue continuing education from leading cancer institutes"
    ]
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Scope of Oncology</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Career opportunities and advancement in oncology medical specialty</p>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen size={18} />
              <span>Medical Specialty Guide</span>
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
              src="/blog-images/Scope-of-Oncology.webp"
              alt="Scope of Oncology"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Comprehensive overview of career opportunities and specialization in oncology</p>
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
                <li><a href="#scope-1" className="text-amber-600 hover:text-amber-700 text-sm">Cancer Treatment and Patient Management</a></li>
                <li><a href="#scope-2" className="text-amber-600 hover:text-amber-700 text-sm">Hospital and Cancer Center Employment</a></li>
                <li><a href="#scope-3" className="text-amber-600 hover:text-amber-700 text-sm">Private Practice and Entrepreneurship</a></li>
                <li><a href="#scope-4" className="text-amber-600 hover:text-amber-700 text-sm">Subspecialization Opportunities</a></li>
                <li><a href="#scope-5" className="text-amber-600 hover:text-amber-700 text-sm">Research and Clinical Trials</a></li>
                <li><a href="#scope-6" className="text-amber-600 hover:text-amber-700 text-sm">Academic and Teaching Roles</a></li>
                <li><a href="#scope-7" className="text-amber-600 hover:text-amber-700 text-sm">Global Opportunities and International Practice</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Scope in Oncology</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Oncology is a rapidly advancing medical specialty with tremendous career potential in India and globally. As cancer incidence continues to rise and treatment options expand, the demand for qualified oncologists has never been higher. This specialty offers multiple pathways for career development, from clinical practice to research and leadership roles. With increasing investment in healthcare infrastructure and emerging technologies like immunotherapy and precision medicine, oncology presents an exciting career landscape for aspiring physicians.
                </p>
              </section>

              {/* Scope Sections */}
              {titles.map((title, index) => (
                <div key={index} id={`scope-${index + 1}`} className="bg-white rounded-xl p-8 border-l-4 border-amber-600 shadow-md hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-amber-600 font-bold text-lg">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                      <ul className="space-y-2 text-gray-700">
                        {content[index].map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              {/* Duration Summary Box */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">12 to MBBS</p>
                    <p className="text-2xl font-bold text-amber-600">5.5 years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">MBBS to MD Oncology</p>
                    <p className="text-2xl font-bold text-amber-600">3-4 years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Total Duration</p>
                    <p className="text-2xl font-bold text-amber-600">8.5-9.5 years</p>
                  </div>
                </div>
              </div>

              {/* Key Tips Section */}
              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Tips for Success</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop strong fundamentals in cancer pathology and biology</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Stay updated with latest cancer treatment protocols and guidelines</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Gain hands-on experience in cancer diagnostics and treatment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Engage in research to advance cancer treatment knowledge</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop compassion and emotional intelligence for patient care</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Pursue fellowships and additional training in specialized cancers</p>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Build Your Oncology Career</h3>
              <p className="text-white/90 mb-6 text-lg">Ready to pursue oncology as your specialty? Our career advisors can guide you through the pathway and help you make informed decisions.</p>
              <Link to="/contact-us" className="inline-block bg-white text-amber-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
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
                    <p className="text-2xl font-bold text-amber-600">{readingTime} min</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">Category</p>
                    <p className="text-lg font-semibold text-gray-800">Medical Career</p>
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
                <p className="text-sm text-gray-700">Oncology offers excellent work satisfaction and high earning potential. The specialty is growing rapidly in India with numerous opportunities for both clinical practice and research advancement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
