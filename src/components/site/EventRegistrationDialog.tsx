import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { LockKeyhole } from "lucide-react";
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
import { createEventRegistration } from "@/routes/api/event-registration";
import {
  eventDesignations,
  eventReferralSources,
  eventRegistrationSchema,
} from "@/lib/event-registration-schema";
import type { EventRegistrationInput } from "@/lib/event-registration-schema";

export function EventRegistrationDialog() {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [designation, setDesignation] = useState("");
  const [referralSource, setReferralSource] = useState("");
  const [consent, setConsent] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [draft, setDraft] = useState<Partial<EventRegistrationInput>>({});
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

    const validation = eventRegistrationSchema.safeParse(registration);
    if (!validation.success) {
      const issue = validation.error.issues[0];
      setError(`Please check ${issue.path.join(" ")}: ${issue.message}`);
      return;
    }
    setDraft(validation.data);
    setIsBusy(true);
    try {
      await createEventRegistration({ data: validation.data });
      window.location.assign("https://pages.razorpay.com/pl_To6HTzEkAxU5wD/view");
    } catch (registrationError) {
      setError(
        registrationError instanceof Error
          ? registrationError.message
          : "We couldn't save your registration. Please try again.",
      );
      setIsBusy(false);
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen && isBusy) return;
    setOpen(nextOpen);
    if (!nextOpen) {
      setError("");
      setViewport(null);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="mt-5 h-auto w-full whitespace-normal rounded-xl bg-[#800020] px-4 py-3 text-white shadow-none hover:bg-[#68001e] focus-visible:ring-[#800020]">
          Register and Pay Online
        </Button>
      </DialogTrigger>
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
      >
        <div className="shrink-0 border-b border-[#29334a]/15 bg-[#f7cbd7]/40 px-5 py-5 pr-12 sm:px-8 sm:pr-14">
          <DialogHeader className="text-left">
            <DialogTitle className="font-display text-xl leading-tight text-[#29334a] sm:text-2xl">
              Register for the CME
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm leading-5 sm:text-base sm:leading-6">
              Complete your details to confirm your seat. Registration fee:{" "}
              <strong className="text-[#800020]">₹599</strong>.
            </DialogDescription>
          </DialogHeader>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col" aria-busy={isBusy}>
          <fieldset disabled={isBusy} className="min-w-0 px-5 py-5 sm:px-8">
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
              <FormField label="How did you hear about us? (optional)" htmlFor="event-referral">
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
                I agree to be contacted by DMHCA about this event and confirm that the information
                provided is accurate.
              </span>
            </label>

            {error && (
              <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
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
              {isBusy ? "Preparing secure payment…" : "Submit and continue to payment"}
            </Button>
            <span className="mt-3 flex items-center justify-center gap-2 text-xs leading-5 text-[#6b5b68]">
              <LockKeyhole className="h-4 w-4" aria-hidden="true" />
              UPI or card payment via Razorpay
            </span>
          </div>
        </form>
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
