import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getEventBySlug, getAllEvents } from "@/data/events";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Facebook,
  GraduationCap,
  Instagram,
  Linkedin,
  MapPin,
  UserRound,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResourceHero } from "@/components/site/ResourceHero";
import { EventRegistrationDialog } from "@/components/site/EventRegistrationDialog";

export const Route = createFileRoute("/events/$slug")({
  component: EventDetailPage,
  head: ({ params }) => {
    const event = getEventBySlug(params.slug);
    return {
      meta: [
        { title: `${event?.title || "Event"} - DMHCA` },
        { name: "description", content: event?.shortDescription || "Event details" },
      ],
    };
  },
});

const panelClass = "rounded-2xl border border-[#29334a]/15 bg-white";
const focusClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#800020] focus-visible:ring-offset-4";
const shareButtonClass =
  "footer-social h-9 w-9 rounded-xl border-0 text-white shadow-md transition-transform hover:-translate-y-0.5 focus-visible:ring-[#800020]";

function ContentSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`${panelClass} event-content-section scroll-mt-28 p-6 md:p-8`}>
      <h2 className="event-section-heading font-display text-2xl font-semibold tracking-tight text-[#29334a] mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}

function EventImage({
  src,
  mobileSrc,
  title,
  fullPoster = false,
}: {
  src?: string;
  mobileSrc?: string;
  title: string;
  fullPoster?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`flex items-center justify-center overflow-hidden rounded-xl bg-[#f8f9fc] ${fullPoster && src && !failed ? "" : "aspect-video"}`}>
      {src && !failed ? (
        <picture className={fullPoster ? "block w-full" : "h-full w-full"}>
          {mobileSrc && <source media="(max-width: 767px)" srcSet={encodeURI(mobileSrc)} />}
          <img
            src={src}
            alt={title}
            className={fullPoster ? "mx-auto block h-auto w-full object-contain" : "h-full w-full object-cover"}
            style={fullPoster && mobileSrc ? { maxWidth: "var(--event-poster-width)" } : undefined}
            onError={() => {
              console.warn(`Unable to load event image: ${src}`);
              setFailed(true);
            }}
          />
        </picture>
      ) : (
        <GraduationCap className="h-12 w-12 text-[#800020]/60" aria-hidden="true" />
      )}
    </div>
  );
}

function EventDetailPage() {
  const { slug } = Route.useParams();
  const [eventUrl, setEventUrl] = useState("");
  const [upcoming, setUpcoming] = useState(false);
  const event = getEventBySlug(slug);

  useEffect(() => {
    setEventUrl(window.location.href);
    setUpcoming(!!event?.startsAt && Date.parse(event.startsAt) > Date.now());
  }, [slug, event?.startsAt]);

  if (!event) throw notFound();

  const relatedEvents = getAllEvents()
    .filter((item) => item.id !== event.id)
    .slice(0, 3);
  const sessionDetails = [
    { label: "Date", value: event.date, Icon: Calendar },
    ...(event.time ? [{ label: "Time", value: event.time, Icon: Clock }] : []),
    { label: "Mode / location", value: event.location, Icon: MapPin },
  ];

  return (
    <div className="home-page resource-page resource-event-detail-page">
      <ResourceHero
        eyebrow={upcoming ? "Upcoming event · DMHCA" : "Medical education · DMHCA"}
        title={event.title}
      >
        <dl className="event-session-details">
          {sessionDetails.map(({ label, value, Icon }) => (
            <div key={label} className="event-session-item">
              <Icon className="h-5 w-5 shrink-0 text-[#f7cbd7]" aria-hidden="true" />
              <div className="min-w-0">
                <dt className="event-session-label">{label}</dt>
                <dd className="text-sm font-medium leading-relaxed">{value}</dd>
              </div>
            </div>
          ))}
        </dl>
      </ResourceHero>

      <div className="container-x py-8 md:py-12">
        <div className="event-detail-layout grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0 space-y-6">
            <ContentSection id="overview" title="About this event">
              {event.shortDescription !== event.description && (
                <p className="mb-5 text-base font-medium leading-7 text-[#29334a]">
                  {event.shortDescription}
                </p>
              )}
              {event.image && (
                <div className="mb-6" aria-label="Event poster">
                  <EventImage
                    key={event.slug}
                    src={event.image}
                    mobileSrc={event.mobileImage}
                    title={event.title}
                    fullPoster
                  />
                </div>
              )}
              {event.description && (
                <p className="text-base leading-8 text-[#6b5b68]">{event.description}</p>
              )}
            </ContentSection>

            {event.speakers.length > 0 && (
              <ContentSection
                id="faculty"
                title={event.speakers.length === 1 ? "Meet your speaker" : "Meet the speakers"}
              >
                <div className="grid gap-4">
                  {event.speakers.map((speaker) => (
                    <article
                      key={speaker.name}
                      className="flex items-start gap-4 rounded-xl border border-[#29334a]/15 bg-[#f8f9fc] p-5 sm:gap-5"
                    >
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f7cbd7]/25 text-[#800020] sm:h-20 sm:w-20">
                        {speaker.image ? (
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="h-full w-full object-cover object-top"
                          />
                        ) : (
                          <UserRound className="h-8 w-8" aria-hidden="true" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-display text-lg font-semibold text-[#29334a]">
                          {speaker.name}
                        </h3>
                        {speaker.qualifications && (
                          <p className="mt-1 text-sm font-medium text-[#800020]">
                            {speaker.qualifications}
                          </p>
                        )}
                        <p className="mt-2 text-sm leading-6 text-[#6b5b68]">{speaker.title}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </ContentSection>
            )}

            {!!event.whatYouLearn?.length && (
              <ContentSection id="learning" title="What you'll learn">
                <ul className="grid gap-4 sm:grid-cols-2">
                  {event.whatYouLearn.map((item) => (
                    <li key={item} className="flex gap-3 rounded-xl bg-[#f7cbd7]/70 p-4">
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#800020]"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-6 text-[#29334a]">{item}</span>
                    </li>
                  ))}
                </ul>
              </ContentSection>
            )}

            {!!event.objectives?.length && (
              <ContentSection id="objectives" title="Key objectives">
                <ul className="space-y-4">
                  {event.objectives.map((item) => (
                    <li key={item} className="flex gap-3 text-base leading-7 text-[#6b5b68]">
                      <Check className="mt-1 h-5 w-5 shrink-0 text-[#800020]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </ContentSection>
            )}

            {!!event.eventContent?.length && (
              <ContentSection id="agenda" title="Session agenda">
                <ol className="divide-y divide-[#29334a]/15">
                  {event.eventContent.map((item, index) => (
                    <li key={item} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#f8f9fc] text-xs font-semibold text-[#800020]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p className="pt-0.5 text-base leading-7 text-[#6b5b68]">{item}</p>
                    </li>
                  ))}
                </ol>
              </ContentSection>
            )}
          </div>

          <aside aria-label="Registration and sharing" className="space-y-5 lg:sticky lg:top-28">
            <section className={`${panelClass} overflow-hidden shadow-sm`}>
              <div className="border-b border-[#29334a]/15 bg-[#f7cbd7]/60 p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#800020]">
                  {event.registrationPending ? "Registration" : "Event information"}
                </p>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {event.registrationPending ? "Reserve your seat" : "Plan your participation"}
                </h2>
              </div>
              <div className="p-6">
                <dl className="space-y-5">
                  {sessionDetails.map(({ label, value, Icon }) => (
                    <div key={label} className="flex gap-3">
                      <Icon className="mt-1 h-5 w-5 shrink-0 text-[#800020]" aria-hidden="true" />
                      <div>
                        <dt className="text-xs text-[#6b5b68]">{label}</dt>
                        <dd className="mt-1 text-sm font-medium leading-6">{value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
                <div className="mt-6 border-t border-[#29334a]/15 pt-6">
                  {event.registrationPending ? (
                    <>
                      <p className="text-sm leading-6 text-[#6b5b68]">
                        Pay online to confirm your registration
                      </p>
                      <p className="mt-3 text-3xl font-semibold text-[#29334a]">
                        ₹599
                        <span className="ml-2 text-sm font-normal text-[#6b5b68]">
                          one-time registration
                        </span>
                      </p>
                    </>
                  ) : event.price ? (
                    <>
                      <p className="text-xs text-[#6b5b68]">Listed registration fee</p>
                      <p className="mt-2 text-3xl font-semibold">
                        {event.price.current === 0
                          ? "Free event"
                          : `₹${event.price.current.toLocaleString("en-IN")}`}
                        {event.price.original > event.price.current && (
                          <span className="ml-3 text-sm font-normal text-[#6b5b68] line-through">
                            ₹{event.price.original.toLocaleString("en-IN")}
                          </span>
                        )}
                      </p>
                    </>
                  ) : (
                    <p className="text-sm leading-6 text-[#6b5b68]">
                      Contact our team for registration details and availability.
                    </p>
                  )}
                  {event.registrationPending ? (
                    <EventRegistrationDialog />
                  ) : (
                    <>
                      <Button
                        asChild
                        className="mt-5 h-auto w-full whitespace-normal rounded-xl bg-[#800020] px-4 py-3 text-white shadow-none hover:bg-[#68001e] focus-visible:ring-[#800020]"
                      >
                        <Link to="/contact-us">
                          Enquire about this event <ArrowRight aria-hidden="true" />
                        </Link>
                      </Button>
                      <p className="mt-3 text-center text-xs leading-5 text-[#6b5b68]">
                        Our team can help with session and registration enquiries.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </section>

            <section className={`${panelClass} p-6`}>
              <h2 className="text-sm font-semibold">Share with a colleague</h2>
              <p className="mt-1 text-xs leading-5 text-[#6b5b68]">
                Pass this session on to your professional network.
              </p>
              <div className="mt-4 flex gap-3">
                <Button asChild size="icon" className={shareButtonClass}>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(eventUrl)}&title=${encodeURIComponent(event.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="icon" className={shareButtonClass}>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(eventUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <Facebook aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="icon" className={shareButtonClass}>
                  <a
                    href="https://www.instagram.com/dmhca_official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="DMHCA on Instagram"
                  >
                    <Instagram aria-hidden="true" />
                  </a>
                </Button>
                <Button asChild size="icon" className={shareButtonClass}>
                  <a
                    href="https://www.youtube.com/@dmhca"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="DMHCA on YouTube"
                  >
                    <Youtube aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </section>
          </aside>
        </div>

        {relatedEvents.length > 0 && (
          <section className="mt-14 border-t border-[#29334a]/15 pt-10">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  Explore more events
                </h2>
                <p className="mt-2 text-sm text-[#6b5b68]">
                  More sessions from the DMHCA medical education community.
                </p>
              </div>
              <Link
                to="/events"
                className={`inline-flex items-center gap-2 text-sm font-medium text-[#800020] ${focusClass}`}
              >
                View all events <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedEvents.map((relatedEvent) => (
                <Link
                  key={relatedEvent.id}
                  to="/events/$slug"
                  params={{ slug: relatedEvent.slug }}
                  className={`${panelClass} group flex flex-col overflow-hidden transition-shadow hover:shadow-md ${focusClass}`}
                >
                  <EventImage
                    key={relatedEvent.slug}
                    src={relatedEvent.image}
                    title={relatedEvent.title}
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3
                      title={relatedEvent.title}
                      className="truncate font-display text-lg font-semibold leading-6 group-hover:text-[#800020]"
                    >
                      {relatedEvent.title}
                    </h3>
                    <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6b5b68]">
                      {relatedEvent.shortDescription}
                    </p>
                    <div className="mt-auto flex items-center gap-2 pt-5 text-xs text-[#6b5b68]">
                      <Calendar className="h-4 w-4 shrink-0 text-[#800020]" aria-hidden="true" />
                      <span>{relatedEvent.date}</span>
                      <ArrowRight className="ml-auto h-4 w-4 shrink-0" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
