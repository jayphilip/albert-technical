// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// On GitHub Actions the demo is served from https://<owner>.github.io/<repo>/,
// so derive site and base from the repository. Elsewhere it builds for the root.
const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const onPages = Boolean(process.env.GITHUB_ACTIONS && owner && repo);
const userSite = repo === `${owner}.github.io`;

// https://astro.build/config
export default defineConfig({
  ...(onPages && {
    site: `https://${owner}.github.io`,
    base: userSite ? '/' : `/${repo}`,
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
