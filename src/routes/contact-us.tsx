import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabaseClient } from "@/lib/supabase";

function Contact() {
  // Remove any trailing hash from URL (e.g., /contact-us/#) on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const url = window.location.href.replace(/#.*$/, '');
      window.history.replaceState({}, '', url);
    }
  }, []);

  const faqs = [
    {
      q: 'How can I contact your support team?',
      a: 'You can reach our support team via email at info@dmhca.in or by phone at +91 70420 11441. We are available Monday to Saturday, from 9:30 a.m. to 6:30 p.m.'
    },
    {
      q: 'What is the response time for inquiries?',
      a: 'We typically respond to inquiries within the same day between 9:30 a.m. to 6:30 p.m. During peak periods, it may take longer, but we strive to assist you as quickly as possible.'
    },
    {
      q: 'Do you offer live chat support?',
      a: 'Yes, we provide live chat support on WhatsApp during our operating hours, i.e., 9:30 a.m. to 6:30 p.m. You can access live chat by clicking the icon on the bottom right of our website.'
    },
    {
      q: 'What should I do if I have technical issues with a course?',
      a: 'If you experience any technical problems with our courses, please contact us at info@delhimedical.net or call +91 9899711530. Providing detailed information about the issue will help us resolve it faster.'
    },
    {
      q: 'Do you offer customer support outside regular business hours?',
      a: 'Our support team is available during business hours at 9:30 a.m. to 6:30 p.m. For urgent issues outside these hours, please email us at info@delhimedical.net, and we will get back to you as soon as possible.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (i: number) => setOpenIndex(openIndex === i ? null : i);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Validate form
      if (!formData.name.trim()) {
        throw new Error('Name is required');
      }
      if (!formData.email.trim()) {
        throw new Error('Email is required');
      }
      if (!formData.phone.trim()) {
        throw new Error('Mobile number is required');
      }
      if (!formData.message.trim()) {
        throw new Error('Message is required');
      }

      // Save to database
      const { error: dbError } = await supabaseClient
        .from('contact_messages')
        .insert([
          {
            name: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            message: formData.message.trim(),
            status: 'new'
          }
        ]);

      if (dbError) throw dbError;

      // Success
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err: any) {
      setError(err.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="site-hero py-12 lg:py-16">
        <div className="container-home">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-3">Contact Us</h1>
            <p className="text-base md:text-lg text-blue-100">Get in touch — we're here to help with any questions or support you need.</p>
          </div>
        </div>
      </section>

      <div className="container-home py-12 lg:py-16">
        <div className="mx-auto max-w-6xl">

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl text-navy-deep">Our Addresses</h2>
                </div>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <h3 className="font-bold text-navy-deep text-lg">Delhi</h3>
                    <p className="text-sm mt-3 text-slate-700 leading-relaxed">Buliding No.-581/2, First Floor, Khatana Farm, Mandi Rd, Sultanpur, New Delhi-30</p>
                    <div className="mt-3 space-y-1">
                      <p className="text-sm font-semibold text-navy-deep">+91 9899711530</p>
                      <p className="text-sm text-slate-600">info@dmhca.in</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
                    <h3 className="font-bold text-navy-deep text-lg">Hyderabad</h3>
                    <p className="text-sm mt-3 text-slate-700 leading-relaxed">DMHCA, 8-2-351/W//B 1st Floor, Green Valley, Navodaya society, Banjara Hills Road no-3, Behind Times of India, Hyderabad, Telangana 500034</p>
                    <div className="mt-3 space-y-1">
                      <p className="text-sm font-semibold text-navy-deep">+91 9899711530</p>
                      <p className="text-sm text-slate-600">info@dmhca.in</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
                <div className="flex items-start gap-4 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
                    </svg>
                  </div>
                  <h2 className="font-display text-2xl text-navy-deep">For Academic Support</h2>
                </div>
                <p className="mt-3 text-sm text-slate-600">Contact our academic services team for guidance, resources, and personalized assistance.</p>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="font-semibold text-navy-deep">M. No. – 9289980479</p>
                  <p className="text-sm text-slate-600 mt-1">Email – support@dmhca.in</p>
                </div>
              </section>

              <section className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-slate-100">
                <h2 className="font-display text-2xl text-navy-deep">Send a Message</h2>
                <p className="mt-2 text-sm text-slate-600">Send us a message and we'll get back to you shortly.</p>
                <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                  {submitted && (
                    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start gap-3">
                      <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <p className="text-emerald-800 font-medium">Thank you! Your message has been sent successfully. We'll get back to you shortly.</p>
                    </div>
                  )}
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                      </svg>
                      <p className="text-red-800 font-medium">{error}</p>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm font-semibold text-navy-deep mb-2">Name *</label>
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-900 placeholder-slate-400" 
                      placeholder="Your name" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-deep mb-2">Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-900 placeholder-slate-400" 
                      placeholder="you@example.com" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-deep mb-2">Mobile No *</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-900 placeholder-slate-400" 
                      placeholder="+91 XXXXX XXXXX" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy-deep mb-2">Message *</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-900 placeholder-slate-400 resize-none h-36" 
                      placeholder="Write your message..."
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-br from-navy-deep via-navy-deep/95 to-navy-deep/90 hover:from-navy-deep/90 hover:via-navy-deep/85 hover:to-navy-deep/80 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg shadow-lg font-semibold transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.9429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.11270045 C3.34915502,0.9 2.40734225,0.9 1.77946707,1.38775721 C0.994623095,2.03399899 0.837654308,3.0765834 1.15159189,3.86207722 L3.03521743,10.3030703 C3.03521743,10.4601677 3.19218622,10.6172651 3.50612381,10.6172651 L16.6915026,11.4027521 C16.6915026,11.4027521 17.1624089,11.4027521 17.1624089,11.9740536 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                    </svg>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="bg-gradient-to-br from-navy-deep to-slate-800 text-white p-6 md:p-8 rounded-2xl shadow-lg">
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                  </svg>
                  <h3 className="font-bold text-lg">Quick Contact</h3>
                </div>
                <p className="text-sm text-blue-100 mb-4">Reach us via phone or email for quick assistance.</p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-700">
                    <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-blue-100">+91 9899711530</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pb-3 border-b border-slate-700">
                    <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-blue-100">info@dmhca.in</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full" />
                    <div>
                      <div className="font-semibold">Address (Primary)</div>
                      <div className="text-blue-100">New Delhi</div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="p-6 md:p-8 border-b border-slate-200">
                  <h4 className="font-bold text-navy-deep text-lg">Frequently Asked Questions</h4>
                </div>
                <div className="divide-y divide-slate-200">
                  {faqs.map((f, i) => (
                    <div key={i}>
                      <button onClick={() => toggleFaq(i)} className="w-full text-left py-4 px-6 flex justify-between items-center hover:bg-slate-50 transition">
                        <span className="font-medium text-slate-900 text-sm">{f.q}</span>
                        <span className="text-slate-400 font-bold text-lg flex-shrink-0">{openIndex === i ? '−' : '+'}</span>
                      </button>
                      {openIndex === i && (
                        <div className="px-6 pb-4 text-sm text-slate-600 bg-slate-50">{f.a}</div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

// Register route so file-based router picks up /contact-us
export const Route = createFileRoute('/contact-us')({ component: Contact })
