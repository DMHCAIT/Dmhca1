-- Create certificates verification table
CREATE TABLE IF NOT EXISTS certificates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  certificate_id TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  qualification TEXT NOT NULL,
  mode TEXT NOT NULL CHECK (mode IN ('Online', 'Blended', 'Hybrid')),
  month_year TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'Active' CHECK (status IN ('Active', 'Inactive')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index for faster searches
CREATE INDEX IF NOT EXISTS idx_certificates_name ON certificates(full_name);
CREATE INDEX IF NOT EXISTS idx_certificates_id ON certificates(certificate_id);
CREATE INDEX IF NOT EXISTS idx_certificates_status ON certificates(status);

-- Enable RLS
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Allow public read access for verification
CREATE POLICY "Allow public read" ON certificates FOR SELECT USING (true);

-- Allow authenticated admins to manage
CREATE POLICY "Allow authenticated users to manage" ON certificates 
  FOR ALL 
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');
