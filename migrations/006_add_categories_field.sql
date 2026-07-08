-- Add categories field to courses table
-- This column stores an array of category slugs for better filtering

DO $$
BEGIN
  -- Add categories column as JSON array if it doesn't exist
  ALTER TABLE courses ADD COLUMN IF NOT EXISTS categories TEXT[] DEFAULT ARRAY[]::text[];
  
  -- Migrate existing category data to categories array if categories is empty
  UPDATE courses 
  SET categories = ARRAY[category] 
  WHERE (categories IS NULL OR array_length(categories, 1) IS NULL) 
  AND category IS NOT NULL;

EXCEPTION WHEN others THEN
  NULL;
END $$;

-- Create index on categories for better query performance
CREATE INDEX IF NOT EXISTS idx_courses_categories ON courses USING GIN (categories);

COMMIT;
