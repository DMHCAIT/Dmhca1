import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Plus, Edit2, Trash2, X, AlertCircle, ChevronUp, ChevronDown, Search, RotateCw, Download } from 'lucide-react';

export const Route = createFileRoute('/admin/certificates')({
  component: AdminCertificates,
});

function AdminCertificates() {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [filteredCertificates, setFilteredCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [expandedCert, setExpandedCert] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    certificate_id: '',
    full_name: '',
    qualification: '',
    mode: 'Online' as 'Online' | 'Blended' | 'Hybrid',
    month_year: '',
    status: 'Active' as 'Active' | 'Inactive',
  });

  useEffect(() => {
    fetchCertificates();
  }, []);

  useEffect(() => {
    filterAndSearch();
  }, [certificates, searchTerm]);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabaseClient
        .from('certificates')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCertificates(data || []);
    } catch (error) {
      console.error('Error fetching certificates:', error);
      alert('Error fetching certificates: ' + (error as any)?.message);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSearch = () => {
    let filtered = certificates;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((cert) => {
        const name = (cert.full_name || '').toLowerCase();
        const certId = (cert.certificate_id || '').toLowerCase();
        return name.includes(term) || certId.includes(term);
      });
    }

    setFilteredCertificates(filtered);
  };

  const generateCertificateId = () => {
    const uniqueNum = Math.random().toString().substring(2, 12);
    return `DMHCA-PGC-${uniqueNum}`;
  };

  const handleAddCertificate = () => {
    setEditingId(null);
    setFormData({
      certificate_id: generateCertificateId(),
      full_name: '',
      qualification: '',
      mode: 'Online',
      month_year: '',
      status: 'Active',
    });
    setShowModal(true);
  };

  const handleEditCertificate = (cert: any) => {
    setEditingId(cert.id);
    setFormData({
      certificate_id: cert.certificate_id,
      full_name: cert.full_name,
      qualification: cert.qualification,
      mode: cert.mode,
      month_year: cert.month_year,
      status: cert.status,
    });
    setShowModal(true);
  };

  const handleSaveCertificate = async () => {
    try {
      if (!formData.certificate_id || !formData.full_name || !formData.qualification || !formData.month_year) {
        alert('Please fill in all required fields');
        return;
      }

      if (editingId) {
        const { error } = await supabaseClient
          .from('certificates')
          .update(formData)
          .eq('id', editingId)
          .select();

        if (error) throw error;
        alert('Certificate updated successfully!');
      } else {
        const { error } = await supabaseClient
          .from('certificates')
          .insert([formData])
          .select();

        if (error) throw error;
        alert('Certificate added successfully!');
      }

      setShowModal(false);
      setEditingId(null);
      await fetchCertificates();
    } catch (error) {
      console.error('Error saving certificate:', error);
      alert('Error saving certificate: ' + (error as any)?.message);
    }
  };

  const handleDeleteCertificate = async (id: string) => {
    try {
      setShowDeleteConfirm(false);
      const { error } = await supabaseClient
        .from('certificates')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchCertificates();
      alert('Certificate deleted successfully!');
    } catch (error) {
      console.error('Error deleting certificate:', error);
      alert('Error deleting certificate: ' + error);
    }
  };

  const exportToCSV = () => {
    const headers = ['Certificate ID', 'Full Name', 'Qualification', 'Mode', 'Month & Year', 'Status'];
    const csvContent = [
      headers.join(','),
      ...filteredCertificates.map((c) =>
        [c.certificate_id, c.full_name, c.qualification, c.mode, c.month_year, c.status].map((v) => `"${v}"`).join(',')
      ),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `certificates-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">🎓 Certificate Verification</h1>
            <p className="text-gray-400">Manage {certificates.length} certificates</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              title="Export to CSV"
            >
              <Download size={20} />
              Export CSV
            </button>
            <button
              onClick={() => fetchCertificates()}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
            >
              <RotateCw size={20} />
              Refresh
            </button>
            <button
              onClick={handleAddCertificate}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
            >
              <Plus size={20} />
              Add Certificate
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/50">
            <div className="text-3xl font-bold text-blue-300">{certificates.length}</div>
            <div className="text-sm text-gray-300">Total Certificates</div>
          </div>
          <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/50">
            <div className="text-3xl font-bold text-green-300">{certificates.filter((c) => c.status === 'Active').length}</div>
            <div className="text-sm text-gray-300">Active</div>
          </div>
          <div className="p-4 bg-red-500/20 rounded-lg border border-red-500/50">
            <div className="text-3xl font-bold text-red-300">{certificates.filter((c) => c.status === 'Inactive').length}</div>
            <div className="text-sm text-gray-300">Inactive</div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <label className="block text-sm font-semibold mb-2 text-gray-300">Search Certificates</label>
          <div className="relative">
            <Search className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search by name or certificate ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        {/* Certificates List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="text-xl text-gray-300">Loading certificates...</div>
            </div>
          ) : filteredCertificates.length === 0 ? (
            <div className="text-center py-12 p-8 bg-slate-700 rounded-lg border border-slate-600">
              <AlertCircle className="mx-auto mb-4 text-yellow-400" size={40} />
              <div className="text-xl text-gray-300">No certificates found</div>
            </div>
          ) : (
            filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-slate-700 border border-slate-600 rounded-lg overflow-hidden hover:border-blue-500 transition"
              >
                {/* Certificate Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <button
                      onClick={() => setExpandedCert(expandedCert === cert.id ? null : cert.id)}
                      className="flex-1 text-left hover:bg-slate-600/50 transition rounded py-2 px-2"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{cert.full_name}</h3>
                        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
                          <span className="flex items-center gap-1">
                            🎓 {cert.qualification}
                          </span>
                          <span className="flex items-center gap-1">
                            📋 {cert.certificate_id}
                          </span>
                          <span className="flex items-center gap-1">
                            📅 {cert.month_year}
                          </span>
                          <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${
                              cert.status === 'Active'
                                ? 'bg-green-500/30 text-green-300 border border-green-500/50'
                                : 'bg-red-500/30 text-red-300 border border-red-500/50'
                            }`}
                          >
                            {cert.status}
                          </span>
                        </div>
                      </div>
                    </button>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditCertificate(cert)}
                        className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition"
                        title="Edit certificate"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setDeleteConfirmId(cert.id);
                          setShowDeleteConfirm(true);
                        }}
                        className="p-2 bg-red-600 hover:bg-red-700 rounded transition"
                        title="Delete certificate"
                      >
                        <Trash2 size={18} />
                      </button>
                      {expandedCert === cert.id ? (
                        <ChevronUp className="text-gray-400" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={24} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedCert === cert.id && (
                  <div className="border-t border-slate-600 p-6 bg-slate-800/50 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Certificate ID</div>
                        <div className="text-lg font-semibold text-blue-300">{cert.certificate_id}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Mode</div>
                        <div className="text-lg font-semibold text-purple-300">{cert.mode}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Month & Year</div>
                        <div className="text-lg font-semibold text-yellow-300">{cert.month_year}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 mb-1">Status</div>
                        <div className={`text-lg font-semibold ${cert.status === 'Active' ? 'text-green-300' : 'text-red-300'}`}>
                          {cert.status}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Awarded Qualification</div>
                      <div className="text-lg font-semibold text-white">{cert.qualification}</div>
                    </div>
                    <div className="text-xs text-gray-400 pt-4 border-t border-slate-600">
                      Created: {new Date(cert.created_at).toLocaleString()}
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Results Count */}
        <div className="mt-8 text-center text-gray-400">
          Showing {filteredCertificates.length} of {certificates.length} certificates
        </div>

        {/* Add/Edit Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 w-full max-w-2xl rounded-lg border border-slate-600">
              <div className="p-6 border-b border-slate-600 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">
                  {editingId ? 'Edit Certificate' : 'Add New Certificate'}
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-1 hover:bg-slate-700 rounded transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Certificate ID *</label>
                  <input
                    type="text"
                    value={formData.certificate_id}
                    onChange={(e) => setFormData({ ...formData, certificate_id: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="e.g., DMHCA-PGC-1234567890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name *</label>
                  <input
                    type="text"
                    value={formData.full_name}
                    onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="e.g., Dr. Sreeja PS"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Awarded Qualification *</label>
                  <input
                    type="text"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="e.g., Fellowship in Fetal Medicine"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Mode *</label>
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value as any })}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="Online">Online</option>
                      <option value="Blended">Blended</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Month & Year *</label>
                    <input
                      type="text"
                      value={formData.month_year}
                      onChange={(e) => setFormData({ ...formData, month_year: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="e.g., April 2023"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleSaveCertificate}
                    className="flex-1 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                  >
                    {editingId ? 'Update Certificate' : 'Add Certificate'}
                  </button>
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-6 py-3 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold transition"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-lg border border-slate-600 p-6 max-w-sm">
              <h3 className="text-lg font-bold text-white mb-4">Delete Certificate?</h3>
              <p className="text-gray-300 mb-6">Are you sure you want to delete this certificate? This action cannot be undone.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDeleteCertificate(deleteConfirmId!)}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition text-white"
                >
                  Delete
                </button>
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setDeleteConfirmId(null);
                  }}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-semibold transition text-white"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
