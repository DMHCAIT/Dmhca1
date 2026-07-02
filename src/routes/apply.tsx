import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabaseClient } from "@/lib/supabase";

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
  const [error, setError] = useState("");

  // Get course and program from query parameters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const courseParam = params.get("course");
      const programParam = params.get("program");
      
      setFormData((prev) => ({
        ...prev,
        course: courseParam ? decodeURIComponent(courseParam) : "",
        program: programParam ? decodeURIComponent(programParam) : "",
      }));
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

      // Save to database
      const { error: dbError } = await supabaseClient
        .from("applications")
        .insert([
          {
            full_name: formData.fullName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            course_name: formData.course || null,
            program_name: formData.program || null,
            qualification: formData.qualification || null,
            experience: formData.experience || null,
            message: formData.message || null,
            status: "new",
          },
        ]);

      if (dbError) throw dbError;

      setSubmitted(true);
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          program: "",
          course: "",
          fullName: "",
          email: "",
          phone: "",
          qualification: "",
          experience: "",
          message: "",
        });
        setSubmitted(false);
      }, 5000);
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
    <div className="bg-gradient-to-b from-slate-50 to-white min-h-screen py-12">
      <div className="container-home">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="bg-white shadow-lg rounded-2xl p-6 inline-block">
              <h1 className="font-display text-3xl md:text-4xl text-navy-deep">Apply for a Course</h1>
              <p className="mt-2 text-sm md:text-base text-slate-600">Fill out this short form and our admissions team will contact you.</p>
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
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-5 border border-slate-200"
            >
              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">❌ {error}</p>
                </div>
              )}

              {/* Full Name and Email - Side by side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-deep/40 focus:border-transparent text-slate-900"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-deep/40 focus:border-transparent text-slate-900"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone and Qualification */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-deep/40 focus:border-transparent text-slate-900"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Highest Qualification</label>
                  <select
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-deep/40 focus:border-transparent text-slate-900 bg-white"
                  >
                    <option value="">Select qualification</option>
                    <option value="MBBS">MBBS</option>
                    <option value="BDS">BDS</option>
                    <option value="MD/MS">MD/MS</option>
                    <option value="DM">DM</option>
                    <option value="MCh">MCh</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Years of Experience */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-deep/40 focus:border-transparent text-slate-900"
                  placeholder="e.g., 2 years"
                />
              </div>

              {/* Program Type and Course of Interest */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Program Type *</label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-deep/40 focus:border-transparent text-slate-900 bg-white"
                  >
                    <option value="">Select a program</option>
                    <option value="Fellowship">Fellowship</option>
                    <option value="PG Diploma">PG Diploma</option>
                    <option value="Certificate Course">Certificate Course</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Course of Interest *</label>
                  <input
                    type="text"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-deep/40 focus:border-transparent text-slate-900"
                    placeholder="Enter your desired course"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Additional Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-deep/40 focus:border-transparent text-slate-900"
                  placeholder="Tell us about your interest..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-gradient-to-r from-navy-deep to-slate-800 hover:from-navy-deep/90 hover:to-slate-700 text-white font-bold rounded-lg transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Submitting Application..." : "Submit Application"}
                </button>
              </div>

              <p className="text-xs text-slate-500 text-center">
                * Required fields. We'll contact you within 24 hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
