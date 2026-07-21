# Digiwell — Project Memory

> **Purpose:** This file is the single source of truth for AI assistants and developers working on Digiwell. Read this document in full before making any changes to the codebase.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Current Project Status](#current-project-status)
3. [Tech Stack](#tech-stack)
4. [Folder Structure](#folder-structure)
5. [Features Completed](#features-completed)
6. [Features Pending](#features-pending)
7. [Coding Standards](#coding-standards)
8. [Theme](#theme)
9. [UI Philosophy](#ui-philosophy)
10. [Future Roadmap](#future-roadmap)
11. [AI Instructions](#ai-instructions)
12. [Things AI Should Never Change](#things-ai-should-never-change)

---

## Project Overview

**Digiwell** is a modern coaching management platform designed for educational institutes, coaching centers, and hybrid learning organizations. It unifies the full student lifecycle — from discovery and enrollment through live classes, assignments, attendance, exams, and certificates — into one premium, responsive web experience.

The platform serves three primary user roles:

| Role | Description |
|------|-------------|
| **Student** | Enrolls in courses, attends live/recorded classes, submits assignments, tracks attendance and results |
| **Teacher** | Manages batches, conducts live classes, grades assignments, marks attendance, uploads notes |
| **Admin** | Oversees institute operations, user management, payments, analytics, and platform configuration |

The public-facing homepage acts as a marketing and conversion surface, driving demo bookings and course exploration before users authenticate into role-specific dashboards.

---

## Current Project Status

| Area | Status | Notes |
|------|--------|-------|
| Homepage | ✅ Complete | Full landing page with 13 section components |
| Root layout | ✅ Complete | Metadata, global CSS, HTML shell |
| Route scaffolding | 🟡 Scaffolded | 25+ route folders exist with `.gitkeep` placeholders |
| Authentication | ✅ Complete | Login, signup, forgot password UI implemented |
| Student panel | ❌ Not started | `/student` folder scaffolded |
| Teacher panel | ❌ Not started | `/teacher` folder scaffolded |
| Admin panel | ❌ Not started | `/admin` folder scaffolded |
| shadcn/ui components | 🟡 Partially installed | Base UI components for forms added |
| Backend / API | ❌ Not started | `services/` folder scaffolded |
| Database | ❌ Not started | No ORM or schema defined |
| Middleware | 🟡 Placeholder | Empty middleware with no matcher |
| Loading / 404 pages | 🟡 Placeholder | Return `null` — need proper UI |

**Version:** `0.1.0` (early scaffold + homepage)

**Language:** JavaScript (JSX) — not TypeScript

**Build status:** Project builds successfully with Next.js App Router.

---

## Tech Stack

### Core Framework

| Technology | Purpose |
|------------|---------|
| **Next.js** (App Router) | Full-stack React framework, routing, SSR/SSG |
| **React** | UI component library |
| **JavaScript (JSX)** | Primary language — no TypeScript |

### Styling & UI

| Technology | Purpose |
|------------|---------|
| **Tailwind CSS v4** | Utility-first CSS with `@import "tailwindcss"` |
| **tw-animate-css** | Animation utilities |
| **shadcn/ui conventions** | Component patterns (New York style, CSS variables) |
| **class-variance-authority** | Variant-based component styling |
| **clsx + tailwind-merge** | Conditional class merging via `cn()` helper |
| **Lucide React** | Icon library (configured in `components.json`) |
| **Framer Motion** | Page and section animations |

### Tooling

| Technology | Purpose |
|------------|---------|
| **ESLint** | Linting with `eslint-config-next` |
| **PostCSS + Autoprefixer** | CSS processing |
| **jsconfig.json** | Path aliases (`@/*`) |

### Planned (Not Yet Integrated)

| Technology | Purpose |
|------------|---------|
| Database (TBD) | Persistent data storage |
| Authentication provider (TBD) | User sessions, role-based access |
| Payment gateway (TBD) | Fee collection and subscriptions |
| Video streaming (TBD) | Live and recorded class delivery |

---

## Folder Structure

```
digiwell/
├── app/                          # Next.js App Router pages
│   ├── page.jsx                  # Homepage (implemented)
│   ├── layout.jsx                # Root layout
│   ├── loading.jsx               # Global loading state (placeholder)
│   ├── not-found.jsx             # 404 page (placeholder)
│   ├── globals.css               # Global styles + CSS variables
│   ├── about/                    # About page (scaffolded)
│   ├── admin/                    # Admin panel (scaffolded)
│   ├── announcements/            # Announcements (scaffolded)
│   ├── assignments/              # Assignments (scaffolded)
│   ├── attendance/               # Attendance (scaffolded)
│   ├── certificates/             # Certificates (scaffolded)
│   ├── contact/                  # Contact page (scaffolded)
│   ├── course/[id]/              # Dynamic course detail (scaffolded)
│   ├── courses/                  # Course listing (scaffolded)
│   ├── demo-class/               # Demo booking (scaffolded)
│   ├── exams/                    # Exams (scaffolded)
│   ├── faculty/                  # Faculty page (scaffolded)
│   ├── faq/                      # FAQ page (scaffolded)
│   ├── gallery/                  # Gallery page (scaffolded)
│   ├── live-classes/             # Live classes (scaffolded)
│   ├── login/                    # Login (scaffolded)
│   ├── notes/                    # Study notes (scaffolded)
│   ├── profile/                  # User profile (scaffolded)
│   ├── recorded-classes/         # Recorded classes (scaffolded)
│   ├── results/                  # Results (scaffolded)
│   ├── settings/                 # Settings (scaffolded)
│   ├── signup/                   # Signup (scaffolded)
│   ├── student/                  # Student dashboard (scaffolded)
│   └── teacher/                  # Teacher dashboard (scaffolded)
├── components/
│   ├── home/                     # Homepage section components (13 files)
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Stats.jsx
│   │   ├── Courses.jsx
│   │   ├── WhyChoose.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Faculty.jsx
│   │   ├── Gallery.jsx
│   │   ├── DemoBanner.jsx
│   │   ├── Announcements.jsx
│   │   ├── FAQ.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   └── ui/                       # shadcn/ui components (empty, ready)
├── config/                       # App configuration (scaffolded)
├── constants/                    # Shared constants (scaffolded)
├── context/                      # React context providers (scaffolded)
├── data/                         # Static/mock data (scaffolded)
├── hooks/                        # Custom React hooks (scaffolded)
├── lib/
│   └── utils.js                  # cn() utility for class merging
├── public/                       # Static assets
├── services/                     # API service layer (scaffolded)
├── styles/                       # Additional stylesheets (scaffolded)
├── utils/                        # General utilities (scaffolded)
├── middleware.js                 # Next.js middleware (placeholder)
├── tailwind.config.js            # Tailwind configuration
├── components.json               # shadcn/ui configuration
├── next.config.js                # Next.js config (Unsplash images allowed)
├── jsconfig.json                 # Path aliases
├── package.json
└── README.md
```

### Path Aliases

| Alias | Resolves To |
|-------|-------------|
| `@/*` | Project root |
| `@/components/*` | `./components/*` |
| `@/config/*` | `./config/*` |
| `@/constants/*` | `./constants/*` |
| `@/context/*` | `./context/*` |
| `@/data/*` | `./data/*` |
| `@/hooks/*` | `./hooks/*` |
| `@/lib/*` | `./lib/*` |
| `@/services/*` | `./services/*` |
| `@/styles/*` | `./styles/*` |
| `@/utils/*` | `./utils/*` |

---

## Features Completed

### Homepage (Landing Page)

The homepage at `/` is fully implemented and composed of modular section components:

| Section | Component | Description |
|---------|-----------|-------------|
| Navigation | `Navbar.jsx` | Fixed header with mobile menu, login/demo CTAs |
| Hero | `Hero.jsx` | Primary headline, CTAs, feature highlights, hero image |
| Stats | `Stats.jsx` | Key metrics (students, success rate, courses, lessons) |
| Courses | `Courses.jsx` | Four program cards (Foundation, Science, Commerce, Competitive) |
| Why Choose | `WhyChoose.jsx` | Value proposition section |
| Testimonials | `Testimonials.jsx` | Student/parent testimonials |
| Faculty | `Faculty.jsx` | Faculty showcase |
| Gallery | `Gallery.jsx` | Institute gallery |
| Demo Banner | `DemoBanner.jsx` | Demo class booking CTA |
| Announcements | `Announcements.jsx` | Latest announcements |
| FAQ | `FAQ.jsx` | Frequently asked questions |
| Contact | `Contact.jsx` | Contact form section |
| Footer | `Footer.jsx` | Site footer with links |

### Infrastructure

- ✅ Next.js App Router project initialized
- ✅ Tailwind CSS v4 configured with shadcn CSS variables
- ✅ Framer Motion animations on homepage sections
- ✅ Lucide React icons throughout homepage
- ✅ Responsive design (mobile-first with `sm:`, `lg:` breakpoints)
- ✅ `cn()` utility in `lib/utils.js`
- ✅ Remote image support for Unsplash in `next.config.js`
- ✅ 25+ route folders scaffolded for future pages
- ✅ ESLint configured

---

## Features Pending

### High Priority

- [ ] Authentication (login, signup, session management)
- [ ] Role-based dashboards (student, teacher, admin)
- [ ] Course listing and detail pages
- [ ] shadcn/ui base components (Button, Input, Card, Dialog, etc.)
- [ ] Proper loading and 404 pages
- [ ] Middleware for route protection

### Medium Priority

- [ ] Attendance tracking
- [ ] Assignment submission and grading
- [ ] Study notes upload and access
- [ ] Live class integration
- [ ] Recorded class library
- [ ] Exam and results management
- [ ] Certificate generation
- [ ] Notifications system
- [ ] Payment and fee management

### Lower Priority

- [ ] Analytics dashboards
- [ ] Admin reporting
- [ ] Gallery and faculty standalone pages
- [ ] Settings and profile management
- [ ] Announcements management
- [ ] Demo class booking flow
- [ ] Backend API layer
- [ ] Database schema and migrations
- [ ] Deployment pipeline

---

## Coding Standards

### General

- Use **JavaScript (JSX)** — do not introduce TypeScript unless explicitly requested
- Use the **App Router** — place pages in `app/` with `page.jsx` convention
- Mark interactive components with `"use client"` at the top of the file
- Keep files under **300 lines** when possible; split into sub-components if larger
- Use **path aliases** (`@/components/...`) instead of relative imports beyond one level

### Components

- Place reusable UI primitives in `components/ui/`
- Place page-specific sections in domain folders (e.g., `components/home/`, `components/student/`)
- Export default function components: `export default function ComponentName()`
- Do not create duplicate components — search existing components first
- Use the `cn()` helper from `@/lib/utils` for conditional class names

### Styling

- Use **Tailwind CSS only** — no inline styles, no CSS modules, no styled-components
- Follow the established color palette (see [Theme](#theme))
- Use responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- Prefer semantic spacing: `px-4 sm:px-6 lg:px-8`, `max-w-7xl mx-auto`
- Use `font-black` for headings, `font-bold` for labels, `font-semibold` for nav items

### Icons & Animation

- Use **Lucide React** exclusively for icons: `import { IconName } from "lucide-react"`
- Use **Framer Motion** for animations: `motion.div`, `initial`, `animate`, `whileInView`
- Prefer subtle entrance animations with `opacity` and `y` transforms
- Use `viewport={{ once: true }}` for scroll-triggered animations

### Data & Services

- Place static/mock data in `data/`
- Place API calls in `services/`
- Place shared constants in `constants/`
- Place React context in `context/`
- Place custom hooks in `hooks/`

---

## Theme

### Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| **Primary Green** | `#1d6f42` | Buttons, links, accents, brand mark |
| **Primary Green Hover** | `#155c36` | Button hover states |
| **Dark Text** | `#10231b` | Headings, primary body text |
| **Muted Text** | `#53685f` | Secondary body text, descriptions |
| **Subtle Text** | `#5d7369`, `#6c8076`, `#40554b` | Labels, captions, metadata |
| **Accent Gold** | `#f7b733` | Badges, highlights, live indicators |
| **Page Background** | `#f7faf8` | Main page background |
| **Section Background** | `#edf6f0` | Hero and tinted sections |
| **Card Background** | `#fbfdfb`, `#ffffff` | Cards and elevated surfaces |
| **Border** | `#c7decf`, `#c9ddd1`, `#d9e7df`, `#e1ece5` | Borders and dividers |
| **Light Green Tint** | `#e8f4ed`, `#f1f7f3` | Hover backgrounds, badges |

### Course Category Tones

| Category | Background | Text |
|----------|------------|------|
| Foundation | `#e8f4ed` | `#1d6f42` |
| Science | `#fff4dc` | `#9a5f00` |
| Commerce | `#edf2ff` | `#3154a3` |
| Competitive | `#f4eefc` | `#6844a8` |

### shadcn CSS Variables

The project uses shadcn/ui CSS variable conventions defined in `app/globals.css`:

- `--primary`: Blue (`221.2 83.2% 53.3%`) — used for shadcn components
- `--background`, `--foreground`, `--card`, `--muted`, etc.
- Dark mode variables are defined under `.dark` class
- Border radius: `--radius: 0.5rem`

> **Note:** Homepage components use the brand green palette directly via Tailwind arbitrary values (e.g., `bg-[#1d6f42]`). Dashboard and form pages should gradually adopt shadcn variables for consistency.

### Typography

| Element | Classes |
|---------|---------|
| Hero heading | `text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight` |
| Section heading | `text-4xl sm:text-5xl font-black tracking-tight` |
| Section label | `text-sm font-black uppercase tracking-[0.24em]` |
| Body text | `text-lg leading-8` or `text-base` |
| Button text | `text-base font-black` or `text-sm font-bold` |
| Nav links | `text-sm font-semibold` |

No custom font is loaded — the project uses the system font stack via Tailwind defaults with `antialiased` on body.

---

## UI Philosophy

1. **Premium but approachable** — Clean layouts, generous whitespace, bold typography, and subtle shadows create a high-end coaching brand feel without being corporate or cold.

2. **Conversion-focused homepage** — Every section on the landing page drives toward demo booking or course exploration. CTAs are prominent and repeated strategically.

3. **Mobile-first responsive** — All layouts start mobile and scale up. Navigation collapses to a hamburger menu below `lg` breakpoint.

4. **Motion with purpose** — Framer Motion entrance animations guide attention without distracting. Scroll-triggered reveals use `whileInView` with staggered delays.

5. **Modular sections** — Homepage is composed of independent section components that can be reordered, removed, or extended without affecting others.

6. **Consistent spacing rhythm** — Sections use `py-20` vertical padding, `max-w-7xl mx-auto` horizontal containment, and `px-4 sm:px-6 lg:px-8` responsive padding.

7. **Accessible by default** — Semantic HTML (`<section>`, `<nav>`, `<header>`), `aria-label` on interactive elements, and sufficient color contrast.

8. **Data-driven dashboards (future)** — Panel pages will prioritize scannable data tables, stat cards, and action-oriented layouts over decorative elements.

---

## Future Roadmap

See `TODO.md` for the detailed development checklist.

### Phase 1 — Foundation (Current → Next)
- Complete authentication flow
- Install shadcn/ui base components
- Build login/signup pages
- Implement middleware route protection
- Create proper loading and 404 pages

### Phase 2 — Core Panels
- Student dashboard with enrolled courses
- Teacher dashboard with batch management
- Admin dashboard with user overview
- Course listing and detail pages

### Phase 3 — Learning Features
- Live class scheduling and joining
- Recorded class library with playback
- Assignment creation, submission, and grading
- Study notes upload and organization
- Attendance marking and tracking

### Phase 4 — Assessment & Certification
- Exam creation and taking
- Results publishing and analytics
- Certificate generation and download

### Phase 5 — Operations
- Payment and fee management
- Notification system (in-app + email)
- Announcements management
- Analytics and reporting dashboards

### Phase 6 — Backend & Deployment
- API layer design and implementation
- Database schema and ORM setup
- Authentication provider integration
- CI/CD pipeline and production deployment

---

## AI Instructions

When working on this project, follow these instructions:

1. **Read this file first** — Always read `MEMORY.md`, `PROJECT_RULES.md`, and `PROJECT_VISION.md` before making changes.

2. **Read `PROJECT_RULES.md`** — Follow all development rules without exception.

3. **Preserve the homepage** — The homepage is complete and working. Do not modify homepage components unless explicitly asked.

4. **Respect the folder structure** — Place new files in the correct domain folder. Do not create ad-hoc directories.

5. **Match existing patterns** — Study nearby files before writing new code. Match naming, import style, component structure, and Tailwind usage.

6. **Use scaffolded routes** — When implementing a new page, add `page.jsx` to the existing route folder. Do not rename or restructure route folders.

7. **Minimize scope** — Make the smallest correct change. Do not refactor unrelated code.

8. **No duplicate components** — Search `components/` before creating anything new.

9. **Fix all errors** — Run lint checks and ensure the project builds before finishing.

10. **Update documentation** — When completing a feature, update the relevant section in `MEMORY.md` and check off items in `TODO.md`.

11. **Do not create documentation files** unless explicitly requested by the user.

12. **Do not commit** unless explicitly requested by the user.

---

## Things AI Should Never Change

| Rule | Reason |
|------|--------|
| **Do not rename folders** | Route structure is intentional and mapped to URL paths |
| **Do not modify homepage components** | Homepage is complete and approved unless user requests changes |
| **Do not change the color palette** | Brand colors are established across all homepage sections |
| **Do not introduce TypeScript** | Project is JavaScript-only unless explicitly requested |
| **Do not replace Tailwind with other CSS solutions** | Tailwind is the sole styling approach |
| **Do not replace Lucide with other icon libraries** | Lucide is configured in shadcn and used throughout |
| **Do not replace Framer Motion with other animation libraries** | Framer Motion is the established animation tool |
| **Do not delete `.gitkeep` files in scaffolded folders** | They preserve empty directory structure in git |
| **Do not modify `jsconfig.json` path aliases** | All imports depend on the current alias configuration |
| **Do not modify `components.json` shadcn config** | shadcn/ui installation depends on this configuration |
| **Do not create duplicate route folders** | Routes already exist — add `page.jsx` to existing folders |
| **Do not overwrite `lib/utils.js`** | The `cn()` function is used project-wide |
| **Do not add CSS modules, styled-components, or inline styles** | Tailwind CSS only |
| **Do not remove Framer Motion from existing animated components** | Animations are part of the approved UX |
| **Do not change App Router to Pages Router** | Architecture decision is final |
| **Do not install packages without user approval** | Dependency changes should be intentional |

---

*Last updated: July 2026*
*Maintained by: Digiwell development team*
