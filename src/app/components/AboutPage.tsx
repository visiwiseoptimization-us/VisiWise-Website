import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { SiteNav, GRN, YLW, GRY, BDR, BGS, T, BOOKING_URL } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import imgPortrait from "../../imports/UnnamedComponent/f42c05dd2841492729d69d263e434fa89ac6612b.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const viewOpts = { once: true, margin: "-60px" };

const INDUSTRIES = ["Law Firms", "Healthcare Practices", "Real Estate", "Financial Services", "Construction & Trades", "Consulting & Coaching"];

const VALUES = [
  {
    title: "Clarity over complexity",
    desc: "Every report, recommendation, and invoice is in plain English. You should always know what we did, what it means, and what's coming next.",
  },
  {
    title: "Results before retention",
    desc: "We earn your continued business by showing measurable results — not by burying you in confusing contracts. Our 4-month minimum exists to give strategies time to work.",
  },
  {
    title: "One team, full ownership",
    desc: "We don't outsource your work to anonymous freelancers and mark it up. Everything VisiWise delivers, VisiWise builds. One accountable point of contact, always.",
  },
];

export function AboutPage() {
  useEffect(() => {
    document.title = "About — VisiWise Optimization";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <SiteNav active="/about" />

      {/* Header */}
      <header className="relative w-full pt-36 pb-16 px-6 md:px-10" style={{ background: BGS }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="flex flex-col gap-4">
            <motion.p variants={fadeUp} style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Who we work with
            </motion.p>
            <motion.h1 variants={fadeUp} className="leading-none"
              style={{ fontFamily: T.serif, fontSize: "clamp(36px,6vw,60px)", color: GRN, letterSpacing: "-0.04em" }}>
              Built for service businesses serious about growth.
            </motion.h1>
            <motion.p variants={fadeUp} className="max-w-xl"
              style={{ fontFamily: T.display, fontSize: "18px", color: GRY, lineHeight: 1.5 }}>
              If you run a service business and your digital presence doesn't reflect the quality of your work — we fix that.
            </motion.p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <img src={imgPortrait} alt="" className="absolute inset-0 w-full h-full object-cover" />
          </motion.div>
        </div>
      </header>

      <main className="flex-1">
        {/* Industries */}
        <section className="relative w-full py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-8 items-center text-center">
            <motion.p initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp}
              style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              Industries we serve
            </motion.p>
            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
              className="flex flex-wrap gap-3 justify-center">
              {INDUSTRIES.map((ind) => (
                <motion.span key={ind} variants={fadeUp}
                  className="px-5 py-3 rounded-full"
                  style={{ border: `1.5px solid ${GRN}`, fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: GRN }}>
                  {ind}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="relative w-full py-16 md:py-20 px-6 md:px-10" style={{ background: BGS }}>
          <div className="max-w-6xl mx-auto flex flex-col gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="text-center flex flex-col gap-3 items-center">
              <motion.h2 variants={fadeUp} className="leading-none"
                style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", color: GRN, letterSpacing: "-1.2px" }}>
                What we believe.
              </motion.h2>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="grid md:grid-cols-3 gap-4">
              {VALUES.map((v) => (
                <motion.div key={v.title} variants={fadeUp} className="bg-white flex flex-col gap-3 p-8 rounded-2xl" style={{ border: `1px solid ${BDR}` }}>
                  <h3 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "20px", color: GRN, letterSpacing: "-0.4px", lineHeight: 1.2 }}>
                    {v.title}
                  </h3>
                  <p style={{ fontFamily: T.serif, fontSize: "17px", color: GRY, letterSpacing: "-0.04em", lineHeight: 1.5 }}>
                    {v.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* How we work */}
        <section className="relative w-full py-16 md:py-20 px-6 md:px-10">
          <div className="max-w-4xl mx-auto flex flex-col gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="flex flex-col gap-3">
              <motion.h2 variants={fadeUp} className="leading-none"
                style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", color: GRN, letterSpacing: "-1.2px" }}>
                How we work.
              </motion.h2>
              <motion.p variants={fadeUp} style={{ fontFamily: T.serif, fontSize: "18px", color: GRY, lineHeight: 1.6, letterSpacing: "-0.04em" }}>
                One partner, one plan — instead of five vendors and zero visibility. Every engagement starts the same way, then adapts to what your business needs.
              </motion.p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="flex flex-col">
              {[
                { step: "Phase 1", title: "Starter Build — one-time", desc: "Website setup, Google Business Profile, social profile optimization, and initial SEO configuration. Scoped and fixed before work begins." },
                { step: "Phase 2", title: "Monthly Management", desc: "Choose a flat monthly plan — Basic, Standard, or Growth — and we run your digital operation from there. 4-month minimum, then month-to-month." },
              ].map((s, i, arr) => (
                <motion.div key={s.step} variants={fadeUp} className="flex flex-col gap-2 py-6"
                  style={{ borderTop: `1px solid ${BDR}`, ...(i === arr.length - 1 ? { borderBottom: `1px solid ${BDR}` } : {}) }}>
                  <span style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.step}</span>
                  <h3 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "20px", color: GRN, letterSpacing: "-0.4px" }}>{s.title}</h3>
                  <p style={{ fontFamily: T.serif, fontSize: "17px", color: GRY, lineHeight: 1.6, letterSpacing: "-0.02em" }}>{s.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-2">
              <Link to="/services"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 hover:opacity-85 transition-opacity"
                style={{ background: GRN, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: "#fff" }}>
                <span className="w-1 h-1 rounded-full bg-white inline-block shrink-0" />
                See What We Do
              </Link>
              <Link to="/#pricing"
                className="inline-flex items-center justify-center px-6 py-4 hover:opacity-70 transition-opacity"
                style={{ border: `1.5px solid ${GRN}`, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: GRN }}>
                View Pricing →
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative w-full py-20 md:py-28 px-6 md:px-10" style={{ background: GRN }}>
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
            <motion.h2 initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp}
              className="leading-none"
              style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", color: YLW, letterSpacing: "-1.2px" }}>
              Let's see if we're a fit.
            </motion.h2>
            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp}>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 hover:opacity-85 transition-opacity"
                style={{ background: YLW, fontFamily: T.mono, fontSize: "14px", fontWeight: 700, color: GRN }}>
                Book a Free Audit Call →
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
