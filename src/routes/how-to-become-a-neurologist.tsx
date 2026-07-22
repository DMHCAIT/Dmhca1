import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ChevronDown, Clock, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/how-to-become-a-neurologist")({
  head: () => ({
    meta: [
      { title: "How to Become a Neurologist - DMHCA" },
      { name: "description", content: "Complete pathway to becoming a neurologist specializing in neurological disorders, brain diseases, and nervous system care." },
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
      question: "What is the total duration to become a neurologist?",
      answer: "The total duration is approximately 12-13 years: 5.5 years MBBS + 1 year internship + 3 years MD in Internal Medicine/Neurology + 3 years DM in Neurology."
    },
    {
      question: "Can I do MD directly in Neurology?",
      answer: "In India, most states offer MD in Internal Medicine, after which you can pursue DM in Neurology. Some institutions may offer MD in Neurology directly, but this is less common."
    },
    {
      question: "What conditions do neurologists treat?",
      answer: "Stroke, epilepsy, Parkinson's disease, Alzheimer's, migraine, multiple sclerosis, motor neuron disease, sleep disorders, and various brain and spinal cord conditions."
    },
    {
      question: "What is the competition level for neurology specialization?",
      answer: "Neurology is a moderately competitive specialty with approximately 200-250 DM seats across India. Mid-range NEET-PG score (50th-65th percentile) is usually required."
    },
    {
      question: "What skills are important for neurologists?",
      answer: "Strong clinical examination skills, excellent patient communication, understanding of complex neurological conditions, proficiency with imaging interpretation, research aptitude, and empathy."
    },
    {
      question: "What are the earning prospects?",
      answer: "Government neurologist: ₹10-15 lakhs/year. Hospital consultant: ₹20-35 lakhs/year. Private practice: ₹30-60+ lakhs/year depending on location and patient base."
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900">
      <section className="site-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container-home max-w-5xl relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition">
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">How to Become a Neurologist</h1>
          <p className="text-white/90 text-xl mb-6 max-w-2xl">Expert guide to specializing in neurology and neurological disorders in India</p>
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
            <img 
              src="/blog-images/How-to-Become-a-Neurologist.webp"
              alt="How to Become a Neurologist"
              className="w-full h-auto object-cover"
            />
          </div>
          <p className="text-center text-gray-600 text-sm mt-4">Expert guide to becoming a neurologist specializing in neurological care</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="bg-blue-50 rounded-xl p-6 mb-12 border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <BookOpen size={20} className="text-blue-600" />
                Quick Navigation
              </h3>
              <ul className="space-y-2">
                <li><a href="#step-1" className="text-blue-600 hover:text-blue-700 text-sm">Step 1: Complete MBBS</a></li>
                <li><a href="#step-2" className="text-blue-600 hover:text-blue-700 text-sm">Step 2: Complete Internship</a></li>
                <li><a href="#step-3" className="text-blue-600 hover:text-blue-700 text-sm">Step 3: Prepare NEET-PG</a></li>
                <li><a href="#step-4" className="text-blue-600 hover:text-blue-700 text-sm">Step 4: MD in Internal Medicine</a></li>
                <li><a href="#step-5" className="text-blue-600 hover:text-blue-700 text-sm">Step 5: Prepare DM Entrance</a></li>
                <li><a href="#step-6" className="text-blue-600 hover:text-blue-700 text-sm">Step 6: Complete DM Neurology</a></li>
                <li><a href="#step-7" className="text-blue-600 hover:text-blue-700 text-sm">Step 7: Start Practice</a></li>
              </ul>
            </div>

            <article className="space-y-8">
              <section>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Complete Pathway to Becoming a Neurologist</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Neurology is one of the most fascinating medical specialties, dealing with complex nervous system disorders. This comprehensive guide outlines the 12-13 year pathway to becoming a neurologist in India with expertise in diagnosing and treating brain, spinal cord, and peripheral nerve diseases.
                </p>
              </section>

              {[1, 2, 3, 4, 5, 6, 7].map((step) => {
                const stepData = [
                  { title: "Complete MBBS (5.5 Years)", items: ["Score well in 10+2 science and clear NEET entrance exam", "Study 5.5 years of comprehensive medical curriculum", "Focus on anatomy, physiology, and general medicine subjects", "Build foundation for neurological understanding"] },
                  { title: "Complete Internship (1 Year)", items: ["Mandatory 1-year rotatory internship in various departments", "Focus on Internal Medicine rotation for neurology foundation", "Gain clinical exposure and practical medical skills", "Obtain Medical License (MCI registration)"] },
                  { title: "Prepare & Clear NEET-PG Exam", items: ["Begin preparation 6-12 months before NEET-PG", "Study internal medicine, general medicine, and neurology basics", "Secure score above 50th percentile for MD admission", "Use high-quality resources and mock tests for preparation"] },
                  { title: "Complete MD in Internal Medicine (3 Years)", items: ["3-year MD program with clinical and research components", "Train in internal medicine at recognized medical colleges", "Write thesis on clinical neurology research topic", "Gain knowledge of common neurological presentations"] },
                  { title: "Prepare for DM Entrance Exam", items: ["Study advanced neurology, neurophysiology, and neuroradiology", "Competitive exam with 200-250 seats nationally", "Secure above 55th percentile for better college selection", "Prepare 6-9 months intensively while completing MD"] },
                  { title: "Complete DM in Neurology (3 Years)", items: ["3-year DM specialization in clinical neurology", "Training in stroke management, epilepsy, and movement disorders", "Advanced training in neurophysiology and neuroradiology", "Complete research thesis with publication requirements"] },
                  { title: "Start Your Neurology Practice", items: ["Join government medical college or hospital as neurologist", "Work as consultant in private hospital neurology department", "Establish independent neurology practice or diagnostic center", "Engage in patient care, research, and medical education"] }
                ];
                const { title, items } = stepData[step - 1];
                return (
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
                );
              })}

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Duration Breakdown</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">MBBS & Internship</p>
                    <p className="text-3xl font-bold text-blue-600">6.5 Years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">MD in Medicine</p>
                    <p className="text-3xl font-bold text-purple-600">3 Years</p>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-gray-600 text-sm font-semibold">DM Neurology</p>
                    <p className="text-3xl font-bold text-blue-600">3 Years</p>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded-lg border-l-4 border-blue-600">
                  <p className="text-2xl font-bold text-gray-900">Total: 12-13 Years</p>
                </div>
              </div>

              <section className="bg-white rounded-xl p-8 border border-green-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Development Tips</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Develop excellent neurological examination skills", "Stay updated with latest stroke and epilepsy management", "Build expertise in neurophysiology interpretation", "Engage in clinical research and publications", "Consider neuroradiology skills for imaging interpretation", "Network with senior neurologists for mentorship"].map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle2 size={16} className="text-green-600" />
                      </div>
                      <p className="text-gray-700">{tip}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>

            <section className="mt-12">
              <div className="border-t-2 border-gray-200 pt-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-8">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-slate-500 transition">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 hover:bg-blue-50 transition text-left"
                      >
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Share Your Thoughts</h2>
                <form onSubmit={handleCommentSubmit} className="mb-10 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-6">Leave a Comment</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent" required />
                    <input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent" required />
                  </div>
                  <textarea placeholder="Share your thoughts, questions, or experiences..." value={formData.comment} onChange={(e) => setFormData({...formData, comment: e.target.value})} className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-100 dark:placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-transparent mb-4" rows={4} required></textarea>
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition shadow-md hover:shadow-lg">Post Comment</button>
                </form>
                {comments.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800">Comments ({comments.length})</h3>
                    {comments.map((comment, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition">
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

            <section className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Pursuing Neurology Career?</h3>
              <p className="text-white/90 mb-6 text-lg">Get personalized guidance on specialization, preparation strategy, and building a successful neurology practice.</p>
              <Link to="/contact-us" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition">Contact Our Experts</Link>
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
                    <p className="text-lg font-semibold text-gray-800">Specialization Path</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 text-sm">Total Duration</p>
                    <p className="text-lg font-semibold text-gray-800">12-13 Years</p>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h4 className="font-semibold text-gray-900 mb-4">💡 Pro Tip</h4>
                <p className="text-sm text-gray-700">Develop strong clinical neurological examination skills early in your MD training. This is crucial for DM entrance exam and future practice.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
