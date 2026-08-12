import React from 'react'
import { createFileRoute, Link, Outlet, useLocation } from '@tanstack/react-router'

const events = [
  {
    slug: 'join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program',
    image: 'vasa-academy.webp',
    title: 'Join our 3 Day Master Workshop in Ultrasound with Hands-On Training Program',
    date: '23/01/2026',
    location: 'Workshop'
  },
  {
    slug: 'webinar-what-to-expect-at-the-hiv-awareness-webinar-2025',
    image: 'sandeep_gupta.webp',
    title: 'Webinar: What to Expect at the HIV Awareness Webinar 2025',
    date: '01/12/2025',
    location: 'Zoom Meeting'
  },
  {
    slug: 'webinar-cervical-cancer-awareness-diagnosis-and-treatment',
    image: 'Renuka gupta.webp',
    title: 'Webinar : Cervical Cancer Awareness, Diagnosis, and Treatment',
    date: '14/11/2024',
    location: 'Zoom meeting'
  },
  {
    slug: 'using-laptop-and-pc-working-at-home',
    image: 'Pramod kumar Dhar.webp',
    title: 'Event : Cardiology Conclave',
    date: '06/04/2024',
    location: 'Hyderabad, India'
  },
  {
    slug: 'business-people-working-together-conference',
    image: 'Dr_Azra khan.webp',
    title: 'Webinar : Management of High-Risk Pregnancies',
    date: '12/05/2024',
    location: 'Online On Zoom'
  },
  {
    slug: 'young-tutor-home-teaching-online-courses',
    image: 'Dr_Abbas kazim.webp',
    title: 'Trauma and Fracture Management',
    date: '26/05/2024',
    location: 'Online on Zoom'
  },
  {
    slug: 'startup-business-team-meeting-modern',
    image: 'Dr.Abhishek-Lachyan.webp',
    title: 'Musculoskeletal Ultrasound – Applications and Techniques',
    date: '08/06/2024',
    location: 'Online on Zoom'
  },
];

export function EventsListing() {
  const location = useLocation();
  // Check if we're on a detail page by looking at the pathname
  const isDetailPage = location.pathname !== '/simple-event';

  if (isDetailPage) {
    return <Outlet />;
  }

  return (
    <div className="container-home py-12">
      <h1 className="font-display text-4xl mb-6 flex items-center gap-3">
        <img src="/titlelogo.webp" alt="DMHCA mark" className="w-9 h-9" />
        Events & Webinars
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <Link key={event.slug} to={`/simple-event/${event.slug}`} className="block rounded-lg overflow-hidden shadow-md hover:shadow-xl transition bg-white">
            <div className="w-full">
              <img src={`/events&webinars/${event.image}`} alt={event.title} className="w-full object-cover object-center aspect-[4/3]" style={{ filter: 'none' }} />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>📅</span>
                <span className="font-semibold">{event.date}</span>
              </div>
              <h3 className="font-semibold text-navy-deep mb-2 line-clamp-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span>📍</span>
                <span>{event.location}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default EventsListing

export const Route = createFileRoute('/simple-event')({ component: EventsListing })
