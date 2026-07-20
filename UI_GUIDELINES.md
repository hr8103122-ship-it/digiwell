# Digiwell — UI Guidelines

> **Purpose:** Permanent design system for the Digiwell coaching management platform. All UI work must follow these guidelines. Read alongside `PROJECT_VISION.md` and `MEMORY.md`.

---

## Table of Contents

1. [Brand Identity](#brand-identity)
2. [Color System](#color-system)
3. [Typography](#typography)
4. [Border Radius](#border-radius)
5. [Shadows](#shadows)
6. [Spacing System](#spacing-system)
7. [Buttons](#buttons)
8. [Cards](#cards)
9. [Navbar Style](#navbar-style)
10. [Footer Style](#footer-style)
11. [Animation Guidelines](#animation-guidelines)
12. [Icons](#icons)
13. [Images](#images)
14. [Responsiveness](#responsiveness)
15. [Accessibility](#accessibility)
16. [Performance Rules](#performance-rules)
17. [UI Rules](#ui-rules)

---

## Brand Identity

| Attribute | Value |
|-----------|-------|
| **Project Name** | Digiwell |
| **Tagline** | Coaching that keeps every learner moving forward. |
| **Category** | Premium Coaching Management Platform |
| **Personality** | Modern, clean, trustworthy, premium |

### Brand Principles

- **Modern** — Contemporary layouts, smooth animations, and a tech-forward feel without clutter.
- **Clean** — Generous whitespace, clear hierarchy, and minimal visual noise.
- **Trustworthy** — Consistent green palette, professional typography, and authentic photography.
- **Premium** — Bold headings, subtle shadows, glass effects, and polished micro-interactions.

### Logo Mark

```
┌──────────┐
│    D     │  bg-[#1d6f42] text-white font-black rounded-lg
└──────────┘
Digiwell          text-xl font-black text-[#10231b]
Coaching Platform text-[11px] font-semibold uppercase text-[#5d7369]
```

---

## Color System

### Primary

The primary green represents growth, education, and trust. Use for all primary actions, links, icons, and brand elements.

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Primary | `#1d6f42` | `bg-[#1d6f42]` / `text-[#1d6f42]` | Buttons, links, brand mark, icons |
| Primary Hover | `#155c36` | `hover:bg-[#155c36]` | Button hover, active states |
| Primary Light | `#e8f4ed` | `bg-[#e8f4ed]` | Icon backgrounds, badges, hover tints |
| Primary Muted | `#c7decf` | `border-[#c7decf]` | Primary-tinted borders |

### Secondary

Neutral tones for supporting UI, secondary actions, and structural elements.

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Secondary | `#53685f` | `text-[#53685f]` | Secondary body text, nav links |
| Secondary Light | `#f1f7f3` | `bg-[#f1f7f3]` | Hover backgrounds, subtle tints |
| Secondary Border | `#c9ddd1` | `border-[#c9ddd1]` | Outline button borders |
| Secondary Muted | `#7a8d84` | `text-[#7a8d84]` | Labels, metadata, captions |

### Accent

Gold accent adds warmth, urgency, and energy for highlights and live indicators.

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Accent | `#f7b733` | `bg-[#f7b733]` / `text-[#f7b733]` | Live badges, stars, section labels on dark |
| Accent Text | `#9a5f00` | `text-[#9a5f00]` | Science category text, warm labels |
| Accent Light | `#fff4dc` | `bg-[#fff4dc]` | Science category background |

### Success

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Success | `#1d6f42` | `text-[#1d6f42]` | Success messages, completed states |
| Success Light | `#e8f4ed` | `bg-[#e8f4ed]` | Success background tints |
| Success Border | `#c7decf` | `border-[#c7decf]` | Success card borders |

### Warning

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Warning | `#f7b733` | `text-[#f7b733]` | Warning alerts, pending states |
| Warning Light | `#fff4dc` | `bg-[#fff4dc]` | Warning background tints |
| Warning Text | `#9a5f00` | `text-[#9a5f00]` | Warning text on light backgrounds |

### Error

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Error | `#ef4444` | `text-destructive` | Error messages, validation failures |
| Error Light | `#fef2f2` | `bg-red-50` | Error background tints |
| Error (shadcn) | `hsl(0 84.2% 60.2%)` | `bg-destructive` | shadcn destructive actions |

### Background

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Page Background | `#f7faf8` | `bg-[#f7faf8]` | Main page canvas |
| Hero Background | `#edf6f0` | `bg-[#edf6f0]` | Hero and tinted sections |
| White | `#ffffff` | `bg-white` | Cards, navbar, elevated surfaces |
| Dark Section | `#10231b` | `bg-[#10231b]` | Testimonials, footer, dark sections |

### Surface

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Surface Default | `#ffffff` | `bg-white` | Cards, modals, dropdowns |
| Surface Soft | `#fbfdfb` | `bg-[#fbfdfb]` | Stat cards, feature cards |
| Surface Muted | `#f1f7f3` | `bg-[#f1f7f3]` | Hover states, inactive tabs |
| Surface Glass | `white/88` | `bg-white/88 backdrop-blur-xl` | Navbar, overlays |
| Surface Dark Glass | `white/8` | `bg-white/8 backdrop-blur` | Cards on dark backgrounds |

### Text Colors

| Token | Hex | Tailwind | Usage |
|-------|-----|----------|-------|
| Heading | `#10231b` | `text-[#10231b]` | H1, H2, H3, stat values |
| Body | `#53685f` | `text-[#53685f]` | Paragraphs, descriptions |
| Muted | `#5d7369` | `text-[#5d7369]` | Card body text, secondary info |
| Subtle | `#6c8076` | `text-[#6c8076]` | Uppercase labels, stat descriptions |
| Label | `#7a8d84` | `text-[#7a8d84]` | Category labels, metadata |
| On Dark | `#ffffff` | `text-white` | Text on dark backgrounds |
| On Dark Muted | `white/65` | `text-white/65` | Footer links, secondary on dark |
| On Dark Subtle | `white/50` | `text-white/50` | Copyright, tertiary on dark |

### Category Colors

| Category | Background | Text | Icon Context |
|----------|------------|------|--------------|
| Foundation | `#e8f4ed` | `#1d6f42` | Growth, basics |
| Science | `#fff4dc` | `#9a5f00` | Discovery, warmth |
| Commerce | `#edf2ff` | `#3154a3` | Business, logic |
| Competitive | `#f4eefc` | `#6844a8` | Ambition, excellence |

### Dark Mode Colors

Dark mode uses shadcn CSS variables defined in `app/globals.css`. Apply via the `.dark` class on `<html>`.

| Token | Light Mode | Dark Mode |
|-------|-----------|-----------|
| Background | `hsl(0 0% 100%)` | `hsl(222.2 84% 4.9%)` |
| Foreground | `hsl(222.2 84% 4.9%)` | `hsl(210 40% 98%)` |
| Primary | `hsl(221.2 83.2% 53.3%)` | `hsl(217.2 91.2% 59.8%)` |
| Muted | `hsl(210 40% 96.1%)` | `hsl(217.2 32.6% 17.5%)` |
| Border | `hsl(214.3 31.8% 91.4%)` | `hsl(217.2 32.6% 17.5%)` |
| Destructive | `hsl(0 84.2% 60.2%)` | `hsl(0 62.8% 30.6%)` |

> **Rule:** All new dashboard and form components must support dark mode using shadcn CSS variables (`bg-background`, `text-foreground`, `border-border`, etc.). Marketing pages may use the brand green palette directly.

---

## Typography

### Font Stack

System font stack — no custom web fonts loaded:

```
ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"
```

Applied via Tailwind defaults with `antialiased` on `<body>`.

### Headings

| Level | Size | Weight | Tracking | Line Height | Example Classes |
|-------|------|--------|----------|-------------|-----------------|
| H1 (Hero) | 48–72px | 900 (`font-black`) | `tracking-tight` | 1.02 | `text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.02] tracking-tight text-[#10231b]` |
| H2 (Section) | 36–48px | 900 (`font-black`) | `tracking-tight` | 1.1 | `text-4xl sm:text-5xl font-black tracking-tight text-[#10231b]` |
| H3 (Card) | 20–24px | 900 (`font-black`) | normal | 1.3 | `text-xl font-black text-[#10231b]` or `text-2xl font-black` |
| H4 (Subsection) | 18px | 700 (`font-bold`) | normal | 1.4 | `text-lg font-bold text-[#10231b]` |

### Subheadings

| Type | Size | Weight | Tracking | Example Classes |
|------|------|--------|----------|-----------------|
| Section Label | 14px | 900 (`font-black`) | `tracking-[0.24em]` uppercase | `text-sm font-black uppercase tracking-[0.24em] text-[#1d6f42]` |
| Section Label (Dark) | 14px | 900 (`font-black`) | `tracking-[0.24em]` uppercase | `text-sm font-black uppercase tracking-[0.24em] text-[#f7b733]` |
| Card Subtitle | 14px | 900 (`font-black`) | uppercase | `text-sm font-black uppercase text-[#7a8d84]` |
| Role/Metadata | 14px | 600 (`font-semibold`) | normal | `text-sm font-semibold text-white/58` |

### Body

| Type | Size | Weight | Line Height | Example Classes |
|------|------|--------|-------------|-----------------|
| Body Large | 18–20px | 400 (normal) | 32px (`leading-8`) | `text-lg leading-8 text-[#53685f] sm:text-xl` |
| Body Default | 16px | 400 (normal) | 28px (`leading-7`) | `text-base leading-7 text-[#5d7369]` |
| Body Small | 14px | 400 (normal) | 20px (`leading-5`) | `text-sm leading-5 text-[#53685f]` |
| Caption | 11px | 600 (`font-semibold`) | normal | `text-[11px] font-semibold uppercase text-[#5d7369]` |

### Button Text

| Variant | Size | Weight | Example Classes |
|---------|------|--------|-----------------|
| Large CTA | 16px | 900 (`font-black`) | `text-base font-black` |
| Standard CTA | 14px | 700 (`font-bold`) | `text-sm font-bold` |
| Link Action | 14–16px | 900 (`font-black`) | `text-sm font-black text-[#1d6f42]` |

### Font Sizes Reference

| Tailwind Class | Pixel Size | Common Usage |
|----------------|-----------|--------------|
| `text-[11px]` | 11px | Brand subtitle |
| `text-xs` | 12px | Badges, tiny labels |
| `text-sm` | 14px | Nav links, labels, buttons |
| `text-base` | 16px | Body text, large buttons |
| `text-lg` | 18px | Testimonial quotes, body large |
| `text-xl` | 20px | Card titles, brand name |
| `text-2xl` | 24px | Faculty names, card headings |
| `text-4xl` | 36px | Section headings (mobile) |
| `text-5xl` | 48px | Section headings (tablet) |
| `text-6xl` | 60px | Hero heading (tablet) |
| `text-7xl` | 72px | Hero heading (desktop) |

### Font Weights Reference

| Tailwind Class | Weight | Usage |
|----------------|--------|-------|
| `font-normal` | 400 | Body paragraphs |
| `font-semibold` | 600 | Nav links, metadata |
| `font-bold` | 700 | Labels, secondary buttons |
| `font-black` | 900 | Headings, CTAs, stat values |

### Line Heights Reference

| Tailwind Class | Value | Usage |
|----------------|-------|-------|
| `leading-none` | 1 | Logo text stacks |
| `leading-[1.02]` | 1.02 | Hero display headings |
| `leading-5` | 20px | Small text |
| `leading-7` | 28px | Card body text |
| `leading-8` | 32px | Large body, testimonial quotes |

---

## Border Radius

| Token | Tailwind | Pixel Value | Usage |
|-------|----------|-------------|-------|
| **Small** | `rounded-md` | 6px | Buttons, inputs, social icons, nav toggle |
| **Medium** | `rounded-lg` | 8px | Logo mark, icon containers, image overlays |
| **Large** | `rounded-xl` | 12px | Cards, stat boxes, feature cards, faculty cards |
| **Extra Large** | `rounded-[2rem]` | 32px | Hero image containers, large media frames |
| **Full** | `rounded-full` | 9999px | Badges, pills, progress bars, avatars |

### Radius Rules

- Buttons and form inputs: `rounded-md`
- Cards and containers: `rounded-xl`
- Hero/large media: `rounded-[2rem]`
- Badges and status pills: `rounded-full`
- shadcn default radius: `--radius: 0.5rem` (8px) via CSS variable

---

## Shadows

### Cards

| Level | Tailwind | Usage |
|-------|----------|-------|
| Subtle | `shadow-sm` | Stat cards, feature cards at rest |
| Elevated (hover) | `hover:shadow-xl hover:shadow-emerald-950/10` | Course cards on hover |
| Strong | `shadow-2xl shadow-emerald-950/15` | Hero image container |
| Inner overlay | `shadow-xl` (on overlay cards) | Hero stat overlay on image |

```jsx
// Standard card
className="rounded-xl border border-[#e2ece6] bg-[#fbfdfb] p-6 shadow-sm"

// Interactive card (hover lift)
className="rounded-xl border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10"
```

### Navbar

| Level | Tailwind | Usage |
|-------|----------|-------|
| Navbar bar | `shadow-sm` | Fixed header shadow |
| Brand mark | `shadow-lg shadow-emerald-900/20` | Logo "D" mark |
| CTA button | `shadow-lg shadow-emerald-900/15` | "Book Demo" in navbar |

```jsx
// Navbar container
className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/88 shadow-sm backdrop-blur-xl"
```

### Buttons

| Level | Tailwind | Usage |
|-------|----------|-------|
| Primary | `shadow-xl shadow-emerald-900/20` | Hero and section primary CTAs |
| Secondary | none | Outline/ghost buttons |
| Navbar CTA | `shadow-lg shadow-emerald-900/15` | Compact navbar buttons |

```jsx
// Primary button shadow
className="shadow-xl shadow-emerald-900/20"
```

### Dialogs

| Level | Tailwind | Usage |
|-------|----------|-------|
| Dialog panel | `shadow-2xl` | Modal/dialog containers (future) |
| Dropdown | `shadow-xl` | Mobile nav dropdown, popover menus |
| Toast | `shadow-lg` | Notification toasts (future) |

```jsx
// Mobile nav dropdown
className="border-t border-[#e4eee8] bg-white px-4 py-4 shadow-xl"
```

---

## Spacing System

Base unit: **4px** (Tailwind default). All spacing must use Tailwind spacing scale.

| Token | Tailwind | Pixel | Usage |
|-------|----------|-------|-------|
| **4px** | `p-1`, `gap-1`, `mt-1` | 4px | Tight icon gaps, badge padding |
| **8px** | `p-2`, `gap-2`, `mt-2` | 8px | Inline icon gaps, compact spacing |
| **12px** | `p-3`, `gap-3`, `mt-3` | 12px | Section label to heading, card subtitle gaps |
| **16px** | `p-4`, `gap-4`, `px-4` | 16px | Mobile horizontal padding, card internal padding |
| **20px** | `p-5`, `gap-5`, `py-20` | 20px | Card grids, section vertical padding |
| **24px** | `p-6`, `gap-6`, `px-6` | 24px | Card padding, tablet horizontal padding |
| **32px** | `p-8`, `gap-8`, `px-8`, `mt-8` | 32px | Desktop horizontal padding, hero CTA gaps |
| **48px** | `gap-12`, `py-12` | 48px | Footer padding, large section gaps |
| **64px** | `pt-16`, `pt-28` | 64–112px | Navbar offset, hero top padding |

### Layout Spacing Patterns

| Pattern | Classes | Usage |
|---------|---------|-------|
| Page container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | All sections |
| Section vertical | `py-20` | Major section padding |
| Section header gap | `mt-3` (label → heading), `mt-6` (heading → content) | Section internals |
| Card grid | `gap-5` or `gap-6` | Card layouts |
| Stack spacing | `gap-3` (tight), `gap-4` (default), `gap-6` (loose) | Flex/grid stacks |
| Hero offset | `pt-28 sm:pt-32` | Account for fixed navbar |

---

## Buttons

### Primary

Solid green button for main actions and CTAs.

```jsx
<Link
  href="/demo-class"
  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#1d6f42] px-6 py-4 text-base font-black text-white shadow-xl shadow-emerald-900/20 transition hover:bg-[#155c36]"
>
  Book a free demo <ArrowRight size={19} />
</Link>
```

| Property | Value |
|----------|-------|
| Background | `#1d6f42` |
| Hover | `#155c36` |
| Text | white, `font-black` |
| Padding | `px-6 py-4` (large) or `px-5 py-2.5` (compact) |
| Radius | `rounded-md` |
| Shadow | `shadow-xl shadow-emerald-900/20` |

### Secondary

White button with green border for secondary actions.

```jsx
<a
  href="#courses"
  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#c9ddd1] bg-white px-6 py-4 text-base font-black text-[#1d6f42] transition hover:border-[#1d6f42]"
>
  <PlayCircle size={19} /> Explore courses
</a>
```

| Property | Value |
|----------|-------|
| Background | white |
| Border | `#c9ddd1`, hover: `#1d6f42` |
| Text | `#1d6f42`, `font-black` |
| Shadow | none |

### Outline

Text-only or bordered button for tertiary actions and navigation.

```jsx
<Link
  href="/login"
  className="rounded-md px-4 py-2 text-sm font-bold text-[#1d6f42] transition hover:bg-[#e8f4ed]"
>
  Login
</Link>
```

| Property | Value |
|----------|-------|
| Background | transparent, hover: `#e8f4ed` |
| Border | optional `border border-[#cfe0d6]` |
| Text | `#1d6f42`, `font-bold` |

### Ghost

Minimal button with no background or border, for inline actions.

```jsx
<Link
  href="/courses"
  className="inline-flex items-center gap-2 text-base font-black text-[#1d6f42]"
>
  View all courses <ArrowRight size={18} />
</Link>
```

| Property | Value |
|----------|-------|
| Background | none |
| Text | `#1d6f42`, `font-black` |
| Hover | underline or icon shift (`group-hover:translate-x-1`) |

### Danger

Destructive actions using shadcn destructive tokens.

```jsx
<button
  className="inline-flex items-center justify-center gap-2 rounded-md bg-destructive px-4 py-2 text-sm font-bold text-destructive-foreground transition hover:bg-destructive/90"
>
  Delete
</button>
```

| Property | Value |
|----------|-------|
| Background | `bg-destructive` (HSL red) |
| Text | `text-destructive-foreground` |
| Hover | `hover:bg-destructive/90` |

### Button Size Variants

| Size | Padding | Text | Usage |
|------|---------|------|-------|
| Large | `px-6 py-4` | `text-base font-black` | Hero CTAs, section actions |
| Default | `px-5 py-2.5` | `text-sm font-bold` | Navbar, card actions |
| Small | `px-4 py-2` | `text-sm font-bold` | Inline actions, table actions |
| Icon | `h-10 w-10` | — | Icon-only buttons (grid place-items-center) |

---

## Cards

### Standard Card

Default card for content display, stats, and features.

```jsx
<div className="rounded-xl border border-[#e2ece6] bg-[#fbfdfb] p-6 shadow-sm">
  {/* content */}
</div>
```

| Property | Value |
|----------|-------|
| Background | `#fbfdfb` or `#ffffff` |
| Border | `#e2ece6` or `#e1ece5` |
| Radius | `rounded-xl` |
| Padding | `p-6` |
| Shadow | `shadow-sm` |

### Glass Card

Semi-transparent card for overlays and dark sections.

```jsx
<article className="rounded-xl border border-white/10 bg-white/8 p-6 backdrop-blur">
  {/* content on dark background */}
</article>
```

| Property | Value |
|----------|-------|
| Background | `white/8` or `white/92` |
| Border | `white/10` |
| Backdrop | `backdrop-blur` |
| Usage | Testimonials on dark bg, hero image overlay |

### Feature Card

Card with icon header for "Why Choose" and feature grids.

```jsx
<div className="rounded-xl border border-[#e2ece6] bg-[#fbfdfb] p-6">
  <div className="grid h-11 w-11 place-items-center rounded-lg bg-[#e8f4ed] text-[#1d6f42]">
    <Icon size={22} />
  </div>
  <h3 className="mt-5 text-xl font-black text-[#10231b]">{title}</h3>
  <p className="mt-3 leading-7 text-[#5d7369]">{text}</p>
</div>
```

| Property | Value |
|----------|-------|
| Icon container | `h-11 w-11 rounded-lg bg-[#e8f4ed]` |
| Title | `text-xl font-black` |
| Body | `leading-7 text-[#5d7369]` |

### Course Card

Interactive card with hover lift for course listings.

```jsx
<article className="group flex min-h-[300px] flex-col rounded-xl border border-[#dfece4] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10">
  <div className="grid h-12 w-12 place-items-center rounded-lg bg-[#e8f4ed] text-[#1d6f42]">
    <Icon size={24} />
  </div>
  <p className="mt-6 text-sm font-black uppercase text-[#7a8d84]">{level}</p>
  <h3 className="mt-2 text-2xl font-black text-[#10231b]">{title}</h3>
  <p className="mt-4 flex-1 leading-7 text-[#5d7369]">{description}</p>
  <Link href="/courses" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#1d6f42]">
    Learn more <ArrowRight size={16} className="transition group-hover:translate-x-1" />
  </Link>
</article>
```

| Property | Value |
|----------|-------|
| Min height | `min-h-[300px]` |
| Hover | `-translate-y-1`, elevated shadow |
| Icon | Category-colored background |
| Link | Arrow shifts on group hover |

### Faculty Card

Card with image header for faculty/team members.

```jsx
<article className="overflow-hidden rounded-xl border border-[#e2ece6] bg-[#fbfdfb] shadow-sm">
  <Image src={image} alt={name} width={700} height={520} className="h-80 w-full object-cover" />
  <div className="p-6">
    <h3 className="text-2xl font-black text-[#10231b]">{name}</h3>
    <p className="mt-2 flex items-center gap-2 font-bold text-[#5d7369]">
      <BookMarked size={17} className="text-[#1d6f42]" /> {subject}
    </p>
    <span className="inline-flex items-center gap-1 rounded-full bg-[#e8f4ed] px-3 py-1 text-xs font-black text-[#1d6f42]">
      <BadgeCheck size={14} /> {badge}
    </span>
  </div>
</article>
```

| Property | Value |
|----------|-------|
| Image | `h-80 w-full object-cover` |
| Badge | `rounded-full bg-[#e8f4ed] text-xs font-black` |
| Overflow | `overflow-hidden` on container |

---

## Navbar Style

Fixed top navigation with glass effect, brand mark, anchor links, and auth CTAs.

### Structure

```
┌──────────────────────────────────────────────────────────────┐
│ [D] Digiwell          Courses Faculty Results FAQ Contact  Login │ Book Demo │
│     Coaching Platform                                        (mobile: ☰)    │
└──────────────────────────────────────────────────────────────┘
```

### Container

```jsx
<header className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-white/88 shadow-sm backdrop-blur-xl">
  <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
    {/* logo, links, actions */}
  </nav>
</header>
```

### Specifications

| Property | Value |
|----------|-------|
| Position | `fixed inset-x-0 top-0 z-50` |
| Height | `h-16` (64px) |
| Background | `bg-white/88 backdrop-blur-xl` |
| Border | `border-b border-white/40` |
| Shadow | `shadow-sm` |
| Max width | `max-w-7xl mx-auto` |
| Padding | `px-4 sm:px-6 lg:px-8` |

### Logo

```jsx
<span className="grid h-10 w-10 place-items-center rounded-lg bg-[#1d6f42] text-lg font-black text-white shadow-lg shadow-emerald-900/20">
  D
</span>
```

### Nav Links

```jsx
<a className="text-sm font-semibold text-[#53685f] transition hover:text-[#1d6f42]">
  {label}
</a>
```

### Mobile Menu

- Toggle button visible below `lg` breakpoint
- Full-width dropdown with `border-t border-[#e4eee8] bg-white shadow-xl`
- Links stack vertically with `rounded-md px-3 py-3 hover:bg-[#f1f7f3]`
- Auth buttons in 2-column grid at bottom

### Page Offset

All pages with fixed navbar must add top padding:

```jsx
<section className="pt-28 sm:pt-32">
```

---

## Footer Style

Dark footer with brand info, navigation columns, social links, and copyright.

### Structure

```
┌──────────────────────────────────────────────────────────────┐
│ [D] Digiwell          EXPLORE           PORTALS              │
│ Description text      About             Student              │
│ [social icons]        Courses           Teacher              │
│                       Faculty           Admin                │
│                       Results           Settings             │
│                       Contact                                │
├──────────────────────────────────────────────────────────────┤
│ © 2026 Digiwell                    Built for scalable...     │
└──────────────────────────────────────────────────────────────┘
```

### Container

```jsx
<footer className="bg-[#10231b] py-12 text-white">
  <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
    {/* columns */}
  </div>
  <div className="mx-auto mt-10 flex max-w-7xl flex-col justify-between gap-3 border-t border-white/10 px-4 pt-6 text-sm text-white/50 sm:flex-row sm:px-6 lg:px-8">
    {/* copyright */}
  </div>
</footer>
```

### Specifications

| Property | Value |
|----------|-------|
| Background | `#10231b` |
| Text | white, muted: `white/65`, subtle: `white/50` |
| Column headings | `text-sm font-black uppercase tracking-[0.2em] text-[#f7b733]` |
| Links | `text-white/65 transition hover:text-white` |
| Social icons | `h-10 w-10 rounded-md bg-white/10 hover:bg-white hover:text-[#1d6f42]` |
| Divider | `border-t border-white/10` |
| Logo (inverted) | White bg, green "D" text |

---

## Animation Guidelines

### Framer Motion

All animations use **Framer Motion** exclusively. Import from `"framer-motion"`.

```jsx
import { motion } from "framer-motion";
```

#### Entrance — Fade Up

Standard entrance for text and content blocks.

```jsx
<motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
```

#### Entrance — Scale In

For images and large visual elements.

```jsx
<motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.15, duration: 0.7 }}
>
```

#### Scroll-Triggered Reveal

For below-fold sections and list items.

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.35 }}
  transition={{ delay: index * 0.08 }}
>
```

#### Animation Parameters

| Parameter | Value | Usage |
|-----------|-------|-------|
| Duration | `0.7s` max | Entrance animations |
| Y offset | `18–24px` | Fade up distance |
| Scale | `0.96 → 1` | Image/card entrance |
| Stagger delay | `index * 0.05–0.08s` | List item reveals |
| Viewport once | `true` | Prevent re-triggering |
| Viewport amount | `0.3–0.4` | Trigger when 30–40% visible |

### Hover Effects

Use CSS `transition` for hover states — not Framer Motion.

| Element | Hover Effect | Classes |
|---------|-------------|---------|
| Primary button | Darker green | `transition hover:bg-[#155c36]` |
| Secondary button | Green border | `transition hover:border-[#1d6f42]` |
| Nav link | Green text | `transition hover:text-[#1d6f42]` |
| Outline button | Green tint bg | `transition hover:bg-[#e8f4ed]` |
| Course card | Lift + shadow | `transition hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-950/10` |
| Card link arrow | Slide right | `transition group-hover:translate-x-1` |
| Social icon | Invert colors | `transition hover:bg-white hover:text-[#1d6f42]` |
| Footer link | Full white | `transition hover:text-white` |

### Page Transitions

> **Future implementation.** When adding page transitions:

- Use Framer Motion `AnimatePresence` with route changes
- Fade + slight Y shift (12px) between pages
- Duration: 0.3s
- Respect `prefers-reduced-motion`

```jsx
// Future pattern
<motion.main
  initial={{ opacity: 0, y: 12 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -12 }}
  transition={{ duration: 0.3 }}
>
```

### Loading Animations

> **Future implementation.** When adding loading states:

- Skeleton screens using `animate-pulse` with `bg-muted` (shadcn)
- Spinner: Lucide `Loader2` with `animate-spin`
- Progress bars: `rounded-full bg-[#dceae1]` track, `bg-[#1d6f42]` fill
- Never use infinite animations except loading indicators
- Respect `prefers-reduced-motion: reduce`

---

## Icons

### Library

Use **Lucide React** exclusively. No other icon libraries.

```jsx
import { ArrowRight, Menu, X, Star } from "lucide-react";
```

Configured in `components.json` as the project icon library.

### Sizing

| Context | Size Prop | Example |
|---------|-----------|---------|
| Inline with body text | `size={17}` | Faculty subject icon |
| Nav / card links | `size={18}–19` | ArrowRight in CTAs |
| Card icons | `size={22}–24}` | Feature and course icons |
| Section icons | `size={22}` | WhyChoose feature icons |
| Stat icons | `className="h-7 w-7"` | Stats section |
| Quote/decorative | `className="h-8 w-8"` | Testimonial quote icon |
| Social icons | `size={18}` | Footer social links |

### Icon Colors

| Context | Color |
|---------|-------|
| On light background | `text-[#1d6f42]` |
| On dark background | `text-[#f7b733]` or `text-white` |
| Muted/secondary | `text-[#53685f]` |
| In category badge | Matches category text color |
| Filled (stars) | `fill="currentColor"` with `text-[#f7b733]` |

### Icon Containers

```jsx
// Feature icon container
<div className="grid h-11 w-11 place-items-center rounded-lg bg-[#e8f4ed] text-[#1d6f42]">
  <Icon size={22} />
</div>

// Course icon container (category-colored)
<div className="grid h-12 w-12 place-items-center rounded-lg bg-[#e8f4ed] text-[#1d6f42]">
  <Icon size={24} />
</div>
```

---

## Images

### Quality Standards

- Use high-quality, professional photography (classrooms, students, faculty)
- Minimum resolution: 700px width for card images, 1200px for hero
- Use `object-cover` to maintain aspect ratio in containers
- Prefer authentic coaching/education imagery over generic stock

### Implementation

Always use the Next.js `Image` component:

```jsx
import Image from "next/image";

<Image
  src="https://images.unsplash.com/photo-..."
  alt="Descriptive alt text for accessibility"
  width={1200}
  height={760}
  priority          // Above-fold images only
  className="h-[520px] w-full object-cover"
/>
```

### Rounded Corners

| Context | Radius | Classes |
|---------|--------|---------|
| Hero image | Extra large | `rounded-[2rem] overflow-hidden` |
| Faculty card image | Top corners only | Container: `overflow-hidden rounded-xl` |
| Avatar/thumbnail | Full | `rounded-full` |
| Inline image | Medium | `rounded-lg` |

### Lazy Loading

- **Above-fold:** Set `priority` prop (hero image)
- **Below-fold:** Default lazy loading (no `priority` prop)
- Remote domains must be configured in `next.config.js`:

```js
images: {
  remotePatterns: [
    { protocol: "https", hostname: "images.unsplash.com" },
  ],
},
```

### Alt Text Rules

- Every `<Image>` must have descriptive `alt` text
- Describe the content, not "image" or "photo"
- Example: `"Students studying together in a modern coaching classroom"`

---

## Responsiveness

### Breakpoints

| Breakpoint | Tailwind Prefix | Min Width | Target Device |
|------------|----------------|-----------|---------------|
| Mobile | (default) | 0px | Phones (375px+) |
| Small | `sm:` | 640px | Large phones, small tablets |
| Medium | `md:` | 768px | Tablets |
| Large | `lg:` | 1024px | Laptops, small desktops |
| Extra Large | `xl:` | 1280px | Desktops |
| 2XL | `2xl:` | 1536px | Ultra-wide monitors |

### Mobile (0–639px)

- Single column layouts
- Hamburger navigation menu
- Full-width buttons stacked vertically (`flex-col gap-3`)
- Horizontal padding: `px-4`
- Hero heading: `text-5xl`
- Hero top padding: `pt-28`
- Card grids: 1 column

```jsx
<div className="flex flex-col gap-3 sm:flex-row">
<div className="grid gap-4 sm:grid-cols-2">
```

### Tablet (640–1023px)

- 2-column card grids
- Horizontal padding: `px-6`
- Hero heading: `text-6xl`
- Footer: 2-column grid starts at `md:`
- Nav links still hidden until `lg`

```jsx
<div className="grid gap-5 md:grid-cols-2">
<div className="grid max-w-7xl gap-10 md:grid-cols-4">
```

### Laptop (1024–1279px)

- Full horizontal navigation visible
- 3–4 column card grids
- Horizontal padding: `px-8`
- Hero: 2-column grid layout
- Sidebar panels (future): visible

```jsx
<div className="hidden items-center gap-8 lg:flex">
<div className="grid gap-5 lg:grid-cols-3">
<div className="lg:grid-cols-[1.02fr_0.98fr]">
```

### Desktop (1280px+)

- Max container width: `max-w-7xl` (1280px)
- 4-column course grids: `xl:grid-cols-4`
- Full hero layout with large heading: `lg:text-7xl`
- Optimal reading width maintained

### Ultra Wide (1536px+)

- Content remains capped at `max-w-7xl`
- Extra space becomes margin on sides
- Do not stretch content beyond 1280px
- Dashboard layouts (future) may use wider containers (`max-w-screen-2xl`) for data tables

### Responsive Patterns

| Pattern | Classes |
|---------|---------|
| Container | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` |
| Hide on mobile | `hidden lg:flex` |
| Show on mobile only | `lg:hidden` |
| Responsive grid | `grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4` |
| Responsive flex direction | `flex flex-col gap-3 sm:flex-row` |
| Responsive text | `text-4xl sm:text-5xl` |
| Responsive spacing | `pt-28 sm:pt-32` |

---

## Accessibility

### Keyboard Navigation

- All interactive elements must be reachable via Tab key
- Focus order must follow visual reading order
- Mobile menu toggle must be operable via Enter/Space
- Skip-to-content link (future) for main content bypass
- Modal/dialog focus trap when implemented
- Escape key closes dropdowns and modals

### ARIA

- Use semantic HTML elements: `<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`
- `aria-label` on icon-only buttons: `aria-label="Toggle navigation menu"`
- `aria-label` on decorative rating: `aria-label="Five star rating"`
- `aria-label` on logo link: `aria-label="Digiwell home"`
- `aria-label` on social links: `aria-label="Social link"`
- Use `role="alert"` for error messages (future)
- Use `aria-live="polite"` for toast notifications (future)
- Form inputs must have associated `<label>` elements (future)

### Color Contrast

Minimum WCAG AA compliance (4.5:1 for normal text, 3:1 for large text):

| Combination | Ratio | Status |
|-------------|-------|--------|
| `#10231b` on `#ffffff` | ~14:1 | ✅ Pass |
| `#53685f` on `#ffffff` | ~5.5:1 | ✅ Pass |
| `#1d6f42` on `#ffffff` | ~4.6:1 | ✅ Pass |
| `#ffffff` on `#10231b` | ~14:1 | ✅ Pass |
| `#f7b733` on `#10231b` | ~7:1 | ✅ Pass |
| `white/65` on `#10231b` | ~5:1 | ✅ Pass |

- Never rely on color alone to convey information
- Error states must include text labels, not just red color
- Status indicators must include text or icons alongside color

### Focus States

All interactive elements must have visible focus indicators:

```jsx
// Future standard focus ring (apply to all interactive elements)
className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d6f42] focus-visible:ring-offset-2"

// shadcn components use:
className="focus-visible:ring-ring focus-visible:ring-offset-background"
```

- Focus ring color: `#1d6f42` (brand green) or `--ring` CSS variable
- Focus ring offset: 2px
- Never remove focus outlines without providing an alternative
- Respect `prefers-reduced-motion: reduce` for animations

---

## Performance Rules

| Rule | Implementation |
|------|---------------|
| **Use Next.js Image** | Always use `<Image>` instead of `<img>` |
| **Lazy load below-fold** | Omit `priority` on below-fold images |
| **Priority above-fold** | Set `priority` on hero/LCP images only |
| **Server components default** | Only add `"use client"` when hooks/state/events are needed |
| **Minimize client JS** | Keep client component tree shallow |
| **Framer Motion scope** | Import only used features; use in client components only |
| **Static generation** | Prefer SSG/ISR for public pages where possible |
| **No layout shift** | Set explicit `width`/`height` on images; reserve space for dynamic content |
| **Bundle size** | Audit with `next build`; keep homepage JS under 150KB |
| **Font loading** | System fonts only — no web font downloads |
| **CSS purging** | Tailwind automatically purges unused classes via `content` config |

### Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Total Blocking Time | < 200ms |

---

## UI Rules

These rules are **mandatory** for all UI work in Digiwell:

### Styling

1. **Never use inline CSS.** No `style={{}}` attributes anywhere in components.
2. **Always use Tailwind.** All styling via Tailwind utility classes.
3. **Never hardcode repeated values.** Extract repeated color/spacing patterns into reusable components or constants in `constants/theme.js` (future).
4. **Use the `cn()` helper** from `@/lib/utils` for conditional class merging.

### Components

5. **Always make reusable components.** Extract repeated UI patterns into `components/ui/` or domain folders.
6. **Never duplicate components.** Search existing components before creating new ones.
7. **Compose from primitives.** Build complex UI from shadcn/ui base components.

### Theme

8. **Always support dark mode.** Use shadcn CSS variables (`bg-background`, `text-foreground`, etc.) for dashboard/form UI. Test both light and dark.
9. **Follow the color system.** Use documented HEX values and tokens — do not invent new colors.

### Media

10. **Always optimize images.** Use Next.js `<Image>` with proper dimensions, alt text, and lazy loading.
11. **Use Lucide React only** for icons. No other icon libraries.

### Quality

12. **Always maintain premium design quality.** Generous spacing, bold typography, subtle shadows, smooth animations.
13. **Always maintain responsive design.** Mobile-first with tested breakpoints.
14. **Always meet accessibility standards.** Semantic HTML, ARIA labels, focus states, color contrast.
15. **Fix all visual bugs before finishing.** No misaligned elements, overflow issues, or broken layouts.

### Reference Documents

| Document | Purpose |
|----------|---------|
| `UI_GUIDELINES.md` | This file — design system |
| `PROJECT_VISION.md` | Brand vision and UX standards |
| `MEMORY.md` | Project context and status |
| `PROJECT_RULES.md` | Development rules |
| `app/globals.css` | CSS variables and dark mode tokens |
| `tailwind.config.js` | Tailwind theme extensions |
| `components.json` | shadcn/ui configuration |

---

*This design system evolves with the product. Update when new patterns are established.*

*Last updated: July 2026*
