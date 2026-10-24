import { createHmac } from "node:crypto";

export type EnquiryChannel = "contact" | "chatbot";
export interface CrmPayload {
  event_id: string;
  lead: {
    name: string;
    phone: string;
    email: string;
    course: string;
    message: string;
  };
  transcript?: { role: "user" | "assistant"; content: string }[];
}

export async function deliverToCrm(channel: EnquiryChannel, payload: CrmPayload) {
  const sourceId =
    channel === "chatbot" ? process.env.CRM_CHATBOT_SOURCE_ID : process.env.CRM_SOURCE_ID;
  const apiKey =
    channel === "chatbot" ? process.env.CRM_CHATBOT_SOURCE_API_KEY : process.env.CRM_SOURCE_API_KEY;
  const signingKey = process.env.CRM_INTAKE_SIGNING_KEY;
  const baseUrl = process.env.CRM_BASE_URL;
  if (!sourceId || !apiKey || !signingKey || !baseUrl) {
    throw new Error("Required CRM environment variables are missing.");
  }

  const rawBody = JSON.stringify(payload);
  const timestamp = String(Math.floor(Date.now() / 1000));
  const signature = createHmac("sha256", signingKey)
    .update(`${timestamp}.${rawBody}`, "utf8")
    .digest("hex");
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
    "x-crm-source": sourceId,
    "x-crm-timestamp": timestamp,
    "x-crm-signature": `v1=${signature}`,
  };
  if (process.env.CRM_ORIGIN) headers.Origin = process.env.CRM_ORIGIN;

  let response: Response;
  try {
    response = await fetch(new URL("/api/webhooks/lead-intake", baseUrl), {
      method: "POST",
      headers,
      body: rawBody,
      signal: AbortSignal.timeout(15000),
      redirect: "error",
    });
  } catch {
    throw new Error("CRM intake could not be reached or timed out.");
  }
  if (response.status !== 202) {
    throw new Error(`CRM intake failed with HTTP ${response.status}`);
  }
}
