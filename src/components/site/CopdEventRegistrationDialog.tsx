import { useEffect, useRef, useState } from "react";
import type { FormEvent, ReactNode } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
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
import { registerForCopdWebinar } from "@/routes/api/copd-event-registration";

const designations = [
  "Dietitian / Nutritionist",
  "Doctor",
  "Nurse",
  "Student",
  "Other",
];

const referralSources = [
  "WhatsApp",
  "Email",
  "Social media",
  "Colleague",
  "Other",
];

export function CopdEventRegistrationDialog() {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [designation, setDesignation] = useState("");
  const [source, setSource] = useState("");
  const [consent, setConsent] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [registrationState, setRegistrationState] = useState<
    "idle" | "submitting" | "complete" | "error"
  >("idle");
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

    const formData = new FormData(formEvent.currentTarget);
    const registration = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      designation: designation as typeof designations[number],
      city: String(formData.get("city") || ""),
      institution: String(formData.get("institution") || ""),
      source: source ? (source as typeof referralSources[number]) : undefined,
      consent: true,
    };

    setIsBusy(true);
    setRegistrationState("submitting");

    try {
      const result = await registerForCopdWebinar({
        data: registration,
      });

      if (result?.success) {
        setRegistrationState("complete");
      } else {
        throw new Error("Registration failed. Please try again.");
      }
    } catch (submitError) {
      console.error("COPD registration error:", submitError);
      setError(
        submitError instanceof Error
          ? submitError.message
          : "We couldn't process your registration. Please try again.",
      );
      setRegistrationState("error");
      setIsBusy(false);
    }
  }

  function handleOpenChange(nextOpen: boolean) {
    if (!nextOpen && isBusy) return;
    setOpen(nextOpen);
    if (!nextOpen) {
      setError("");
      setRegistrationState("idle");
      if (registrationState === "complete" || registrationState === "error") {
        setDesignation("");
        setSource("");
        setConsent(false);
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="mt-5 h-auto w-full whitespace-normal rounded-xl bg-[#800020] px-4 py-3 text-white shadow-none hover:bg-[#68001e] focus-visible:ring-[#800020]">
          Register for free
        </Button>
      </DialogTrigger>
      <DialogContent
        ref={dialogRef}
        className="block max-h-[calc(100dvh-1.5rem)] w-[calc(100vw-1.5rem)] max-w-2xl overflow-y-auto overscroll-contain rounded-2xl border-0 bg-white p-0 shadow-2xl transition-none"
        onOpenAutoFocus={(event) => {
          event.preventDefault();
          dialogRef.current?.focus({ preventScroll: true });
        }}
        onEscapeKeyDown={() => {
          if (registrationState !== "submitting") {
            handleOpenChange(false);
          }
        }}
      >
        {registrationState === "complete" ? (
          <div className="flex flex-1 flex-col items-center justify-center px-5 py-12 text-center sm:px-10 sm:py-14">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" aria-hidden="true" />
            <DialogHeader className="mt-6 text-center">
              <DialogTitle className="font-display text-2xl font-bold leading-snug text-[#29334a] sm:text-3xl">
                You are registered
              </DialogTitle>
              <DialogDescription className="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
                Thank you. Joining details will be sent to the email and mobile number you
                entered.
              </DialogDescription>
            </DialogHeader>
            <Button
              className="mt-8 min-w-[120px] bg-[#800020] px-8 py-2.5 text-base font-medium text-white hover:bg-[#68001e] shadow-md hover:shadow-lg transition-all duration-200"
              onClick={() => handleOpenChange(false)}
            >
              Done
            </Button>
          </div>
        ) : (
          <>
            <div className="shrink-0 border-b border-[#29334a]/15 bg-[#f7cbd7]/40 px-5 py-5 pr-12 sm:px-8 sm:pr-14">
              <DialogHeader className="text-left">
                <DialogTitle className="font-display text-xl leading-tight text-[#29334a] sm:text-2xl">
                  Register for the webinar
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm leading-5 sm:text-base sm:leading-6">
                  Registration is free. Fill in your details to reserve your place.
                </DialogDescription>
              </DialogHeader>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col" aria-busy={isBusy}>
              <fieldset disabled={isBusy} className="min-w-0 space-y-5 px-5 py-5 sm:px-8">
                <div>
                  <label
                    htmlFor="f-fullname"
                    className="block text-sm font-medium text-[#29334a]"
                  >
                    Full name (as it should appear on the certificate)
                  </label>
                  <Input
                    id="f-fullname"
                    name="fullName"
                    required
                    autoComplete="name"
                    placeholder="Enter your full name"
                    className="mt-2"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="f-email" className="block text-sm font-medium text-[#29334a]">
                      Email
                    </label>
                    <Input
                      id="f-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="your@email.com"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="f-phone" className="block text-sm font-medium text-[#29334a]">
                      Mobile / WhatsApp number
                    </label>
                    <Input
                      id="f-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="f-designation"
                      className="block text-sm font-medium text-[#29334a]"
                    >
                      Designation
                    </label>
                    <Select value={designation} onValueChange={setDesignation}>
                      <SelectTrigger id="f-designation" className="mt-2">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        {designations.map((d) => (
                          <SelectItem key={d} value={d}>
                            {d}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="f-city" className="block text-sm font-medium text-[#29334a]">
                      City
                    </label>
                    <Input
                      id="f-city"
                      name="city"
                      required
                      autoComplete="address-level2"
                      placeholder="Your city"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="f-institution"
                    className="block text-sm font-medium text-[#29334a]"
                  >
                    Hospital / Institution
                  </label>
                  <Input
                    id="f-institution"
                    name="institution"
                    required
                    autoComplete="organization"
                    placeholder="Your hospital or institution"
                    className="mt-2"
                  />
                </div>

                <div>
                  <label
                    htmlFor="f-source"
                    className="block text-sm font-medium text-[#29334a]"
                  >
                    How did you hear about this webinar? (optional)
                  </label>
                  <Select value={source} onValueChange={setSource}>
                    <SelectTrigger id="f-source" className="mt-2">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {referralSources.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-3">
                  <Checkbox
                    id="f-consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked === true)}
                  />
                  <label htmlFor="f-consent" className="text-sm leading-6 text-[#29334a]">
                    I agree to be contacted about this webinar and to share these details with
                    the organizers.
                  </label>
                </div>

                {error && (
                  <div
                    role="alert"
                    className="rounded-lg bg-red-50 p-3 text-sm text-red-700 border border-red-200"
                  >
                    {error}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isBusy}
                  className="w-full bg-[#800020] text-white hover:bg-[#68001e]"
                >
                  {isBusy ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                      Registering...
                    </>
                  ) : (
                    "Register free"
                  )}
                </Button>
              </fieldset>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
