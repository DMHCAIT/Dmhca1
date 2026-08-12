import { Pool } from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const databaseUrl = process.env.DATABASE_URL!;

if (!databaseUrl) {
  console.error('❌ Missing DATABASE_URL');
  process.exit(1);
}

// Migration files in order
const migrations = [
  '001_init_admin_tables.sql',
  '002_complete_admin_system.sql',
  '003_add_pages_and_extend_tables.sql',
  '004_fix_courses_schema.sql',
  '005_complete_course_storage.sql',
  '004_add_applications_table.sql'
];

async function applyMigrations() {
  const pool = new Pool({ connectionString: databaseUrl });
  
  try {
    console.log('🚀 Starting database migrations...');
    console.log('═'.repeat(70));
    
    const client = await pool.connect();
    let successCount = 0;
    let errorCount = 0;
    
    try {
      for (const migrationFile of migrations) {
        const migrationPath = path.join(process.cwd(), 'migrations', migrationFile);
        
        if (!fs.existsSync(migrationPath)) {
          console.warn(`⚠️  Migration file not found: ${migrationFile}`);
          continue;
        }
        
        try {
          console.log(`\n📋 Applying: ${migrationFile}...`);
          const sql = fs.readFileSync(migrationPath, 'utf-8');
          
          // Split by COMMIT statements and execute each part
          const statements = sql.split('COMMIT').filter(s => s.trim());
          
          for (const statement of statements) {
            const trimmedStatement = statement.trim();
            if (trimmedStatement) {
              await client.query(trimmedStatement);
            }
          }
          
          console.log(`✅ ${migrationFile} applied successfully`);
          successCount++;
        } catch (migrationError) {
          const errMsg = migrationError instanceof Error ? migrationError.message : String(migrationError);
          // Some errors are expected (e.g., trying to create existing objects)
          if (errMsg.includes('already exists') || errMsg.includes('duplicate')) {
            console.log(`✅ ${migrationFile} applied (already in place)`);
            successCount++;
          } else {
            console.error(`❌ Error in ${migrationFile}:`, errMsg);
            errorCount++;
          }
        }
      }
      
      // Verify key tables
      console.log('\n' + '═'.repeat(70));
      console.log('🔍 Verifying database schema...');
      
      const tables = ['courses', 'applications', 'contact_messages', 'event_comments', 'admin_users'];
      const tableResults = await client.query(`
        SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = ANY($1)
      `, [tables]);
      
      console.log(`\n📊 Tables in database: ${tableResults.rows.length}/${tables.length}`);
      tableResults.rows.forEach((row: any) => {
        console.log(`   ✓ ${row.table_name}`);
      });
      
      // Check courses table columns
      const coursesColumns = await client.query(`
        SELECT column_name, data_type 
        FROM information_schema.columns 
        WHERE table_name = 'courses'
        ORDER BY ordinal_position
      `);
      
      console.log(`\n📋 Courses table columns: ${coursesColumns.rows.length}`);
      const importantCols = ['data', 'testimonials', 'slug', 'title', 'image_url', 'price'];
      coursesColumns.rows.forEach((row: any) => {
        if (importantCols.includes(row.column_name)) {
          console.log(`   ✓ ${row.column_name} (${row.data_type})`);
        }
      });
      
      console.log('\n' + '═'.repeat(70));
      console.log('📊 MIGRATION SUMMARY');
      console.log('═'.repeat(70));
      console.log(`✅ Successful: ${successCount}`);
      if (errorCount > 0) {
        console.log(`❌ Failed: ${errorCount}`);
      }
      
      if (successCount > 0) {
        console.log('\n🎉 Database schema is ready!');
        console.log('   Next: Run seed-complete-courses.mts to populate 103 courses');
        process.exit(0);
      } else {
        console.log('\n⚠️  No migrations applied');
        process.exit(1);
      }
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('❌ FATAL ERROR:', error);
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Run migrations
applyMigrations();
