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
import SignupFlow from "../components/SignupFlow";
import { ThemeProvider } from "@/contexts/ThemeContext";

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
  

  // Popin removed — no persistent modal shown on root

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

  function handleCookieConsent(choice: string) {
    try { localStorage.setItem('dmhca_cookie_consent', choice); } catch (e) {}
    setCookieConsent(choice);
  }

  // Show a root-level popin (SignupFlow) after 10s with blurred backdrop for 10s
  const [showPopin, setShowPopin] = useState(false);
  useEffect(() => {
    try {
      const closed = localStorage.getItem('dmhca_popin_closed');
      if (closed === '1') return; // do not show again
    } catch (e) {}

    const openTimer = setTimeout(() => setShowPopin(true), 10000);
    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!showPopin) return;
    const hideTimer = setTimeout(() => {
      setShowPopin(false);
      try { localStorage.setItem('dmhca_popin_closed', '1'); } catch (e) {}
    }, 10000);
    return () => clearTimeout(hideTimer);
  }, [showPopin]);
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className={`min-h-screen flex flex-col`}>
          <Header />
          <main className="flex-1"><Outlet /></main>
          <Footer />

          {/* Popin overlay */}
          {showPopin && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
              <div className="relative z-10 w-full max-w-md mx-4">
                <SignupFlow isOpen onClose={() => { setShowPopin(false); try { localStorage.setItem('dmhca_popin_closed','1') } catch(e){} }} />
              </div>
            </div>
          )}

          {/* Cookie banner fixed to bottom */}
          {cookieConsent === null && (
            <div className="fixed left-0 right-0 bottom-0 z-50 px-0">
              <div className="w-full bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 shadow-lg px-8 py-5 flex items-center justify-center">
                <div className="max-w-6xl w-full flex items-center justify-between gap-6">
                  <div className="flex-1 text-sm text-slate-800 dark:text-slate-200">
                  <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1">We respect your privacy</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">We use cookies to personalise content, analyse traffic and improve your experience. By accepting, you agree to our use of cookies for analytics, personalization, and targeted content.</div>
                  <div className="text-xs text-slate-500 dark:text-slate-500">You can change your preference anytime from your browser settings. Read our <a href="/privacy-policy" className="text-navy-deep dark:text-gold underline">Privacy Policy</a> for more information.</div>
                </div>
                  <div className="flex items-center gap-3">
                    <button onClick={() => handleCookieConsent("accept")} className="px-5 py-2 bg-navy-deep dark:bg-gold dark:text-slate-900 text-white">Accept</button>
                    <button onClick={() => handleCookieConsent("deny")} className="px-5 py-2 border border-gray-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900">Deny</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
