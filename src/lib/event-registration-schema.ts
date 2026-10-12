import { z } from "zod";

export const eventPaymentMethods = ["upi", "card"] as const;

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
});

export const verifyEventPaymentSchema = z.object({
  orderId: z.string().min(1),
  paymentId: z.string().min(1),
  signature: z.string().length(64),
});

export type EventRegistrationInput = z.infer<typeof eventRegistrationSchema>;
