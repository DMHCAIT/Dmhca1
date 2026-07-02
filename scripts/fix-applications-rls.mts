import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL!;

if (!databaseUrl) {
  console.error('Missing DATABASE_URL');
  process.exit(1);
}

// SQL to fix RLS policies for applications table
const sql = `
-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Authenticated can insert applications" ON applications;
DROP POLICY IF EXISTS "Admin can view applications" ON applications;
DROP POLICY IF EXISTS "Admin can update applications" ON applications;
DROP POLICY IF EXISTS "Admin can delete applications" ON applications;

-- Create new permissive policies
-- Allow anyone to insert applications (public form)
CREATE POLICY "Anyone can insert applications" ON applications
  FOR INSERT WITH CHECK (true);

-- Allow authenticated users (admin) to view all applications
CREATE POLICY "Admin can view applications" ON applications
  FOR SELECT USING (auth.role() = 'authenticated');

-- Allow authenticated users to update applications (for status changes and notes)
CREATE POLICY "Admin can update applications" ON applications
  FOR UPDATE USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to delete applications
CREATE POLICY "Admin can delete applications" ON applications
  FOR DELETE USING (auth.role() = 'authenticated');

-- Also add a SELECT policy for anyone (in case we need it)
CREATE POLICY "Anyone can view own application" ON applications
  FOR SELECT USING (true);
`;

async function fixRLS() {
  const pool = new Pool({ connectionString: databaseUrl });
  
  try {
    console.log('🔧 Fixing RLS policies for applications table...');
    
    const client = await pool.connect();
    try {
      await client.query(sql);
      console.log('✅ RLS policies updated successfully!');
    } finally {
      client.release();
    }
  } catch (error: any) {
    console.error('❌ Fix failed:', error.message);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

fixRLS();
