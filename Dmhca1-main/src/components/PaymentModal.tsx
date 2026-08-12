import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Check, X } from 'lucide-react';
import { createEnrollment } from '@/routes/api/enroll';
import { createRazorpayOrder } from '@/routes/api/razorpay-create-order';
import { verifyRazorpayPayment } from '@/routes/api/razorpay-verify';

export function PaymentModal({ isOpen, onClose, applicationData, amount, courseName }) {
  const [step, setStep] = useState('payment'); // payment | success | error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleRazorpayPayment = async () => {
    setLoading(true);
    setError('');
    try {
      // Re-validate data fresh in this handler
      const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
      
      const courseTitle = (applicationData?.courseTitle || courseName || 'Course').trim() || 'Course';
      const studentName = (applicationData?.fullName || 'Student').trim() || 'Student';
      const studentEmail = (applicationData?.email || '').trim();

      console.log('[Razorpay] Handler called with:', { userId, courseTitle, studentName, studentEmail });

      // Use validated data from props
      if (!courseTitle) {
        throw new Error('courseName is required');
      }
      if (!studentName) {
        throw new Error('studentName is required');
      }
      if (!studentEmail) {
        throw new Error('studentEmail is required');
      }
      if (!userId) {
        throw new Error('userId not found - please login again');
      }

      console.log('Step 1: Creating enrollment with validated data:', {
        courseTitle,
        studentName,
        studentEmail,
        userId,
      });

      const enrollData = await createEnrollment({
        courseId: applicationData?.id || '',
        courseName: courseTitle,
        userId: userId,
        paymentMethod: 'razorpay',
        studentName: studentName,
        studentEmail: studentEmail,
      });

      if (!enrollData || !enrollData.enrollment?.id) {
        throw new Error('Failed to create enrollment');
      }

      console.log('Step 2: Creating Razorpay order...');
      const orderData = await createRazorpayOrder({
        amount,
        enrollmentId: enrollData.enrollment.id,
        userId: userId,
        courseName: courseTitle,
        currency: 'INR',
      });

      if (!orderData || !orderData.order?.id) {
        throw new Error('Failed to create order');
      }

      console.log('Step 3: Opening Razorpay checkout...');
      // Load Razorpay script dynamically
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        const options = {
          key: import.meta.env.VITE_RAZORPAY_KEY_ID,
          order_id: orderData.order.id,
          amount: orderData.order.amount,
          currency: orderData.order.currency,
          handler: async (response) => {
            await verifyPayment(response, enrollData.enrollment.id, studentEmail, courseTitle, studentName);
          },
          prefill: {
            name: studentName,
            email: studentEmail,
            contact: applicationData?.phone,
          },
        };

        try {
          const razor = new (window as any).Razorpay(options);
          razor.open();
        } catch (razorErr) {
          setError('Failed to open payment gateway: ' + (razorErr instanceof Error ? razorErr.message : 'Unknown error'));
          setStep('error');
        }
      };
      script.onerror = () => {
        setError('Failed to load Razorpay script');
        setStep('error');
      };
      document.head.appendChild(script);
    } catch (err) {
      console.error('Payment error:', err);
      setError(err instanceof Error ? err.message : 'Payment failed');
      setStep('error');
    } finally {
      setLoading(false);
    }
  };

  const verifyPayment = async (response: any, enrollmentId: string, studentEmail: string, courseTitle: string, studentName: string) => {
    try {
      console.log('Step 4: Verifying payment with:', { studentEmail, courseTitle, studentName });

      await verifyRazorpayPayment({
        razorpay_order_id: response.razorpay_order_id,
        razorpay_payment_id: response.razorpay_payment_id,
        razorpay_signature: response.razorpay_signature,
        enrollmentId,
        studentEmail: studentEmail,
        courseName: courseTitle,
        studentName: studentName,
      });

      console.log('Payment verified successfully!');
      setStep('success');
    } catch (err) {
      console.error('Verification error:', err);
      setError(err instanceof Error ? err.message : 'Verification failed');
      setStep('error');
    }
  };

  const handleLoanRedirect = async () => {
    setLoading(true);
    setError('');
    try {
      // Re-validate data fresh in this handler
      const userId = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
      
      const courseTitle = (applicationData?.courseTitle || courseName || 'Course').trim() || 'Course';
      const studentName = (applicationData?.fullName || 'Student').trim() || 'Student';
      const studentEmail = (applicationData?.email || '').trim();

      console.log('[Loan] Handler called with:', { userId, courseTitle, studentName, studentEmail });

      // Validate all required fields
      if (!courseTitle) {
        throw new Error('courseName is required');
      }
      if (!studentName) {
        throw new Error('studentName is required');
      }
      if (!studentEmail) {
        throw new Error('studentEmail is required');
      }
      if (!userId) {
        throw new Error('userId not found - please login again');
      }

      console.log('Creating loan enrollment with validated data...');
      const enrollData = await createEnrollment({
        courseId: applicationData?.id || '',
        courseName: courseTitle,
        userId: userId,
        paymentMethod: 'loan',
        studentName: studentName,
        studentEmail: studentEmail,
      });

      const loanUrl = import.meta.env.VITE_LOAN_PARTNER_URL;

      if (!loanUrl) {
        throw new Error('Loan partner URL not configured');
      }

      const redirectUrl = `${loanUrl}?enrollment_id=${enrollData.enrollment.id}&student_name=${encodeURIComponent(studentName)}&student_email=${encodeURIComponent(studentEmail)}&course=${encodeURIComponent(courseTitle)}&amount=${amount}`;

      console.log('Redirecting to loan partner...');
      window.open(redirectUrl, '_blank');
      setStep('success');
    } catch (err) {
      console.error('Loan error:', err);
      setError(err instanceof Error ? err.message : 'Loan redirection failed');
      setStep('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Choose Payment Method</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        {step === 'payment' && (
          <>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-slate-700 mb-2">
                <span className="font-semibold">Course:</span> {courseName || applicationData?.courseTitle}
              </p>
              <p className="text-lg font-bold text-slate-900">
                Amount: ₹{amount?.toLocaleString('en-IN')}
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleRazorpayPayment}
                disabled={loading}
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Pay with Razorpay (UPI/Card)
              </button>

              <button
                onClick={handleLoanRedirect}
                disabled={loading}
                className="w-full px-4 py-3 bg-white border-2 border-slate-300 hover:border-slate-400 text-slate-900 font-bold rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Apply for Education Loan
              </button>
            </div>

            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 rounded-lg p-3 flex items-start gap-2">
                <X className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-red-700">
                  <p className="font-semibold mb-1">Error:</p>
                  <p className="break-words">{typeof error === 'string' ? error : JSON.stringify(error)}</p>
                </div>
              </div>
            )}
          </>
        )}

        {step === 'success' && (
          <div className="text-center py-6">
            <Check className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Payment Initiated!</h3>
            <p className="text-gray-600 mb-4">
              Your enrollment has been created. You will receive a confirmation email shortly with course access details.
            </p>
            <button
              onClick={onClose}
              className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
            >
              Close
            </button>
          </div>
        )}

        {step === 'error' && (
          <div className="text-center py-6">
            <X className="h-12 w-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2 text-red-700">Payment Failed</h3>
            <p className="text-gray-600 mb-4 text-sm break-words">{error}</p>
            <div className="space-y-2">
              <button
                onClick={() => {
                  setStep('payment');
                  setError('');
                }}
                className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
              >
                Try Again
              </button>
              <button
                onClick={onClose}
                className="w-full px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold rounded-lg transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
