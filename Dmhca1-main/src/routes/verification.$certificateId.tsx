import { createFileRoute, notFound } from "@tanstack/react-router";
import { supabaseClient } from "@/lib/supabase";
import { CheckCircle2, ArrowLeft, Share2, Copy, AlertCircle, Shield, Award, Stethoscope, Calendar, User, MapPin, ExternalLink, Download, FileText } from "lucide-react";
import { useState, useMemo, useRef } from "react";

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
  const certificateRef = useRef<HTMLDivElement>(null);

  const certificateUrl = useMemo(() => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}/verification/${certificate.certificate_id}`;
  }, [certificate.certificate_id]);

  const qrCodeUrl = useMemo(() => {
    if (!certificateUrl) return '';
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(certificateUrl)}&format=png`;
  }, [certificateUrl]);

  const handleShare = async () => {
    const text = `I have verified my ${certificate.qualification} certificate from DMHCA. ${certificateUrl}`;

    if (navigator.share) {
      navigator.share({ title: "DMHCA Certificate Verification", text, url: certificateUrl });
    } else {
      await navigator.clipboard.writeText(certificateUrl);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(certificateUrl);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const downloadQR = async () => {
    try {
      const response = await fetch(qrCodeUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${certificate.certificate_id}-verification-qr.png`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Failed to download QR code:', error);
    }
  };

  const downloadCertificatePDF = () => {
    const element = certificateRef.current;
    if (!element) return;

    // Helper to check if element is contained in a parent
    const isElementInside = (parent: any, target: any): boolean => {
      return parent.contains(target);
    };

    // Hide all body content except certificate
    const bodyChildren = Array.from(document.body.children);
    bodyChildren.forEach((child: any) => {
      if (!isElementInside(child, element)) {
        child.style.display = 'none';
      }
    });

    // Get the parent container (grid) and show it
    const gridContainer = element.closest('.grid');
    if (gridContainer) {
      const parent = gridContainer.parentElement;
      if (parent) {
        // Hide siblings of the grid
        Array.from(parent.children).forEach((child: any) => {
          if (child !== gridContainer) {
            child.style.display = 'none';
          }
        });
      }
      
      // Hide siblings inside the grid (the sidebar)
      Array.from(gridContainer.children).forEach((child: any) => {
        if (!isElementInside(child, element)) {
          child.style.display = 'none';
        }
      });
    }

    // Trigger print
    window.print();

    // Restore after print dialog
    setTimeout(() => {
      bodyChildren.forEach((child: any) => {
        child.style.display = '';
      });
      if (gridContainer) {
        const parent = gridContainer.parentElement;
        if (parent) {
          Array.from(parent.children).forEach((child: any) => {
            if (child !== gridContainer) {
              child.style.display = '';
            }
          });
        }
        Array.from(gridContainer.children).forEach((child: any) => {
          child.style.display = '';
        });
      }
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Navigation */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/verification" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition font-medium">
            <ArrowLeft size={20} />
            Back to Search
          </a>
          <div className="text-center flex-1">
            <h1 className="text-2xl font-bold text-gray-900">Professional Certificate</h1>
          </div>
          <div className="w-32"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Verification Status Banner */}
        <div className="mb-8 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-green-900">Certificate Verified & Active</h3>
              <p className="text-sm text-green-700">This credential is authentic and independently verified by DMHCA</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Certificate - Coursera Style */}
          <div className="lg:col-span-3">
            <div 
              ref={certificateRef}
              className="bg-white border-2 border-gray-300 rounded-lg overflow-hidden shadow-2xl mb-8 print:shadow-none"
              style={{ aspectRatio: '1.414/1' }}
            >
              {/* Professional Blue Header */}
              <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 px-8 py-8 text-center flex flex-col justify-center h-1/4">
                <p className="text-blue-100 text-xs font-bold uppercase tracking-widest mb-2">Certificate of Completion</p>
                <h1 className="text-3xl font-bold text-white mb-2">{certificate.full_name}</h1>
                <p className="text-blue-100 text-sm">has successfully completed</p>
              </div>

              {/* Certificate Content */}
              <div className="px-8 py-6 bg-white h-3/4 flex flex-col justify-between">
                {/* Main Credentials */}
                <div className="text-center">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{certificate.qualification}</h2>
                  <p className="text-gray-600 text-sm">Professional Training Program</p>
                </div>

                {/* Divider */}
                <div className="border-t-2 border-blue-300 my-3"></div>

                {/* Credential Details Grid */}
                <div className="grid grid-cols-2 gap-4 text-center text-sm mb-4">
                  <div>
                    <p className="text-gray-500 font-semibold uppercase text-xs mb-1">Training Mode</p>
                    <p className="text-gray-900 font-bold">{certificate.mode}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 font-semibold uppercase text-xs mb-1">Completion Date</p>
                    <p className="text-gray-900 font-bold">{certificate.month_year}</p>
                  </div>
                </div>

                {/* Unique Credential ID with QR Code */}
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3 flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-gray-600 text-xs font-semibold uppercase mb-1">Credential ID</p>
                    <p className="text-gray-900 font-bold text-sm font-mono break-all">{certificate.certificate_id}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <img 
                      src={qrCodeUrl}
                      alt="QR code"
                      className="w-20 h-20 border border-gray-300 p-0.5 bg-white"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Footer Signature Area */}
                <div className="border-t-2 border-blue-300 pt-3 text-center text-xs">
                  <p className="text-gray-600 font-semibold">Authorized By</p>
                  <p className="text-gray-900 font-bold">DMHCA</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 no-print">
              <button 
                onClick={handleShare} 
                className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
              >
                <Share2 size={20} />
                Share Certificate
              </button>
              <button 
                onClick={copyLink} 
                className="flex-1 flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-900 font-bold py-3 rounded-lg transition duration-200"
              >
                <Copy size={20} />
                {copySuccess ? 'Link Copied!' : 'Copy Link'}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 no-print">
            {/* Download Certificate PDF */}
            <div className="bg-white border-2 border-blue-300 rounded-lg p-6 mb-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText size={24} className="text-blue-600" />
                Certificate
              </h3>
              <button
                onClick={downloadCertificatePDF}
                className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200 mb-3"
              >
                <Download size={20} />
                Download PDF
              </button>
              <p className="text-gray-600 text-sm">A4 landscape, print-ready</p>
            </div>

            {/* Download QR Code */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6 mb-6 shadow-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-4">QR Code</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4 flex justify-center border border-blue-200">
                <img 
                  src={qrCodeUrl}
                  alt="QR code"
                  className="w-32 h-32"
                  onError={(e) => {
                    console.error('QR preview failed');
                    e.currentTarget.src = '';
                  }}
                />
              </div>
              <button
                onClick={downloadQR}
                className="w-full flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 rounded-lg transition duration-200"
              >
                <Download size={18} />
                Download QR
              </button>
            </div>

            {/* How to Verify */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">How to Verify</h3>
              <ol className="space-y-3 text-gray-700 text-sm">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">1</span>
                  <span>Scan QR code with smartphone</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">2</span>
                  <span>Or enter credential ID manually</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 flex-shrink-0">3</span>
                  <span>View verified details instantly</span>
                </li>
              </ol>
            </div>

            {/* Status */}
            <div className="bg-white border-2 border-gray-300 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Status</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Verified</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">✓ Yes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Active</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">✓ Yes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
          <h4 className="font-bold text-amber-900 mb-2">Important</h4>
          <p className="text-amber-800 text-sm">
            This certificate verifies that the above individual has successfully completed the credential program according to DMHCA standards.
            While DMHCA maintains accurate records, this service should not be the sole basis for critical decisions. For official verification, 
            please contact DMHCA directly or request original documentation.
          </p>
        </div>
      </div>

      <style>{`
        @media print {
          * { 
            margin: 0 !important;
            padding: 0 !important;
          }
          
          html, body { 
            background: white !important; 
            margin: 0 !important;
            padding: 0 !important;
            width: 100% !important;
          }
          
          .no-print { 
            display: none !important; 
          }
          
          @page {
            size: A4 landscape;
            margin: 0;
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
}
