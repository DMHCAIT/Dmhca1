-- Create applications table for tracking course applications
CREATE TABLE IF NOT EXISTS applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  course_name VARCHAR(255),
  program_name VARCHAR(255),
  qualification VARCHAR(255),
  experience TEXT,
  message TEXT,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'reviewed', 'contacted', 'enrolled', 'rejected')),
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_applications_status ON applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_email ON applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_course ON applications(course_name);
CREATE INDEX IF NOT EXISTS idx_applications_created ON applications(created_at DESC);

-- Enable RLS
ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Authenticated can insert applications" ON applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can view applications" ON applications
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admin can update applications" ON applications
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin can delete applications" ON applications
  FOR DELETE USING (auth.role() = 'authenticated');
