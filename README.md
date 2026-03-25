# RPG Dev Portfolio (Front-end)

A front-end developer portfolio built with an RPG / “dev adventurer” theme.

This project is designed like a small quest hub: sections are presented as “missions”, the UI uses playful fantasy language, and the visuals (waves, stars, avatar) help create a lightweight game-like atmosphere—without sacrificing performance, accessibility, and responsive layout.

If you found this project useful or inspiring, please consider giving it a **star**.

## What’s inside

- **Dark/Light theme**: persisted in `localStorage` and applied before the first paint to avoid flashing on refresh.
- **Scroll-based section entrances**: section headers animate when they enter the viewport (not on initial load).
- **RPG-style visuals**: waves and a starfield background in dark mode.
- **Responsive UI**: layout and spacing are built mobile-first with Tailwind.

## Tech stack

- **React** (Vite)
- **Tailwind CSS v4**
- **Motion** (`motion/react`) for animations
- **Lucide** icons (`lucide-react`)
- **shadcn/ui** + utilities (`class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`)

## Project structure

Core folders you’ll interact with:

- **`src/sections/`**: page sections (Navbar, Hero, Skills, Projects, Contact, Footer)
- **`src/components/`**: reusable UI building blocks (buttons, cards, backgrounds, etc.)
- **`src/context/`**: global state (theme persistence + toggle animation)
- **`src/assets/`**: images / documents used by the UI
- **`public/`**: static files copied to `dist/` on build (including Netlify redirects)

Entry points:

- **`src/main.jsx`**: React root + providers
- **`src/App.jsx`**: section composition and page layout

## Theme system (colors + behavior)

This project uses CSS variables for theme tokens, controlled by a `data-theme` attribute on `<html>`.

- **Where tokens live**: `src/index.css` (`--color-light-*`, `--color-dark-*`, `--color-accent-primary`, etc.)
- **How it switches**: `ThemeProvider` updates `document.documentElement.dataset.theme`
- **No flash on refresh**: `index.html` sets `data-theme` early (before React mounts)

### Wave colors

The waves are SVG paths filled using CSS variables:

- `--cloud-layer-1`
- `--cloud-layer-2`
- `--cloud-layer-3`

Those variables automatically point to the light/dark palette via `:root` and `:root[data-theme="dark"]`.

## Animations

- **Hero**: initial entrance animations for the main content, waves and avatar.
- **Section headers** (`Skills`, `Projects`, `Contact`): animate **from bottom to top** + fade in when the section reaches the viewport.
- **Footer**: animates with **scale + opacity** when it enters the viewport.
- **Skill cards**: cards fade/slide in on scroll; progress bars and percentages animate with delay based on rank.

## Latest updates

- Replaced the browser icon with `Avatar3` (`/favicon.png`).
- Improved skill card UI for dark mode (better contrast, cleaner typography, smoother hover highlight).
- Added two-line clamp with ellipsis for long skill descriptions.
- Added animated rank progress (bar + counter from 0 to target value).
- Prevented horizontal side scrolling on mobile/tablet by locking x-overflow.

## Development

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Deploy (Netlify)

This repo includes a SPA redirect rule for Netlify at `public/_redirects`:

```
/*    /index.html   200
```

That prevents 404s on refresh and direct linking when using client-side routing.

---

Developer  
**Adonias Goes**

GitHub: `@adoniasgoesw`

## 🤝 Contributing

Contributions are always welcome! Feel free to open an issue or submit a pull request.

Developed with ❤️ 

⭐ If this project was useful to you, consider giving it a star!
