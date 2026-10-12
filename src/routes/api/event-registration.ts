import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import crypto from "crypto";
import Razorpay from "razorpay";
import { getEventBySlug } from "@/data/events";
import { eventRegistrationSchema, verifyEventPaymentSchema } from "@/lib/event-registration-schema";

const eventSlug = "female-hormones-fertility-and-subfertility";
const eventPriceInRupees = 599;
const eventPriceInPaise = eventPriceInRupees * 100;

function getPaymentServices() {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const razorpayKeyId = process.env.RAZORPAY_KEY_ID;
  const razorpayKeySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!supabaseUrl || !supabaseServiceKey || !razorpayKeyId || !razorpayKeySecret) {
    throw new Error("Event registration payments are not configured on the server.");
  }

  return {
    supabase: createClient(supabaseUrl, supabaseServiceKey),
    razorpay: new Razorpay({ key_id: razorpayKeyId, key_secret: razorpayKeySecret }),
    razorpayKeyId,
    razorpayKeySecret,
  };
}

function getEvent() {
  const event = getEventBySlug(eventSlug);
  if (!event?.registrationPending) {
    throw new Error("Registration is not available for this event.");
  }

  if (event.startsAt && Date.parse(event.startsAt) <= Date.now()) {
    throw new Error("Registration for this event has closed.");
  }

  return event;
}

export const createEventRegistrationOrder = createServerFn({ method: "POST" })
  .validator(eventRegistrationSchema)
  .handler(async ({ data }) => {
    const event = getEvent();
    const { supabase, razorpay, razorpayKeyId } = getPaymentServices();

    const { data: registration, error: registrationError } = await supabase
      .from("event_registrations")
      .insert({
        event_id: null,
        user_email: data.email,
        user_name: data.fullName,
        user_phone: data.phone,
        registration_date: new Date().toISOString(),
        event_slug: event.slug,
        event_title: event.title,
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        designation: data.designation,
        specialty: data.specialty,
        institution: data.institution,
        city: data.city,
        referral_source: data.referralSource || null,
        consent: data.consent,
        status: "pending",
      })
      .select("id")
      .single();

    if (registrationError || !registration) {
      if (registrationError) {
        console.error("[Event registration] Registration insert failed.", {
          code: registrationError.code,
          message: registrationError.message,
          details: registrationError.details,
          hint: registrationError.hint,
        });
        const errorCode = registrationError.code;
        if (errorCode === "23502") {
          throw new Error(
            "The registration database requires a field that this form does not provide (database error 23502). Please contact support.",
          );
        }
        if (errorCode === "23505") {
          throw new Error(
            "This registration conflicts with an existing record (database error 23505). Please contact support.",
          );
        }
        if (errorCode === "42501") {
          throw new Error(
            "Registration storage permissions are not configured correctly (database error 42501). Please contact support.",
          );
        }
        if (errorCode === "42P01" || errorCode === "PGRST204") {
          throw new Error(
            "The registration database schema is incomplete or not refreshed (database error " +
              errorCode +
              "). Please contact support.",
          );
        }
        throw new Error(
          `We couldn't save your registration (database error ${errorCode || "unknown"}). Please contact support.`,
        );
      }

      throw new Error("We couldn't save your registration. Please contact support.");
    }

    let orderId: string;
    try {
      const order = await razorpay.orders.create({
        amount: eventPriceInPaise,
        currency: "INR",
        receipt: `event_${registration.id.replaceAll("-", "").slice(0, 24)}`,
        notes: {
          event_registration_id: registration.id,
          event_slug: event.slug,
        },
      });
      orderId = order.id;
    } catch (error) {
      console.error("Razorpay event order creation failed.", error);
      const { error: registrationUpdateError } = await supabase
        .from("event_registrations")
        .update({ status: "payment_setup_failed" })
        .eq("id", registration.id);
      if (registrationUpdateError) {
        console.error(
          "Could not mark event registration after payment setup failed.",
          registrationUpdateError,
        );
      }
      throw new Error("We couldn't start your payment. Please try again.");
    }

    const { error: registrationUpdateError } = await supabase
      .from("event_registrations")
      .update({ razorpay_order_id: orderId })
      .eq("id", registration.id);
    if (registrationUpdateError) {
      const { error: statusUpdateError } = await supabase
        .from("event_registrations")
        .update({ status: "payment_setup_failed" })
        .eq("id", registration.id);
      if (statusUpdateError) {
        console.error(
          "Could not mark event registration after order persistence failed.",
          statusUpdateError,
        );
      }
      throw new Error("Your payment could not be prepared. Please try again.");
    }

    const { error: paymentError } = await supabase.from("payments").insert({
      course_name: event.title,
      student_name: data.fullName,
      student_email: data.email,
      amount: eventPriceInRupees,
      currency: "INR",
      payment_method: "razorpay",
      razorpay_order_id: orderId,
      status: "pending",
    });

    if (paymentError) {
      const { error: statusUpdateError } = await supabase
        .from("event_registrations")
        .update({ status: "payment_setup_failed" })
        .eq("id", registration.id);
      if (statusUpdateError) {
        console.error(
          "Could not mark event registration after payment record failed.",
          statusUpdateError,
        );
      }
      throw new Error("Your payment could not be prepared. Please try again.");
    }

    return {
      keyId: razorpayKeyId,
      orderId,
      amount: eventPriceInPaise,
      currency: "INR",
      eventTitle: event.title,
    };
  });

export const verifyEventRegistrationPayment = createServerFn({ method: "POST" })
  .validator(verifyEventPaymentSchema)
  .handler(async ({ data }) => {
    const { supabase, razorpay, razorpayKeySecret } = getPaymentServices();
    const expectedSignature = crypto
      .createHmac("sha256", razorpayKeySecret)
      .update(`${data.orderId}|${data.paymentId}`)
      .digest("hex");

    const expectedBuffer = Buffer.from(expectedSignature, "hex");
    const receivedBuffer = Buffer.from(data.signature, "hex");
    if (
      expectedBuffer.length !== receivedBuffer.length ||
      !crypto.timingSafeEqual(expectedBuffer, receivedBuffer)
    ) {
      throw new Error("Payment verification failed. Please contact support before retrying.");
    }

    const [
      { data: registration, error: registrationError },
      { data: payment, error: paymentError },
    ] = await Promise.all([
      supabase
        .from("event_registrations")
        .select("id, status, razorpay_payment_id")
        .eq("event_slug", eventSlug)
        .eq("razorpay_order_id", data.orderId)
        .single(),
      supabase
        .from("payments")
        .select("amount, currency, status, razorpay_payment_id")
        .eq("razorpay_order_id", data.orderId)
        .single(),
    ]);

    if (registrationError || !registration || paymentError || !payment) {
      throw new Error("We couldn't find this registration payment. Please contact support.");
    }

    const razorpayPayment = await razorpay.payments.fetch(data.paymentId);
    if (
      razorpayPayment.order_id !== data.orderId ||
      razorpayPayment.amount !== eventPriceInPaise ||
      razorpayPayment.currency !== "INR" ||
      razorpayPayment.status !== "captured" ||
      Number(payment.amount) !== eventPriceInRupees ||
      payment.currency !== "INR"
    ) {
      throw new Error(
        "The payment has not been captured. Please contact support if you were charged.",
      );
    }

    if (registration.status === "paid" && registration.razorpay_payment_id === data.paymentId) {
      return { ok: true };
    }

    const { error: paymentUpdateError } = await supabase
      .from("payments")
      .update({
        razorpay_payment_id: data.paymentId,
        razorpay_signature: data.signature,
        status: "completed",
        updated_at: new Date().toISOString(),
      })
      .eq("razorpay_order_id", data.orderId);
    if (paymentUpdateError) {
      throw new Error(
        "Payment was received, but confirmation could not be saved. Please contact support.",
      );
    }

    const { error: registrationUpdateError } = await supabase
      .from("event_registrations")
      .update({
        razorpay_payment_id: data.paymentId,
        status: "paid",
        updated_at: new Date().toISOString(),
      })
      .eq("id", registration.id);
    if (registrationUpdateError) {
      throw new Error(
        "Payment was received, but confirmation could not be saved. Please contact support.",
      );
    }

    return { ok: true };
  });
