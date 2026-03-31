# RPG Dev Portfolio (Front-end)

An RPG-themed front-end developer portfolio built with React and Vite.

This project presents skills and projects as a "quest journey", with smooth motion, dark/light theming, and a responsive UI focused on performance and clean UX.

## Stacks and tools

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 + custom design tokens in `src/index.css`
- **Animation**: Motion (`motion/react`)
- **Icons**: Lucide + React Icons
- **Utilities/UI**: `clsx`, `class-variance-authority`, `tailwind-merge`, `tw-animate-css`
- **Contact email**: EmailJS (`@emailjs/browser`) with env-based configuration

## Architecture

### Application flow

- `src/main.jsx`: boots React and wraps app with `ThemeProvider`.
- `src/App.jsx`: composes page sections in order:
  - `Navbar`
  - `HeroSection`
  - `SkillSection`
  - `ProjectSection`
  - `ContactSection`
  - `Footer`

### Data layer

- `src/data/data.jsx` is the central content source:
  - `navItems` for navbar links
  - `skills` for skills cards
  - `projects` for project cards and modal details

### UI composition

- `src/sections/`: top-level page sections and orchestration.
- `src/components/`: reusable pieces:
  - `backgrounds/` – decorative / layout elements (`Avatar`, `Waves`, theme toggle)
  - `buttons/` – shared button API for solid / outline / icon variants
  - `cards/` – skill, project and contact form cards
  - `modal/` – project details modal
  - `ui/` – shadcn-style primitives used by other components

## Project structure

High‑level folder layout of the front-end:

```txt
game/                        # This project
├─ public/
│  └─ _redirects             # Netlify SPA redirect config
├─ src/
│  ├─ assets/                # Images (projects, avatars, background art, CV)
│  ├─ components/            # Reusable, presentation components
│  │  ├─ backgrounds/        # Decorative background and hero elements
│  │  ├─ buttons/            # Custom button component (variants, icon-only, etc.)
│  │  ├─ cards/              # Cards for skills, projects and contact form
│  │  ├─ modal/              # Project details modal
│  │  └─ ui/                 # Low-level UI primitives (shadcn-style)
│  ├─ context/               # React contexts (theme, etc.)
│  ├─ data/                  # Static data for navbar, skills, projects
│  ├─ hooks/                 # Custom React hooks (e.g. `useSendEmail`)
│  ├─ sections/              # Page sections (Hero, Skills, Projects, Contact, Footer)
│  ├─ index.css              # Tailwind + design tokens and global styles
│  ├─ App.jsx                # Page layout / section composition
│  └─ main.jsx               # React + ThemeProvider bootstrap
├─ .env.example              # Example env vars for EmailJS (not used in prod)
├─ package.json              # Dependencies and scripts
├─ tsconfig.json             # TypeScript tooling support (editor, JSX, paths)
└─ vite.config.*             # Vite config + Tailwind plugin

### State and behavior

- `src/context/ThemeContext.jsx`
  - manages dark/light theme
  - persists selection in local storage
  - applies theme early to prevent flash on refresh
- Local section state handles interactions like:
  - project modal open/close
  - selected project payload
  - form input and send status

### Hooks

- `src/hooks/useSendEmail.js`
  - encapsulates EmailJS send logic
  - exposes `sendEmail`, `sending`, `success`, `error`, `clearStatus`
  - reads env vars and handles missing configuration safely

## Features

- Dark/light theme with smooth UX and readable contrast
- Animated entrances on scroll (sections and cards)
- Skill cards with level-based animated progress/counting
- Project cards opening a right-side modal with details and links
- Contact form with typed placeholders and real email send flow
- Mobile/tablet horizontal scroll prevention and responsive layout

## Environment variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_CONTACT_TO_EMAIL=adoniasgoes86@gmail.com
```

Example payload sent to EmailJS template:

- `title`
- `name`
- `time`
- `message`
- `email`
- `to_email`

**Netlify production:** Vite replaces `import.meta.env.VITE_*` at **build** time. Committing `.env` is not required (and should stay ignored). In the Netlify dashboard: **Site configuration → Environment variables** add the same `VITE_*` keys (scope **Production**, and **Builds** if offered), save, then **Deploys → Trigger deploy → Clear cache and deploy site** so the bundle is rebuilt with those values.

## Development

```bash
npm install
npm run dev
```

Build and preview:

```bash
npm run build
npm run preview
```

Lint:

```bash
npm run lint
```

## Deploy (Netlify)

SPA redirect is configured via `public/_redirects`:

```txt
/*    /index.html   200
```

## Developer

**Adonias Goes**  
GitHub: `@adoniasgoesw`

## Contributing

Contributions are welcome. Feel free to open an issue or submit a pull request.

If this project helps you, consider giving it a star.
