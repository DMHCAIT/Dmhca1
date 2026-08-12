import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabaseClient } from "@/lib/supabase";
import { courses } from "@/data/courses";
import { PaymentModal } from "@/components/PaymentModal";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: 'Apply for a Course — DMHCA' },
      { name: 'description', content: 'Apply for medical courses at DMHCA' },
    ],
  }),
  component: ApplicationForm,
});

function ApplicationForm() {
  const [formData, setFormData] = useState({
    program: "",
    course: "",
    fullName: "",
    email: "",
    phone: "",
    qualification: "",
    experience: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [applicationData, setApplicationData] = useState<any>(null);
  const [coursePrice, setCoursePrice] = useState(0);
  const [checkoutAmount, setCheckoutAmount] = useState<number | null>(null);

  // Get course and program from query parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const courseParam = params.get("course");
      const programParam = params.get("program");
      const fromParam = params.get("from");
      const amountParam = params.get("amount");
      
      // Store amount from URL if coming from cart
      if (amountParam) {
        setCheckoutAmount(Number(amountParam));
      }
      
      // Normalize program value: "Certificate" -> "Certificate Course"
      let normalizedProgram = programParam ? decodeURIComponent(programParam) : "";
      if (normalizedProgram === "Certificate") {
        normalizedProgram = "Certificate Course";
      }
      
      setFormData((prev) => ({
        ...prev,
        course: courseParam ? decodeURIComponent(courseParam) : "",
        program: normalizedProgram,
      }));

      // If coming from cart and no explicit course param, prefill from localStorage.cart
      try {
        if (!courseParam && fromParam === 'cart') {
          const raw = localStorage.getItem('cart');
          const parsed = raw ? JSON.parse(raw) : [];
          if (Array.isArray(parsed) && parsed.length > 0) {
            // use first item to prefill program/course
            const first = parsed[0];
            const found = courses.find(c => c.slug === first.slug || c.title === first.title);
            if (found) {
              setFormData(prev => ({ ...prev, course: found.title, program: found.program || prev.program }));
              setCoursePrice(found.priceINR || 0);
            }
          }
        }
      } catch (e) {}
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validate form
      if (!formData.fullName.trim()) {
        throw new Error("Full name is required");
      }
      if (!formData.email.trim()) {
        throw new Error("Email is required");
      }
      if (!formData.phone.trim()) {
        throw new Error("Phone number is required");
      }

      // Determine current user id (if logged in)
      let currentUserId: string | null = null;
      try {
        const ls = typeof window !== 'undefined' ? localStorage.getItem('userId') : null;
        if (ls) currentUserId = ls;
        else {
          const { data: authData } = await supabaseClient.auth.getUser();
          if (authData?.user?.id) currentUserId = authData.user.id;
        }
      } catch (e) {
        // ignore
      }

      // Save to database - direct insert
      console.log('[Apply] Attempting to save application', {
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        user_id: currentUserId,
      });

      // Build payload with only defined fields
      const insertPayload: Record<string, any> = {
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        course_name: formData.course || null,
        program_name: formData.program || null,
        qualification: formData.qualification || null,
        experience: formData.experience || null,
        message: formData.message || null,
        status: 'new',
      };

      // Only add user_id if authenticated
      if (currentUserId) {
        insertPayload.user_id = currentUserId;
      }

      const { data: insertedData, error: dbError } = await supabaseClient
        .from('applications')
        .insert([insertPayload])
        .select();

      console.log('[Apply] Insert result:', { insertedData, dbError });

      if (dbError) {
        const errorMsg = dbError?.message || JSON.stringify(dbError);
        console.error('[Apply] Database error:', dbError);
        setError(`Database Error: ${errorMsg}`);
        return;
      }

      const appId = insertedData?.[0]?.id;

      // Determine the amount to use for checkout
      let totalAmount: number;
      
      if (checkoutAmount) {
        // Use the amount passed from cart
        totalAmount = checkoutAmount;
      } else {
        // Calculate amount if not coming from cart
        const course = courses.find(c => c.title === formData.course);
        const price = course ? course.priceINR : 0;
        const gst = Math.round(price * 0.18);
        const razorpayFee = Math.round(price * 0.04);
        totalAmount = price + gst + razorpayFee;
      }
      
      setApplicationData({ id: appId, ...formData, courseTitle: formData.course });
      setProcessing(true);
      // Redirect to payment page after a brief delay
      setTimeout(() => {
        if (typeof window !== 'undefined' && appId) {
          window.location.href = `/payment?applicationId=${appId}&amount=${totalAmount}`;
        }
      }, 1500);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to submit application"
      );
      console.error("Error submitting form:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-slate-50 via-blue-50 to-white min-h-screen py-12">
      <div className="container-home">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-2">
                  <svg className="w-6 h-6 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="pt-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-white">Apply for a Course</h1>
                  <p className="text-slate-400 text-sm md:text-base mt-1">Complete this form and our admissions team will contact you shortly.</p>
                </div>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center shadow-md">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-emerald-900 mb-2">
                Application Submitted Successfully!
              </h2>
              <p className="text-emerald-800 mb-4">
                Thank you for your application. Our admissions team will review your details and contact you soon at the provided contact information.
              </p>
              <p className="text-sm text-emerald-700">
                Redirecting in 5 seconds...
              </p>
            </div>
          ) : processing ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-slate-100 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Processing Application</h2>
              <p className="text-slate-600">Redirecting to payment page...</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-5 border border-slate-100"
            >
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                  </svg>
                  <p className="text-red-800 font-medium">{error}</p>
                </div>
              )}

              {/* Section 1: Personal Information */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 bg-slate-200 rounded flex items-center justify-center text-slate-600 font-semibold text-xs">1</div>
                  <h2 className="text-base font-bold text-slate-900">Personal Information</h2>
                </div>
                
                {/* Full Name and Email - Side by side */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-900 placeholder-slate-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-900 placeholder-slate-400"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Qualification */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-900 placeholder-slate-400"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Highest Qualification
                    </label>
                    <select
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-900 bg-white"
                    >
                      <option value="">Select your qualification</option>
                      <option value="MBBS">MBBS</option>
                      <option value="BDS">BDS</option>
                      <option value="MD/MS">MD/MS</option>
                      <option value="DM">DM</option>
                      <option value="MCh">MCh</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Section 2: Professional Background */}
              <div>
                <div className="flex items-center gap-3 mb-4 pt-4">
                  <div className="w-7 h-7 bg-slate-200 rounded flex items-center justify-center text-slate-600 font-semibold text-xs">2</div>
                  <h2 className="text-base font-bold text-slate-900">Professional Background</h2>
                </div>
                
                {/* Years of Experience */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition text-slate-900 placeholder-slate-400"
                    placeholder="e.g., 2 years"
                  />
                </div>
              </div>

              {/* Section 3: Program Interest */}
              <div>
                <div className="flex items-center gap-3 mb-4 pt-4">
                  <div className="w-7 h-7 bg-slate-200 rounded flex items-center justify-center text-slate-600 font-semibold text-xs">3</div>
                  <h2 className="text-base font-bold text-slate-900">Program Interest</h2>
                </div>
                
                {/* Program Type and Course of Interest */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="block text-sm font-semibold text-slate-900">
                        Program Type <span className="text-red-500">*</span>
                      </label>
                      {formData.program && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                          Pre-selected
                        </span>
                      )}
                    </div>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-900 bg-white"
                    >
                      <option value="">Select a program</option>
                      <option value="Fellowship">Fellowship</option>
                      <option value="PG Diploma">PG Diploma</option>
                      <option value="Certificate Course">Certificate Course</option>
                    </select>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <label className="block text-sm font-semibold text-slate-900">
                        Course of Interest <span className="text-red-500">*</span>
                      </label>
                      {formData.course && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-blue-700 bg-blue-100 rounded">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                          </svg>
                          Pre-filled
                        </span>
                      )}
                    </div>
                    <input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition text-slate-900 placeholder-slate-400"
                      placeholder="Enter your desired course"
                    />
                  </div>
                </div>
              </div>

              {/* Section 4: Additional Information */}
              <div>
                <div className="flex items-center gap-3 mb-4 pt-4">
                  <div className="w-7 h-7 bg-slate-200 rounded flex items-center justify-center text-slate-600 font-semibold text-xs">4</div>
                  <h2 className="text-base font-bold text-slate-900">Tell Us More</h2>
                </div>
                
                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition text-slate-900 placeholder-slate-400 resize-none"
                    placeholder="Tell us about your professional goals and interest in this program..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-3 bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-950 hover:to-slate-900 text-white font-bold text-base rounded-lg transition shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                  {loading ? "Submitting..." : "Submit Application"}
                </button>
              </div>

              <p className="text-xs text-slate-500 text-center">
                <span className="text-red-500">*</span> Required fields
              </p>
            </form>
          )}
        </div>
      </div>

      {/* Payment Modal */}
      {applicationData && (
        <PaymentModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          applicationData={applicationData}
          amount={coursePrice}
          courseName={applicationData.courseTitle}
        />
      )}
    </div>
  );
}
