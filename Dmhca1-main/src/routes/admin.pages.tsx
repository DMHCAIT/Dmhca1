import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Plus, Edit2, Trash2, X, Save } from 'lucide-react';

export const Route = createFileRoute('/admin/pages')({
  component: PagesManagement,
});

interface Page {
  id: string;
  page_name: string;
  display_name: string;
  content: string;
  meta_description: string;
  meta_keywords: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const AVAILABLE_PAGES = [
  { page_name: 'home', display_name: 'Home' },
  { page_name: 'about', display_name: 'About Us' },
  { page_name: 'courses-overview', display_name: 'Courses Overview' },
  { page_name: 'events-overview', display_name: 'Events & Webinars' },
  { page_name: 'contact', display_name: 'Contact Us' },
  { page_name: 'blog', display_name: 'Blog' },
  { page_name: 'privacy-policy', display_name: 'Privacy Policy' },
  { page_name: 'terms-conditions', display_name: 'Terms & Conditions' },
];

function PagesManagement() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPage, setEditingPage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    display_name: '',
    content: '',
    meta_description: '',
    meta_keywords: '',
    is_active: true,
  });

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabaseClient
        .from('site_pages')
        .select('*')
        .order('created_at', { ascending: true })
        .catch(() => ({ data: [] }));

      if (error && !error.message.includes('not found')) console.error('Error:', error);
      setPages(data || []);
    } catch (error) {
      console.error('Error fetching pages:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditPage = (page: Page) => {
    setFormData({
      display_name: page.display_name,
      content: page.content || '',
      meta_description: page.meta_description || '',
      meta_keywords: page.meta_keywords || '',
      is_active: page.is_active,
    });
    setEditingPage(page.page_name);
  };

  const handleSave = async () => {
    if (!editingPage || !formData.display_name) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setSaving(true);
      
      const existingPage = pages.find(p => p.page_name === editingPage);
      
      if (existingPage) {
        const { error } = await supabaseClient
          .from('site_pages')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq('page_name', editingPage);

        if (error) throw error;
        alert('✅ Page updated successfully!');
      } else {
        const { error } = await supabaseClient.from('site_pages').insert([
          {
            page_name: editingPage,
            ...formData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]);

        if (error) throw error;
        alert('✅ Page created successfully!');
      }

      resetForm();
      fetchPages();
    } catch (error) {
      console.error('Error saving page:', error);
      alert('Error saving page. Please check console.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (pageName: string) => {
    if (!confirm('Are you sure you want to delete this page?')) return;

    try {
      const { error } = await supabaseClient
        .from('site_pages')
        .delete()
        .eq('page_name', pageName);

      if (error) throw error;
      alert('✅ Page deleted successfully!');
      fetchPages();
    } catch (error) {
      console.error('Error deleting page:', error);
      alert('Error deleting page');
    }
  };

  const resetForm = () => {
    setFormData({
      display_name: '',
      content: '',
      meta_description: '',
      meta_keywords: '',
      is_active: true,
    });
    setEditingPage(null);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-navy-deep mb-6">📄 Pages Management</h1>

      {editingPage && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-2 border-gold">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              ✏️ Edit: {formData.display_name}
            </h2>
            <button onClick={resetForm} className="text-gray-600 hover:text-red-600">
              <X size={24} />
            </button>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Page Title *"
              value={formData.display_name}
              onChange={(e) =>
                setFormData({ ...formData, display_name: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:border-gold focus:outline-none"
            />

            <input
              type="text"
              placeholder="Meta Description (for SEO)"
              value={formData.meta_description}
              onChange={(e) =>
                setFormData({ ...formData, meta_description: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:border-gold focus:outline-none"
            />

            <input
              type="text"
              placeholder="Meta Keywords (comma-separated)"
              value={formData.meta_keywords}
              onChange={(e) =>
                setFormData({ ...formData, meta_keywords: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:border-gold focus:outline-none"
            />

            <textarea
              placeholder="Page Content (HTML supported)"
              value={formData.content}
              onChange={(e) =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full border rounded-lg px-4 py-2 focus:border-gold focus:outline-none"
              rows={8}
            />

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
                className="w-4 h-4"
              />
              <label htmlFor="is_active" className="text-sm font-medium">
                Active on website
              </label>
            </div>

            <div className="flex gap-2 pt-4">
              <button
                onClick={handleSave}
                disabled={saving}
                className="flex items-center gap-2 px-6 py-2 bg-navy-deep text-white rounded-lg font-semibold hover:bg-blue-900 transition disabled:opacity-50"
              >
                <Save size={18} />
                {saving ? 'Saving...' : '💾 Save Page'}
              </button>
              <button
                onClick={resetForm}
                className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg font-semibold hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-600">⏳ Loading pages...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AVAILABLE_PAGES.map((availablePage) => {
            const existingPage = pages.find(
              (p) => p.page_name === availablePage.page_name
            );
            return (
              <div
                key={availablePage.page_name}
                className={`rounded-lg shadow-md p-4 border-2 ${
                  existingPage
                    ? 'border-green-300 bg-green-50'
                    : 'border-gray-300 bg-gray-100'
                }`}
              >
                <h3 className="text-lg font-bold text-navy-deep mb-2">
                  {availablePage.display_name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  <code className="bg-gray-200 px-2 py-1 rounded">
                    {availablePage.page_name}
                  </code>
                </p>

                {existingPage && (
                  <p className="text-xs text-gray-500 mb-3">
                    Last updated:{' '}
                    {new Date(existingPage.updated_at).toLocaleDateString()}
                  </p>
                )}

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditPage(existingPage || { page_name: availablePage.page_name, display_name: availablePage.display_name } as any)}
                    className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
                  >
                    <Edit2 size={16} />
                    Edit
                  </button>
                  {existingPage && (
                    <button
                      onClick={() => handleDelete(existingPage.page_name)}
                      className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition text-sm"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  )}
                </div>

                {existingPage && (
                  <div className="mt-2 px-2 py-1 bg-green-200 text-green-800 rounded text-xs font-semibold text-center">
                    ✅ {existingPage.is_active ? 'Published' : 'Draft'}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
