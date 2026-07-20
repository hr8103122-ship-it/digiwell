# Digiwell — Project Vision

> **Purpose:** Defines the mission, brand identity, design philosophy, and long-term aspirations for the Digiwell coaching management platform. All design and product decisions should align with this document.

---

## Table of Contents

1. [Mission](#mission)
2. [Long-Term Goals](#long-term-goals)
3. [Target Audience](#target-audience)
4. [Brand Identity](#brand-identity)
5. [Design Philosophy](#design-philosophy)
6. [Color Palette](#color-palette)
7. [Typography](#typography)
8. [Animation Style](#animation-style)
9. [UI Principles](#ui-principles)
10. [Performance Goals](#performance-goals)
11. [Scalability Goals](#scalability-goals)
12. [Future Modules](#future-modules)
13. [Premium User Experience Standards](#premium-user-experience-standards)

---

## Mission

**Digiwell exists to give every coaching institute the tools to deliver a world-class learning experience — without the complexity of enterprise software.**

We believe that coaching centers, tuition institutes, and hybrid learning organizations deserve a platform that is:

- **Unified** — One place for courses, classes, assignments, attendance, payments, and progress tracking
- **Accessible** — Responsive, fast, and usable on any device by students, teachers, and administrators
- **Insightful** — Data-driven dashboards that help institutes measure and improve outcomes
- **Premium** — A polished, trustworthy interface that reflects the quality of the education being delivered

Digiwell is not just a website — it is the digital backbone of a modern coaching institute.

---

## Long-Term Goals

### Year 1 — Platform Foundation

- Launch a fully functional coaching management platform
- Support student, teacher, and admin roles with dedicated dashboards
- Enable course enrollment, live classes, assignments, and attendance tracking
- Process fee payments and generate certificates
- Onboard the first coaching institute as a pilot customer

### Year 2 — Growth & Intelligence

- Multi-institute support (SaaS model)
- Advanced analytics and performance dashboards
- AI-powered doubt resolution and study recommendations
- Mobile app (React Native or PWA)
- Integration with popular video conferencing platforms (Zoom, Google Meet)
- Parent portal for progress monitoring

### Year 3 — Scale & Ecosystem

- Marketplace for coaching institutes to list courses publicly
- White-label solution for large institute chains
- API platform for third-party integrations
- Automated grading and plagiarism detection
- Regional language support
- Offline-first capabilities for low-connectivity areas

---

## Target Audience

### Primary Users

| Persona | Description | Key Needs |
|---------|-------------|-----------|
| **Students (Classes 6–12 + Competitive)** | Learners enrolled in coaching programs | Access courses, attend classes, submit work, track progress |
| **Teachers / Faculty** | Subject experts managing batches | Create content, conduct classes, grade work, mark attendance |
| **Institute Admin** | Owners and managers of coaching centers | Manage users, fees, courses, analytics, and operations |
| **Parents** | Guardians monitoring student progress | View attendance, results, fee status, and announcements |

### Secondary Users

| Persona | Description | Key Needs |
|---------|-------------|-----------|
| **Prospective Students** | Visitors exploring the institute | Browse courses, book demo classes, read testimonials |
| **Institute Staff** | Non-teaching administrative staff | Handle admissions, fee collection, certificate issuance |

### Institute Profile

Digiwell is designed for:

- Coaching centers (Foundation, Science, Commerce, Competitive prep)
- Tuition institutes with 100–5,000 students
- Hybrid learning organizations (online + offline)
- Single-location and small multi-branch institutes

---

## Brand Identity

### Name

**Digiwell** — Digital + Well (well-being, wellness of learning)

### Tagline

> *Coaching that keeps every learner moving forward.*

### Brand Personality

| Trait | Expression |
|-------|------------|
| **Trustworthy** | Clean layouts, professional typography, consistent green palette |
| **Progressive** | Modern tech stack, smooth animations, data-driven features |
| **Supportive** | Warm tones, approachable copy, mentor-focused messaging |
| **Ambitious** | Bold headings, strong CTAs, results-oriented stats |
| **Premium** | Generous whitespace, subtle shadows, high-quality imagery |

### Logo & Mark

- Square green mark with white "D" letter (`bg-[#1d6f42]`)
- Wordmark: "Digiwell" in `font-black tracking-tight`
- Subtitle: "Coaching Platform" in uppercase muted text
- Used in navbar and footer consistently

### Voice & Tone

- **Confident but not arrogant** — "Programs built for measurable academic growth"
- **Clear and direct** — Short sentences, active voice, no jargon
- **Encouraging** — Focus on progress, momentum, and outcomes
- **Professional** — Suitable for parents and institute owners, not overly casual

---

## Design Philosophy

### Core Principles

1. **Clarity over decoration** — Every visual element serves a purpose. No ornamental design without function.

2. **Hierarchy through weight** — Use font weight (`font-black`, `font-bold`, `font-semibold`) and size to establish clear information hierarchy, not color alone.

3. **Green as trust** — The primary green (`#1d6f42`) signals growth, education, and reliability. It is used for all primary actions and brand elements.

4. **Gold as energy** — The accent gold (`#f7b733`) adds warmth and urgency for badges, live indicators, and highlights.

5. **Whitespace is premium** — Generous padding (`py-20` sections, `gap-12` grids) creates breathing room and a high-end feel.

6. **Cards as containers** — Information is grouped in bordered, rounded cards with subtle shadows rather than flat lists.

7. **Photography over illustration** — Real classroom and student photography (via Unsplash) builds authenticity and trust.

8. **Progressive disclosure** — Show essential information first; details on interaction (accordions, modals, detail pages).

---

## Color Palette

### Primary Palette

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Digiwell Green** | `#1d6f42` | 29, 111, 66 | Primary buttons, links, brand mark, icons |
| **Green Dark** | `#155c36` | 21, 92, 54 | Button hover, active states |
| **Forest Text** | `#10231b` | 16, 35, 27 | Headings, primary text |
| **Sage Muted** | `#53685f` | 83, 104, 95 | Body text, descriptions |
| **Moss Label** | `#5d7369` | 93, 115, 105 | Labels, captions, metadata |
| **Fern Subtle** | `#6c8076` | 108, 128, 118 | Uppercase labels, stat descriptions |
| **Leaf Accent** | `#40554b` | 64, 85, 75 | Highlight card text |

### Accent Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Gold Signal** | `#f7b733` | Live badges, attention indicators, accent dots |
| **Gold Text** | `#9a5f00` | Science stream category text |

### Surface Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Page Canvas** | `#f7faf8` | Main page background |
| **Hero Tint** | `#edf6f0` | Hero section background |
| **Card White** | `#ffffff` | Cards, navbar, elevated surfaces |
| **Card Soft** | `#fbfdfb` | Stat cards, subtle containers |
| **Green Wash** | `#e8f4ed` | Hover backgrounds, foundation badges |
| **Green Light** | `#f1f7f3` | Mobile nav hover, subtle tints |
| **White Overlay** | `white/88`, `white/92` | Navbar backdrop, image overlays |

### Border Palette

| Name | Hex | Usage |
|------|-----|-------|
| **Soft Border** | `#c7decf` | Hero badge border |
| **Card Border** | `#c9ddd1` | Secondary button borders |
| **Nav Border** | `#d9e7df` | Mobile menu button |
| **Section Border** | `#e1ece5` | Stat cards, section dividers |
| **Light Divider** | `#e4eee8` | Mobile nav divider |
| **Progress Track** | `#dceae1` | Progress bar backgrounds |

### Category Colors

| Category | Background | Text | Icon Context |
|----------|------------|------|--------------|
| Foundation | `#e8f4ed` | `#1d6f42` | Green — growth, basics |
| Science | `#fff4dc` | `#9a5f00` | Warm gold — discovery |
| Commerce | `#edf2ff` | `#3154a3` | Blue — business, logic |
| Competitive | `#f4eefc` | `#6844a8` | Purple — ambition, excellence |

### shadcn System Colors

For dashboard and form UI (future), use shadcn CSS variables:

- `--primary`: HSL blue (221.2, 83.2%, 53.3%)
- `--destructive`: HSL red for error/delete actions
- `--muted`: HSL gray for secondary surfaces
- Dark mode variants defined under `.dark` class

---

## Typography

### Font Stack

System font stack (no custom web fonts loaded):

```
ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"
```

Applied via Tailwind defaults with `antialiased` on `<body>`.

### Type Scale

| Element | Size | Weight | Tracking | Example Usage |
|---------|------|--------|----------|---------------|
| Hero H1 | `text-5xl` → `text-7xl` | `font-black` | `tracking-tight` | "Coaching that keeps every learner moving forward." |
| Section H2 | `text-4xl` → `text-5xl` | `font-black` | `tracking-tight` | "Programs built for measurable academic growth." |
| Section Label | `text-sm` | `font-black` | `tracking-[0.24em]` uppercase | "COURSES" |
| Body Large | `text-lg` → `text-xl` | normal | — | Hero description paragraph |
| Body | `text-base` | normal | — | Card descriptions |
| Button | `text-base` or `text-sm` | `font-black` or `font-bold` | — | CTA buttons |
| Nav Link | `text-sm` | `font-semibold` | — | Navigation items |
| Stat Value | `text-4xl` | `font-black` | `tracking-tight` | "12K+" |
| Stat Label | `text-sm` | `font-bold` | uppercase | "students guided" |
| Caption | `text-[11px]` | `font-semibold` | uppercase | "Coaching Platform" subtitle |

### Typography Rules

- Headings always use `font-black` (weight 900)
- Labels and badges use `font-bold` (weight 700)
- Navigation uses `font-semibold` (weight 600)
- Body text uses default weight (400)
- Section labels are always uppercase with wide letter-spacing
- Line height for body: `leading-8` (32px at 18px font size)
- Hero line height: `leading-[1.02]` for tight display text

---

## Animation Style

### Philosophy

Animations in Digiwell are **subtle, purposeful, and performance-conscious**. They guide attention and create a sense of polish without slowing down the user or causing motion sickness.

### Entrance Animations

| Pattern | Properties | Usage |
|---------|-----------|-------|
| **Fade up** | `opacity: 0→1`, `y: 24→0`, `duration: 0.7s` | Hero text, section headings |
| **Scale in** | `opacity: 0→1`, `scale: 0.96→1`, `duration: 0.7s` | Hero image, large cards |
| **Staggered reveal** | `y: 18→0`, `delay: index * 0.06s` | Stat cards, list items |
| **Scroll trigger** | `whileInView`, `viewport: { once: true, amount: 0.4 }` | Below-fold sections |

### Interaction Animations

| Pattern | Usage |
|---------|-------|
| `transition hover:bg-[#155c36]` | Button hover color shifts |
| `transition hover:border-[#1d6f42]` | Outline button hover |
| `transition hover:text-[#1d6f42]` | Link hover color |
| `shadow-xl shadow-emerald-900/20` | Primary button elevation |
| `backdrop-blur-xl` | Navbar glass effect |

### Animation Rules

- Never animate layout properties (width, height, margin) — use opacity and transform only
- Always set `viewport={{ once: true }}` on scroll animations to prevent re-triggering
- Maximum animation duration: 0.7 seconds
- No infinite animations except loading spinners
- Respect `prefers-reduced-motion` (to be implemented)

---

## UI Principles

### Layout

| Principle | Implementation |
|-----------|---------------|
| **Contained width** | `max-w-7xl mx-auto` (1280px max) |
| **Responsive padding** | `px-4 sm:px-6 lg:px-8` |
| **Section spacing** | `py-20` between major sections |
| **Grid layouts** | CSS Grid with responsive columns (`sm:grid-cols-2 lg:grid-cols-4`) |
| **Flex for alignment** | Flexbox for navbars, button groups, inline elements |

### Components

| Component | Style |
|-----------|-------|
| **Primary button** | `rounded-md bg-[#1d6f42] px-6 py-4 font-black text-white shadow-xl` |
| **Secondary button** | `rounded-md border bg-white px-6 py-4 font-black text-[#1d6f42]` |
| **Card** | `rounded-xl border bg-white p-6 shadow-sm` |
| **Badge** | `rounded-full border px-4 py-2 text-sm font-bold` |
| **Navbar** | `fixed inset-x-0 top-0 z-50 backdrop-blur-xl bg-white/88` |
| **Input** (future) | shadcn Input with `--border` and `--ring` variables |
| **Image container** | `rounded-[2rem] overflow-hidden border shadow-2xl` |

### Spacing Rhythm

- Base unit: 4px (Tailwind default)
- Component internal padding: `p-4` to `p-6`
- Section gaps: `gap-6` to `gap-12`
- Stack spacing: `mt-3`, `mt-6`, `mt-8` for vertical rhythm
- Button padding: `px-5 py-2.5` (small) or `px-6 py-4` (large)

### Shadows

| Level | Class | Usage |
|-------|-------|-------|
| Subtle | `shadow-sm` | Stat cards, highlight cards |
| Medium | `shadow-lg shadow-emerald-900/15` | Navbar buttons, brand mark |
| Strong | `shadow-xl shadow-emerald-900/20` | Primary CTAs |
| Dramatic | `shadow-2xl shadow-emerald-950/15` | Hero image container |

### Border Radius

| Element | Radius |
|---------|--------|
| Buttons | `rounded-md` (6px) |
| Cards | `rounded-xl` (12px) |
| Hero image | `rounded-[2rem]` (32px) |
| Badges/pills | `rounded-full` |
| Logo mark | `rounded-lg` (8px) |
| Progress bars | `rounded-full` |

---

## Performance Goals

| Metric | Target |
|--------|--------|
| **Lighthouse Performance** | ≥ 90 |
| **Lighthouse Accessibility** | ≥ 95 |
| **Lighthouse Best Practices** | ≥ 95 |
| **Lighthouse SEO** | ≥ 95 |
| **First Contentful Paint** | < 1.5s |
| **Largest Contentful Paint** | < 2.5s |
| **Cumulative Layout Shift** | < 0.1 |
| **Time to Interactive** | < 3.5s |
| **Total page weight (homepage)** | < 500KB (excluding images) |

### Performance Strategies

- Use Next.js Image component with `priority` for above-fold images
- Server components by default; client components only when needed
- Lazy load below-fold sections and images
- Minimize client-side JavaScript bundle
- Use static generation where possible
- Optimize Framer Motion bundle (import only used features)
- Remote images via configured `remotePatterns` in `next.config.js`

---

## Scalability Goals

### Code Scalability

| Goal | Approach |
|------|----------|
| **Modular components** | Domain-organized component folders |
| **Service layer** | API calls isolated in `services/` |
| **Configuration** | Environment-specific config in `config/` |
| **Type safety (future)** | Consider TypeScript migration at v1.0 |
| **Testing (future)** | Unit tests for utilities, integration tests for flows |

### Data Scalability

| Goal | Approach |
|------|----------|
| **Pagination** | All list views paginated from the start |
| **Search & filter** | Server-side search for courses, students, assignments |
| **Caching** | Next.js caching strategies, React Query for client state |
| **File storage** | Cloud storage (S3/Cloudinary) for notes, recordings, certificates |

### Multi-Tenancy (Future)

| Goal | Approach |
|------|----------|
| **Institute isolation** | Tenant ID on all database records |
| **Custom branding** | Per-institute theme overrides |
| **Role hierarchy** | Super admin → institute admin → teacher → student |
| **White-label** | Custom domain and branding for enterprise clients |

---

## Future Modules

### Core Platform Modules

| Module | Description | Priority |
|--------|-------------|----------|
| **Authentication** | Login, signup, password reset, session management | P0 |
| **Student Panel** | Dashboard, enrolled courses, progress tracking | P0 |
| **Teacher Panel** | Batch management, class scheduling, grading | P0 |
| **Admin Panel** | User management, institute settings, analytics | P0 |
| **Courses** | Course catalog, enrollment, curriculum management | P0 |
| **Live Classes** | Schedule, join, attendance during live sessions | P1 |
| **Recorded Classes** | Upload, organize, stream recorded lectures | P1 |
| **Assignments** | Create, submit, grade, deadline management | P1 |
| **Attendance** | Mark, track, report attendance per batch | P1 |
| **Notes** | Upload, organize, share study materials | P1 |
| **Exams** | Create tests, conduct exams, publish results | P2 |
| **Certificates** | Generate and download completion certificates | P2 |
| **Payments** | Fee collection, invoices, payment history | P2 |
| **Notifications** | In-app alerts, email notifications, announcements | P2 |
| **Analytics** | Performance dashboards, trend reports, exports | P3 |

### Extended Modules (Year 2+)

| Module | Description |
|--------|-------------|
| **Parent Portal** | View child's progress, attendance, fees |
| **Doubt Forum** | Q&A between students and teachers |
| **Discussion Board** | Batch-level discussion threads |
| **Library** | Digital book and resource catalog |
| **Timetable** | Auto-generated and manual class schedules |
| **Leave Management** | Student and teacher leave requests |
| **Inventory** | Book and material distribution tracking |
| **CRM** | Lead management for admissions |
| **WhatsApp Integration** | Automated notifications via WhatsApp |
| **Mobile App** | Native or PWA mobile experience |

---

## Premium User Experience Standards

Every feature in Digiwell must meet these experience standards:

### Visual Quality

- [ ] Consistent with brand color palette and typography
- [ ] Proper spacing and alignment (no cramped or misaligned elements)
- [ ] Responsive at all breakpoints (375px, 768px, 1024px, 1280px+)
- [ ] Smooth animations on entrance and interaction
- [ ] High-quality imagery (no pixelated or stretched images)
- [ ] Accessible color contrast (WCAG AA minimum)

### Interaction Quality

- [ ] All buttons and links have visible hover/focus states
- [ ] Forms validate input with clear error messages
- [ ] Loading states shown during async operations
- [ ] Empty states guide users on next actions
- [ ] Success/error feedback via toast notifications (when implemented)
- [ ] Keyboard navigable (tab order, focus rings)

### Content Quality

- [ ] Clear, concise copy — no lorem ipsum in production
- [ ] Consistent terminology across all panels
- [ ] Helpful placeholder text in form fields
- [ ] Meaningful page titles and meta descriptions
- [ ] Error messages that explain what went wrong and how to fix it

### Performance Quality

- [ ] Pages load in under 3 seconds on 3G connection
- [ ] No layout shift during page load
- [ ] Images optimized and lazy-loaded
- [ ] No unnecessary re-renders in client components
- [ ] Smooth scrolling and animation (60fps)

### Trust & Security

- [ ] Authentication required for all panel routes
- [ ] Role-based access control enforced
- [ ] Sensitive data never exposed in client-side code
- [ ] HTTPS enforced in production
- [ ] Input sanitization on all forms

---

*This vision document evolves with the product. Update it when strategic direction changes.*

*Last updated: July 2026*
