import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const databaseUrl = process.env.DATABASE_URL!;

if (!databaseUrl) {
  console.error('Missing DATABASE_URL');
  process.exit(1);
}

const migrationFile = path.join(process.cwd(), 'migrations', '008_allow_admin_writes.sql');
const sql = fs.readFileSync(migrationFile, 'utf-8');

async function applyMigration() {
  const pool = new Pool({ connectionString: databaseUrl });

  try {
    console.log('Applying migration 008_allow_admin_writes.sql...');
    await pool.query(sql);
    console.log('✓ Migration 008 applied successfully!');
  } catch (error) {
    console.error('Error applying migration:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

applyMigration();
