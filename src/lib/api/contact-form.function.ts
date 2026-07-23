import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

// Don't validate env vars at module load time - do it in the function instead
// This allows the code to load even if env vars aren't available yet
const getSupabaseClient = () => {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error("Missing Supabase credentials");
  }

  return createClient(supabaseUrl, supabaseKey);
};

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone is required"),
  course: z.string().optional(),
  message: z.string().min(3, "Message is required"),
});

// Send lead to TeleCRM API
async function sendToTeleCRM(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
  course?: string;
}) {
  const telecrmToken = process.env.TELECRM_SYNC_TOKEN;
  const telecrmApiUrl = process.env.TELECRM_API_URL;
  const telecrmEnterpriseId = process.env.TELECRM_ENTERPRISE_ID;

  if (!telecrmToken || !telecrmApiUrl) {
    console.warn("Skipping TeleCRM - missing configuration");
    return;
  }

  try {
    const cleanedPhone = data.phone.replace(/\D/g, "");

    // Prepare candidate payloads; prefer `fields` shape for this enterprise
    const candidates = [
      {
        // wrapped under 'fields' (accepted by this workspace)
        fields: {
          name: data.name,
          email: data.email,
          phone: cleanedPhone,
          message: data.message,
        },
      },
      {
        // flat top-level fields
        name: data.name,
        email: data.email,
        phone: cleanedPhone,
        message: data.message,
      },
      {
        // wrapped under 'lead'
        lead: {
          name: data.name,
          email: data.email,
          phone: cleanedPhone,
          message: data.message,
        },
      },
    ];

    const normalizedApiUrl = telecrmApiUrl.replace(/\/$/, "");
    let baseUrl = normalizedApiUrl;
    if (/autoupdate\/v2/i.test(normalizedApiUrl) && telecrmEnterpriseId) {
      baseUrl = `https://next-api.telecrm.in/enterprise/${telecrmEnterpriseId}/autoupdatelead`;
    } else if (!/autoupdate|autoupdatelead|enterprise/i.test(normalizedApiUrl)) {
      baseUrl = `${normalizedApiUrl}/leads`;
    }

    let sent = false;
    for (const payload of candidates) {
      try {
        console.log("TeleCRM attempt URL:", baseUrl);
        console.log("TeleCRM attempt payload:", payload);

        const res = await fetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${telecrmToken}`,
          },
          body: JSON.stringify(payload),
        });

        const text = await res.text();
        console.log("TeleCRM attempt status:", res.status, "body:", text);

        if (res.ok) {
          console.log("Lead successfully sent to TeleCRM with payload variant");
          sent = true;
          break;
        }
      } catch (err) {
        console.error("Error sending TeleCRM attempt:", err);
      }
    }

    if (!sent) {
      console.error("All TeleCRM payload attempts failed. See logs above for details.");
    }
  } catch (err) {
    console.error("Error sending lead to TeleCRM:", err);
  }
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(ContactFormSchema)
  .handler(async ({ data }) => {
    try {
      const supabase = getSupabaseClient();
      
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

      // Fire-and-forget: send lead to TeleCRM (do not block main request)
      sendToTeleCRM({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        course: data.course,
      });

      return { success: true };
    } catch (err) {
      console.error("submitContactForm error:", err);
      throw err;
    }
  });

