import { createFileRoute } from "@tanstack/react-router";
import { syncCoursesToSupabase } from "@/lib/api/sync-courses.function";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/admin/sync-courses")({
  component: SyncCoursesPage,
});

function SyncCoursesPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleSync = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await syncCoursesToSupabase();
      setResult(response);
    } catch (err) {
      setError((err as any).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Sync Courses to Supabase</h1>
        
        <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
          <p className="text-slate-700 mb-4">
            Click the button below to sync all courses from your local data to Supabase database.
          </p>

          <button
            onClick={handleSync}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Syncing..." : "Start Sync"}
          </button>

          {result && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded">
              <h2 className="font-semibold text-green-900 mb-2">✅ Sync Complete</h2>
              <p className="text-green-800">{result.message}</p>
              <p className="text-sm text-green-700 mt-2">
                Synced: {result.synced} | Failed: {result.failed}
              </p>
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded">
              <h2 className="font-semibold text-red-900 mb-2">❌ Error</h2>
              <p className="text-red-800">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
