import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/term-conditions')({
  component: TermConditions,
})

function TermConditions() {
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    try { window.history.replaceState(null, '', `/term-conditions#${id}`) } catch {}
  }

  React.useEffect(() => {
    const ids = ['terms','fees','transfer','documents','authenticity','cancellation']
    const links = ids.map((id) => document.querySelector(`a[href$="#${id}"]`))
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
              <h1 className="text-4xl font-extrabold">Terms &amp; Conditions</h1>
              <p className="mt-2 text-sm text-muted-foreground">We’re on a mission to deliver engaging, curated courses at a reasonable price.</p>
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
                  <h4 className="font-semibold mb-3">Quick links</h4>
                  <nav className="flex flex-col text-sm gap-2">
                    <a href="#terms" onClick={handleScroll('terms')} className="hover:text-gold">Terms overview</a>
                    <a href="#fees" onClick={handleScroll('fees')} className="hover:text-gold">Fees & Refunds</a>
                    <a href="#transfer" onClick={handleScroll('transfer')} className="hover:text-gold">Batch Transfer</a>
                    <a href="#documents" onClick={handleScroll('documents')} className="hover:text-gold">Document Submission</a>
                    <a href="#authenticity" onClick={handleScroll('authenticity')} className="hover:text-gold">Document Authenticity</a>
                    <a href="#cancellation" onClick={handleScroll('cancellation')} className="hover:text-gold">Cancellation</a>
                  </nav>
                </div>
                <div className="bg-white/90 dark:bg-slate-800/60 p-4 rounded-lg shadow text-sm">
                  <strong>Note</strong>
                  <p className="mt-2">The Academy reserves the right to make any changes/amendments to terms and conditions of admission at any time.</p>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-2">
              <div className="space-y-6">
                <section id="terms" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h2 className="text-2xl font-semibold mb-3">Terms &amp; Conditions</h2>
                  <p className="text-sm">(1) The fees paid are non-refundable and non-transferable under any circumstances.</p>
                </section>

                <section id="fees" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Fees &amp; Refunds</h3>
                  <p className="text-sm">(2) Batch transfer is not permitted. In special cases if allowed the students will be required to pay the requisite transfer fee.</p>
                </section>

                <section id="transfer" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
                  <p className="text-sm">(3) Student is required to inform the Academy about any changes in his /her contact details including permanent /corresp./ PG address, email-Id at any point if time</p>
                </section>

                <section id="documents" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Document Submission</h3>
                  <p className="text-sm">(4) The Academy may make mandatory the submission of any certificate or documents before or at the time of the admission or afterwards, for the purpose of admission or otherwise, as decided by the Academy</p>
                </section>

                <section id="authenticity" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Document Authenticity</h3>
                  <p className="text-sm">(5) Students undertake /certify that the documents submitted by him / her are original / genuine and not fake and to the best of his / her knowledge. If found otherwise the fee of the student shall be forfeited and separate legal action would be taken by the Academy</p>
                </section>

                <section id="cancellation" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Cancellation</h3>
                  <p className="text-sm">(6) Academy reserves the right to cancel admission if a student fails to submit relevant documents or otherwise if fails to full fill any condition.</p>
                </section>

                <div className="text-sm text-muted-foreground">Note: The Academy reserves the right to make any changes/amendments to terms and conditions of admission at any time.</div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}
