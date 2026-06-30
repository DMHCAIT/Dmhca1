import { Link } from "@tanstack/react-router";
import { categories } from "@/data/courses";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

const logo = "/logo.webp";
const whiteLogo = "/logo-white.webp";

export function Footer() {
  return (
    <footer className="mt-24 bg-navy-deep text-primary-foreground">
      <div className="container-x py-12 md:py-14 grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
        <div className="col-span-2 md:col-span-2 lg:col-span-4">
          <img
            src={whiteLogo}
            alt="DMHCA Logo - Delhi Medical Health Care Academy"
            className="h-10 w-auto transition-opacity hover:opacity-75"
            onError={(e) => {
              const t = e.currentTarget as HTMLImageElement;
              t.src = logo;
              t.style.filter = "brightness(0) invert(1)";
            }}
          />
          <p className="mt-4 md:mt-6 text-xs md:text-sm text-primary-foreground/70">
            Accessible online medical education, accredited certificates, and advanced fellowships — delivered by faculty from leading institutions worldwide.
          </p>
          <div className="mt-4 md:mt-6 space-y-1.5 md:space-y-2 text-xs md:text-sm text-primary-foreground/80">
            <div className="flex items-center gap-2"><Phone className="w-3 h-3 md:w-4 md:h-4 text-gold flex-shrink-0" /> <span>+91 70420 11441</span></div>
            <div className="flex items-center gap-2"><Mail className="w-3 h-3 md:w-4 md:h-4 text-gold flex-shrink-0" /> <span>info@dmhca.in</span></div>
            <div className="flex items-start gap-2"><MapPin className="w-3 h-3 md:w-4 md:h-4 text-gold mt-0.5 flex-shrink-0" /> <span>New Delhi, India</span></div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2 md:mb-3">Explore</div>
          <ul className="space-y-0.5 md:space-y-1 text-xs md:text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/about-dmhca" className="hover:text-gold transition-colors">About us</Link></li>
            <li><Link to="/top-medical-courses" className="hover:text-gold transition-colors">Courses</Link></li>
            <li><Link to="/simple-event" className="hover:text-gold transition-colors">Events</Link></li>
            <li><Link to="/sitemap/" className="hover:text-gold transition-colors">Sitemap</Link></li>
            <li><Link to="/contact-us" className="hover:text-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2 md:mb-3">Specialties</div>
          <ul className="space-y-0.5 md:space-y-1 text-xs md:text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link to="/top-medical-courses" search={{ cat: c.slug }} className="hover:text-gold transition-colors">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-4 lg:col-span-2">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2 md:mb-3">Top courses</div>
          <ul className="space-y-0.5 md:space-y-1 text-xs md:text-sm">
            <li><Link to="/courses/$slug" params={{ slug: 'certificate-in-hypertension' }} className="hover:text-gold transition-colors">Hypertension</Link></li>
            <li><Link to="/courses/$slug" params={{ slug: 'certificate-in-diabetology' }} className="hover:text-gold transition-colors">Diabetology</Link></li>
            <li><Link to="/courses/$slug" params={{ slug: 'fellowship-in-critical-care' }} className="hover:text-gold transition-colors">Critical Care</Link></li>
          </ul>
          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-primary-foreground/5">
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2 md:mb-3">Follow</div>
            <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-3">
              <a href="https://www.facebook.com/dmhca.in" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#1877F2] flex items-center justify-center shadow-sm transition-transform transform group-hover:-translate-y-0.5">
                  <Facebook className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
              </a>
              <a href="https://www.youtube.com/@dmhca" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#FF0000] flex items-center justify-center shadow-sm transition-transform transform group-hover:-translate-y-0.5">
                  <Youtube className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
              </a>
              <a href="https://www.instagram.com/dmhca_official/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] flex items-center justify-center shadow-sm transition-transform transform group-hover:-translate-y-0.5">
                  <Instagram className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/dmhca/" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0A66C2] flex items-center justify-center shadow-sm transition-transform transform group-hover:-translate-y-0.5">
                  <Linkedin className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Delhi Medical Health Care Academy. All rights reserved.</div>
          <div className="flex gap-5">
              <Link to="/privacy-policy/" className="hover:text-gold">Privacy</Link>
              <Link to="/term-conditions/" className="hover:text-gold">Terms</Link>
              <Link to="/refund-returns-policy/" className="hover:text-gold">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
