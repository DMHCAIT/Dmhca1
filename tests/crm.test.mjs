import { test, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { createHmac } from "node:crypto";
import { deliverToCrm } from "../src/lib/api/crm.server.ts";
import { saveEnquiry, deliverSavedEnquiry } from "../src/lib/api/enquiry.server.ts";
import { ContactFormSchema, ChatbotInquirySchema } from "../src/lib/api/enquiry-schema.ts";

const originalFetch = globalThis.fetch;
const originalEnv = { ...process.env };
const eventId = "079c4fcf-7b2c-4b2b-8783-78b95d322eb1";
const lead = {
  name: "Test Visitor",
  email: "person@example.com",
  phone: "+919876543210",
  course: "Course enquiry",
  message: "Please explain eligibility.",
};

beforeEach(() => {
  Object.assign(process.env, {
    CRM_BASE_URL: "https://crm.test/nested",
    CRM_SOURCE_ID: "contact-source",
    CRM_SOURCE_API_KEY: "contact-test-key",
    CRM_CHATBOT_SOURCE_ID: "chatbot-source",
    CRM_CHATBOT_SOURCE_API_KEY: "chatbot-test-key",
    CRM_INTAKE_SIGNING_KEY: "abcdef123456",
    VITE_SUPABASE_URL: "https://db.test",
    SUPABASE_SERVICE_ROLE_KEY: "server-test-key",
  });
  delete process.env.CRM_ORIGIN;
});
afterEach(() => {
  globalThis.fetch = originalFetch;
  for (const key of Object.keys(process.env)) {
    if (!(key in originalEnv)) delete process.env[key];
  }
  Object.assign(process.env, originalEnv);
});

for (const channel of ["contact", "chatbot"]) {
  test(`${channel}: correct source, exact signed bytes, endpoint, timeout, and 202`, async () => {
    const payload = { event_id: eventId, lead };
    if (channel === "chatbot") payload.transcript = [{ role: "user", content: "Hello" }];
    globalThis.fetch = async (url, options) => {
      assert.equal(String(url), "https://crm.test/api/webhooks/lead-intake");
      assert.equal(options.method, "POST");
      assert.equal(options.redirect, "error");
      assert.ok(options.signal instanceof AbortSignal);
      const headers = options.headers;
      assert.equal(headers.Authorization, `Bearer ${channel}-test-key`);
      assert.equal(headers["x-crm-source"], `${channel}-source`);
      assert.equal(headers["Content-Type"], "application/json");
      assert.equal(headers.Origin, undefined);
      assert.match(headers["x-crm-timestamp"], /^\d+$/);
      const expected = createHmac("sha256", "abcdef123456")
        .update(`${headers["x-crm-timestamp"]}.${options.body}`, "utf8")
        .digest("hex");
      assert.equal(headers["x-crm-signature"], `v1=${expected}`);
      assert.deepEqual(JSON.parse(options.body), payload);
      return new Response("{}", { status: 202 });
    };
    await deliverToCrm(channel, payload);
  });
}

test("Origin is sent exactly as configured", async () => {
  process.env.CRM_ORIGIN = "https://www.example.com";
  globalThis.fetch = async (_url, options) => {
    assert.equal(options.headers.Origin, "https://www.example.com");
    return new Response(null, { status: 202 });
  };
  await deliverToCrm("contact", { event_id: eventId, lead });
});

test("only HTTP 202 counts as success", async () => {
  for (const status of [200, 201, 204, 400, 401, 429, 500]) {
    globalThis.fetch = async () => new Response(null, { status });
    await assert.rejects(
      deliverToCrm("contact", { event_id: eventId, lead }),
      new RegExp(`HTTP ${status}`),
    );
  }
});

test("missing channel credentials fails without falling back to contact credentials", async () => {
  delete process.env.CRM_CHATBOT_SOURCE_API_KEY;
  globalThis.fetch = () => assert.fail("No HTTP request should be made");
  await assert.rejects(deliverToCrm("chatbot", { event_id: eventId, lead }), /missing/);
});

test("network errors are sanitized", async () => {
  globalThis.fetch = async () => {
    throw new Error("sensitive remote details");
  };
  await assert.rejects(deliverToCrm("contact", { event_id: eventId, lead }), {
    message: "CRM intake could not be reached or timed out.",
  });
});

test("validation normalizes full international numbers and rejects malformed input", () => {
  const parsed = ContactFormSchema.parse({ ...lead, event_id: eventId, phone: "+91 98765 43210" });
  assert.equal(parsed.phone, "+919876543210");
  const nepalNumber = ContactFormSchema.parse({
    ...lead,
    event_id: eventId,
    phone: "+977 8265348900",
  });
  assert.equal(nepalNumber.phone, "+9778265348900");
  assert.equal(
    ContactFormSchema.safeParse({ ...lead, event_id: eventId, phone: "abcdefghij" }).success,
    false,
  );
  assert.equal(
    ContactFormSchema.safeParse({ ...lead, event_id: eventId, phone: "9876543210" }).success,
    false,
  );
  assert.equal(ContactFormSchema.safeParse({ ...lead, event_id: "unstable" }).success, false);
  const chatbot = ChatbotInquirySchema.parse({
    event_id: eventId,
    ...lead,
    mobile: "+44 20 7946 0018",
    timestamp: new Date().toISOString(),
  });
  assert.equal(chatbot.mobile, "+442079460018");
});

function mockDatabase({ crmStatus = 202, insertFails = false } = {}) {
  const rows = new Map();
  const deliveries = [];
  globalThis.fetch = async (input, init) => {
    const url = new URL(String(input));
    if (url.hostname === "crm.test") {
      const payload = JSON.parse(init.body);
      assert.ok(rows.has(payload.event_id), "Enquiry must be saved before CRM delivery");
      deliveries.push({ payload, headers: init.headers });
      return new Response(null, { status: crmStatus });
    }
    assert.equal(url.hostname, "db.test");
    const method = init?.method || "GET";
    const id = url.searchParams.get("event_id")?.replace(/^eq\./, "");
    if (method === "POST") {
      if (insertFails)
        return Response.json({ code: "TEST_ERROR", message: "Insert failed" }, { status: 500 });
      const row = JSON.parse(init.body);
      if (!rows.has(row.event_id)) rows.set(row.event_id, row);
      return new Response(null, { status: 201 });
    }
    if (method === "PATCH") {
      Object.assign(rows.get(id), JSON.parse(init.body));
      return new Response(null, { status: 204 });
    }
    return Response.json(rows.get(id));
  };
  return { rows, deliveries };
}

test("contact is durable before delivery; retries preserve ID, omit transcript, and avoid duplicates", async () => {
  const mock = mockDatabase();
  await saveEnquiry("contact", { event_id: eventId, ...lead });
  assert.equal(mock.rows.get(eventId).crm_status, "delivered");
  assert.equal(mock.deliveries[0].payload.event_id, eventId);
  assert.equal(mock.deliveries[0].payload.transcript, undefined);
  await saveEnquiry("contact", { event_id: eventId, ...lead });
  assert.equal(mock.rows.size, 1);
  assert.equal(mock.deliveries.length, 1);
});

test("failed CRM delivery is saved for retry; retry sends original data and same event ID", async () => {
  const mock = mockDatabase({ crmStatus: 500 });
  const result = await saveEnquiry("chatbot", {
    event_id: eventId,
    ...lead,
    transcript: [{ role: "user", content: "Eligibility?" }],
  });
  assert.equal(result.success, true);
  assert.equal(result.crmStatus, "failed");
  assert.equal(mock.rows.get(eventId).crm_error, "CRM intake failed with HTTP 500");
  assert.deepEqual(mock.deliveries[0].payload.transcript, [
    { role: "user", content: "Eligibility?" },
  ]);
  const fetchWithFailure = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    if (new URL(String(url)).hostname === "crm.test") {
      const payload = JSON.parse(options.body);
      assert.equal(payload.event_id, eventId);
      assert.equal(payload.lead.phone, lead.phone);
      return new Response(null, { status: 202 });
    }
    return fetchWithFailure(url, options);
  };
  assert.equal(await deliverSavedEnquiry("chatbot", eventId), "delivered");
  assert.equal(mock.rows.get(eventId).crm_error, null);
});

test("database failure never sends a lead to CRM", async () => {
  const mock = mockDatabase({ insertFails: true });
  await assert.rejects(saveEnquiry("contact", { event_id: eventId, ...lead }), /Failed to save/);
  assert.equal(mock.deliveries.length, 0);
});

test("each attempt generates a fresh timestamp and signature for the same event", async () => {
  const originalNow = Date.now;
  const requests = [];
  let now = 1700000000000;
  Date.now = () => now;
  try {
    globalThis.fetch = async (_url, options) => {
      requests.push(options);
      return new Response(null, { status: 202 });
    };
    await deliverToCrm("contact", { event_id: eventId, lead });
    now += 1000;
    await deliverToCrm("contact", { event_id: eventId, lead });
    assert.equal(requests[0].body, requests[1].body);
    assert.notEqual(requests[0].headers["x-crm-timestamp"], requests[1].headers["x-crm-timestamp"]);
    assert.notEqual(requests[0].headers["x-crm-signature"], requests[1].headers["x-crm-signature"]);
  } finally {
    Date.now = originalNow;
  }
});
