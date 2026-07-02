import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { getArticleBySlug, getRelatedArticles, ARTICLES } from "./articleData";
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

const articleImages = [imgArticle1, imgArticle2, imgArticle3];

function getArticleImage(slug: string): string {
  const idx = ARTICLES.findIndex((a) => a.slug === slug);
  return articleImages[idx % 3];
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
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
          style={{ filter: scrolled ? "grayscale(1) brightness(0.45)" : "none", transition: "filter 0.4s ease" }} />
      </Link>
      <div className="hidden md:flex items-center gap-7">
        {links.map((l) =>
          l.href.startsWith("/") && !l.href.includes("#") ? (
            <Link key={l.label} to={l.href} className="hover:opacity-60 transition-opacity"
              style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: GRN }}>
              {l.label}
            </Link>
          ) : (
            <a key={l.label} href={l.href} className="hover:opacity-60 transition-opacity"
              style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: GRN }}>
              {l.label}
            </a>
          )
        )}
        <Link to="/#contact" className="px-5 py-2.5 hover:opacity-85 transition-opacity"
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
              style={{ fontFamily: T.display, fontWeight: 500, fontSize: "20px", color: GRN }}>{l.label}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── FAQ accordion ────────────────────────────────────────────────────────────
function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="flex flex-col">
      {faqs.map((faq, i) => (
        <div key={i} style={{ borderTop: `1px solid ${BDR}`, ...(i === faqs.length - 1 ? { borderBottom: `1px solid ${BDR}` } : {}) }}>
          <button className="w-full flex items-start justify-between gap-4 py-5 text-left"
            onClick={() => setOpen(open === i ? null : i)}>
            <span style={{ fontFamily: T.display, fontWeight: 500, fontSize: "17px", color: GRN, letterSpacing: "-0.3px" }}>
              {faq.q}
            </span>
            <span className="shrink-0 mt-1 transition-transform"
              style={{ transform: open === i ? "rotate(45deg)" : "", color: GRN, fontSize: "20px", lineHeight: 1 }}>
              +
            </span>
          </button>
          {open === i && (
            <p className="pb-5" style={{ fontFamily: T.serif, fontSize: "16px", color: GRY, lineHeight: 1.7, letterSpacing: "-0.02em" }}>
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
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
            <p style={{ fontFamily: T.serif, fontSize: "17px", color: "rgba(255,255,255,0.7)", letterSpacing: "-0.04em" }}>Digital Operations, Built for Business.</p>
            <p style={{ fontFamily: T.mono, fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>Serving clients across the US</p>
          </div>
          <div className="flex flex-col gap-3 items-start md:items-end">
            <Link to="/#contact" className="inline-flex items-center gap-2 px-5 py-3 hover:opacity-85 transition-opacity"
              style={{ background: YLW, fontFamily: T.mono, fontSize: "14px", fontWeight: 700, color: GRN }}>
              Book a Free Audit →
            </Link>
            <a href="mailto:visiwiseoptimization@gmail.com"
              style={{ fontFamily: T.mono, fontSize: "13px", color: "rgba(255,255,255,0.6)", textDecoration: "underline" }}>
              visiwiseoptimization@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
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

// ─── Article Page ─────────────────────────────────────────────────────────────
export function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const related = article ? getRelatedArticles(article) : [];

  useEffect(() => {
    if (article) {
      document.title = `${article.title} — VisiWise Journal`;
      // Inject meta description
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
      meta.setAttribute("content", article.metaDescription);
      // Inject JSON-LD BlogPosting
      const existing = document.getElementById("article-jsonld");
      if (existing) existing.remove();
      const script = document.createElement("script");
      script.id = "article-jsonld";
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: article.title,
        description: article.metaDescription,
        author: { "@type": "Organization", name: "VisiWise Optimization" },
        publisher: { "@type": "Organization", name: "VisiWise Optimization", url: "https://visiwiseoptimization.com" },
        datePublished: article.datePublished,
        url: `https://visiwiseoptimization.com/journal/${article.slug}`,
      });
      document.head.appendChild(script);
      // Inject FAQPage schema
      const existingFaq = document.getElementById("faq-jsonld");
      if (existingFaq) existingFaq.remove();
      const faqScript = document.createElement("script");
      faqScript.id = "faq-jsonld";
      faqScript.type = "application/ld+json";
      faqScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: article.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
      document.head.appendChild(faqScript);
    }
    window.scrollTo(0, 0);
    return () => {
      document.getElementById("article-jsonld")?.remove();
      document.getElementById("faq-jsonld")?.remove();
    };
  }, [slug, article]);

  if (!article) {
    return (
      <div className="bg-white flex flex-col min-h-screen">
        <Nav />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 pt-32">
          <h1 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "32px", color: GRN }}>Article not found</h1>
          <Link to="/journal" style={{ fontFamily: T.mono, fontSize: "14px", color: GRN, textDecoration: "underline" }}>
            ← Back to the journal
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const heroImg = getArticleImage(article.slug);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <Nav />

      {/* Article header */}
      <header className="relative w-full pt-36 pb-10 px-6 md:px-10" style={{ background: BGS }}>
        <div className="max-w-[760px] mx-auto flex flex-col gap-5">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2" style={{ fontFamily: T.mono, fontSize: "12px", color: GRY }}>
            <Link to="/journal" className="hover:opacity-70 transition-opacity" style={{ color: GRY }}>Journal</Link>
            <span>→</span>
            <span style={{ color: GRN }}>{article.category}</span>
          </div>

          {/* Category badge */}
          <span className="px-3 py-1 rounded-full w-fit"
            style={{ background: GRN, fontFamily: T.mono, fontSize: "12px", color: "#fff", letterSpacing: "0.06em" }}>
            {article.category}
          </span>

          {/* H1 */}
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="leading-tight"
            style={{ fontFamily: T.serif, fontSize: "clamp(28px,5vw,48px)", color: GRN, letterSpacing: "-0.04em" }}>
            {article.title}
          </motion.h1>

          {/* Meta row */}
          <div className="flex items-center gap-4 flex-wrap" style={{ fontFamily: T.mono, fontSize: "13px", color: GRY }}>
            <span>By VisiWise Optimization</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime} read</span>
          </div>

          <div style={{ borderBottom: `1px solid ${BDR}`, marginTop: "8px" }} />
        </div>
      </header>

      {/* Article body */}
      <article className="flex-1 px-6 md:px-10 py-12">
        <div className="max-w-[760px] mx-auto flex flex-col gap-10">

          {/* TL;DR */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-3 p-6 rounded-xl"
            style={{ background: BGS, borderLeft: `4px solid ${GRN}` }}>
            <span style={{ fontFamily: T.mono, fontSize: "11px", fontWeight: 700, color: GRN, letterSpacing: "0.1em", textTransform: "uppercase" }}>
              TL;DR
            </span>
            <p style={{ fontFamily: T.serif, fontSize: "17px", color: GRN, lineHeight: 1.6, letterSpacing: "-0.03em" }}>
              {article.tldr}
            </p>
          </motion.div>

          {/* Hero image */}
          <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9" }}>
            <img src={heroImg} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* Article sections */}
          {article.sections.map((section, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col gap-4">
              <h2 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(20px,3vw,26px)", color: GRN, letterSpacing: "-0.5px", lineHeight: 1.3 }}>
                {section.heading}
              </h2>
              {section.body.split("\n\n").map((para, j) => (
                <p key={j} style={{ fontFamily: T.serif, fontSize: "18px", color: "#2a2a2a", lineHeight: 1.75, letterSpacing: "-0.02em" }}>
                  {para}
                </p>
              ))}
            </motion.div>
          ))}

          {/* Key takeaways */}
          <div className="flex flex-col gap-4 p-6 rounded-xl" style={{ background: GRN }}>
            <h3 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "18px", color: YLW, letterSpacing: "-0.3px" }}>
              Key Takeaways
            </h3>
            <ul className="flex flex-col gap-3">
              {article.keyTakeaways.map((pt, i) => (
                <li key={i} className="flex items-start gap-3"
                  style={{ fontFamily: T.serif, fontSize: "16px", color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>
                  <span style={{ color: YLW, flexShrink: 0, marginTop: "2px" }}>✦</span>
                  {pt}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="flex flex-col gap-6">
            <h2 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "clamp(22px,3vw,28px)", color: GRN, letterSpacing: "-0.5px" }}>
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={article.faqs} />
          </div>

          {/* Article CTA */}
          <div className="flex flex-col gap-4 p-8 rounded-2xl text-center items-center"
            style={{ background: BGS, border: `1.5px solid ${BDR}` }}>
            <h3 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "24px", color: GRN, letterSpacing: "-0.5px" }}>
              Want us to handle this for you?
            </h3>
            <p style={{ fontFamily: T.serif, fontSize: "17px", color: GRY, lineHeight: 1.6, maxWidth: "440px" }}>
              Book a free 30-minute audit. We'll review your digital presence and tell you exactly what to fix first.
            </p>
            <Link to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-4 hover:opacity-85 transition-opacity"
              style={{ background: GRN, fontFamily: T.mono, fontSize: "14px", fontWeight: 500, color: "#fff" }}>
              <span className="w-1 h-1 rounded-full bg-white inline-block shrink-0" />
              Book a Free Audit
            </Link>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div className="flex flex-col gap-6">
              <h3 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "20px", color: GRN, letterSpacing: "-0.4px" }}>
                More from the Journal
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {related.slice(0, 2).map((rel, i) => (
                  <Link key={rel.slug} to={`/journal/${rel.slug}`}>
                    <article className="flex flex-col gap-3 p-5 rounded-xl hover:-translate-y-0.5 transition-transform"
                      style={{ border: `1px solid ${BDR}` }}>
                      <div className="relative w-full overflow-hidden rounded-lg" style={{ aspectRatio: "16/9" }}>
                        <img src={articleImages[i % 3]} alt={rel.title}
                          className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                      <span style={{ fontFamily: T.mono, fontSize: "11px", color: GRY, letterSpacing: "0.06em", textTransform: "uppercase" }}>{rel.category} · {rel.readTime} read</span>
                      <h4 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "16px", color: GRN, letterSpacing: "-0.3px", lineHeight: 1.3 }}>
                        {rel.title}
                      </h4>
                      <span style={{ fontFamily: T.mono, fontSize: "13px", fontWeight: 500, color: GRN }}>Read →</span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back to journal */}
          <Link to="/journal"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
            style={{ fontFamily: T.mono, fontSize: "13px", fontWeight: 500, color: GRY }}>
            ← Back to the Journal
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
}
