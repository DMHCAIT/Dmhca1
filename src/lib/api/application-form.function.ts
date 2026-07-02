import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const ApplicationFormSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone is required"),
  qualification: z.string().min(2, "Qualification is required"),
  experience: z.string().optional(),
  course: z.string().optional(),
  program: z.string().optional(),
  message: z.string().optional(),
});

export const submitApplicationForm = createServerFn({ method: "POST" })
  .inputValidator(ApplicationFormSchema)
  .handler(async ({ data }) => {
    try {
      const { error } = await supabase.from("applications").insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          course_name: data.course || null,
          program_name: data.program || null,
          qualification: data.qualification,
          experience: data.experience || null,
          message: data.message || null,
          status: "new",
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Error submitting application form:", error);
        throw new Error("Failed to submit application");
      }

      return {
        success: true,
        message: "Thank you for your application! Our admissions team will review your details and contact you soon.",
      };
    } catch (err) {
      console.error("Error in submitApplicationForm:", err);
      throw new Error("Failed to submit application. Please try again.");
    }
  });
