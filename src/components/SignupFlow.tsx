import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { sendOTP } from '@/routes/api/send-otp';
import { verifyOTP } from '@/routes/api/verify-otp';
import { saveSignup } from '@/routes/api/save-signup';
import { saveLogin } from '@/routes/api/save-login';

const titleLogo = '/titlelogo.webp';

export function SignupFlow({ isOpen, onClose, onSuccess, onSwitchToLogin }) {
  const [step, setStep] = useState(1); // 1 | 2 | 3 | 4 (OTP verification)
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    interests: [],
  });
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const interests = [
    'Gynaecology and Obstetrics',
    'Gastroenterology',
    'Nephrology',
    'Pulmonology',
    'Rehabilitation',
    'Internal Medicine',
    'Cardiology',
    'Radiology',
    'Dermatology',
    'Oncology',
    'Orthopedics',
    'Neurology',
  ];

  const handleNext = () => {
    if (step === 1 && !formData.full_name.trim()) {
      setError('Please enter your full name');
      return;
    }
    if (step === 2 && !formData.email.trim()) {
      setError('Please enter your email');
      return;
    }
    if (step === 3 && formData.interests.length === 0) {
      setError('Please select at least one interest');
      return;
    }
    setError('');
    setStep(step + 1);
  };

  const handleBack = () => {
    setError('');
    setOtp('');
    setStep(step - 1);
  };

  const toggleInterest = (interest) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests.slice(0, 2), interest].slice(-3), // Max 3
    }));
  };

  const handleSubmit = async () => {
    setError('');
    setLoading(true);
    try {
      // Send OTP to email using server function with signup mode
      await sendOTP({ data: { email: formData.email, fullName: formData.full_name, interests: formData.interests, mode: 'signup' } });

      // Move to OTP verification step instead of closing
      setStep(4);
      setOtp('');
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
      const data = await verifyOTP({ data: { email: formData.email, otp } });

      // Store authentication in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('email', formData.email);
        localStorage.setItem('full_name', formData.full_name);
        localStorage.setItem('interests', JSON.stringify(formData.interests));
        localStorage.setItem('isLoggedIn', 'true');
      }

      // Save signup data to database
      try {
        await saveSignup({
          data: {
            email: formData.email,
            fullName: formData.full_name,
            interests: formData.interests,
          }
        });
      } catch (signupError) {
        console.warn('Warning: Could not save signup to database:', signupError);
      }

      // Save login data to database
      try {
        await saveLogin({ 
          data: {
            userId: data.userId,
            email: formData.email,
            fullName: formData.full_name,
            token: data.token,
          }
        });
      } catch (loginError) {
        console.warn('Warning: Could not save login to database:', loginError);
      }

      // Call onSuccess AFTER verification completes
      onSuccess(data);
      onClose();
    } catch (err) {
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

        {/* Header */}
        <div className="mb-8 text-center">
          <img src={titleLogo} alt="DMHCA" className="h-12 w-auto mb-4 mx-auto" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-slate-100 mb-2">Create Your Account</h2>
          <p className="text-gray-600 text-sm">Join DMHCA to access premium medical education</p>
        </div>

        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-navy-deep">Step {step === 4 ? 4 : step} of 4</span>
            <div className="text-sm text-gray-500">{step === 1 && 'Your Information'}{step === 2 && 'Email Verification'}{step === 3 && 'Your Interests'}{step === 4 && 'Verify OTP'}</div>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-navy-deep to-blue-600 rounded-full transition-all duration-300"
              style={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Name */}
        {step === 1 && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">What's your name?</h3>
              <p className="text-sm text-gray-600">We'll use this to personalize your experience</p>
            </div>
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, full_name: e.target.value }));
                setError('');
              }}
              className="mb-4"
              autoFocus
            />
          </>
        )}

        {/* Step 2: Email */}
        {step === 2 && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">What's your email?</h3>
              <p className="text-sm text-gray-600">We'll send you a verification code</p>
            </div>
            <Input
              type="email"
              placeholder="your-email@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
                setError('');
              }}
              className="mb-4"
              autoFocus
            />
          </>
        )}

        {/* Step 3: Interests */}
        {step === 3 && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">What are your interests?</h3>
              <p className="text-sm text-gray-600">Select up to 3 specialties that interest you most</p>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-4 max-h-48 overflow-y-auto">
              {interests.map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.interests.includes(interest)
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mb-4">
              Selected: {formData.interests.length}/3
            </p>
          </>
        )}

        {/* Step 4: OTP Verification */}
        {step === 4 && (
          <>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100 mb-1">Verify Your Email</h3>
              <p className="text-sm text-gray-600">
                Enter the 6-digit code sent to <span className="font-semibold">{formData.email}</span>
              </p>
            </div>
            <Input
              type="text"
              placeholder="000000"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value.replace(/\D/g, '').slice(0, 6));
                setError('');
              }}
              className="mb-4 text-center text-2xl tracking-widest font-mono"
              maxLength={6}
              autoFocus
            />
            <p className="text-xs text-gray-500 text-center">OTP will expire in 10 minutes</p>
          </>
        )}

        {error && <p className="text-red-600 text-sm mb-4 p-3 bg-red-50 rounded-lg text-center">{error}</p>}

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={step === 1 || loading}
            className="flex-1"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back
          </Button>

          {step < 3 ? (
            <Button
              onClick={handleNext}
              disabled={loading}
              className="flex-1 bg-navy-deep hover:bg-navy"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          ) : step === 3 ? (
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 bg-navy-deep hover:bg-navy"
            >
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Send OTP
            </Button>
          ) : (
            <Button
              onClick={handleVerifyOTP}
              disabled={loading || otp.length !== 6}
              className="flex-1 bg-navy-deep hover:bg-navy"
            >
              {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
              Verify & Create Account
            </Button>
          )}
        </div>

        {/* Already have account link */}
        <div className="text-center border-t pt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <button
              onClick={onSwitchToLogin}
              className="text-navy-deep font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignupFlow;
