import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllEvents } from "@/data/events";
import { Calendar, Clock, MapPin } from "lucide-react";
import { ResourceHero } from "@/components/site/ResourceHero";

export const Route = createFileRoute("/events/")({
  component: EventsIndexPage,
});

function EventsIndexPage() {
  const events = getAllEvents();

  return (
    <div className="home-page resource-page resource-events-page min-h-screen">
      {/* Hero Section */}
      <ResourceHero
        eyebrow="Learn with the medical community"
        title="Events & Webinars"
        description="Join us for insightful events, webinars, and workshops featuring expert speakers from across the medical field."
      />

      {/* Events Grid */}
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.slug}`}
              className="resource-card group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder-event.webp";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <Calendar className="w-12 h-12" aria-hidden="true" />
                  </div>
                )}
                {event.startsAt && Date.parse(event.startsAt) > Date.now() && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#800020] px-3 py-1 text-sm font-semibold text-white shadow-sm">
                    Upcoming Event
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2
                  title={event.title}
                  className="truncate font-display font-semibold text-xl text-foreground mb-2 group-hover:text-[#800020] transition"
                >
                  {event.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {event.shortDescription}
                </p>
                <div className="event-card-meta text-muted-foreground">
                  <div className="flex shrink-0 items-center gap-1 whitespace-nowrap">
                    <Calendar className="shrink-0" aria-hidden="true" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex min-w-0 items-center gap-1">
                    <MapPin className="shrink-0" aria-hidden="true" />
                    <span className="truncate" title={event.location}>
                      {event.location}
                    </span>
                  </div>
                  {event.time && (
                    <div className="flex shrink-0 items-center gap-1 whitespace-nowrap">
                      <Clock className="shrink-0" aria-hidden="true" />
                      <span>{event.time}</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
