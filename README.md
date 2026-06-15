# The Yard

Nairobi's AI tech community website — blog, tech news, weekly startup demos (The Drop), and the Smoke Signal newsletter. Industrial "furnace" design system, no rounded corners.

## Stack

- **Next.js 14** (App Router) + TypeScript
- **Framer Motion** — page/section transitions, hero stagger, nav scroll, furnace glow pulse
- **next-mdx-remote/rsc** + **gray-matter** — local MDX blog content
- CSS Modules / `globals.css` design tokens (no Tailwind)
- Vercel-ready — no database, no env vars

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Structure

```
app/                 routes: / blog [slug] news demos newsletter community
components/           Nav, Footer, Ticker, Hero, ArticleCard, NewsItem,
                     DemoCard, NewsletterStrip/Signup, StickyCTA, FurnaceGlow,
                     RevealWrapper, PageTransition, BlogGrid
content/blog/*.mdx   articles (frontmatter: title, category, author, date, excerpt)
content/data/*.json  news, demos, newsletters
lib/mdx.ts           gray-matter helpers (slug strips NNN- prefix)
app/globals.css      all design tokens + component styles
```

## Design tokens

`--coal #16120E` bg · `--iron #201A14` alt · `--soot #2C241B` borders ·
`--molten #FF5A00` accent · `--heat #FFB347` hover · `--card #E8DFD0` manila ·
`--bone #F2EBDD` light text · `--ash #8A7E6E` muted.

Fonts: **Saira Stencil One** (headlines/logo), **Archivo** (body), **IBM Plex Mono** (labels/nav).
# THEYARD
