import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import Razorpay from "razorpay";
import { createClient } from "@supabase/supabase-js";
import { CheckoutItemsSchema } from "@/lib/course-pricing.function";

const razor = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || "",
  process.env.SUPABASE_SERVICE_ROLE_KEY || "",
);

// Zod schema for validation
const CreateRazorpayOrderSchema = z.object({
  amount: z.number().positive().optional(),
  applicationId: z.union([z.string(), z.number()]).optional(),
  items: CheckoutItemsSchema.optional(),
  enrollmentId: z.union([z.string(), z.number(), z.null()]).optional(),
  userId: z.union([z.string(), z.null()]).optional(),
  courseName: z.string().min(1, "Course name is required"),
  studentName: z.string().optional(),
  studentEmail: z.string().email().optional(),
  currency: z.enum(["INR", "USD"]).optional(),
});

export const createRazorpayOrder = createServerFn({ method: "POST" })
  .validator(CreateRazorpayOrderSchema)
  .handler(async ({ data }) => {
    const { amount, enrollmentId, userId, courseName, studentName, studentEmail, currency } = data;

    console.log("[Razorpay Order] Input received:", {
      amount,
      enrollmentId,
      userId,
      courseName,
      currency,
    });

    try {
      const { loadCheckoutQuote } = await import("@/lib/course-pricing.server");
      let items = data.items || [{ course: courseName, qty: 1 }];
      if (data.applicationId != null) {
        const { data: application, error } = await supabase
          .from("applications")
          .select("course_name, checkout_items")
          .eq("id", data.applicationId)
          .single();
        if (error || !application) throw new Error("Application not found");
        items = application.checkout_items
          ? CheckoutItemsSchema.parse(application.checkout_items)
          : [{ course: application.course_name, qty: 1 }];
      }
      const quote = await loadCheckoutQuote(items);
      if (currency && currency !== quote.currency) {
        throw new Error("Pricing region changed. Refresh checkout before paying.");
      }
      if (amount !== undefined && Math.round(amount * 100) !== Math.round(quote.total * 100)) {
        throw new Error("Course fee changed. Refresh checkout before paying.");
      }
      const numericAmount = quote.total;
      const orderCurrency = quote.currency;

      // Create Razorpay order
      const order = await razor.orders.create({
        amount: Math.round(numericAmount * 100), // Paise for INR; cents for USD.
        currency: orderCurrency,
        receipt: `pay_${Date.now()}`,
        notes: {
          enrollmentId: enrollmentId || null,
          userId: userId || null,
          courseName:
            quote.lines.length === 1
              ? quote.lines[0].courseName.slice(0, 256)
              : `${quote.lines.length} courses`,
        },
      });

      console.log("[Razorpay Order] Order created:", order.id);

      // Store order info in DB
      const { error: dbError } = await supabase.from("payments").insert({
        // enrollment_id will be set during payment verification (leave null for now)
        user_id: userId || null,
        course_name: quote.lines.map((line) => line.courseName).join(", "),
        student_name: studentName || null,
        student_email: studentEmail || "unknown@example.com",
        amount: numericAmount,
        currency: orderCurrency,
        course_items: quote.lines,
        payment_method: "razorpay",
        razorpay_order_id: order.id,
        status: "pending",
      });

      if (dbError) {
        console.error("[Razorpay Order] Database insertion error:", dbError);
        throw new Error(`Database error: ${dbError.message}`);
      }

      console.log("[Razorpay Order] Payment record created in database");

      return {
        ok: true,
        order: {
          id: order.id,
          amount: order.amount,
          currency: order.currency,
        },
      };
    } catch (err) {
      console.error("[Razorpay Order] Error:", err);
      throw err;
    }
  });
