import React, { useEffect, useState } from 'react';
import { Link, useNavigate, createFileRoute } from '@tanstack/react-router';
import { getCourse } from '@/data/courses';
import { saveCart } from '@/routes/api/save-cart';
import { createApplicationFromCart } from '@/routes/api/create-application-from-cart';

export const Route = createFileRoute('/cart')({
  component: CartPage,
});

function CartPage() {
  const [items, setItems] = useState<any[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [processingCheckout, setProcessingCheckout] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Get userId from localStorage on mount
  useEffect(() => {
    try {
      const id = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
      setUserId(id);
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      const raw = typeof window !== 'undefined' ? localStorage.getItem('cart') : null;
      const parsed = raw ? JSON.parse(raw) : [];
      setItems(parsed);
    } catch (e) {
      setItems([]);
    }
  }, []);

  // Save cart to localStorage AND database whenever items change
  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(items));
      
      // Save to database if user is logged in
      if (userId) {
        saveCart({ userId, cartItems: items }).catch(err => {
          console.warn('Warning: Could not save cart to database:', err);
          // Continue even if database save fails
        });
      }
    } catch (e) {}
  }, [items, userId]);

  function updateQty(slug: string, qty: number) {
    setItems(prev => prev.map(i => i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i));
  }

  function removeItem(slug: string) {
    setItems(prev => prev.filter(i => i.slug !== slug));
  }

  const handleProceedCheckout = async () => {
    try {
      setError('');
      
      // Check if user is logged in
      const isLoggedIn = typeof window !== 'undefined' ? localStorage.getItem('isLoggedIn') === 'true' : false;
      if (!isLoggedIn) {
        // Redirect to login
        if (typeof window !== 'undefined') {
          localStorage.setItem('post_login_redirect', '/cart');
          window.location.href = '/?auth=login';
        }
        return;
      }

      // Get user info from localStorage
      const email = typeof window !== 'undefined' ? localStorage.getItem('email') : null;
      const fullName = typeof window !== 'undefined' ? localStorage.getItem('full_name') : null;
      const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
      const phone = typeof window !== 'undefined' ? localStorage.getItem('phone') || '' : '';

      if (!email || !fullName) {
        setError('User information not found. Please log in again.');
        return;
      }

      // Get first course from cart
      if (items.length === 0) {
        setError('Cart is empty');
        return;
      }

      const firstCourse = items[0];
      const courseName = firstCourse.title;

      setProcessingCheckout(true);

      // Create application
      const result = await createApplicationFromCart({
        data: {
          email,
          fullName,
          phone,
          courseName,
          userId: userId || undefined,
        },
      });

      if (result.success && result.applicationId) {
        // Calculate checkout total (Price + GST + Razorpay)
        const checkoutTotal = Math.round(cartTotal + (cartTotal * 0.04));
        
        // Redirect to payment page with basePrice parameter
        if (typeof window !== 'undefined') {
          window.location.href = `/payment?applicationId=${result.applicationId}&amount=${checkoutTotal}&basePrice=${subtotal}`;
        }
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to proceed to checkout');
      setProcessingCheckout(false);
    }
  };

  const subtotal = items.reduce((s, it) => s + (Number(it.priceINR || 0) * (it.qty || 1)), 0);

  // Fees
  const GST_RATE = 0.18; // 18%
  const RAZORPAY_RATE = 0.04; // 4%

  const gst = subtotal * GST_RATE;
  const razorpayFee = subtotal * RAZORPAY_RATE;
  const cartTotal = subtotal + gst; // Cart shows only Price + GST
  const checkoutTotal = subtotal + gst + razorpayFee; // Full amount for checkout

  return (
    <div className="container-x py-10">
      <h1 className="text-3xl font-extrabold mb-8 text-center">Cart</h1>
      {items.length === 0 ? (
        <div className="p-6 bg-white rounded-xl border border-slate-200 text-center">
          <p className="text-slate-700 mb-4">Your cart is empty.</p>
          <Link to="/top-medical-courses" className="px-4 py-2 bg-navy-deep text-white rounded">Browse Courses</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it) => (
              <div key={it.slug} className="p-4 bg-white border border-slate-200 rounded-xl flex items-center gap-4">
                <div className="w-28 h-20 rounded overflow-hidden flex-shrink-0 bg-white border">
                  <img src={(getCourse(it.slug)?.image) || it.image || '/logo.webp'} alt={it.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-slate-900 text-lg">{it.title}</div>
                  <div className="text-sm text-slate-600 mt-1">₹ {Number(it.priceINR || 0).toLocaleString('en-IN')}</div>
                </div>
                <div className="flex items-center gap-4">
                  {it.qty && it.qty > 1 && <div className="text-sm text-slate-700">Qty: <span className="font-medium">{it.qty}</span></div>}
                  <button onClick={() => removeItem(it.slug)} title="Remove" className="p-2 rounded-md" style={{ color: '#001f3f' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#001f3f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <aside className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm">
            <h3 className="text-lg font-bold mb-4">Order Summary</h3>
            <div className="text-sm text-slate-600 mb-4">Price <span className="float-right">₹ {subtotal.toLocaleString('en-IN')}</span></div>
            <div className="text-sm text-slate-600 mb-4">GST (18%) <span className="float-right">₹ {Math.round(gst).toLocaleString('en-IN')}</span></div>
            <div className="border-t border-slate-200 pt-4 mt-4">
              <div className="text-base text-slate-800 font-bold">Total <span className="float-right">₹ {Math.round(cartTotal).toLocaleString('en-IN')}</span></div>
            </div>

            <div className="mt-6 space-y-2">
              <button onClick={handleProceedCheckout} disabled={processingCheckout} className="w-full px-4 py-3 bg-[#001f3f] text-white rounded font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                {processingCheckout ? 'Processing...' : 'Proceed to Checkout'}
              </button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
