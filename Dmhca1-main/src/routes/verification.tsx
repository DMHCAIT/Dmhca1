import { createFileRoute, useNavigate, useLocation, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { supabaseClient } from "@/lib/supabase";
import { Search, Shield, Award, Stethoscope, MapPin, Calendar, User, CheckCircle2, AlertTriangle, X } from "lucide-react";

export const Route = createFileRoute("/verification")({
  head: () => ({
    meta: [
      { title: "Certificate Verification — DMHCA" },
      { name: "description", content: "Verify DMHCA medical professional certifications and credentials. Official verification portal." },
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
  const [expandedId, setExpandedId] = useState<string | null>(null);

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

  if (isDetailPage) {
    return <Outlet />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-900 to-slate-900">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="relative pt-16 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-cyan-400" />
            <h1 className="text-5xl font-bold text-white">Credential Verification</h1>
            <Shield className="w-10 h-10 text-cyan-400" />
          </div>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-2">
            Delhi Medical Health Care Academy
          </p>
          <p className="text-blue-200 max-w-3xl mx-auto">
            Verify the authenticity of medical professional certifications. Trusted by healthcare institutions, employers, and regulatory bodies.
          </p>
        </div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 pb-20">
        {/* Search Card */}
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 mb-12 border border-blue-200">
          <div className="flex items-center gap-3 mb-6">
            <Stethoscope className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-slate-900">Search Medical Professional</h2>
          </div>
          
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Name or Certificate ID (e.g., DMHCA-PGC-8206158946)"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white text-lg transition"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 rounded-xl transition disabled:opacity-50 flex items-center justify-center gap-2 text-lg"
            >
              <Shield size={20} />
              {loading ? "Verifying Credentials..." : "Verify Credential"}
            </button>
          </form>
        </div>

        {/* Results Section */}
        {searched && (
          <div className="space-y-4 mb-12">
            {loading ? (
              <div className="bg-white/95 backdrop-blur rounded-2xl p-12 text-center border border-blue-200">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  <p className="text-gray-600 font-semibold">Searching certificate database...</p>
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-8 border-l-4">
                <div className="flex gap-4">
                  <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">Credential Not Found</h3>
                    <p className="text-gray-700 mb-3">
                      No active certificates matching "{searchTerm}" were found in our database.
                    </p>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                      <li>Verify spelling of name or certificate ID</li>
                      <li>Check if certificate has been issued recently (may take 24-48 hours to appear)</li>
                      <li>Confirm the certificate holder's status is active</li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="text-white font-semibold text-lg mb-4">
                  Found {results.length} Active Certificate{results.length !== 1 ? 's' : ''}
                </div>
                {results.map((cert) => (
                  <div
                    key={cert.id}
                    className="bg-white/95 backdrop-blur rounded-2xl border-2 border-blue-200 overflow-hidden mb-4 hover:shadow-xl transition transform hover:scale-105 cursor-pointer"
                  >
                    {/* Card Header */}
                    <div 
                      onClick={() => setExpandedId(expandedId === cert.id ? null : cert.id)}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="bg-white/20 p-3 rounded-full">
                            <User className="w-6 h-6" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{cert.full_name}</h3>
                            <p className="text-blue-100 font-mono text-sm mt-1">{cert.certificate_id}</p>
                          </div>
                        </div>
                        <div className="bg-white/20 px-3 py-2 rounded-lg flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          <span className="font-semibold">Active</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex gap-4">
                          <Award className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Qualification</p>
                            <p className="text-gray-900 font-semibold text-lg mt-1">{cert.qualification}</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Stethoscope className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Training Mode</p>
                            <p className="text-gray-900 font-semibold text-lg mt-1">{cert.mode}</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <Calendar className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Award Date</p>
                            <p className="text-gray-900 font-semibold text-lg mt-1">{cert.month_year}</p>
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-gray-600 text-sm font-semibold uppercase tracking-wide">Issuer</p>
                            <p className="text-gray-900 font-semibold text-lg mt-1">DMHCA</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-6 pt-6 border-t border-gray-200 flex gap-3">
                        <button
                          onClick={() => navigate({ to: `/verification/${cert.certificate_id}` })}
                          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
                        >
                          View Full Certificate
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Info Cards Section */}
        {!searched && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* How It Works */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                How Verification Works
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-bold flex-shrink-0">1</span>
                  <span>Enter professional name or certificate ID</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-bold flex-shrink-0">2</span>
                  <span>System searches DMHCA database</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-bold flex-shrink-0">3</span>
                  <span>View credential verification results</span>
                </li>
                <li className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full text-sm font-bold flex-shrink-0">4</span>
                  <span>Share or reference for official records</span>
                </li>
              </ol>
            </div>

            {/* Important Info */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-cyan-600" />
                Verification Details
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Real-time credential database lookup</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Official DMHCA certification status</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Updated hourly for accuracy</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span>Available 24/7 for institutions</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            Legal Disclaimer
          </h3>
          <p className="text-gray-700 leading-relaxed text-sm">
            This verification portal provides official DMHCA certification status for information purposes. While we maintain accurate records, 
            this service should not be the sole basis for employment, enrollment, or regulatory decisions. Always request original certificates 
            or official documentation from the certificate holder. DMHCA assumes no liability for decisions based solely on this online verification.
          </p>
        </div>
      </div>

      {/* Footer Info */}
      <div className="relative border-t border-blue-500/30 mt-16 py-8 px-4">
        <div className="max-w-5xl mx-auto text-center text-blue-100 text-sm">
          <p>Need help? Contact: <a href="mailto:verification@dmhca.in" className="text-cyan-400 hover:text-cyan-300 underline">verification@dmhca.in</a></p>
        </div>
      </div>
    </div>
  );
}
