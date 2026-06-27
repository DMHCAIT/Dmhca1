import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useRef, useState } from 'react';
import { uploadFile, listFiles, deleteFile, getPublicUrl } from '@/lib/storage';
import { Trash2, Upload, Image as ImageIcon, Video, File } from 'lucide-react';

export const Route = createFileRoute('/admin/media')({
  head: () => ({
    meta: [
      { title: 'Media Manager — Admin' },
      { name: 'description', content: 'Manage images and videos' },
    ],
  }),
  component: AdminMedia,
});

function AdminMedia() {
  const [tab, setTab] = useState<'images' | 'videos'>('images');
  const [files, setFiles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadFiles();
  }, [tab]);

  const loadFiles = async () => {
    setLoading(true);
    try {
      const fileList = await listFiles(tab);
      setFiles(fileList.filter((f) => !f.name.startsWith('.')));
    } catch (error) {
      console.error('Error loading files:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const result = await uploadFile(file, {
        bucket: tab,
        folder: new Date().toISOString().split('T')[0],
      });

      alert('File uploaded successfully!');
      loadFiles();
    } catch (error) {
      alert('Error uploading file: ' + (error as any).message);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (fileName: string) => {
    if (!confirm('Delete this file?')) return;

    setDeleting(fileName);
    try {
      await deleteFile(tab, fileName);
      setFiles(files.filter((f) => f.name !== fileName));
    } catch (error) {
      alert('Error deleting file: ' + (error as any).message);
    } finally {
      setDeleting(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-navy-deep">Media Manager</h1>
        <p className="text-gray-600 mt-2">Upload and manage images and videos</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        <button
          onClick={() => setTab('images')}
          className={`px-4 py-2 font-medium border-b-2 transition ${
            tab === 'images'
              ? 'border-gold text-gold'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <ImageIcon className="w-4 h-4 inline mr-2" />
          Images
        </button>
        <button
          onClick={() => setTab('videos')}
          className={`px-4 py-2 font-medium border-b-2 transition ${
            tab === 'videos'
              ? 'border-gold text-gold'
              : 'border-transparent text-gray-600 hover:text-gray-900'
          }`}
        >
          <Video className="w-4 h-4 inline mr-2" />
          Videos
        </button>
      </div>

      {/* Upload Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-gold transition"
        >
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-600 font-medium">Click to upload or drag and drop</p>
          <p className="text-sm text-gray-500 mt-1">
            {tab === 'images' ? 'PNG, JPG, WebP up to 50MB' : 'MP4, WebM up to 100MB'}
          </p>
          <input
            ref={fileInputRef}
            type="file"
            onChange={handleFileSelect}
            accept={tab === 'images' ? 'image/*' : 'video/*'}
            disabled={uploading}
            className="hidden"
          />
        </div>
        {uploading && <p className="text-center text-gold font-medium mt-4">Uploading...</p>}
      </div>

      {/* Files List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading files...</p>
            </div>
          </div>
        ) : files.length === 0 ? (
          <div className="p-12 text-center">
            <File className="w-12 h-12 text-gray-300 mx-auto mb-2" />
            <p className="text-gray-600">No {tab} uploaded yet</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
            {files.map((file) => (
              <div
                key={file.id}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
              >
                <div className="bg-gray-100 aspect-video flex items-center justify-center relative group">
                  {tab === 'images' ? (
                    <img
                      src={getPublicUrl(tab, file.name)}
                      alt={file.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200">
                      <Video className="w-8 h-8 text-gray-400" />
                    </div>
                  )}

                  <button
                    onClick={() => handleDelete(file.name)}
                    disabled={deleting === file.name}
                    className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-lg opacity-0 group-hover:opacity-100 transition disabled:opacity-50"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3">
                  <p className="text-sm font-medium text-gray-800 truncate">{file.name}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {(file.metadata?.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {new Date(file.created_at).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
