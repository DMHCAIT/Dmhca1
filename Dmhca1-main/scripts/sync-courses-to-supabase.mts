import { createClient } from "@supabase/supabase-js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env.local
dotenv.config({ path: path.join(__dirname, "../.env.local") });

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Missing Supabase credentials. Check .env.local");
  process.exit(1);
}

console.log(`✓ Supabase URL: ${supabaseUrl.substring(0, 30)}...`);

const supabase = createClient(supabaseUrl, supabaseKey);

// Dynamically import courses from the compiled file
let courses: any[] = [];
try {
  // Try to import using the TypeScript path
  const courseModule = await import("../src/data/courses.js" as any);
  courses = courseModule.courses || [];
  console.log(`✓ Loaded ${courses.length} courses from courses.js`);
} catch (importErr) {
  console.warn("⚠ Could not import courses.js, trying compiled build:", (importErr as any).message);
  
  // Fallback: try importing from dist or build output
  try {
    const courseModule = await import("../dist/src/data/courses.js" as any);
    courses = courseModule.courses || [];
    console.log(`✓ Loaded ${courses.length} courses from dist`);
  } catch (err2) {
    console.error("❌ Could not load courses from any location");
    process.exit(1);
  }
}

async function syncCoursesToSupabase() {
  try {
    if (courses.length === 0) {
      console.warn("⚠ No courses to sync");
      process.exit(0);
    }

    console.log(`🔄 Syncing ${courses.length} courses to Supabase...`);

    let synced = 0;
    let failed = 0;

    for (const course of courses) {
      if (!course.slug) continue;

      const upsertData = {
        slug: course.slug,
        title: course.title || "",
        category: course.categories?.[0] || "general",
        image: course.image || "",
        testimonials: JSON.stringify(course),
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("courses")
        .upsert([upsertData], { onConflict: "slug" });

      if (error) {
        console.error(`❌ ${course.title}: ${error.message}`);
        failed++;
      } else {
        console.log(`✅ ${course.title}`);
        synced++;
      }
    }

    console.log(`\n✨ Sync complete! (${synced}/${courses.length} synced, ${failed} failed)`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Sync failed:", err);
    process.exit(1);
  }
}

syncCoursesToSupabase();
