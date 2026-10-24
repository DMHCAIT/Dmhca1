import dotenv from "dotenv";
import { deliverSavedEnquiry, enquiryDatabase } from "../src/lib/api/enquiry.server.ts";

dotenv.config({ path: ".env.local", quiet: true });
const db = enquiryDatabase();
let failed = false;
for (const channel of ["contact", "chatbot"]) {
  const table = channel === "contact" ? "contact_messages" : "applications";
  let query = db
    .from(table)
    .select("event_id")
    .in("crm_status", ["pending", "failed"])
    .order("created_at")
    .limit(100);
  if (channel === "chatbot") query = query.eq("form_type", "chatbot_inquiry");
  const { data, error } = await query;
  if (error) {
    console.error(`Unable to load ${channel} CRM queue (database code ${error.code}).`);
    failed = true;
    continue;
  }
  for (const row of data) {
    try {
      const status = await deliverSavedEnquiry(channel, row.event_id);
      console.log(`${channel} ${row.event_id}: ${status}`);
      if (status !== "delivered") failed = true;
    } catch {
      console.error(`${channel} ${row.event_id}: retry failed.`);
      failed = true;
    }
  }
}
if (failed) process.exitCode = 1;
