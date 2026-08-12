import { createFileRoute } from '@tanstack/react-router';
import { Settings as SettingsIcon } from 'lucide-react';

export const Route = createFileRoute('/admin/settings')({
  head: () => ({
    meta: [
      { title: 'Settings — Admin' },
      { name: 'description', content: 'Admin panel settings' },
    ],
  }),
  component: AdminSettings,
});

function AdminSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-deep">Settings</h1>
        <p className="text-gray-600 mt-2">Configure admin panel and system settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-navy-deep mb-4 flex items-center gap-2">
            <SettingsIcon className="w-5 h-5" />
            General Settings
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
              <input
                type="text"
                defaultValue="DMHCA"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Support Email</label>
              <input
                type="email"
                defaultValue="admin@dmhca.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:outline-none"
              />
            </div>
            <button className="w-full px-4 py-2 bg-gold text-navy-deep rounded-lg font-semibold hover:bg-yellow-400 transition">
              Save Changes
            </button>
          </div>
        </div>

        {/* Storage Settings */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-navy-deep mb-4">Storage Info</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Images Bucket</span>
              <span className="font-semibold text-green-600">Active</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-gray-600">Videos Bucket</span>
              <span className="font-semibold text-green-600">Active</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-gray-600">Media Bucket</span>
              <span className="font-semibold text-green-600">Active</span>
            </div>
          </div>
        </div>

        {/* System Info */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-navy-deep mb-4">System Information</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Database Status:</span>
              <span className="font-semibold text-green-600">Connected</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Storage Status:</span>
              <span className="font-semibold text-green-600">Connected</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Auth Status:</span>
              <span className="font-semibold text-green-600">Active</span>
            </div>
          </div>
        </div>

        {/* Admin Users */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-navy-deep mb-4">Admin Users</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700">Current Admin</span>
              <span className="text-xs bg-gold text-navy-deep px-2 py-1 rounded">Admin</span>
            </div>
            <p className="text-xs text-gray-600 mt-2">Manage admin users via Supabase dashboard</p>
          </div>
        </div>
      </div>
    </div>
  );
}
