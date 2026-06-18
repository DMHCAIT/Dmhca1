import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const logo = "/logo.webp";
const nav = [
  { to: "/", label: "Home" },
  { to: "/about-dmhca", label: "About" },
  { to: "/top-medical-courses", label: "Courses" },
  { to: "/contact-us", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-md hairline">
      <div className="container-x flex items-center justify-between h-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="DMHCA" className="h-10 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-base">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-foreground/80 hover:text-navy-deep transition" activeProps={{ className: "text-navy-deep" }} activeOptions={{ exact: n.to === "/" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/login" className="text-base px-4 py-2 bg-navy-deep text-primary-foreground rounded-sm hover:bg-navy transition">Log in</Link>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-3 text-base">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-1">{n.label}</Link>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="mt-2 inline-block w-fit px-4 py-2 bg-navy-deep text-primary-foreground rounded-sm">Log in</Link>
          </div>
        </div>
      )}
    </header>
  );
}
