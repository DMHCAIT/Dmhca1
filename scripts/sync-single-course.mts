import { createClient } from "@supabase/supabase-js";
import fs from "fs";
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

const supabase = createClient(supabaseUrl, supabaseKey);

// Hardcoded course data from courses.tsx - updated list
const courses = [
  {
    slug: "pg-diploma-in-clinical-cardiology",
    title: "PG Diploma in Clinical Cardiology",
    categories: ["cardiology"],
    image: "/courses/pg_diploma_clinical_cardiology.webp",
    overview: "Clinical Cardiology is a branch of medicine focused on the diagnosis, treatment, and prevention of cardiovascular diseases. With the rising burden of heart diseases—especially in countries like India—cardiology has become a critical area of clinical practice. Common conditions such as Coronary Artery Disease, Hypertension, and Heart Failure are leading causes of morbidity and mortality. A PG Diploma in Clinical Cardiology (12 months) is designed to provide clinicians with comprehensive knowledge of cardiovascular diseases, diagnostic techniques, and evidence-based management. The course integrates clinical medicine, diagnostics (ECG, Echo), and preventive cardiology, with emphasis on practical skills and patient-centered care.",
    lessons: 36,
    weeks: 50,
  },
  // Add more courses as needed
];

async function syncCoursesToSupabase() {
  try {
    console.log(`🔄 Syncing ${courses.length} courses to Supabase...`);

    let synced = 0;
    for (const course of courses) {
      if (!course.slug) continue;

      // Prepare data for Supabase
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
        console.error(`❌ Error syncing "${course.title}":`, error.message);
      } else {
        console.log(`✅ ${course.title}`);
        synced++;
      }
    }

    console.log(`✨ Sync complete! (${synced}/${courses.length} courses synced)`);
    process.exit(0);
  } catch (err) {
    console.error("❌ Sync failed:", err);
    process.exit(1);
  }
}

syncCoursesToSupabase();
