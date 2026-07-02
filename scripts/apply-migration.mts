import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL!;

if (!databaseUrl) {
  console.error('Missing DATABASE_URL');
  process.exit(1);
}

// SQL for creating applications table
const sql = `
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

-- Drop existing policies if they exist (to recreate them)
DROP POLICY IF EXISTS "Authenticated can insert applications" ON applications;
DROP POLICY IF EXISTS "Admin can view applications" ON applications;
DROP POLICY IF EXISTS "Admin can update applications" ON applications;
DROP POLICY IF EXISTS "Admin can delete applications" ON applications;

-- Create RLS policies
CREATE POLICY "Authenticated can insert applications" ON applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admin can view applications" ON applications
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Admin can update applications" ON applications
  FOR UPDATE USING (auth.role() = 'authenticated');

CREATE POLICY "Admin can delete applications" ON applications
  FOR DELETE USING (auth.role() = 'authenticated');
`;

async function runMigration() {
  const pool = new Pool({ connectionString: databaseUrl });
  
  try {
    console.log('🚀 Running applications table migration...');
    
    const client = await pool.connect();
    try {
      await client.query(sql);
      console.log('✅ Applications table created/migrated successfully!');
      
      // Verify the table
      const result = await client.query(`SELECT COUNT(*) as count FROM applications`);
      console.log('✅ Applications table is accessible. Current row count:', result.rows[0].count);
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error('❌ Migration failed:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

runMigration();
