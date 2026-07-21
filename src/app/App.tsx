import { useEffect } from "react";
import { HashRouter, Routes, Route, Link } from "react-router";
import { motion } from "motion/react";
import { JournalPage } from "./components/JournalPage";
import { ArticlePage } from "./components/ArticlePage";
import { ServicesPage } from "./components/ServicesPage";
import { AboutPage } from "./components/AboutPage";
import { ContactPage } from "./components/ContactPage";
import { SiteNav, BOOKING_URL } from "./components/SiteNav";
import { SiteFooter } from "./components/SiteFooter";
import { ContactForm } from "./components/ContactForm";

// Figma assets
import svgPaths from "../imports/UnnamedComponent/svg-7nkmr6yfuj";
import imgValuesSection from "../imports/UnnamedComponent/f91eaf332ee4a10ec058e6549729f23bc19d84bf.png";
import imgArticle1 from "../imports/UnnamedComponent/bdb30674ad958933f85288ea31822252e1a378d0.png";
import imgArticle2 from "../imports/UnnamedComponent/2b1a9f5d4045456ed370a4a05c8bf47cdc6d24e5.png";
import imgArticle3 from "../imports/UnnamedComponent/92bc57b6c6836a6befe8825fe9548237096b97fe.png";

// ─── Design tokens ────────────────────────────────────────────────────────────
const GRN = "#104101";
const YLW = "#fdff4a";
const GRY = "#6c6c6c";
const BDR = "#dbe0ec";
const BGS = "#f6f8fb"; // section bg

// ─── Typography helpers ───────────────────────────────────────────────────────
const T = {
  serif: "'Source Serif 4', serif",
  display: "'Radio Canada Big', sans-serif",
  mono: "'Geist Mono', monospace",
};

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const viewOpts = { once: true, margin: "-80px" };

// ─── Reusable button components ───────────────────────────────────────────────
// href starting with "/" routes via react-router; "http(s)://" opens in a new
// tab (external, e.g. the booking link); anything else (e.g. "#contact")
// stays a plain same-page anchor.
function BtnPrimary({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = "inline-flex items-center justify-center gap-2 px-6 py-4 hover:opacity-85 transition-opacity";
  const style = { background: GRN, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: "#fff" };
  const content = (
    <>
      <span className="w-1 h-1 rounded-full bg-white inline-block shrink-0" />
      {children}
    </>
  );
  if (href.startsWith("/")) return <Link to={href} className={cls} style={style}>{content}</Link>;
  const external = href.startsWith("http");
  return (
    <a href={href} className={cls} style={style} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {content}
    </a>
  );
}

function BtnOutline({ href, children }: { href: string; children: React.ReactNode }) {
  const cls = "inline-flex items-center justify-center px-6 py-4 hover:opacity-70 transition-opacity";
  const style = { border: `1.5px solid ${GRN}`, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: GRN };
  if (href.startsWith("/")) return <Link to={href} className={cls} style={style}>{children} →</Link>;
  const external = href.startsWith("http");
  return (
    <a href={href} className={cls} style={style} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children} →
    </a>
  );
}

// ─── Section header helper ────────────────────────────────────────────────────
function SectionHeader({ kicker, heading, sub, center = true }: { kicker: string; heading: string; sub?: string; center?: boolean }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
      className={`flex flex-col gap-3 ${center ? "items-center text-center" : "items-start"}`}>
      
      <motion.h2 variants={fadeUp} className="max-w-2xl leading-none"
        style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", color: GRN, letterSpacing: "-1.2px" }}>
        {heading}
      </motion.h2>
      {sub && (
        <motion.p variants={fadeUp} className="max-w-xl"
          style={{ fontFamily: T.serif, fontSize: "18px", color: GRY, lineHeight: 1.6, letterSpacing: "-0.04em" }}>
          {sub}
        </motion.p>
      )}
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <div id="home" className="flex flex-col items-start relative w-full" data-name="Intro + Features section">
      <div className="absolute bg-gradient-to-b from-[#a8d3ff] to-[#fff4df] pointer-events-none"
        style={{ inset: "0 0 65.24% 0" }} data-name="Gradient background" />

      {/* Hero header */}
      <header className="relative w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-8 items-center pt-44 pb-16 px-6 md:px-10 w-full max-w-6xl mx-auto">
            <motion.div className="max-w-2xl w-full flex flex-col items-center gap-6 text-center"
              initial="hidden" animate="visible" variants={stagger}>

              {/* Badge */}
              

              {/* Headline */}
              <motion.h1 variants={fadeUp} className="leading-none"
                style={{ fontFamily: T.serif, fontSize: "clamp(48px,10vw,72px)", color: GRN, letterSpacing: "-0.04em" }}>
                Digital operations,<br />built for business.
              </motion.h1>

              {/* Body */}
              <motion.p variants={fadeUp}
                style={{ fontFamily: T.display, fontSize: "18px", color: GRN, letterSpacing: "-0.02em", lineHeight: 1.5 }}>
                We build, manage, and grow your entire digital presence — websites, marketing, software, and strategy — so you can focus on running your business.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <BtnPrimary href={BOOKING_URL}>Request a Free Audit</BtnPrimary>
                <BtnOutline href="/services">Explore Services</BtnOutline>
              </motion.div>
            </motion.div>

            {/* Dashboard iframe */}
            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp}
              className="w-full max-w-5xl aspect-[1008/656] relative overflow-hidden rounded-2xl shadow-2xl bg-white mt-4">
              <iframe src="https://visiwiseoptimization-us.github.io/Display-dash/"
                className="absolute inset-0 w-full h-full border-none"
                title="VisiWise Dashboard Preview" scrolling="no" />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Framework 001–004 */}
      <main id="framework" className="relative w-full" tabIndex={-1}>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-10 items-center px-6 md:px-10 py-20 md:py-28 w-full max-w-6xl mx-auto">
            <SectionHeader
              kicker="One partner, one plan"
              heading="Everything you need to build, run, and grow your business"
              sub="Instead of five vendors and zero visibility." />

            <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
              className="w-full max-w-3xl">
              {[
                { num: "001", label: "Build", desc: "Custom websites and digital assets designed around how your business actually operates." },
                { num: "002", label: "Manage", desc: "Software and infrastructure that keeps your operations organized, fast, and always online." },
                { num: "003", label: "Grow", desc: "SEO and marketing campaigns engineered to increase visibility and bring in qualified leads." },
                { num: "004", label: "Optimize", desc: "KPI analysis and reporting so every decision is backed by data, not guesswork.", last: true },
              ].map((item) => (
                <motion.div key={item.num} variants={fadeUp} className="flex flex-col gap-3 py-5"
                  style={{ borderTop: `1px solid ${BDR}`, ...(item.last ? { borderBottom: `1px solid ${BDR}` } : {}) }}>
                  <div className="flex justify-between items-center">
                    <span style={{ fontFamily: T.display, fontWeight: 500, fontSize: "20px", color: GRN, letterSpacing: "-0.4px" }}>
                      {item.label}
                    </span>
                    <span style={{ fontFamily: T.mono, fontSize: "13px", color: GRY }}>{item.num}</span>
                  </div>
                  <p style={{ fontFamily: T.serif, fontSize: "18px", color: GRN, letterSpacing: "-0.04em", lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
              <motion.div variants={fadeUp} className="mt-6">
                <BtnPrimary href="/services">Explore Services</BtnPrimary>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Services Overview ────────────────────────────────────────────────────────
function ServicesOverview() {
  const services = [
    {
      tag: "01 / Marketing",
      title: "Full Digital Marketing",
      desc: "Social media management, email campaigns, Google Business Profile, and monthly reporting — all handled. Your brand shows up consistently everywhere your clients are looking.",
    },
    {
      tag: "02 / Insights",
      title: "Analysis & Reporting",
      desc: "We track your website traffic, keyword rankings, social reach, and lead growth — then translate it into plain-English reports you can act on immediately.",
    },
    {
      tag: "03 / Software",
      title: "Software Solutions",
      desc: "We set up and manage the tools that run your business — starting with project management software and expanding as your needs grow.",
    },
  ];

  return (
    <section id="services-overview" className="relative w-full py-20 md:py-28 px-6 md:px-10" style={{ background: BGS }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader kicker="What we do" heading="Three ways we work with you." />

        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
          className="grid md:grid-cols-3 gap-5">
          {services.map((s) => (
            <motion.div key={s.title} variants={fadeUp}
              className="flex flex-col gap-5 p-8 rounded-2xl bg-white hover:-translate-y-1 transition-transform"
              style={{ border: `1px solid ${BDR}` }}>
              <span style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                {s.tag}
              </span>
              <h3 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "22px", color: GRN, letterSpacing: "-0.4px" }}>
                {s.title}
              </h3>
              <p style={{ fontFamily: T.serif, fontSize: "17px", color: GRY, lineHeight: 1.6, letterSpacing: "-0.02em", flex: 1 }}>
                {s.desc}
              </p>
              <Link to="/services"
                className="flex items-center gap-1 hover:gap-2 transition-all"
                style={{ fontFamily: T.mono, fontSize: "13px", fontWeight: 500, color: GRN }}>
                Learn more →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$150",
      popular: false,
      cta: "outline",
      features: ["Website hosting & maintenance", "Google Business Profile updates", "Monthly performance report", "Email support — 48-hr response"],
    },
    {
      name: "Standard",
      price: "$300",
      popular: true,
      cta: "primary",
      features: ["Everything in Basic", "Social media posting — 3×/week, 3 platforms", "Monthly email newsletter", "LinkedIn content — 4 posts/month", "Priority support — 24-hr response"],
    },
    {
      name: "Growth",
      price: "$500",
      popular: false,
      cta: "outline",
      features: ["Everything in Standard", "Active SEO management", "LinkedIn automation & outreach", "Landing page updates", "Bi-weekly strategy check-in"],
    },
  ];

  return (
    <section id="pricing" className="relative w-full py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          kicker="Pricing"
          heading="Start for $299. Stay for the results."
          sub="One starter fee gets your digital foundation built. Then choose a flat monthly management plan — 4-month contracts, no surprises." />

        {/* Phase 1 banner */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-8 rounded-2xl"
          style={{ background: GRN }}>
          <div className="flex flex-col gap-1">
            <span style={{ fontFamily: T.mono, fontSize: "12px", color: YLW, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Phase 1 — Starter Build · One-Time
            </span>
            <span style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(32px,6vw,48px)", color: YLW, letterSpacing: "-2px" }}>
              $299
            </span>
          </div>
          <p className="max-w-md" style={{ fontFamily: T.serif, fontSize: "16px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6 }}>
            Website setup · Google Business Profile · Social profile optimization · Initial SEO configuration. Scoped and fixed before work begins — no surprises.
          </p>
        </motion.div>

        <motion.p initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp}
          className="text-center"
          style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Phase 2 — Monthly Management Plans
        </motion.p>

        {/* Plan cards */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
          className="grid md:grid-cols-3 gap-5">
          {plans.map((p) => (
            <motion.div key={p.name} variants={fadeUp}
              className="flex flex-col gap-6 p-8 rounded-2xl relative"
              style={{ background: p.popular ? GRN : "#fff", border: p.popular ? "none" : `1.5px solid ${BDR}` }}>
              {p.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full"
                  style={{ background: YLW, color: GRN, fontFamily: T.mono, fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", whiteSpace: "nowrap" }}>
                  MOST POPULAR
                </span>
              )}
              <div className="flex flex-col gap-1">
                <span style={{ fontFamily: T.display, fontWeight: 500, fontSize: "18px", color: p.popular ? YLW : GRN }}>
                  {p.name}
                </span>
                <div className="flex items-baseline gap-1">
                  <span style={{ fontFamily: T.display, fontWeight: 500, fontSize: "40px", color: p.popular ? "#fff" : GRN, letterSpacing: "-2px" }}>
                    {p.price}
                  </span>
                  <span style={{ fontFamily: T.mono, fontSize: "13px", color: p.popular ? "rgba(255,255,255,0.55)" : GRY }}>/month</span>
                </div>
              </div>
              <ul className="flex flex-col gap-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2"
                    style={{ fontFamily: T.serif, fontSize: "15px", color: p.popular ? "rgba(255,255,255,0.85)" : GRY, lineHeight: 1.5 }}>
                    <span style={{ color: p.popular ? YLW : GRN, flexShrink: 0, marginTop: "2px" }}>✦</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact"
                className="flex items-center justify-center py-3 mt-2 hover:opacity-85 transition-opacity"
                style={{
                  background: p.popular ? YLW : "transparent",
                  border: p.popular ? "none" : `1.5px solid ${GRN}`,
                  fontFamily: T.mono, fontSize: "14px", fontWeight: 500,
                  color: p.popular ? GRN : GRN,
                }}>
                {p.cta === "primary" ? "Get Started" : "Get Started →"}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.p initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeIn}
          className="text-center max-w-xl mx-auto"
          style={{ fontFamily: T.serif, fontSize: "14px", color: GRY, lineHeight: 1.6, letterSpacing: "-0.02em" }}>
          All management plans run on 4-month minimum contracts. After the initial term, continue month-to-month or lock in a new term at the same rate.
        </motion.p>
      </div>
    </section>
  );
}

// ─── Who We Serve ─────────────────────────────────────────────────────────────
function WhoWeServe() {
  const industries = ["Law Firms", "Healthcare Practices", "Real Estate", "Financial Services", "Construction & Trades", "Consulting & Coaching"];

  return (
    <section id="about" className="relative w-full py-20 md:py-28 px-6 md:px-10" style={{ background: BGS }}>
      <div className="max-w-4xl mx-auto flex flex-col gap-10 items-center text-center">
        <SectionHeader
          kicker="Who we work with"
          heading="Built for service businesses serious about growth."
          sub="If you run a service business and your digital presence doesn't reflect the quality of your work — we fix that." />

        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
          className="flex flex-wrap gap-3 justify-center">
          {industries.map((ind) => (
            <motion.span key={ind} variants={fadeUp}
              className="px-5 py-3 rounded-full"
              style={{ border: `1.5px solid ${GRN}`, fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: GRN }}>
              {ind}
            </motion.span>
          ))}
        </motion.div>
        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp}>
          <Link to="/about"
            className="flex items-center gap-1 hover:gap-2 transition-all"
            style={{ fontFamily: T.mono, fontSize: "13px", fontWeight: 500, color: GRN }}>
            Learn more about us →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Values ───────────────────────────────────────────────────────────────────
function ValuesSection() {
  const values = [
    { svgKey: "p2f47c500", title: "Clarity over complexity", desc: "Every report, recommendation, and invoice is in plain English. You should always know what we did, what it means, and what's coming next." },
    { svgKey: "p3fda6f00", title: "Results before retention", desc: "We earn your continued business by showing measurable results — not by burying you in confusing contracts. Our 4-month minimum exists to give strategies time to work." },
    { svgKey: "pefe24c0", title: "One team, full ownership", desc: "We don't outsource your work to anonymous freelancers and mark it up. Everything VisiWise delivers, VisiWise builds. One accountable point of contact, always." },
  ];

  return (
    <section className="relative w-full py-20 md:py-28" data-name="Values section">
      <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgValuesSection} />
      <div className="relative flex flex-col items-center px-6 md:px-10 gap-12 max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
          className="text-center" style={{ color: GRN }}>
          <motion.h2 variants={fadeUp} className="leading-none block"
            style={{ fontFamily: T.serif, fontSize: "clamp(40px,8vw,80px)", letterSpacing: "-3.2px" }}>
            Built for clarity
          </motion.h2>
          <motion.h2 variants={fadeUp} className="leading-none block"
            style={{ fontFamily: T.display, fontWeight: 400, fontSize: "clamp(40px,8vw,80px)", letterSpacing: "-4px" }}>
            Designed for action
          </motion.h2>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
          className="grid md:grid-cols-3 gap-4 w-full">
          {values.map((v) => (
            <motion.div key={v.title} variants={fadeUp}
              className="bg-white flex flex-col gap-6 p-10 rounded-2xl">
              <div className="relative shrink-0 size-[42px]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
                  <path d={(svgPaths as any)[v.svgKey]} fill={GRN} />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "20px", color: GRN, letterSpacing: "-0.4px", lineHeight: 1.2 }}>
                  {v.title}
                </h3>
                <p style={{ fontFamily: T.serif, fontSize: "17px", color: GRN, letterSpacing: "-0.04em", lineHeight: 1.5 }}>
                  {v.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Journal (homepage preview) ───────────────────────────────────────────────
function Journal() {
  const articles = [
    { img: imgArticle1, slug: "small-business-online-visibility", tag: "Strategy", time: "7 min", title: "Why 55% of Small Businesses Struggle to Get Clients Online — And What Actually Works" },
    { img: imgArticle2, slug: "digital-tools-service-business", tag: "Tools", time: "5 min", title: "The 6 Digital Tools Every Service Business Actually Needs" },
    { img: imgArticle3, slug: "website-costing-you-clients", tag: "Marketing", time: "6 min", title: "What Your Website Is Costing You Every Month" },
  ];

  return (
    <section id="journal" className="relative w-full py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <SectionHeader
          kicker="The VisiWise Journal"
          heading="Insights for business owners who want to grow smarter."
          sub="Practical guides, industry data, and strategic thinking — no fluff." />

        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
          className="flex flex-col">
          {articles.map((a, i) => (
            <motion.article key={a.title} variants={fadeUp}>
              <Link to={`/journal/${a.slug}`}
                className="flex items-start gap-6 py-6 hover:opacity-80 transition-opacity"
                style={{ borderTop: `1px solid ${BDR}`, ...(i === articles.length - 1 ? { borderBottom: `1px solid ${BDR}` } : {}), display: "flex" }}>
                <div className="relative w-36 h-24 shrink-0 overflow-hidden rounded-lg">
                  <img src={a.img} alt={a.title} className="absolute inset-0 w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 min-w-0 pt-1">
                  <p style={{ fontFamily: T.display, fontWeight: 500, fontSize: "18px", color: GRN, letterSpacing: "-0.4px", lineHeight: 1.3 }}>
                    {a.title}
                  </p>
                  <div className="flex items-center gap-2" style={{ fontFamily: T.mono, fontSize: "13px", color: GRY }}>
                    <span>{a.tag}</span><span>·</span><span>{a.time} read</span>
                  </div>
                  <span style={{ fontFamily: T.mono, fontSize: "13px", fontWeight: 500, color: GRN }}>Read →</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp}
          className="flex items-center gap-4">
          <Link to="/journal"
            className="inline-flex items-center justify-center px-6 py-4 hover:opacity-70 transition-opacity"
            style={{ border: `1.5px solid ${GRN}`, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: GRN }}>
            View All Articles →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────

// SVG icons for info strip — official brand shapes
function IconEmail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={GRN} strokeWidth="1.5"/>
      <path d="M2 7l10 7 10-7" stroke={GRN} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconLinkedIn() {
  return (
    // Official LinkedIn "in" logomark shape
    <svg width="20" height="20" viewBox="0 0 24 24" fill={GRN}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function IconInstagram() {
  return (
    // Official Instagram camera logomark shape
    <svg width="20" height="20" viewBox="0 0 24 24" fill={GRN}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative w-full py-20 md:py-28 px-6 md:px-10" style={{ background: BGS }}>
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        <SectionHeader
          kicker="Get in touch"
          heading="Let's talk about your digital operation."
          sub="Whether you're ready to start or just want to understand your options — no pressure, no pitch." />

        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
          className="grid md:grid-cols-2 gap-10">

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
                <li key={item} className="flex items-start gap-3"
                  style={{ fontFamily: T.serif, fontSize: "16px", color: GRN, lineHeight: 1.5 }}>
                  <span style={{ color: GRN, flexShrink: 0, marginTop: "3px" }}>✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <BtnPrimary href={BOOKING_URL}>Schedule a Free Audit Call</BtnPrimary>
            <div className="flex items-center gap-4">
              <div style={{ flex: 1, height: "1px", background: BDR }} />
              <span style={{ fontFamily: T.serif, fontSize: "14px", color: GRY }}>or send a message to</span>
              <div style={{ flex: 1, height: "1px", background: BDR }} />
            </div>
            <a href="mailto:visiwiseoptimization@gmail.com"
              style={{ fontFamily: T.mono, fontSize: "14px", color: GRN, textDecoration: "underline" }}>visiwiseoptimization@gmail.com</a>
          </motion.div>

          {/* Right — form */}
          <motion.div variants={fadeUp}
            className="flex flex-col gap-5 p-8 rounded-2xl bg-white"
            style={{ border: `1px solid ${BDR}` }}>
            <ContactForm />
          </motion.div>
        </motion.div>

        {/* Info strip — SVG icons, no emojis */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
          className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto w-full">
          {[
            { icon: <IconEmail />, label: "Email", value: "visiwiseoptimization@gmail.com" },
            { icon: <IconLinkedIn />, label: "LinkedIn", value: "linkedin.com/company/visiwise" },
            { icon: <IconInstagram />, label: "Instagram", value: "@visiwise.optimization" },
          ].map((tile) => (
            <motion.div key={tile.label} variants={fadeUp}
              className="flex flex-col gap-2 p-5 rounded-xl bg-white"
              style={{ border: `1px solid ${BDR}` }}>
              {tile.icon}
              <span style={{ fontFamily: T.mono, fontSize: "11px", color: GRY, letterSpacing: "0.08em", textTransform: "uppercase" }}>{tile.label}</span>
              <span style={{ fontFamily: T.serif, fontSize: "14px", color: GRN, lineHeight: 1.5 }}>{tile.value}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="relative w-full py-20 md:py-28 px-6 md:px-10">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 text-center">
        <SectionHeader
          kicker="Get started"
          heading="Not sure where to start?"
          sub="Book a free 30-minute digital audit. We'll look at your current presence and tell you exactly what's working, what's not, and what to fix first." />
        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3">
          <BtnPrimary href={BOOKING_URL}>Book a Free Audit</BtnPrimary>
          <BtnOutline href="/contact">Send Us a Message</BtnOutline>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Home page ────────────────────────────────────────────────────────────────
function HomePage() {
  useEffect(() => {
    document.title = "VisiWise Optimization — Digital Operations, Built for Business";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
    meta.setAttribute("content", "VisiWise Optimization helps service businesses grow with full-stack digital marketing, reporting, and software solutions. Start for $299.");
  }, []);

  return (
    <div className="bg-white flex flex-col items-center relative w-full min-h-screen">
      <SiteNav home active="/" />
      <Hero />
      <ServicesOverview />
      <Pricing />
      <WhoWeServe />
      <ValuesSection />
      <Journal />
      <Contact />
      <CTABanner />
      <SiteFooter />
    </div>
  );
}

// ─── App — router root ────────────────────────────────────────────────────────
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal/:slug" element={<ArticlePage />} />
      </Routes>
    </HashRouter>
  );
}
