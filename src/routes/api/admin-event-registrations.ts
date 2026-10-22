import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import Razorpay from "razorpay";
import { syncRegistrationWithRazorpay } from "@/lib/event-payment-sync";

const eventSlug = "female-hormones-fertility-and-subfertility";

const listRegistrationsSchema = z.object({
  accessToken: z.string().min(1),
});

async function getAdminClient(accessToken: string) {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const anonKey = process.env.VITE_SUPABASE_ANON_KEY;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !anonKey || !serviceRoleKey) {
    throw new Error("Admin event registrations are not configured on the server.");
  }

  const adminClient = createClient(supabaseUrl, serviceRoleKey);

  const authClient = createClient(supabaseUrl, anonKey);
  const { data: authData, error: authError } = await authClient.auth.getUser(accessToken);
  if (authError || !authData.user?.email) {
    throw new Error("Your admin session has expired. Please sign in again.");
  }

  const { data: admin, error: adminError } = await adminClient
    .from("admin_users")
    .select("role")
    .ilike("email", authData.user.email)
    .maybeSingle();

  if (adminError) {
    console.error("[Admin event registrations] Admin role lookup failed.", adminError);
    throw new Error("We couldn't verify admin access. Please try again.");
  }
  if (!admin || !["admin", "moderator"].includes(admin.role)) {
    throw new Error("You don't have permission to manage event registrations.");
  }
  return adminClient;
}

const registrationColumns =
  "id, event_slug, event_title, full_name, email, phone, designation, specialty, institution, city, referral_source, status, payment_region, amount, currency, razorpay_order_id, razorpay_payment_id, created_at, updated_at";

// Read-only: statuses come from Razorpay, so admins cannot edit them manually.
export const getEventRegistrations = createServerFn({ method: "POST" })
  .validator(listRegistrationsSchema)
  .handler(async ({ data }) => {
    const adminClient = await getAdminClient(data.accessToken);
    const { data: registrations, error } = await adminClient
      .from("event_registrations")
      .select(registrationColumns)
      .eq("event_slug", eventSlug)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[Admin event registrations] Registration query failed.", error);
      throw new Error(
        "Couldn't load event registrations. Check that migrations 019 and 020 have been applied.",
      );
    }

    const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
    const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!razorpayKeyId || !razorpayKeySecret) return registrations;

    const razorpay = new Razorpay({ key_id: razorpayKeyId, key_secret: razorpayKeySecret });
    const unsettled = registrations.filter(
      (registration) => registration.status !== "paid" && registration.razorpay_order_id,
    );
    const results = await Promise.allSettled(
      unsettled.map((registration) =>
        syncRegistrationWithRazorpay(adminClient, razorpay, registration),
      ),
    );
    const synced = new Map<string, string>();
    results.forEach((result, index) => {
      if (result.status === "fulfilled") synced.set(unsettled[index].id, result.value);
      else console.error("[Admin event registrations] Razorpay sync failed.", result.reason);
    });

    return registrations.map((registration) => ({
      ...registration,
      status: synced.get(registration.id) ?? registration.status,
    }));
  });
