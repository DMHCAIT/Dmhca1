import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Check } from 'lucide-react';
import { OTPLoginModal } from './OTPLoginModal';
import { StudentProfileForm } from './StudentProfileForm';

export function EnrollmentFlow({ courseId, courseName, amount, onClose }) {
  const [step, setStep] = useState('login'); // login | profile | payment | success
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [enrollmentData, setEnrollmentData] = useState({
    userId: typeof window !== 'undefined' ? localStorage.getItem('userId') : null,
    enrollmentId: null,
    token: typeof window !== 'undefined' ? localStorage.getItem('token') : null,
  });

  const handleLoginSuccess = (data) => {
    setEnrollmentData((prev) => ({ ...prev, userId: data.userId, token: data.token }));
    setStep('profile');
  };

  const handleProfileSkip = () => {
    setStep('payment');
  };

  const handlePaymentMethodSelect = async (method) => {
    setError('');
    setLoading(true);
    try {
      // Create enrollment
      const enrollRes = await fetch('/api/enroll', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseId,
          userId: enrollmentData.userId,
          paymentMethod: method,
        }),
      });
      const enrollData = await enrollRes.json();
      if (!enrollRes.ok) throw new Error(enrollData.error || 'Failed to create enrollment');

      setEnrollmentData((prev) => ({ ...prev, enrollmentId: enrollData.enrollment.id }));

      if (method === 'razorpay') {
        handleRazorpayPayment(enrollData.enrollment.id);
      } else if (method === 'loan') {
        handleLoanRedirect(enrollData.enrollment.id);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRazorpayPayment = async (enrollmentId) => {
    try {
      // Create Razorpay order
      const orderRes = await fetch('/api/razorpay-create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          enrollmentId,
          userId: enrollmentData.userId,
        }),
      });
      const orderData = await orderRes.json();
      if (!orderRes.ok) throw new Error(orderData.error || 'Failed to create order');

      // Load Razorpay script dynamically
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        // Initialize Razorpay checkout
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID || 'YOUR_RAZORPAY_KEY_ID',
          order_id: orderData.order.id,
          amount: orderData.order.amount,
          currency: orderData.order.currency,
          handler: async (response) => {
            await verifyPayment(response);
          },
          prefill: {
            email: localStorage.getItem('email') || enrollmentData.userId,
          },
        };

        const razor = new (window as any).Razorpay(options);
        razor.open();
      };
      script.onerror = () => {
        throw new Error('Failed to load Razorpay script');
      };
      document.head.appendChild(script);
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyPayment = async (response) => {
    try {
      const verifyRes = await fetch('/api/razorpay-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        }),
      });
      const data = await verifyRes.json();
      if (!verifyRes.ok) throw new Error(data.error || 'Payment verification failed');
      setStep('success');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleLoanRedirect = async (enrollmentId) => {
    try {
      const loanRes = await fetch('/api/loan-redirect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          courseId,
          enrollmentId,
          userId: enrollmentData.userId,
        }),
      });
      const loanData = await loanRes.json();
      if (!loanRes.ok) throw new Error(loanData.error || 'Failed to redirect to loan partner');
      window.open(loanData.url, '_blank');
      setStep('success');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Enroll in {courseName}</h2>

        {step === 'login' && (
          <>
            <p className="text-gray-600 mb-4">Step 1 of 3: Sign In to continue</p>
            <Button onClick={() => setShowOtpModal(true)} className="w-full mb-3">
              Sign In / Sign Up with OTP
            </Button>
          </>
        )}

        {step === 'profile' && (
          <>
            <p className="text-gray-600 mb-4">Step 2 of 3: Complete your profile (optional)</p>
            <Button onClick={() => setShowProfileModal(true)} className="w-full mb-3">
              Complete Profile
            </Button>
            <Button onClick={handleProfileSkip} variant="outline" className="w-full">
              Skip to Payment
            </Button>
          </>
        )}

        {step === 'payment' && (
          <>
            <p className="text-gray-600 mb-4">Step 3 of 3: Choose Payment Method</p>
            <p className="text-lg font-bold mb-4">Amount: ₹{amount}</p>
            <Button
              onClick={() => handlePaymentMethodSelect('razorpay')}
              disabled={loading}
              className="w-full mb-3"
            >
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Pay Now with Razorpay
            </Button>
            <Button
              onClick={() => handlePaymentMethodSelect('loan')}
              disabled={loading}
              variant="outline"
              className="w-full"
            >
              Apply for Education Loan
            </Button>
          </>
        )}

        {step === 'success' && (
          <>
            <div className="text-center py-6">
              <Check className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Enrollment Successful!</h3>
              <p className="text-gray-600 mb-4">Check your email for confirmation. You can now access the course.</p>
              <Button onClick={onClose} className="w-full">
                Go to Dashboard
              </Button>
            </div>
          </>
        )}

        {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}

        <OTPLoginModal isOpen={showOtpModal} onClose={() => setShowOtpModal(false)} onSuccess={handleLoginSuccess} />
        <StudentProfileForm
          isOpen={showProfileModal}
          onClose={() => setShowProfileModal(false)}
          onSuccess={handleProfileSkip}
        />
      </div>
    </div>
  );
}
