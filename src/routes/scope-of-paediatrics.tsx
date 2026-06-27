import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/scope-of-paediatrics")({
  head: () => ({
    meta: [
      { title: "Career Scope in Pediatrics - DMHCA" },
      { name: "description", content: "Explore the career scope and opportunities in Pediatrics medical specialty in India and globally." },
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
      question: "What is the scope of pediatrics in India?",
      answer: "Pediatrics in India has enormous scope with rapidly improving child healthcare infrastructure, government health programs, and private pediatric facilities expanding rapidly. With growing focus on child immunization, nutrition, and disease prevention, pediatricians are in high demand. International opportunities are also excellent for qualified Indian pediatricians."
    },
    {
      question: "What are the subspecialties in pediatrics?",
      answer: "Pediatrics offers numerous subspecialties including Pediatric Surgery, Neonatology, Pediatric Cardiology, Pediatric Oncology, Pediatric Neurology, Pediatric Gastroenterology, Pediatric Nephrology, Pediatric Rheumatology, and Pediatric Infectious Diseases. Each subspecialty provides unique career opportunities and specialization pathways."
    },
    {
      question: "Are government jobs available for pediatricians?",
      answer: "Yes, abundant government job opportunities exist in pediatric departments of medical colleges, government hospitals, and national health programs. These positions offer job security, pension benefits, teaching opportunities, and research facilities. Government pediatricians also participate in health programs like immunization drives and maternal-child health initiatives."
    },
    {
      question: "What is the earning potential for pediatricians?",
      answer: "Government pediatricians earn 10-15 lakhs annually with allowances and benefits. Private practice pediatricians and those in corporate hospitals earn 15-30 lakhs annually. Pediatric subspecialists can earn even higher, especially in metro cities. Private practice offers better earning potential compared to government positions."
    },
    {
      question: "Can I do private practice in pediatrics?",
      answer: "Yes, pediatrics is excellent for private practice. You can establish a pediatric clinic, nursing home, or diagnostic center. Many pediatricians run successful private practices combining consultation, immunization services, and preventive health care. Building a good reputation leads to steady income and satisfied patients."
    },
    {
      question: "What are the global opportunities for Indian pediatricians?",
      answer: "Strong global demand exists for pediatricians in USA, UK, Canada, Australia, and Gulf countries. Indian pediatricians can migrate by qualifying relevant licensing exams like USMLE (USA) or PLAB (UK). Many international hospitals actively recruit Indian pediatricians due to their training quality and expertise."
    }
  ];

  const titles = [
    "Clinical Pediatric Practice",
    "Hospital and Healthcare Settings",
    "Private Practice and Clinical Services",
    "Pediatric Subspecialties",
    "Community Health and Public Health",
    "Academic and Research Career",
    "International Opportunities"
  ];

  const content = [
    [
      "Diagnose and manage acute and chronic pediatric diseases and conditions",
      "Provide comprehensive preventive care including immunization and nutrition counseling",
      "Manage common pediatric illnesses like respiratory infections, gastroenteritis, and fever",
      "Conduct developmental screening and growth monitoring for all pediatric age groups"
    ],
    [
      "Work in government hospitals and medical college pediatric departments",
      "Lead pediatric units, manage pediatric wards, and oversee pediatric emergency services",
      "Work in corporate and private hospitals in well-equipped pediatric departments",
      "Access modern diagnostic facilities and provide evidence-based pediatric care"
    ],
    [
      "Establish independent pediatric clinics and diagnostic centers",
      "Provide immunization services, well-child care, and preventive health services",
      "Build patient base through quality care and develop reputation in the community",
      "Combine clinic practice with hospital consultation for diversified income"
    ],
    [
      "Pursue Neonatology specialization managing newborns and premature infants",
      "Specialize in Pediatric Surgery for surgical management of pediatric conditions",
      "Focus on Pediatric Cardiology, Oncology, or other pediatric subspecialties",
      "Develop expertise in specific pediatric conditions and become a specialist consultant"
    ],
    [
      "Participate in national health programs including immunization and disease surveillance",
      "Work in community health centers, health camps, and public health institutions",
      "Conduct health awareness programs and community outreach for child health",
      "Contribute to reducing child mortality and morbidity through preventive health initiatives"
    ],
    [
      "Pursue academic career as faculty in medical colleges and universities",
      "Conduct research on pediatric diseases, vaccines, and health interventions",
      "Publish research in peer-reviewed journals advancing pediatric knowledge",
      "Mentor junior doctors and contribute to development of pediatric specialists"
    ],
    [
      "Work in pediatric hospitals and departments in developed countries globally",
      "Access advanced technology and research opportunities in international institutions",
      "Pursue fellowships and additional training in pediatric subspecialties",
      "Build international career network and contribute to global child health initiatives"
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
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Scope of Pediatrics</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Career opportunities and specialization in pediatric medicine</p>
          
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
              src="/blog-images/Scope-of-Paediatrics.webp"
              alt="Scope of Pediatrics"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Comprehensive overview of career opportunities and specialization in pediatrics</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Navigation */}
            <div className="bg-green-50 rounded-xl p-6 mb-12 border border-green-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-green-600" />
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li><a href="#scope-1" className="text-green-600 hover:text-green-700 text-sm">Clinical Pediatric Practice</a></li>
                <li><a href="#scope-2" className="text-green-600 hover:text-green-700 text-sm">Hospital and Healthcare Settings</a></li>
                <li><a href="#scope-3" className="text-green-600 hover:text-green-700 text-sm">Private Practice and Clinical Services</a></li>
                <li><a href="#scope-4" className="text-green-600 hover:text-green-700 text-sm">Pediatric Subspecialties</a></li>
                <li><a href="#scope-5" className="text-green-600 hover:text-green-700 text-sm">Community Health and Public Health</a></li>
                <li><a href="#scope-6" className="text-green-600 hover:text-green-700 text-sm">Academic and Research Career</a></li>
                <li><a href="#scope-7" className="text-green-600 hover:text-green-700 text-sm">International Opportunities</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Scope in Pediatrics</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Pediatrics is one of the most rewarding and fulfilling medical specialties, focusing on the health and wellbeing of children from infancy through adolescence. In India, pediatrics has tremendous scope with expanding child healthcare infrastructure, government health initiatives, and growing private sector opportunities. The specialty offers diverse career pathways ranging from clinical practice to academic medicine, research, and public health. With global demand for qualified pediatricians and excellent earning potential, pediatrics presents an ideal career choice for those passionate about child health.
                </p>
              </section>

              {/* Scope Sections */}
              {titles.map((title, index) => (
                <div key={index} id={`scope-${index + 1}`} className="bg-white rounded-xl p-8 border-l-4 border-green-600 shadow-md hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-lg">{index + 1}</span>
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
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">12 to MBBS</p>
                    <p className="text-2xl font-bold text-green-600">5.5 years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">MBBS to MD Pediatrics</p>
                    <p className="text-2xl font-bold text-green-600">3-4 years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Total Duration</p>
                    <p className="text-2xl font-bold text-green-600">8.5-9.5 years</p>
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
                    <p className="text-gray-700">Develop patience and excellent communication with children and parents</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Stay updated with pediatric growth charts and developmental milestones</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Gain exposure to diverse pediatric cases and patient populations</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Learn immunization guidelines and child health programs thoroughly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop interest in child health advocacy and public health</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Consider pediatric subspecializations aligned with your interests</p>
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
                    <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-green-300 transition">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 hover:bg-green-50 transition text-left"
                      >
                        <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-green-600 transition-transform ${
                            expandedFaq === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-6 bg-green-50 border-t border-gray-200">
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
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Share your thoughts, questions, or experiences..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent mb-4"
                    rows={4}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Post Comment
                  </button>
                </form>

                {/* Comments Display */}
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-300 transition">
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
            <section className="mt-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Pediatrics Career</h3>
              <p className="text-white/90 mb-6 text-lg">Interested in pursuing pediatrics? Our career experts can guide you through specialization options and help you build your ideal pediatric career path.</p>
              <Link to="/contact-us" className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
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
                    <p className="text-2xl font-bold text-green-600">{readingTime} min</p>
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
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Pediatrics combines job security with the satisfaction of caring for children. The specialty offers excellent work-life balance, strong community impact, and opportunities for both clinical and academic excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
