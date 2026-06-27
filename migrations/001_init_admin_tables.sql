-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create event_comments table
CREATE TABLE IF NOT EXISTS event_comments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  event_slug VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  comment TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT NOT NULL,
  course VARCHAR(255),
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'responded')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create admin_users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  role VARCHAR(50) DEFAULT 'admin' CHECK (role IN ('admin', 'moderator')),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_event_comments_slug ON event_comments(event_slug);
CREATE INDEX IF NOT EXISTS idx_event_comments_created ON event_comments(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);

-- Set up Row Level Security (RLS)
ALTER TABLE event_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for event_comments (public read, authenticated write)
CREATE POLICY "Anyone can view comments" ON event_comments
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can insert comments" ON event_comments
  FOR INSERT WITH CHECK (true);

-- Create RLS policies for contact_messages (admin only)
CREATE POLICY "Admin can view messages" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated can insert messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can update messages" ON contact_messages
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin can delete messages" ON contact_messages
  FOR DELETE USING (auth.role() = 'authenticated');

-- Create admin_users policy
CREATE POLICY "Admin users are private" ON admin_users
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public) VALUES
  ('images', 'images', true),
  ('videos', 'videos', false),
  ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies for images bucket (public read, authenticated write)
CREATE POLICY "Public can read images" ON storage.objects
  FOR SELECT USING (bucket_id = 'images');

CREATE POLICY "Authenticated can upload images" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');

-- Storage policies for videos bucket (private)
CREATE POLICY "Authenticated can read videos" ON storage.objects
  FOR SELECT USING (bucket_id = 'videos' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated can upload videos" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'videos' AND auth.role() = 'authenticated');

-- Storage policies for media bucket
CREATE POLICY "Public can read media" ON storage.objects
  FOR SELECT USING (bucket_id = 'media');

CREATE POLICY "Authenticated can upload media" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'media' AND auth.role() = 'authenticated');
