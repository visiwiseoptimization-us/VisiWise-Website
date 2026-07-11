import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { getArticleBySlug, getRelatedArticles, ARTICLES } from "./articleData";
import { SiteNav, GRN, YLW, GRY, BDR, BGS, T } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import imgArticle1 from "../../imports/UnnamedComponent/bdb30674ad958933f85288ea31822252e1a378d0.png";
import imgArticle2 from "../../imports/UnnamedComponent/2b1a9f5d4045456ed370a4a05c8bf47cdc6d24e5.png";
import imgArticle3 from "../../imports/UnnamedComponent/92bc57b6c6836a6befe8825fe9548237096b97fe.png";

const articleImages = [imgArticle1, imgArticle2, imgArticle3];

function getArticleImage(slug: string): string {
  const idx = ARTICLES.findIndex((a) => a.slug === slug);
  return articleImages[idx % 3];
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
        <SiteNav active="/journal" />
        <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6 pt-32">
          <h1 style={{ fontFamily: T.display, fontWeight: 500, fontSize: "32px", color: GRN }}>Article not found</h1>
          <Link to="/journal" style={{ fontFamily: T.mono, fontSize: "14px", color: GRN, textDecoration: "underline" }}>
            ← Back to the journal
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const heroImg = getArticleImage(article.slug);

  return (
    <div className="bg-white flex flex-col min-h-screen">
      <SiteNav active="/journal" />

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
            <Link to="/contact"
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

      <SiteFooter />
    </div>
  );
}
