import { Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { SignupFlow } from "@/components/SignupFlow";
import { OTPLoginModal } from "@/components/OTPLoginModal";
import { ThemeToggle } from "@/components/ThemeToggle";
import { syncLocalCartToServer, loadServerCartToLocal } from '@/lib/cart-sync';

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
  const [hasSignedUp, setHasSignedUp] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [fullName, setFullName] = useState('');
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Load auth state from localStorage
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const signedUp = localStorage.getItem('hasSignedUp') === 'true';
      const name = localStorage.getItem('full_name') || '';
      setIsLoggedIn(loggedIn);
      setHasSignedUp(signedUp);
      setFullName(name);
      console.log('Header mount - isLoggedIn:', loggedIn, 'hasSignedUp:', signedUp, 'fullName:', name);

      // Check URL for auth param
      try {
        const params = new URLSearchParams(window.location.search);
        const auth = params.get('auth');
        console.log('[Header] Auth param found on mount:', auth);
        if (auth === 'signup') {
          console.log('[Header] Setting showSignupModal to true');
          setShowSignupModal(true);
          setShowLoginModal(false);
        } else if (auth === 'login') {
          console.log('[Header] Setting showLoginModal to true');
          setShowLoginModal(true);
          setShowSignupModal(false);
        }
      } catch (e) {
        console.error('[Header] Error parsing auth param:', e);
      }

      // Listen for localStorage changes
      const handleStorageChange = () => {
        const updatedName = localStorage.getItem('full_name') || '';
        const updatedSignedUp = localStorage.getItem('hasSignedUp') === 'true';
        if (updatedName) {
          setFullName(updatedName);
        }
        if (updatedSignedUp) {
          setHasSignedUp(updatedSignedUp);
        }
      };

      window.addEventListener('storage', handleStorageChange);
      return () => window.removeEventListener('storage', handleStorageChange);
    }
  }, []);

  // Debug log whenever modal state changes
  useEffect(() => {
    console.log('[Header] Modal state changed - showSignupModal:', showSignupModal, 'showLoginModal:', showLoginModal);
  }, [showSignupModal, showLoginModal]);

  // Listen for requests to open auth modals via localStorage (popin trigger)
  useEffect(() => {
    const handler = (e: StorageEvent) => {
      if (e.key === 'dmhca_show_auth' && e.newValue) {
        const auth = e.newValue;
        if (auth === 'signup') {
          setShowSignupModal(true);
          setShowLoginModal(false);
        } else if (auth === 'login') {
          setShowLoginModal(true);
          setShowSignupModal(false);
        }
        try { localStorage.removeItem('dmhca_show_auth'); } catch (err) {}
      }
    };
    window.addEventListener('storage', handler);
    return () => window.removeEventListener('storage', handler);
  }, []);

  const handleSignupSuccess = () => {
    // Mark that user has signed up
    localStorage.setItem('hasSignedUp', 'true');
    setHasSignedUp(true);
    // Update fullName from localStorage
    const name = localStorage.getItem('full_name') || '';
    setFullName(name);
    console.log('Signup successful - hasSignedUp flag set, fullName:', name);
    setShowSignupModal(false);
    setShowLoginModal(true);
  };

  const handleLoginSuccess = (data?: any) => {
    // Get full_name from the verification response data, or fallback to localStorage
    const name = data?.fullName || localStorage.getItem('full_name') || '';
    localStorage.setItem('full_name', name);
    setFullName(name);
    setShowLoginModal(false);
    setIsLoggedIn(true);
    console.log('Login successful - fullName from DB:', name);
    // Sync cart: load server cart then push local to server
    (async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) {
          await loadServerCartToLocal(userId);
          await syncLocalCartToServer(userId);
        }
      } catch (e) {}
    })();
    try {
      const redirect = localStorage.getItem('post_login_redirect');
      if (redirect) {
        localStorage.removeItem('post_login_redirect');
        if (typeof window !== 'undefined') window.location.href = redirect;
        return;
      }
    } catch (e) {}
    navigate({ to: '/dashboard' });
  };

  const handleLogout = () => {
    // attempt to sync cart before clearing
    (async () => {
      try {
        const userId = localStorage.getItem('userId');
        if (userId) await syncLocalCartToServer(userId);
      } catch (e) {}
    })();
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('full_name');
    localStorage.removeItem('interests');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('hasSignedUp'); // Clear signup flag on logout
    sessionStorage.removeItem('signupData');
    setIsLoggedIn(false);
    setHasSignedUp(false);
    setFullName('');
    navigate({ to: '/' });
  };

  return (
    <header className="sticky top-0 z-40 bg-background dark:bg-slate-950 dark:border-b dark:border-slate-800 border-b border-border/50 hairline">
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
            <Link key={n.to} to={n.to} className="text-foreground/80 dark:text-slate-400 hover:text-navy-deep dark:hover:text-gold transition" activeProps={{ className: "text-navy-deep dark:text-gold" }} activeOptions={{ exact: n.to === "/" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3 relative">
          <ThemeToggle />
          {isLoggedIn ? (
            <>
              <button
                onClick={() => { if (typeof window !== 'undefined') window.location.href = '/cart'; }}
                className="p-2 text-navy-deep dark:text-gold hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition"
                title="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="w-10 h-10 rounded-full bg-navy-deep dark:bg-gold dark:text-slate-900 text-white flex items-center justify-center font-bold text-lg hover:bg-navy dark:hover:bg-yellow-500 transition"
                  title="User Profile Menu"
                >
                  {fullName ? fullName.charAt(0).toUpperCase() : 'U'}
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 bg-white dark:bg-slate-900 border border-border dark:border-slate-700 rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => {
                        navigate({ to: "/dashboard" });
                        setShowProfileMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-navy-deep dark:text-gold hover:bg-gray-100 dark:hover:bg-slate-800 transition"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-slate-800 transition border-t border-border dark:border-slate-700"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : hasSignedUp ? (
            <>
              <button
                onClick={() => { if (typeof window !== 'undefined') window.location.href = '/cart'; }}
                className="p-2 text-navy-deep dark:text-gold hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition"
                title="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setShowLoginModal(true);
                  setShowSignupModal(false);
                }}
                className="text-base px-4 py-2 bg-navy-deep dark:bg-gold dark:text-slate-900 text-white rounded-sm hover:bg-navy dark:hover:bg-yellow-500 transition"
                >
                Login
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => { if (typeof window !== 'undefined') window.location.href = '/cart'; }}
                className="p-2 text-navy-deep dark:text-gold hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition"
                title="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setShowSignupModal(true);
                  setShowLoginModal(false);
                }}
                className="text-base px-4 py-2 bg-navy-deep dark:bg-gold dark:text-slate-900 text-primary-foreground rounded-sm hover:bg-navy dark:hover:bg-yellow-500 transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        
        <div className="lg:hidden p-2">
          <ThemeToggle />
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3 text-base">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1 text-foreground dark:text-slate-300 hover:text-navy-deep dark:hover:text-gold">{n.label}</Link>
            ))}
            <div className="mt-2 pt-4 border-t border-border dark:border-slate-700 flex gap-2 flex-wrap">
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') window.location.href = '/cart';
                  setOpen(false);
                }}
                className="flex-1 px-4 py-2 bg-gray-100 dark:bg-slate-800 text-navy-deep dark:text-gold rounded-sm hover:bg-gray-200 dark:hover:bg-slate-700 transition flex items-center justify-center gap-2"
                title="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
                Cart
              </button>
              {isLoggedIn ? (
                <>
                  <button
                    onClick={() => {
                      navigate({ to: "/dashboard" });
                      setOpen(false);
                    }}
                    className="flex-1 px-4 py-2 bg-navy-deep dark:bg-gold dark:text-slate-900 text-white rounded-sm hover:bg-navy dark:hover:bg-yellow-500 transition flex items-center justify-center gap-2 font-semibold"
                  >
                    <span className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 dark:text-gold text-navy-deep flex items-center justify-center font-bold text-sm">
                      {fullName ? fullName.charAt(0).toUpperCase() : 'U'}
                    </span>
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="flex-1 px-4 py-2 bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-sm hover:bg-red-200 dark:hover:bg-red-900 transition text-sm font-semibold"
                  >
                    Logout
                  </button>
                </>
              ) : hasSignedUp ? (
                <button
                  onClick={() => {
                    setShowLoginModal(true);
                    setShowSignupModal(false);
                    setOpen(false);
                  }}
                  className="flex-1 px-4 py-2 bg-navy-deep dark:bg-gold dark:text-slate-900 text-white rounded-sm hover:bg-navy dark:hover:bg-yellow-500 transition"
                >
                  Login
                </button>
              ) : (
                <button
                  onClick={() => {
                    setShowSignupModal(true);
                    setShowLoginModal(false);
                    setOpen(false);
                  }}
                  className="flex-1 px-4 py-2 bg-navy-deep dark:bg-gold dark:text-slate-900 text-primary-foreground rounded-sm hover:bg-navy dark:hover:bg-yellow-500 transition"
                >
                  Sign Up
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <SignupFlow
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
        onSuccess={handleSignupSuccess}
        onSwitchToLogin={() => {
          setShowSignupModal(false);
          setShowLoginModal(true);
        }}
      />
      <OTPLoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={handleLoginSuccess}
        onSwitchToSignup={() => {
          setShowLoginModal(false);
          setShowSignupModal(true);
        }}
      />
    </header>
  );
}
