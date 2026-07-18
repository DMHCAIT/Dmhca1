import { createFileRoute, notFound } from "@tanstack/react-router";
import { supabaseClient } from "@/lib/supabase";
import { CheckCircle, ArrowLeft, Share2, Copy, AlertCircle } from "lucide-react";
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
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <a href="/verification" className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-6 font-semibold">← Back to Search</a>
          <h1 className="text-4xl font-bold">Verification Details</h1>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="bg-green-50 border-b border-green-200 px-8 py-6 flex items-center gap-3">
            <CheckCircle className="text-green-600" size={24} />
            <div>
              <h2 className="text-lg font-bold text-gray-900">Certificate Verified and Active</h2>
              <p className="text-sm text-gray-600">This certificate is valid and verified by DMHCA</p>
            </div>
          </div>
          <div className="p-8 lg:p-12">
            <div className="mb-12 pb-8 border-b border-slate-200">
              <p className="text-sm text-gray-600 font-semibold uppercase tracking-wide mb-2">Certificate Holder</p>
              <h1 className="text-4xl font-bold text-gray-900">{certificate.full_name}</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <p className="text-xs text-gray-600 font-semibold uppercase tracking-widest mb-2">Certificate ID</p>
                <p className="text-2xl font-mono font-bold text-slate-900">{certificate.certificate_id}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 font-semibold uppercase tracking-widest mb-2">Status</p>
                <p className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded font-bold text-lg">{certificate.status}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 font-semibold uppercase tracking-widest mb-2">Awarded Qualification</p>
                <p className="text-xl font-semibold text-gray-900">{certificate.qualification}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 font-semibold uppercase tracking-widest mb-2">Mode of Training</p>
                <p className="text-xl font-semibold text-gray-900">{certificate.mode}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 font-semibold uppercase tracking-widest mb-2">Award Date</p>
                <p className="text-xl font-semibold text-gray-900">{certificate.month_year}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <button onClick={handleShare} className="px-6 py-3 bg-slate-900 text-white rounded">Share</button>
              <button onClick={copyLink} className="px-6 py-3 border rounded">{copySuccess ? 'Copied' : 'Copy Link'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
