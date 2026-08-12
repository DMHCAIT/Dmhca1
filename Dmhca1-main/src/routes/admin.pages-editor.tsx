import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Save, X, ArrowLeft } from 'lucide-react';

export const Route = createFileRoute('/admin/pages-editor')({
  head: () => ({
    meta: [
      { title: 'Page Editor — Admin' },
      { name: 'description', content: 'Edit website pages' },
    ],
  }),
  component: PagesEditor,
});

interface PageContent {
  id: string;
  page_name: string;
  display_name: string;
  heroDescription?: string;
  heroImage?: string;
  sections?: any[];
  content: string;
  meta_description: string;
  meta_keywords: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

const EDITABLE_PAGES = [
  { page_name: 'home', display_name: 'Home Page', icon: '🏠' },
  { page_name: 'about', display_name: 'About Us', icon: 'ℹ️' },
  { page_name: 'contact', display_name: 'Contact Page', icon: '📧' },
  { page_name: 'courses-overview', display_name: 'Courses Overview', icon: '📚' },
  { page_name: 'events-overview', display_name: 'Events & Webinars', icon: '📅' },
];

function PagesEditor() {
  const [pages, setPages] = useState<PageContent[]>([]);
  const [selectedPage, setSelectedPage] = useState<PageContent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    heroDescription: '',
    heroImage: '',
    content: '',
    meta_description: '',
    meta_keywords: '',
    is_active: true,
  });

  useEffect(() => {
    loadPages();
  }, []);

  const loadPages = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabaseClient
        .from('site_pages')
        .select('*')
        .in(
          'page_name',
          EDITABLE_PAGES.map((p) => p.page_name)
        );

      if (error && !error.message.includes('not found')) {
        throw error;
      }

      // Merge with default pages if not found
      const loadedPages = data || [];
      const pageMap = new Map(loadedPages.map((p) => [p.page_name, p]));

      const completePages = EDITABLE_PAGES.map((defaultPage) => {
        const existing = pageMap.get(defaultPage.page_name);
        return (
          existing || {
            id: '',
            page_name: defaultPage.page_name,
            display_name: defaultPage.display_name,
            heroDescription: '',
            heroImage: '',
            content: '',
            meta_description: '',
            meta_keywords: '',
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          }
        );
      });

      setPages(completePages);
    } catch (error) {
      console.error('Error loading pages:', error);
    } finally {
      setLoading(false);
    }
  };

  const selectPage = (page: PageContent) => {
    setSelectedPage(page);
    setFormData({
      heroDescription: page.heroDescription || '',
      heroImage: page.heroImage || '',
      content: page.content || '',
      meta_description: page.meta_description || '',
      meta_keywords: page.meta_keywords || '',
      is_active: page.is_active,
    });
  };

  const savePage = async () => {
    if (!selectedPage) return;

    try {
      setSaving(true);

      if (selectedPage.id) {
        const { error } = await supabaseClient
          .from('site_pages')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', selectedPage.id);

        if (error) throw error;
        alert('✅ Page updated successfully!');
      } else {
        const { error } = await supabaseClient.from('site_pages').insert([
          {
            page_name: selectedPage.page_name,
            display_name: selectedPage.display_name,
            ...formData,
            created_at: new Date().toISOString(),
          },
        ]);

        if (error) throw error;
        alert('✅ Page created successfully!');
      }

      // Update local state
      setPages(
        pages.map((p) =>
          p.page_name === selectedPage.page_name ? { ...p, ...formData } : p
        )
      );
      setSelectedPage({ ...selectedPage, ...formData });
    } catch (error) {
      console.error('Error saving page:', error);
      alert('Error saving page: ' + (error as any).message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="p-6 flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading pages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-navy-deep">✏️ Page Editor</h1>
        <p className="text-sm text-gray-600 mt-2">Edit website page content and meta information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Page List */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b bg-gray-50">
              <p className="font-semibold text-sm text-gray-700">Pages</p>
            </div>
            <div className="divide-y">
              {pages.map((page) => (
                <button
                  key={page.page_name}
                  onClick={() => selectPage(page)}
                  className={`w-full text-left p-3 hover:bg-gray-50 transition ${
                    selectedPage?.page_name === page.page_name
                      ? 'bg-gold bg-opacity-10 border-l-4 border-gold'
                      : ''
                  }`}
                >
                  <p className="font-medium text-sm text-navy-deep">
                    {page.display_name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{page.page_name}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Editor */}
        {selectedPage && (
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-navy-deep">
                  {selectedPage.display_name}
                </h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      selectPage(pages.find((p) => p.page_name === selectedPage.page_name) || selectedPage);
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
                  >
                    <X size={16} />
                    Cancel
                  </button>
                  <button
                    onClick={savePage}
                    disabled={saving}
                    className="flex items-center gap-2 px-4 py-2 bg-gold text-navy-deep rounded-lg hover:bg-yellow-400 transition disabled:opacity-50 font-semibold"
                  >
                    <Save size={16} />
                    Save Changes
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                {/* Hero Section */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-4 text-navy-deep">Hero Section</h3>
                  <div className="space-y-4">
                    {/* Hero title removed - use page display name instead */}
                    <div>
                      <label className="block text-sm font-semibold mb-2">Hero Description</label>
                      <textarea
                        value={formData.heroDescription}
                        onChange={(e) =>
                          setFormData({ ...formData, heroDescription: e.target.value })
                        }
                        className="w-full border rounded-lg px-4 py-3 focus:border-gold focus:outline-none resize-none"
                        rows={3}
                        placeholder="Hero section description"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Hero Image URL</label>
                      <input
                        type="url"
                        value={formData.heroImage}
                        onChange={(e) =>
                          setFormData({ ...formData, heroImage: e.target.value })
                        }
                        className="w-full border rounded-lg px-4 py-3 focus:border-gold focus:outline-none"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="border-b pb-6">
                  <h3 className="text-lg font-semibold mb-4 text-navy-deep">Main Content</h3>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 focus:border-gold focus:outline-none resize-none font-mono text-sm"
                    rows={10}
                    placeholder="Page content (HTML or plain text)"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    💡 Tip: You can use HTML tags for formatting
                  </p>
                </div>

                {/* SEO Section */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-navy-deep">SEO Settings</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Meta Description</label>
                      <textarea
                        value={formData.meta_description}
                        onChange={(e) =>
                          setFormData({ ...formData, meta_description: e.target.value })
                        }
                        className="w-full border rounded-lg px-4 py-3 focus:border-gold focus:outline-none resize-none"
                        rows={2}
                        placeholder="Brief description for search engines (160 chars max)"
                        maxLength={160}
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        {formData.meta_description.length}/160 characters
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Meta Keywords</label>
                      <input
                        type="text"
                        value={formData.meta_keywords}
                        onChange={(e) =>
                          setFormData({ ...formData, meta_keywords: e.target.value })
                        }
                        className="w-full border rounded-lg px-4 py-3 focus:border-gold focus:outline-none"
                        placeholder="keyword1, keyword2, keyword3"
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="is_active"
                        checked={formData.is_active}
                        onChange={(e) =>
                          setFormData({ ...formData, is_active: e.target.checked })
                        }
                        className="w-4 h-4 cursor-pointer"
                      />
                      <label htmlFor="is_active" className="text-sm font-medium cursor-pointer">
                        Page is active and visible
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
