// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Served from the root of the custom domain (GitHub Pages, custom domain set on the repo).
  site: 'https://alberttechnical.com',

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [sitemap()],
});