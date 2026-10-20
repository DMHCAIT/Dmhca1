import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { eventPaymentStatusSchema } from "@/lib/event-registration-schema";

const listRegistrationsSchema = z.object({
  accessToken: z.string().min(1),
});

const updateRegistrationStatusSchema = z.object({
  accessToken: z.string().min(1),
  registrationId: z.string().uuid(),
  status: eventPaymentStatusSchema,
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

export const getEventRegistrations = createServerFn({ method: "POST" })
  .validator(listRegistrationsSchema)
  .handler(async ({ data }) => {
    const adminClient = await getAdminClient(data.accessToken);
    const { data: registrations, error } = await adminClient
      .from("event_registrations")
      .select(
        "id, event_slug, event_title, full_name, email, phone, designation, specialty, institution, city, referral_source, status, razorpay_order_id, razorpay_payment_id, created_at, updated_at",
      )
      .eq("event_slug", "female-hormones-fertility-and-subfertility")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("[Admin event registrations] Registration query failed.", error);
      throw new Error(
        "Couldn't load event registrations. Check that migration 019 has been applied.",
      );
    }

    return registrations;
  });

export const updateEventRegistrationStatus = createServerFn({ method: "POST" })
  .validator(updateRegistrationStatusSchema)
  .handler(async ({ data }) => {
    const adminClient = await getAdminClient(data.accessToken);
    const { data: registration, error } = await adminClient
      .from("event_registrations")
      .update({
        status: data.status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", data.registrationId)
      .eq("event_slug", "female-hormones-fertility-and-subfertility")
      .select("id, status, updated_at")
      .single();

    if (error || !registration) {
      console.error("[Admin event registrations] Status update failed.", error);
      throw new Error(
        "Couldn't save the registration status. Refresh the registrations and try again.",
      );
    }

    return registration;
  });
