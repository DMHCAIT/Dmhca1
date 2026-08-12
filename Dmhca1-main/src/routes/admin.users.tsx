import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Trash2, Eye } from 'lucide-react';

export const Route = createFileRoute('/admin/users')({
  component: UsersManagement,
});

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  course_interested?: string;
  status: string;
  created_at: string;
}

function UsersManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'signups' | 'enrollments'>('signups');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      if (activeTab === 'signups') {
        const { data, error } = await supabaseClient
          .from('user_signups')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setUsers(data || []);
      } else {
        const { data, error } = await supabaseClient
          .from('course_enrollments')
          .select('*')
          .order('enrollment_date', { ascending: false });

        if (error) throw error;
        setUsers(
          data?.map((e) => ({
            id: e.id,
            name: e.user_name || 'Unknown',
            email: e.user_email,
            status: e.status,
            created_at: e.enrollment_date,
          })) || []
        );
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (userId: string, newStatus: string) => {
    try {
      const { error } = await supabaseClient
        .from(activeTab === 'signups' ? 'user_signups' : 'course_enrollments')
        .update({ status: newStatus })
        .eq('id', userId);

      if (error) throw error;
      fetchUsers();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (userId: string) => {
    if (!confirm('Delete this user?')) return;

    try {
      const { error } = await supabaseClient
        .from(activeTab === 'signups' ? 'user_signups' : 'course_enrollments')
        .delete()
        .eq('id', userId);

      if (error) throw error;
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-navy-deep mb-4">User Management</h1>
        <div className="flex gap-4">
          <button
            onClick={() => {
              setActiveTab('signups');
              fetchUsers();
            }}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === 'signups' ? 'bg-gold text-navy-deep' : 'bg-gray-300 text-gray-700'
            }`}
          >
            Signups
          </button>
          <button
            onClick={() => {
              setActiveTab('enrollments');
              fetchUsers();
            }}
            className={`px-4 py-2 rounded-lg font-semibold transition ${
              activeTab === 'enrollments' ? 'bg-gold text-navy-deep' : 'bg-gray-300 text-gray-700'
            }`}
          >
            Enrollments
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-12">Loading users...</div>
      ) : users.length === 0 ? (
        <div className="text-center py-12 text-gray-600">No users found</div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full">
            <thead className="bg-gray-200 border-b">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Name</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                {activeTab === 'signups' && <th className="px-6 py-3 text-left font-semibold">Phone</th>}
                {activeTab === 'signups' && <th className="px-6 py-3 text-left font-semibold">Course</th>}
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-center font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  {activeTab === 'signups' && <td className="px-6 py-4">{(user as any).phone || '-'}</td>}
                  {activeTab === 'signups' && <td className="px-6 py-4">{(user as any).course_interested || '-'}</td>}
                  <td className="px-6 py-4">
                    <select
                      value={user.status}
                      onChange={(e) => handleStatusChange(user.id, e.target.value)}
                      className={`px-3 py-1 rounded font-semibold border-0 cursor-pointer ${
                        user.status === 'new'
                          ? 'bg-blue-100 text-blue-800'
                          : user.status === 'contacted'
                            ? 'bg-yellow-100 text-yellow-800'
                            : user.status === 'enrolled' || user.status === 'active'
                              ? 'bg-green-100 text-green-800'
                              : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {activeTab === 'signups' ? (
                        <>
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="enrolled">Enrolled</option>
                          <option value="rejected">Rejected</option>
                        </>
                      ) : (
                        <>
                          <option value="active">Active</option>
                          <option value="completed">Completed</option>
                          <option value="paused">Paused</option>
                          <option value="cancelled">Cancelled</option>
                        </>
                      )}
                    </select>
                  </td>
                  <td className="px-6 py-4">{new Date(user.created_at).toLocaleDateString()}</td>
                  <td className="px-6 py-4 flex justify-center gap-2">
                    <button className="p-2 hover:bg-blue-100 rounded transition">
                      <Eye size={18} className="text-blue-600" />
                    </button>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className="p-2 hover:bg-red-100 rounded transition"
                    >
                      <Trash2 size={18} className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
