import { Link } from "@tanstack/react-router";
import { categories } from "@/data/courses";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

import { BrandLogo } from "@/components/site/BrandLogo";

export function Footer() {
  return (
    <footer className="site-footer mt-8 md:mt-12 text-primary-foreground">
      <div className="container-x py-6 md:py-10 grid gap-x-6 gap-y-5 md:gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
        <div className="col-span-2 md:col-span-2 lg:col-span-4">
          <Link to="/" className="footer-brand inline-flex transition-opacity hover:opacity-75">
            <BrandLogo />
          </Link>
          <p className="mt-3 md:mt-6 text-sm text-primary-foreground/70">
            Explore online medical programs, fellowship training, PG Diplomas and certificate
            courses for doctors and healthcare professionals.
          </p>
          <div className="mt-3 md:mt-6 space-y-1.5 md:space-y-2 text-sm font-normal text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Phone className="w-3 h-3 md:w-4 md:h-4 text-gold shrink-0" />{" "}
              <span>+91 9899711530</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-gold shrink-0" />{" "}
              <span>info@dmhca.in</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="w-3 h-3 md:w-4 md:h-4 text-gold mt-0.5 shrink-0" />{" "}
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2 md:mb-3">Explore</div>
          <ul className="space-y-0.5 md:space-y-1 text-sm font-normal">
            <li>
              <Link to="/" className="hover:text-gold transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-dmhca" className="hover:text-gold transition-colors">
                About us
              </Link>
            </li>
            <li>
              <Link to="/top-medical-courses" className="hover:text-gold transition-colors">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-gold transition-colors">
                Events
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:text-gold transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gold transition-colors">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2 md:mb-3">
            Specialties
          </div>
          <ul className="space-y-0.5 md:space-y-1 text-sm font-normal">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link
                  to="/top-medical-courses"
                  search={{ cat: c.slug }}
                  className="hover:text-gold transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 md:col-span-4 lg:col-span-2 grid grid-cols-2 gap-x-6 md:block">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2 md:mb-3">
              Top courses
            </div>
            <ul className="space-y-0.5 md:space-y-1 text-sm font-normal">
              <li>
                <Link
                  to="/courses/$slug"
                  params={{ slug: "certificate-in-hypertension" }}
                  className="hover:text-gold transition-colors"
                >
                  Hypertension
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/$slug"
                  params={{ slug: "fellowship-in-diabetology" }}
                  className="hover:text-gold transition-colors"
                >
                  Diabetology
                </Link>
              </li>
              <li>
                <Link
                  to="/courses/$slug"
                  params={{ slug: "fellowship-in-critical-care" }}
                  className="hover:text-gold transition-colors"
                >
                  Critical Care
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:mt-4 md:pt-4">
            <div className="text-xs uppercase tracking-[0.2em] text-gold mb-2 md:mb-3">Follow</div>
            <div className="flex flex-wrap items-center gap-1.5 md:gap-3 mt-2 md:mt-3">
              <a
                href="https://www.facebook.com/dmhca.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DMHCA on Facebook"
                className="footer-social inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-xl text-white shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <Facebook className="h-4 w-4 text-white" aria-hidden="true" />
              </a>
              <a
                href="https://www.youtube.com/@dmhca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DMHCA on YouTube"
                className="footer-social inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-xl text-white shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <Youtube className="h-4 w-4 text-white" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/dmhca_official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DMHCA on Instagram"
                className="footer-social inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-xl text-white shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <Instagram className="h-4 w-4 text-white" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/dmhca/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DMHCA on LinkedIn"
                className="footer-social inline-flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-xl text-white shadow-md transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                <Linkedin className="h-4 w-4 text-white" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-legal">
        <div className="container-x py-2 md:py-3 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-3 text-xs sm:text-sm font-normal text-primary-foreground/60 text-center md:text-left">
          <div>
            © {new Date().getFullYear()} Delhi Medical Health Care Academy. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 md:gap-x-5 md:gap-y-2">
            <Link to="/term-conditions" className="hover:text-gold">
              Terms &amp; Conditions
            </Link>
            <Link to="/disclaimer" className="hover:text-gold">
              Disclaimer
            </Link>
            <Link to="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            <Link to="/refund-returns-policy" className="hover:text-gold">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
