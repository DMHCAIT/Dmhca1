import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

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

  return (
    <div className="bg-slate-50">
      <div className="container-home py-16">
        <div className="mx-auto max-w-6xl">

          <header className="mb-8">
            <h1 className="font-display text-4xl md:text-5xl text-navy-deep">Contact Us</h1>
            <p className="mt-2 text-lg text-muted-foreground">Get in touch — we’re here to help with any questions or support you need.</p>
          </header>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <section className="bg-white p-6 rounded-2xl shadow-xl border border-white/10 relative overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="absolute left-0 top-6 bottom-6 w-1 bg-gold/80 rounded-r-md" />
                <h2 className="font-display text-2xl text-navy-deep ml-6">Our Addresses</h2>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-lg ml-6">Delhi</h3>
                    <p className="text-sm mt-2 leading-relaxed ml-6">Buliding No.-581/2, First Floor, Khatana Farm, Mandi Rd, Sultanpur, New Delhi-30</p>
                    <p className="mt-3 font-medium ml-6">+91 9899711530</p>
                    <p className="text-sm text-muted-foreground ml-6">info@dmhca.in</p>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg ml-6">Hyderabad</h3>
                    <p className="text-sm mt-2 leading-relaxed ml-6">DMHCA, 8-2-351/W//B 1st Floor, Green Valley, Navodaya society, Banjara Hills Road no-3, Behind Times of India, Hyderabad, Telangana 500034</p>
                    <p className="mt-3 font-medium ml-6">+91 9899711530</p>
                    <p className="text-sm text-muted-foreground ml-6">info@dmhca.in</p>
                  </div>
                </div>
              </section>

              <section className="bg-white p-6 rounded-2xl shadow-xl border border-white/10">
                <h2 className="font-display text-2xl text-navy-deep">For Academic Support</h2>
                <p className="mt-2 text-sm text-muted-foreground">Contact our academic services team for guidance, resources, and personalized assistance.</p>
                <div className="mt-4">
                  <p className="font-medium">M. No. – 9289980479</p>
                  <p className="text-sm text-muted-foreground">Email – support@dmhca.in</p>
                </div>
              </section>

              <section className="bg-white p-6 rounded-2xl shadow-xl border border-white/10">
                <h2 className="font-display text-2xl text-navy-deep">Send a Message</h2>
                <p className="mt-2 text-sm text-muted-foreground">Send us a message and we'll get back to you shortly.</p>
                <form className="mt-4 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-navy-deep">Name</label>
                    <input className="mt-1 block w-full rounded-xl border px-4 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-deep">Email</label>
                    <input type="email" className="mt-1 block w-full rounded-xl border px-4 py-3 shadow-inner focus:outline-none focus:ring-2 focus:ring-gold" placeholder="you@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy-deep">Message</label>
                    <textarea className="mt-1 block w-full rounded-xl border px-4 py-3 h-40 shadow-inner focus:outline-none focus:ring-2 focus:ring-gold" placeholder="Write your message"></textarea>
                  </div>
                  <div>
                    <button type="button" className="inline-flex items-center px-6 py-3 bg-gold text-navy-deep rounded-xl shadow-lg font-semibold">Send message</button>
                  </div>
                </form>
              </section>
            </div>

            <aside className="space-y-6">
              <section className="bg-gradient-to-r from-navy-deep to-slate-800 text-primary-foreground p-6 rounded-2xl shadow-lg">
                <h3 className="font-semibold text-lg">Quick Contact</h3>
                <p className="mt-3 text-sm">Reach us via phone or email for quick assistance.</p>
                <div className="mt-4 text-sm space-y-2">
                  <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-gold rounded-full" /> <strong>Phone:</strong> +91 9899711530</div>
                  <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-gold rounded-full" /> <strong>Email:</strong> info@dmhca.in</div>
                  <div className="flex items-center gap-2"><span className="inline-block w-3 h-3 bg-gold rounded-full" /> <strong>Address (primary):</strong> Delhi</div>
                </div>
              </section>

              <section className="border rounded-lg p-4">
                <h4 className="font-medium">Frequently Asked Questions</h4>
                <div className="mt-3 text-sm">
                  {faqs.map((f, i) => (
                    <div key={i} className="border-b last:border-b-0">
                      <button onClick={() => toggleFaq(i)} className="w-full text-left py-3 flex justify-between items-center">
                        <span className="font-medium">{f.q}</span>
                        <span className="text-muted-foreground">{openIndex === i ? '−' : '+'}</span>
                      </button>
                      {openIndex === i && (
                        <div className="pb-3 text-sm text-muted-foreground">{f.a}</div>
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
