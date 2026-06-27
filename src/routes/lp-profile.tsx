import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/lp-profile")({
  component: function LPProfile() {
    const [tab, setTab] = useState<'login'|'signup'>('login');

    return (
      <div className="min-h-[70vh] flex items-start pt-12 pb-20">
        <div className="container-x mx-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div className="md:col-span-2 flex items-center justify-center md:justify-start gap-4 mb-2">
              <button onClick={() => setTab('login')} className={`px-4 py-2 rounded-md font-medium border ${tab==='login'? 'bg-navy-deep text-white border-navy-deep' : 'bg-white text-foreground border-border'}`}>Log in</button>
              <button onClick={() => setTab('signup')} className={`px-4 py-2 rounded-md font-medium border ${tab==='signup'? 'bg-navy-deep text-white border-navy-deep' : 'bg-white text-foreground border-border'}`}>Sign up</button>
            </div>

              {tab === 'login' ? (
                <div className="bg-white p-10 rounded-lg shadow-lg w-full md:col-span-2 max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-black mb-6">Welcome back.</h2>
                <label className="block text-sm text-muted-foreground mb-2">Email</label>
                <input type="email" className="w-full mb-4 input-base" placeholder="you@example.com" />

                <label className="block text-sm text-muted-foreground mb-2">Password</label>
                <input type="password" className="w-full mb-4 input-base" placeholder="Password" />

                <div className="flex items-center justify-between mb-6">
                  <label className="flex items-center gap-2 text-sm"><input type="checkbox" className="form-checkbox" /> Remember me</label>
                  <a href="#" className="text-sm text-navy-deep hover:underline">Forgot password?</a>
                </div>

                <button className="w-full px-4 py-3 bg-navy-deep text-primary-foreground rounded-md text-lg">Log in</button>
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Don't have an account? <button onClick={() => setTab('signup')} className="text-navy-deep font-medium hover:underline">Sign up</button>
                </div>
              </div>
            ) : (
              <div className="bg-white p-10 rounded-lg shadow-lg w-full md:col-span-2 max-w-3xl mx-auto">
                <h2 className="text-3xl font-display font-black mb-6">Create your account</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">First name</label>
                    <input type="text" className="w-full mb-2 input-base" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Last name</label>
                    <input type="text" className="w-full mb-2 input-base" />
                  </div>
                </div>

                <label className="block text-sm text-muted-foreground mb-2">Email address</label>
                <input type="email" className="w-full mb-4 input-base" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Password</label>
                    <input type="password" className="w-full mb-2 input-base" />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Confirm password</label>
                    <input type="password" className="w-full mb-2 input-base" />
                  </div>
                </div>

                <label className="block text-sm text-muted-foreground mb-2">Mobile number</label>
                <input type="tel" className="w-full mb-6 input-base" />

                <button className="w-full px-4 py-3 bg-navy-deep text-primary-foreground rounded-md text-lg">Sign up</button>
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Already have an account? <button onClick={() => setTab('login')} className="text-navy-deep font-medium hover:underline">Log in</button>
                </div>
              </div>
            )}

            <div className="hidden md:flex flex-col items-start text-sm text-muted-foreground">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground mb-2">Why create an account?</h3>
                <ul className="list-disc pl-5">
                  <li>Access exclusive course materials</li>
                  <li>Save your progress and certificates</li>
                  <li>Faster event registrations</li>
                </ul>
              </div>
            </div>
            {/* divider removed per request */}
          </div>
        </div>
      </div>
    );
  }
});

export default Route;
