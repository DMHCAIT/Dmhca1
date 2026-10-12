import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CalendarDays, CreditCard, Mail, MapPin, Phone, RefreshCw, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabaseClient } from "@/lib/supabase";
import { getEventRegistrations } from "@/routes/api/admin-event-registrations";

export const Route = createFileRoute("/admin/event-registrations")({
  head: () => ({
    meta: [
      { title: "Event Registrations — Admin" },
      { name: "description", content: "View paid CME event registrations" },
    ],
  }),
  component: AdminEventRegistrations,
});

type Registration = {
  id: string;
  event_slug: string;
  event_title: string;
  full_name: string;
  email: string;
  phone: string;
  designation: string;
  specialty: string;
  institution: string;
  city: string;
  referral_source: string | null;
  status: string;
  razorpay_order_id: string | null;
  razorpay_payment_id: string | null;
  created_at: string;
  updated_at: string;
};

type RegistrationFilter = "all" | "paid" | "pending" | "payment_setup_failed";

const filters: { value: RegistrationFilter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "paid", label: "Paid" },
  { value: "pending", label: "Pending" },
  { value: "payment_setup_failed", label: "Payment setup failed" },
];

function AdminEventRegistrations() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filter, setFilter] = useState<RegistrationFilter>("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadRegistrations = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const { data: sessionData, error: sessionError } = await supabaseClient.auth.getSession();
      if (sessionError) throw sessionError;

      const results = await getEventRegistrations({
        data: { accessToken: sessionData.session?.access_token },
      });
      setRegistrations(results as Registration[]);
    } catch (loadError) {
      console.error("Error loading CME registrations:", loadError);
      setError(
        loadError instanceof Error ? loadError.message : "Couldn't load event registrations.",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadRegistrations();
  }, [loadRegistrations]);

  const filteredRegistrations = useMemo(
    () =>
      filter === "all"
        ? registrations
        : registrations.filter((registration) => registration.status === filter),
    [filter, registrations],
  );
  const paidCount = registrations.filter((registration) => registration.status === "paid").length;

  return (
    <div className="space-y-6 p-6">
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-navy-deep">Event Registrations</h1>
          <p className="mt-2 text-gray-600">Female Hormones: Fertility and Subfertility CME</p>
        </div>
        <Button variant="outline" onClick={() => void loadRegistrations()} disabled={loading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <SummaryCard label="Total registrations" count={registrations.length} />
        <SummaryCard label="Payments confirmed" count={paidCount} paid />
      </section>

      <nav aria-label="Filter registrations" className="flex flex-wrap gap-2">
        {filters.map(({ value, label }) => (
          <button
            key={value}
            type="button"
            aria-pressed={filter === value}
            onClick={() => setFilter(value)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
              filter === value
                ? "bg-gold text-navy-deep"
                : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {label}
            {value === "all" ? ` (${registrations.length})` : ""}
          </button>
        ))}
      </nav>

      {error ? (
        <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-5 text-red-800">
          <p>{error}</p>
          <Button variant="outline" className="mt-3" onClick={() => void loadRegistrations()}>
            Try again
          </Button>
        </div>
      ) : loading ? (
        <div className="rounded-lg bg-white p-12 text-center text-gray-600">
          Loading registrations…
        </div>
      ) : filteredRegistrations.length === 0 ? (
        <div className="rounded-lg bg-white p-12 text-center text-gray-600">
          No registrations found for this filter.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredRegistrations.map((registration) => (
            <RegistrationCard key={registration.id} registration={registration} />
          ))}
        </div>
      )}
    </div>
  );
}

function SummaryCard({
  label,
  count,
  paid = false,
}: {
  label: string;
  count: number;
  paid?: boolean;
}) {
  const Icon = paid ? CreditCard : Users;
  return (
    <div className="flex items-center justify-between rounded-lg border-l-4 border-gold bg-white p-5 shadow-sm">
      <div>
        <p className="text-sm font-medium text-gray-600">{label}</p>
        <p className="mt-1 text-3xl font-bold text-navy-deep">{count}</p>
      </div>
      <Icon className="h-8 w-8 text-gold" aria-hidden="true" />
    </div>
  );
}

function RegistrationCard({ registration }: { registration: Registration }) {
  const paid = registration.status === "paid";
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-gray-100 px-5 py-4">
        <div>
          <h2 className="text-lg font-semibold text-navy-deep">{registration.full_name}</h2>
          <p className="mt-1 text-sm text-gray-600">{registration.event_title}</p>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            paid ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
          }`}
        >
          {paid ? "Paid · ₹599" : registration.status.replaceAll("_", " ")}
        </span>
      </div>

      <div className="grid gap-x-8 gap-y-4 px-5 py-5 sm:grid-cols-2 lg:grid-cols-3">
        <Detail
          icon={Mail}
          label="Email"
          value={registration.email}
          href={`mailto:${registration.email}`}
        />
        <Detail
          icon={Phone}
          label="Mobile / WhatsApp"
          value={registration.phone}
          href={`tel:${registration.phone}`}
        />
        <Detail
          icon={CalendarDays}
          label="Registered"
          value={formatDate(registration.created_at)}
        />
        <Detail icon={Users} label="Designation" value={registration.designation} />
        <Detail icon={Users} label="Specialty" value={registration.specialty} />
        <Detail icon={MapPin} label="Hospital / institution" value={registration.institution} />
        <Detail icon={MapPin} label="City" value={registration.city} />
        <Detail
          icon={Users}
          label="Referral source"
          value={registration.referral_source || "Not provided"}
        />
        <Detail
          icon={CreditCard}
          label="Razorpay payment ID"
          value={registration.razorpay_payment_id || "Not paid"}
        />
      </div>
    </article>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex min-w-0 items-start gap-2.5">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#800020]" aria-hidden="true" />
      <div className="min-w-0">
        <p className="text-xs text-gray-500">{label}</p>
        {href ? (
          <a href={href} className="break-words text-sm font-medium text-navy-deep hover:underline">
            {value}
          </a>
        ) : (
          <p className="break-words text-sm font-medium text-navy-deep">{value}</p>
        )}
      </div>
    </div>
  );
}

function formatDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? "Unknown"
    : date.toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" });
}
