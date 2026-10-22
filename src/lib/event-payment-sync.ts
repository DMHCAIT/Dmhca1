import type { SupabaseClient } from "@supabase/supabase-js";
import type Razorpay from "razorpay";
import { getEventPricingByCurrency } from "@/lib/event-registration-schema";

type SyncableRegistration = {
  id: string;
  status: string;
  currency: string | null;
  razorpay_order_id: string | null;
  created_at?: string | null;
};

// After this long without a successful payment, an attempt is treated as abandoned.
const abandonedAfterMs = 30 * 60 * 1000;

type RazorpayOrderPayment = {
  id: string;
  status: string;
  amount: number | string;
  currency: string;
  order_id?: string | null;
};

// Derives the registration status from Razorpay's record of the order, so the
// admin panel never depends on manual edits or on the browser reporting back.
export async function syncRegistrationWithRazorpay(
  supabase: SupabaseClient,
  razorpay: Razorpay,
  registration: SyncableRegistration,
  options: { checkoutClosed?: boolean } = {},
) {
  if (registration.status === "paid" || !registration.razorpay_order_id) {
    return registration.status;
  }

  const pricing = getEventPricingByCurrency(registration.currency);
  const result = await razorpay.orders.fetchPayments(registration.razorpay_order_id);
  const payments = (result.items ?? []) as RazorpayOrderPayment[];

  const captured = payments.find(
    (payment) =>
      payment.status === "captured" &&
      Number(payment.amount) === pricing.amountInSubunits &&
      payment.currency === pricing.currency,
  );
  // "authorized" payments are being captured by Razorpay; "created" ones are still open
  // in checkout. Both stay pending until the attempt is closed or abandoned.
  const inProgress = payments.some((payment) => payment.status === "authorized");
  const openInCheckout = payments.some((payment) => payment.status === "created");
  const createdAt = registration.created_at ? Date.parse(registration.created_at) : NaN;
  const abandoned = !Number.isNaN(createdAt) && Date.now() - createdAt > abandonedAfterMs;
  const closed = options.checkoutClosed || abandoned;

  let nextStatus = registration.status;
  if (captured) nextStatus = "paid";
  else if (inProgress) nextStatus = "pending";
  else if (payments.some((payment) => payment.status === "failed")) nextStatus = "failed";
  else if (openInCheckout && !closed) nextStatus = "pending";
  else if (closed && registration.status === "pending") nextStatus = "cancelled";

  if (nextStatus === registration.status) return nextStatus;

  const now = new Date().toISOString();
  if (captured) {
    const { error: paymentError } = await supabase
      .from("payments")
      .update({ razorpay_payment_id: captured.id, status: "completed", updated_at: now })
      .eq("razorpay_order_id", registration.razorpay_order_id);
    if (paymentError) {
      console.error("[Event payment sync] Could not update payment record.", paymentError);
      return registration.status;
    }
  }

  const { error } = await supabase
    .from("event_registrations")
    .update({
      status: nextStatus,
      ...(captured ? { razorpay_payment_id: captured.id } : {}),
      updated_at: now,
    })
    .eq("id", registration.id)
    .neq("status", "paid");
  if (error) {
    console.error("[Event payment sync] Could not update registration status.", error);
    return registration.status;
  }
  return nextStatus;
}
