# Image Placement Guide

Drop your real photos into the folders below, keeping the filenames listed, and they'll automatically appear across the site. If you'd rather use different filenames, update the corresponding `src` / `backgroundImage` path in the component listed next to each image.

## /public/images/hero/
- `hero-playground.jpg` — Full-bleed background on the homepage hero.
  - **Edit in:** `components/Hero.jsx` (see comment block near the top)

## /public/images/about/
- `about-crew.jpg` — Portrait-oriented crew / jobsite photo in the About section.
  - **Edit in:** `components/About.jsx` (see comment block)

## /public/images/projects/
- `project-1.jpg` through `project-6.jpg` — Portfolio grid on the homepage.
  - **Edit in:** `components/Work.jsx` — the `projects` array at the top. Update `image`, `name`, `location`, and `description` for each project.

## Recommended dimensions
- Hero image: 2400×1350 (16:9), JPG or WebP
- About image: 1200×1500 (4:5), JPG or WebP
- Project images: 1600×1200 (4:3), JPG or WebP

Keep file sizes under ~400 KB for faster page loads. Tools like ImageOptim or Squoosh work well.
