# All in for Sport

> A Coordi-nation for grassroots sports projects

All in for Sport is a network of projects supporting community-led initiatives that advance inclusion and empowerment through sport. This repository contains the official website built with Next.js, showcasing our mission, projects, and community updates.

## 🌐 Live Site

Visit us at [allinforsport.org](https://allinforsport.org)

## ✨ Features

- **📝 MDX-based Content Management** - Dynamic blog/updates system powered by Contentlayer
- **👤 ENS Avatar Integration** - Automatic author avatar fetching from Ethereum Name Service
- **🎨 Modern Design** - Responsive UI with Tailwind CSS and custom brand styling
- **📧 Contact Forms** - Integrated contact system with Formspark
- **🖼️ Optimized Images** - Advanced image optimization for fast static sites
- **🚀 Static Site Generation** - Full SSG for optimal performance and hosting flexibility
- **🎯 Feature Flags** - Toggle features via environment variables
- **🌍 Social Integration** - Connected with Discord, Telegram, X, LinkedIn, and Web3 platforms

## 🛠️ Technology Stack

- **Framework:** [Next.js 14](https://nextjs.org/) with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom theme
- **Content:** Contentlayer for MDX processing
- **Forms:** Formspark integration
- **Blockchain:** viem for ENS resolution
- **Fonts:** Red Hat Display (headers) & DM Sans (body)
- **Image Optimization:** next-export-optimize-images
- **Package Manager:** pnpm

## 📋 Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/All-In-For-Sport/aifs-site.git
cd aifs-site

# Install dependencies
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Feature Flags
NEXT_PUBLIC_FEATURE_BLOG=true

# Formspark Contact Form
NEXT_PUBLIC_FORMSPARK_FORM_ID=your_formspark_form_id

# Alchemy API for ENS Avatars (optional, for author avatars)
NEXT_PUBLIC_ALCHEMY_API_KEY=your_alchemy_api_key
```

### Development

```bash
# Start development server
pnpm dev

# Open http://localhost:3000 in your browser
```

### Build

```bash
# Build for production
pnpm build

# Preview production build locally
pnpm preview
```

### Code Quality

```bash
# Run ESLint
pnpm lint

# Format code with Prettier
pnpm format
```

## 📁 Project Structure

```
aifs-site/
├── app/                    # Next.js App Router
│   ├── about/             # About page and components
│   ├── features/          # Feature flag system
│   ├── home/              # Homepage components
│   ├── privacy/           # Privacy/Terms page
│   ├── services/          # ENS and other services
│   ├── shared/            # Shared components (Header, Footer, etc.)
│   ├── updates/           # Blog/updates system
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── siteMeta.ts        # Site links and metadata
│   └── globals.css        # Global styles
├── public/                # Static assets
│   └── assets/            # Images and media
├── updates/               # MDX content files
├── contentlayer.config.ts # Contentlayer configuration
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── types.ts               # TypeScript type definitions
```

## 📝 Content Management

### Creating Blog Posts/Updates

1. Create an MDX file in the `/updates` directory
2. Add required frontmatter:

```mdx
---
title: Your Post Title
author: Author Name
authorEns: author.eth                    # Optional: ENS name
authorEnsAvatar: true                    # Optional: Show ENS avatar
category: event                          # event, article, etc.
categoryPlural: events                   # Plural form for URLs
group: Group Name                        # Optional: Project group
featuredImage: image.webp                # Optional: Featured image
featuredImageAltText: Image description  # Optional: Alt text
date: 2024-01-01                        # Publication date
isPublished: true                        # Visibility
isFeatured: true                         # Show on homepage
metaDescription: SEO description         # Optional: Custom meta
---

Your content here...
```

3. Place images in `/public/updates/`
4. Posts are automatically generated at `/updates/{categoryPlural}/{filename}`

### Content Categories

Posts are organized by category:
- **Events** - Upcoming and past events
- **Articles** - Blog posts and news
- Custom categories can be added as needed

### Featured Posts

Set `isFeatured: true` to display posts on the homepage (when `NEXT_PUBLIC_FEATURE_BLOG=true`)

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.ts`:

```ts
colors: {
  primary: "#2AA0F6",      // Primary blue
  secondary: "#F301F8",    // Secondary magenta
  background: "#111111",   // Dark background
  darkText: "#242424",     // Dark text
  bluegrey: "#1f2937",     // Blue-grey accent
}
```

### Fonts

Configured in `app/layout.tsx`:
- **Headers:** Red Hat Display
- **Body:** DM Sans

### Feature Flags

Control features via environment variables in `app/features/getFeatures.ts`:

```ts
export function getFeatures() {
  const BLOG = process.env.NEXT_PUBLIC_FEATURE_BLOG === "true";
  return { BLOG };
}
```

## 🔗 Integrations & Links

The site integrates with multiple platforms (configured in `app/siteMeta.ts`):

- **Community:**
  - Discord: Community discussions
  - Telegram: Updates and announcements
  - X (Twitter): Social media
  - LinkedIn: Professional network

- **Web3:**
  - Hats Protocol: Role management
  - OpenSea: NFT collection
  - Snapshot: Governance voting
  - ENS: Ethereum Name Service for author profiles

- **Other:**
  - Discussion Forum: discuss.allinforsport.org
  - Events: Luma calendar integration
  - Stream Archive: Bonfire recordings

## 🚢 Deployment

This site is configured for static export:

```bash
# Build static site
pnpm build

# Output directory
out/
```

The `out/` directory contains the complete static site ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service
- IPFS/Fleek for decentralized hosting

### Build Process

1. Next.js builds pages
2. Contentlayer processes MDX files
3. next-export-optimize-images optimizes images
4. Static HTML/CSS/JS exported to `/out`

## 🎯 Key Technical Decisions

### Why Static Export?
- **Performance:** Pre-rendered pages load instantly
- **Hosting Flexibility:** Deploy anywhere
- **Cost Effective:** No server required
- **Web3 Ready:** Easy IPFS deployment

### Why Contentlayer?
- **Type Safety:** Auto-generated TypeScript types
- **Developer Experience:** MDX with React components
- **Build Time Processing:** Fast runtime performance
- **Flexible Schema:** Easy content modeling

### Why ENS Integration?
- **Web3 Native:** Align with decentralized community
- **Author Attribution:** Verifiable identities
- **Avatar System:** Automatic profile images

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Content Contributions:** Add blog posts via MDX files
2. **Bug Reports:** Open issues for bugs
3. **Feature Requests:** Suggest improvements
4. **Code Contributions:** Submit pull requests

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run `pnpm format` and `pnpm lint`
5. Submit a pull request

## 📄 License

This project is open source. Please check with the All in for Sport team for specific licensing terms.

## 🆘 Support

- **Website:** [allinforsport.org](https://allinforsport.org)
- **Discord:** [Join our community](https://discord.com/invite/HyeK5hf4vR)
- **Telegram:** [Get updates](https://t.me/+CW0_qRG6S5g1MmJh)
- **X:** [@allinforsport](https://x.com/allinforsport)

## 🙏 Acknowledgments

Built with support from:
- Krause House
- Project Backboard
- Word 2 The Wise Festival
- The broader Web3 and grassroots sports communities

---

Made with ❤️ by the All in for Sport community
