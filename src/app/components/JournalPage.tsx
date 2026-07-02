import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ARTICLES } from "./articleData";
import imgLogo from "../../imports/Desktop/1461d062a4df53a899d6f6a3b764b1d786b4b24c.png";
import imgArticle1 from "../../imports/UnnamedComponent/bdb30674ad958933f85288ea31822252e1a378d0.png";
import imgArticle2 from "../../imports/UnnamedComponent/2b1a9f5d4045456ed370a4a05c8bf47cdc6d24e5.png";
import imgArticle3 from "../../imports/UnnamedComponent/92bc57b6c6836a6befe8825fe9548237096b97fe.png";
import imgFooterImage from "../../imports/UnnamedComponent/8a11dbd39aae785f584a7792193df8a4ee8851bd.png";

// ─── Design tokens ────────────────────────────────────────────────────────────
const GRN = "#104101";
const YLW = "#fdff4a";
const GRY = "#6c6c6c";
const BDR = "#dbe0ec";
const BGS = "#f6f8fb";
const T = {
  serif: "'Source Serif 4', serif",
  display: "'Radio Canada Big', sans-serif",
  mono: "'Geist Mono', monospace",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };
const viewOpts = { once: true, margin: "-60px" };

// Cycle through 3 available article images
const articleImages = [imgArticle1, imgArticle2, imgArticle3];

const CATEGORIES = ["All", "Strategy", "Marketing", "Tools", "SEO", "Industry"];

// ─── Shared Nav (journal-aware) ───────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "/" },
    { label: "Explore Services", href: "/#services-overview" },
    { label: "About", href: "/#about" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4"
      style={{ transition: "background 0.4s ease, backdrop-filter 0.4s ease", backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none", background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)" }}>
      <Link to="/">
        <img src={imgLogo} alt="VisiWise" className="h-20 w-auto object-contain"
          style={{ filter: "grayscale(1) brightness(0.45)", transition: "filter 0.4s ease" }} />
      </Link>

      <div className="hidden md:flex items-center gap-7">
        {links.map((l) =>
          l.href.startsWith("/") && !l.href.includes("#") ? (
            <Link key={l.label} to={l.href}
              className="hover:opacity-60 transition-opacity"
              style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: GRN,
                ...(l.href === "/journal" ? { textDecoration: "underline", textUnderlineOffset: "4px" } : {}) }}>
              {l.label}
            </Link>
          ) : (
            <a key={l.label} href={l.href}
              className="hover:opacity-60 transition-opacity"
              style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: GRN }}>
              {l.label}
            </a>
          )
        )}
        <Link to="/#contact"
          className="px-5 py-2.5 hover:opacity-85 transition-opacity"
          style={{ background: GRN, fontFamily: T.display, fontSize: "16px", fontWeight: 500, color: YLW }}>
          Book a Call →
        </Link>
      </div>

      <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {[0, 1, 2].map((i) => (
          <span key={i} className="block h-0.5 w-6 mb-1.5 last:mb-0 transition-all duration-300"
            style={{ background: GRN, transform: open && i === 0 ? "rotate(45deg) translate(4px,4px)" : open && i === 2 ? "rotate(-45deg) translate(4px,-4px)" : "", opacity: open && i === 1 ? 0 : 1 }} />
        ))}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 flex flex-col gap-4 px-6 py-6 shadow-lg"
          style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(32px)" }}>
          {links.map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)}
              style={{ fontFamily: T.display, fontWeight: 500, fontSize: "20px", color: GRN }}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="relative w-full" style={{ background: GRN }}>
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-8 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <img src={imgLogo} alt="VisiWise" className="h-40 w-auto object-contain object-left self-start"
              style={{ filter: "brightness(0) invert(1)" }} />
            <p style={{ fontFamily: T.serif, fontSize: "17px", color: "rgba(255,255,255,0.7)", letterSpacing: "-0.04em" }}>
              Digital Operations, Built for Business.
            </p>
            <p style={{ fontFamily: T.mono, fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Serving clients across the US</p>
          </div>
          <div className="flex flex-col gap-3 items-start md:items-end">
            <Link to="/#contact"
              className="inline-flex items-center gap-2 px-5 py-3 hover:opacity-85 transition-opacity"
              style={{ background: YLW, fontFamily: T.mono, fontSize: "14px", fontWeight: 700, color: GRN }}>
              Book a Free Audit →
            </Link>
            <a href="mailto:visiwiseoptimization@gmail.com"
              style={{ fontFamily: T.mono, fontSize: "13px", color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>
              visiwiseoptimization@gmail.com
            </a>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <span style={{ fontFamily: T.mono, fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Services</span>
            {["Full Digital Marketing", "Analysis & Reporting", "Software Solutions"].map((l) => (
              <Link key={l} to="/#services-overview" className="hover:opacity-60 transition-opacity w-fit"
                style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: YLW }}>{l}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span style={{ fontFamily: T.mono, fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Company</span>
            {[{ label: "About", href: "/#about" }, { label: "Journal", href: "/journal" }, { label: "Contact", href: "/#contact" }].map((l) => (
              <a key={l.label} href={l.href} className="hover:opacity-60 transition-opacity w-fit"
                style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: YLW }}>{l.label}</a>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
          <div className="flex items-center gap-5">
            {[
              { label: "LinkedIn", href: "https://linkedin.com/company/visiwise", path: <><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill={GRN}/></> },
              { label: "Instagram", href: "https://instagram.com/visiwise.optimization", path: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill={GRN}/> },
            ].map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="hover:opacity-60 transition-opacity">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                  <rect width="24" height="24" rx="4" fill={YLW}/>{s.path}
                </svg>
              </a>
            ))}
          </div>
          <p style={{ fontFamily: T.mono, fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
            © 2026 VisiWise Optimization LLC · All rights reserved
          </p>
        </div>

        <div aria-hidden className="h-20 mix-blend-luminosity opacity-15 relative w-full">
          <img alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" src={imgFooterImage} />
        </div>
      </div>
    </footer>
  );
}

// ─── Journal Page ─────────────────────────────────────────────────────────────
export function JournalPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // SEO
  useEffect(() => {
    document.title = "VisiWise Journal — Digital Marketing Insights for Service Businesses";
    window.scrollTo(0, 0);
  }, []);

  const featured = ARTICLES[0];
  const rest = ARTICLES.slice(1);

  const filtered = activeCategory === "All"
    ? rest
    : rest.filter((a) => a.category === activeCategory);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Nav />

      {/* Page header */}
      <header className="relative w-full pt-36 pb-12 px-6 md:px-10" style={{ background: BGS }}>
        <div className="max-w-6xl mx-auto flex flex-col gap-4">
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.1em" }}>
            The VisiWise Journal
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="leading-none"
            style={{ fontFamily: T.serif, fontSize: "clamp(36px,6vw,64px)", color: GRN, letterSpacing: "-0.04em" }}>
            Insights for business owners<br />who want to grow smarter.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontFamily: T.display, fontSize: "18px", color: GRY, lineHeight: 1.5 }}>
            No fluff — just what actually works. Published for the owners doing the work.
          </motion.p>
        </div>
        <div className="max-w-6xl mx-auto mt-10" style={{ borderBottom: `1px solid ${BDR}` }} />
      </header>

      {/* Category filter */}
      <div className="sticky top-[72px] z-40 w-full px-6 md:px-10 py-4" style={{ background: "rgba(246,248,251,0.95)", backdropFilter: "blur(16px)", borderBottom: `1px solid ${BDR}` }}>
        <div className="max-w-6xl mx-auto flex items-center gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className="px-4 py-1.5 rounded-full transition-all"
              style={{
                background: activeCategory === cat ? GRN : "transparent",
                border: `1.5px solid ${activeCategory === cat ? GRN : BDR}`,
                fontFamily: T.mono, fontSize: "13px", fontWeight: 500,
                color: activeCategory === cat ? "#fff" : GRY,
              }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 px-6 md:px-10 py-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-14">

          {/* Featured article */}
          {activeCategory === "All" && (
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p variants={fadeUp}
                style={{ fontFamily: T.mono, fontSize: "11px", color: GRY, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
                Featured
              </motion.p>
              <Link to={`/journal/${featured.slug}`}>
                <motion.article variants={fadeUp}
                  className="flex flex-col md:flex-row overflow-hidden rounded-2xl hover:shadow-lg transition-shadow"
                  style={{ border: `1px solid ${BDR}` }}>
                  {/* Image */}
                  <div className="md:w-[55%] relative min-h-[280px] md:min-h-[380px] shrink-0 overflow-hidden">
                    <img src={articleImages[0]} alt={featured.title}
                      className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  {/* Content */}
                  <div className="flex flex-col gap-5 p-8 md:p-12 flex-1 justify-center">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full"
                        style={{ background: GRN, fontFamily: T.mono, fontSize: "11px", color: "#fff", letterSpacing: "0.06em" }}>
                        Featured · {featured.category}
                      </span>
                    </div>
                    <p style={{ fontFamily: T.mono, fontSize: "13px", color: GRY }}>{featured.date} · {featured.readTime} read</p>
                    <h2 className="leading-tight"
                      style={{ fontFamily: T.serif, fontSize: "clamp(22px,3vw,32px)", color: GRN, letterSpacing: "-0.04em" }}>
                      {featured.title}
                    </h2>
                    <p style={{ fontFamily: T.serif, fontSize: "17px", color: GRY, lineHeight: 1.6, letterSpacing: "-0.02em" }}>
                      {featured.teaser}
                    </p>
                    <span className="flex items-center gap-1 group"
                      style={{ fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: GRN }}>
                      Read the article
                      <span className="group-hover:ml-1 transition-all"> →</span>
                    </span>
                  </div>
                </motion.article>
              </Link>
            </motion.div>
          )}

          {/* Article list */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={stagger}
            className="flex flex-col">
            {filtered.map((article, i) => (
              <motion.div key={article.slug} variants={fadeUp}>
                <Link to={`/journal/${article.slug}`}>
                  <article className="flex items-start gap-6 py-7 hover:opacity-80 transition-opacity"
                    style={{ borderTop: `1px solid ${BDR}`, ...(i === filtered.length - 1 ? { borderBottom: `1px solid ${BDR}` } : {}) }}>
                    <div className="relative w-44 shrink-0 overflow-hidden rounded-lg"
                      style={{ aspectRatio: "4/3" }}>
                      <img src={articleImages[i % 3]} alt={article.title}
                        className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-2 min-w-0 py-1">
                      <span className="px-2.5 py-0.5 rounded-full w-fit"
                        style={{ background: BGS, border: `1px solid ${BDR}`, fontFamily: T.mono, fontSize: "11px", color: GRY, letterSpacing: "0.06em" }}>
                        {article.category}
                      </span>
                      <h3 className="leading-snug"
                        style={{ fontFamily: T.display, fontWeight: 500, fontSize: "18px", color: GRN, letterSpacing: "-0.4px" }}>
                        {article.title}
                      </h3>
                      <p style={{ fontFamily: T.serif, fontSize: "15px", color: GRY, lineHeight: 1.5, letterSpacing: "-0.02em" }}>
                        {article.teaser}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span style={{ fontFamily: T.mono, fontSize: "13px", color: GRY }}>{article.readTime} read · {article.date}</span>
                        <span style={{ fontFamily: T.mono, fontSize: "13px", fontWeight: 500, color: GRN }}>Read →</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter CTA */}
          <motion.div initial="hidden" whileInView="visible" viewport={viewOpts} variants={fadeUp}
            className="flex flex-col items-center gap-5 p-10 md:p-14 rounded-2xl text-center"
            style={{ background: BGS, border: `1px solid ${BDR}` }}>
            <p style={{ fontFamily: T.mono, fontSize: "12px", color: GRY, letterSpacing: "0.1em", textTransform: "uppercase" }}>Stay sharp</p>
            <h2 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(24px,4vw,36px)", color: GRN, letterSpacing: "-1px" }}>
              Get insights before they're published.
            </h2>
            <p style={{ fontFamily: T.serif, fontSize: "17px", color: GRY, maxWidth: "480px", lineHeight: 1.6 }}>
              Join business owners who read VisiWise weekly — strategy, tools, and market data. No spam. One email a week.
            </p>
            {subscribed ? (
              <p style={{ fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: GRN }}>
                You're in. Watch your inbox.
              </p>
            ) : (
              <form className="flex flex-col sm:flex-row gap-2 w-full max-w-md"
                onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}>
                <input type="email" required placeholder="your@email.com" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full outline-none"
                  style={{ border: `1.5px solid ${BDR}`, fontFamily: T.mono, fontSize: "14px", color: GRN }} />
                <button type="submit"
                  className="px-6 py-3 rounded-full hover:opacity-85 transition-opacity"
                  style={{ background: GRN, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: "#fff", whiteSpace: "nowrap" }}>
                  Subscribe →
                </button>
              </form>
            )}
            <p style={{ fontFamily: T.mono, fontSize: "12px", color: GRY }}>We respect your inbox. Unsubscribe anytime.</p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
