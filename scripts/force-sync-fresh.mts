import { createClient } from "@supabase/supabase-js";
import { courses } from "../src/data/courses.js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error("❌ Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

async function forceSyncCourses() {
  try {
    console.log(`🔄 FORCE SYNCING ${courses.length} courses with FRESH data from courses.tsx...\n`);

    let synced = 0;
    let failed = 0;

    for (const course of courses) {
      if (!course.slug) continue;

      const upsertData = {
        slug: course.slug,
        title: course.title || "",
        category: course.categories?.[0] || "general",
        categories: course.categories || ["general"],
        testimonials: JSON.stringify(course), // Fresh JSON with months, not weeks
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("courses")
        .upsert([upsertData], { onConflict: "slug" });

      if (error) {
        console.error(`❌ ${course.title}: ${error.message}`);
        failed++;
      } else {
        console.log(
          `✅ ${course.title} (${course.months}mo, ${course.level})`
        );
        synced++;
      }
    }

    console.log(`\n📊 SYNC COMPLETE`);
    console.log(`✅ Synced: ${synced} courses`);
    console.log(`❌ Failed: ${failed} courses`);
    
    if (failed === 0) {
      console.log(`\n🎉 ALL COURSES SYNCED SUCCESSFULLY WITH FRESH DATA!`);
      console.log(`📝 Admin panel will now show correct months and levels.`);
    }
  } catch (error) {
    console.error("❌ Sync error:", error);
    process.exit(1);
  }
}

forceSyncCourses();
