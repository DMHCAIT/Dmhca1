import React, { useState, useEffect } from "react";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { getEventBySlug, getAllEvents } from "@/data/events";
import { Calendar, MapPin, Users, Sparkles, ArrowRight, Award, Facebook, Linkedin, Instagram } from "lucide-react";
import { notFound } from "@tanstack/react-router";
import EventComments from "@/components/EventComments";

export const Route = createFileRoute("/simple-event/$slug")({
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

function EventDetailPage() {
  const { slug } = useParams({ from: "/simple-event/$slug" });
  const event = getEventBySlug(slug);
  const allEvents = getAllEvents();

  if (!event) {
    throw notFound();
  }

  

  const relatedEvents = allEvents.filter((e) => e.id !== event.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background dark:bg-slate-900">
      {/* Breadcrumb */}
      <div className="bg-background border-b border-border/30">
        <div className="container-x py-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Link to="/" className="hover:text-navy-deep transition font-medium">Home</Link>
            <span className="text-border">/</span>
            <Link to="/simple-event" className="hover:text-navy-deep transition font-medium">Events</Link>
            <span className="text-border">/</span>
            <span className="text-foreground font-bold truncate">{event.title}</span>
          </div>
        </div>
      </div>

      {/* Premium Hero Section */}
      <div
        className="relative overflow-hidden border-b border-gold/10 site-hero"
        style={{ paddingBlock: '1.5rem' }}
      >
        {/* Muted background image + home hero mix */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(3,7,18,0.86), rgba(3,7,18,0.6)), url(${event.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'none',
            opacity: 0.94,
            mixBlendMode: 'normal',
          }}
        />

        <div className="relative container-x py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-white/15 border border-white/25 rounded-full">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white text-xs font-bold uppercase tracking-wider">Premium Event</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-white mb-3 leading-tight tracking-tight">
                {event.title}
              </h1>
              
              <p className="text-base md:text-lg text-blue-100 mb-4 leading-relaxed max-w-xl">
                {event.shortDescription}
              </p>

              {/* Info Pills */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-3 bg-white/15 px-6 py-3 rounded-xl border border-white/25">
                  <Calendar className="w-5 h-5 text-yellow-300" />
                  <div>
                    <p className="text-xs text-blue-100 uppercase font-bold">Date</p>
                    <p className="text-white font-semibold">{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 bg-white/15 px-6 py-3 rounded-xl border border-white/25">
                  <MapPin className="w-5 h-5 text-yellow-300" />
                  <div>
                    <p className="text-xs text-blue-100 uppercase font-bold">Location</p>
                    <p className="text-white font-semibold">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional decorative image block removed: image now used as background for muted effect */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-x py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Content Column */}
            <div className="lg:col-span-2 space-y-10">
            
            {/* About Event */}
            {event.description && (
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-navy-deep to-blue-600 rounded-full"></div>
                  <h2 className="text-4xl font-display font-black text-foreground">
                    About Event
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </section>
            )}

            {/* Comments intentionally placed later (above Upcoming Events) */}

            {/* What You'll Learn */}
            {event.whatYouLearn && event.whatYouLearn.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-navy-deep to-blue-600 rounded-full"></div>
                  <h2 className="text-4xl font-display font-black text-foreground">
                    Learning Outcomes
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.whatYouLearn.map((item, index) => (
                    <div key={index} className="group p-5 bg-gradient-to-br from-blue-50 to-white border-2 border-blue-100 rounded-2xl hover:border-navy-deep hover:shadow-lg transition-all duration-300">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-navy-deep to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                          ✓
                        </div>
                        <p className="text-foreground font-medium leading-relaxed pt-0.5">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Comments placed after speakers (kept below) */}

            {/* Objectives */}
            {event.objectives && event.objectives.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-navy-deep to-blue-600 rounded-full"></div>
                  <h2 className="text-4xl font-display font-black text-foreground">
                    Key Objectives
                  </h2>
                </div>
                <div className="space-y-4">
                  {event.objectives.map((item, index) => (
                    <div key={index} className="group relative overflow-hidden p-6 bg-white border-2 border-border/50 rounded-2xl hover:border-navy-deep hover:shadow-lg transition-all duration-300">
                      <div className="absolute -inset-full bg-gradient-to-r from-navy-deep/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex gap-5 items-start">
                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-navy-deep to-blue-600 flex items-center justify-center text-white font-bold text-lg">
                          {index + 1}
                        </div>
                        <p className="text-foreground leading-relaxed pt-1">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Event Content */}
            {event.eventContent && event.eventContent.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-navy-deep to-blue-600 rounded-full"></div>
                  <h2 className="text-4xl font-display font-black text-foreground">
                    Agenda
                  </h2>
                </div>
                <div className="space-y-4">
                  {event.eventContent.map((item, index) => (
                    <div key={index} className="group relative flex gap-5 p-5 bg-white/60 border-l-4 border-navy-deep rounded-xl hover:shadow-sm transition-all duration-200">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-navy-deep to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <p className="text-foreground font-medium leading-relaxed pt-1">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Speakers */}
            {event.speakers && event.speakers.length > 0 && (
              <section>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1.5 h-8 bg-gradient-to-b from-navy-deep to-blue-600 rounded-full"></div>
                  <h2 className="text-4xl font-display font-black text-foreground">
                    Meet The Speakers
                  </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {event.speakers.map((speaker, index) => (
                    <div key={index} className="group relative overflow-hidden p-6 bg-gradient-to-br from-white to-blue-50 border-2 border-border/50 rounded-2xl hover:border-navy-deep hover:shadow-xl transition-all duration-300">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-navy-deep/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-300"></div>
                      
                      <div className="relative flex gap-5">
                        {speaker.image && (
                          <div className="flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-3 border-navy-deep/20 group-hover:border-navy-deep transition-colors">
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              onError={(e) => {
                                (e.currentTarget as HTMLImageElement).style.display = "none";
                              }}
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-lg text-foreground group-hover:text-navy-deep transition-colors mb-1">
                            {speaker.name}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {speaker.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Main CTA Card */}
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-deep to-blue-700 text-white shadow-2xl">
                {/* Background Animation */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20"></div>
                </div>

                <div className="relative p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-400/20 border border-yellow-400/50 rounded-full mb-4">
                      <Award className="w-4 h-4 text-yellow-300" />
                      <span className="text-xs font-bold uppercase text-yellow-300">Limited Slots</span>
                    </div>
                    <h3 className="text-3xl font-display font-black">Register Now</h3>
                  </div>

                  <div className="space-y-4 mb-8 py-6 border-y border-white/20">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-yellow-300" />
                      <div className="text-sm">
                        <p className="text-blue-100 text-xs uppercase font-bold">Date</p>
                        <p className="font-semibold">{event.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-yellow-300" />
                      <div className="text-sm">
                        <p className="text-blue-100 text-xs uppercase font-bold">Mode</p>
                        <p className="font-semibold">{event.location}</p>
                      </div>
                    </div>
                    {event.speakers && event.speakers.length > 0 && (
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-yellow-300" />
                        <div className="text-sm">
                          <p className="text-blue-100 text-xs uppercase font-bold">Speakers</p>
                          <p className="font-semibold">{event.speakers.length} Experts</p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price */}
                  {event.price && event.price.current > 0 ? (
                    <div className="mb-8">
                      <p className="text-blue-100 text-xs uppercase font-bold mb-2">Investment</p>
                      <div className="flex items-baseline gap-3">
                        <span className="text-5xl font-black">₹{event.price.current}</span>
                        {event.price.original > event.price.current && (
                          <span className="text-lg line-through text-blue-200">₹{event.price.original}</span>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="mb-8">
                      <div className="inline-block px-4 py-2 bg-green-400/20 border border-green-400/50 rounded-lg">
                        <p className="text-green-300 font-bold text-sm">Free Event</p>
                      </div>
                    </div>
                  )}

                  <button className="w-full px-6 py-4 bg-white text-navy-deep rounded-xl hover:bg-blue-50 transition font-black text-lg flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl">
                    Secure Your Slot
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                  </button>

                  <p className="text-center text-xs text-blue-200 mt-4">Limited slots available</p>
                </div>
              </div>

                {/* Share Card */}
                <div className="bg-white border border-border/60 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-display font-bold text-foreground mb-4">Share Event</h4>
                  <div className="flex items-center justify-center gap-4">
                    <a
                      className="flex items-center justify-center w-11 h-11 bg-white border border-slate-200 text-slate-700 rounded-md hover:shadow-sm transition hover:bg-[#1877F2] hover:text-white"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on Facebook"
                      title="Share on Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>

                    <button
                      className="flex items-center justify-center w-11 h-11 bg-white border border-slate-200 text-slate-700 rounded-md hover:shadow-sm transition hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-400 hover:text-white"
                      onClick={() => {
                        if (typeof navigator !== 'undefined' && navigator.clipboard) {
                          navigator.clipboard.writeText(typeof window !== 'undefined' ? window.location.href : '');
                        }
                      }}
                      aria-label="Copy link for Instagram"
                      title="Copy event link (for Instagram)"
                    >
                      <Instagram className="w-4 h-4" />
                    </button>

                    <a
                      className="flex items-center justify-center w-11 h-11 bg-white border border-slate-200 text-slate-700 rounded-md hover:shadow-sm transition hover:bg-[#0A66C2] hover:text-white"
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(event.title)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Share on LinkedIn"
                      title="Share on LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>

      {/* Related Events */}
      {/* Comments Section (placed above Upcoming Events) */}
      <section className="container-x">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-8 bg-gradient-to-b from-navy-deep to-blue-600 rounded-full"></div>
          <h2 className="text-3xl font-display font-black text-foreground">Comments</h2>
        </div>
        <EventComments eventSlug={event.slug} />
      </section>

      {relatedEvents.length > 0 && (
        <div className="border-t border-border bg-gradient-to-b from-slate-50 to-white py-20">
          <div className="container-x">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-10 bg-gradient-to-b from-navy-deep to-blue-600 rounded-full"></div>
                <h2 className="text-4xl font-display font-black text-foreground">
                  Upcoming Events
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Don't miss these other premium professional development opportunities
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedEvents.map((relatedEvent) => (
                <Link
                  key={relatedEvent.id}
                  to={`/simple-event/${relatedEvent.slug}`}
                  className="group"
                >
                  <div className="relative overflow-hidden bg-white border-2 border-border rounded-3xl hover:border-navy-deep hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-video overflow-hidden bg-slate-100">
                      <img
                        src={relatedEvent.image}
                        alt={relatedEvent.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = "/placeholder-event.webp";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="font-display font-black text-lg text-foreground mb-3 group-hover:text-navy-deep transition line-clamp-2">
                        {relatedEvent.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-1">
                        {relatedEvent.shortDescription}
                      </p>

                      {/* Footer */}
                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-semibold text-navy-deep">
                          <Calendar className="w-4 h-4" />
                          <span>{relatedEvent.date}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-navy-deep group-hover:translate-x-1 transition" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Final CTA removed per request */}
    </div>
  );
}
