import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/refund-returns-policy')({
  component: function RefundPolicy() {
    const handleScroll = (id: string) => (e: React.MouseEvent) => {
      e.preventDefault()
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      try { window.history.replaceState(null, '', `/refund-returns-policy#${id}`) } catch {}
    }

    React.useEffect(() => {
      const ids = ['overview','course-cancel','quality','double-payment','technical','requests','process','non-refundable','dispute','changes','help']
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = entry.target.id
            const link = document.querySelector(`a[href$="#${id}"]`)
            if (link) {
              if (entry.isIntersecting) link.classList.add('font-semibold','text-gold')
              else link.classList.remove('font-semibold','text-gold')
            }
          })
        },
        { root: null, rootMargin: '-40% 0px -40% 0px', threshold: 0 }
      )

      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })

      return () => observer.disconnect()
    }, [])

    return (
      <main className="py-16 bg-gray-50 dark:bg-slate-900 min-h-screen">
        <div className="container-x">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8 flex items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-extrabold">Refund & Returns Policy</h1>
                <p className="mt-2 text-sm text-muted-foreground">Effective Date: <strong>Today</strong></p>
              </div>
              <div className="flex items-center gap-3">
                <a href="/" className="text-sm hover:text-gold">Home</a>
                <button onClick={() => window.print()} className="px-4 py-2 bg-navy-deep text-white rounded-md text-sm">Print</button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <aside className="lg:col-span-1">
                <div className="sticky top-28 space-y-4">
                  <div className="bg-white/90 dark:bg-slate-800/60 p-4 rounded-lg shadow">
                    <h4 className="font-semibold mb-3">On this page</h4>
                    <nav className="flex flex-col text-sm gap-2">
                      <a href="#overview" onClick={handleScroll('overview')} className="hover:text-gold">Overview</a>
                      <a href="#course-cancel" onClick={handleScroll('course-cancel')} className="hover:text-gold">Course Cancellation</a>
                      <a href="#quality" onClick={handleScroll('quality')} className="hover:text-gold">Quality Issues</a>
                      <a href="#double-payment" onClick={handleScroll('double-payment')} className="hover:text-gold">Double Payment</a>
                      <a href="#technical" onClick={handleScroll('technical')} className="hover:text-gold">Technical Errors</a>
                      <a href="#requests" onClick={handleScroll('requests')} className="hover:text-gold">Refund Requests</a>
                      <a href="#process" onClick={handleScroll('process')} className="hover:text-gold">Refund Process</a>
                      <a href="#non-refundable" onClick={handleScroll('non-refundable')} className="hover:text-gold">Non-Refundable Items</a>
                      <a href="#dispute" onClick={handleScroll('dispute')} className="hover:text-gold">Dispute Resolution</a>
                      <a href="#changes" onClick={handleScroll('changes')} className="hover:text-gold">Changes to Policy</a>
                      <a href="#help" onClick={handleScroll('help')} className="hover:text-gold">Need help?</a>
                    </nav>
                  </div>
                </div>
              </aside>

              <article className="lg:col-span-2">
                <div className="space-y-6">
                  <section id="overview" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h2 className="text-2xl font-semibold mb-3">Overview</h2>
                    <p className="text-sm">NDMHC Unit of New Delhi Medical Health Care Pvt Ltd is committed to providing high-quality medical education and training through our website. We understand that circumstances may arise where students or users may request a refund for their purchases. This Refund Policy outlines the terms and conditions under which refunds will be granted.</p>
                  </section>

                  <section id="course-cancel" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h3 className="text-xl font-semibold mb-2">Course Cancellation</h3>
                    <ul className="text-sm list-disc pl-6 space-y-2">
                      <li>Our refund and returns policy lasts 30 days. If 30 days have passed since your purchase, we can’t offer you a full refund or exchange.</li>
                      <li>If the Academy cancels a course for any reason, a full refund will be issued to enrolled students.</li>
                    </ul>
                  </section>

                  <section id="quality" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h3 className="text-xl font-semibold mb-2">Quality Issues</h3>
                    <p className="text-sm">If a student experiences issues with the course content or delivery that significantly affect the learning experience, a refund may be considered upon review by the Academy.</p>
                  </section>

                  <section id="double-payment" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h3 className="text-xl font-semibold mb-2">Double Payment</h3>
                    <p className="text-sm">If a student mistakenly makes duplicate payments for the same course, a refund for the duplicate payment will be issued.</p>
                  </section>

                  <section id="technical" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h3 className="text-xl font-semibold mb-2">Technical Errors</h3>
                    <p className="text-sm">If technical errors on our website prevent a student from accessing the course, and the issue cannot be resolved within a reasonable time, a refund may be considered.</p>
                  </section>

                  <section id="requests" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h3 className="text-xl font-semibold mb-2">Refund Requests</h3>
                    <p className="text-sm">To request a refund, students must submit a written request to our customer support team via email at contact@delhimedical.net. Include the reason for the refund request and any supporting documentation, such as proof of payment or course access issues. Refund requests must be submitted within 1 Week of the issue or course cancellation.</p>
                  </section>

                  <section id="process" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h3 className="text-xl font-semibold mb-2">Refund Process</h3>
                    <p className="text-sm">Once a refund request is received, the Academy will review it within 1 Week. If the request meets the eligibility criteria, a refund will be processed as follows:</p>
                    <ul className="text-sm list-disc pl-6 space-y-2">
                      <li>For payments made by credit card, refunds will be credited to the original payment method.</li>
                      <li>For payments made by other methods, refunds will be processed according to our discretion in consultation with the student.</li>
                    </ul>
                    <p className="text-sm">In such a case refund will be processed and credit the amount to the customer’s bank account within 5 to 7 working days.</p>
                  </section>

                  <section id="non-refundable" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h3 className="text-xl font-semibold mb-2">Non-Refundable Items</h3>
                    <ul className="text-sm list-disc pl-6 space-y-2">
                      <li>Course materials that have been downloaded or accessed.</li>
                      <li>Certificates of completion that have been issued.</li>
                      <li>Course registration fees that are clearly stated as non-refundable at the time of purchase.</li>
                    </ul>
                  </section>

                  <section id="dispute" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h3 className="text-xl font-semibold mb-2">Dispute Resolution</h3>
                    <p className="text-sm">In the event of a dispute regarding a refund request, both the Academy and the student agree to work together in good faith to reach a fair resolution.</p>
                  </section>

                  <section id="changes" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h3 className="text-xl font-semibold mb-2">Changes to the Refund Policy</h3>
                    <p className="text-sm">The Academy reserves the right to update or modify this Refund Policy at any time. Any changes will be communicated to users through our website.</p>
                  </section>

                  <section id="help" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                    <h3 className="text-xl font-semibold mb-2">Need help?</h3>
                    <p className="text-sm">Contact us at contact@delhimedical.net for questions related to refunds and returns.</p>
                  </section>

                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    )
  }

})

export default null
