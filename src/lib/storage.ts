import { supabaseClient } from '@/lib/supabase';

export interface UploadOptions {
  bucket: 'images' | 'videos' | 'media';
  folder?: string;
  onProgress?: (progress: number) => void;
}

export async function uploadFile(
  file: File,
  options: UploadOptions
): Promise<{ path: string; url: string }> {
  const { bucket, folder = '' } = options;

  // Validate file
  if (!file) throw new Error('No file provided');
  if (file.size > 100 * 1024 * 1024) throw new Error('File too large (max 100MB)');

  // Generate unique file path
  const timestamp = Date.now();
  const sanitizedName = file.name.replace(/[^a-z0-9.-]/gi, '_').toLowerCase();
  const path = folder ? `${folder}/${timestamp}-${sanitizedName}` : `${timestamp}-${sanitizedName}`;

  try {
    // Upload to Supabase Storage
    const { data, error } = await supabaseClient.storage
      .from(bucket)
      .upload(path, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw error;

    // Get public URL
    const { data: urlData } = supabaseClient.storage.from(bucket).getPublicUrl(data.path);

    return {
      path: data.path,
      url: urlData.publicUrl,
    };
  } catch (error) {
    console.error('Upload error:', error);
    throw error;
  }
}

export async function deleteFile(bucket: string, path: string): Promise<void> {
  try {
    const { error } = await supabaseClient.storage.from(bucket).remove([path]);

    if (error) throw error;
  } catch (error) {
    console.error('Delete error:', error);
    throw error;
  }
}

export async function listFiles(bucket: string, folder: string = ''): Promise<any[]> {
  try {
    const { data, error } = await supabaseClient.storage
      .from(bucket)
      .list(folder, {
        limit: 100,
        offset: 0,
        sortBy: { column: 'created_at', order: 'desc' },
      });

    if (error) throw error;

    return data || [];
  } catch (error) {
    console.error('List error:', error);
    return [];
  }
}

export function getPublicUrl(bucket: string, path: string): string {
  const { data } = supabaseClient.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}
