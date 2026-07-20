# Digiwell — Project Rules

> **Purpose:** Mandatory development rules for all contributors and AI assistants. Violations of these rules require explicit user approval before proceeding.

---

## Table of Contents

1. [Before You Start](#before-you-start)
2. [Architecture Rules](#architecture-rules)
3. [Code Quality Rules](#code-quality-rules)
4. [Styling Rules](#styling-rules)
5. [Component Rules](#component-rules)
6. [File & Folder Rules](#file--folder-rules)
7. [Animation & Icons](#animation--icons)
8. [Error Handling & Quality](#error-handling--quality)
9. [Documentation Rules](#documentation-rules)
10. [Git & Deployment Rules](#git--deployment-rules)
11. [Quick Reference Checklist](#quick-reference-checklist)

---

## Before You Start

### Rule 1: Always Read MEMORY.md First

Before making **any** change to the codebase, read these files in order:

1. `MEMORY.md` — Project overview, status, structure, and AI instructions
2. `PROJECT_RULES.md` — This file
3. `PROJECT_VISION.md` — Brand, design, and UX standards
4. `TODO.md` — Current development roadmap and task status

These files contain critical context that prevents breaking changes and ensures consistency.

### Rule 2: Understand the Current State

- Check which features are completed vs. pending in `MEMORY.md`
- Review the folder structure before adding new files
- Search existing components before creating new ones
- Read surrounding code to match conventions

---

## Architecture Rules

### Rule 3: Follow App Router Architecture

- All pages live in `app/` using the `page.jsx` convention
- Use `layout.jsx` for shared layouts within route segments
- Use `loading.jsx` for Suspense loading states
- Use `not-found.jsx` for 404 handling within route segments
- Use `middleware.js` for authentication and route protection (when implemented)
- Do **not** use the Pages Router (`pages/` directory)

### Rule 4: Preserve Project Architecture

The project follows a layered architecture:

```
app/           → Pages and routing (App Router)
components/    → UI components organized by domain
  ui/          → Reusable shadcn/ui primitives
  home/        → Homepage section components
  [domain]/    → Domain-specific components (student, teacher, admin)
lib/           → Shared utilities (cn helper)
hooks/         → Custom React hooks
context/       → React context providers
services/      → API and external service calls
data/          → Static and mock data
constants/     → Shared constants and enums
config/        → Application configuration
utils/         → General-purpose utilities
styles/        → Additional stylesheets (if needed)
public/        → Static assets
```

- Place files in the correct layer
- Do not mix concerns (e.g., API calls inside components)
- Do not create new top-level folders without user permission

### Rule 5: Use Path Aliases

Always use configured path aliases instead of deep relative imports:

```jsx
// ✅ Correct
import Navbar from "@/components/home/Navbar";
import { cn } from "@/lib/utils";

// ❌ Wrong
import Navbar from "../../../components/home/Navbar";
```

---

## Code Quality Rules

### Rule 6: Never Overwrite Existing Working Code

- Do not refactor, rewrite, or "improve" code that is already working
- Make targeted, minimal changes that solve the specific task
- If a file works correctly, leave it alone unless the task requires modification
- Homepage components are complete — do not modify them without explicit request

### Rule 7: Keep Files Under 300 Lines

- Split large components into smaller sub-components
- Extract reusable logic into hooks or utilities
- One component per file (with rare exceptions for tightly coupled sub-components)
- If a file exceeds 300 lines, evaluate whether it should be decomposed

### Rule 8: Use JavaScript (JSX) Only

- The project uses JavaScript, not TypeScript
- File extensions: `.jsx` for components, `.js` for utilities/config
- Do not introduce `.ts` or `.tsx` files unless explicitly requested
- Do not add TypeScript configuration

### Rule 9: Minimize Scope

- Make the smallest correct diff that solves the problem
- Do not add features, refactors, or "nice-to-haves" beyond the request
- Do not add comments, docstrings, or type annotations to code you didn't change
- Do not over-engineer with unnecessary abstractions

---

## Styling Rules

### Rule 10: Use Tailwind CSS Only

- All styling must use Tailwind utility classes
- No inline `style={{}}` attributes
- No CSS modules (`.module.css`)
- No styled-components or emotion
- No separate CSS files except `globals.css` and Tailwind config
- Use the `cn()` helper from `@/lib/utils` for conditional classes

### Rule 11: Follow the Brand Color Palette

Use the established Digiwell colors documented in `MEMORY.md`:

| Purpose | Color |
|---------|-------|
| Primary actions | `#1d6f42` / `hover:#155c36` |
| Headings | `#10231b` |
| Body text | `#53685f` |
| Accent/highlight | `#f7b733` |
| Page background | `#f7faf8` |
| Borders | `#c7decf`, `#c9ddd1`, `#e1ece5` |

Do not introduce new brand colors without updating `MEMORY.md` and `PROJECT_VISION.md`.

### Rule 12: Maintain Responsive Design

- Mobile-first approach: base styles for mobile, then `sm:`, `md:`, `lg:`, `xl:`
- Standard container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Test layouts at mobile (375px), tablet (768px), and desktop (1280px) widths
- Navigation must collapse to mobile menu below `lg` breakpoint

---

## Component Rules

### Rule 13: Never Create Duplicate Components

Before creating a new component:

1. Search `components/` for existing similar components
2. Check `components/ui/` for shadcn primitives that can be composed
3. If a similar component exists, extend or reuse it
4. Only create new components when no suitable existing one exists

### Rule 14: Use Reusable Components Only

- Build UI from composable, reusable pieces
- shadcn/ui primitives go in `components/ui/`
- Domain-specific components go in `components/[domain]/`
- Page files (`app/*/page.jsx`) should compose components, not contain large inline JSX
- Extract repeated patterns into shared components

### Rule 15: Component Conventions

```jsx
"use client"; // Only if component uses hooks, state, or event handlers

import Link from "next/link";
import { motion } from "framer-motion";
import { IconName } from "lucide-react";

export default function ComponentName() {
  return (
    // JSX
  );
}
```

- Default export function components
- `"use client"` directive only when needed (hooks, state, browser APIs)
- Server components by default (no directive)
- Props destructuring in function signature
- Semantic HTML elements (`section`, `nav`, `header`, `main`, `footer`)

---

## File & Folder Rules

### Rule 16: Never Rename Folders Without Permission

- The folder structure maps directly to URL routes
- Renaming `app/student/` to `app/students/` breaks the `/student` URL
- Do not reorganize, merge, or split existing folders without explicit user approval
- When implementing a new page, add `page.jsx` to the **existing** route folder

### Rule 17: Do Not Create New Pages Without Permission

- Route folders are pre-scaffolded with `.gitkeep` files
- Only create `page.jsx` inside existing route folders when tasked to implement that page
- Do not create new route folders or rename existing ones
- Do not create pages the user has not requested

### Rule 18: File Naming Conventions

| Type | Convention | Example |
|------|-----------|---------|
| Page | `page.jsx` | `app/login/page.jsx` |
| Layout | `layout.jsx` | `app/student/layout.jsx` |
| Component | PascalCase | `components/home/Hero.jsx` |
| Utility | camelCase | `lib/utils.js` |
| Hook | camelCase with `use` prefix | `hooks/useAuth.js` |
| Service | camelCase | `services/courseService.js` |
| Constant | camelCase or UPPER_SNAKE | `constants/routes.js` |
| Context | PascalCase with `Context` suffix | `context/AuthContext.jsx` |

---

## Animation & Icons

### Rule 19: Use Framer Motion for Animations

- Import from `"framer-motion"`: `motion.div`, `motion.section`, etc.
- Standard entrance: `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}`
- Scroll reveals: `whileInView={{ opacity: 1, y: 0 }}` with `viewport={{ once: true }}`
- Staggered lists: `transition={{ delay: index * 0.06 }}`
- Do not use CSS `@keyframes`, `tw-animate-css` classes, or other animation libraries

### Rule 20: Use Lucide React Icons

- Import from `"lucide-react"`: `import { IconName } from "lucide-react"`
- Pass `size` prop for sizing: `<ArrowRight size={19} />`
- Do not use other icon libraries (Heroicons, Font Awesome, React Icons, etc.)
- Do not use SVG inline icons when a Lucide equivalent exists

---

## Error Handling & Quality

### Rule 21: Fix All Errors Before Finishing

Before completing any task:

- [ ] Run `npm run lint` and fix all lint errors
- [ ] Run `npm run build` and fix all build errors
- [ ] Check for console errors in development
- [ ] Verify responsive layout at multiple breakpoints
- [ ] Ensure no broken imports or missing files

### Rule 22: Handle Edge Cases Appropriately

- Add loading states for async operations
- Add empty states for lists with no data
- Add error boundaries for critical sections (when implemented)
- Do not over-engineer error handling for impossible edge cases

---

## Documentation Rules

### Rule 23: Update Project Memory After Significant Changes

When completing a feature or making architectural changes:

- Update the relevant section in `MEMORY.md` (status, features, structure)
- Check off completed items in `TODO.md`
- Do not create new documentation files unless requested

### Rule 24: Do Not Add Unnecessary Comments

- Code should be self-explanatory through clear naming
- Only add comments for non-obvious business logic or technical constraints
- Do not add section divider comments or changelog comments in code

---

## Git & Deployment Rules

### Rule 25: Do Not Commit Unless Requested

- Never create git commits unless the user explicitly asks
- Never push to remote unless the user explicitly asks
- Never force push to main/master
- Never skip git hooks
- Never update git config

### Rule 26: Do Not Install Packages Without Approval

- Check `package.json` before adding dependencies
- Prefer using already-installed packages
- Ask before adding new npm packages
- Do not upgrade major versions without approval

---

## Quick Reference Checklist

Use this checklist before submitting any change:

```
□ Read MEMORY.md, PROJECT_RULES.md, and PROJECT_VISION.md
□ Searched for existing components before creating new ones
□ Used path aliases (@/...) for imports
□ Used Tailwind CSS only — no inline styles or CSS modules
□ Used Lucide React for icons
□ Used Framer Motion for animations (where appropriate)
□ Marked interactive components with "use client"
□ Kept files under 300 lines
□ Followed brand color palette
□ Maintained responsive design (mobile-first)
□ Did not rename folders or routes
□ Did not modify homepage without permission
□ Did not overwrite existing working code
□ Did not create duplicate components
□ Fixed all lint and build errors
□ Updated MEMORY.md and TODO.md if feature completed
```

---

*These rules are mandatory. When in doubt, ask the user before proceeding.*

*Last updated: July 2026*
