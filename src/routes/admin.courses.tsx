import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import { supabaseClient } from '@/lib/supabase';
import { Plus, Edit2, Trash2, Eye, X, Upload, AlertCircle, ChevronUp, ChevronDown, Search } from 'lucide-react';

export const Route = createFileRoute('/admin/courses')({
  component: AdminCourses,
});

function AdminCourses() {
  const [courses, setCourses] = useState<any[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [stats, setStats] = useState({ total: 0, fellowships: 0, pgDiplomas: 0, certificates: 0 });
  const [categories, setCategories] = useState<string[]>([]);
  const [currentCourseId, setCurrentCourseId] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    program: 'Certificate',
    category: '',
    priceINR: '',
    weeks: '',
    level: '',
    lessons: '',
    rating: '',
    reviewCount: '',
    overview: '',
    heroDescription: '',
    learn: [] as string[],
    learnInput: '',
    modules: [] as string[],
    moduleInput: '',
    moduleDetails: [] as string[][],
    moduleDetailInput: '',
    selectedModuleIndex: 0,
    faqs: [] as any[],
    faqQuestion: '',
    faqAnswer: '',
    trainers: [] as any[],
    reviews: [] as any[],
    meta: {} as any,
    metaKey: '',
    metaValue: '',
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    filterAndSearchCourses();
  }, [courses, searchTerm, selectedCategory]);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabaseClient
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const processedCourses = (data || []).map((course: any) => {
        let courseData = course.data ? (typeof course.data === 'string' ? JSON.parse(course.data) : course.data) : {};
        if (course.testimonials && typeof course.testimonials === 'string') {
          try {
            courseData = JSON.parse(course.testimonials);
          } catch (e) {
            console.warn('Could not parse testimonials for course', course.id);
          }
        }
        return { ...course, data: courseData };
      });

      setCourses(processedCourses);

      // Calculate stats
      const fellowships = processedCourses.filter((c: any) => c.data?.program === 'Fellowship').length;
      const pgDiplomas = processedCourses.filter((c: any) => c.data?.program === 'PG Diploma').length;
      const certificates = processedCourses.filter((c: any) => c.data?.program === 'Certificate').length;

      setStats({
        total: processedCourses.length,
        fellowships,
        pgDiplomas,
        certificates,
      });

      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(processedCourses.map((c: any) => c.data?.category || c.category).filter(Boolean))
      ) as string[];
      setCategories(uniqueCategories.sort());
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterAndSearchCourses = () => {
    let filtered = courses;

    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter((course: any) => {
        const title = (course.data?.title || course.title || '').toLowerCase();
        const slug = (course.data?.slug || course.slug || '').toLowerCase();
        const description = (course.data?.overview || '').toLowerCase();
        return title.includes(term) || slug.includes(term) || description.includes(term);
      });
    }

    if (selectedCategory) {
      filtered = filtered.filter((course: any) => {
        const courseCategories = Array.isArray(course.data?.categories)
          ? course.data.categories
          : [course.data?.category || course.category];
        return courseCategories.includes(selectedCategory);
      });
    }

    setFilteredCourses(filtered);
  };

  const handleEditCourse = (course: any) => {
    const courseData = course.data || {};
    setCurrentCourseId(course.id);
    setFormData({
      title: courseData.title || '',
      slug: courseData.slug || '',
      program: courseData.program || 'Certificate',
      category: courseData.category || '',
      priceINR: courseData.priceINR || '',
      weeks: courseData.weeks ? String(courseData.weeks) : '',
      level: courseData.level || '',
      lessons: courseData.lessons ? String(courseData.lessons) : '',
      rating: courseData.rating ? String(courseData.rating) : '',
      reviewCount: courseData.reviewCount ? String(courseData.reviewCount) : '',
      overview: courseData.overview || '',
      heroDescription: courseData.heroDescription || '',
      learn: Array.isArray(courseData.learn) ? courseData.learn : [],
      learnInput: '',
      modules: Array.isArray(courseData.modules) ? courseData.modules : [],
      moduleInput: '',
      moduleDetails: Array.isArray(courseData.moduleDetails) ? courseData.moduleDetails : [],
      moduleDetailInput: '',
      selectedModuleIndex: 0,
      faqs: Array.isArray(courseData.faqs) ? courseData.faqs : [],
      faqQuestion: '',
      faqAnswer: '',
      trainers: Array.isArray(courseData.trainers) ? courseData.trainers : [],
      reviews: Array.isArray(courseData.reviews) ? courseData.reviews : [],
      meta: courseData.meta || {},
      metaKey: '',
      metaValue: '',
    });
    setShowEditModal(true);
  };

  const handleAddCourse = () => {
    setCurrentCourseId(null);
    setFormData({
      title: '',
      slug: '',
      program: 'Certificate',
      category: '',
      priceINR: '',
      weeks: '',
      level: '',
      lessons: '',
      rating: '',
      reviewCount: '',
      overview: '',
      heroDescription: '',
      learn: [],
      learnInput: '',
      modules: [],
      moduleInput: '',
      moduleDetails: [],
      moduleDetailInput: '',
      selectedModuleIndex: 0,
      faqs: [],
      faqQuestion: '',
      faqAnswer: '',
      trainers: [],
      reviews: [],
      meta: {},
      metaKey: '',
      metaValue: '',
    });
    setShowAddModal(true);
  };

  const handleSaveCourse = async () => {
    try {
      if (!formData.title || !formData.slug) {
        alert('Title and Slug are required');
        return;
      }

      const courseData = {
        title: formData.title,
        slug: formData.slug,
        program: formData.program,
        category: formData.category,
        priceINR: parseFloat(formData.priceINR as any) || 0,
        weeks: parseFloat(formData.weeks as any) || 0,
        level: formData.level,
        lessons: parseInt(formData.lessons as any) || 0,
        rating: parseFloat(formData.rating as any) || null,
        reviewCount: parseInt(formData.reviewCount as any) || 0,
        overview: formData.overview,
        heroDescription: formData.heroDescription,
        learn: formData.learn.filter((item) => item.trim()),
        modules: formData.modules.filter((item) => item.trim()),
        moduleDetails: formData.moduleDetails.map((m) => m.filter((item) => item.trim())),
        faqs: formData.faqs.filter((faq) => faq.q && faq.a),
        trainers: formData.trainers,
        reviews: formData.reviews,
        meta: formData.meta,
      };

      if (currentCourseId) {
        // Editing existing course
        const { data: updateData, error } = await supabaseClient
          .from('courses')
          .update({ 
            testimonials: JSON.stringify(courseData),
            slug: formData.slug,
            title: formData.title
          })
          .eq('id', currentCourseId)
          .select();

        console.log('Supabase update response:', { updateData, error });
        if (error) throw error;
      } else {
        // Adding new course
        const { data: insertData, error } = await supabaseClient
          .from('courses')
          .insert([{ 
            testimonials: JSON.stringify(courseData),
            slug: formData.slug,
            title: formData.title,
            category: formData.category,
            price: parseFloat(formData.priceINR as any) || 0,
            duration_weeks: parseFloat(formData.weeks as any) || 0
          }])
          .select();

        console.log('Supabase insert response:', { insertData, error });
        if (error) throw error;
      }

      setShowEditModal(false);
      setShowAddModal(false);
      setCurrentCourseId(null);
      await fetchCourses();
      alert(currentCourseId ? 'Course updated successfully!' : 'Course added successfully!');
    } catch (error) {
      console.error('Error saving course:', error);
      alert('Error saving course: ' + (error as any)?.message || error);
    }
  };

  const handleDeleteCourse = async (courseId: string) => {
    try {
      setShowDeleteConfirm(false);
      const { error } = await supabaseClient
        .from('courses')
        .delete()
        .eq('id', courseId);

      if (error) throw error;
      await fetchCourses();
    } catch (error) {
      console.error('Error deleting course:', error);
      alert('Error deleting course: ' + error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, courseId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setUploadingImage(true);
      const ext = file.name.split('.').pop();
      const fileName = `${courseId}-${Date.now()}.${ext}`;

      const { error: uploadError } = await supabaseClient.storage
        .from('course-images')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: publicUrlData } = supabaseClient.storage
        .from('course-images')
        .getPublicUrl(fileName);
      const publicUrl = publicUrlData.publicUrl;

      // Fetch the current course to preserve all its data
      const { data: courseRecord, error: fetchError } = await supabaseClient
        .from('courses')
        .select('*')
        .eq('id', courseId)
        .single();

      if (fetchError) throw fetchError;

      // Parse existing course data and add image URL
      let courseData = {};
      if (courseRecord.testimonials && typeof courseRecord.testimonials === 'string') {
        try {
          courseData = JSON.parse(courseRecord.testimonials);
        } catch (e) {
          console.warn('Could not parse testimonials');
        }
      }
      
      const updatedData = { ...courseData, image: publicUrl, image_url: publicUrl };

      // Update with both image_url field and the data in testimonials
      const { error: updateError } = await supabaseClient
        .from('courses')
        .update({ 
          image_url: publicUrl,
          testimonials: JSON.stringify(updatedData)
        })
        .eq('id', courseId);

      if (updateError) throw updateError;
      await fetchCourses();
      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image: ' + (error as any)?.message || error);
    } finally {
      setUploadingImage(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2">📚 All Courses</h1>
            <p className="text-gray-400">Browse all {stats.total} medical courses with complete details</p>
          </div>
          <button
            onClick={handleAddCourse}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
          >
            <Plus size={20} />
            Add New Course
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/50">
            <div className="text-3xl font-bold text-blue-300">{stats.total}</div>
            <div className="text-sm text-gray-300">Total Courses</div>
          </div>
          <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/50">
            <div className="text-3xl font-bold text-purple-300">{stats.fellowships}</div>
            <div className="text-sm text-gray-300">Fellowships</div>
          </div>
          <div className="p-4 bg-amber-500/20 rounded-lg border border-amber-500/50">
            <div className="text-3xl font-bold text-amber-300">{stats.pgDiplomas}</div>
            <div className="text-sm text-gray-300">PG Diplomas</div>
          </div>
          <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/50">
            <div className="text-3xl font-bold text-green-300">{stats.certificates}</div>
            <div className="text-sm text-gray-300">Certificates</div>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Search Courses</label>
            <div className="relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by title, slug, or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-300">Filter by Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Courses List */}
        <div className="space-y-4">
          {loading ? (
            <div className="text-center py-12">
              <div className="text-xl text-gray-300">Loading courses...</div>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div className="text-center py-12 p-8 bg-slate-700 rounded-lg border border-slate-600">
              <AlertCircle className="mx-auto mb-4 text-yellow-400" size={40} />
              <div className="text-xl text-gray-300">No courses found</div>
              <p className="text-sm text-gray-400 mt-2">Try adjusting your search or filter</p>
            </div>
          ) : (
            filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-slate-700 border border-slate-600 rounded-lg overflow-hidden hover:border-blue-500 transition"
              >
                {/* Course Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <button
                      onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                      className="flex-1 text-left hover:bg-slate-600/50 transition rounded py-2 px-2"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{course.data?.title || course.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {course.data?.categories?.map((cat: string) => (
                            <span
                              key={cat}
                              className="px-2 py-1 bg-blue-500/30 text-blue-200 text-xs rounded border border-blue-500/50"
                            >
                              {cat}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                          {course.data?.program && (
                            <span className="flex items-center gap-1">
                              📋 {course.data.program}
                            </span>
                          )}
                          {course.data?.priceINR && (
                            <span className="flex items-center gap-1">
                              💰 ₹{course.data.priceINR.toLocaleString()}
                            </span>
                          )}
                          {course.data?.level && (
                            <span className="flex items-center gap-1">
                              📊 {course.data.level}
                            </span>
                          )}
                          {typeof course.data?.weeks !== 'undefined' && (
                            <span className="flex items-center gap-1">
                              ⏱️ {Math.round((course.data.weeks / 4.33) * 10) / 10} months
                            </span>
                          )}
                          {course.data?.heroDescription && (
                            <span className="w-full text-sm text-gray-400 mt-2">{course.data.heroDescription}</span>
                          )}
                          {course.data?.lessons && (
                            <span className="flex items-center gap-1">
                              📖 {course.data.lessons} lessons
                            </span>
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleEditCourse(course)}
                        className="p-2 bg-blue-600 hover:bg-blue-700 rounded transition"
                        title="Edit course"
                      >
                        <Edit2 size={18} />
                      </button>
                      <label className="p-2 bg-purple-600 hover:bg-purple-700 rounded transition cursor-pointer" title="Upload image">
                        <Upload size={18} />
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleImageUpload(e, course.id)}
                          disabled={uploadingImage}
                          className="hidden"
                        />
                      </label>
                      <button
                        onClick={() => {
                          setDeleteConfirmId(course.id);
                          setShowDeleteConfirm(true);
                        }}
                        className="p-2 bg-red-600 hover:bg-red-700 rounded transition"
                        title="Delete course"
                      >
                        <Trash2 size={18} />
                      </button>
                      {expandedCourse === course.id ? (
                        <ChevronUp className="text-gray-400" size={24} />
                      ) : (
                        <ChevronDown className="text-gray-400" size={24} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                {expandedCourse === course.id && (
                  <div className="border-t border-slate-600 p-6 bg-slate-800/50 space-y-6">
                    {/* Overview */}
                    {course.data?.overview && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">📖 Overview</h4>
                        <p className="text-gray-300 leading-relaxed">{course.data.overview}</p>
                      </div>
                    )}

                    {/* Learning Outcomes */}
                    {course.data?.learn && course.data.learn.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">✅ What You'll Learn</h4>
                        <ul className="space-y-2">
                          {course.data.learn.map((item: string, idx: number) => (
                            <li key={idx} className="flex gap-2 text-gray-300">
                              <span className="text-green-400">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Modules */}
                    {course.data?.modules && course.data.modules.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">📚 Modules</h4>
                        <div className="space-y-2">
                          {course.data.modules.map((module: string, idx: number) => (
                            <div key={idx} className="bg-slate-700/50 p-3 rounded border border-slate-600">
                              <div className="font-semibold text-blue-200">Module {idx + 1}: {module}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* FAQs */}
                    {course.data?.faqs && course.data.faqs.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-blue-300 mb-2">❓ FAQs ({course.data.faqs.length})</h4>
                        <div className="space-y-2">
                          {course.data.faqs.map((faq: any, idx: number) => (
                            <div key={idx} className="bg-slate-700/50 p-3 rounded border border-slate-600">
                              <div className="font-semibold text-yellow-300 text-sm mb-1">Q: {faq.q}</div>
                              <div className="text-gray-300 text-sm">A: {faq.a}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Results Count */}
        <div className="mt-8 text-center text-gray-400">
          Showing {filteredCourses.length} of {stats.total} courses
        </div>

        {/* Edit/Add Course Modal */}
        {(showEditModal || showAddModal) && (
          <div className="fixed inset-0 bg-black/60 flex items-start justify-center z-50 overflow-y-auto p-4">
            <div className="bg-slate-800 w-full max-w-4xl mx-auto my-8 rounded-lg border border-slate-600">
              <div className="p-6 border-b border-slate-600 flex items-center justify-between sticky top-0 bg-slate-800">
                <h2 className="text-2xl font-bold text-white">
                  {showEditModal ? 'Edit Course' : 'Add New Course'}
                </h2>
                <button
                  onClick={() => {
                    setShowEditModal(false);
                    setShowAddModal(false);
                    setCurrentCourseId(null);
                  }}
                  className="p-1 hover:bg-slate-700 rounded transition"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                {/* SECTION 1: Basic Information */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">📝 Basic Information</h3>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Course Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="e.g., Certificate in Fetal Monitoring"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Slug *</label>
                    <input
                      type="text"
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="e.g., certificate-in-fetal-monitoring"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Program Type</label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="Certificate">Certificate</option>
                        <option value="PG Diploma">PG Diploma</option>
                        <option value="Fellowship">Fellowship</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Category</label>
                      <input
                        type="text"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="e.g., cardiology"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 2: Pricing & Duration */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">💰 Pricing & Duration</h3>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Price (₹)</label>
                      <input
                        type="number"
                        value={formData.priceINR}
                        onChange={(e) => setFormData({ ...formData, priceINR: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Duration (Months)</label>
                      <input
                        type="number"
                        value={formData.weeks ? Math.round((parseFloat(formData.weeks as any) / 4.33) * 10) / 10 : ''}
                        onChange={(e) => {
                          const months = e.target.value ? parseFloat(e.target.value) : 0;
                          setFormData({ ...formData, weeks: String(Math.round(months * 4.33 * 10) / 10) });
                        }}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="0"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Lessons</label>
                      <input
                        type="number"
                        value={formData.lessons}
                        onChange={(e) => setFormData({ ...formData, lessons: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                        placeholder="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Level</label>
                      <select
                        value={formData.level}
                        onChange={(e) => setFormData({ ...formData, level: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select Level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* SECTION 3: Ratings & Reviews */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">⭐ Ratings & Reviews</h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Rating (0-5)</label>
                      <input
                        type="number"
                        min="0"
                        max="5"
                        step="0.1"
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Review Count</label>
                      <input
                        type="number"
                        value={formData.reviewCount}
                        onChange={(e) => setFormData({ ...formData, reviewCount: e.target.value })}
                        className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>

                {/* SECTION 4: Hero Description */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">🎯 Hero Description</h3>
                  <textarea
                    value={formData.heroDescription}
                    onChange={(e) => setFormData({ ...formData, heroDescription: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Short hero section description..."
                  />
                </div>

                {/* SECTION 5: Overview */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">📖 Overview</h3>
                  <textarea
                    value={formData.overview}
                    onChange={(e) => setFormData({ ...formData, overview: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Course overview and description..."
                  />
                </div>

                {/* SECTION 6: Learning Outcomes */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">✅ What You'll Learn</h3>
                  <div className="mb-3 flex gap-2">
                    <input
                      type="text"
                      value={formData.learnInput}
                      onChange={(e) => setFormData({ ...formData, learnInput: e.target.value })}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && formData.learnInput.trim()) {
                          setFormData({
                            ...formData,
                            learn: [...formData.learn, formData.learnInput.trim()],
                            learnInput: '',
                          });
                        }
                      }}
                      className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Add learning outcome..."
                    />
                    <button
                      onClick={() => {
                        if (formData.learnInput.trim()) {
                          setFormData({
                            ...formData,
                            learn: [...formData.learn, formData.learnInput.trim()],
                            learnInput: '',
                          });
                        }
                      }}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                    >
                      Add
                    </button>
                  </div>
                  <div className="space-y-2">
                    {formData.learn.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-slate-700/50 p-2 rounded">
                        <span className="text-gray-300">{item}</span>
                        <button
                          onClick={() => setFormData({ ...formData, learn: formData.learn.filter((_, i) => i !== idx) })}
                          className="text-red-400 hover:text-red-300"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 7: Modules & Sub-Modules */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">📚 Modules & Sub-Modules</h3>
                  <div className="mb-3 flex gap-2">
                    <input
                      type="text"
                      value={formData.moduleInput}
                      onChange={(e) => setFormData({ ...formData, moduleInput: e.target.value })}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && formData.moduleInput.trim()) {
                          const newModules = [...formData.modules, formData.moduleInput.trim()];
                          const newDetails = [...formData.moduleDetails, []];
                          setFormData({
                            ...formData,
                            modules: newModules,
                            moduleDetails: newDetails,
                            moduleInput: '',
                          });
                        }
                      }}
                      className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Add module..."
                    />
                    <button
                      onClick={() => {
                        if (formData.moduleInput.trim()) {
                          const newModules = [...formData.modules, formData.moduleInput.trim()];
                          const newDetails = [...formData.moduleDetails, []];
                          setFormData({
                            ...formData,
                            modules: newModules,
                            moduleDetails: newDetails,
                            moduleInput: '',
                          });
                        }
                      }}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                    >
                      Add Module
                    </button>
                  </div>
                  <div className="space-y-3 max-h-96 overflow-y-auto">
                    {formData.modules.map((module, idx) => (
                      <div key={idx} className="bg-slate-700/50 p-4 rounded border border-slate-600">
                        {/* Module Header */}
                        <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-500">
                          <span className="font-semibold text-blue-300">Module {idx + 1}: {module}</span>
                          <button
                            onClick={() => {
                              setFormData({
                                ...formData,
                                modules: formData.modules.filter((_, i) => i !== idx),
                                moduleDetails: formData.moduleDetails.filter((_, i) => i !== idx),
                              });
                            }}
                            className="text-red-400 hover:text-red-300 text-lg"
                          >
                            ✕
                          </button>
                        </div>
                        
                        {/* Sub-Modules Section */}
                        <div className="pl-2">
                          <label className="text-xs uppercase font-bold text-gray-400 mb-2 block">Sub-Modules ({formData.moduleDetails[idx]?.length || 0})</label>
                          
                          {/* Add Sub-Module */}
                          <div className="flex gap-2 mb-3">
                            <input
                              type="text"
                              placeholder="Add sub-module..."
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  const input = e.currentTarget.value.trim();
                                  if (input) {
                                    const newDetails = [...formData.moduleDetails];
                                    if (!Array.isArray(newDetails[idx])) newDetails[idx] = [];
                                    newDetails[idx].push(input);
                                    e.currentTarget.value = '';
                                    setFormData({ ...formData, moduleDetails: newDetails });
                                  }
                                }
                              }}
                              className="flex-1 px-3 py-1.5 bg-slate-800 border border-slate-500 rounded text-white text-sm placeholder-gray-500 focus:outline-none focus:border-green-500"
                            />
                            <button
                              onClick={() => {
                                const input = (event?.currentTarget?.previousElementSibling as HTMLInputElement)?.value.trim();
                                if (input) {
                                  const newDetails = [...formData.moduleDetails];
                                  if (!Array.isArray(newDetails[idx])) newDetails[idx] = [];
                                  newDetails[idx].push(input);
                                  (event?.currentTarget?.previousElementSibling as HTMLInputElement).value = '';
                                  setFormData({ ...formData, moduleDetails: newDetails });
                                }
                              }}
                              className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded font-semibold transition"
                            >
                              Add
                            </button>
                          </div>
                          
                          {/* List of Sub-Modules */}
                          <div className="space-y-1 max-h-32 overflow-y-auto">
                            {Array.isArray(formData.moduleDetails[idx]) && formData.moduleDetails[idx].length > 0 ? (
                              formData.moduleDetails[idx].map((submodule: string, sidx: number) => (
                                <div key={sidx} className="flex items-center justify-between gap-2 bg-slate-800/50 p-2 rounded text-sm">
                                  <span className="text-gray-300 flex-1 truncate">→ {submodule}</span>
                                  <button
                                    onClick={() => {
                                      const newDetails = [...formData.moduleDetails];
                                      newDetails[idx] = newDetails[idx].filter((_: string, i: number) => i !== sidx);
                                      setFormData({ ...formData, moduleDetails: newDetails });
                                    }}
                                    className="text-red-400 hover:text-red-300 flex-shrink-0"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))
                            ) : (
                              <div className="text-gray-500 text-sm italic py-2">No sub-modules added</div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {formData.modules.length === 0 && (
                    <div className="text-gray-400 text-sm italic py-4 text-center">No modules added yet</div>
                  )}
                </div>

                {/* SECTION 8: FAQs */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">❓ FAQs</h3>
                  <div className="mb-3 space-y-2">
                    <input
                      type="text"
                      value={formData.faqQuestion}
                      onChange={(e) => setFormData({ ...formData, faqQuestion: e.target.value })}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Question"
                    />
                    <textarea
                      value={formData.faqAnswer}
                      onChange={(e) => setFormData({ ...formData, faqAnswer: e.target.value })}
                      rows={2}
                      className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Answer"
                    />
                    <button
                      onClick={() => {
                        if (formData.faqQuestion.trim() && formData.faqAnswer.trim()) {
                          setFormData({
                            ...formData,
                            faqs: [...formData.faqs, { q: formData.faqQuestion.trim(), a: formData.faqAnswer.trim() }],
                            faqQuestion: '',
                            faqAnswer: '',
                          });
                        }
                      }}
                      className="w-full px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                    >
                      Add FAQ
                    </button>
                  </div>
                  <div className="space-y-2">
                    {formData.faqs.map((faq, idx) => (
                      <div key={idx} className="bg-slate-700/50 p-3 rounded border border-slate-600">
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex-1">
                            <div className="font-semibold text-yellow-300 text-sm mb-1">Q: {faq.q}</div>
                            <div className="text-gray-300 text-sm">A: {faq.a}</div>
                          </div>
                          <button
                            onClick={() => setFormData({ ...formData, faqs: formData.faqs.filter((_, i) => i !== idx) })}
                            className="text-red-400 hover:text-red-300 ml-2"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SECTION 9: Meta Data */}
                <div className="border-b border-slate-600 pb-4">
                  <h3 className="text-lg font-bold text-blue-300 mb-4">ℹ️ Meta Data</h3>
                  <div className="mb-3 flex gap-2">
                    <input
                      type="text"
                      value={formData.metaKey}
                      onChange={(e) => setFormData({ ...formData, metaKey: e.target.value })}
                      className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Key"
                    />
                    <input
                      type="text"
                      value={formData.metaValue}
                      onChange={(e) => setFormData({ ...formData, metaValue: e.target.value })}
                      className="flex-1 px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      placeholder="Value"
                    />
                    <button
                      onClick={() => {
                        if (formData.metaKey.trim() && formData.metaValue.trim()) {
                          setFormData({
                            ...formData,
                            meta: {
                              ...formData.meta,
                              [formData.metaKey.trim()]: formData.metaValue.trim(),
                            },
                            metaKey: '',
                            metaValue: '',
                          });
                        }
                      }}
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-semibold transition"
                    >
                      Add
                    </button>
                  </div>
                  <div className="space-y-1">
                    {Object.entries(formData.meta).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between bg-slate-700/50 p-2 rounded">
                        <span className="text-gray-300 text-sm"><strong>{key}:</strong> {String(value)}</span>
                        <button
                          onClick={() => {
                            const newMeta = { ...formData.meta };
                            delete newMeta[key];
                            setFormData({ ...formData, meta: newMeta });
                          }}
                          className="text-red-400 hover:text-red-300"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-6 border-t border-slate-600">
                  <button
                    onClick={() => {
                      setShowEditModal(false);
                      setShowAddModal(false);
                      setCurrentCourseId(null);
                    }}
                    className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveCourse}
                    className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
                  >
                    {showEditModal ? 'Update Course' : 'Add Course'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-800 rounded-lg max-w-md w-full border border-slate-600 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Delete Course?</h2>
              <p className="text-gray-300 mb-6">
                Are you sure you want to delete this course? This action cannot be undone.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowDeleteConfirm(false);
                    setDeleteConfirmId(null);
                  }}
                  className="flex-1 px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold transition"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    if (deleteConfirmId) {
                      handleDeleteCourse(deleteConfirmId);
                    }
                  }}
                  className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
