import { createFileRoute, useNavigate, useLocation, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { supabaseClient } from "@/lib/supabase";
import { Search, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/verification")({
  head: () => ({
    meta: [
      { title: "Certificate Verification — DMHCA" },
      { name: "description", content: "Official DMHCA certificate verification portal. Verify professional credentials and certification status." },
    ],
  }),
  component: VerifyPage,
});

function VerifyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  // Check if we're on a detail page by seeing if pathname has a certificate ID
  const isDetailPage = location.pathname !== "/verification";

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchTerm.trim()) {
      alert("Please enter a name or certificate ID");
      return;
    }

    try {
      setLoading(true);
      setSearched(true);

      const searchLower = searchTerm.toLowerCase();

      const { data, error } = await supabaseClient
        .from("certificates")
        .select("*")
        .or(
          `full_name.ilike.%${searchLower}%,certificate_id.ilike.%${searchLower}%`
        )
        .eq("status", "Active");

      if (error) throw error;

      setResults(data || []);
    } catch (error) {
      console.error("Error searching certificates:", error);
      alert("Error searching certificates: " + (error as any)?.message);
    } finally {
      setLoading(false);
    }
  };

  // If on detail page, render child route
  if (isDetailPage) {
    return <Outlet />;
  }

  // Otherwise, render search page
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Certificate Verification</h1>
          <p className="text-slate-300 text-lg">
            Official DMHCA Certificate Verification Portal
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="mb-12 p-8 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to the official verification portal of the Delhi Medical Health Care Academy (DMHCA). 
            This service enables healthcare institutions, employers, educational organizations, and the public 
            to verify the professional credentials and certification status of DMHCA certificate holders.
          </p>
        </div>

        {/* Search Section */}
        <div className="mb-12">
          <div className="bg-white border-2 border-slate-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Search Credentials</h2>
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter full name or certificate ID (e.g., DMHCA-PGC-1234567890)"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-slate-900 text-white rounded-lg font-semibold hover:bg-slate-800 transition disabled:opacity-50 whitespace-nowrap"
                >
                  {loading ? "Verifying..." : "Verify Now"}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Results Section */}
        {searched && (
          <div className="mb-12">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
                  <span className="text-gray-600 font-medium">Searching credentials...</span>
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded">
                <div className="flex gap-4">
                  <AlertTriangle className="text-yellow-600 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Record Not Found</h3>
                    <p className="text-gray-700 mb-3">
                      No certificates matching "{searchTerm}" were found in our records.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Please ensure the entered information is accurate</li>
                      <li>The certificate may be newly issued and pending system update</li>
                      <li>The certificate status may have expired or been suspended</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-sm text-gray-600 font-medium mb-4">
                  Found {results.length} certificate{results.length !== 1 ? 's' : ''}
                </div>
                {results.map((cert) => (
                  <div
                    key={cert.id}
                    onClick={() => navigate({ to: `/verification/${cert.certificate_id}` })}
                    className="bg-white border border-slate-200 rounded-lg p-6 cursor-pointer hover:border-slate-400 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="text-green-600" size={20} />
                        <h3 className="text-xl font-bold text-gray-900">
                          {cert.full_name}
                        </h3>
                      </div>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded text-sm font-semibold flex-shrink-0">
                        {cert.status}
                      </span>
                    </div>
                    
                    <div className="space-y-4 text-sm">
                      <div className="grid grid-cols-3 gap-4">
                        <span className="text-gray-600 font-medium">Certificate ID</span>
                        <span className="col-span-2 text-gray-900 font-mono">{cert.certificate_id}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <span className="text-gray-600 font-medium">Qualification</span>
                        <span className="col-span-2 text-gray-900">{cert.qualification}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <span className="text-gray-600 font-medium">Mode</span>
                        <span className="col-span-2 text-gray-900">{cert.mode}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <span className="text-gray-600 font-medium">Award Date</span>
                        <span className="col-span-2 text-gray-900">{cert.month_year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Information Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Verification Results May Display */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Info className="text-slate-600" size={20} />
              Verification Results May Display:
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span>Full Name of Certificate Holder</span>
              </li>
              <li className="flex gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span>DMHCA Certificate ID</span>
              </li>
              <li className="flex gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span>Awarded Qualification / Program</span>
              </li>
              <li className="flex gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span>Mode of Training (Online/Blended/Hybrid)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span>Award Date</span>
              </li>
              <li className="flex gap-2">
                <span className="text-slate-600 font-bold">•</span>
                <span>Current Status (Active / Inactive)</span>
              </li>
            </ul>
          </div>

          {/* Important Information */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <AlertCircle className="text-blue-600" size={20} />
              Important Information
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Verification results are official as of the date of search</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Results confirm professional certification status only</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Printed/electronic copies may be used as reference by institutions</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Updates are processed regularly but may have slight delays</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>For assistance, contact: verification@dmhca.in</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-12">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Disclaimer</h3>
          <p className="text-gray-700 leading-relaxed">
            Verification through this portal confirms DMHCA certification status only. It does not replace 
            original certificates, official letters, or any other regulatory requirements. DMHCA assumes no 
            liability for decisions made solely on verification results from this portal. Employers, educational 
            institutions, and regulatory bodies should verify current status directly with DMHCA for critical 
            decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
