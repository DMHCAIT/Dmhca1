import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { CheckCircle2, Loader2, LockKeyhole } from "lucide-react";
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
  reportEventPaymentOutcome,
  verifyEventRegistrationPayment,
} from "@/routes/api/event-registration";
import {
  eventDesignations,
  eventPricing,
  eventReferralSources,
  eventRegistrationSchema,
} from "@/lib/event-registration-schema";
import type { EventPaymentRegion, EventRegistrationInput } from "@/lib/event-registration-schema";

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

let checkoutScriptPromise: Promise<void> | null = null;

function loadRazorpayCheckout() {
  if (window.Razorpay) return Promise.resolve();
  if (checkoutScriptPromise) return checkoutScriptPromise;

  checkoutScriptPromise = new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]',
    );
    const script = existingScript ?? document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    const timeout = window.setTimeout(() => fail(), 15000);
    function cleanup() {
      window.clearTimeout(timeout);
      script.removeEventListener("load", loaded);
      script.removeEventListener("error", fail);
    }
    function loaded() {
      if (!window.Razorpay) {
        fail();
        return;
      }
      cleanup();
      resolve();
    }
    function fail() {
      cleanup();
      script.remove();
      reject(new Error("Payment form failed to load. Check your connection and try again."));
    }
    script.addEventListener("load", loaded);
    script.addEventListener("error", fail);
    if (!existingScript) document.body.appendChild(script);
  }).catch((scriptError) => {
    checkoutScriptPromise = null;
    throw scriptError;
  });
  return checkoutScriptPromise;
}

export function EventRegistrationDialog() {
  const checkoutRef = useRef<RazorpayCheckoutInstance | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const checkoutFinishedRef = useRef(false);
  const [open, setOpen] = useState(false);
  const [designation, setDesignation] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [consent, setConsent] = useState(false);
  const [paymentRegion, setPaymentRegion] = useState<EventPaymentRegion | "">("");
  const [isBusy, setIsBusy] = useState(false);
  const [paymentState, setPaymentState] = useState<
    "idle" | "checkout" | "verifying" | "verification_failed" | "complete"
  >("idle");
  const [draft, setDraft] = useState<Partial<EventRegistrationInput>>({});
  const [paymentReference, setPaymentReference] = useState("");
  const [viewport, setViewport] = useState<{ height: number; top: number } | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open || !window.visualViewport) return;
    const visualViewport = window.visualViewport;
    const updateViewport = () =>
      setViewport({ height: visualViewport.height, top: visualViewport.offsetTop });
    updateViewport();
    visualViewport.addEventListener("resize", updateViewport);
    visualViewport.addEventListener("scroll", updateViewport);
    return () => {
      visualViewport.removeEventListener("resize", updateViewport);
      visualViewport.removeEventListener("scroll", updateViewport);
    };
  }, [open]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const activeElement = document.activeElement;
      if (
        activeElement instanceof HTMLElement &&
        activeElement !== dialogRef.current &&
        dialogRef.current?.contains(activeElement)
      ) {
        activeElement.scrollIntoView({ block: "nearest" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [viewport?.height]);

  useEffect(() => {
    if (paymentState !== "checkout") return;
    // Release the registration dialog's focus and pointer locks before opening the payment iframe.
    const frame = requestAnimationFrame(() => {
      try {
        checkoutRef.current?.open();
      } catch (checkoutError) {
        checkoutRef.current = null;
        setPaymentState("idle");
        setIsBusy(false);
        setError(
          checkoutError instanceof Error
            ? checkoutError.message
            : "Payment form failed to open. Please try again.",
        );
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [paymentState]);

  async function handleSubmit(formEvent: FormEvent<HTMLFormElement>) {
    formEvent.preventDefault();
    setError("");
    if (!paymentRegion) {
      setError("Please choose Indian payment or International payment.");
      return;
    }
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
      paymentRegion,
    };

    const validation = eventRegistrationSchema.safeParse(registration);
    if (!validation.success) {
      const issue = validation.error.issues[0];
      setError(`Please check ${issue.path.join(" ")}: ${issue.message}`);
      return;
    }
    setDraft(validation.data);
    setIsBusy(true);
    try {
      await loadRazorpayCheckout();
      const order = await createEventRegistrationOrder({ data: validation.data });
      if (!window.Razorpay) throw new Error("Payment form failed to load. Please try again.");

      checkoutFinishedRef.current = false;
      const checkout = new window.Razorpay({
        key: order.keyId,
        order_id: order.orderId,
        amount: order.amount,
        currency: order.currency,
        name: "DMHCA",
        description: order.eventTitle,
        prefill: {
          name: validation.data.fullName,
          email: validation.data.email,
          contact: validation.data.phone,
        },
        theme: { color: "#800020" },
        handler: async (response) => {
          if (checkoutFinishedRef.current) return;
          checkoutFinishedRef.current = true;
          checkoutRef.current = null;
          setPaymentReference(response.razorpay_payment_id);
          setError("");
          setPaymentState("verifying");
          try {
            await verifyEventRegistrationPayment({
              data: {
                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              },
            });
            setPaymentState("complete");
          } catch (verificationError) {
            setPaymentState("verification_failed");
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
            if (checkoutFinishedRef.current) return;
            checkoutRef.current = null;
            void reportEventPaymentOutcome({
              data: { orderId: order.orderId, outcome: "cancelled" },
            }).catch((reportError) =>
              console.error("Could not record cancelled event payment.", reportError),
            );
            setPaymentState("idle");
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
        void reportEventPaymentOutcome({
          data: { orderId: order.orderId, outcome: "failed" },
        }).catch((reportError) =>
          console.error("Could not record failed event payment.", reportError),
        );
        setError("Payment could not be completed. Please try again.");
      });
      setPaymentState("checkout");
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
    if (!nextOpen && isBusy) return;
    setOpen(nextOpen);
    if (!nextOpen) {
      setError("");
      setPaymentState("idle");
      setViewport(null);
      setPaymentReference("");
      if (paymentState === "complete" || paymentState === "verification_failed") {
        setDraft({});
        setDesignation("");
        setReferralSource("");
        setConsent(false);
        setPaymentRegion("");
      }
    }
  }

  return (
    <Dialog open={open && paymentState !== "checkout"} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="mt-5 h-auto w-full whitespace-normal rounded-xl bg-[#800020] px-4 py-3 text-white shadow-none hover:bg-[#68001e] focus-visible:ring-[#800020]">
          Register and Pay Online
        </Button>
      </DialogTrigger>
      {paymentState !== "checkout" && (
        <DialogContent
          ref={dialogRef}
          className="block max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border-0 bg-white p-0 shadow-2xl transition-none"
          style={
            viewport
              ? {
                  top: viewport.top + viewport.height / 2,
                  maxHeight: Math.max(0, viewport.height - 24),
                }
              : undefined
          }
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            dialogRef.current?.focus({ preventScroll: true });
          }}
          onCloseAutoFocus={(event) => {
            if (checkoutRef.current) event.preventDefault();
          }}
        >
          {paymentState === "complete" ? (
            <div className="flex flex-1 flex-col items-center justify-center px-5 py-10 text-center sm:px-10">
              <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" aria-hidden="true" />
              <DialogHeader className="mt-5 text-center">
                <DialogTitle className="font-display text-xl leading-snug text-[#29334a] sm:text-2xl">
                  Thank you for registering for the event.
                </DialogTitle>
                <DialogDescription className="mt-3 text-base leading-7">
                  The team will provide the link before the event starts.
                </DialogDescription>
              </DialogHeader>
              <p className="mt-4 text-sm leading-6 text-[#6b5b68]">
                Your payment of {eventPricing[draft.paymentRegion ?? "indian"].display} was
                successful. Your registration is confirmed.
              </p>
              <Button
                className="mt-6 bg-[#800020] text-white hover:bg-[#68001e]"
                onClick={() => handleOpenChange(false)}
              >
                Done
              </Button>
            </div>
          ) : paymentState === "verifying" || paymentState === "verification_failed" ? (
            <div className="px-5 py-10 text-center sm:px-10">
              {paymentState === "verifying" && (
                <Loader2
                  className="mx-auto h-10 w-10 animate-spin text-[#800020]"
                  aria-hidden="true"
                />
              )}
              <DialogHeader className="mt-4">
                <DialogTitle className="text-xl text-[#29334a]">
                  {paymentState === "verifying"
                    ? "Confirming your payment"
                    : "Payment confirmation needs attention"}
                </DialogTitle>
                <DialogDescription className="mt-3 leading-7">
                  {paymentState === "verifying"
                    ? "Please wait while we securely verify your payment."
                    : "Do not pay again if you were charged. Contact support with your Razorpay payment reference."}
                </DialogDescription>
              </DialogHeader>
              {error && (
                <p role="alert" className="mt-4 text-sm text-red-700">
                  {error}
                </p>
              )}
              {paymentReference && (
                <p className="mt-4 break-all text-sm text-[#29334a]">
                  Payment reference: <strong>{paymentReference}</strong>
                </p>
              )}
              {paymentState === "verification_failed" && (
                <Button asChild className="mt-6 bg-[#800020] text-white hover:bg-[#68001e]">
                  <a href="/contact">Contact support</a>
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="shrink-0 border-b border-[#29334a]/15 bg-[#f7cbd7]/40 px-5 py-5 pr-12 sm:px-8 sm:pr-14">
                <DialogHeader className="text-left">
                  <DialogTitle className="font-display text-xl leading-tight text-[#29334a] sm:text-2xl">
                    Register for the CME
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-sm leading-5 sm:text-base sm:leading-6">
                    Complete your details to confirm your seat. Registration fee:{" "}
                    <strong className="text-[#800020]">
                      {paymentRegion
                        ? eventPricing[paymentRegion].display
                        : `${eventPricing.indian.display} (India) / ${eventPricing.international.display} (International)`}
                    </strong>
                    .
                  </DialogDescription>
                </DialogHeader>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col" aria-busy={isBusy}>
                <fieldset disabled={isBusy} className="min-w-0 px-5 py-5 sm:px-8">
                  <div role="radiogroup" aria-label="Payment type" className="mb-5">
                    <p className="mb-2 text-sm font-medium text-[#29334a]">
                      Choose your payment type
                    </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {(Object.keys(eventPricing) as EventPaymentRegion[]).map((region) => {
                        const option = eventPricing[region];
                        const selected = paymentRegion === region;
                        return (
                          <button
                            key={region}
                            type="button"
                            role="radio"
                            aria-checked={selected}
                            onClick={() => {
                              setPaymentRegion(region);
                              setError("");
                            }}
                            className={`rounded-xl border-2 px-4 py-3 text-left transition ${
                              selected
                                ? "border-[#800020] bg-[#f7cbd7]/40"
                                : "border-[#29334a]/15 bg-white hover:border-[#800020]/50"
                            }`}
                          >
                            <span className="block text-sm font-medium text-[#29334a]">
                              {option.label}
                            </span>
                            <span className="mt-1 block text-xl font-semibold text-[#800020]">
                              {option.display}
                              <span className="ml-1 text-xs font-normal text-[#6b5b68]">
                                {option.currency}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField label="Full name" htmlFor="event-full-name">
                      <Input
                        id="event-full-name"
                        name="fullName"
                        autoComplete="name"
                        defaultValue={draft.fullName}
                        minLength={2}
                        maxLength={150}
                        required
                      />
                    </FormField>
                    <FormField label="Email address" htmlFor="event-email">
                      <Input
                        id="event-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        defaultValue={draft.email}
                        maxLength={255}
                        required
                      />
                    </FormField>
                    <FormField label="Mobile / WhatsApp number" htmlFor="event-phone">
                      <Input
                        id="event-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        defaultValue={draft.phone}
                        minLength={10}
                        maxLength={20}
                        required
                      />
                    </FormField>
                    <FormField label="Designation" htmlFor="event-designation">
                      <Select value={designation} onValueChange={setDesignation}>
                        <SelectTrigger
                          id="event-designation"
                          aria-label="Designation"
                          className="text-base md:text-sm"
                        >
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
                      <Input
                        id="event-specialty"
                        name="specialty"
                        defaultValue={draft.specialty}
                        minLength={2}
                        maxLength={150}
                        required
                      />
                    </FormField>
                    <FormField label="Hospital / institution" htmlFor="event-institution">
                      <Input
                        id="event-institution"
                        name="institution"
                        defaultValue={draft.institution}
                        minLength={2}
                        maxLength={200}
                        required
                      />
                    </FormField>
                    <FormField label="City" htmlFor="event-city">
                      <Input
                        id="event-city"
                        name="city"
                        autoComplete="address-level2"
                        defaultValue={draft.city}
                        minLength={2}
                        maxLength={120}
                        required
                      />
                    </FormField>
                    <FormField
                      label="How did you hear about us? (optional)"
                      htmlFor="event-referral"
                    >
                      <Select value={referralSource} onValueChange={setReferralSource}>
                        <SelectTrigger
                          id="event-referral"
                          aria-label="How did you hear about us?"
                          className="text-base md:text-sm"
                        >
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
                </fieldset>

                <div className="shrink-0 border-t border-[#29334a]/15 bg-white px-5 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] sm:px-8">
                  <Button
                    type="submit"
                    disabled={isBusy}
                    className="h-auto w-full whitespace-normal rounded-xl bg-[#800020] px-4 py-3 text-center text-sm leading-5 text-white hover:bg-[#68001e] sm:text-base"
                  >
                    {isBusy
                      ? "Preparing secure payment…"
                      : paymentRegion
                        ? `Submit and pay ${eventPricing[paymentRegion].display}`
                        : "Submit and continue to payment"}
                  </Button>
                  <span className="mt-3 flex items-center justify-center gap-2 text-xs leading-5 text-[#6b5b68]">
                    <LockKeyhole className="h-4 w-4" aria-hidden="true" />
                    Secure payment via Razorpay
                  </span>
                </div>
              </form>
            </>
          )}
        </DialogContent>
      )}
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
