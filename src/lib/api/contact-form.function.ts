import { createServerFn } from "@tanstack/react-start";
import { ContactFormSchema } from "./enquiry-schema";

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(ContactFormSchema)
  .handler(async ({ data }) => {
    const { saveEnquiry } = await import("./enquiry.server");
    return saveEnquiry("contact", data);
  });
