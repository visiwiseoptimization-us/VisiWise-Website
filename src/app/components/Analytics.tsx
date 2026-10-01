import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Sends one GA4 page_view per client-side navigation.
 *
 * The GA4 snippet in index.html fires the first page_view on load. React Router
 * changes the URL without a reload, so without this the whole session would be
 * attributed to whichever page the visitor landed on. Does nothing until a
 * Measurement ID is set in index.html, and nothing during the build-time
 * prerender (effects don't run there).
 */
export function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const gtag = (window as any).gtag;
    if (typeof gtag !== "function") return;
    gtag("event", "page_view", {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
}
