import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode, useState } from "react";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-navy-deep">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6">
          <Link to="/" className="inline-flex items-center justify-center rounded-sm bg-navy-deep px-5 py-2.5 text-sm text-primary-foreground hover:bg-navy">Back home</Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { console.error('Error boundary triggered:', error); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-navy-deep">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong. Try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="rounded-sm bg-navy-deep px-4 py-2 text-sm text-primary-foreground hover:bg-navy">Try again</button>
          <a href="/" className="rounded-sm border border-input bg-background px-4 py-2 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "DMHCA - Top Institute For Medical Courses" },
      { name: "description", content: "Accredited online medical fellowships, PG diplomas, and certificate programs across 10+ specialties." },
      { property: "og:title", content: "DMHCA - Top Institute For Medical Courses" },
      { property: "og:description", content: "Accredited medical education delivered online." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "icon", href: "/titlelogo.webp" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Inter+Tight:wght@400;500;600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  
  // Modal state: show popin until user closes with X (persisted)
  const [showPopin, setShowPopin] = useState(false);

  // Load popin state from localStorage after hydration
  useEffect(() => {
    try {
      const closed = localStorage.getItem("dmhca_popin_closed");
      setShowPopin(closed !== "1");
    } catch (e) {
      setShowPopin(true);
    }
  }, []);

  // Cookie consent: null = not decided, "accept" or "deny"
  // Initialize to null to avoid hydration mismatch (load from localStorage in useEffect)
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  // Load cookie consent from localStorage after hydration
  useEffect(() => {
    try {
      const saved = localStorage.getItem("dmhca_cookie_consent");
      if (saved) setCookieConsent(saved);
    } catch (e) {}
  }, []);

  // Persist cookie consent to localStorage when it changes
  useEffect(() => {
    try {
      if (cookieConsent) localStorage.setItem("dmhca_cookie_consent", cookieConsent);
    } catch (e) {}
  }, [cookieConsent]);

  const closePopin = () => {
    try { localStorage.setItem("dmhca_popin_closed", "1"); } catch (e) {}
    setShowPopin(false);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1"><Outlet /></main>
        <Footer />

        {/* Persistent Popin Modal - shows until user clicks X */}
        {showPopin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-auto sm:mx-0 p-6 md:p-8 relative overflow-hidden border border-slate-100">
              <button onClick={closePopin} aria-label="Close" className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 text-2xl">✕</button>
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-display text-on-hero-light mb-2">Need help finding a course?</h3>
                  <p className="text-sm text-slate-600 mb-4">Call our admissions team at <a href="tel:+919899711530" className="text-on-hero-light font-semibold">+91 9899711530</a> or leave your details below and we'll contact you.</p>
                </div>

                <form className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input name="name" aria-label="Name" className="input-base" placeholder="Name" />
                  <input name="mobile" aria-label="Mobile No" className="input-base" placeholder="Mobile No" />
                  <input name="email" aria-label="Email" className="input-base sm:col-span-2" placeholder="Email" />
                  <div className="sm:col-span-2 flex items-center gap-3">
                    <button type="button" className="flex-1 bg-gradient-to-br from-navy-deep to-navy text-primary-foreground rounded-full py-3 font-semibold shadow-md">Submit</button>
                    <button type="button" onClick={closePopin} className="px-4 py-2 border border-slate-200 rounded-md bg-white hover:bg-slate-50">Close</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Cookie banner fixed to bottom */}
        {cookieConsent === null && (
          <div className="fixed left-0 right-0 bottom-0 z-40 bg-white border-t border-slate-200">
            <div className="w-full bg-slate-50 px-4 md:px-8 py-3 flex items-center justify-between gap-4 rounded-none shadow-sm border-t border-slate-100">
              <div className="flex-1 text-sm text-slate-700 max-w-4xl">
                <div className="font-medium text-slate-900 mb-1">DMHCA uses cookies</div>
                <div className="text-sm text-slate-600">DMHCA uses cookies to improve site performance, enhance user experience, and support the delivery of our online medical education services.</div>
              </div>
                <div className="flex items-center gap-3 ml-4">
                <button onClick={() => setCookieConsent("accept")} className="px-5 py-2 bg-gradient-to-br from-navy-deep to-navy text-primary-foreground rounded-full shadow-md">Accept</button>
                <button onClick={() => setCookieConsent("deny")} className="px-4 py-2 border border-slate-200 rounded-full text-slate-700 bg-white">Deny</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </QueryClientProvider>
  );
}
