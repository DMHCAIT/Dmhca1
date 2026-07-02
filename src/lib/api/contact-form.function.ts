import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase credentials");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone is required"),
  course: z.string().optional(),
  message: z.string().min(10, "Message is required"),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(ContactFormSchema)
  .handler(async ({ data }) => {
    try {
      const { error } = await supabase.from("contact_messages").insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          course: data.course || null,
          message: data.message,
          status: "new",
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        console.error("Error submitting contact form:", error);
        throw new Error("Failed to submit form");
      }

      return {
        success: true,
        message: "Thank you! Your message has been received. We will contact you shortly.",
      };
    } catch (err) {
      console.error("Error in submitContactForm:", err);
      throw new Error("Failed to submit form. Please try again.");
    }
  });
