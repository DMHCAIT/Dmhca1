-- Fix and extend courses table schema to support full course management
-- This migration adds missing columns needed for complete course data

DO $$
BEGIN
  -- Add categories column if missing
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS categories TEXT DEFAULT '[]';
  
  -- Add trainers column if missing  
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS trainers JSONB DEFAULT '[]'::jsonb;
  
  -- Ensure other required columns exist
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS week INTEGER;
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS price DECIMAL(10,2) DEFAULT 0;
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

EXCEPTION WHEN others THEN
  NULL;
END $$;

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);
CREATE INDEX IF NOT EXISTS idx_courses_is_active ON courses(is_active);
CREATE INDEX IF NOT EXISTS idx_courses_created_at ON courses(created_at);

COMMIT;
