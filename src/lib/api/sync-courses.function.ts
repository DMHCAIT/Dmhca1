import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { courses } from "@/data/courses";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let supabase: any = null;
if (supabaseUrl && serviceRoleKey) {
  supabase = createClient(supabaseUrl, serviceRoleKey);
}

export const syncCoursesToSupabase = createServerFn({ method: "POST" })
  .handler(async () => {
    if (!supabase) {
      return { success: false, message: "Supabase not configured" };
    }

    try {
      console.log(`🔄 Syncing ${courses.length} courses to Supabase...`);

      let synced = 0;
      let failed = 0;

      for (const course of courses) {
        if (!course.slug) continue;

        const upsertData = {
          slug: course.slug,
          title: course.title || "",
          category: course.categories?.[0] || "general",
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

      return {
        success: true,
        message: `Synced ${synced} courses (${failed} failed)`,
        synced,
        failed,
      };
    } catch (err) {
      console.error("Sync error:", err);
      return { success: false, message: (err as any).message };
    }
  });
