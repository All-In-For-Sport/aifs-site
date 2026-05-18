# All in for Sport

> A Coordi-nation for grassroots sports projects

All in for Sport is a network of projects supporting community-led initiatives that advance inclusion and empowerment through sport. This repository contains the official website built with Astro, showcasing our mission, projects, and community updates.

## Live Site

Visit us at [allinforsport.org](https://allinforsport.org)

## Features

- **MDX-based Content** — Blog/updates system powered by Astro Content Collections with Zod schemas
- **ENS Avatar Integration** — Automatic author avatar fetching from Ethereum Name Service
- **Modern Design** — Responsive UI with Tailwind CSS v4 and custom brand styling
- **Contact Form** — Cloudflare Email Service integration via Worker API route
- **OG Image Generation** — Build-time Open Graph images via satori + sharp
- **Static Site Generation** — Full SSG for optimal performance
- **View Transitions** — Smooth SPA-style page transitions with built-in prefetch
- **Cloudflare Fonts** — Privacy-first font delivery served from own domain
- **Security Headers** — CSP, HSTS, and permissive policy enforced at the edge

## Technology Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro 6](https://astro.build/) (static output) |
| Language | TypeScript (strict) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` |
| Content | MDX via `astro:content` with Zod validation |
| Fonts | Red Hat Display & DM Sans (via Google Fonts, rewritten by Cloudflare Fonts) |
| Deployment | [Cloudflare Workers](https://workers.cloudflare.com/) with Workers Assets |
| Email | Cloudflare Email Service (`env.EMAIL.send()`) |
| Analytics | [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) (auto-injected) |
| Runtime | Node 22 (build only — Workers serve static output) |
| Package manager | npm |
| Formatting | [Prettier](https://prettier.io/) with `prettier-plugin-astro` |

## Quick Start

### Prerequisites

- Node.js 22+
- npm
- Cloudflare account (for deployment)

### Installation

```bash
git clone https://github.com/All-In-For-Sport/aifs-site.git
cd aifs-site
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and fill in your values:

```env
# Feature Flags
PUBLIC_FEATURE_BLOG=true

# Alchemy API for ENS Avatars (optional)
PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key
```

### Development

```bash
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Production build to dist/
npm run preview      # Preview with Wrangler
npm run typecheck    # TypeScript type checking (astro check)
npm run format       # Format with Prettier
```

### Deployment

```bash
npm run deploy       # Build + deploy to Cloudflare Workers
```

## Project Structure

```
aifs-site/
├── src/
│   ├── components/          # UI components
│   │   ├── about/           # About page sections
│   │   ├── home/            # Homepage sections (Hero, Contact, Video, etc.)
│   │   ├── shared/          # Shared components (Header, Footer, BaseHead)
│   │   └── updates/         # Blog/updates components
│   ├── content/             # MDX content files
│   │   └── updates/         # Blog posts and events
│   ├── content.config.ts    # Astro Content Collections schema
│   ├── data/                # Static data (projects, site links)
│   ├── index.ts             # Cloudflare Worker entrypoint
│   ├── layouts/             # Page layouts (BaseLayout)
│   ├── pages/               # Routes
│   │   ├── about/           # /about
│   │   ├── og/              # /og/[slug].png (build-time OG images)
│   │   ├── privacy/         # /privacy
│   │   ├── updates/         # /updates/[category]/[slug]
│   │   └── index.astro      # /
│   └── styles/              # Global CSS + Tailwind
├── astro.config.ts          # Astro configuration
├── wrangler.jsonc           # Cloudflare Workers configuration
├── package.json             # Dependencies and scripts
└── .env.example             # Environment variable template
```

## Content Management

### Creating Blog Posts/Updates

Create an MDX file in `src/content/updates/`:

```mdx
---
title: Your Post Title
author: Author Name
authorEns: author.eth              # Optional: ENS name
authorEnsAvatar: true              # Optional: Show ENS avatar
category: event                    # event, article, etc.
categoryPlural: events             # Plural form for URLs
group: Group Name                  # Optional: Project group
featuredImage: image.webp          # Optional: Featured image
featuredImageAltText: Alt text     # Optional: Alt text
date: 2024-01-01                   # Publication date
isPublished: true                  # Visibility
isFeatured: true                   # Show on homepage
metaDescription: SEO description   # Optional: Custom meta
---

Your content here...
```

Posts auto-generate at `/updates/{categoryPlural}/{filename}`.

### Content Categories

- **Events** — Upcoming and past events
- **Articles** — Blog posts and news
- Custom categories can be added as needed

### Featured Posts

Set `isFeatured: true` to display posts on the homepage (requires `PUBLIC_FEATURE_BLOG=true`).

## Architecture

### Worker Entrypoint (`src/index.ts`)

The Worker processes all requests before static assets:

- **Security headers**: CSP, HSTS (`max-age=63072000; includeSubDomains; preload`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`
- **Email API**: `POST /api/contact` → `env.EMAIL.send()` from `submissions@hosting.allinforsport.org` to `contact@allinforsport.org`
- **CORS**: Restricted to `https://allinforsport.org`
- **Static assets**: Proxied via `env.ASSETS.fetch()`

### Font Strategy

Google Fonts `<link>` tags are rewritten at the edge by [Cloudflare Fonts](https://developers.cloudflare.com/speed/optimization/content/fonts/) to serve from `/cf-fonts/` on the same domain — no third-party font requests, compliant with `font-src 'self'` CSP.

### Analytics

[Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) auto-injects the RUM beacon for proxied traffic — no manual snippet needed. Data reports to `/cdn-cgi/rum` on the same domain, covered by `connect-src 'self'`.

### View Transitions

Astro's `<ClientRouter />` enables SPA-style page transitions with automatic link prefetching on hover. No full-page reloads between routes.

## Integrations & Links

Configured in `src/data/site-meta.ts`:

- **Community**: Discord, Telegram, X (Twitter), LinkedIn
- **Web3**: Hats Protocol, OpenSea, Snapshot, ENS
- **Other**: Discussion Forum, Luma Events, Bonfire Streams

## License

This project is open source. Check with the All in for Sport team for specific licensing terms.

---

Made with ❤️ by the All in for Sport community
