import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/scope-of-obstetrics-and-gynecology")({
  head: () => ({
    meta: [
      { title: "Career Scope in Obstetrics and Gynecology - DMHCA" },
      { name: "description", content: "Explore the career scope and opportunities in Obstetrics and Gynecology medical specialty in India." },
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
      question: "What is the scope of Obstetrics and Gynecology in India?",
      answer: "Obstetrics and Gynecology (OB-GYN) offers extensive career opportunities in India with growing private practice potential, hospital positions, teaching roles, and specialized areas like reproductive medicine. The demand for gynecologists is increasing with improving healthcare access and women's health awareness."
    },
    {
      question: "What are the employment opportunities for gynecologists?",
      answer: "Opportunities include working in government hospitals, private nursing homes, corporate hospitals, establish private clinics, academic positions in medical colleges, reproductive medicine centers, NGOs focusing on women's health, and international opportunities in developed countries."
    },
    {
      question: "Is there scope for specialization within OB-GYN?",
      answer: "Yes, there are multiple sub-specializations like Maternal-Fetal Medicine, Reproductive Medicine and Infertility, Uro-gynecology, Gynecological Oncology, and Minimally Invasive Surgery. These specializations enhance career prospects and earning potential significantly."
    },
    {
      question: "What is the earning potential for gynecologists in India?",
      answer: "Earning potential varies based on practice location and type. Government hospital doctors earn through salary and practice allowances. Private practitioners earn significantly more through consultation fees, procedures, and private practice, with top specialists earning 15-30 lakhs annually."
    },
    {
      question: "Are there international career prospects in OB-GYN?",
      answer: "Yes, Indian gynecologists can pursue career abroad in countries like USA, Canada, Australia, and Middle East. They need to qualify relevant licensing exams (USMLE for USA, PLAB for UK) and complete local medical degrees or equivalency training."
    },
    {
      question: "What skills are essential for success in OB-GYN?",
      answer: "Essential skills include strong clinical examination abilities, excellent communication skills, empathy towards patients, proficiency in surgical and procedural skills, decision-making ability during emergencies, leadership qualities, and continuous learning mindset in this ever-evolving field."
    }
  ];

  const titles = [
    "Clinical Practice Opportunities",
    "Hospital and Academic Positions",
    "Private Practice and Entrepreneurship",
    "Specialization and Sub-specialty Options",
    "Research and Academic Excellence",
    "Global Career Opportunities",
    "Emerging Areas in Women's Health"
  ];

  const content = [
    [
      "Work in government and private hospitals as a consultant obstetrician-gynecologist",
      "Manage obstetric cases, conduct deliveries, and provide antenatal/postnatal care",
      "Handle gynecological emergencies, emergency hysterectomies, and ectopic pregnancy cases",
      "Provide family planning services, counseling, and community outreach programs"
    ],
    [
      "Secure positions in medical colleges as faculty members teaching undergraduate and postgraduate students",
      "Lead hospital departments and manage clinical teams in tertiary care centers",
      "Conduct ward rounds, seminars, and clinical case discussions for medical education",
      "Engage in academic activities including examination, curriculum development, and quality assurance"
    ],
    [
      "Establish independent nursing homes and diagnostic centers specializing in women's health",
      "Build profitable practice through consultation services, surgical procedures, and imaging",
      "Offer specialized services like infertility treatment, ultrasound imaging, and cosmetic gynecology",
      "Achieve financial independence and flexibility in working hours through private enterprise"
    ],
    [
      "Pursue fellowship in Reproductive Medicine and Infertility for IVF center practice",
      "Specialize in Uro-gynecology treating pelvic floor disorders and urinary incontinence",
      "Focus on Maternal-Fetal Medicine managing high-risk pregnancies and fetal complications",
      "Develop expertise in Gynecological Oncology for cancer management and specialized surgical care"
    ],
    [
      "Conduct research on women's health topics and contribute to medical literature",
      "Participate in clinical trials and contribute to evidence-based medical practice",
      "Publish research papers in national and international medical journals",
      "Build reputation as an expert in specific areas and gain recognition in academic community"
    ],
    [
      "Practice in developed countries like USA, Canada, and Australia through licensing and equivalency exams",
      "Work in Middle Eastern countries offering lucrative salaries and modern healthcare facilities",
      "Pursue fellowship training in other countries to gain international exposure and skills",
      "Build global career network and access to international conferences and learning opportunities"
    ],
    [
      "Focus on maternal health and reducing maternal mortality in underserved areas",
      "Practice minimally invasive surgery including laparoscopy and hysteroscopy procedures",
      "Work in reproductive health awareness and family planning education programs",
      "Engage in telemedicine and digital health initiatives for remote women's health consultations"
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
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-rose-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Scope of Obstetrics and Gynecology</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Career opportunities and specialization in OB-GYN medical practice</p>
          
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
              src="/blog-images/Scope-of-Obstetrics-and-Gynecology.webp"
              alt="Scope of Obstetrics and Gynecology"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Comprehensive overview of career scope and opportunities in Obstetrics and Gynecology</p>
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
                <li><a href="#scope-1" className="text-pink-600 hover:text-pink-700 text-sm">Clinical Practice Opportunities</a></li>
                <li><a href="#scope-2" className="text-pink-600 hover:text-pink-700 text-sm">Hospital and Academic Positions</a></li>
                <li><a href="#scope-3" className="text-pink-600 hover:text-pink-700 text-sm">Private Practice and Entrepreneurship</a></li>
                <li><a href="#scope-4" className="text-pink-600 hover:text-pink-700 text-sm">Specialization and Sub-specialty Options</a></li>
                <li><a href="#scope-5" className="text-pink-600 hover:text-pink-700 text-sm">Research and Academic Excellence</a></li>
                <li><a href="#scope-6" className="text-pink-600 hover:text-pink-700 text-sm">Global Career Opportunities</a></li>
                <li><a href="#scope-7" className="text-pink-600 hover:text-pink-700 text-sm">Emerging Areas in Women's Health</a></li>
              </ul>
            </div>

            {/* Main Article Content */}
            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Career Scope in Obstetrics and Gynecology</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Obstetrics and Gynecology is a dynamic and rewarding medical specialty with expanding career opportunities in India and globally. This specialty focuses on women's reproductive health, pregnancy management, and surgical interventions. With increasing awareness of women's health and growing healthcare infrastructure, OB-GYN professionals have diverse career pathways ranging from clinical practice to academic excellence and entrepreneurship.
                </p>
              </section>

              {/* Scope Sections */}
              {titles.map((title, index) => (
                <div key={index} id={`scope-${index + 1}`} className="bg-white rounded-xl p-8 border-l-4 border-pink-600 shadow-md hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-pink-600 font-bold text-lg">{index + 1}</span>
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
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-8 border border-pink-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Timeline</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">12 to MBBS</p>
                    <p className="text-2xl font-bold text-pink-600">5.5 years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">MBBS to MD OB-GYN</p>
                    <p className="text-2xl font-bold text-pink-600">3-4 years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm">Total Duration</p>
                    <p className="text-2xl font-bold text-pink-600">8.5-9.5 years</p>
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
                    <p className="text-gray-700">Develop strong clinical skills and surgical proficiency</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Build excellent patient communication and counseling skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Gain exposure to diverse clinical cases during MBBS</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Stay updated with latest obstetric and gynecologic practices</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Develop interest in research and evidence-based practice</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 size={16} className="text-green-600" />
                    </div>
                    <p className="text-gray-700">Network with established gynecologists and mentors</p>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Explore OB-GYN Career Path</h3>
              <p className="text-white/90 mb-6 text-lg">Need personalized guidance on pursuing Obstetrics and Gynecology? Our experts can help you explore specialization options and career planning.</p>
              <Link to="/contact-us" className="inline-block bg-white text-pink-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">
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
                    <p className="text-2xl font-bold text-pink-600">{readingTime} min</p>
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
              <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">OB-GYN offers excellent work-life balance opportunities, especially in private practice. Building a strong reputation in maternal health can lead to significant career growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
