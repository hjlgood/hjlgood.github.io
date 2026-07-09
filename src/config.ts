export const SITE_TITLE = "The Value Matrix";
export const SITE_DESCRIPTION = "Independent thoughts on software engineering, technology design, and quantitative finance.";

/**
 * Prefix a site-root path with Astro's `base` (e.g. `/value-matrix/`).
 * Accepts paths like `/`, `/#about`, `favicon-matrix.jpg`, or `#articles`.
 */
export function withBase(path: string = "/"): string {
  const base = import.meta.env.BASE_URL; // always ends with `/` (e.g. `/value-matrix/`)

  if (!path || path === "/") {
    return base;
  }

  // Hash-only anchors stay on the current page when used as relative `#id`,
  // but nav wants the homepage + hash.
  if (path.startsWith("#")) {
    return `${base}${path}`;
  }

  // `/#about` → base + `#about`; `/blog/x` → base + `blog/x`
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}
