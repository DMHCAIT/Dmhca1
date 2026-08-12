import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const databaseUrl = process.env.DATABASE_URL!;

if (!databaseUrl) {
  console.error('Missing DATABASE_URL');
  process.exit(1);
}

const pool = new Pool({
  connectionString: databaseUrl,
});

async function runMigration() {
  const client = await pool.connect();
  try {
    const migrationPath = path.join(process.cwd(), 'migrations', '007_add_certificates_table.sql');
    const migrationSql = fs.readFileSync(migrationPath, 'utf-8');

    console.log('Executing migration: 007_add_certificates_table.sql');
    await client.query(migrationSql);
    console.log('✅ Migration completed successfully!');
    console.log('✅ Certificates table created with RLS policies');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    client.release();
    await pool.end();
  }
}

runMigration();
