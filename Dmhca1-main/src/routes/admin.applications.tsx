import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Trash2, CheckCircle2, Eye, Filter } from 'lucide-react';

export const Route = createFileRoute('/admin/applications')({
  head: () => ({
    meta: [
      { title: 'Applications — Admin' },
      { name: 'description', content: 'Manage course applications' },
    ],
  }),
  component: AdminApplications,
});

interface Application {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  course_name: string;
  program_name: string;
  qualification: string;
  experience: string;
  message: string;
  status: 'new' | 'reviewed' | 'contacted' | 'enrolled' | 'rejected';
  notes: string;
  created_at: string;
  updated_at: string;
}

function AdminApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'new' | 'reviewed' | 'contacted' | 'enrolled' | 'rejected'>('all');
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const [notes, setNotes] = useState('');

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    try {
      setLoading(true);
      let query = supabaseClient
        .from('applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setApplications(data || []);
    } catch (error) {
      console.error('Error loading applications:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadApplications();
  }, [filter]);

  const updateStatus = async (id: string, newStatus: Application['status']) => {
    setUpdating(id);
    try {
      const { error } = await supabaseClient
        .from('applications')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      setApplications(
        applications.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
      );

      if (selectedApp?.id === id) {
        setSelectedApp({ ...selectedApp, status: newStatus });
      }
    } catch (error) {
      alert('Error updating status: ' + (error as any).message);
    } finally {
      setUpdating(null);
    }
  };

  const updateNotes = async (id: string) => {
    setUpdating(id);
    try {
      const { error } = await supabaseClient
        .from('applications')
        .update({ notes, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      setApplications(
        applications.map((app) => (app.id === id ? { ...app, notes } : app))
      );

      if (selectedApp?.id === id) {
        setSelectedApp({ ...selectedApp, notes });
      }
      alert('✅ Notes saved!');
    } catch (error) {
      alert('Error saving notes: ' + (error as any).message);
    } finally {
      setUpdating(null);
    }
  };

  const deleteApplication = async (id: string) => {
    if (!confirm('Delete this application?')) return;

    try {
      const { error } = await supabaseClient.from('applications').delete().eq('id', id);

      if (error) throw error;
      setApplications(applications.filter((app) => app.id !== id));
      if (selectedApp?.id === id) setSelectedApp(null);
    } catch (error) {
      alert('Error deleting: ' + (error as any).message);
    }
  };

  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'new':
        return 'bg-red-100 text-red-800';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'enrolled':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading applications...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-navy-deep">📝 Course Applications</h1>
        <p className="text-sm text-gray-600">Total: {applications.length}</p>
      </div>

      {/* Filter */}
      <div className="mb-6 flex gap-2 flex-wrap">
        {['all', 'new', 'reviewed', 'contacted', 'enrolled', 'rejected'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status as any)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === status
                ? 'bg-gold text-navy-deep'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-gold'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Applications List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {applications.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                <p>No applications found</p>
              </div>
            ) : (
              <div className="divide-y">
                {applications.map((app) => (
                  <div
                    key={app.id}
                    onClick={() => {
                      setSelectedApp(app);
                      setNotes(app.notes || '');
                    }}
                    className={`p-4 cursor-pointer hover:bg-gray-50 transition ${
                      selectedApp?.id === app.id ? 'bg-gold bg-opacity-10 border-l-4 border-gold' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy-deep">{app.full_name}</h3>
                        <p className="text-sm text-gray-600">{app.email}</p>
                        <p className="text-sm text-gray-600">{app.phone}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(app.status)}`}>
                        {app.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-1">
                      <strong>Course:</strong> {app.course_name}
                    </p>
                    {app.program_name && (
                      <p className="text-sm text-gray-700">
                        <strong>Program:</strong> {app.program_name}
                      </p>
                    )}
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(app.created_at).toLocaleDateString()} • {new Date(app.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Detail Panel */}
        {selectedApp && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-navy-deep">📋 Details</h2>

            {/* Status Update */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Status</label>
              <select
                value={selectedApp.status}
                onChange={(e) => updateStatus(selectedApp.id, e.target.value as Application['status'])}
                disabled={updating === selectedApp.id}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:border-gold focus:outline-none"
              >
                <option value="new">New</option>
                <option value="reviewed">Reviewed</option>
                <option value="contacted">Contacted</option>
                <option value="enrolled">Enrolled</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>

            {/* Application Details */}
            <div className="space-y-3 mb-6 pb-6 border-b">
              <div>
                <p className="text-xs font-semibold text-gray-600">FULL NAME</p>
                <p className="text-sm">{selectedApp.full_name}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">EMAIL</p>
                <p className="text-sm break-all">{selectedApp.email}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">PHONE</p>
                <p className="text-sm">{selectedApp.phone}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">QUALIFICATION</p>
                <p className="text-sm">{selectedApp.qualification}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">EXPERIENCE</p>
                <p className="text-sm">{selectedApp.experience}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600">COURSE</p>
                <p className="text-sm">{selectedApp.course_name}</p>
              </div>
              {selectedApp.program_name && (
                <div>
                  <p className="text-xs font-semibold text-gray-600">PROGRAM</p>
                  <p className="text-sm">{selectedApp.program_name}</p>
                </div>
              )}
              {selectedApp.message && (
                <div>
                  <p className="text-xs font-semibold text-gray-600">MESSAGE</p>
                  <p className="text-sm">{selectedApp.message}</p>
                </div>
              )}
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Internal Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm focus:border-gold focus:outline-none resize-none"
                rows={4}
                placeholder="Add notes about this application..."
              />
              <button
                onClick={() => updateNotes(selectedApp.id)}
                disabled={updating === selectedApp.id}
                className="mt-2 w-full bg-gold text-navy-deep px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
              >
                Save Notes
              </button>
            </div>

            {/* Actions */}
            <button
              onClick={() => deleteApplication(selectedApp.id)}
              className="w-full flex items-center justify-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 transition"
            >
              <Trash2 size={16} />
              Delete Application
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
