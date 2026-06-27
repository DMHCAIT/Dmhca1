import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { MessageSquare, Mail, FileText, TrendingUp } from 'lucide-react';

export const Route = createFileRoute('/admin/')({
  head: () => ({
    meta: [
      { title: 'Dashboard — Admin' },
      { name: 'description', content: 'Admin Dashboard Overview' },
    ],
  }),
  component: AdminDashboard,
});

function AdminDashboard() {
  const [stats, setStats] = useState({
    commentCount: 0,
    messageCount: 0,
    pendingMessages: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      // Fetch comments count
      const { count: commentCount } = await supabaseClient
        .from('event_comments')
        .select('id', { count: 'exact', head: true });

      // Fetch contact messages
      const { count: messageCount, data: messages } = await supabaseClient
        .from('contact_messages')
        .select('id, status', { count: 'exact' });

      const pendingMessages = messages?.filter((m) => m.status === 'new').length || 0;

      setStats({
        commentCount: commentCount || 0,
        messageCount: messageCount || 0,
        pendingMessages,
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const StatCard = ({ icon: Icon, title, value, subtitle }: any) => (
    <div className="bg-white rounded-lg shadow p-6 border-l-4 border-gold">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-navy-deep mt-2">{value}</p>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
        <Icon className="w-8 h-8 text-gold opacity-50" />
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-deep">Welcome to Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Manage comments, messages, and media content</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={MessageSquare}
          title="Event Comments"
          value={stats.commentCount}
          subtitle="Total comments from events"
        />
        <StatCard
          icon={Mail}
          title="Contact Messages"
          value={stats.messageCount}
          subtitle="All inquiries received"
        />
        <StatCard
          icon={FileText}
          title="Pending Review"
          value={stats.pendingMessages}
          subtitle="New messages awaiting review"
        />
        <StatCard
          icon={TrendingUp}
          title="Active"
          value="3"
          subtitle="Admin tools available"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-navy-deep mb-4">Quick Stats</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Total Comments</span>
              <span className="font-semibold text-navy-deep">{stats.commentCount}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Total Messages</span>
              <span className="font-semibold text-navy-deep">{stats.messageCount}</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Pending Action</span>
              <span className="font-semibold text-orange-600">{stats.pendingMessages}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-navy-deep mb-4">Features</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full"></span>
              Review and manage event comments
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full"></span>
              Track contact form submissions
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full"></span>
              Upload and manage media files
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-gold rounded-full"></span>
              Configure admin settings
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
