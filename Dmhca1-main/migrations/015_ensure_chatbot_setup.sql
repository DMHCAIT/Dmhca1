-- Ensure chatbot applications table is properly configured for public inserts

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public inserts" ON public.applications;
DROP POLICY IF EXISTS "Allow users to view their own" ON public.applications;
DROP POLICY IF EXISTS "Allow updates" ON public.applications;

-- Enable RLS
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (unauthenticated users can submit forms)
CREATE POLICY "Allow public inserts" 
  ON public.applications 
  FOR INSERT 
  WITH CHECK (true);

-- Allow anyone to select (for admin)
CREATE POLICY "Allow public select" 
  ON public.applications 
  FOR SELECT 
  USING (true);

-- Allow updates (for admin)
CREATE POLICY "Allow public updates" 
  ON public.applications 
  FOR UPDATE 
  USING (true);

-- Ensure columns exist
ALTER TABLE public.applications 
  ADD COLUMN IF NOT EXISTS form_type VARCHAR(50) DEFAULT 'chatbot_inquiry',
  ADD COLUMN IF NOT EXISTS source VARCHAR(50) DEFAULT 'chatbot_widget',
  ADD COLUMN IF NOT EXISTS form_data JSONB,
  ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'new',
  ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_applications_form_type ON public.applications(form_type);
CREATE INDEX IF NOT EXISTS idx_applications_source ON public.applications(source);
CREATE INDEX IF NOT EXISTS idx_applications_status ON public.applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON public.applications(created_at DESC);

-- Add updated_at trigger if not exists
CREATE OR REPLACE FUNCTION update_applications_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_applications_updated_at_trigger ON public.applications;
CREATE TRIGGER update_applications_updated_at_trigger
  BEFORE UPDATE ON public.applications
  FOR EACH ROW
  EXECUTE FUNCTION update_applications_updated_at();
