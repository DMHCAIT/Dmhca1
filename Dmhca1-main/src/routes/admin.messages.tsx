import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Trash2, Calendar, Mail, Phone, CheckCircle2 } from 'lucide-react';
import type { ContactMessage } from '@/lib/supabase';

export const Route = createFileRoute('/admin/messages')({
  head: () => ({
    meta: [
      { title: 'Contact Messages — Admin' },
      { name: 'description', content: 'Manage contact form submissions' },
    ],
  }),
  component: AdminMessages,
});

function AdminMessages() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'new' | 'reviewed' | 'responded'>('all');

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      let query = supabaseClient
        .from('contact_messages')
        .select('*')
        .order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('status', filter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error('Error loading messages:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadMessages();
  }, [filter]);

  const deleteMessage = async (id: string) => {
    if (!confirm('Delete this message?')) return;

    setDeleting(id);
    try {
      const { error } = await supabaseClient
        .from('contact_messages')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setMessages(messages.filter((m) => m.id !== id));
    } catch (error) {
      alert('Error deleting message: ' + (error as any).message);
    } finally {
      setDeleting(null);
    }
  };

  const updateStatus = async (id: string, status: ContactMessage['status']) => {
    setUpdating(id);
    try {
      const { error } = await supabaseClient
        .from('contact_messages')
        .update({ status, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      setMessages(messages.map((m) => (m.id === id ? { ...m, status } : m)));
    } catch (error) {
      alert('Error updating status: ' + (error as any).message);
    } finally {
      setUpdating(null);
    }
  };

  const getStatusColor = (status: ContactMessage['status']) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'reviewed':
        return 'bg-yellow-100 text-yellow-800';
      case 'responded':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-navy-deep">Contact Messages</h1>
          <p className="text-gray-600 mt-2">Total: {messages.length} messages</p>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap">
        {(['all', 'new', 'reviewed', 'responded'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              filter === f
                ? 'bg-gold text-navy-deep'
                : 'bg-white text-gray-700 border border-gray-300 hover:border-gold'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {messages.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <p className="text-gray-600">No messages found</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-navy-deep">{message.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${getStatusColor(message.status)}`}>
                      {message.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Mail className="w-4 h-4" />
                      {message.email}
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      {message.phone}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(message.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => deleteMessage(message.id)}
                  disabled={deleting === message.id}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition disabled:opacity-50"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-700">{message.message}</p>
                {message.course && <p className="text-sm text-gray-600 mt-2">Course: {message.course}</p>}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => updateStatus(message.id, 'reviewed')}
                  disabled={updating === message.id || message.status === 'reviewed'}
                  className="px-3 py-1 text-sm bg-yellow-100 text-yellow-800 rounded hover:bg-yellow-200 transition disabled:opacity-50"
                >
                  Mark Reviewed
                </button>
                <button
                  onClick={() => updateStatus(message.id, 'responded')}
                  disabled={updating === message.id || message.status === 'responded'}
                  className="px-3 py-1 text-sm bg-green-100 text-green-800 rounded hover:bg-green-200 transition disabled:opacity-50 flex items-center gap-1"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  Mark Responded
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
