import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { SiteNav, GRN, YLW, GRY, BDR, BGS, T } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const viewOpts = { once: true, margin: "-60px" };

const SERVICES = [
  {
    tag: "01 / Marketing",
    title: "Full Digital Marketing",
    intro:
      "Social media management, email campaigns, Google Business Profile, and monthly reporting — all handled. Your brand shows up consistently everywhere your clients are looking.",
    includes: [
      "Social media posting — up to 3×/week across 3 platforms",
      "Monthly email newsletter to your client list",
      "Google Business Profile updates and optimization",
      "LinkedIn content and outreach (4 posts/month, scalable to automation)",
      "Consistent brand voice and visuals across every channel",
    ],
  },
  {
    tag: "02 / Insights",
    title: "Analysis & Reporting",
    intro:
      "We track your website traffic, keyword rankings, social reach, and lead growth — then translate it into plain-English reports you can act on immediately.",
    includes: [
      "Website traffic and behavior tracking",
      "Keyword ranking monitoring for target search terms",
      "Social reach and engagement analysis",
      "Lead growth reporting tied to campaign activity",
      "Monthly performance report in plain English — what happened, what it means, what's next",
      "Live KPI dashboard access",
    ],
  },
  {
    tag: "03 / Software",
    title: "Software Solutions",
    intro:
      "We set up and manage the tools that run your business — starting with project management software and expanding as your needs grow.",
    includes: [
      "Project management software setup and configuration",
      "Ongoing management so tools stay organized and adopted, not abandoned",
      "Workflow and infrastructure recommendations as your team grows",
      "Single point of contact for support — no ticket queues",
    ],
  },
];

export function ServicesPage() {
  useEffect(() => {
    document.title = "Services — VisiWise Optimization";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <SiteNav active="/services" />

      {/* Header */}
      <header className="relative w-full pt-36 pb-16 px-6 md:px-10" style={{ background: BGS }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            What we do
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="leading-none max-w-3xl"
            style={{ fontFamily: T.serif, fontSize: "clamp(36px,6vw,64px)", color: GRN, letterSpacing: "-0.04em" }}>
            Three ways we work with you.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl"
            style={{ fontFamily: T.display, fontSize: "18px", color: GRY, lineHeight: 1.5 }}>
            One partner, one plan — instead of five vendors and zero visibility. Every engagement starts with the $299 Phase 1 build, then rolls into whichever plan fits.
          </motion.p>
        </div>
      </header>

      <main className="flex-1">
        {SERVICES.map((s, i) => (
          <section key={s.title} className="relative w-full py-16 md:py-20 px-6 md:px-10" style={{ background: i % 2 === 1 ? BGS : "#fff" }}>
            <div className="max-w-6xl mx-auto">
              <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
                className="grid md:grid-cols-2 gap-10 items-start">
                <motion.div variants={fadeUp} className="flex flex-col gap-4">
                  <span style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {s.tag}
                  </span>
                  <h2 className="leading-tight" style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(26px,4vw,36px)", color: GRN, letterSpacing: "-0.8px" }}>
                    {s.title}
                  </h2>
                  <p style={{ fontFamily: T.serif, fontSize: "18px", color: GRY, lineHeight: 1.6, letterSpacing: "-0.02em" }}>
                    {s.intro}
                  </p>
                  <div className="flex gap-3 mt-2">
                    <Link to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-6 py-4 hover:opacity-85 transition-opacity w-fit"
                      style={{ background: GRN, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: "#fff" }}>
                      <span className="w-1 h-1 rounded-full bg-white inline-block shrink-0" />
                      Talk to Us
                    </Link>
                    <Link to="/#pricing"
                      className="inline-flex items-center justify-center px-6 py-4 hover:opacity-70 transition-opacity w-fit"
                      style={{ border: `1.5px solid ${GRN}`, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: GRN }}>
                      See Pricing →
                    </Link>
                  </div>
                </motion.div>

                <motion.ul variants={fadeUp} className="flex flex-col gap-3 p-8 rounded-2xl bg-white" style={{ border: `1px solid ${BDR}` }}>
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3" style={{ fontFamily: T.serif, fontSize: "16px", color: GRN, lineHeight: 1.5 }}>
                      <span style={{ color: GRN, flexShrink: 0, marginTop: "3px" }}>✦</span>
                      {item}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="relative w-full py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="flex flex-col gap-3 items-center">
              <motion.h2 variants={fadeUp} className="leading-none"
                style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", color: GRN, letterSpacing: "-1.2px" }}>
                Not sure which service fits?
              </motion.h2>
              <motion.p variants={fadeUp} className="max-w-xl"
                style={{ fontFamily: T.serif, fontSize: "18px", color: GRY, lineHeight: 1.6, letterSpacing: "-0.04em" }}>
                Book a free 30-minute audit. We'll look at your current setup and tell you exactly what's working, what's not, and what to prioritize first.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <Link to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 hover:opacity-85 transition-opacity"
                style={{ background: GRN, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: "#fff" }}>
                <span className="w-1 h-1 rounded-full bg-white inline-block shrink-0" />
                Book a Free Audit
              </Link>
              <Link to="/about"
                className="inline-flex items-center justify-center px-6 py-4 hover:opacity-70 transition-opacity"
                style={{ border: `1.5px solid ${GRN}`, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: GRN }}>
                Learn About Us →
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
