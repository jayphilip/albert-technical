// The site may be served from a subfolder (e.g. a GitHub Pages project site),
// so internal links are built from Astro's base path rather than '/'.
const base = import.meta.env.BASE_URL;

/** Home page URL, always ending in '/'. */
export const home = base.endsWith('/') ? base : `${base}/`;

/** URL for a file in /public, e.g. asset('favicon.svg'). */
export const asset = (path: string) => `${home}${path.replace(/^\//, '')}`;

/** True for the public demo build, which should not be indexed by search engines. */
export const isDemo = import.meta.env.PUBLIC_DEMO === 'true';
