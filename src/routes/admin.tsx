import { createFileRoute, Outlet, Link, useNavigate } from '@tanstack/react-router';
import { useAdminAuth, logout } from '@/hooks/useAdminAuth';
import {
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Mail,
  Image,
  Settings,
  BookOpen,
  Calendar,
  Users,
  FileText,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';

export const Route = createFileRoute('/admin')({
  head: () => ({
    meta: [
      { title: 'Admin Panel — DMHCA' },
      { name: 'description', content: 'DMHCA Admin Dashboard' },
    ],
  }),
  component: AdminLayout,
});

function AdminLayout() {
  const { isAuthed, isLoading } = useAdminAuth();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthed) {
    return null;
  }

  const handleLogout = async () => {
    await logout();
    navigate({ to: '/admin-login' });
  };

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin', key: 'dashboard' },
    { icon: BookOpen, label: 'Courses', href: '/admin/courses', key: 'courses' },
    { icon: Calendar, label: 'Events', href: '/admin/events', key: 'events' },
    { icon: Users, label: 'Applications', href: '/admin/applications', key: 'applications' },
    { icon: MessageSquare, label: 'Event Comments', href: '/admin/comments', key: 'comments' },
    { icon: Mail, label: 'Contact Messages', href: '/admin/messages', key: 'messages' },
    { icon: FileText, label: 'Page Editor', href: '/admin/pages-editor', key: 'pages-editor' },
    { icon: Image, label: 'Media Manager', href: '/admin/media', key: 'media' },
    { icon: Settings, label: 'Settings', href: '/admin/settings', key: 'settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-navy-deep text-white transition-all duration-300 flex flex-col shadow-lg`}
      >
        {/* Header */}
        <div className="p-4 border-b border-blue-800 flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <h1 className="text-lg font-bold text-gold">DMHCA</h1>
              <p className="text-xs text-blue-200">Admin Panel</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-blue-900 rounded transition"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              to={item.href}
              className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-900 hover:text-gold transition text-sm font-medium"
              activeProps={{ className: 'bg-gold text-navy-deep' }}
            >
              <item.icon size={20} className="flex-shrink-0" />
              {sidebarOpen && <span className="truncate">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-blue-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition text-sm font-medium justify-center"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <div className="bg-white shadow-sm px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-navy-deep">Admin Dashboard</h1>
            <div className="text-sm text-gray-600">
              Welcome back! <span className="font-semibold">Admin</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-auto bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
