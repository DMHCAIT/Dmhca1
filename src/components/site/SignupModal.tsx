import { useState } from "react";
import { X } from "lucide-react";
import { supabaseClient } from "@/lib/supabase";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSignupSuccess: () => void;
}

export function SignupModal({ isOpen, onClose, onSignupSuccess }: SignupModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    try {
      // Sign up with Supabase
      const { data, error: signupError } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          },
        },
      });

      if (signupError) {
        setError(signupError.message);
      } else if (data.user) {
        setSuccessMessage("Sign up successful! You can now log in.");
        setFullName("");
        setEmail("");
        setPassword("");
        
        // Trigger success callback
        setTimeout(() => {
          onSignupSuccess();
          onClose();
        }, 1500);
      }
    } catch (err) {
      setError("An unexpected error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-bold text-navy-deep mb-1">Create Account</h2>
        <p className="text-sm text-muted-foreground mb-6">Join DMHCA to access exclusive content</p>

        <form onSubmit={handleSignup} className="space-y-4">
          {/* Question 1: Full Name */}
          <div>
            <label className="block text-sm font-medium text-navy-deep mb-2">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-deep focus:outline-none"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Question 2: Email */}
          <div>
            <label className="block text-sm font-medium text-navy-deep mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-deep focus:outline-none"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Question 3: Password */}
          <div>
            <label className="block text-sm font-medium text-navy-deep mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy-deep focus:outline-none"
              placeholder="••••••••"
              required
            />
            <p className="text-xs text-muted-foreground mt-1">At least 6 characters</p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {successMessage && (
            <div className="p-3 bg-green-50 text-green-700 rounded-lg text-sm">
              {successMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-navy-deep text-white rounded-lg font-semibold hover:bg-navy transition disabled:opacity-50"
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>

        <p className="text-xs text-gray-600 text-center mt-4">
          By signing up, you agree to our terms and privacy policy
        </p>
      </div>
    </div>
  );
}
