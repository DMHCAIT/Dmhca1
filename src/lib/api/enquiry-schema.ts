import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const enquiryPhone = z
  .string()
  .trim()
  .transform((value, ctx) => {
    const phone = parsePhoneNumberFromString(value, "IN");
    if (!phone?.isValid()) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter a valid phone number" });
      return z.NEVER;
    }
    return phone.number;
  });

const internationalPhone = z
  .string()
  .trim()
  .refine((value) => value.startsWith("+"), "Include + and the country code")
  .transform((value, ctx) => {
    const phone = parsePhoneNumberFromString(value);
    if (!phone?.isPossible()) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Enter a possible phone number" });
      return z.NEVER;
    }
    return phone.number;
  });

export const TranscriptSchema = z
  .array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string().trim().min(1).max(4000),
    }),
  )
  .max(200);

export const ContactFormSchema = z.object({
  event_id: z.string().uuid(),
  name: z.string().trim().min(2).max(200),
  email: z
    .string()
    .trim()
    .email()
    .max(320)
    .transform((value) => value.toLowerCase()),
  phone: internationalPhone,
  course: z.string().trim().max(500).optional(),
  message: z.string().trim().min(3).max(10000),
});

export const ChatbotInquirySchema = z.object({
  event_id: z.string().uuid(),
  name: z.string().trim().min(2).max(200),
  email: z
    .string()
    .trim()
    .email()
    .max(320)
    .transform((value) => value.toLowerCase()),
  mobile: enquiryPhone,
  course: z.string().trim().min(1).max(500),
  timestamp: z.string().datetime(),
  transcript: TranscriptSchema.optional(),
});
