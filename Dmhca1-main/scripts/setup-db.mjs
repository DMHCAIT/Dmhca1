import { createClient } from '@supabase/supabase-js';
import pkg from 'pg';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';

const { Client } = pkg;

// Load environment variables
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const databaseUrl = process.env.DATABASE_URL;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  process.exit(1);
}

// Create admin client
const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function setupDatabase() {
  let pgClient = null;
  try {
    console.log('🚀 Starting database setup...\n');

    // Read migration SQLs
    const migrationPath1 = path.join(process.cwd(), 'migrations', '001_init_admin_tables.sql');
    const migrationPath2 = path.join(process.cwd(), 'migrations', '002_complete_admin_system.sql');
    const migrationPath3 = path.join(process.cwd(), 'migrations', '003_add_pages_and_extend_tables.sql');
    const sql1 = fs.readFileSync(migrationPath1, 'utf-8');
    const sql2 = fs.readFileSync(migrationPath2, 'utf-8');
    const sql3 = fs.readFileSync(migrationPath3, 'utf-8');

    if (databaseUrl) {
      console.log('📝 Connecting to PostgreSQL...');
      pgClient = new Client({ connectionString: databaseUrl });
      await pgClient.connect();

      console.log('📝 Executing initial migration...');
      try {
        await pgClient.query(sql1);
        console.log('✅ Initial tables created successfully!');
      } catch (e) {
        if (!e.message.includes('already exists')) {
          console.warn('⚠️  Initial migration: ' + e.message);
        } else {
          console.log('✅ Initial tables already exist');
        }
      }

      console.log('📝 Executing complete admin system migration...');
      try {
        await pgClient.query(sql2);
        console.log('✅ Complete admin system created successfully!');
      } catch (e) {
        if (e.message.includes('already exists')) {
          console.log('✅ Admin system tables already exist');
        } else {
          console.warn('⚠️  Admin system migration: ' + e.message);
        }
      }

      console.log('📝 Executing pages and extended tables migration...');
      try {
        await pgClient.query(sql3);
        console.log('✅ Pages table and extended fields created successfully!\n');
      } catch (e) {
        if (e.message.includes('already exists')) {
          console.log('✅ Pages and extended tables already exist\n');
        } else {
          console.warn('⚠️  Pages migration: ' + e.message);
        }
      }

      await pgClient.end();
    } else {
      console.log('⚠️  DATABASE_URL not found, skipping SQL execution');
      console.log('   Tables must be created manually via Supabase SQL editor\n');
    }

    // Create admin user
    console.log('👤 Creating admin user...');
    const { data: userData, error: userError } = await supabase.auth.admin.createUser({
      email: 'admin@dmhca.local',
      password: 'Admin123!@#',
      email_confirm: true,
    });

    if (userError) {
      if (userError.message.includes('already exists')) {
        console.log('✅ Admin user already exists (admin@dmhca.local)');
      } else {
        console.error('❌ Error creating admin user:', userError.message);
      }
    } else {
      console.log('✅ Admin user created successfully!');
      console.log(`   Email: admin@dmhca.local`);
      console.log(`   Password: Admin123!@#`);
    }

    // Add user to admin_users table (if tables exist)
    if (userData?.user) {
      try {
        const { error: adminTableError } = await supabase
          .from('admin_users')
          .insert([
            {
              email: 'admin@dmhca.local',
              role: 'admin',
            },
          ])
          .select();

        if (adminTableError && !adminTableError.message.includes('duplicate')) {
          console.warn('⚠️  Note: admin_users table may not exist yet:', adminTableError.message);
        } else {
          console.log('✅ Admin user added to admin_users table');
        }
      } catch (e) {
        console.warn('⚠️  Could not add to admin_users table (table may not exist yet)');
      }
    }

    console.log('\n✨ Database setup complete!\n');
    console.log('🔐 Admin Credentials:');
    console.log('   Email: admin@dmhca.local');
    console.log('   Password: Admin123!@#\n');
    console.log('🌐 Login at: http://localhost:8083/admin-login');

  } catch (error) {
    console.error('❌ Setup error:', error.message);
    process.exit(1);
  } finally {
    if (pgClient) {
      await pgClient.end();
    }
  }
}

setupDatabase();
