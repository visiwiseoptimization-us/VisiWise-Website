// Build-time prerender for the VisiWise site.
//
// Runs after `vite build` (client) and `vite build --ssr` (server bundle):
// renders every route to static HTML, writes one directory per URL, rewrites
// the head tags for that page, and generates sitemap.xml plus the GitHub Pages
// 404 fallback.
//
// Why: the site is a React SPA. Without this, every URL served the same empty
// <div id="root"> and only the homepage could rank. Crawlers that don't run
// JavaScript — most AI answer engines, LinkedIn's link preview — saw nothing.

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const SSR_ENTRY = path.join(ROOT, "dist-ssr", "entry-server.js");
const SITE_URL = "https://visiwiseoptimization.com";
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Replaces the value of a single-attribute meta/link/title tag in the head. */
function setTag(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html;
}

function applyHead(template, route) {
  const url = SITE_URL + (route.path === "/" ? "/" : route.path);
  const title = esc(route.title);
  const desc = esc(route.description);

  let html = template;
  html = setTag(html, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  html = setTag(
    html,
    /<meta name="description" content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${desc}" />`
  );
  html = setTag(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`);
  html = setTag(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`);
  html = setTag(
    html,
    /<meta property="og:title" content="[^"]*"\s*\/>/,
    `<meta property="og:title" content="${title}" />`
  );
  html = setTag(
    html,
    /<meta property="og:description" content="[^"]*"\s*\/>/,
    `<meta property="og:description" content="${desc}" />`
  );
  html = setTag(
    html,
    /<meta property="og:image" content="[^"]*"\s*\/>/,
    `<meta property="og:image" content="${OG_IMAGE}" />`
  );
  html = setTag(
    html,
    /<meta name="twitter:title" content="[^"]*"\s*\/>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  html = setTag(
    html,
    /<meta name="twitter:description" content="[^"]*"\s*\/>/,
    `<meta name="twitter:description" content="${desc}" />`
  );
  html = setTag(
    html,
    /<meta name="twitter:image" content="[^"]*"\s*\/>/,
    `<meta name="twitter:image" content="${OG_IMAGE}" />`
  );
  html = setTag(
    html,
    /<meta property="og:type" content="[^"]*"\s*\/>/,
    `<meta property="og:type" content="${route.path.startsWith("/journal/") ? "article" : "website"}" />`
  );
  return html;
}

function breadcrumbLd(route) {
  if (route.path === "/") return "";
  const parts = route.path.split("/").filter(Boolean);
  const items = [{ name: "Home", url: SITE_URL + "/" }];
  let acc = "";
  for (const part of parts) {
    acc += `/${part}`;
    items.push({
      name: part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      url: SITE_URL + acc,
    });
  }
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
  return `\n    <script type="application/ld+json">\n    ${JSON.stringify(ld)}\n    </script>\n  `;
}

function articleLd(route) {
  if (!route.article) return "";
  const url = SITE_URL + route.path;
  const blocks = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: route.article.headline,
      description: route.description,
      datePublished: route.article.datePublished,
      dateModified: route.article.datePublished,
      image: OG_IMAGE,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Organization", name: "VisiWise Optimization LLC", url: SITE_URL + "/" },
      publisher: {
        "@type": "Organization",
        name: "VisiWise Optimization LLC",
        url: SITE_URL + "/",
        logo: { "@type": "ImageObject", url: OG_IMAGE },
      },
    },
  ];
  if (route.article.faqs?.length) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: route.article.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }
  return blocks
    .map((b) => `\n    <script type="application/ld+json">\n    ${JSON.stringify(b)}\n    </script>`)
    .join("");
}

async function main() {
  if (!existsSync(SSR_ENTRY)) {
    throw new Error(`SSR bundle not found at ${SSR_ENTRY} — run "vite build --ssr src/entry-server.tsx --outDir dist-ssr" first`);
  }

  const template = await readFile(path.join(DIST, "index.html"), "utf8");
  const { render, routes } = await import(pathToFileUrl(SSR_ENTRY));
  const list = routes();

  for (const route of list) {
    const body = render(route.path);
    let html = applyHead(template, route);
    const extraLd = breadcrumbLd(route) + articleLd(route);
    if (extraLd) html = html.replace("</head>", `${extraLd}\n  </head>`);
    html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);

    const outDir = route.path === "/" ? DIST : path.join(DIST, route.path);
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, "index.html"), html, "utf8");
    console.log(`prerendered ${route.path}`);
  }

  // GitHub Pages serves 404.html for any unmatched path; shipping the plain
  // app shell (no prerendered body) means a mistyped URL still boots the app
  // and the router decides what to show.
  await writeFile(path.join(DIST, "404.html"), applyHead(template, list[0]), "utf8");

  const today = new Date().toISOString().slice(0, 10);
  const urls = list
    .map(
      (r) =>
        `  <url>\n    <loc>${SITE_URL}${r.path === "/" ? "/" : r.path}</loc>\n    <lastmod>${r.lastmod ?? today}</lastmod>\n    <changefreq>${r.path === "/" ? "weekly" : "monthly"}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
    )
    .join("\n");
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  await writeFile(path.join(DIST, "sitemap.xml"), sitemap, "utf8");
  console.log(`wrote sitemap.xml with ${list.length} urls`);
}

function pathToFileUrl(p) {
  return new URL(`file://${p}`).href;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
