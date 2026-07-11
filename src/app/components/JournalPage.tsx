import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { ARTICLES } from "./articleData";
import { SiteNav, GRN, YLW, GRY, BDR, BGS, T } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import imgArticle1 from "../../imports/UnnamedComponent/bdb30674ad958933f85288ea31822252e1a378d0.png";
import imgArticle2 from "../../imports/UnnamedComponent/2b1a9f5d4045456ed370a4a05c8bf47cdc6d24e5.png";
import imgArticle3 from "../../imports/UnnamedComponent/92bc57b6c6836a6befe8825fe9548237096b97fe.png";

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
      <SiteNav active="/journal" />

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

      <SiteFooter />
    </div>
  );
}
