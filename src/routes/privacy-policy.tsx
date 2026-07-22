import React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/privacy-policy')({
  component: function PrivacyPolicy() {
    const handleScroll = (id: string) => (e: React.MouseEvent) => {
      e.preventDefault()
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      try { window.history.replaceState(null, '', `/privacy-policy#${id}`) } catch {}
    }

    React.useEffect(() => {
      const ids = ['overview','eligibility','account','collected','usage','thirdparty','ip','links','liability','law','refund','changes']
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
              <h1 className="text-4xl font-extrabold">Privacy Policy</h1>
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
                    <a href="#overview" onClick={handleScroll('overview')} className="hover:text-gold">Website Overview</a>
                    <a href="#eligibility" onClick={handleScroll('eligibility')} className="hover:text-gold">Eligibility</a>
                    <a href="#account" onClick={handleScroll('account')} className="hover:text-gold">Creating a User Account</a>
                    <a href="#collected" onClick={handleScroll('collected')} className="hover:text-gold">Information Collected</a>
                    <a href="#usage" onClick={handleScroll('usage')} className="hover:text-gold">Opt-in Mails</a>
                    <a href="#thirdparty" onClick={handleScroll('thirdparty')} className="hover:text-gold">Third-party Content</a>
                    <a href="#ip" onClick={handleScroll('ip')} className="hover:text-gold">Intellectual Property</a>
                    <a href="#links" onClick={handleScroll('links')} className="hover:text-gold">External Links</a>
                    <a href="#liability" onClick={handleScroll('liability')} className="hover:text-gold">Limitation of Liability</a>
                    <a href="#law" onClick={handleScroll('law')} className="hover:text-gold">Governing Law</a>
                    <a href="#refund" onClick={handleScroll('refund')} className="hover:text-gold">Refund & Cancellation</a>
                    <a href="#changes" onClick={handleScroll('changes')} className="hover:text-gold">Change in Terms</a>
                  </nav>
                </div>
                <div className="bg-white/90 dark:bg-slate-800/60 p-4 rounded-lg shadow text-sm">
                  <strong>Note</strong>
                  <p className="mt-2">Continued use of the platform indicates acceptance of any updates to this policy.</p>
                </div>
              </div>
            </aside>

            <article className="lg:col-span-2">
              <div className="space-y-6">
                <section id="overview" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h2 className="text-2xl font-semibold mb-3">Website Overview</h2>
                  <p className="text-sm">NDMHC is the manager, moderator, and operator of delhimedical.net and its various versions, including mobile and applications. Our website serves as a search engine for courses, colleges/institutions, and assists students in obtaining information on admission processes and details about their preferred courses and colleges/institutions. It’s important to note that NDMHC does not accept applications or registrations on behalf of any college or institution, whether they are partner colleges or otherwise. When a student applies to a course or college/institution through our website, they are considered to have applied for NDMHC’s assistance.</p>
                </section>

                <section id="eligibility" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Eligibility</h3>
                  <p className="text-sm">Our website is not intended for users under 18 years of age. By accessing or using the portal, you confirm that you meet the minimum age requirement. If we receive information to the contrary, we will delete the user and their information.</p>
                </section>

                <section id="account" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Creating a User Account</h3>
                  <p className="text-sm">When users create a user account on dmhca.in, they agree to protect the confidentiality of their username and password and assume sole responsibility for any activities conducted using their account. Users also consent to receive SMS and emails containing information about the colleges and courses they apply for and related updates.</p>
                </section>

                <section id="collected" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Information Collected by the Website</h3>
                  <p className="text-sm">We collect user data through contact forms and login/signup processes, including personal and non-personal information. This information is used to provide tailored suggestions to students and keep them informed about ongoing application processes.</p>
                </section>

                <section id="usage" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Opt-in Mails and Data Usage</h3>
                  <p className="text-sm">We may use the data collected for various purposes, including sending customized emails to users who opt-in for newsletters or notifications, collecting feedback, and providing location-specific data. We may also use cookies and IP data for targeted advertising and trend analysis.</p>
                </section>

                <section id="thirdparty" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Third-party Content</h3>
                  <p className="text-sm">Users who provide testimonials consent to public display and sharing with partner institutions. We do not control third-party content and are not responsible for its accuracy or quality. Users agree not to use offensive language in any public forum or comment section.</p>
                </section>

                <section id="ip" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Intellectual Property Rights</h3>
                  <p className="text-sm">Unless stated otherwise, NDMHC holds the sole rights to all digital content on the website. Trademarks and logos cannot be used for commercial purposes without prior permission. Materials collected from the public domain are for information purposes only.</p>
                </section>

                <section id="links" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">External Links</h3>
                  <p className="text-sm">We are not liable for losses resulting from external links on the website. Users are advised to verify information from other sources before making decisions based on advertisements or content on linked websites.</p>
                </section>

                <section id="liability" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
                  <p className="text-sm">NDMHC is not liable for issues arising from third-party content or user-submitted content. Users should verify information before relying on it. We do not claim ownership of user-submitted content but require exclusive rights to it.</p>
                </section>

                <section id="law" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Governing Law</h3>
                  <p className="text-sm">All legal proceedings are governed by the laws of India, with the courts of Delhi having exclusive jurisdiction in case of disputes.</p>
                </section>

                <section id="refund" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Refund &amp; Cancellation Policy</h3>
                  <p className="text-sm">Monetary transactions are handled by the payment gateway partner, and we are not responsible for payment discrepancies. We review refund cases if payments exceed the number of applications. Users must note transaction details for tracking. Late payments may not be accepted by colleges, and no refunds will be provided in such cases.</p>
                </section>

                <section id="changes" className="bg-white/90 dark:bg-slate-800/60 p-8 rounded-lg shadow border-l-4 border-gold">
                  <h3 className="text-xl font-semibold mb-2">Change in Terms of Privacy Policy</h3>
                  <p className="text-sm">NDMHC reserves the right to amend or modify these terms of use and Privacy Policy at any time. Users are encouraged to check this page regularly for updates. Continued use of the platform indicates acceptance of such changes.</p>
                </section>

                <div className="text-sm text-muted-foreground">For clarification, please contact: Newdelhi Medical Health Care Pvt. Ltd.</div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}

})

