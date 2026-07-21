import React, { useEffect, useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { supabaseClient } from '@/lib/supabase';
import { createEnrollment } from '@/routes/api/enroll';
import { createRazorpayOrder } from '@/routes/api/razorpay-create-order';
import { verifyRazorpayPayment } from '@/routes/api/razorpay-verify';
import { getCourse } from '@/data/courses';

export const Route = createFileRoute('/payment')({
  component: PaymentPage,
});

function PaymentPage() {
  const [application, setApplication] = useState<any>(null);
  const [amount, setAmount] = useState<number>(0);
  const [basePrice, setBasePrice] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [showRazorpayFee, setShowRazorpayFee] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const appId = params.get('applicationId');
    const amt = params.get('amount');
    const basePriceParam = params.get('basePrice');
    
    if (amt) setAmount(Number(amt));
    if (basePriceParam) {
      setBasePrice(Number(basePriceParam));
    }
    if (appId) {
      (async () => {
        try {
          const { data, error } = await supabaseClient.from('applications').select('*').eq('id', appId).single();
          if (error) {
            console.error('Failed to fetch application', error);
            setError('Failed to load application data');
            return;
          }
          // attach auth user id if application record doesn't have it
          let app = data;
          try {
            if (app && !app.user_id) {
              const { data: authData } = await supabaseClient.auth.getUser();
              if (authData?.user?.id) {
                app.user_id = authData.user.id;
              }
            }
          } catch (e) {
            // ignore
          }
          setApplication(app);
        } catch (e) {
          console.error('Failed to fetch application', e);
        }
      })();
    }
  }, []);

  // startRazorpay: creates order and opens Razorpay checkout
  const startRazorpay = async (preferredMethod?: 'upi' | 'card') => {
    setLoading(true);
    setError('');
    try {
      // Resolve userId - optional for guest checkout
      let userId: string | null = null;
      try {
        const ls = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
        if (ls) userId = ls;
        else if (application?.user_id) userId = String(application.user_id);
        else {
          const { data: authData } = await supabaseClient.auth.getUser();
          if (authData?.user?.id) userId = authData.user.id;
        }
      } catch (e) {
        // userId remains null for guest checkout
      }

      if (!application) throw new Error('Application not found');

      const courseName = application.course_name || 'Course';
      const studentName = application.full_name || '';
      const studentEmail = application.email || '';

      const sendAmount = amount && amount > 0 ? amount : total;
      const numericAmount = Number(sendAmount || 0);

      console.log('[Payment] Creating Razorpay order with:', {
        amount: numericAmount,
        enrollmentId: application.id,
        courseName,
        studentName,
        studentEmail,
      });

      const orderData = await createRazorpayOrder({
        data: {
          amount: numericAmount,
          enrollmentId: application.id || null,
          userId: userId || null,
          courseName,
          studentName: studentName || null,
          studentEmail: studentEmail || null,
          currency: 'INR',
        },
      });

      console.log('[Payment] Order response:', orderData);

      if (!orderData?.order?.id) throw new Error('Invalid order data from server');

      await new Promise<void>((resolve, reject) => {
        if ((window as any).Razorpay) return resolve();
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load Razorpay script'));
        document.head.appendChild(script);
      });

      const options: any = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        order_id: orderData.order.id,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        ...(preferredMethod && { method: preferredMethod }),
        handler: async (response: any) => {
          try {
            await verifyRazorpayPayment({
              data: {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                enrollmentId: application.id || null,
                studentEmail: application.email,
                courseName: application.course_name,
                studentName: application.full_name,
                amount: numericAmount,
              },
            });
            setSuccess(true);
          } catch (err) {
            setError('Verification failed');
          }
        },
        prefill: {
          name: application.full_name,
          email: application.email,
          contact: application.phone,
        },
      };

      const razor = new (window as any).Razorpay(options);
      razor.open();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Payment failed';
      console.error('[Payment] Error:', errorMsg, err);
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const formatINR = (n:number) => '₹' + Math.round(n).toLocaleString('en-IN');
  // Use basePrice if available, otherwise derive from amount
  const subtotal = basePrice > 0 ? basePrice : Math.round(amount / (1 + 0.18 + 0.04)) || 0;
  const gst = Math.round(subtotal * 0.18) || 0;
  const razorpayFee = Math.round(subtotal * 0.04) || 0;
  const total = subtotal + gst + razorpayFee || 0;

  const handleRazorpayUPI = () => startRazorpay();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container-x">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 p-8">
              <h2 className="text-3xl font-extrabold mb-3">Complete Your Payment</h2>
              <p className="text-sm text-slate-600 mb-6">Secure payment powered by Razorpay. You will receive a confirmation email after successful payment.</p>

              {application ? (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded">
                    <div className="text-sm text-slate-500">Student</div>
                    <div className="font-semibold text-slate-900">{application.full_name}</div>
                    <div className="text-sm text-slate-600">{application.email} • {application.phone}</div>
                  </div>

                  <div className="p-4 bg-white rounded border">
                    <div className="text-sm text-slate-500">Course</div>
                    <div className="font-semibold text-slate-900">{application.course_name}</div>
                  </div>

                  <div className="p-4 bg-white rounded border">
                    <div className="text-sm text-slate-500 mb-2">Amount Details</div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                      <div>Course Fee</div><div className="text-right">{formatINR(subtotal)}</div>
                      <div>GST (18%)</div><div className="text-right">{formatINR(gst)}</div>
                      {showRazorpayFee && (
                        <>
                          <div>Razorpay Fee (4%)</div><div className="text-right">{formatINR(razorpayFee)}</div>
                        </>
                      )}
                      <div className="col-span-2 border-t mt-2 pt-2 flex justify-between font-bold">
                        Total <div>{formatINR(showRazorpayFee ? total : subtotal + gst)}</div>
                      </div>
                    </div>
                  </div>

                  {/* suppress debug error UI — show only success message after payment */}
                  {success && <div className="mt-2 text-emerald-700">Payment successful — confirmation will be emailed.</div>}
                </div>
              ) : (
                <div>Loading application...</div>
              )}
            </div>

            <aside className="p-6 bg-gradient-to-b from-white to-slate-50 border-l">
              <div className="sticky top-6">
                <h3 className="text-lg font-semibold mb-4">Pay Now</h3>
                <div className="space-y-3">
                  <button type="button" onClick={() => {
                    setShowRazorpayFee(true);
                    handleRazorpayUPI();
                  }} onKeyDown={(e) => e.key === 'Enter' && handleRazorpayUPI()} tabIndex={0} aria-label="Pay with UPI/Card" data-test="pay-upi-card" className="w-full px-4 py-3 bg-[#001f3f] text-white rounded-md font-semibold z-50">Pay with UPI/Card</button>
                  <button type="button" onClick={() => {
                    const loanUrl = import.meta.env.VITE_LOAN_PARTNER_URL || process.env.VITE_LOAN_PARTNER_URL;
                    const q = new URLSearchParams({ applicationId: String(application?.id || ''), amount: String(total), name: application?.full_name || '', email: application?.email || '' }).toString();
                    if (loanUrl && typeof window !== 'undefined') {
                      window.location.href = `${loanUrl}?${q}`;
                    } else {
                      setError('Loan partner URL not configured');
                    }
                  }} className="w-full px-4 py-3 border border-slate-200 rounded-md text-slate-700">Pay by Loan</button>
                </div>
                <div className="mt-4 text-xs text-slate-500">By proceeding you agree to our terms and privacy policy.</div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
