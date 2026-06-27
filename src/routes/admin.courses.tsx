import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Plus, Edit2, Trash2, Eye, X } from 'lucide-react';
import Modal from '@/components/ui/Modal';

export const Route = createFileRoute('/admin/courses')({
  component: CoursesManagement,
});

interface Course {
  id: string;
  title: string;
  slug: string;
  category: string;
  price: number;
  duration_weeks: number;
  instructor_name: string;
  short_description: string;
  description: string;
  image_url?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

function CoursesManagement() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    description: '',
    short_description: '',
    price: 0,
    duration_weeks: 0,
    instructor_name: '',
    image_url: '',
    image_file_name: '',
    is_active: true,
  });
  const [mediaFiles, setMediaFiles] = useState<{ name: string; url: string }[]>([]);
  const [showMediaPicker, setShowMediaPicker] = useState(false);
  const selectMedia = (name: string) => {
    const found = mediaFiles.find((m) => m.name === name);
    if (!found) return;
    setFormData({ ...formData, image_file_name: found.name, image_url: found.url });
    setShowMediaPicker(false);
  };

  const categories = [
    'cardiology', 'radiology', 'medicine', 'obs-gynae', 'emergency',
    'orthopedics', 'dermatology', 'general-surgery', 'oncology', 'endocrinology',
    'neurology', 'pediatrics', 'reproductive', 'pulmonary', 'nutrition',
    'dental', 'gastroenterology', 'urology', 'management'
  ];

  useEffect(() => {
    fetchCourses();
    fetchMediaFiles();
  }, []);

  const fetchMediaFiles = async () => {
    try {
      const { data } = await supabaseClient.storage.from('course-images').list('', { limit: 500 });
      if (!data) return setMediaFiles([]);
      const items = data.map((f: any) => ({ name: f.name, url: supabaseClient.storage.from('course-images').getPublicUrl(f.name).data.publicUrl }));
      setMediaFiles(items);
    } catch (err) {
      console.error('Error fetching media files', err);
    }
  };

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabaseClient
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setCourses(data || []);
    } catch (error) {
      console.error('Error fetching courses:', error);
      alert('Error fetching courses. Please check console.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      category: '',
      description: '',
      short_description: '',
      price: 0,
      duration_weeks: 0,
      instructor_name: '',
      image_url: '',
      is_active: true,
    });
    setEditingId(null);
    setShowForm(false);
  };

  const handleSave = async () => {
    if (!formData.title || !formData.slug || !formData.category) {
      alert('Please fill in all required fields');
      return;
    }

    try {
      setSaving(true);
      if (editingId) {
        const { error } = await supabaseClient
          .from('courses')
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq('id', editingId);

        if (error) throw error;
        alert('✅ Course updated successfully!');
      } else {
        const { error } = await supabaseClient.from('courses').insert([
          {
            ...formData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          },
        ]);

        if (error) throw error;
        alert('✅ Course created successfully!');
      }
      resetForm();
      fetchCourses();
    } catch (error) {
      console.error('Error saving course:', error);
      alert('Error saving course. Please check console.');
    } finally {
      setSaving(false);
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${formData.slug || 'course'}-${Date.now()}.${fileExt}`;
      const { data, error: uploadError } = await supabaseClient.storage
        .from('course-images')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      // get public URL
      const { data: urlData } = supabaseClient.storage.from('course-images').getPublicUrl(fileName);
      const publicUrl = urlData.publicUrl;

      setFormData({ ...formData, image_url: publicUrl, image_file_name: fileName });
      alert('✅ Image uploaded');
    } catch (err) {
      console.error('Image upload error', err);
      alert('Error uploading image');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this course?')) return;

    try {
      const { error } = await supabaseClient.from('courses').delete().eq('id', id);

      if (error) throw error;
      alert('✅ Course deleted successfully!');
      fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
      alert('Error deleting course');
    }
  };

  const handleEdit = (course: Course) => {
    setFormData({
      title: course.title,
      slug: course.slug,
      category: course.category,
      description: course.description || '',
      short_description: course.short_description || '',
      price: course.price,
      duration_weeks: course.duration_weeks,
      instructor_name: course.instructor_name,
      image_url: course.image_url || '',
      is_active: course.is_active,
    });
    setEditingId(course.id);
    setShowForm(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-navy-deep">📚 Courses Management</h1>
        <button
          onClick={() => {
            if (showForm) {
              resetForm();
            } else {
              setShowForm(true);
            }
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gold text-navy-deep rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          <Plus size={20} />
          {showForm ? 'Cancel' : 'Add New Course'}
        </button>
      </div>

      {showForm && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6 border-2 border-gold">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">{editingId ? '✏️ Edit Course' : '➕ Add New Course'}</h2>
            <button onClick={resetForm} className="text-gray-600 hover:text-red-600">
              <X size={24} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Course Title *"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="border rounded-lg px-4 py-2 focus:border-gold focus:outline-none"
            />
            <input
              type="text"
              placeholder="Slug (URL-friendly) *"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
              className="border rounded-lg px-4 py-2 focus:border-gold focus:outline-none"
            />
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="border rounded-lg px-4 py-2 focus:border-gold focus:outline-none"
            >
              <option value="">Select Category *</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat.charAt(0).toUpperCase() + cat.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Price (₹) *"
              value={formData.price}
              onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) || 0 })}
              className="border rounded-lg px-4 py-2 focus:border-gold focus:outline-none"
            />
            <input
              type="text"
              placeholder="Instructor Name"
              value={formData.instructor_name}
              onChange={(e) => setFormData({ ...formData, instructor_name: e.target.value })}
              className="border rounded-lg px-4 py-2 focus:border-gold focus:outline-none"
            />
            <input
              type="number"
              placeholder="Duration (weeks)"
              value={formData.duration_weeks}
              onChange={(e) => setFormData({ ...formData, duration_weeks: parseInt(e.target.value) || 0 })}
              className="border rounded-lg px-4 py-2 focus:border-gold focus:outline-none"
            />
            <input
              type="url"
              placeholder="Image URL"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              className="border rounded-lg px-4 py-2 col-span-2 focus:border-gold focus:outline-none"
            />
            <div className="col-span-2">
              <label className="block text-sm font-semibold mb-1">Or choose uploaded image</label>
              <select
                value={formData.image_file_name || ''}
                onChange={(e) => {
                  const name = e.target.value;
                  const found = mediaFiles.find((m) => m.name === name);
                  setFormData({ ...formData, image_file_name: name, image_url: found ? found.url : '' });
                }}
                className="w-full border rounded-lg px-3 py-2"
              >
                <option value="">Select uploaded image</option>
                {mediaFiles.map((m) => (
                  <option key={m.name} value={m.name}>{m.name}</option>
                ))}
              </select>
              <div className="mt-2 flex items-start gap-4">
                {formData.image_url && (
                  <img src={formData.image_url} alt="preview" className="w-40 h-24 object-cover rounded" />
                )}
                <button
                  onClick={() => setShowMediaPicker(true)}
                  type="button"
                  className="px-3 py-2 bg-gray-100 rounded border"
                >
                  Choose from media
                </button>
              </div>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-semibold mb-1">Or upload image</label>
              <input type="file" accept="image/*" onChange={handleFileChange} className="w-full" />
              {formData.image_url && (
                <div className="mt-2">
                  <img src={formData.image_url} alt="preview" className="w-40 h-24 object-cover rounded" />
                </div>
              )}
            </div>
            <textarea
              placeholder="Short Description"
              value={formData.short_description}
              onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
              className="border rounded-lg px-4 py-2 col-span-2 focus:border-gold focus:outline-none"
              rows={2}
            />
            <textarea
              placeholder="Full Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="border rounded-lg px-4 py-2 col-span-2 focus:border-gold focus:outline-none"
              rows={3}
            />
            <div className="col-span-2 flex items-center gap-2">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                className="w-4 h-4"
              />
              <label htmlFor="is_active" className="text-sm font-medium">
                Active on website
              </label>
            </div>
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="mt-4 px-6 py-2 bg-navy-deep text-white rounded-lg font-semibold hover:bg-blue-900 transition disabled:opacity-50"
          >
            {saving ? 'Saving...' : editingId ? '💾 Update Course' : '➕ Create Course'}
          </button>
        </div>
      )}

      {/* Media Picker Modal */}
      {showMediaPicker && (
        <Modal open={showMediaPicker} onClose={() => setShowMediaPicker(false)} title="Choose image from media">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {mediaFiles.map((m) => (
              <div key={m.name} className="border rounded overflow-hidden">
                <img src={m.url} alt={m.name} className="w-full h-28 object-cover" />
                <div className="p-2 flex items-center justify-between">
                  <div className="text-sm truncate mr-2">{m.name}</div>
                  <button onClick={() => selectMedia(m.name)} className="text-sm text-gold px-2 py-1">Select</button>
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}

      {loading ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-600">⏳ Loading courses...</p>
        </div>
      ) : courses.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-600 text-lg">📭 No courses found yet.</p>
          <p className="text-gray-500">Click "Add New Course" to get started!</p>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-navy-deep text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Title</th>
                  <th className="px-6 py-4 text-left font-semibold">Category</th>
                  <th className="px-6 py-4 text-left font-semibold">Price</th>
                  <th className="px-6 py-4 text-left font-semibold">Weeks</th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                  <th className="px-6 py-4 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4 font-medium text-navy-deep">{course.title}</td>
                    <td className="px-6 py-4 text-sm">{course.category}</td>
                    <td className="px-6 py-4 font-semibold text-gold">₹{course.price.toLocaleString()}</td>
                    <td className="px-6 py-4">{course.duration_weeks} weeks</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          course.is_active
                            ? 'bg-green-100 text-green-800'
                            : 'bg-red-100 text-red-800'
                        }`}
                      >
                        {course.is_active ? '✅ Active' : '❌ Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 flex justify-center gap-2">
                      <button
                        onClick={() => handleEdit(course)}
                        className="p-2 hover:bg-blue-100 rounded transition"
                        title="Edit"
                      >
                        <Edit2 size={18} className="text-blue-600" />
                      </button>
                      <button
                        onClick={() => handleDelete(course.id)}
                        className="p-2 hover:bg-red-100 rounded transition"
                        title="Delete"
                      >
                        <Trash2 size={18} className="text-red-600" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
