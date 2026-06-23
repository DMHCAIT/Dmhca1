import React from 'react'
import { createFileRoute, useParams, Link } from '@tanstack/react-router'

const slugMap: Record<string, string> = {
  'join-our-3-day-master-workshop-in-ultrasound-with-hands-on-training-program': 'vasa-academy.webp',
  'webinar-what-to-expect-at-the-hiv-awareness-webinar-2025': 'sandeep_gupta.webp',
  'webinar-cervical-cancer-awareness-diagnosis-and-treatment': 'Renuka-gupta.webp',
  'using-laptop-and-pc-working-at-home': 'Pramod-kumar-Dhar.webp',
  'business-people-working-together-conference': 'Dr_Azra-khan.webp',
  'young-tutor-home-teaching-online-courses': 'Dr_Abbas-kazim.webp',
  'startup-business-team-meeting-modern': 'Dr.Abhishek-Lachyan.webp',
};

export function EventPage() {
  const [slug, setSlug] = React.useState<string>('');
  const [htmlContent, setHtmlContent] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Extract slug from URL pathname
    const pathParts = window.location.pathname.split('/');
    if (pathParts.length >= 3) {
      const extractedSlug = pathParts[2];
      setSlug(extractedSlug);
    }
  }, []);

  const found = slug ? slugMap[slug] : undefined;

  React.useEffect(() => {
    let mounted = true;
    if (!found || !slug) return;
    
    fetch(`/events-content/${slug}.html`)
      .then(async (r) => {
        if (!mounted) return;
        if (r.ok) {
          const txt = await r.text();
          setHtmlContent(txt);
        } else {
          setHtmlContent(null);
        }
      })
      .catch(() => setHtmlContent(null));
    
    return () => { mounted = false };
  }, [slug, found]);

  if (!slug || !found) {
    return (
      <div className="container-home py-12">
        <h1 className="text-2xl">Event not found</h1>
      </div>
    )
  }

  return (
    <div className="container-home py-12">
      <Link to="/simple-event" className="inline-flex items-center gap-2 text-gold hover:text-gold/80 mb-6 font-medium">
        <span>←</span> Back to Events
      </Link>
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <img src={`/events&webinars/${found}`} alt={slug} className="w-full h-96 object-cover object-center" style={{ filter: 'none' }} />
          </div>
          <h1 className="font-display text-4xl mt-6 text-navy-deep flex items-center gap-3">
            <img src="/titlelogo.webp" alt="DMHCA mark" className="w-9 h-9" />
            {slug.replace(/-/g,' ')}
          </h1>
          <div className="mt-4 prose max-w-none text-muted-foreground bg-white/0 p-0">
            {htmlContent === null ? (
              <div>
                <p>This is placeholder content for the event. The page keeps the same URL and original image.</p>
                <p className="mt-4">Highlights:</p>
                <ul className="list-disc ml-6 mt-2 text-muted-foreground">
                  <li>Speaker details and agenda</li>
                  <li>Registration information</li>
                  <li>Venue and timing</li>
                </ul>
              </div>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            )}
          </div>
        </div>
        <aside className="p-6 bg-navy-deep text-primary-foreground rounded-lg shadow-lg">
          <h4 className="font-semibold text-lg">Event details</h4>
          <p className="text-sm text-primary-foreground/90 mt-3">Date: To be announced</p>
          <p className="text-sm text-primary-foreground/90 mt-2">Location: Online / Venue</p>
          <a href="#register" className="inline-block mt-4 px-4 py-2 bg-gold text-navy-deep rounded-md font-medium">Register</a>
        </aside>
      </div>
    </div>
  )
}

export default EventPage

export const Route = createFileRoute('/simple-event/$slug')({ component: EventPage })
