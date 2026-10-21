# Albert Technical Consulting

Website for Eric K. Albert, PhD: technology help for nonprofits in Lycoming County, PA.

Built with Astro, TypeScript, and Tailwind CSS.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

## Editing content

All copy lives in `src/data/site.ts`. Items marked `PLACEHOLDER` still need confirming.

- `site.form.endpoint`: form backend URL (e.g. Formspree). Without it, the request form opens a pre-filled email.
- `call.calendlyUrl`: Calendly link. When set, it replaces the request form.
- `caseStudies` and `testimonials`: the client section appears once either has entries.
- `site.analytics.plausibleDomain`: enables Plausible analytics.

## Deploy

Pushing to `main` deploys to https://alberttechnical.com (GitHub Pages with a custom domain)
via `.github/workflows/deploy.yml`. DNS is managed at Porkbun.

Setting `PUBLIC_DEMO=true` at build time adds `noindex`, for preview deployments.
