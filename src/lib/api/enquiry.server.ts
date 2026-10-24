import { createClient } from "@supabase/supabase-js";
import { deliverToCrm, type CrmPayload, type EnquiryChannel } from "./crm.server.ts";

export function enquiryDatabase() {
  const url = process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Required server database configuration is missing.");
  return createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } });
}

interface Enquiry {
  event_id: string;
  name: string;
  email: string;
  phone: string;
  course?: string;
  message: string;
  transcript?: CrmPayload["transcript"];
  timestamp?: string;
}

export async function saveEnquiry(channel: EnquiryChannel, data: Enquiry) {
  const db = enquiryDatabase();
  const table = channel === "contact" ? "contact_messages" : "applications";
  const record =
    channel === "contact"
      ? {
          name: data.name,
          email: data.email,
          phone: data.phone,
          course: data.course || null,
          message: data.message,
        }
      : {
          full_name: data.name,
          email: data.email,
          phone: data.phone,
          course_name: data.course,
          message: data.message,
          source: "chatbot_widget",
          form_type: "chatbot_inquiry",
          form_data: {
            originalCourse: data.course,
            submissionTime: data.timestamp,
            transcript: data.transcript || [],
          },
        };
  // Ignore duplicate submissions without changing the original, durable enquiry.
  const { error } = await db.from(table).upsert(
    {
      ...record,
      event_id: data.event_id,
      crm_status: "pending",
      status: "new",
    },
    { onConflict: "event_id", ignoreDuplicates: true },
  );
  if (error) {
    console.error("Enquiry save failed", { channel, code: error.code });
    throw new Error("Failed to save your enquiry. Please try again.");
  }
  const crmStatus = await deliverSavedEnquiry(channel, data.event_id);
  return { success: true, crmStatus };
}

export async function deliverSavedEnquiry(channel: EnquiryChannel, eventId: string) {
  const db = enquiryDatabase();
  const table = channel === "contact" ? "contact_messages" : "applications";
  let query = db.from(table).select("*").eq("event_id", eventId);
  if (channel === "chatbot") query = query.eq("form_type", "chatbot_inquiry");
  const { data, error } = await query.single();
  if (error || !data) {
    console.error("Saved enquiry lookup failed", { channel, eventId, code: error?.code });
    throw new Error("Unable to load saved enquiry for CRM delivery.");
  }
  if (data.crm_status === "delivered") return "delivered" as const;
  const payload: CrmPayload = {
    event_id: data.event_id,
    lead: {
      name: channel === "contact" ? data.name : data.full_name,
      email: data.email,
      phone: data.phone,
      course: (channel === "contact" ? data.course : data.course_name) || "Course enquiry",
      message: data.message || "",
    },
  };
  if (channel === "chatbot" && data.form_data?.transcript?.length) {
    payload.transcript = data.form_data.transcript;
  }
  let deliveryError: string | null = null;
  try {
    await deliverToCrm(channel, payload);
  } catch (error) {
    deliveryError = error instanceof Error ? error.message : "CRM delivery failed.";
    console.error("CRM delivery failed", { channel, eventId, error: deliveryError });
  }
  const status = deliveryError ? ("failed" as const) : ("delivered" as const);
  const { error: updateError } = await db
    .from(table)
    .update({
      crm_status: status,
      crm_error: deliveryError,
      crm_delivered_at: deliveryError ? null : new Date().toISOString(),
    })
    .eq("event_id", eventId)
    .neq("crm_status", "delivered");
  if (updateError) {
    console.error("CRM status save failed", { channel, eventId, code: updateError.code });
    throw new Error("Enquiry saved, but delivery status could not be recorded. Please retry.");
  }
  return status;
}
