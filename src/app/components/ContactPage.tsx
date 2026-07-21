import { useEffect } from "react";
import { motion } from "motion/react";
import { SiteNav, GRN, GRY, BDR, BGS, T, BOOKING_URL } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { ContactForm } from "./ContactForm";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const viewOpts = { once: true, margin: "-60px" };

function IconEmail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={GRN} strokeWidth="1.5" />
      <path d="M2 7l10 7 10-7" stroke={GRN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={GRN}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill={GRN}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export function ContactPage() {
  useEffect(() => {
    document.title = "Contact — VisiWise Optimization";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <SiteNav active="/contact" />

      <header className="relative w-full pt-36 pb-12 px-6 md:px-10" style={{ background: BGS }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Get in touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="leading-none max-w-3xl"
            style={{ fontFamily: T.serif, fontSize: "clamp(36px,6vw,64px)", color: GRN, letterSpacing: "-0.04em" }}>
            Let's talk about your digital operation.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl"
            style={{ fontFamily: T.display, fontSize: "18px", color: GRY, lineHeight: 1.5 }}>
            Whether you're ready to start or just want to understand your options — no pressure, no pitch.
          </motion.p>
        </div>
      </header>

      <main className="flex-1 px-6 md:px-10 py-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="grid md:grid-cols-2 gap-10">
            {/* Left — audit call */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <h3 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "26px", color: GRN, letterSpacing: "-0.6px" }}>
                Book a free 30-min audit call.
              </h3>
              <p style={{ fontFamily: T.serif, fontSize: "17px", color: GRY, lineHeight: 1.6, letterSpacing: "-0.04em" }}>
                We'll review your current digital presence live — website, SEO, social — and walk you through what we'd prioritize. You'll leave with clarity whether or not you work with us.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "30 minutes — video or phone, your choice",
                  "We review your website, SEO, and social presence live",
                  "You get a prioritized recommendation list",
                  "No sales pressure — ever",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3" style={{ fontFamily: T.serif, fontSize: "16px", color: GRN, lineHeight: 1.5 }}>
                    <span style={{ color: GRN, flexShrink: 0, marginTop: "3px" }}>✦</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 hover:opacity-85 transition-opacity w-fit"
                style={{ background: GRN, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: "#fff" }}>
                <span className="w-1 h-1 rounded-full bg-white inline-block shrink-0" />
                Schedule a Free Audit Call
              </a>
              <div className="flex items-center gap-4">
                <div style={{ flex: 1, height: "1px", background: BDR }} />
                <span style={{ fontFamily: T.serif, fontSize: "14px", color: GRY }}>or send a message to</span>
                <div style={{ flex: 1, height: "1px", background: BDR }} />
              </div>
              <a href="mailto:visiwiseoptimization@gmail.com" style={{ fontFamily: T.mono, fontSize: "14px", color: GRN, textDecoration: "underline" }}>
                visiwiseoptimization@gmail.com
              </a>
            </motion.div>

            {/* Right — form */}
            <motion.div variants={fadeUp} className="flex flex-col gap-5 p-8 rounded-2xl bg-white" style={{ border: `1px solid ${BDR}` }}>
              <ContactForm />
            </motion.div>
          </motion.div>

          {/* Info strip */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
            className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto w-full">
            {[
              { icon: <IconEmail />, label: "Email", value: "visiwiseoptimization@gmail.com" },
              { icon: <IconLinkedIn />, label: "LinkedIn", value: "linkedin.com/company/visiwise" },
              { icon: <IconInstagram />, label: "Instagram", value: "@visiwise.optimization" },
            ].map((tile) => (
              <motion.div key={tile.label} variants={fadeUp} className="flex flex-col gap-2 p-5 rounded-xl bg-white" style={{ border: `1px solid ${BDR}` }}>
                {tile.icon}
                <span style={{ fontFamily: T.mono, fontSize: "11px", color: GRY, letterSpacing: "0.08em", textTransform: "uppercase" }}>{tile.label}</span>
                <span style={{ fontFamily: T.serif, fontSize: "14px", color: GRN, lineHeight: 1.5 }}>{tile.value}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
