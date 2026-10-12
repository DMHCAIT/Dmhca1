import { useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { CheckCircle2, LockKeyhole } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createEventRegistrationOrder,
  verifyEventRegistrationPayment,
} from "@/routes/api/event-registration";
import { eventDesignations, eventReferralSources } from "@/lib/event-registration-schema";
import type { EventRegistrationInput } from "@/lib/event-registration-schema";

type RazorpayCheckoutOptions = {
  key: string;
  order_id: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  prefill: { name: string; email: string; contact: string };
  theme: { color: string };
  handler: (response: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) => void;
  modal: { ondismiss: () => void };
};

type RazorpayCheckoutInstance = {
  open: () => void;
  close: () => void;
  on: (event: "payment.failed", callback: () => void) => void;
};

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayCheckoutOptions) => RazorpayCheckoutInstance;
  }
}

function loadRazorpayCheckout() {
  if (window.Razorpay) return Promise.resolve();

  return new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]',
    );
    const script = existingScript ?? document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () =>
      window.Razorpay ? resolve() : reject(new Error("Payment form failed to load."));
    script.onerror = () =>
      reject(new Error("Payment form failed to load. Check your connection and try again."));
    if (!existingScript) document.body.appendChild(script);
  });
}

export function EventRegistrationDialog() {
  const checkoutRef = useRef<RazorpayCheckoutInstance | null>(null);
  const [open, setOpen] = useState(false);
  const [designation, setDesignation] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [consent, setConsent] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    setError("");
    if (!designation) {
      setError("Please select your designation.");
      return;
    }
    if (!consent) {
      setError("Please confirm consent to continue.");
      return;
    }
    const selectedDesignation = eventDesignations.find((option) => option === designation);
    const selectedReferralSource = eventReferralSources.find((option) => option === referralSource);
    if (!selectedDesignation) {
      setError("Please select a valid designation.");
      return;
    }

    const formData = new FormData(formEvent.currentTarget);
    const registration: EventRegistrationInput = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      designation: selectedDesignation,
      specialty: String(formData.get("specialty") || ""),
      institution: String(formData.get("institution") || ""),
      city: String(formData.get("city") || ""),
      ...(selectedReferralSource ? { referralSource: selectedReferralSource } : {}),
      consent: true,
    };

    setIsBusy(true);
    try {
      const order = await createEventRegistrationOrder({ data: registration });
      await loadRazorpayCheckout();
      if (!window.Razorpay) throw new Error("Payment form failed to load. Please try again.");

      const checkout = new window.Razorpay({
        key: order.keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: order.currency,
        name: "DMHCA",
        description: order.eventTitle,
        prefill: {
          name: registration.fullName,
          email: registration.email,
          contact: registration.phone,
        },
        theme: { color: "#800020" },
        handler: async (response) => {
          checkoutRef.current = null;
          try {
            await verifyEventRegistrationPayment({
              data: {
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              },
            });
            setPaymentComplete(true);
          } catch (verificationError) {
            setError(
              verificationError instanceof Error
                ? verificationError.message
                : "Payment confirmation failed. Please contact support.",
            );
          } finally {
            setIsBusy(false);
          }
        },
        modal: {
          ondismiss: () => {
            checkoutRef.current = null;
            setIsBusy(false);
            setError(
              (currentError) =>
                currentError ||
                "Payment was cancelled. Your registration details are saved; submit again to retry.",
            );
          },
        },
      });

      checkoutRef.current = checkout;
      checkout.on("payment.failed", () => {
        setError("Payment could not be completed. Please try again.");
      });
      checkout.open();
    } catch (orderError) {
      setError(
        orderError instanceof Error
          ? orderError.message
          : "We couldn't start your payment. Please try again.",
      );
      setIsBusy(false);
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen && isBusy && !paymentComplete) {
      if (!checkoutRef.current) return;
      checkoutRef.current.close();
      checkoutRef.current = null;
      setIsBusy(false);
    }
    setOpen(nextOpen);
    if (!nextOpen) {
      setError("");
      setPaymentComplete(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="mt-5 h-auto w-full whitespace-normal rounded-xl bg-[#800020] px-4 py-3 text-white shadow-none hover:bg-[#68001e] focus-visible:ring-[#800020]">
          Register and Pay Online
        </Button>
      </DialogTrigger>
      <DialogContent className="flex h-fit max-h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-2xl flex-col gap-0 overflow-hidden rounded-2xl border-0 bg-white p-0 shadow-2xl">
        {paymentComplete ? (
          <div className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center sm:px-10">
            <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" aria-hidden="true" />
            <DialogHeader className="mt-5">
              <DialogTitle className="font-display text-2xl text-[#29334a]">
                Registration confirmed
              </DialogTitle>
              <DialogDescription className="mt-3 text-base leading-7">
                Your payment of ₹599 was successful. Your seat for the CME is confirmed.
              </DialogDescription>
            </DialogHeader>
            <Button
              className="mt-6 bg-[#800020] text-white hover:bg-[#68001e]"
              onClick={() => handleOpenChange(false)}
            >
              Done
            </Button>
          </div>
        ) : (
          <>
            <div className="shrink-0 border-b border-[#29334a]/15 bg-[#f7cbd7]/40 px-5 py-5 pr-12 sm:px-8 sm:pr-14">
              <DialogHeader>
                <DialogTitle className="font-display text-xl leading-tight text-[#29334a] sm:text-2xl">
                  Register for the CME
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm leading-5 sm:text-base sm:leading-6">
                  Complete your details to confirm your seat. Registration fee:{" "}
                  <strong className="text-[#800020]">₹599</strong>.
                </DialogDescription>
              </DialogHeader>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex min-h-0 flex-1 flex-col overflow-hidden"
              aria-busy={isBusy}
            >
              <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="Full name" htmlFor="event-full-name">
                    <Input id="event-full-name" name="fullName" autoComplete="name" required />
                  </FormField>
                  <FormField label="Email address" htmlFor="event-email">
                    <Input
                      id="event-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                    />
                  </FormField>
                  <FormField label="Mobile / WhatsApp number" htmlFor="event-phone">
                    <Input
                      id="event-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      minLength={10}
                      maxLength={20}
                      required
                    />
                  </FormField>
                  <FormField label="Designation" htmlFor="event-designation">
                    <Select value={designation} onValueChange={setDesignation}>
                      <SelectTrigger id="event-designation" aria-label="Designation">
                        <SelectValue placeholder="Select designation" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventDesignations.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                  <FormField label="Specialty" htmlFor="event-specialty">
                    <Input id="event-specialty" name="specialty" required />
                  </FormField>
                  <FormField label="Hospital / institution" htmlFor="event-institution">
                    <Input id="event-institution" name="institution" required />
                  </FormField>
                  <FormField label="City" htmlFor="event-city">
                    <Input id="event-city" name="city" autoComplete="address-level2" required />
                  </FormField>
                  <FormField label="How did you hear about us? (optional)" htmlFor="event-referral">
                    <Select value={referralSource} onValueChange={setReferralSource}>
                      <SelectTrigger id="event-referral" aria-label="How did you hear about us?">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventReferralSources.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormField>
                </div>

                <label className="mt-5 flex cursor-pointer items-start gap-3 text-sm leading-6 text-[#6b5b68]">
                  <Checkbox
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked === true)}
                    aria-label="Consent to be contacted about this event"
                    className="mt-1"
                  />
                  <span>
                    I agree to be contacted by DMHCA about this event and confirm that the
                    information provided is accurate.
                  </span>
                </label>

                {error && (
                  <p
                    className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700"
                    role="alert"
                  >
                    {error}
                  </p>
                )}
              </div>

              <div className="shrink-0 border-t border-[#29334a]/15 bg-white px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
                <Button
                  type="submit"
                  disabled={isBusy}
                  className="h-auto w-full whitespace-normal rounded-xl bg-[#800020] px-4 py-3 text-center text-sm leading-5 text-white hover:bg-[#68001e] sm:text-base"
                >
                  {isBusy ? "Preparing secure payment…" : "Submit and continue to payment"}
                </Button>
                <span className="mt-3 flex items-center justify-center gap-2 text-xs leading-5 text-[#6b5b68]">
                  <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                  Secure checkout by Razorpay
                </span>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function FormField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="block text-sm font-medium text-[#29334a]">
        {label}
      </label>
      {children}
    </div>
  );
}
