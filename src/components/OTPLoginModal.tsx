import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, X } from 'lucide-react';
import { sendOTP } from '@/routes/api/send-otp';
import { verifyOTP } from '@/routes/api/verify-otp';
import { saveLogin } from '@/routes/api/save-login';
import { saveSignup } from '@/routes/api/save-signup';

const titleLogo = '/titlelogo.webp';

export function OTPLoginModal({ isOpen, onClose, onSuccess, onSwitchToSignup }) {
  const [step, setStep] = useState('email'); // email | otp
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSendOTP = async () => {
    setError('');
    setLoading(true);
    try {
      await sendOTP({ data: { email, mode: 'login' } });
      setStep('otp');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setError('');
    setLoading(true);
    try {
      const data = await verifyOTP({ data: { email, otp } });

      // Store authentication in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('email', email);
        
        // Use full_name from localStorage (set during signup) or from verify response
        const fullName = localStorage.getItem('full_name') || data.fullName || '';
        localStorage.setItem('full_name', fullName);
        
        localStorage.setItem('isLoggedIn', 'true');
      }

      // Check if this is a signup flow
      const signupData = typeof window !== 'undefined' ? sessionStorage.getItem('signupData') : null;
      const isSignup = !!signupData;

      // Save signup data to database if signup flow
      if (isSignup) {
        try {
          const signup = JSON.parse(signupData || '{}');
          console.log('[OTP] Saving signup data:', signup);
          await saveSignup({
            data: {
              email: email,
              fullName: data.fullName || signup.full_name,
              interests: signup.interests,
            }
          });
          console.log('[OTP] Signup saved successfully');
          if (typeof window !== 'undefined') {
            sessionStorage.removeItem('signupData');
          }
        } catch (signupError) {
          console.warn('[OTP] Warning: Could not save signup to database:', signupError);
          // Continue even if saving to DB fails - don't show error to user
        }
      }

      // Save login data to database (for all users - signup or login)
      try {
        console.log('[OTP] Saving login data for user:', data.userId);
        await saveLogin({ 
          data: {
            userId: data.userId,
            email: email,
            fullName: data.fullName,
            token: data.token,
          }
        });
        console.log('[OTP] Login saved successfully');
      } catch (loginError) {
        console.warn('[OTP] Warning: Could not save login to database:', loginError);
        // Continue even if saving to DB fails - don't show error to user
      }

      onSuccess(data);
      onClose();
    } catch (err) {
      console.error('[OTP] Verification error:', err);
      setError(err instanceof Error ? err.message : 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-8 max-w-lg w-full shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          aria-label="Close"
        >
          <X className="h-6 w-6 text-gray-600 hover:text-gray-900" />
        </button>

        <div className="mb-8 text-center">
          <img src={titleLogo} alt="DMHCA" className="h-12 w-auto mb-4 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Login to DMHCA</h2>
          <p className="text-gray-600 text-sm">Enter your email and verification code to access your dashboard</p>
        </div>

        {step === 'email' && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 dark:text-slate-100 mb-3">Email Address</label>
              <Input
                type="email"
                placeholder="your-email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className="mb-4"
                autoFocus
              />
            </div>
            <Button 
              onClick={handleSendOTP} 
              disabled={loading || !email}
              className="w-full bg-navy-deep hover:bg-navy"
            >
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Send OTP
            </Button>
          </>
        )}

        {step === 'otp' && (
          <>
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 dark:text-slate-100 mb-3">Verification Code</label>
              <p className="text-sm text-gray-600 mb-3">
                Enter the 6-digit code sent to <span className="font-semibold">{email}</span>
              </p>
              <Input
                type="text"
                placeholder="000000"
                value={otp}
                onChange={(e) => {
                  setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
                  setError('');
                }}
                className="mb-2 text-center text-2xl tracking-widest font-mono"
                maxLength={6}
                autoFocus
              />
            </div>
            <Button 
              onClick={handleVerifyOTP} 
              disabled={loading || otp.length !== 6}
              className="w-full bg-navy-deep hover:bg-navy"
            >
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Verify OTP
            </Button>
          </>
        )}

        {error && <p className="text-red-600 text-sm mb-4 p-3 bg-red-50 rounded-lg text-center">{error}</p>}

        {/* Don't have account link */}
        <div className="text-center border-t pt-4">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={onSwitchToSignup}
              className="text-navy-deep font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
