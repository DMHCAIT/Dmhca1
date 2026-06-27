import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/how-to-become-a-pediatrician")({
  head: () => ({
    meta: [
      { title: "How to Become a Pediatrician - DMHCA" },
      { name: "description", content: "Complete guide to becoming a pediatrician specializing in child and adolescent healthcare in India." },
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
    { question: "What is the total duration to become a pediatrician?", answer: "Approximately 12-13 years: 5.5 years MBBS + 1 year internship + 3 years MD in Pediatrics + 3 years fellowship or DCH specialization." },
    { question: "Is DCH same as MD Pediatrics?", answer: "No. MD Pediatrics is a research-oriented 3-year degree. DCH (Diploma in Child Health) is 3 years clinical-focused. Both are valid credentials." },
    { question: "What is the demand for pediatricians?", answer: "Very high demand for pediatricians in India with excellent growth prospects in private hospitals, clinics, and healthcare centers." },
    { question: "Can pediatricians work internationally?", answer: "Yes, pediatricians have excellent global opportunities in USA, UK, Australia, and Middle East with recognized Indian medical credentials." },
    { question: "What are the earning prospects?", answer: "Government: ₹10-15 lakhs/year. Private consultant: ₹20-35 lakhs/year. Private practice: ₹30-60+ lakhs/year." },
    { question: "What subspecialties exist in pediatrics?", answer: "Pediatric cardiology, oncology, neurology, gastroenterology, nephrology, and neonatology offer specialized career paths." }
  ];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.comment) {
      setComments([...comments, { name: formData.name, email: formData.email, text: formData.comment, date: new Date().toLocaleDateString() }]);
      setFormData({ name: '', email: '', comment: '' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">How to Become a Pediatrician</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Complete guide to specializing in child and adolescent healthcare in India</p>
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
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="/blog-images/How-to-Become-a-Pediatrician.webp" alt="How to Become a Pediatrician" className="w-full h-auto object-cover" />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Expert guide to specializing in pediatric medicine</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-blue-50 rounded-xl p-6 mb-12 border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-600" />
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                {["Step 1: Complete MBBS", "Step 2: Complete Internship", "Step 3: Prepare NEET-PG", "Step 4: MD in Pediatrics", "Step 5: Prepare for DCH/Specialization", "Step 6: Complete Specialization", "Step 7: Start Practice"].map((item, idx) => (
                  <li key={idx}><a href={`#step-${idx + 1}`} className="text-blue-600 hover:text-blue-700 text-sm">{item}</a></li>
                ))}
              </ul>
            </div>

            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Pathway to Becoming a Pediatrician</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">Pediatrics is a rewarding medical specialty focused on caring for children from birth through adolescence. This guide outlines the 12-13 year pathway to becoming a qualified pediatrician in India.</p>
              </section>

              {[
                { step: 1, title: "Complete MBBS (5.5 Years)", items: ["Score well in 10+2 and clear NEET exam", "Complete 5.5 years of medical curriculum", "Focus on pediatric sciences foundation", "Build excellent patient communication skills"] },
                { step: 2, title: "Complete Internship (1 Year)", items: ["Mandatory 1-year rotatory internship", "Gain pediatric exposure in children's ward", "Obtain Medical License (MCI registration)", "Develop clinical skills in child care"] },
                { step: 3, title: "Prepare & Clear NEET-PG", items: ["Intensive 6-12 month preparation", "Study pediatrics, general medicine, community medicine", "Secure 50th+ percentile for MD admission", "Use quality resources and mock tests"] },
                { step: 4, title: "Complete MD in Pediatrics (3 Years)", items: ["3-year MD program with clinical focus", "Train in pediatric departments", "Research thesis on pediatric topic", "Gain expertise in child diseases and management"] },
                { step: 5, title: "Prepare for DCH/Specialization", items: ["Study advanced pediatrics, neonatology", "Consider DCH for clinical-focused track", "Competitive exam with significant seats", "Build clinical experience during MD"] },
                { step: 6, title: "Complete DCH/Specialization", items: ["3-year specialized training in child health", "Advanced pediatric clinical skills", "Research and publication requirements", "Networking with pediatric community"] },
                { step: 7, title: "Start Your Pediatric Practice", items: ["Join government hospital as pediatrician", "Work as consultant in private hospital", "Establish independent pediatric practice", "Engage in child health advocacy"] }
              ].map(({ step, title, items }) => (
                <div key={step} id={`step-${step}`} className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold text-lg">{step}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                      <ul className="space-y-2 text-gray-700">
                        {items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 size={20} className="text-green-600 flex-shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Duration Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">MBBS & Internship</p>
                    <p className="text-3xl font-bold text-blue-600">6.5 Years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">MD Pediatrics</p>
                    <p className="text-3xl font-bold text-purple-600">3 Years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">DCH/Specialization</p>
                    <p className="text-3xl font-bold text-blue-600">3 Years</p>
                  </div>
                </div>
              </div>

              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Develop empathy and patience for child patients", "Stay updated with immunization guidelines", "Build excellent parent communication skills", "Focus on preventive pediatric medicine", "Engage in child health advocacy", "Consider rural pediatrics opportunities"].map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <section className="mt-12">
              <div className="border-t-2 border-gray-200 pt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">FAQs</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-blue-300 transition">
                      <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 hover:bg-blue-50 transition text-left">
                        <h3 className="font-semibold text-gray-800 pr-4 text-lg">{faq.question}</h3>
                        <ChevronDown size={20} className={`flex-shrink-0 text-blue-600 transition-transform ${expandedFaq === index ? 'transform rotate-180' : ''}`} />
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

            <section className="mt-12">
              <div className="border-t-2 border-gray-200 pt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Comments</h2>
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                    <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                  </div>
                  <textarea placeholder="Share your thoughts..." value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4" rows={4} required></textarea>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition">Post Comment</button>
                </form>
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold text-gray-900">{comment.name}</p>
                            <p className="text-sm text-gray-600">{comment.email}</p>
                          </div>
                          <p className="text-sm text-gray-500">{comment.date}</p>
                        </div>
                        <p className="text-gray-700">{comment.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>

            <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready for Pediatrics?</h3>
              <p className="text-white/90 mb-6 text-lg">Get guidance on specialization and building a successful pediatric career.</p>
              <Link to="/contact-us" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Contact Us</Link>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 mb-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-600 text-sm">Reading Time</p>
                    <p className="text-2xl font-bold text-blue-600">{readingTime} min</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">Total Duration</p>
                    <p className="text-lg font-semibold text-gray-800">12-13 Years</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Build strong pediatric clinical skills during MD. This helps in competitive DCH entrance exam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
