import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllEvents } from "@/data/events";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/simple-event/")({
  component: EventsIndexPage,
});

function EventsIndexPage() {
  const events = getAllEvents();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy-deep to-navy py-16">
        <div className="container-x">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Events & Webinars
          </h1>
          <p className="text-lg text-blue-100 max-w-2xl">
            Join us for insightful events, webinars, and workshops featuring expert speakers from across the medical field.
          </p>
        </div>
      </div>

      {/* Events Grid */}
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Link
              key={event.id}
              to={`/simple-event/${event.slug}`}
              className="group overflow-hidden rounded-lg border border-border bg-card hover:border-navy-deep transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder-event.webp";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-display font-semibold text-lg text-foreground mb-2 group-hover:text-navy-deep transition line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {event.shortDescription}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Upcoming Section removed per request */}
    </div>
  );
}
