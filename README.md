# Muhammad Abdullah — Portfolio

A single-page Angular 18 (standalone components, signals) portfolio built for an
AI/MLOps & DevOps engineer. Glassmorphism UI, dark/light mode, scroll-triggered
animations, and a "pipeline" visual motif (BUILD -> TRAIN -> DEPLOY -> SHIP ->
CERTIFY -> CONNECT) that mirrors the actual CI/CD + ML lifecycle work in the CV.

## Quick start

```bash
npm install
npm start          # http://localhost:4200
```

## Build for production

```bash
npm run build       # outputs to dist/portfolio/browser
```

Deploy the contents of `dist/portfolio/browser` to any static host - Vercel,
Netlify, GitHub Pages, S3 + CloudFront, etc.

## What's inside

- **Design**: glassmorphism cards (`backdrop-filter: blur`), a signal-blue to
  deploy-green gradient, Space Grotesk (display) + Inter (body) + JetBrains
  Mono (labels/terminal).
- **Dark/Light mode**: `ThemeService` persists the choice in `localStorage`
  and respects `prefers-color-scheme` on first visit.
- **Animations**: a custom `RevealDirective` (IntersectionObserver-based
  scroll reveals) and a typed terminal effect in the hero. Both fully respect
  `prefers-reduced-motion`.
- **Sections**: Hero, About, Skills, Experience (deploy-log timeline),
  Projects, Education & Awards, Contact (mailto-based form, no backend
  required).
- **SEO**: descriptive `<title>`/meta description, Open Graph + Twitter
  cards, JSON-LD `Person` structured data, `robots.txt`, `sitemap.xml`,
  semantic HTML landmarks.
- **Accessibility**: skip-to-content link, visible focus states, aria labels
  on icon-only buttons, reduced-motion support, sufficient color contrast in
  both themes.
- **Performance**: no UI framework beyond Angular itself, ~68 kB gzipped
  initial bundle, fonts loaded with `display=swap`, CSS-only animations.

## Before you deploy

1. Update `og:url` / `canonical` in `src/index.html` once you have a real
   domain, and swap in a real Open Graph image if you'd like a richer link
   preview (currently points at the favicon as a safe placeholder).
2. Update `public/sitemap.xml` and `public/robots.txt` with your real domain.
3. If you add more pages later, wire up `@angular/router` - this build is a
   single scrolling page by design (typical for a portfolio).

## Project structure

```
src/app/
  core/
    directives/     # RevealDirective, SectionSpyDirective
    services/       # ThemeService, ScrollSpyService
  data/
    portfolio-data.ts   # all copy - edit this file to update content
  components/
    navbar/ hero/ about/ skills/ experience/ projects/ education/ contact/ footer/
```

All the content (experience, projects, skills, education) lives in
`src/app/data/portfolio-data.ts` - edit that one file to update the site.
