import { Link } from "react-router";
import { GRN, YLW, T, BOOKING_URL } from "./SiteNav";
import imgLogo from "../../imports/Desktop/1461d062a4df53a899d6f6a3b764b1d786b4b24c.png";
import imgFooterImage from "../../imports/UnnamedComponent/8a11dbd39aae785f584a7792193df8a4ee8851bd.png";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/visiwise",
    path: (
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        fill={GRN}
      />
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/visiwise.optimization",
    path: (
      <path
        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
        fill={GRN}
      />
    ),
  },
  {
    label: "Facebook",
    href: "#",
    path: <path d="M13 19V13H15L15.5 11H13V9.5C13 8.9 13.3 8.5 14.2 8.5H15.5V6.7C15.2 6.7 14.5 6.5 13.5 6.5C11.6 6.5 10.5 7.6 10.5 9.3V11H9V13H10.5V19H13Z" fill={GRN} />,
  },
];

export function SiteFooter() {
  return (
    <footer className="relative w-full" style={{ background: GRN }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-8 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <img
              src={imgLogo}
              alt="VisiWise"
              className="h-40 w-auto object-contain object-left self-start"
              style={{ filter: "brightness(0) invert(1)" }}
            />
            <p style={{ fontFamily: T.serif, fontSize: "17px", color: "rgba(255,255,255,0.7)", letterSpacing: "-0.04em" }}>
              Digital Operations, Built for Business.
            </p>
            <p style={{ fontFamily: T.mono, fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Serving clients across the US</p>
          </div>
          <div className="flex flex-col gap-3 items-start md:items-end">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 hover:opacity-85 transition-opacity"
              style={{ background: YLW, fontFamily: T.mono, fontSize: "14px", fontWeight: 700, color: GRN }}
            >
              Book a Free Audit →
            </a>
            <a
              href="mailto:visiwiseoptimization@gmail.com"
              style={{ fontFamily: T.mono, fontSize: "13px", color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}
            >
              visiwiseoptimization@gmail.com
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <span style={{ fontFamily: T.mono, fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Services
            </span>
            <Link to="/services" className="hover:opacity-60 transition-opacity w-fit" style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: YLW }}>
              Full Digital Marketing
            </Link>
            <Link to="/services" className="hover:opacity-60 transition-opacity w-fit" style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: YLW }}>
              Analysis & Reporting
            </Link>
            <Link to="/services" className="hover:opacity-60 transition-opacity w-fit" style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: YLW }}>
              Software Solutions
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <span style={{ fontFamily: T.mono, fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Company
            </span>
            {[
              { label: "About", href: "/about" },
              { label: "Journal", href: "/journal" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link key={l.label} to={l.href} className="hover:opacity-60 transition-opacity w-fit" style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: YLW }}>
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="hover:opacity-60 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill={YLW} />
                  {s.path}
                </svg>
              </a>
            ))}
          </div>
          <p style={{ fontFamily: T.mono, fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>© 2026 VisiWise Optimization LLC · All rights reserved</p>
        </div>

        <div aria-hidden className="h-20 mix-blend-luminosity opacity-15 relative w-full">
          <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgFooterImage} />
        </div>
      </div>
    </footer>
  );
}
