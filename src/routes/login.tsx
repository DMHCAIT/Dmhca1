import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — DMHCA" },
      { name: "description", content: "Log in to your DMHCA learner profile." },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <div className="container-x py-20 grid place-items-center">
      <div className="w-full max-w-md bg-white border border-border rounded-2xl p-8 shadow-lg">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Learner portal</div>
        <h1 className="font-display text-3xl text-slate-900 mt-3">Welcome back.</h1>
        <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Email</label>
            <input type="email" required className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-navy-deep" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Password</label>
            <input type="password" required className="mt-2 w-full px-4 py-3 bg-background border border-border rounded-sm text-sm focus:outline-none focus:border-navy-deep" />
          </div>
          <button className="w-full px-5 py-3 bg-gradient-to-br from-navy-deep to-navy text-primary-foreground text-sm rounded-lg">Log in</button>
        </form>
        <div className="text-xs text-muted-foreground mt-6 text-center">
          New to DMHCA? <Link to="/contact-us" className="text-navy-deep underline">Talk to admissions</Link>
        </div>
      </div>
    </div>
  );
}
