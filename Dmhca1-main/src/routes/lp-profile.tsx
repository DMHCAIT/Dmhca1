import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/lp-profile")({
  component: function LPProfile() {
    const [tab, setTab] = useState<'login'|'signup'>('login');

    return (
      <div className="min-h-[70vh] flex items-center py-20 bg-slate-50">
        <div className="container-x mx-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <aside className="md:col-span-4 bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-4">
              <h3 className="text-lg font-semibold">Account</h3>
              <p className="text-sm text-muted-foreground">Quick access to login or create your DMHCA account.</p>
              <nav className="mt-4 flex flex-col gap-2">
                <button onClick={() => setTab('login')} className={`text-left px-3 py-2 rounded-lg ${tab==='login'? 'bg-navy-deep text-white' : 'text-slate-700 hover:bg-slate-100'}`}>Log in</button>
                <button onClick={() => setTab('signup')} className={`text-left px-3 py-2 rounded-lg ${tab==='signup'? 'bg-navy-deep text-white' : 'text-slate-700 hover:bg-slate-100'}`}>Sign up</button>
              </nav>
              <div className="mt-auto text-sm text-muted-foreground">
                <strong className="text-foreground">Need help?</strong>
                <div className="mt-2">Call admissions: <a href="tel:+919899711530" className="text-navy-deep font-medium">+91 9899711530</a></div>
              </div>
            </aside>

            <section className="md:col-span-8 bg-white rounded-2xl p-8 shadow-lg">
              {tab === 'login' ? (
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Welcome back</h2>
                  <p className="text-sm text-muted-foreground mb-6">Enter your details to access your account.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="sr-only">Name (optional)</label>
                      <input placeholder="Name (optional)" className="input-base w-full" />
                    </div>
                    <div>
                      <label className="sr-only">Mobile No</label>
                      <input placeholder="Mobile No" className="input-base w-full" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="sr-only">Email</label>
                    <input type="email" placeholder="Email" className="input-base w-full" />
                  </div>
                  <div className="mb-4">
                    <label className="sr-only">Password</label>
                    <input type="password" placeholder="Password" className="input-base w-full" />
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="form-checkbox" /> Remember me</label>
                    <a href="#" className="text-sm text-navy-deep hover:underline">Forgot password?</a>
                  </div>

                  <button className="w-full px-4 py-3 bg-gradient-to-br from-navy-deep to-navy text-primary-foreground rounded-full">Log in</button>
                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    Don't have an account? <button onClick={() => setTab('signup')} className="text-navy-deep font-medium hover:underline">Sign up</button>
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-2xl font-display font-bold mb-2">Create your account</h2>
                  <p className="text-sm text-muted-foreground mb-6">Start your learning journey with DMHCA.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="sr-only">First name</label>
                      <input placeholder="First name" className="input-base w-full" />
                    </div>
                    <div>
                      <label className="sr-only">Last name</label>
                      <input placeholder="Last name" className="input-base w-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="sr-only">Email</label>
                      <input type="email" placeholder="Email" className="input-base w-full" />
                    </div>
                    <div>
                      <label className="sr-only">Mobile No</label>
                      <input type="tel" placeholder="Mobile No" className="input-base w-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="sr-only">Password</label>
                      <input type="password" placeholder="Password" className="input-base w-full" />
                    </div>
                    <div>
                      <label className="sr-only">Confirm password</label>
                      <input type="password" placeholder="Confirm password" className="input-base w-full" />
                    </div>
                  </div>

                  <button className="w-full px-4 py-3 bg-gradient-to-br from-navy-deep to-navy text-primary-foreground rounded-full">Sign up</button>
                  <div className="mt-4 text-center text-sm text-muted-foreground">
                    Already have an account? <button onClick={() => setTab('login')} className="text-navy-deep font-medium hover:underline">Log in</button>
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    );
  }
});

export default Route;
