import { createClient } from '@supabase/supabase-js';

// For browser: use VITE_-prefixed variables
// For server: use non-prefixed variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY');
}

// Client-side Supabase client (anon key only)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Server-side Supabase client (service role - use sparingly and server-only)
export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : null;

// Database types
export interface EventComment {
  id: string;
  event_slug: string;
  name: string;
  email: string;
  comment: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  course?: string;
  created_at: string;
  updated_at: string;
  status: 'new' | 'reviewed' | 'responded';
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'moderator';
  created_at: string;
}
