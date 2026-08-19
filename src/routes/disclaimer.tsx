import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/disclaimer')({
  component: Disclaimer,
})

function Disclaimer() {
  const handleScroll = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'center' })
    try { window.history.replaceState(null, '', `/disclaimer#${id}`) } catch {}
  }

  React.useEffect(() => {
    const ids = ['educational','statutory','licensing','qualification','replacement','enrollment']
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
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold">Disclaimer</h1>
            <p className="mt-2 text-sm text-muted-foreground">Important information about our courses and certifications.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-4">
                <div className="bg-white/90 dark:bg-slate-800/60 p-4 rounded-lg shadow">
                  <h4 className="font-semibold mb-3">Quick links</h4>
                  <nav className="flex flex-col text-sm gap-2">
                    <a href="#educational" onClick={handleScroll('educational')} className="hover:text-gold">Educational Purpose</a>
                    <a href="#statutory" onClick={handleScroll('statutory')} className="hover:text-gold">Statutory Recognition</a>
                    <a href="#licensing" onClick={handleScroll('licensing')} className="hover:text-gold">Licensing &amp; Practice</a>
                    <a href="#qualification" onClick={handleScroll('qualification')} className="hover:text-gold">Qualification Requirements</a>
                    <a href="#replacement" onClick={handleScroll('replacement')} className="hover:text-gold">Not a Replacement</a>
                    <a href="#enrollment" onClick={handleScroll('enrollment')} className="hover:text-gold">Enrollment Agreement</a>
                  </nav>
                </div>
                <div className="bg-white/90 dark:bg-slate-800/60 p-4 rounded-lg shadow text-sm">
                  <strong>Important</strong>
                  <p className="mt-2">Please read this disclaimer carefully before enrolling in any course or program.</p>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-2">
              <div className="space-y-6">
                <section id="educational" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h2 className="text-2xl font-semibold mb-3">Educational Purpose</h2>
                  <p className="text-sm">All courses, certifications, and training programs offered by Delhi Medical Healthcare Academy (DMHCA) are intended strictly for continuing education, professional development, and knowledge enhancement. These programs are designed to supplement existing qualifications and enhance professional skills.</p>
                </section>

                <section id="statutory" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Statutory Recognition</h3>
                  <p className="text-sm">These programs are NOT approved or recognized by statutory councils such as the National Medical Commission (NMC), Dental Council of India (DCI), Ministry of AYUSH, or any government authority. Completion of a course does not provide any licence, registration, or legal authority to practice in any medical or healthcare field.</p>
                </section>

                <section id="licensing" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Licensing &amp; Practice</h3>
                  <p className="text-sm">Learners cannot use titles such as "Doctor", "Specialist", "Consultant", or any other regulated healthcare titles unless already legally qualified through recognized medical or healthcare qualifications from statutory bodies. Using such titles without proper legal qualification is prohibited by law.</p>
                </section>

                <section id="qualification" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Qualification Requirements</h3>
                  <p className="text-sm">These programs do NOT replace any formal degree, diploma, or medical qualification recognized by statutory bodies. To practice any regulated medical or healthcare profession, you must obtain the necessary qualifications from recognized educational institutions and obtain statutory registration from the appropriate regulatory bodies.</p>
                </section>

                <section id="replacement" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Not a Replacement for Formal Education</h3>
                  <p className="text-sm">Our courses are meant for professional development and upskilling. They are not a substitute for formal medical education, registration with statutory councils, or any government-approved qualifications required to practice healthcare professions.</p>
                </section>

                <section id="enrollment" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Enrollment Agreement</h3>
                  <p className="text-sm">By enrolling in any course or program offered by DMHCA, you acknowledge and agree that:</p>
                  <ul className="text-sm mt-3 space-y-2 list-disc list-inside">
                    <li>The course is pursued only for academic learning and upskilling purposes</li>
                    <li>You understand the limitations and non-regulatory status of our certifications</li>
                    <li>You will not misrepresent these certifications as statutory qualifications</li>
                    <li>You will not use regulated healthcare titles unless properly qualified through statutory bodies</li>
                    <li>You take full responsibility for how you use the knowledge gained from our courses</li>
                  </ul>
                </section>

                <div className="text-sm text-muted-foreground bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <strong className="text-yellow-900 dark:text-yellow-200">Legal Notice:</strong> Delhi Medical Healthcare Academy is an educational platform. All regulatory, legal, and professional practice matters are governed by the relevant statutory bodies. Learners are solely responsible for ensuring compliance with all applicable laws and regulations in their jurisdiction.</div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}
