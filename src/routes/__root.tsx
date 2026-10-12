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

          {/* Contact Strip - Fixed to bottom */}
          <ContactStrip />
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
