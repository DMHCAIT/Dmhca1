import { ChatbotInquirySchema } from "../src/lib/api/enquiry-schema.ts";
import { saveEnquiry } from "../src/lib/api/enquiry.server.ts";

async function submit(body) {
  const parsed = ChatbotInquirySchema.safeParse(body);
  if (!parsed.success) {
    return { status: 400, body: { error: "Invalid enquiry. Check required fields and event_id." } };
  }
  try {
    const data = parsed.data;
    const result = await saveEnquiry("chatbot", {
      ...data,
      phone: data.mobile,
      message: `Course Interest: ${data.course}`,
    });
    return { status: 200, body: result };
  } catch {
    console.error("Chatbot API could not save enquiry.");
    return {
      status: 500,
      body: { error: "Failed to save enquiry. Please retry with the same event_id." },
    };
  }
}

export async function post(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }
  const result = await submit(body);
  return Response.json(result.body, { status: result.status });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }
  const result = await submit(req.body);
  return res.status(result.status).json(result.body);
}
