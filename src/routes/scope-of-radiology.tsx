import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/scope-of-radiology")({
  head: () => ({
    meta: [
      { title: "Career Scope in Radiology - DMHCA" },
      { name: "description", content: "Explore the career scope and opportunities in Radiology medical specialty in India and internationally." },
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
      question: "What is the scope of radiology in India?",
      answer: "Radiology has exceptional scope in India with rapid modernization of diagnostic imaging equipment, increasing demand for specialists, and growing private diagnostic centers. Advanced imaging modalities like CT, MRI, PET, and ultrasound are becoming standard in healthcare. The specialty offers excellent career opportunities in both government and private sectors with high earning potential."
    },
    {
      question: "What are the subspecialties in radiology?",
      answer: "Radiology includes several subspecialties: Diagnostic Radiology (general imaging), Interventional Radiology (minimally invasive procedures), Neuroradiology (brain and spine imaging), Musculoskeletal Radiology, Cardiac Imaging, Abdominal Imaging, Pediatric Radiology, and Oncologic Imaging. Each offers distinct career pathways and specialization opportunities."
    },
    {
      question: "What is the demand for radiologists?",
      answer: "Demand for radiologists is exceptionally high in India. Every hospital requires radiologists, diagnostic centers are expanding rapidly, and there's growing demand for teleradiology services. The shortage of qualified radiologists makes it one of the most in-demand medical specialties in the country."
    },
    {
      question: "What are the career opportunities for radiologists?",
      answer: "Opportunities include working in government hospitals and medical colleges, private diagnostic centers, corporate hospitals, establishing independent diagnostic centers, teleradiology services, image interpretation for remote areas, quality assurance in imaging centers, and positions in pharmaceutical companies involved in clinical trials."
    },
    {
      question: "What is the earning potential in radiology?",
      answer: "Radiology offers excellent earning potential. Government radiologists earn 10-15 lakhs annually. Private sector radiologists earn 20-40 lakhs annually. Those with established diagnostic centers can earn 50+ lakhs annually. Teleradiology specialists earn significant income with flexible working arrangements."
    },
    {
      question: "Is there international scope for Indian radiologists?",
      answer: "Yes, Indian radiologists are highly sought after internationally. Countries like USA, Canada, Australia, and Middle East offer excellent opportunities. Indian radiologists can work abroad by qualifying relevant licensing exams. Teleradiology has opened new opportunities for Indian radiologists to serve international clients."
    }
  ];

  const titles = [
    "Diagnostic Imaging and Patient Care",
    "Hospital and Healthcare Employment",
    "Private Practice and Entrepreneurship",
    "Interventional Radiology and Procedures",
    "Teleradiology and Digital Innovation",
    "Research and Academic Excellence",
    "International Opportunities"
  ];

  const content = [
    [
      "Interpret CT, MRI, Ultrasound, X-ray and other imaging modalities for accurate diagnosis",
      "Collaborate with clinicians in diagnosis and treatment planning of various diseases",
      "Provide imaging guidance for clinical decision-making and patient management",
      "Conduct quality assurance and maintain high standards in diagnostic imaging"
    ],
    [
      "Work in government medical colleges and hospitals in radiology departments",
      "Lead radiology teams and manage imaging equipment and resources",
      "Work in corporate and private hospitals with state-of-the-art imaging facilities",
      "Participate in emergency imaging services and critical patient care"
    ],
    [
      "Establish independent diagnostic centers with modern imaging equipment",
      "Build profitable practice through consultation fees and imaging procedures",
      "Offer specialized imaging services like advanced ultrasound and interventional procedures",
      "Develop successful business model combining quality service and financial returns"
    ],
    [
      "Perform minimally invasive procedures like angiography, biopsy, and drainage",
      "Conduct pain management procedures and therapeutic interventions under imaging guidance",
      "Specialize in interventional radiology offering catheter-based treatments",
      "Develop specialized skills in percutaneous procedures and image-guided interventions"
    ],
    [
      "Provide teleradiology services interpreting images for remote hospitals and clinics",
      "Work with teleradiology platforms offering flexible work arrangements and good income",
      "Interpret images from international clients and healthcare networks",
      "Participate in digital health initiatives and remote diagnostic services"
    ],
    [
      "Pursue academic career as faculty in medical colleges and imaging institutes",
      "Conduct research on imaging techniques, radiation safety, and diagnostic accuracy",
      "Publish research in peer-reviewed journals advancing radiologic knowledge",
      "Mentor junior radiologists and contribute to specialty development"
    ],
    [
      "Work in imaging departments of international hospitals in developed countries",
      "Access advanced technology and specialized imaging equipment worldwide",
      "Participate in international research collaborations and radiology conferences",
      "Build global career network and international professional recognition"
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
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-blue-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Scope of Radiology</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Career opportunities and specialization in diagnostic and interventional radiology</p>
          
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
              src="/blog-images/Scope-of-Radiology.webp"
              alt="Scope of Radiology"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Comprehensive overview of career opportunities and specialization in radiology</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Quick Navigation */}
            <div className="bg-indigo-50 rounded-xl p-6 mb-12 border border-indigo-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-indigo-600" />
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li><a href="#scope-1" className="text-indigo-600 hover:text-indigo-700 text-sm">Diagnostic Imaging and Patient Care</a></li>
                <li><a href="#scope-2" className="text-indigo-600 hover:text-indigo-700 text-sm">Hospital and Healthcare Employment</a></li>
                <li><a href="#scope-3" className="text-indigo-600 hover:text-indigo-700 text-sm">Private Practice and Entrepreneurship</a></li>
                <li><a href="#scope-4" className="text-indigo-600 hover:text-indigo-700 text-sm">Interventional Radiology and Procedures</a></li>
                <li><a href="#scope-5" className="text-indigo-600 hover:text-indigo-700 text-sm">Teleradiology and Digital Innovation</a></li>
                <li><a href="#scope-6" className="text-indigo-600 hover:text-indigo-700 text-sm">Research and Academic Excellence</a></li>
                <li><a href="#scope-7" className="text-indigo-600 hover:text-indigo-700 text-sm">International Opportunities</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Scope in Radiology</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Radiology is one of the most dynamic and rapidly evolving medical specialties with exceptional career opportunities in India and globally. Modern healthcare increasingly relies on advanced diagnostic imaging for accurate diagnosis and treatment planning. With cutting-edge technology, growing healthcare infrastructure, and high demand for radiologists, the specialty offers excellent career growth, financial security, and intellectual satisfaction. Whether pursuing diagnostic radiology, interventional procedures, or emerging teleradiology services, radiologists play a crucial role in modern medical practice.
                </p>
              </section>

              {/* Scope Sections */}
              {titles.map((title, index) => (
                <div key={index} id={`scope-${index + 1}`} className="bg-white rounded-xl p-8 border-l-4 border-indigo-600 shadow-md hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-indigo-600 font-bold text-lg">{index + 1}</span>
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
              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-8 border border-indigo-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">12 to MBBS</p>
                    <p className="text-2xl font-bold text-indigo-600">5.5 years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">MBBS to MD Radiology</p>
                    <p className="text-2xl font-bold text-indigo-600">3-4 years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Total Duration</p>
                    <p className="text-2xl font-bold text-indigo-600">8.5-9.5 years</p>
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
                    <p className="text-gray-700">Develop strong knowledge of cross-sectional anatomy and imaging</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Gain proficiency in operating advanced imaging equipment</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Learn image interpretation and diagnostic reasoning skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Stay updated with new imaging technologies and protocols</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Learn radiation safety and protection principles</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Consider sub-specialization in interventional or advanced imaging</p>
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
                    <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-indigo-300 transition">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 hover:bg-indigo-50 transition text-left"
                      >
                        <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                        <ChevronDown
                          size={20}
                          className={`flex-shrink-0 text-indigo-600 transition-transform ${
                            expandedFaq === index ? 'transform rotate-180' : ''
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-6 bg-indigo-50 border-t border-gray-200">
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
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-indigo-50 to-blue-50 p-8 rounded-xl border border-indigo-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                      required
                    />
                  </div>
                  <textarea
                    placeholder="Share your thoughts, questions, or experiences..."
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent mb-4"
                    rows={4}
                    required
                  ></textarea>
                  <button
                    type="submit"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg"
                  >
                    Post Comment
                  </button>
                </form>

                {/* Comments Display */}
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-300 transition">
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
            <section className="mt-12 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Pursue Your Radiology Career</h3>
              <p className="text-white/90 mb-6 text-lg">Ready to explore radiology specialization? Our experts can guide you through career options and help you plan your path to becoming a radiologist.</p>
              <Link to="/contact-us" className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
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
                    <p className="text-2xl font-bold text-indigo-600">{readingTime} min</p>
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
              <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Radiology is one of the highest-paying medical specialties with exceptional career prospects. The specialty combines clinical importance, technological advancement, and excellent income potential, making it an ideal choice for ambitious physicians.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
