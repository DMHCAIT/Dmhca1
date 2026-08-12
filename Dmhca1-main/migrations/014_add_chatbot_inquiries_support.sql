-- Migration: Add chatbot inquiries support to applications table

BEGIN;

-- Add new columns to applications table for chatbot inquiries
ALTER TABLE public.applications
  ADD COLUMN IF NOT EXISTS form_type text DEFAULT 'regular_application',
  ADD COLUMN IF NOT EXISTS source text DEFAULT 'web_form',
  ADD COLUMN IF NOT EXISTS form_data jsonb DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS course_interested text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS notes text DEFAULT NULL,
  ADD COLUMN IF NOT EXISTS updated_at timestamptz DEFAULT now();

-- Create index for faster filtering by form_type
CREATE INDEX IF NOT EXISTS idx_applications_form_type ON public.applications(form_type);
CREATE INDEX IF NOT EXISTS idx_applications_status ON public.applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_created_at ON public.applications(created_at DESC);

-- Add trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_applications_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS update_applications_updated_at_trigger ON public.applications;

CREATE TRIGGER update_applications_updated_at_trigger
  BEFORE UPDATE ON public.applications
  FOR EACH ROW
  EXECUTE FUNCTION update_applications_updated_at();

COMMIT;
