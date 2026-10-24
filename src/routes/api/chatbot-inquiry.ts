import { createServerFn } from "@tanstack/react-start";
import { ChatbotInquirySchema } from "@/lib/api/enquiry-schema";

export const submitChatbotInquiry = createServerFn({ method: "POST" })
  .validator(ChatbotInquirySchema)
  .handler(async ({ data }) => {
    const { saveEnquiry } = await import("@/lib/api/enquiry.server");
    return saveEnquiry("chatbot", {
      ...data,
      phone: data.mobile,
      message: `Course Interest: ${data.course}`,
    });
  });
