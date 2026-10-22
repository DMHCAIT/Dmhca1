import { z } from "zod";

export const eventPaymentStatuses = [
  "paid",
  "pending",
  "cancelled",
  "failed",
  "payment_setup_failed",
] as const;
export const eventPaymentStatusSchema = z.enum(eventPaymentStatuses);
export type EventPaymentStatus = z.infer<typeof eventPaymentStatusSchema>;

export const eventPaymentRegions = ["indian", "international"] as const;
export const eventPaymentRegionSchema = z.enum(eventPaymentRegions);
export type EventPaymentRegion = z.infer<typeof eventPaymentRegionSchema>;

export const eventCurrencies = ["INR", "USD"] as const;
export const eventCurrencySchema = z.enum(eventCurrencies);
export type EventCurrency = z.infer<typeof eventCurrencySchema>;

// amountInSubunits is what Razorpay expects (paise for INR, cents for USD).
export const eventPricing = {
  indian: {
    label: "Indian payment",
    currency: "INR",
    amount: 599,
    amountInSubunits: 59900,
    display: "₹599",
  },
  international: {
    label: "International payment",
    currency: "USD",
    amount: 7,
    amountInSubunits: 700,
    display: "$7",
  },
} as const satisfies Record<
  EventPaymentRegion,
  {
    label: string;
    currency: EventCurrency;
    amount: number;
    amountInSubunits: number;
    display: string;
  }
>;

export function getEventPricingByCurrency(currency: string | null | undefined) {
  return currency === "USD" ? eventPricing.international : eventPricing.indian;
}

export const eventDesignations = [
  "Consultant",
  "Specialist / Senior resident",
  "Postgraduate student",
  "General practitioner",
  "Other",
] as const;

export const eventReferralSources = [
  "WhatsApp",
  "Email",
  "Social media",
  "Colleague",
  "Other",
] as const;

export const eventRegistrationSchema = z.object({
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
  designation: z.enum(eventDesignations),
  specialty: z.string().trim().min(2).max(150),
  institution: z.string().trim().min(2).max(200),
  city: z.string().trim().min(2).max(120),
  referralSource: z.enum(eventReferralSources).optional(),
  consent: z.literal(true),
  paymentRegion: eventPaymentRegionSchema,
});

export const verifyEventPaymentSchema = z.object({
  orderId: z.string().min(1),
  paymentId: z.string().min(1),
  signature: z.string().length(64),
});

export const reportEventPaymentOutcomeSchema = z.object({
  orderId: z.string().min(1).max(64),
  outcome: z.enum(["cancelled", "failed"]),
});

export type EventRegistrationInput = z.infer<typeof eventRegistrationSchema>;
