import React, { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { supabaseClient } from "@/lib/supabase";
import { createRazorpayOrder } from "@/routes/api/razorpay-create-order";
import { verifyRazorpayPayment } from "@/routes/api/razorpay-verify";
import { useQuery } from "@tanstack/react-query";
import { getCheckoutQuote } from "@/lib/course-pricing.function";
import { usePricingCurrency } from "@/contexts/PricingContext";
import { formatCourseMoney } from "@/lib/course-pricing";

export const Route = createFileRoute("/payment")({
  component: PaymentPage,
});

function PaymentPage() {
  const [application, setApplication] = useState<{
    id: string;
    user_id?: string;
    checkout_items?: { course: string; qty: number }[] | null;
    course_name: string;
    full_name: string;
    email: string;
    phone: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const currency = usePricingCurrency();
  const {
    data: quote,
    error: priceError,
    isFetching: priceLoading,
  } = useQuery({
    queryKey: ["payment-pricing", application?.id, currency],
    queryFn: () => {
      if (!application) throw new Error("Application not found");
      return getCheckoutQuote({
        data: {
          items: application.checkout_items || [{ course: application.course_name, qty: 1 }],
        },
      });
    },
    enabled: !!application && !!currency,
    retry: false,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const appId = params.get("applicationId");
    if (appId) {
      (async () => {
        try {
          const { data, error } = await supabaseClient
            .from("applications")
            .select("*")
            .eq("id", appId)
            .single();
          if (error) {
            console.error("Failed to fetch application", error);
            setError("Failed to load application data");
            return;
          }
          // attach auth user id if application record doesn't have it
          const app = data;
          try {
            if (app && !app.user_id) {
              const { data: authData } = await supabaseClient.auth.getUser();
              if (authData?.user?.id) {
                app.user_id = authData.user.id;
              }
            }
          } catch (e) {
            // ignore
          }
          setApplication(app);
        } catch (e) {
          console.error("Failed to fetch application", e);
          setError("Failed to load application data");
        }
      })();
    } else {
      setError("Application not found. Please apply for a course before paying.");
    }
  }, []);

  // startRazorpay: creates order and opens Razorpay checkout
  const startRazorpay = async (preferredMethod?: "upi" | "card") => {
    setLoading(true);
    setError("");
    try {
      // Resolve userId - optional for guest checkout
      let userId: string | null = null;
      try {
        const ls = typeof window !== "undefined" ? localStorage.getItem("userId") : null;
        if (ls) userId = ls;
        else if (application?.user_id) userId = String(application.user_id);
        else {
          const { data: authData } = await supabaseClient.auth.getUser();
          if (authData?.user?.id) userId = authData.user.id;
        }
      } catch (e) {
        // userId remains null for guest checkout
      }

      if (!application) throw new Error("Application not found");
      if (!quote || priceLoading) throw new Error("Prices unavailable. Please refresh checkout.");

      const courseName = application.course_name || "Course";
      const studentName = application.full_name || "";
      const studentEmail = application.email || "";

      const numericAmount = Number(total || 0);

      console.log("[Payment] Creating Razorpay order with:", {
        amount: numericAmount,
        applicationId: application.id,
        enrollmentId: application.id,
        courseName,
        studentName,
        studentEmail,
      });

      const orderData = await createRazorpayOrder({
        data: {
          amount: numericAmount,
          applicationId: application.id,
          enrollmentId: application.id || null,
          userId: userId || null,
          courseName,
          studentName: studentName || undefined,
          studentEmail: studentEmail || undefined,
          currency: quote.currency,
        },
      });

      console.log("[Payment] Order response:", orderData);

      if (!orderData?.order?.id) throw new Error("Invalid order data from server");

      await new Promise<void>((resolve, reject) => {
        if ((window as any).Razorpay) return resolve();
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load Razorpay script"));
        document.head.appendChild(script);
      });

      const options: any = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        order_id: orderData.order.id,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        ...(preferredMethod && { method: preferredMethod }),
        handler: async (response: any) => {
          try {
            await verifyRazorpayPayment({
              data: {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                enrollmentId: application.id || null,
                studentEmail: application.email,
                courseName: application.course_name,
                studentName: application.full_name,
                amount: numericAmount,
              },
            });
            setSuccess(true);
          } catch (err) {
            setError("Verification failed");
          }
        },
        prefill: {
          name: application.full_name,
          email: application.email,
          contact: application.phone,
        },
      };

      const razor = new (window as any).Razorpay(options);
      razor.open();
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Payment failed";
      console.error("[Payment] Error:", errorMsg, err);
      setError(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  const money = (n: number) => (currency ? formatCourseMoney(n, currency) : "Unavailable");
  const subtotal = quote?.subtotal || 0;
  const gst = quote?.gst || 0;
  const razorpayFee = quote?.razorpayFee || 0;
  const total = quote?.total || 0;

  const handleRazorpayUPI = () => startRazorpay();

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="container-x">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 p-8">
              <h2 className="text-3xl font-extrabold mb-3">Complete Your Payment</h2>
              <p className="text-sm text-slate-600 mb-6">
                Secure payment powered by Razorpay. You will receive a confirmation email after
                successful payment.
              </p>

              {application ? (
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded">
                    <div className="text-sm text-slate-500">Student</div>
                    <div className="font-semibold text-slate-900">{application.full_name}</div>
                    <div className="text-sm text-slate-600">
                      {application.email} • {application.phone}
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded border">
                    <div className="text-sm text-slate-500">Course</div>
                    <div className="font-semibold text-slate-900">{application.course_name}</div>
                  </div>

                  <div className="p-4 bg-white rounded border">
                    <div className="text-sm text-slate-500 mb-2">Amount Details</div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-slate-600">
                      <div>Course Fee</div>
                      <div className="text-right">{quote ? money(subtotal) : "Unavailable"}</div>
                      {currency === "INR" && (
                        <>
                          <div>GST (18%)</div>
                          <div className="text-right">{quote ? money(gst) : "Unavailable"}</div>
                        </>
                      )}
                      {currency === "INR" && (
                        <>
                          <div>Razorpay Fee (4%)</div>
                          <div className="text-right">
                            {quote ? money(razorpayFee) : "Unavailable"}
                          </div>
                        </>
                      )}
                      {currency !== "USD" && (
                        <div className="col-span-2 border-t mt-2 pt-2 flex justify-between font-bold">
                          Total <div>{quote ? money(total) : "Unavailable"}</div>
                        </div>
                      )}
                      {(error || priceError || !currency) && (
                        <p role="alert" className="text-red-700">
                          {error ||
                            priceError?.message ||
                            "Unable to determine pricing country. Please contact support."}
                        </p>
                      )}
                    </div>
                  </div>

                  {success && (
                    <div className="mt-2 text-emerald-700">
                      Payment successful — confirmation will be emailed.
                    </div>
                  )}
                </div>
              ) : (
                <div role={error ? "alert" : "status"}>{error || "Loading application..."}</div>
              )}
            </div>

            <aside className="p-6 bg-gradient-to-b from-white to-slate-50 border-l">
              <div className="sticky top-6">
                <h3 className="text-lg font-semibold mb-4">Pay Now</h3>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={handleRazorpayUPI}
                    onKeyDown={(e) => e.key === "Enter" && handleRazorpayUPI()}
                    tabIndex={0}
                    aria-label="Pay with UPI/Card"
                    data-test="pay-upi-card"
                    disabled={loading || !quote || priceLoading || success}
                    className="w-full px-4 py-3 bg-[#001f3f] text-white rounded-md font-semibold z-50"
                  >
                    {currency === "USD" ? "Pay in USD" : "Pay with UPI/Card"}
                  </button>
                  {currency === "INR" && (
                    <button
                      type="button"
                      disabled={loading || !quote || priceLoading || success}
                      onClick={() => {
                        const loanUrl =
                          import.meta.env.VITE_LOAN_PARTNER_URL ||
                          process.env.VITE_LOAN_PARTNER_URL;
                        const q = new URLSearchParams({
                          applicationId: String(application?.id || ""),
                          amount: String(total),
                          name: application?.full_name || "",
                          email: application?.email || "",
                        }).toString();
                        if (loanUrl && typeof window !== "undefined") {
                          window.location.href = `${loanUrl}?${q}`;
                        } else {
                          setError("Loan partner URL not configured");
                        }
                      }}
                      className="w-full px-4 py-3 border border-slate-200 rounded-md text-slate-700"
                    >
                      Pay by Loan
                    </button>
                  )}
                </div>
                <div className="mt-4 text-xs text-slate-500">
                  By proceeding you agree to our terms and privacy policy.
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
