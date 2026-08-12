import { createClient } from "@supabase/supabase-js";
import * as fs from "fs";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error("Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function applyMigration() {
  try {
    console.log("📦 Reading migration file...");
    const migrationSQL = fs.readFileSync("./migrations/009_enrollment_system_fixed.sql", "utf8");

    console.log("🔄 Applying migration to Supabase...");
    const { error } = await supabase.rpc("exec", {
      sql: migrationSQL,
    }).catch(() => {
      // If rpc doesn't work, we need to use raw query
      return supabase.from("_migrations").insert({ sql: migrationSQL });
    });

    if (error) {
      console.error("❌ Migration error:", error);
      
      // Alternative: Execute via direct SQL
      console.log("⚠️  Attempting alternative approach...");
      console.log("Please apply the following SQL manually in Supabase SQL Editor:");
      console.log("\n" + "=".repeat(80));
      console.log(migrationSQL);
      console.log("=".repeat(80) + "\n");
    } else {
      console.log("✅ Migration applied successfully!");
    }
  } catch (err) {
    console.error("Error:", err.message);
    console.log("\n📝 MANUAL STEPS:");
    console.log("1. Go to https://supabase.com/dashboard/project/[YOUR_PROJECT_ID]/sql");
    console.log("2. Create a new query");
    console.log("3. Copy and paste the contents of: migrations/009_enrollment_system_fixed.sql");
    console.log("4. Click 'Run'");
  }
}

applyMigration();
