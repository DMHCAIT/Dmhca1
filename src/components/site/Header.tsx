import { Link, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { SignupFlow } from "@/components/SignupFlow";
import { OTPLoginModal } from "@/components/OTPLoginModal";
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

  // Check if user is already logged in or has signed up
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      const signedUp = localStorage.getItem('hasSignedUp') === 'true';
      const name = localStorage.getItem('full_name') || '';
      setIsLoggedIn(loggedIn);
      setHasSignedUp(signedUp);
      setFullName(name);
      console.log('Header mount - isLoggedIn:', loggedIn, 'hasSignedUp:', signedUp, 'fullName:', name);

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

  // Open modal based on URL query param ?auth=signup or ?auth=login
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const auth = params.get('auth');
        if (auth === 'signup') {
          setShowSignupModal(true);
          setShowLoginModal(false);
        } else if (auth === 'login') {
          setShowLoginModal(true);
          setShowSignupModal(false);
        }
      }
    } catch (e) {}
  }, []);

  // Debug log whenever state changes
  useEffect(() => {
    console.log('Header state changed - isLoggedIn:', isLoggedIn, 'hasSignedUp:', hasSignedUp, 'fullName:', fullName);
  }, [isLoggedIn, hasSignedUp, fullName]);

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
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('hasSignedUp'); // Clear signup flag on logout
    setIsLoggedIn(false);
    setHasSignedUp(false);
    navigate({ to: '/' });
  };

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

        <div className="hidden lg:flex items-center gap-3 relative">
          {isLoggedIn ? (
            <>
              <button
                onClick={() => { if (typeof window !== 'undefined') window.location.href = '/cart'; }}
                className="p-2 text-navy-deep hover:bg-gray-100 rounded-lg transition"
                title="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              <div className="relative">
                <button
                  onClick={() => setShowProfileMenu(!showProfileMenu)}
                  className="w-10 h-10 rounded-full bg-navy-deep text-white flex items-center justify-center font-bold text-lg hover:bg-navy transition"
                  title="User Profile Menu"
                >
                  {fullName ? fullName.charAt(0).toUpperCase() : 'U'}
                </button>
                {showProfileMenu && (
                  <div className="absolute right-0 mt-2 bg-white border border-border rounded-lg shadow-lg z-50">
                    <button
                      onClick={() => {
                        navigate({ to: "/dashboard" });
                        setShowProfileMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-navy-deep hover:bg-gray-100 transition"
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 transition border-t border-border"
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
                className="p-2 text-navy-deep hover:bg-gray-100 rounded-lg transition"
                title="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setShowLoginModal(true);
                  setShowSignupModal(false);
                }}
                className="text-base px-4 py-2 bg-navy-deep text-white rounded-sm hover:bg-navy transition"
                >
                Login
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => { if (typeof window !== 'undefined') window.location.href = '/cart'; }}
                className="p-2 text-navy-deep hover:bg-gray-100 rounded-lg transition"
                title="Shopping Cart"
              >
                <ShoppingCart className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setShowSignupModal(true);
                  setShowLoginModal(false);
                }}
                className="text-base px-4 py-2 bg-navy-deep text-primary-foreground rounded-sm hover:bg-navy transition"
              >
                Sign Up
              </button>
            </>
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
            <div className="mt-2 pt-4 border-t border-border flex gap-2 flex-wrap">
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') window.location.href = '/cart';
                  setOpen(false);
                }}
                className="flex-1 px-4 py-2 bg-gray-100 text-navy-deep rounded-sm hover:bg-gray-200 transition flex items-center justify-center gap-2"
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
                    className="flex-1 px-4 py-2 bg-navy-deep text-white rounded-sm hover:bg-navy transition flex items-center justify-center gap-2 font-semibold"
                  >
                    <span className="w-8 h-8 rounded-full bg-white text-navy-deep flex items-center justify-center font-bold text-sm">
                      {fullName ? fullName.charAt(0).toUpperCase() : 'U'}
                    </span>
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      handleLogout();
                      setOpen(false);
                    }}
                    className="flex-1 px-4 py-2 bg-red-100 text-red-600 rounded-sm hover:bg-red-200 transition text-sm font-semibold"
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
                  className="flex-1 px-4 py-2 bg-navy-deep text-white rounded-sm hover:bg-navy transition"
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
                  className="flex-1 px-4 py-2 bg-navy-deep text-primary-foreground rounded-sm hover:bg-navy transition"
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
