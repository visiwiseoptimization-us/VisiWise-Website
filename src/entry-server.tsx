import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppRoutes } from "./app/App";
import { PAGES } from "./app/seo";
import { ARTICLES } from "./app/components/articleData";

export type PrerenderRoute = {
  path: string;
  title: string;
  description: string;
  /** Sitemap priority, 1.0 = homepage. */
  priority: string;
  /** ISO date for <lastmod>, articles use their publish date. */
  lastmod?: string;
  /** Present on journal articles: fields for Article + FAQPage schema. */
  article?: {
    headline: string;
    datePublished: string;
    faqs: { q: string; a: string }[];
  };
};

/** Every URL the build should emit as its own static HTML page. */
export function routes(): PrerenderRoute[] {
  const pages: PrerenderRoute[] = PAGES.map((p) => ({
    path: p.path,
    title: p.title,
    description: p.description,
    priority: p.path === "/" ? "1.0" : "0.8",
  }));

  const articles: PrerenderRoute[] = ARTICLES.map((a) => ({
    path: `/journal/${a.slug}`,
    title: `${a.title} — VisiWise Journal`,
    description: a.metaDescription,
    priority: "0.7",
    lastmod: a.datePublished,
    article: {
      headline: a.title,
      datePublished: a.datePublished,
      faqs: a.faqs,
    },
  }));

  return [...pages, ...articles];
}

/** Renders one route to an HTML string for the build-time prerender. */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  );
}
