import { createClient } from "@supabase/supabase-js";
import type { CrmDeliveryFields } from "@/components/CrmDeliveryDetails";

// For browser: use VITE_-prefixed variables
// For server: use non-prefixed variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || process.env.VITE_SUPABASE_URL;
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY");
}

// Client-side Supabase client (anon key - for public operations)
export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

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

export interface ContactMessage extends CrmDeliveryFields {
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
