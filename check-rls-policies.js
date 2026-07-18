const { Pool } = require('pg');

const pool = new Pool({ 
  connectionString: 'postgresql://postgres.lwpagbsineaqkblihger:Dmhcawebsite123@aws-1-ap-south-1.pooler.supabase.com:6543/postgres'
});

async function checkPolicies() {
  try {
    const result = await pool.query(`
      SELECT schemaname, tablename, policyname, permissive, roles, qual, with_check 
      FROM pg_policies 
      WHERE tablename = 'certificates'
      ORDER BY policyname
    `);
    
    console.log('Certificates table RLS policies:');
    result.rows.forEach(row => {
      console.log(`Policy: ${row.policyname}`);
      console.log(`  Permissive: ${row.permissive}`);
      console.log(`  Roles: ${row.roles}`);
      console.log(`  USING: ${row.qual}`);
      console.log(`  WITH CHECK: ${row.with_check}`);
      console.log('');
    });
  } catch (err) {
    console.error('Error:', err.message);
  } finally {
    await pool.end();
  }
}

checkPolicies();
