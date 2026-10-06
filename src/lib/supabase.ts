import { createClient } from "@supabase/supabase-js";

// For browser: use VITE_-prefixed variables
// For server: use non-prefixed variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

// For admin operations: try to get service role key from env
// Development mode: expose service role key to frontend for admin operations
const supabaseServiceKey =
  import.meta.env.VITE_SUPABASE_SERVICE_ROLE_KEY ||
  process.env.VITE_SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY");
}

// Client-side Supabase client (anon key - for public operations)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Admin client for authenticated operations (service role key)
// Use this in admin panel for operations that need bypass of RLS policies
export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : createClient(supabaseUrl, supabaseAnonKey); // Fallback to anon key if service key not available

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
  status: "new" | "reviewed" | "responded";
}

export interface AdminUser {
  id: string;
  email: string;
  role: "admin" | "moderator";
  created_at: string;
}
