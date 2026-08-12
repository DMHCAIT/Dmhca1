import fs from 'fs';
import path from 'path';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const dbUrl = process.env.DATABASE_URL || process.env.SUPABASE_DB_URL || process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
if (!dbUrl) {
  console.error('No DATABASE_URL found in .env.local');
  process.exit(1);
}

const client = new Client({ connectionString: dbUrl });

try {
  await client.connect();

  const migrationsDir = path.resolve(process.cwd(), 'migrations');
  const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql')).sort();

  for (const file of files) {
    const fp = path.join(migrationsDir, file);
    console.log('Applying', fp);
    const sql = fs.readFileSync(fp, 'utf8');
    try {
      await client.query(sql);
      console.log('Applied', file);
    } catch (err) {
      const msg = (err && err.message) ? err.message : String(err);
      if (msg.includes('already exists') || msg.includes('duplicate key') || msg.includes('already a column')) {
        console.warn('Skipping already-exists error for', file, msg);
        continue;
      }
      console.error('Failed to apply', file, msg);
      await client.end();
      process.exit(1);
    }
  }

  await client.end();
  console.log('All migrations applied');
} catch (err) {
  console.error(err);
  await client.end().catch(() => {});
  process.exit(1);
}
