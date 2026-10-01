// ─── Site-wide SEO data ───────────────────────────────────────────────────────
// Single source of truth for per-page titles, descriptions and canonical URLs.
// Used by the page components at runtime and by scripts/prerender.mjs at build
// time, so what a crawler reads and what a visitor sees never drift apart.

export const SITE_URL = "https://visiwiseoptimization.com";
export const SITE_NAME = "VisiWise Optimization LLC";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export type PageMeta = {
  path: string;
  title: string;
  description: string;
};

export const PAGES: PageMeta[] = [
  {
    path: "/",
    title: "Digital Operations for Service Businesses | Tempe, AZ",
    description:
      "VisiWise builds, manages and grows the digital presence of service businesses: websites, local SEO, reporting and software. Based in Tempe, Arizona.",
  },
  {
    path: "/services",
    title: "Web, SEO, Marketing & Reporting Services | VisiWise",
    description:
      "Website design and development, digital marketing, analytics and reporting, and software setup for service businesses. Flat monthly plans.",
  },
  {
    path: "/work",
    title: "Client Work — Case Studies | VisiWise Optimization",
    description:
      "How VisiWise built a Phoenix duct cleaning company's site to rank without a storefront, and turned a YouTube market channel into a community platform.",
  },
  {
    path: "/about",
    title: "About VisiWise Optimization | Tempe, Arizona",
    description:
      "A Tempe, Arizona digital operations studio for service businesses. One accountable team for design, development, SEO and reporting.",
  },
  {
    path: "/journal",
    title: "The VisiWise Journal | Marketing for Service Businesses",
    description:
      "Practical guides on local SEO, websites, digital tools and marketing spend for small service businesses. No fluff, no jargon.",
  },
  {
    path: "/contact",
    title: "Contact VisiWise | Book a Free Digital Audit",
    description:
      "Book a free 30-minute digital audit. We review your website, SEO and social presence live and tell you what to fix first.",
  },
];

export function getPageMeta(path: string): PageMeta {
  return PAGES.find((p) => p.path === path) ?? PAGES[0];
}

/**
 * Sets document title and description at runtime. Prerendered pages already
 * ship with the right tags; this keeps them correct during client-side
 * navigation.
 */
export function applyMeta(title: string, description: string) {
  if (typeof document === "undefined") return;
  document.title = title;
  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", "description");
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", description);
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  const p = window.location.pathname;
  canonical.setAttribute("href", SITE_URL + (p === "/" || p.endsWith("/") ? p : `${p}/`));
}
