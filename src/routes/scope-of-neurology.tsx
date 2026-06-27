import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/scope-of-neurology")({
  head: () => ({
    meta: [
      { title: "Scope of Neurology - DMHCA" },
      { name: "description", content: "Comprehensive guide to career scope and opportunities in neurology specialty." },
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
    { question: "What is the scope of neurology?", answer: "Neurology encompasses diagnosis and treatment of brain, spinal cord, and peripheral nerve diseases. Large patient base with chronic conditions requiring long-term care." },
    { question: "What is the global demand for neurologists?", answer: "High demand globally, especially in developed countries. Neurological disorders are increasing due to aging populations and lifestyle changes." },
    { question: "What are earning prospects in neurology?", answer: "Government: ₹10-15 lakhs/year. Private consultant: ₹20-40 lakhs/year. Private practice: ₹30-60+ lakhs/year." },
    { question: "Can neurologists subspecialize?", answer: "Yes, subspecialties include neuroradiology, neurophysiology, neuro-oncology, movement disorders, and stroke management." },
    { question: "Is there good work-life balance?", answer: "Yes, neurology generally offers better balance than surgical specialties, though emergency stroke cases may require availability." },
    { question: "What skills are essential?", answer: "Strong clinical examination skills, imaging interpretation, excellent communication, patience with chronic disease management, and research aptitude." }
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
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">Scope of Neurology</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Career opportunities and scope in neurological medical practice</p>
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2"><Clock size={18} /><span>{readingTime} min read</span></div>
            <div className="flex items-center gap-2"><BookOpen size={18} /><span>Medical Career Guide</span></div>
            <div className="text-sm text-white/70">Updated: June 2025</div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-12">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src="/blog-images/Scope-of-Neurology.webp" alt="Scope of Neurology" className="w-full h-auto object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-blue-50 rounded-xl p-6 mb-12 border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-600" />
                Career Scope in Neurology
              </h3>
              <ul className="space-y-2 text-sm text-blue-600">
                <li><a href="#item-1">Diagnostic Opportunities</a></li>
                <li><a href="#item-2">Patient Management</a></li>
                <li><a href="#item-3">Research & Academic</a></li>
                <li><a href="#item-4">Subspecialties</a></li>
                <li><a href="#item-5">International Practice</a></li>
                <li><a href="#item-6">Earning Potential</a></li>
                <li><a href="#item-7">Work-Life Balance</a></li>
              </ul>
            </div>

            <article className="space-y-8">
              {[
                { id: "item-1", num: 1, title: "Diagnostic Opportunities", items: ["Advanced imaging interpretation (CT, MRI, EEG)", "Clinical neurological examination expertise", "Neurosurgical consultation and planning", "Post-operative neurological management"] },
                { id: "item-2", num: 2, title: "Patient Management", items: ["Chronic disease management", "Outpatient consultations", "Hospital inpatient care", "Emergency stroke and seizure management"] },
                { id: "item-3", num: 3, title: "Research & Academic", items: ["Clinical trials participation", "Neurological research publications", "Medical education and teaching", "Academic career advancement"] },
                { id: "item-4", num: 4, title: "Subspecialties", items: ["Neuroradiology and imaging", "Neurophysiology and EEG", "Movement disorders", "Neuro-oncology"] },
                { id: "item-5", num: 5, title: "International Practice", items: ["High demand in developed countries", "Excellent global recognition", "Multiple immigration pathways", "International fellowship opportunities"] },
                { id: "item-6", num: 6, title: "Earning Potential", items: ["Government positions: ₹10-15 lakhs/year", "Hospital consultants: ₹20-40 lakhs/year", "Private practice: ₹30-60+ lakhs/year", "Research and academic positions with high income"] },
                { id: "item-7", num: 7, title: "Work-Life Balance", items: ["Generally better than surgical specialties", "Scheduled outpatient hours", "Limited on-call duties in diagnostic settings", "Remote consultation opportunities"] }
              ].map(({ id, num, title, items }) => (
                <div key={id} id={id} className="bg-white rounded-xl p-8 border-l-4 border-blue-600 shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-blue-600 font-bold">{num}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                      <ul className="space-y-2">
                        {items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Scope Summary</h3>
                <p className="text-gray-700 mb-4">Neurology offers exceptional career scope with high patient demand, excellent earning potential, and opportunities for subspecialization and research.</p>
              </div>

              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Key Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Build strong neurological examination skills", "Stay current with neurological advances", "Develop research and publication record", "Consider subspecialization", "Build patient relationships", "Network with neurologists"].map((tip, idx) => (
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
                    <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                      <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full flex items-center justify-between p-6 hover:bg-blue-50 text-left">
                        <h3 className="font-semibold text-gray-800 pr-4">{faq.question}</h3>
                        <ChevronDown size={20} className={`text-blue-600 flex-shrink-0 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 py-6 bg-blue-50 border-t border-gray-200">
                          <p className="text-gray-700">{faq.answer}</p>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                    <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" required />
                  </div>
                  <textarea placeholder="Share your thoughts..." value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-4" rows={4} required></textarea>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg">Post Comment</button>
                </form>
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                        <div className="flex justify-between mb-2">
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Interested in Neurology Career?</h3>
              <p className="text-white/90 mb-6 text-lg">Get expert guidance on specialization and career planning.</p>
              <Link to="/contact-us" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100">Contact Us</Link>
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
                    <p className="text-gray-600 text-sm">Category</p>
                    <p className="text-lg font-semibold text-gray-800">Career Scope</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Start developing neurological skills early in your training to excel in this specialty.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
