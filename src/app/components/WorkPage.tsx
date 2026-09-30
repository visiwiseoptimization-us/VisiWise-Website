import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { SiteNav, GRN, YLW, GRY, BDR, BGS, T, BOOKING_URL } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import imgLintHome from "../../imports/work/lintaway-home.jpg";
import imgLintGuides from "../../imports/work/lintaway-guides.jpg";
import imgGmmHome from "../../imports/work/gmm-home.jpg";
import imgGmmExtension from "../../imports/work/gmm-extension.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const viewOpts = { once: true, margin: "-60px" };

type Shot = { img: string; alt: string; caption: string };

type CaseStudy = {
  id: string;
  client: string;
  category: string;
  place: string;
  url: string;
  urlLabel: string;
  lede: string;
  challenge: string;
  built: string[];
  highlights: { title: string; desc: string }[];
  services: string;
  tags: string[];
  shots: Shot[];
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "lint-away-duct-cleaning",
    client: "Lint Away Duct Cleaning",
    category: "Local service business",
    place: "Phoenix, AZ",
    url: "https://lintawayductcleaning.com/",
    urlLabel: "lintawayductcleaning.com",
    lede: "A no-storefront business built to be found. We redesigned Lint Away's site and rebuilt it on a fast modern stack, then added 50 city and service pages, full schema markup and AI-search readiness. Every quote request lands straight in the owner's inbox.",
    challenge:
      "Lint Away is a service-area business with no storefront, so it has no Google Maps pin to lean on. The old WordPress site was slow to change and had migration problems. They needed to show up in local search, and in AI answer engines, for every city they drive to.",
    built: [
      "A full frontend redesign around their brand: headline \"Your Home Deserves Clean Air. Not Hidden Gunk.\", their mascot Big Clumpy, van imagery and embedded job videos.",
      "A new Next.js and Supabase site hosted on Vercel, with a clean DNS cutover that left their Microsoft 365 email untouched.",
      "A location-page system: 8 city pages plus city × service pages. The sitemap now lists 50 pages.",
      "Schema markup that tells Google exactly what they are: HVACBusiness, 4 service entries, 40 served cities, FAQ, opening hours, credentials.",
      "An llms.txt file so AI assistants describe the business accurately.",
      "A quote form that emails leads straight to the owner, with a privacy line: \"No lists, no resale.\"",
      "Monthly SEO articles — 19 guides so far — targeting city-level and commercial searches.",
    ],
    highlights: [
      { title: "Ranks without a storefront", desc: "Geo pages and service-area schema do the work a Maps pin normally does." },
      { title: "Ready for AI search", desc: "Structured data plus llms.txt make the business easy for answer engines to quote." },
      { title: "Trust up front", desc: "4.9★ from 222 Google reviews, NADCA membership and camera-inspected cleans sit above the fold." },
      { title: "Built to convert", desc: "Free-estimate CTAs, click-to-call, and a short five-field quote form." },
      { title: "Content engine", desc: "A steady monthly publishing rhythm aimed at residential and commercial buyers." },
    ],
    services: "Build (design and development) · Grow (SEO, content, AI search) · Manage (hosting, DNS, ongoing updates)",
    tags: ["Next.js", "Supabase", "Vercel", "Schema.org", "llms.txt", "Local SEO"],
    shots: [
      {
        img: imgLintHome,
        alt: "Lint Away Duct Cleaning homepage with the headline Your Home Deserves Clean Air. Not Hidden Gunk.",
        caption:
          "Proof before the pitch: camera-verified cleans, a 4.9★ rating and a free-estimate button in the first screen, so a first-time visitor can trust and book without scrolling.",
      },
      {
        img: imgLintGuides,
        alt: "Lint Away guides and blog library page listing city and service guides",
        caption:
          "19 guides and counting, each answering a question customers actually search — with no storefront to rank on Maps, every guide is another door into the site.",
      },
    ],
  },
  {
    id: "green-money-momentum",
    client: "Green Money Momentum",
    category: "Creator platform",
    place: "Investor education",
    url: "https://greenmoneymomentum.com/",
    urlLabel: "greenmoneymomentum.com",
    lede: "We turned a YouTube market channel into a community platform. GMM now has weekly investor notes, a real-time chat room with host and audience views, a live market ticker and a Chrome extension that keeps the brand in viewers' browsers.",
    challenge:
      "GMM's audience lived on YouTube, a platform they don't own. They needed a home base where viewers come back between videos, talk to each other during market hours and get the weekly outlook in one place.",
    built: [
      "A branded Next.js web platform with a scrolling market ticker — SPY, QQQ, NVDA, VIX, Bitcoin, dollar index — across the top of every page.",
      "Weekly Investor Notes: a Sunday outlook with levels and catalysts, scannable in under a minute.",
      "A live investor chat room during market hours — viewers pick a name and join, no account needed, while the host posts from a separate admin view on the same multi-user system.",
      "A Chrome extension in early beta: live ticker symbols in the browser toolbar, downloadable from the site.",
      "A merch store layout for hats, tees and mugs, ready for launch.",
      "Clear YouTube calls-to-action throughout and a \"not financial advice\" disclaimer in the footer.",
    ],
    highlights: [
      { title: "From channel to community", desc: "The site gives a YouTube audience a place to gather that the creator owns." },
      { title: "Real-time features", desc: "A live chat room with separate host and audience interfaces, plus a live market ticker." },
      { title: "Beyond the website", desc: "A Chrome extension carries the brand into viewers' browsers every day." },
      { title: "Built to grow", desc: "Notes, chat, extension and merch are separate modules the client can switch on as they grow." },
    ],
    services: "Build (product design, web app, browser extension) · Manage (ongoing feature rollout)",
    tags: ["Next.js", "Real-time chat", "Chrome extension", "Market data"],
    shots: [
      {
        img: imgGmmHome,
        alt: "Green Money Momentum homepage with a live market ticker and the headline Market Movements. Making Money. Money Momentum.",
        caption:
          "SPY, QQQ and NVDA scrolling live across the top, Sunday's note one click down — the channel's own trading desk, built for investors who trade the momentum, not the noise.",
      },
      {
        img: imgGmmExtension,
        alt: "Green Money Momentum Chrome extension download page showing a watchlist of live ticker prices",
        caption:
          "A Chrome extension that puts live ticker symbols in the browser toolbar — downloadable from the site in early beta, so GMM stays on a viewer's screen all day, not just at video time.",
      },
    ],
  },
];

function CaseStudySection({ cs, index }: { cs: CaseStudy; index: number }) {
  const alt = index % 2 === 1;
  return (
    <section
      id={cs.id}
      className="relative w-full py-16 md:py-24 px-6 md:px-10 scroll-mt-24"
      style={alt ? { background: BGS } : undefined}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Heading */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="flex flex-col gap-4">
          <motion.p
            variants={fadeUp}
            style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            {`0${index + 1}`} / {cs.category} · {cs.place}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="leading-none"
            style={{ fontFamily: T.serif, fontSize: "clamp(32px,5vw,52px)", color: GRN, letterSpacing: "-0.04em" }}
          >
            {cs.client}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl"
            style={{ fontFamily: T.display, fontSize: "18px", color: GRY, lineHeight: 1.55, letterSpacing: "-0.02em" }}
          >
            {cs.lede}
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-1">
            {cs.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full"
                style={{ border: `1px solid ${BDR}`, background: "#fff", fontFamily: T.mono, fontSize: "12px", color: GRN }}
              >
                {t}
              </span>
            ))}
          </motion.div>
          <motion.a
            variants={fadeUp}
            href={cs.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:gap-2 transition-all w-fit"
            style={{ fontFamily: T.mono, fontSize: "13px", fontWeight: 500, color: GRN, textDecoration: "underline", textUnderlineOffset: "4px" }}
          >
            {cs.urlLabel} →
          </motion.a>
        </motion.div>

        {/* Screenshots with captions */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="grid md:grid-cols-2 gap-6">
          {cs.shots.map((s) => (
            <motion.figure key={s.alt} variants={fadeUp} className="flex flex-col gap-3">
              <div className="w-full overflow-hidden rounded-xl bg-white" style={{ border: `1px solid ${BDR}` }}>
                <img src={s.img} alt={s.alt} loading="lazy" className="w-full h-auto block" />
              </div>
              <figcaption
                style={{ fontFamily: T.serif, fontSize: "15px", color: GRY, lineHeight: 1.55, letterSpacing: "-0.02em" }}
              >
                {s.caption}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>

        {/* Challenge + what we built */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="grid md:grid-cols-2 gap-10">
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <span style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              The challenge
            </span>
            <p style={{ fontFamily: T.serif, fontSize: "17px", color: GRN, lineHeight: 1.6, letterSpacing: "-0.02em" }}>{cs.challenge}</p>
            <span className="mt-4" style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Services
            </span>
            <p style={{ fontFamily: T.serif, fontSize: "16px", color: GRY, lineHeight: 1.6 }}>{cs.services}</p>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <span style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              What we built
            </span>
            <ul className="flex flex-col gap-3">
              {cs.built.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2"
                  style={{ fontFamily: T.serif, fontSize: "16px", color: GRN, lineHeight: 1.55, letterSpacing: "-0.02em" }}
                >
                  <span style={{ color: GRN, flexShrink: 0, marginTop: "2px" }}>✦</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Highlights */}
        <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger} className="flex flex-col">
          {cs.highlights.map((h, i) => (
            <motion.div
              key={h.title}
              variants={fadeUp}
              className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 py-4"
              style={{
                borderTop: `1px solid ${BDR}`,
                ...(i === cs.highlights.length - 1 ? { borderBottom: `1px solid ${BDR}` } : {}),
              }}
            >
              <span
                className="md:w-56 shrink-0"
                style={{ fontFamily: T.display, fontWeight: 500, fontSize: "18px", color: GRN, letterSpacing: "-0.4px" }}
              >
                {h.title}
              </span>
              <span style={{ fontFamily: T.serif, fontSize: "17px", color: GRY, lineHeight: 1.55, letterSpacing: "-0.02em" }}>{h.desc}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function WorkPage() {
  useEffect(() => {
    document.title = "Client Work — VisiWise Optimization";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "VisiWise client work — a Phoenix duct cleaning company built to rank without a storefront, and a YouTube market channel turned into a community platform."
    );
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <SiteNav active="/work" />

      {/* Header */}
      <header className="relative w-full pt-36 pb-14 px-6 md:px-10" style={{ background: BGS }}>
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Client work
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="leading-none max-w-3xl"
            style={{ fontFamily: T.serif, fontSize: "clamp(36px,6vw,60px)", color: GRN, letterSpacing: "-0.04em" }}
          >
            Two businesses, built to be found and come back to.
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl"
            style={{ fontFamily: T.display, fontSize: "18px", color: GRY, lineHeight: 1.5 }}
          >
            Design, development, SEO and ongoing management — delivered end to end, in house.
          </motion.p>
        </div>
      </header>

      <main className="flex-1">
        {CASE_STUDIES.map((cs, i) => (
          <CaseStudySection key={cs.id} cs={cs} index={i} />
        ))}

        {/* CTA */}
        <section className="relative w-full py-20 md:py-24 px-6 md:px-10">
          <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 text-center">
            <h2
              className="leading-none"
              style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(28px,4vw,40px)", color: GRN, letterSpacing: "-1.2px" }}
            >
              Want results like this?
            </h2>
            <p className="max-w-xl" style={{ fontFamily: T.serif, fontSize: "18px", color: GRY, lineHeight: 1.6, letterSpacing: "-0.04em" }}>
              Book a free 30-minute audit and we'll walk through what your site is doing today and what we'd build first.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 hover:opacity-85 transition-opacity"
                style={{ background: GRN, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: YLW }}
              >
                Book a Free Audit →
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-4 hover:opacity-70 transition-opacity"
                style={{ border: `1.5px solid ${GRN}`, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: GRN }}
              >
                Send Us a Message →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
