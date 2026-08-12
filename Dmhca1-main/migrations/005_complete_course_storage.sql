-- Add complete course data storage as JSONB
-- This allows storing ALL fields from courses.tsx exactly as they are

DO $$
BEGIN
  -- Add data column to store complete course object
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS data JSONB DEFAULT '{}';
  
  -- Add level, rating columns if missing
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS level VARCHAR(50) DEFAULT 'intermediate';
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS rating DECIMAL(3,1);
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS review_count INTEGER DEFAULT 0;
  
  -- Add trainer info columns
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS trainers JSONB DEFAULT '[]'::jsonb;
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS faqs JSONB DEFAULT '[]'::jsonb;
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS reviews JSONB DEFAULT '[]'::jsonb;
  
  -- Add comprehensive course structure columns
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS learn TEXT[] DEFAULT ARRAY[]::text[];
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS modules TEXT[] DEFAULT ARRAY[]::text[];
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS module_details JSONB DEFAULT '[]'::jsonb;

EXCEPTION WHEN others THEN
  NULL;
END $$;

-- Create index for JSON queries
CREATE INDEX IF NOT EXISTS idx_courses_data ON courses USING GIN (data);

COMMIT;
