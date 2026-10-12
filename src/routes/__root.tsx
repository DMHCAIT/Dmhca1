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
import { SignupFlow } from "../components/SignupFlow";
import { ThemeProvider } from "@/contexts/ThemeContext";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ContactStrip } from "@/components/site/ContactStrip";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-navy-deep">404</h1>
        <h2 className="mt-4 text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-navy-deep px-5 py-2.5 text-sm text-primary-foreground hover:bg-navy"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    console.error("Error boundary triggered:", error);
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl text-navy-deep">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-sm bg-navy-deep px-4 py-2 text-sm text-primary-foreground hover:bg-navy"
          >
            Try again
          </button>
          <a href="/" className="rounded-sm border border-input bg-background px-4 py-2 text-sm">
            Go home
          </a>
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
      { name: "google-site-verification", content: "7VDMum1M_bzr1C1UZ2zwIAJ8V1F1pxLDk0qOzO_xAGQ" },
      { title: "DMHCA - Top Institute For Medical Courses" },
      {
        name: "description",
        content:
          "Accredited online medical fellowships, PG diplomas, and certificate programs across 10+ specialties.",
      },
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
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;900&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "text/javascript",
        children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MMM3HK7P');`,
      },
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
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MMM3HK7P"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  // Undefined means consent is still being loaded; null means the visitor has not decided.
  const [cookieConsent, setCookieConsent] = useState<string | null | undefined>(undefined);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("dmhca_cookie_consent");
      setCookieConsent(saved === "accept" || saved === "deny" ? saved : null);
    } catch (error) {
      console.error("Failed to load cookie consent:", error);
      setCookieConsent(null);
    }
  }, []);

  function handleCookieConsent(choice: "accept" | "deny") {
    try {
      localStorage.setItem("dmhca_cookie_consent", choice);
    } catch (error) {
      console.error("Failed to save cookie consent:", error);
    }
    setCookieConsent(choice);
  }

  const [showPopin, setShowPopin] = useState(false);
  useEffect(() => {
    try {
      const closed = localStorage.getItem("dmhca_popin_closed");
      setShowPopin(closed !== "1");
    } catch (error) {
      console.error("Failed to load signup popup preference:", error);
      setShowPopin(true);
    }
  }, []);

  function dismissPopin() {
    setShowPopin(false);
    try {
      localStorage.setItem("dmhca_popin_closed", "1");
    } catch (error) {
      console.error("Failed to save signup popup preference:", error);
    }
  }
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <div className={`min-h-screen flex flex-col`}>
          <Header />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />

          {showPopin && (
            <SignupFlow
              isOpen={true}
              onClose={dismissPopin}
              onSuccess={dismissPopin}
              onSwitchToLogin={dismissPopin}
            />
          )}

          {/* Cookie banner fixed to bottom */}
          {cookieConsent === null && (
            <div className="fixed left-0 right-0 bottom-0 z-50 px-0">
              <div className="w-full bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 shadow-lg px-3 md:px-8 py-2 md:py-5 flex items-center justify-center">
                <div className="max-w-6xl w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-3 md:gap-6">
                  <div className="flex-1 text-xs md:text-sm text-slate-800 dark:text-slate-200">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1 text-sm md:text-base">
                      We respect your privacy
                    </div>
                    <div className="text-xs md:text-sm text-slate-600 dark:text-slate-400 mb-1 md:mb-2 line-clamp-2 md:line-clamp-none">
                      We use cookies to personalise content, analyse traffic and improve your
                      experience. By accepting, you agree to our use of cookies for analytics,
                      personalization, and targeted content.
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-500 hidden md:block">
                      You can change your preference anytime from your browser settings. Read our{" "}
                      <a href="/privacy-policy" className="text-navy-deep dark:text-gold underline">
                        Privacy Policy
                      </a>{" "}
                      for more information.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                    <button
                      onClick={() => handleCookieConsent("accept")}
                      className="px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm bg-navy-deep dark:bg-gold dark:text-slate-900 text-white whitespace-nowrap"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleCookieConsent("deny")}
                      className="px-3 md:px-5 py-1.5 md:py-2 text-xs md:text-sm border border-gray-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 whitespace-nowrap"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Contact Strip - Fixed to bottom */}
          <ContactStrip />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
