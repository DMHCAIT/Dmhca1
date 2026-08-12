import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Trash2, MessageCircle, Phone, Mail, BookOpen, Calendar } from 'lucide-react';

export const Route = createFileRoute('/admin/chatbot-inquiries')({
  head: () => ({
    meta: [
      { title: 'Chatbot Inquiries — Admin' },
      { name: 'description', content: 'Manage chatbot form submissions' },
    ],
  }),
  component: AdminChatbotInquiries,
});

interface ChatbotInquiry {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  course_name: string;
  status: 'new' | 'reviewed' | 'contacted' | 'enrolled' | 'rejected';
  notes: string;
  created_at: string;
  updated_at: string;
  form_data?: any;
}

function AdminChatbotInquiries() {
  const [inquiries, setInquiries] = useState<ChatbotInquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'new' | 'reviewed' | 'contacted' | 'enrolled' | 'rejected'>('new');
  const [selectedInquiry, setSelectedInquiry] = useState<ChatbotInquiry | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const [notes, setNotes] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadInquiries();
  }, [filter]);

  const loadInquiries = async () => {
    try {
      setLoading(true);
      let query = supabaseClient
        .from('applications')
        .select('*')
        .eq('form_type', 'chatbot_inquiry')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      console.error('Error loading inquiries:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: ChatbotInquiry['status']) => {
    setUpdating(id);
    try {
      const { error } = await supabaseClient
        .from('applications')
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      setInquiries(
        inquiries.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
      );

      if (selectedInquiry?.id === id) {
        setSelectedInquiry({ ...selectedInquiry, status: newStatus });
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

      setInquiries(
        inquiries.map((inq) => (inq.id === id ? { ...inq, notes } : inq))
      );

      if (selectedInquiry?.id === id) {
        setSelectedInquiry({ ...selectedInquiry, notes });
      }
      alert('✅ Notes saved!');
    } catch (error) {
      alert('Error saving notes: ' + (error as any).message);
    } finally {
      setUpdating(null);
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm('Delete this inquiry?')) return;

    try {
      const { error } = await supabaseClient.from('applications').delete().eq('id', id);

      if (error) throw error;
      setInquiries(inquiries.filter((inq) => inq.id !== id));
      if (selectedInquiry?.id === id) setSelectedInquiry(null);
    } catch (error) {
      alert('Error deleting: ' + (error as any).message);
    }
  };

  const getStatusColor = (status: ChatbotInquiry['status']) => {
    switch (status) {
      case 'new':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'reviewed':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-white';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'enrolled':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'rejected':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredInquiries = inquiries.filter(
    (inq) =>
      inq.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inq.course_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading inquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 dark:bg-slate-950 min-h-screen">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-navy-deep dark:text-gold flex items-center gap-2">
            <MessageCircle className="w-8 h-8" />
            Chatbot Inquiries
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Manage customer inquiries from the chatbot widget</p>
        </div>
        <div className="bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow">
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Total: <span className="text-gold text-lg">{inquiries.length}</span></p>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="mb-6 space-y-4">
        <div className="flex gap-2 flex-wrap">
          {['all', 'new', 'reviewed', 'contacted', 'enrolled', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status as any)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                filter === status
                  ? 'bg-gold text-navy-deep'
                  : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-slate-700 hover:border-gold'
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
        
        <input
          type="text"
          placeholder="🔍 Search by name, email, or course..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-slate-700 rounded-lg focus:border-gold dark:bg-slate-800 dark:text-white focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Inquiries List */}
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
            {filteredInquiries.length === 0 ? (
              <div className="p-8 text-center text-gray-500 dark:text-gray-400">
                <MessageCircle className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No inquiries found</p>
              </div>
            ) : (
              <div className="divide-y dark:divide-slate-700">
                {filteredInquiries.map((inq) => (
                  <div
                    key={inq.id}
                    onClick={() => {
                      setSelectedInquiry(inq);
                      setNotes(inq.notes || '');
                    }}
                    className={`p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700 transition ${
                      selectedInquiry?.id === inq.id ? 'bg-gold bg-opacity-10 border-l-4 border-gold' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy-deep dark:text-white">{inq.full_name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 mt-1">
                          <Mail className="w-4 h-4" /> {inq.email}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                          <Phone className="w-4 h-4" /> {inq.phone}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(inq.status)}`}>
                        {inq.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-1">
                      <BookOpen className="w-4 h-4" /> {inq.course_name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(inq.created_at).toLocaleDateString()} at {new Date(inq.created_at).toLocaleTimeString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Detail Panel */}
        {selectedInquiry && (
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4 text-navy-deep dark:text-gold flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              Details
            </h2>

            {/* Status Update */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Status</label>
              <select
                value={selectedInquiry.status}
                onChange={(e) => updateStatus(selectedInquiry.id, e.target.value as ChatbotInquiry['status'])}
                disabled={updating === selectedInquiry.id}
                className="w-full border border-gray-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:border-gold dark:bg-slate-700 dark:text-white focus:outline-none"
              >
                <option value="new">🔴 New</option>
                <option value="reviewed">🔵 Reviewed</option>
                <option value="contacted">🟡 Contacted</option>
                <option value="enrolled">🟢 Enrolled</option>
                <option value="rejected">⚫ Rejected</option>
              </select>
            </div>

            {/* Inquiry Details */}
            <div className="space-y-4 mb-6 pb-6 border-b dark:border-slate-700">
              <div className="bg-gray-50 dark:bg-slate-700 p-3 rounded-lg">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">FULL NAME</p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{selectedInquiry.full_name}</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-slate-700 p-3 rounded-lg">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 flex items-center gap-1">
                  <Mail className="w-3 h-3" /> EMAIL
                </p>
                <p className="text-sm font-medium text-blue-600 dark:text-white break-all">{selectedInquiry.email}</p>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700 p-3 rounded-lg">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 flex items-center gap-1">
                  <Phone className="w-3 h-3" /> PHONE
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{selectedInquiry.phone}</p>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700 p-3 rounded-lg">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 flex items-center gap-1">
                  <BookOpen className="w-3 h-3" /> INTERESTED COURSE
                </p>
                <p className="text-sm font-medium text-gray-900 dark:text-white">{selectedInquiry.course_name}</p>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700 p-3 rounded-lg">
                <p className="text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> SUBMITTED
                </p>
                <p className="text-sm text-gray-900 dark:text-white">
                  {new Date(selectedInquiry.created_at).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Notes */}
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Internal Notes</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full border border-gray-300 dark:border-slate-700 rounded-lg px-3 py-2 text-sm focus:border-gold dark:bg-slate-700 dark:text-white focus:outline-none resize-none"
                rows={4}
                placeholder="Add notes about this inquiry..."
              />
              <button
                onClick={() => updateNotes(selectedInquiry.id)}
                disabled={updating === selectedInquiry.id}
                className="mt-2 w-full bg-gold text-navy-deep px-4 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition disabled:opacity-50"
              >
                Save Notes
              </button>
            </div>

            {/* Actions */}
            <button
              onClick={() => deleteInquiry(selectedInquiry.id)}
              className="w-full flex items-center justify-center gap-2 bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 px-4 py-2 rounded-lg font-semibold hover:bg-red-200 dark:hover:bg-red-800 transition"
            >
              <Trash2 size={16} />
              Delete Inquiry
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
