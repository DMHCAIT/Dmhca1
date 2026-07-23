import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
const telecrmToken = process.env.TELECRM_SYNC_TOKEN;
const telecrmApiUrl = process.env.TELECRM_API_URL;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase credentials");
}

if (!telecrmToken || !telecrmApiUrl) {
  console.warn("Missing TeleCRM configuration - lead will not be sent to TeleCRM");
}

const supabase = createClient(supabaseUrl, supabaseKey);

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone is required"),
  course: z.string().optional(),
  message: z.string().min(10, "Message is required"),
});

// Send lead to TeleCRM API
async function sendToTeleCRM(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  course?: string;
}) {
  if (!telecrmToken || !telecrmApiUrl) {
    console.warn("Skipping TeleCRM - missing configuration");
    return;
  }

  try {
    const telecrmPayload = {
      name: data.name,
      email: data.email,
      phone: data.phone.replace(/\D/g, ""), // Remove non-digits
      field_other: data.course ? `Course: ${data.course}` : undefined,
    };

    const response = await fetch(
      `${telecrmApiUrl}/leads`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${telecrmToken}`,
        },
        body: JSON.stringify(telecrmPayload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        "TeleCRM API error:",
        response.status,
        errorText
      );
    } else {
      console.log("Lead successfully sent to TeleCRM");
    }
  } catch (err) {
    console.error("Error sending lead to TeleCRM:", err);
    // Don't throw - TeleCRM integration is secondary to database save
  }
}

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator(ContactFormSchema)
  .handler(async ({ data }) => {
    try {
      // Save to database first
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

      // Send to TeleCRM (non-blocking, errors are logged but don't fail the response)
      sendToTeleCRM(data).catch((err) => {
        console.error("TeleCRM integration error (non-fatal):", err);
      });

      return {
        success: true,
        message: "Thank you! Your message has been received. We will contact you shortly.",
      };
    } catch (err) {
      console.error("Error in submitContactForm:", err);
      throw new Error("Failed to submit form. Please try again.");
    }
  });
