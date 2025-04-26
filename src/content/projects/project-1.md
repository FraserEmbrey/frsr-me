---
title: 'Personal Website with Astro'
description: 'A modern, scalable personal website built with Astro, using a customized version of the Dante theme, hosted on Netlify with GitHub-managed development.'
publishDate: '2024-12-13'
isFeatured: true
company: 'Personal Project'
year: 2024
seo:
  image:
    src: './images/personal-website.jpg'
    alt: 'Preview of personal website project'
---

## Project Overview

This project focused on creating a modern, high-performance personal website to showcase my portfolio and blog. I migrated from a hand-coded static site to a robust Astro-based architecture, building on top of the Dante theme. Every design decision aimed to reflect a minimalist, typography-driven aesthetic while maintaining maximum scalability.

## Development Process

### Choosing the Stack

I selected [Astro](https://astro.build/) for its powerful static site capabilities and lightweight performance. The [Dante theme](https://github.com/robbiekruszynski/dante) served as a flexible foundation.

Key initial setup:

```bash
npm create astro@latest
# Install Dante theme
git clone https://github.com/robbiekruszynski/dante
```

Hosting was configured through [Netlify](https://netlify.com) for continuous deployment tied directly to GitHub.

### Customizing the Design

Design customization focused on creating a unique and bold presence:

- **Fonts:** Added custom fonts for my own style in `src/styles/global.css`.
  
  ```css
  @font-face {
    font-family: 'Satoshi';
    src: url('/fonts/Satoshi.woff2') format('woff2'),
         url('/fonts/Satoshi.woff') format('woff'),
         url('/fonts/Satoshi.ttf') format('truetype');
    font-weight: 300 900;
    font-display: swap;
    font-style: normal;
   }
  ```

- **Colors:** Adjusted the colourscheme to my own with dark and light themes, using oklch colours with a hex fallback.

  ```css
  // global.css
  :root {
    --text-main: #000000;
    --text-link: #0092B5;
    --text-link: oklch(61.2% 0.151 223);
    --bg-main: #F8F3EB;
    --bg-main: oklch(96.5% 0.011 78.4);
    --bg-card: rgba(255,255,255,0.33);
  }

  @media (prefers-color-scheme: dark) {
    :root {
        --text-main: #FFFFFF99;
        --text-main: oklch(92.1% 0 0);
        --text-link: #00CDF3;
        --text-link: oklch(78.2% 0.164 217.9);
        --bg-main: #1A1613;
        --bg-main: oklch(20.4% 0.009 63.2);
        --bg-card: rgba(255,255,255,0.12);
    }
  }
  ```

- **Components:** Developed or customised reusable components (e.g., Button, Project Card) following Astro’s component model.

### Implementing Version Control

Git provides great version control, allowing for test branches and easy ways to revert or track history:

- Used GitHub issues + branches for structured feature development.
- Maintained PR reviews even for solo work to stay disciplined.

### Deployment and Hosting

Continuous deployment set up with Netlify:

- GitHub → Netlify connection.
- Automatic builds on push to `main`.
- Preview builds enabled for PRs.

### Content Scalability

Astro’s file-based routing made dynamic content dead simple:

```astro
---
// src/pages/projects/[slug].astro
import { getEntryBySlug } from 'astro:content';
const project = await getEntryBySlug('projects', Astro.params.slug);
---
```

This structure makes adding new case studies effortless — just create a new markdown file.

## Key Challenges

- Customizing Dante deeply without breaking update compatibility.
- Font loading optimization to preserve first paint speed.
- Creating modular Astro components that scale with minimal bloat.

## Results

The final website reflects a sleek, minimal design anchored by strong typography. It's fast, SEO-optimized, scalable for future content, and extremely easy to maintain. Moving to Astro and a modern deployment pipeline massively improved both development speed and site performance.

## Tech Stack

- **Framework:** Astro
- **Theme:** Dante (heavily customized)
- **Hosting:** Netlify
- **Version Control:** Git + GitHub
- **Languages:** HTML, CSS (Tailwind), JavaScript
