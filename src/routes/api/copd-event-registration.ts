import { createServerFn } from "@tanstack/react-start";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { getEventBySlug } from "@/data/events";

const copdEventSlug = "nutritional-management-of-copd";

const copdRegistrationSchema = z.object({
  fullName: z.string().trim().min(2).max(150),
  email: z.string().trim().email().max(255),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s()-]+$/, "Enter a valid phone or WhatsApp number")
    .refine((phone) => {
      const digitCount = phone.replace(/\D/g, "").length;
      return digitCount >= 10 && digitCount <= 15;
    }, "Enter a valid phone or WhatsApp number"),
  designation: z.enum([
    "Dietitian / Nutritionist",
    "Doctor",
    "Nurse",
    "Student",
    "Other",
  ]),
  city: z.string().trim().min(2).max(120),
  institution: z.string().trim().min(2).max(200),
  source: z.enum([
    "WhatsApp",
    "Email",
    "Social media",
    "Colleague",
    "Other",
  ]).optional(),
  consent: z.literal(true),
});

export type CopdRegistrationInput = z.infer<typeof copdRegistrationSchema>;

function getSupabase() {
  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("COPD event registration is not configured on the server.");
  }

  return createClient(supabaseUrl, supabaseServiceKey);
}

function getEvent() {
  const event = getEventBySlug(copdEventSlug);
  if (!event?.registrationPending) {
    throw new Error("Registration is not available for this event.");
  }

  if (event.startsAt && Date.parse(event.startsAt) <= Date.now()) {
    throw new Error("Registration for this event has closed.");
  }

  return event;
}

export const registerForCopdWebinar = createServerFn({ method: "POST" })
  .validator(copdRegistrationSchema)
  .handler(async ({ data }) => {
    const event = getEvent();
    const supabase = getSupabase();

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
        specialty: "", // Not required for free events
        institution: data.institution,
        city: data.city,
        referral_source: data.source || null,
        consent: data.consent,
        status: "paid", // Free events are marked as paid on registration
        payment_region: null,
        amount: 0,
        currency: null,
      })
      .select("id")
      .single();

    if (registrationError || !registration) {
      if (registrationError) {
        console.error("[COPD event registration] Registration insert failed.", {
          code: registrationError.code,
          message: registrationError.message,
          details: registrationError.details,
          hint: registrationError.hint,
        });
        const errorCode = registrationError.code;
        if (errorCode === "23505") {
          throw new Error("You've already registered for this event. Please check your email.");
        }
        if (errorCode === "42501") {
          throw new Error(
            "Registration storage permissions are not configured correctly. Please contact support.",
          );
        }
        throw new Error(
          `We couldn't save your registration. Please contact support or try again later.`,
        );
      }
      throw new Error("We couldn't save your registration. Please contact support.");
    }

    return {
      success: true,
      registrationId: registration.id,
      message: "You've successfully registered for the COPD Nutrition Webinar!",
    };
  });
