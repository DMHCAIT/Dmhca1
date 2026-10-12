import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2, ChevronLeft, ChevronRight, X } from "lucide-react";
import { sendOTP } from "@/routes/api/send-otp";
import { verifyOTP } from "@/routes/api/verify-otp";
import { saveSignup } from "@/routes/api/save-signup";
import { saveLogin } from "@/routes/api/save-login";

const titleLogo = "/titlelogo.webp";

export function SignupFlow({ isOpen, onClose, onSuccess, onSwitchToLogin }) {
  const [step, setStep] = useState(1); // 1 | 2 | 3 | 4 (OTP verification)
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    interests: [],
  });
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const focusInputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Focus without scrolling so the modal header stays visible on short screens.
  useEffect(() => {
    if (isOpen) focusInputRef.current?.focus({ preventScroll: true });
  }, [isOpen, step]);

  // Approved specialties to display in signup flow (order-preserved)
  const interests = [
    "All specialties",
    "Cardiology",
    "Radiology",
    "Medicine",
    "Obs & Gynae",
    "Emergency",
    "Orthopedics",
    "Dermatology",
    "General Surgery",
    "Oncology",
    "Endocrinology",
    "Neurology",
    "Pediatrics",
    "Reproductive",
    "Pulmonary",
    "Nutrition",
    "Dental",
    "Gastroenterology",
    "Urology",
    "Management",
  ];
  const [page, setPage] = useState(0);
  const pageSize = 8;
  const maxPages = Math.ceil(interests.length / pageSize);

  const handleNext = () => {
    if (step === 1 && !formData.full_name.trim()) {
      setError("Please enter your full name");
      return;
    }
    if (step === 2 && !formData.email.trim()) {
      setError("Please enter your email");
      return;
    }
    if (step === 3 && formData.interests.length === 0) {
      setError("Please select at least one interest");
      return;
    }
    setError("");
    setStep(step + 1);
  };

  const handleBack = () => {
    setError("");
    setOtp("");
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
    setError("");
    setLoading(true);
    try {
      // Send OTP to email using server function with signup mode
      await sendOTP({
        data: {
          email: formData.email,
          fullName: formData.full_name,
          interests: formData.interests,
          mode: "signup",
        },
      });

      // Move to OTP verification step instead of closing
      setStep(4);
      setOtp("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOTP = async () => {
    setError("");
    setLoading(true);
    try {
      const data = await verifyOTP({ data: { email: formData.email, otp } });

      // Store authentication in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("email", formData.email);
        localStorage.setItem("full_name", formData.full_name);
        localStorage.setItem("interests", JSON.stringify(formData.interests));
        localStorage.setItem("isLoggedIn", "true");
      }

      // Save signup data to database
      try {
        await saveSignup({
          data: {
            email: formData.email,
            fullName: formData.full_name,
            interests: formData.interests,
          },
        });
      } catch (signupError) {
        console.warn("Warning: Could not save signup to database:", signupError);
      }

      // Save login data to database
      try {
        await saveLogin({
          data: {
            userId: data.userId,
            email: formData.email,
            fullName: formData.full_name,
            token: data.token,
          },
        });
      } catch (loginError) {
        console.warn("Warning: Could not save login to database:", loginError);
      }

      // Call onSuccess AFTER verification completes
      onSuccess(data);
      onClose();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to verify OTP");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !mounted) return null;

  // Portal to <body> so ancestors with transform/backdrop-filter (e.g. the header) can't clip the fixed overlay.
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex overflow-y-auto overscroll-contain bg-slate-950/65 p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative m-auto w-full max-w-lg rounded-2xl border border-border bg-card px-4 py-4 text-card-foreground shadow-2xl sm:px-8 sm:py-5">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center bg-card/80 hover:bg-muted rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        {/* Header */}
        <div className="-mx-4 -mt-4 mb-4 rounded-t-2xl border-b border-border bg-muted/40 px-12 pb-3 pt-4 text-center sm:-mx-8 sm:-mt-5 sm:px-8 sm:pb-4 sm:pt-5">
          <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white shadow-sm sm:h-12 sm:w-12">
            <img src={titleLogo} alt="DMHCA" className="h-6 w-auto sm:h-8" />
          </div>
          <h2 className="mb-1 text-xl font-bold text-foreground sm:mb-2 sm:text-2xl md:text-3xl">
            Create Your Account
          </h2>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Join DMHCA to access premium medical education
          </p>
        </div>

        {/* Progress bar */}
        <div className="mb-4 rounded-xl border border-border bg-muted/30 px-3 py-2.5 sm:px-4 sm:py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-foreground">
              Step {step === 4 ? 4 : step} of 4
            </span>
            <div className="text-xs sm:text-sm text-muted-foreground">
              {step === 1 && "Your Information"}
              {step === 2 && "Email Verification"}
              {step === 3 && "Your Interests"}
              {step === 4 && "Verify OTP"}
            </div>
          </div>
          <div className="w-full h-1.5 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-gold rounded-full transition-all duration-300"
              style={{ width: `${(Math.min(step, 4) / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Step 1: Name */}
        {step === 1 && (
          <>
            <div className="mb-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                What's your name?
              </h3>
              <p className="text-sm text-muted-foreground">
                We'll use this to personalize your experience
              </p>
            </div>
            <Input
              type="text"
              placeholder="Full Name"
              value={formData.full_name}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, full_name: e.target.value }));
                setError("");
              }}
              className="h-11 rounded-lg bg-background px-4"
              aria-label="Full Name"
              ref={focusInputRef}
            />
          </>
        )}

        {/* Step 2: Email */}
        {step === 2 && (
          <>
            <div className="mb-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                What's your email?
              </h3>
              <p className="text-sm text-muted-foreground">We'll send you a verification code</p>
            </div>
            <Input
              type="email"
              placeholder="your-email@example.com"
              value={formData.email}
              onChange={(e) => {
                setFormData((prev) => ({ ...prev, email: e.target.value }));
                setError("");
              }}
              className="h-11 rounded-lg bg-background px-4"
              aria-label="Email address"
              ref={focusInputRef}
            />
          </>
        )}

        {/* Step 3: Interests */}
        {step === 3 && (
          <>
            <div className="mb-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                What are your interests?
              </h3>
              <p className="text-sm text-muted-foreground">
                Select up to 3 specialties that interest you most
              </p>
            </div>
            <div className="grid grid-cols-2 gap-1.5 md:gap-2 mb-3 md:mb-4">
              {interests.slice(page * pageSize, page * pageSize + pageSize).map((interest) => (
                <button
                  key={interest}
                  onClick={() => toggleInterest(interest)}
                  aria-pressed={formData.interests.includes(interest)}
                  className={`px-3 py-2.5 rounded-lg border text-xs md:text-sm font-medium transition-colors ${
                    formData.interests.includes(interest)
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:bg-muted"
                  }`}
                >
                  {interest}
                </button>
              ))}
            </div>
            <div className="mb-3 md:mb-4">
              <span
                role="button"
                onClick={() => setPage((p) => (p < maxPages - 1 ? p + 1 : 0))}
                className="text-xs md:text-sm text-navy-deep dark:text-gold cursor-pointer select-none px-2 py-1 rounded-md"
              >
                {page < maxPages - 1 ? "Show more" : "Show less"}
              </span>
            </div>
            <p className="text-xs text-muted-foreground mb-3 md:mb-4">
              Selected: {formData.interests.length}/3
            </p>
          </>
        )}

        {/* Step 4: OTP Verification */}
        {step === 4 && (
          <>
            <div className="mb-3">
              <h3 className="text-base md:text-lg font-semibold text-foreground mb-1">
                Verify Your Email
              </h3>
              <p className="text-sm text-muted-foreground">
                Enter the 6-digit code sent to{" "}
                <span className="font-semibold">{formData.email}</span>
              </p>
            </div>
            <Input
              type="text"
              placeholder="000000"
              value={otp}
              onChange={(e) => {
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6));
                setError("");
              }}
              className="mb-2 h-12 rounded-lg bg-background text-center text-xl md:text-2xl tracking-widest font-mono"
              aria-label="Verification code"
              maxLength={6}
              ref={focusInputRef}
            />
            <p className="text-xs text-muted-foreground text-center">
              OTP will expire in 10 minutes
            </p>
          </>
        )}

        {error && (
          <p className="text-red-600 text-xs md:text-sm mb-3 md:mb-4 p-2 md:p-3 bg-red-50 rounded-lg text-center">
            {error}
          </p>
        )}

        {/* Buttons */}
        <div className="flex gap-2 md:gap-3 mt-4">
          <Button
            onClick={handleBack}
            variant="outline"
            disabled={step === 1 || loading}
            className="flex-1 h-11 rounded-lg text-sm"
          >
            <ChevronLeft className="h-3 md:h-4 w-3 md:w-4 mr-1" />
            Back
          </Button>

          {step < 3 ? (
            <Button
              onClick={handleNext}
              disabled={loading}
              className="flex-1 h-11 rounded-lg bg-primary hover:bg-primary/90 text-sm"
            >
              Next
              <ChevronRight className="h-3 md:h-4 w-3 md:w-4 ml-1" />
            </Button>
          ) : step === 3 ? (
            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="flex-1 h-11 rounded-lg bg-primary hover:bg-primary/90 text-sm"
            >
              {loading ? <Loader2 className="mr-2 h-3 md:h-4 w-3 md:w-4 animate-spin" /> : null}
              Send OTP
            </Button>
          ) : (
            <Button
              onClick={handleVerifyOTP}
              disabled={loading || otp.length !== 6}
              className="flex-1 h-11 rounded-lg bg-primary hover:bg-primary/90 text-sm"
            >
              {loading ? <Loader2 className="mr-2 h-3 md:h-4 w-3 md:w-4 animate-spin" /> : null}
              Verify & Create Account
            </Button>
          )}
        </div>

        {/* Already have account link */}
        <div className="text-center border-t pt-3 mt-3">
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <button
              onClick={onSwitchToLogin}
              className="text-foreground font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default SignupFlow;
