# Eddington Builds — Website

A modern, professional marketing site for **Eddington Builds**, a commercial playground installation subcontractor. Built with Next.js (App Router), React, and Tailwind CSS.

## Tech Stack
- **Next.js 14** (App Router)
- **React 18**
- **Tailwind CSS 3**
- Fully responsive, SEO-friendly, zero external UI dependencies

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the site
# http://localhost:3000
```

To build for production:

```bash
npm run build
npm start
```

## Project Structure

```
eddington-builds/
├── app/
│   ├── layout.jsx         # Root layout + SEO metadata
│   ├── page.jsx           # Homepage composition (all sections)
│   ├── globals.css        # Tailwind + custom styles
│   ├── robots.js          # robots.txt generator
│   └── sitemap.js         # sitemap.xml generator
├── components/
│   ├── Navbar.jsx         # Sticky responsive navbar
│   ├── Hero.jsx           # Hero with headline + CTAs
│   ├── Stats.jsx          # Credibility stats row
│   ├── About.jsx          # About Eddington Builds
│   ├── Work.jsx           # Portfolio project grid
│   ├── Services.jsx       # Service offerings
│   ├── WhyPartner.jsx     # Why Partner With Us
│   ├── Contact.jsx        # Contact form
│   ├── Footer.jsx         # Footer
│   ├── Logo.jsx           # Reusable wordmark
│   ├── Icon.jsx           # Inline SVG icon set
│   └── RevealOnScroll.jsx # Fade-in-on-scroll animation hook
├── public/
│   └── images/
│       ├── hero/          # Place hero photo here
│       ├── about/         # Place about/crew photo here
│       ├── projects/      # Place project photos here
│       └── README.md      # Image placement guide
├── next.config.mjs
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Swapping Placeholder Images for Real Photos

All images live under `public/images/`. The easiest path is to keep the existing filenames and just drop your real photos in.

### 1. Hero image
- **File:** `public/images/hero/hero-playground.jpg`
- **Used in:** `components/Hero.jsx` — see the comment block at the top of the file:
  ```jsx
  /*
    REPLACE HERO IMAGE HERE:
    Swap the background image by replacing /public/images/hero/hero-playground.jpg ...
  */
  ```

### 2. About section image
- **File:** `public/images/about/about-crew.jpg`
- **Used in:** `components/About.jsx` — the `<img src="/images/about/about-crew.jpg" ... />` tag has a `REPLACE ABOUT IMAGE HERE` comment above it.

### 3. Portfolio / project images
- **Files:** `public/images/projects/project-1.jpg` … `project-6.jpg`
- **Used in:** `components/Work.jsx` — the `projects` array at the top of the file. Each entry has:
  ```js
  {
    image: "/images/projects/project-1.jpg",
    name: "Riverside Elementary Playground",
    location: "Columbus, OH",
    description: "Full installation of a multi-structure play system...",
  }
  ```
  Update the `image` path, `name`, `location`, and `description` for each of your real projects. Add or remove entries freely.

### Recommended image sizes
| Spot | Aspect | Target dimensions |
|---|---|---|
| Hero | 16:9 | 2400×1350 |
| About | 4:5 | 1200×1500 |
| Project cards | 4:3 | 1600×1200 |

Keep each file under ~400 KB for fast loads (use Squoosh, ImageOptim, or export `.webp`).

---

## Editing Content

| Change | File |
|---|---|
| Headline / subheadline / CTAs | `components/Hero.jsx` |
| Credibility stat numbers | `components/Stats.jsx` (`stats` array) |
| About body copy | `components/About.jsx` |
| Project cards | `components/Work.jsx` (`projects` array) |
| Service list | `components/Services.jsx` (`services` array) |
| Why Partner reasons | `components/WhyPartner.jsx` (`reasons` array) |
| Contact email / phone | `components/Contact.jsx` and `components/Footer.jsx` |
| Site-wide SEO metadata | `app/layout.jsx` |
| Colors | `tailwind.config.js` (`navy` + `accent` palettes) |

## Wiring Up the Contact Form

The form in `components/Contact.jsx` currently simulates a submission with a 700ms delay. To actually send messages, replace the `onSubmit` function with a call to your preferred service:

- **Formspree / Getform** — point the form action at your endpoint and remove the `onSubmit` handler.
- **Resend** — add an API route at `app/api/contact/route.js` and `fetch("/api/contact", { method: "POST", body: ... })` from `onSubmit`.
- **Netlify Forms** — add `data-netlify="true"` and a hidden `form-name` input.

## SEO Notes
- Metadata (title, description, OpenGraph, Twitter, robots) is configured in `app/layout.jsx`.
- Structured data (`GeneralContractor` JSON-LD) is injected from `app/page.jsx`.
- `robots.js` and `sitemap.js` generate `/robots.txt` and `/sitemap.xml` automatically.
- Update `metadataBase` and the `jsonLd.url` to your real domain before launching.

## Design Tokens
- **Navy palette:** primary brand color (`navy-900` for body text and primary buttons).
- **Accent:** warm orange `#e87722` used for CTAs, eyebrows, and icon highlights.
- **Typography:** Inter, loaded from Google Fonts.
- **Animations:** subtle fade-up on hero and fade-in-on-scroll for section content (respects `prefers-reduced-motion`).
