-- Add site_pages table for managing all website pages
CREATE TABLE IF NOT EXISTS site_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_name VARCHAR(255) NOT NULL UNIQUE,
  display_name VARCHAR(255) NOT NULL,
  content TEXT,
  meta_description TEXT,
  meta_keywords TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes
CREATE INDEX IF NOT EXISTS idx_site_pages_page_name ON site_pages(page_name);
CREATE INDEX IF NOT EXISTS idx_site_pages_is_active ON site_pages(is_active);

-- Update courses table with more fields to match website structure
DO $$
BEGIN
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS short_description TEXT;
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS image_url TEXT;
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS level VARCHAR(50) DEFAULT 'intermediate';
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS lessons INTEGER;
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS rating DECIMAL(2,1);
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS review_count INTEGER DEFAULT 0;
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS program VARCHAR(100);
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS learn TEXT[];
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS requirements TEXT[];
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS modules TEXT[];
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS module_details TEXT[];
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS faqs JSONB;
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS reviews JSONB;
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
EXCEPTION WHEN others THEN
  NULL;
END $$;

-- Update events table with more fields
DO $$
BEGIN
  ALTER TABLE events ADD COLUMN IF NOT EXISTS image_url TEXT;
  ALTER TABLE events ADD COLUMN IF NOT EXISTS description TEXT;
  ALTER TABLE events ADD COLUMN IF NOT EXISTS duration_hours INTEGER;
  ALTER TABLE events ADD COLUMN IF NOT EXISTS registered_count INTEGER DEFAULT 0;
  ALTER TABLE events ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW();
EXCEPTION WHEN others THEN
  NULL;
END $$;

-- Add RLS policies for site_pages
ALTER TABLE site_pages ENABLE ROW LEVEL SECURITY;

-- Public read access
DO $$
BEGIN
  CREATE POLICY site_pages_public_read ON site_pages
    FOR SELECT USING (is_active = true);
EXCEPTION WHEN duplicate_object THEN
  NULL;
END $$;

-- Add indexes to courses and events for better query performance
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category);
CREATE INDEX IF NOT EXISTS idx_courses_is_active ON courses(is_active);

CREATE INDEX IF NOT EXISTS idx_events_slug ON events(slug);
CREATE INDEX IF NOT EXISTS idx_events_date_time ON events(date_time);
CREATE INDEX IF NOT EXISTS idx_events_is_active ON events(is_active);
