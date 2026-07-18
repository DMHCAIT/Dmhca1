import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { supabaseClient } from "@/lib/supabase";
import { SignupModal } from "./SignupModal";
import { UserProfile } from "./UserProfile";

const logo = "/logo.webp";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about-dmhca", label: "About" },
  { to: "/top-medical-courses", label: "Courses" },
  { to: "/contact-us", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [loading, setLoading] = useState(true);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [userEmail, setUserEmail] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const navigate = useNavigate();

  const checkAuthState = async () => {
    try {
      const { data: { user } } = await supabaseClient.auth.getUser();
      if (user) {
        setUserExists(true);
        setIsLoggedIn(false);
      } else {
        setUserExists(false);
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Error checking auth state:", error);
    }
  };

  useEffect(() => {
    const initAuthState = async () => {
      try {
        // Check if user has an active session
        const { data: { session } } = await supabaseClient.auth.getSession();
        
        if (session?.user) {
          // User is logged in
          setIsLoggedIn(true);
          setUserExists(true);
          setUserEmail(session.user.email || "");
          setUserName(session.user.user_metadata?.full_name || session.user.email || "");
        } else {
          // No active session, check if user exists by trying to get current user
          const { data: { user } } = await supabaseClient.auth.getUser();
          if (user) {
            setUserExists(true);
            setIsLoggedIn(false);
          } else {
            setUserExists(false);
            setIsLoggedIn(false);
          }
        }
      } catch (error) {
        console.error("Error checking auth state:", error);
        setIsLoggedIn(false);
        setUserExists(false);
      } finally {
        setLoading(false);
      }
    };

    initAuthState();

    // Listen for auth state changes
    const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(() => {
      initAuthState();
    });

    return () => subscription?.unsubscribe();
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-background/98 hairline">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="DMHCA"
            className="h-10 w-auto transition-opacity hover:opacity-75"
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              t.src = logo;
            
              // ensure visibility on light backgrounds if only dark logo exists
              t.style.filter = "brightness(0) invert(1)";
            }}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-base">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-foreground/80 hover:text-navy-deep transition" activeProps={{ className: "text-navy-deep" }} activeOptions={{ exact: n.to === "/" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {!loading && (
            isLoggedIn ? (
              // User is logged in - show user profile with dashboard
              <UserProfile userEmail={userEmail} userName={userName} />
            ) : userExists ? (
              // Account exists but not logged in - show Login button
              <button
                onClick={() => navigate({ to: "/admin" })}
                className="text-base px-4 py-2 bg-navy-deep text-primary-foreground rounded-sm hover:bg-navy transition"
              >
                Log in
              </button>
            ) : (
              // No account - show Sign up button
              <button
                onClick={() => setSignupModalOpen(true)}
                className="text-base px-4 py-2 bg-navy-deep text-primary-foreground rounded-sm hover:bg-navy transition"
              >
                Sign up
              </button>
            )
          )}
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3 text-base">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1">{n.label}</Link>
            ))}
            {!loading && (
              isLoggedIn ? (
                // User is logged in - show user profile with dashboard
                <div className="mt-2 pt-4 border-t border-border">
                  <UserProfile userEmail={userEmail} userName={userName} />
                </div>
              ) : userExists ? (
                // Account exists but not logged in - show Login button
                <button
                  onClick={() => {
                    navigate({ to: "/admin" });
                    setOpen(false);
                  }}
                  className="mt-2 inline-block w-fit px-4 py-2 bg-navy-deep text-primary-foreground rounded-sm hover:bg-navy transition"
                >
                  Log in
                </button>
              ) : (
                // No account - show Sign up button
                <button
                  onClick={() => {
                    setSignupModalOpen(true);
                    setOpen(false);
                  }}
                  className="mt-2 inline-block w-fit px-4 py-2 bg-navy-deep text-primary-foreground rounded-sm hover:bg-navy transition"
                >
                  Sign up
                </button>
              )
            )}
          </div>
        </div>
      )}

      <SignupModal
        isOpen={signupModalOpen}
        onClose={() => setSignupModalOpen(false)}
        onSignupSuccess={() => {
          // Refresh auth state after signup
          checkAuthState();
        }}
      />
    </header>
  );
}
