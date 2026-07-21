import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import imgLogo from "../../imports/Desktop/1461d062a4df53a899d6f6a3b764b1d786b4b24c.png";

// ─── Design tokens (kept in sync with App.tsx) ────────────────────────────────
export const GRN = "#104101";
export const YLW = "#fdff4a";
export const GRY = "#6c6c6c";
export const BDR = "#dbe0ec";
export const BGS = "#f6f8fb";

// Google Calendar Appointment Schedule — 30-min free audit call booking page.
export const BOOKING_URL = "https://calendar.app.google/6ZnoVugcdHveqTtR7";

export const T = {
  serif: "'Source Serif 4', serif",
  display: "'Radio Canada Big', sans-serif",
  mono: "'Geist Mono', monospace",
};

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Explore Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];

/**
 * Shared site navigation.
 * Pass `home` when rendering on the homepage — it enables the extra logo
 * fade-to-color effect that tracks the hero gradient background. Every
 * other page just gets the simpler always-on-brand nav bar.
 */
export function SiteNav({ home = false, active }: { home?: boolean; active?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoGrey, setLogoGrey] = useState(home ? 0 : 1);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function update() {
      const y = window.scrollY;
      setScrolled(y > 80);
      if (!home) return;
      const gradEl = document.querySelector('[data-name="Gradient background"]');
      const navH = navRef.current?.getBoundingClientRect().height ?? 80;
      if (gradEl) {
        const gradBottom = gradEl.getBoundingClientRect().bottom;
        setLogoGrey(1 - Math.min(1, Math.max(0, (gradBottom - navH) / (navH * 5))));
      } else {
        setLogoGrey(Math.min(1, Math.max(0, (y - 60) / 400)));
      }
    }
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [home]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4"
      style={{
        transition: "background 0.4s ease, backdrop-filter 0.4s ease",
        backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)",
      }}
    >
      <Link to="/">
        <img
          src={imgLogo}
          alt="VisiWise"
          className="h-20 w-auto object-contain"
          style={{ transition: "filter 0.4s ease", filter: `grayscale(${logoGrey}) brightness(${1 - logoGrey * 0.55})` }}
        />
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.label}
            to={l.href}
            className="hover:opacity-60 transition-opacity"
            style={{
              fontFamily: T.display,
              fontWeight: 500,
              fontSize: "16px",
              color: GRN,
              ...(active === l.href ? { textDecoration: "underline", textUnderlineOffset: "4px" } : {}),
            }}
          >
            {l.label}
          </Link>
        ))}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 hover:opacity-85 transition-opacity"
          style={{ background: GRN, fontFamily: T.display, fontSize: "16px", fontWeight: 500, color: YLW }}
        >
          Book a Call →
        </a>
      </div>

      {/* Mobile toggle */}
      <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="block h-0.5 w-6 mb-1.5 last:mb-0 transition-all duration-300"
            style={{
              background: GRN,
              transform: open && i === 0 ? "rotate(45deg) translate(4px,4px)" : open && i === 2 ? "rotate(-45deg) translate(4px,-4px)" : "",
              opacity: open && i === 1 ? 0 : 1,
            }}
          />
        ))}
      </button>

      {open && (
        <div
          className="absolute top-full left-0 right-0 flex flex-col gap-4 px-6 py-6 shadow-lg"
          style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(32px)" }}
        >
          {NAV_LINKS.map((l) => (
            <Link key={l.label} to={l.href} onClick={() => setOpen(false)} style={{ fontFamily: T.display, fontWeight: 500, fontSize: "20px", color: GRN }}>
              {l.label}
            </Link>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center py-3 mt-2"
            style={{ background: GRN, fontFamily: T.display, fontSize: "16px", fontWeight: 500, color: YLW }}
          >
            Book a Call →
          </a>
        </div>
      )}
    </nav>
  );
}
