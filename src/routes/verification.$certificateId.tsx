import { createFileRoute, notFound } from "@tanstack/react-router";
import { supabaseClient } from "@/lib/supabase";
import { CheckCircle2, ArrowLeft, Share2, Copy, AlertCircle, Shield, Award, Stethoscope, Calendar, User, MapPin, ExternalLink } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/verification/$certificateId")({
  loader: async ({ params }) => {
    try {
      const { data, error } = await supabaseClient
        .from("certificates")
        .select("*")
        .eq("certificate_id", params.certificateId)
        .single();

      if (error || !data) throw new Error("Certificate not found");
      if (data.status !== "Active") throw new Error("This certificate is no longer active");
      return { certificate: data };
    } catch (err) {
      throw notFound();
    }
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.certificate.full_name} - DMHCA Certificate Verification` },
          { name: "description", content: `Certificate verification for ${loaderData.certificate.full_name}` },
        ]
      : [],
  }),
  component: VerificationDetail,
});

function VerificationDetail() {
  const { certificate } = Route.useLoaderData();
  const [copySuccess, setCopySuccess] = useState(false);

  const handleShare = async () => {
    const url = `${window.location.origin}/verification/${certificate.certificate_id}`;
    const text = `I have verified my ${certificate.qualification} certificate from DMHCA. ${url}`;

    if (navigator.share) {
      navigator.share({ title: "DMHCA Certificate Verification", text, url });
    } else {
      await navigator.clipboard.writeText(url);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const copyLink = async () => {
    const url = `${window.location.origin}/verification/${certificate.certificate_id}`;
    await navigator.clipboard.writeText(url);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-900 to-slate-900">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="relative pt-8 pb-12 px-4 border-b border-blue-500/30">
        <div className="max-w-5xl mx-auto">
          <a 
            href="/verification" 
            className="inline-flex items-center gap-2 text-blue-300 hover:text-cyan-300 mb-6 font-semibold transition"
          >
            <ArrowLeft size={20} />
            Back to Search
          </a>
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-cyan-400" />
            <h1 className="text-3xl font-bold text-white">Certificate Verification</h1>
          </div>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-12">
        {/* Main Certificate Card */}
        <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl overflow-hidden mb-8 border border-blue-200">
          {/* Verification Status Header */}
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-8 flex items-start gap-4">
            <div className="bg-white/20 p-3 rounded-full">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white">Certificate Verified & Active</h2>
              <p className="text-green-50 mt-2">This credential has been verified and is currently active in the DMHCA registry</p>
            </div>
            <div className="text-right">
              <span className="inline-block px-4 py-2 bg-white/20 text-white rounded-full font-semibold text-sm">
                ✓ VERIFIED
              </span>
            </div>
          </div>

          {/* Certificate Holder Info */}
          <div className="p-8 lg:p-12 border-b border-gray-200">
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-widest mb-3">Professional Name</p>
            <h1 className="text-5xl font-bold text-slate-900 mb-2">{certificate.full_name}</h1>
            <p className="text-gray-600 font-mono text-lg">{certificate.certificate_id}</p>
          </div>

          {/* Credential Details Grid */}
          <div className="p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Qualification */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Awarded Qualification</p>
                  <p className="text-xl font-bold text-gray-900 mt-2">{certificate.qualification}</p>
                </div>
              </div>

              {/* Training Mode */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-100">
                    <Stethoscope className="h-6 w-6 text-cyan-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Training Mode</p>
                  <p className="text-xl font-bold text-gray-900 mt-2">{certificate.mode}</p>
                </div>
              </div>

              {/* Award Date */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-100">
                    <Calendar className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Award Date</p>
                  <p className="text-xl font-bold text-gray-900 mt-2">{certificate.month_year}</p>
                </div>
              </div>

              {/* Issuer */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-purple-100">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest">Issuing Organization</p>
                  <p className="text-xl font-bold text-gray-900 mt-2">DMHCA</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6 border-t border-gray-200">
              <button 
                onClick={handleShare} 
                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-lg transition"
              >
                <Share2 size={20} />
                Share Certificate
              </button>
              <button 
                onClick={copyLink} 
                className="flex-1 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-4 rounded-lg transition"
              >
                <Copy size={20} />
                {copySuccess ? 'Link Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* How to Use This Certificate */}
          <div className="bg-white/95 backdrop-blur rounded-2xl p-6 border border-blue-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">How to Use This</h3>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Share the verification link with employers or institutions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Reference this certificate in professional profiles</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>Use verification URL for credential confirmation</span>
              </li>
            </ul>
          </div>

          {/* Verification Details */}
          <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-200">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Certificate Status</h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <div className="flex items-center justify-between">
                <span>Status</span>
                <span className="font-bold text-green-600 flex items-center gap-1">
                  <CheckCircle2 size={16} /> Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Verified</span>
                <span className="font-bold text-green-600">Yes</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Last Updated</span>
                <span className="font-bold text-gray-600">Today</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6">
          <div className="flex gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-amber-900 mb-2">Verification Certificate</h4>
              <p className="text-amber-800 text-sm">
                This verification confirms the credential holder's certification status at DMHCA as of today's date. 
                While the information is maintained accurately, always request original documentation for critical decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
