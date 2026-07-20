# Digiwell — Component Registry

> **Purpose:** Master registry of all reusable UI components in the Digiwell project. Every reusable component must be registered here before use. Read alongside `UI_GUIDELINES.md`, `PROJECT_RULES.md`, and `MEMORY.md`.

---

## Table of Contents

1. [Purpose](#purpose)
2. [Folder Structure](#folder-structure)
3. [Component Registry](#component-registry)
4. [Naming Conventions](#naming-conventions)
5. [Component Rules](#component-rules)
6. [Future Components](#future-components)

---

## Purpose

This document serves as the **single source of truth** for all reusable UI components in Digiwell.

### Why This Registry Exists

- **Prevent duplication** — Developers and AI assistants search here before creating new components.
- **Ensure consistency** — Every component follows the same structure, naming, and quality standards.
- **Track progress** — Status fields show what is built, in progress, or planned.
- **Enable reuse** — Clear props, dependencies, and usage locations make composition straightforward.
- **Onboard quickly** — New contributors understand the component landscape without reading the entire codebase.

### Registration Workflow

1. **Search this file** before creating any new component.
2. If a similar component exists, reuse or extend it — do not duplicate.
3. If creating a new component, add an entry to this registry **before** writing code.
4. Place the component in the correct folder (see [Folder Structure](#folder-structure)).
5. Update the **Status** field as work progresses: `Planned` → `In Progress` → `Complete`.
6. Update **Used In** whenever the component is imported into a new page or parent.

> **Rule:** No component should exist in the codebase without a corresponding entry in this registry.

---

## Folder Structure

```
components/
├── ui/                  # shadcn/ui primitives and base UI elements
├── layout/              # Structural layout components (navbar, sidebar, footer)
├── common/              # Shared utility components (empty states, loaders, headers)
├── forms/               # Form-specific components (field groups, validators display)
├── cards/               # Reusable card variants (stat, course, profile)
├── dashboard/           # Dashboard-specific shared components (stat grids, widgets)
├── student/             # Student panel components
├── teacher/             # Teacher panel components
├── admin/               # Admin panel components
└── home/                # Homepage section components
```

### Folder Responsibilities

| Folder | Contains | Does Not Contain |
|--------|----------|-----------------|
| `ui/` | Buttons, inputs, dialogs, tables — generic, domain-agnostic | Business logic, API calls |
| `layout/` | Navbar, sidebar, footer, page shells | Page-specific content |
| `common/` | Empty states, error states, page headers, search bars | Role-specific dashboards |
| `forms/` | Form layouts, field wrappers, validation displays | Raw input primitives (those go in `ui/`) |
| `cards/` | Reusable card templates with props | Static homepage sections |
| `dashboard/` | Stat grids, chart wrappers, dashboard widgets | Full page layouts |
| `student/` | Student-only components | Teacher or admin components |
| `teacher/` | Teacher-only components | Student or admin components |
| `admin/` | Admin-only components | Student or teacher components |
| `home/` | Homepage marketing sections | Dashboard or panel components |

### Current State

| Folder | Status | Notes |
|--------|--------|-------|
| `home/` | ✅ Active | 13 components implemented |
| `ui/` | 🟡 Scaffolded | `.gitkeep` only — shadcn/ui not yet installed |
| `layout/` | ⬜ Planned | Navbar and Footer currently live in `home/` |
| `common/` | ⬜ Planned | Not yet created |
| `forms/` | ⬜ Planned | Not yet created |
| `cards/` | ⬜ Planned | Not yet created |
| `dashboard/` | ⬜ Planned | Not yet created |
| `student/` | ⬜ Planned | Not yet created |
| `teacher/` | ⬜ Planned | Not yet created |
| `admin/` | ⬜ Planned | Not yet created |

---

## Component Registry

### Status Legend

| Status | Meaning |
|--------|---------|
| **Complete** | Implemented, reviewed, and in use |
| **In Progress** | Currently being built or modified |
| **Planned** | Designed but not yet implemented |

---

## UI

> Location: `components/ui/`
> Source: shadcn/ui (New York style) — install via `npx shadcn@latest add [component]`

---

### Button

| Field | Value |
|-------|-------|
| **Name** | `Button` |
| **Folder** | `components/ui/Button.jsx` |
| **Purpose** | Primary interactive element for actions, submissions, and navigation |
| **Props** | `variant` (`default`, `destructive`, `outline`, `secondary`, `ghost`, `link`), `size` (`default`, `sm`, `lg`, `icon`), `asChild` (boolean), `disabled` (boolean), `className` (string), `children` (node) |
| **Events** | `onClick`, `onFocus`, `onBlur` |
| **Dependencies** | `@radix-ui/react-slot`, `class-variance-authority`, `@/lib/utils` (`cn`) |
| **Used In** | All panels, forms, dialogs (future) |
| **Status** | Planned |

---

### Input

| Field | Value |
|-------|-------|
| **Name** | `Input` |
| **Folder** | `components/ui/Input.jsx` |
| **Purpose** | Single-line text input for forms |
| **Props** | `type` (string), `placeholder` (string), `value` (string), `disabled` (boolean), `className` (string), all native `<input>` attributes |
| **Events** | `onChange`, `onFocus`, `onBlur`, `onKeyDown` |
| **Dependencies** | `@/lib/utils` (`cn`) |
| **Used In** | Login, signup, contact form, search bars, settings (future) |
| **Status** | Planned |

---

### Textarea

| Field | Value |
|-------|-------|
| **Name** | `Textarea` |
| **Folder** | `components/ui/Textarea.jsx` |
| **Purpose** | Multi-line text input for descriptions, feedback, and messages |
| **Props** | `placeholder` (string), `value` (string), `rows` (number), `disabled` (boolean), `className` (string), all native `<textarea>` attributes |
| **Events** | `onChange`, `onFocus`, `onBlur` |
| **Dependencies** | `@/lib/utils` (`cn`) |
| **Used In** | Contact form, assignment submission, announcement editor (future) |
| **Status** | Planned |

---

### Select

| Field | Value |
|-------|-------|
| **Name** | `Select` |
| **Folder** | `components/ui/Select.jsx` |
| **Purpose** | Dropdown selection for single-choice fields |
| **Props** | `value` (string), `defaultValue` (string), `onValueChange` (function), `disabled` (boolean), `placeholder` (string), `children` (SelectItem nodes) |
| **Events** | `onValueChange`, `onOpenChange` |
| **Dependencies** | `@radix-ui/react-select`, `@/lib/utils` (`cn`) |
| **Used In** | Course filters, batch selection, role picker, settings (future) |
| **Status** | Planned |

---

### Checkbox

| Field | Value |
|-------|-------|
| **Name** | `Checkbox` |
| **Folder** | `components/ui/Checkbox.jsx` |
| **Purpose** | Boolean toggle for multi-select and agreement fields |
| **Props** | `checked` (boolean), `defaultChecked` (boolean), `disabled` (boolean), `className` (string) |
| **Events** | `onCheckedChange` |
| **Dependencies** | `@radix-ui/react-checkbox`, `lucide-react` (Check icon), `@/lib/utils` (`cn`) |
| **Used In** | Attendance marking, terms acceptance, bulk actions (future) |
| **Status** | Planned |

---

### Radio

| Field | Value |
|-------|-------|
| **Name** | `RadioGroup` / `RadioGroupItem` |
| **Folder** | `components/ui/RadioGroup.jsx` |
| **Purpose** | Single selection from a visible list of options |
| **Props** | `value` (string), `defaultValue` (string), `disabled` (boolean), `orientation` (`horizontal`, `vertical`) |
| **Events** | `onValueChange` |
| **Dependencies** | `@radix-ui/react-radio-group`, `@/lib/utils` (`cn`) |
| **Used In** | Role selection, exam answer types, settings (future) |
| **Status** | Planned |

---

### Switch

| Field | Value |
|-------|-------|
| **Name** | `Switch` |
| **Folder** | `components/ui/Switch.jsx` |
| **Purpose** | Toggle control for on/off settings |
| **Props** | `checked` (boolean), `defaultChecked` (boolean), `disabled` (boolean), `className` (string) |
| **Events** | `onCheckedChange` |
| **Dependencies** | `@radix-ui/react-switch`, `@/lib/utils` (`cn`) |
| **Used In** | Notification preferences, dark mode toggle, feature flags (future) |
| **Status** | Planned |

---

### Badge

| Field | Value |
|-------|-------|
| **Name** | `Badge` |
| **Folder** | `components/ui/Badge.jsx` |
| **Purpose** | Compact label for status, category, and count indicators |
| **Props** | `variant` (`default`, `secondary`, `destructive`, `outline`), `className` (string), `children` (node) |
| **Events** | None |
| **Dependencies** | `class-variance-authority`, `@/lib/utils` (`cn`) |
| **Used In** | Course cards, attendance status, assignment status, live class indicator (future) |
| **Status** | Planned |

---

### Avatar

| Field | Value |
|-------|-------|
| **Name** | `Avatar` / `AvatarImage` / `AvatarFallback` |
| **Folder** | `components/ui/Avatar.jsx` |
| **Purpose** | User profile image with fallback initials |
| **Props** | `src` (string), `alt` (string), `fallback` (string), `className` (string) |
| **Events** | None |
| **Dependencies** | `@radix-ui/react-avatar`, `@/lib/utils` (`cn`) |
| **Used In** | Profile pages, faculty cards, student tables, nav dropdown (future) |
| **Status** | Planned |

---

### Tooltip

| Field | Value |
|-------|-------|
| **Name** | `Tooltip` / `TooltipTrigger` / `TooltipContent` |
| **Folder** | `components/ui/Tooltip.jsx` |
| **Purpose** | Contextual hint on hover or focus |
| **Props** | `content` (string/node), `side` (`top`, `right`, `bottom`, `left`), `delayDuration` (number) |
| **Events** | None (Radix-managed) |
| **Dependencies** | `@radix-ui/react-tooltip`, `@/lib/utils` (`cn`) |
| **Used In** | Icon buttons, truncated text, dashboard metrics (future) |
| **Status** | Planned |

---

### Popover

| Field | Value |
|-------|-------|
| **Name** | `Popover` / `PopoverTrigger` / `PopoverContent` |
| **Folder** | `components/ui/Popover.jsx` |
| **Purpose** | Floating content panel triggered by click |
| **Props** | `open` (boolean), `defaultOpen` (boolean), `align` (`start`, `center`, `end`), `sideOffset` (number) |
| **Events** | `onOpenChange` |
| **Dependencies** | `@radix-ui/react-popover`, `@/lib/utils` (`cn`) |
| **Used In** | Date pickers, filter menus, profile dropdown (future) |
| **Status** | Planned |

---

### Dialog

| Field | Value |
|-------|-------|
| **Name** | `Dialog` / `DialogTrigger` / `DialogContent` / `DialogHeader` / `DialogFooter` |
| **Folder** | `components/ui/Dialog.jsx` |
| **Purpose** | Modal overlay for confirmations, forms, and detail views |
| **Props** | `open` (boolean), `defaultOpen` (boolean), `onOpenChange` (function), `children` (node) |
| **Events** | `onOpenChange`, `onEscapeKeyDown`, `onPointerDownOutside` |
| **Dependencies** | `@radix-ui/react-dialog`, `lucide-react` (X icon), `@/lib/utils` (`cn`) |
| **Used In** | Delete confirmations, create/edit forms, detail modals (future) |
| **Status** | Planned |

---

### Drawer

| Field | Value |
|-------|-------|
| **Name** | `Drawer` / `DrawerTrigger` / `DrawerContent` |
| **Folder** | `components/ui/Drawer.jsx` |
| **Purpose** | Slide-in panel from screen edge — mobile-friendly alternative to dialog |
| **Props** | `open` (boolean), `direction` (`top`, `right`, `bottom`, `left`), `onOpenChange` (function) |
| **Events** | `onOpenChange` |
| **Dependencies** | `vaul`, `@/lib/utils` (`cn`) |
| **Used In** | Mobile sidebar, mobile filters, quick actions (future) |
| **Status** | Planned |

---

### Toast

| Field | Value |
|-------|-------|
| **Name** | `Toaster` / `toast` |
| **Folder** | `components/ui/Sonner.jsx` |
| **Purpose** | Temporary notification feedback for actions |
| **Props** | `title` (string), `description` (string), `variant` (`default`, `destructive`), `duration` (number), `action` (node) |
| **Events** | `onDismiss` |
| **Dependencies** | `sonner`, `@/lib/utils` (`cn`) |
| **Used In** | Form submissions, save confirmations, error alerts (future) |
| **Status** | Planned |

---

### Alert

| Field | Value |
|-------|-------|
| **Name** | `Alert` / `AlertTitle` / `AlertDescription` |
| **Folder** | `components/ui/Alert.jsx` |
| **Purpose** | Inline persistent message for info, warning, or error states |
| **Props** | `variant` (`default`, `destructive`), `className` (string), `children` (node) |
| **Events** | None |
| **Dependencies** | `lucide-react` (AlertCircle icon), `@/lib/utils` (`cn`) |
| **Used In** | Form validation summaries, dashboard notices, payment reminders (future) |
| **Status** | Planned |

---

### Tabs

| Field | Value |
|-------|-------|
| **Name** | `Tabs` / `TabsList` / `TabsTrigger` / `TabsContent` |
| **Folder** | `components/ui/Tabs.jsx` |
| **Purpose** | Tabbed navigation within a page or section |
| **Props** | `defaultValue` (string), `value` (string), `orientation` (`horizontal`, `vertical`) |
| **Events** | `onValueChange` |
| **Dependencies** | `@radix-ui/react-tabs`, `@/lib/utils` (`cn`) |
| **Used In** | Course detail, profile settings, admin user management (future) |
| **Status** | Planned |

---

### Accordion

| Field | Value |
|-------|-------|
| **Name** | `Accordion` / `AccordionItem` / `AccordionTrigger` / `AccordionContent` |
| **Folder** | `components/ui/Accordion.jsx` |
| **Purpose** | Expandable/collapsible content sections |
| **Props** | `type` (`single`, `multiple`), `defaultValue` (string/array), `collapsible` (boolean) |
| **Events** | `onValueChange` |
| **Dependencies** | `@radix-ui/react-accordion`, `lucide-react` (ChevronDown), `@/lib/utils` (`cn`) |
| **Used In** | FAQ page, course syllabus, settings panels (future) |
| **Status** | Planned |

---

### Progress

| Field | Value |
|-------|-------|
| **Name** | `Progress` |
| **Folder** | `components/ui/Progress.jsx` |
| **Purpose** | Visual progress indicator for completion, attendance, or loading |
| **Props** | `value` (number, 0–100), `max` (number), `className` (string) |
| **Events** | None |
| **Dependencies** | `@radix-ui/react-progress`, `@/lib/utils` (`cn`) |
| **Used In** | Course progress, attendance bars, upload progress, hero stat overlay (future) |
| **Status** | Planned |

---

### Skeleton

| Field | Value |
|-------|-------|
| **Name** | `Skeleton` |
| **Folder** | `components/ui/Skeleton.jsx` |
| **Purpose** | Placeholder loading state matching content layout |
| **Props** | `className` (string) — control width, height, and shape |
| **Events** | None |
| **Dependencies** | `@/lib/utils` (`cn`) |
| **Used In** | Dashboard loading, table loading, card loading (future) |
| **Status** | Planned |

---

### Spinner

| Field | Value |
|-------|-------|
| **Name** | `Spinner` |
| **Folder** | `components/common/Spinner.jsx` |
| **Purpose** | Animated loading indicator for async operations |
| **Props** | `size` (`sm`, `md`, `lg`), `className` (string) |
| **Events** | None |
| **Dependencies** | `lucide-react` (Loader2), `@/lib/utils` (`cn`) |
| **Used In** | Form submissions, page loading, button loading states (future) |
| **Status** | Planned |

---

### Pagination

| Field | Value |
|-------|-------|
| **Name** | `Pagination` / `PaginationContent` / `PaginationItem` / `PaginationLink` |
| **Folder** | `components/ui/Pagination.jsx` |
| **Purpose** | Navigate paginated data sets |
| **Props** | `currentPage` (number), `totalPages` (number), `onPageChange` (function), `siblingCount` (number) |
| **Events** | `onPageChange` |
| **Dependencies** | `lucide-react` (ChevronLeft, ChevronRight), `@/lib/utils` (`cn`) |
| **Used In** | Student tables, course listings, assignment lists, payment history (future) |
| **Status** | Planned |

---

### Breadcrumb

| Field | Value |
|-------|-------|
| **Name** | `Breadcrumb` / `BreadcrumbList` / `BreadcrumbItem` / `BreadcrumbLink` |
| **Folder** | `components/ui/Breadcrumb.jsx` |
| **Purpose** | Hierarchical navigation trail |
| **Props** | `items` (array of `{ label, href }`), `separator` (node) |
| **Events** | None (Link navigation) |
| **Dependencies** | `@radix-ui/react-slot`, `lucide-react` (ChevronRight), `@/lib/utils` (`cn`) |
| **Used In** | Dashboard pages, course detail, admin sections (future) |
| **Status** | Planned |

---

### Table

| Field | Value |
|-------|-------|
| **Name** | `Table` / `TableHeader` / `TableBody` / `TableRow` / `TableHead` / `TableCell` |
| **Folder** | `components/ui/Table.jsx` |
| **Purpose** | Structured data display with rows and columns |
| **Props** | Standard HTML table attributes, `className` (string) on sub-components |
| **Events** | `onClick` on rows (when selectable) |
| **Dependencies** | `@/lib/utils` (`cn`) |
| **Used In** | StudentTable, AttendanceTable, UserTable, PaymentTable (future) |
| **Status** | Planned |

---

### Calendar

| Field | Value |
|-------|-------|
| **Name** | `Calendar` |
| **Folder** | `components/ui/Calendar.jsx` |
| **Purpose** | Date selection grid for scheduling and attendance |
| **Props** | `mode` (`single`, `range`, `multiple`), `selected` (Date/Date[]), `onSelect` (function), `disabled` (function), `className` (string) |
| **Events** | `onSelect`, `onMonthChange` |
| **Dependencies** | `react-day-picker`, `lucide-react` (ChevronLeft, ChevronRight), `@/lib/utils` (`cn`) |
| **Used In** | Attendance calendar, live class scheduling, date picker (future) |
| **Status** | Planned |

---

### Date Picker

| Field | Value |
|-------|-------|
| **Name** | `DatePicker` |
| **Folder** | `components/forms/DatePicker.jsx` |
| **Purpose** | Input field with popover calendar for date selection |
| **Props** | `value` (Date), `onChange` (function), `placeholder` (string), `disabled` (boolean), `minDate` (Date), `maxDate` (Date) |
| **Events** | `onChange`, `onOpenChange` |
| **Dependencies** | `Calendar`, `Popover`, `Button`, `lucide-react` (CalendarIcon), `@/lib/utils` (`cn`) |
| **Used In** | Assignment deadlines, attendance marking, exam scheduling (future) |
| **Status** | Planned |

---

### Charts

| Field | Value |
|-------|-------|
| **Name** | `ChartContainer` / `ChartTooltip` / `BarChart` / `LineChart` / `PieChart` |
| **Folder** | `components/ui/Chart.jsx` |
| **Purpose** | Data visualization for analytics dashboards |
| **Props** | `data` (array), `config` (chartConfig object), `type` (`bar`, `line`, `pie`, `area`), `className` (string) |
| **Events** | `onClick` on data points (optional) |
| **Dependencies** | `recharts`, `@/lib/utils` (`cn`) |
| **Used In** | AnalyticsCards, admin dashboard, teacher batch reports (future) |
| **Status** | Planned |

---

## Layout

> Location: `components/layout/`
> Note: Navbar and Footer are currently implemented in `components/home/` and will be refactored to `layout/` when dashboard panels are built.

---

### Navbar

| Field | Value |
|-------|-------|
| **Name** | `Navbar` |
| **Folder** | `components/home/Navbar.jsx` *(current)* → `components/layout/Navbar.jsx` *(target)* |
| **Purpose** | Fixed top navigation with brand mark, anchor links, auth CTAs, and mobile menu |
| **Props** | None *(current — self-contained)* · Future: `links` (array), `showAuth` (boolean), `variant` (`default`, `dashboard`) |
| **Events** | `onMenuToggle` (internal state), future: `onLoginClick` |
| **Dependencies** | `next/link`, `lucide-react` (Menu, X), `react` (useState) |
| **Used In** | `app/page.jsx` (Homepage) |
| **Status** | Complete |

---

### Footer

| Field | Value |
|-------|-------|
| **Name** | `Footer` |
| **Folder** | `components/home/Footer.jsx` *(current)* → `components/layout/Footer.jsx` *(target)* |
| **Purpose** | Site footer with brand info, navigation columns, social links, and copyright |
| **Props** | None *(current — self-contained)* · Future: `links` (array), `portals` (array), `socialLinks` (array) |
| **Events** | None |
| **Dependencies** | `next/link`, `lucide-react` (Globe2, MessageCircle, Send, Video) |
| **Used In** | `app/page.jsx` (Homepage) |
| **Status** | Complete |

---

### Sidebar

| Field | Value |
|-------|-------|
| **Name** | `Sidebar` |
| **Folder** | `components/layout/Sidebar.jsx` |
| **Purpose** | Collapsible vertical navigation for dashboard panels |
| **Props** | `items` (array of `{ label, href, icon }`), `collapsed` (boolean), `onCollapse` (function), `activeRoute` (string) |
| **Events** | `onNavigate`, `onCollapse` |
| **Dependencies** | `next/link`, `lucide-react`, `@/lib/utils` (`cn`), `Sheet` (mobile) |
| **Used In** | Student panel, teacher panel, admin panel (future) |
| **Status** | Planned |

---

### Topbar

| Field | Value |
|-------|-------|
| **Name** | `Topbar` |
| **Folder** | `components/layout/Topbar.jsx` |
| **Purpose** | Dashboard header bar with page title, search, notifications, and profile menu |
| **Props** | `title` (string), `breadcrumbs` (array), `user` (object), `notificationCount` (number) |
| **Events** | `onSearch`, `onNotificationClick`, `onProfileClick`, `onLogout` |
| **Dependencies** | `Breadcrumb`, `Avatar`, `Button`, `lucide-react` (Bell, Search, Menu) |
| **Used In** | DashboardLayout (future) |
| **Status** | Planned |

---

### DashboardLayout

| Field | Value |
|-------|-------|
| **Name** | `DashboardLayout` |
| **Folder** | `components/layout/DashboardLayout.jsx` |
| **Purpose** | Shell layout combining sidebar, topbar, and main content area for all panels |
| **Props** | `sidebarItems` (array), `children` (node), `user` (object), `role` (`student`, `teacher`, `admin`) |
| **Events** | None (passes through to Sidebar and Topbar) |
| **Dependencies** | `Sidebar`, `Topbar`, `@/lib/utils` (`cn`) |
| **Used In** | `app/student/layout.jsx`, `app/teacher/layout.jsx`, `app/admin/layout.jsx` (future) |
| **Status** | Planned |

---

### PageContainer

| Field | Value |
|-------|-------|
| **Name** | `PageContainer` |
| **Folder** | `components/layout/PageContainer.jsx` |
| **Purpose** | Standard page wrapper with max-width, padding, and optional title |
| **Props** | `title` (string), `description` (string), `actions` (node), `children` (node), `className` (string) |
| **Events** | None |
| **Dependencies** | `@/lib/utils` (`cn`) |
| **Used In** | All dashboard pages, standalone public pages (future) |
| **Status** | Planned |

---

### SectionContainer

| Field | Value |
|-------|-------|
| **Name** | `SectionContainer` |
| **Folder** | `components/layout/SectionContainer.jsx` |
| **Purpose** | Homepage-style section wrapper with label, heading, and content slot |
| **Props** | `id` (string), `label` (string), `heading` (string), `description` (string), `background` (string), `children` (node) |
| **Events** | None |
| **Dependencies** | `@/lib/utils` (`cn`) |
| **Used In** | Homepage sections (future refactor), public pages (future) |
| **Status** | Planned |

---

## Home

> Location: `components/home/`
> All homepage section components for the public landing page.

---

### Hero

| Field | Value |
|-------|-------|
| **Name** | `Hero` |
| **Folder** | `components/home/Hero.jsx` |
| **Purpose** | Primary homepage hero with headline, CTAs, feature highlights, and hero image with stat overlay |
| **Props** | None *(current — self-contained with static data)* |
| **Events** | None (Link navigation) |
| **Dependencies** | `next/link`, `next/image`, `framer-motion`, `lucide-react` (ArrowRight, CalendarCheck, GraduationCap, PlayCircle, ShieldCheck) |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

### Stats

| Field | Value |
|-------|-------|
| **Name** | `Stats` |
| **Folder** | `components/home/Stats.jsx` |
| **Purpose** | Key institute metrics displayed as animated stat cards |
| **Props** | None *(current)* · Future: `stats` (array of `{ icon, value, label }`) |
| **Events** | None |
| **Dependencies** | `framer-motion`, `lucide-react` (Award, BookOpenCheck, Users, Video) |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

### Courses

| Field | Value |
|-------|-------|
| **Name** | `Courses` |
| **Folder** | `components/home/Courses.jsx` |
| **Purpose** | Course program preview cards with category icons and links to full course listing |
| **Props** | None *(current)* · Future: `courses` (array of `{ icon, title, level, description, tone, href }`) |
| **Events** | None (Link navigation) |
| **Dependencies** | `next/link`, `framer-motion`, `lucide-react` (ArrowRight, BarChart3, BookOpen, Calculator, Microscope) |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

### WhyChoose

| Field | Value |
|-------|-------|
| **Name** | `WhyChoose` |
| **Folder** | `components/home/WhyChoose.jsx` |
| **Purpose** | Value proposition grid explaining platform benefits |
| **Props** | None *(current)* · Future: `reasons` (array of `{ icon, title, text }`) |
| **Events** | None |
| **Dependencies** | `framer-motion`, `lucide-react` (ClipboardCheck, LineChart, MessageSquareText, Presentation, ShieldCheck, Sparkles) |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

### Faculty

| Field | Value |
|-------|-------|
| **Name** | `Faculty` |
| **Folder** | `components/home/Faculty.jsx` |
| **Purpose** | Faculty member showcase with photos, subjects, and credential badges |
| **Props** | None *(current)* · Future: `faculty` (array of `{ name, subject, image, badge }`) |
| **Events** | None |
| **Dependencies** | `next/image`, `framer-motion`, `lucide-react` (BadgeCheck, BookMarked) |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

### Testimonials

| Field | Value |
|-------|-------|
| **Name** | `Testimonials` |
| **Folder** | `components/home/Testimonials.jsx` |
| **Purpose** | Student and parent testimonials on dark background with star rating |
| **Props** | None *(current)* · Future: `testimonials` (array of `{ name, role, text }`), `rating` (number) |
| **Events** | None |
| **Dependencies** | `framer-motion`, `lucide-react` (Quote, Star) |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

### Gallery

| Field | Value |
|-------|-------|
| **Name** | `Gallery` |
| **Folder** | `components/home/Gallery.jsx` |
| **Purpose** | Institute photo gallery with masonry-style grid layout |
| **Props** | None *(current)* · Future: `images` (array of `{ title, image, span }`) |
| **Events** | None |
| **Dependencies** | `next/image`, `framer-motion` |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

### FAQ

| Field | Value |
|-------|-------|
| **Name** | `FAQ` |
| **Folder** | `components/home/FAQ.jsx` |
| **Purpose** | Expandable frequently asked questions with accordion-style interaction |
| **Props** | None *(current)* · Future: `faqs` (array of `{ question, answer }`) |
| **Events** | `onToggle` (internal — `setOpenIndex`) |
| **Dependencies** | `react` (useState), `lucide-react` (ChevronDown) |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

### Contact

| Field | Value |
|-------|-------|
| **Name** | `Contact` |
| **Folder** | `components/home/Contact.jsx` |
| **Purpose** | Contact section with institute details and inquiry form |
| **Props** | None *(current)* · Future: `contactItems` (array), `onSubmit` (function) |
| **Events** | `onSubmit` (future — form submission) |
| **Dependencies** | `next/link`, `lucide-react` (Mail, MapPin, Phone, Send) |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

### DemoBanner

| Field | Value |
|-------|-------|
| **Name** | `DemoBanner` |
| **Folder** | `components/home/DemoBanner.jsx` |
| **Purpose** | Full-width CTA banner promoting free demo class booking |
| **Props** | None *(current)* · Future: `title` (string), `href` (string) |
| **Events** | None (Link navigation) |
| **Dependencies** | `next/link`, `lucide-react` (ArrowRight, CalendarDays) |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

### Announcements

| Field | Value |
|-------|-------|
| **Name** | `Announcements` |
| **Folder** | `components/home/Announcements.jsx` |
| **Purpose** | Latest institute announcements displayed as animated cards |
| **Props** | None *(current)* · Future: `announcements` (array of `{ icon, date, title, text }`) |
| **Events** | None |
| **Dependencies** | `framer-motion`, `lucide-react` (Bell, CalendarClock, FileText) |
| **Used In** | `app/page.jsx` |
| **Status** | Complete |

---

## Student

> Location: `components/student/`

---

### StudentSidebar

| Field | Value |
|-------|-------|
| **Name** | `StudentSidebar` |
| **Folder** | `components/student/StudentSidebar.jsx` |
| **Purpose** | Student panel navigation with links to dashboard, courses, assignments, attendance, etc. |
| **Props** | `activeRoute` (string), `collapsed` (boolean) |
| **Events** | `onNavigate`, `onCollapse` |
| **Dependencies** | `Sidebar`, `lucide-react` (LayoutDashboard, BookOpen, ClipboardList, Calendar, Award, User) |
| **Used In** | `app/student/layout.jsx` (future) |
| **Status** | Planned |

---

### StudentHeader

| Field | Value |
|-------|-------|
| **Name** | `StudentHeader` |
| **Folder** | `components/student/StudentHeader.jsx` |
| **Purpose** | Student dashboard top bar with welcome message, notifications, and profile access |
| **Props** | `studentName` (string), `batchName` (string), `notificationCount` (number) |
| **Events** | `onNotificationClick`, `onProfileClick` |
| **Dependencies** | `Topbar`, `Avatar`, `lucide-react` (Bell) |
| **Used In** | `app/student/page.jsx` (future) |
| **Status** | Planned |

---

### CourseCard

| Field | Value |
|-------|-------|
| **Name** | `CourseCard` |
| **Folder** | `components/cards/CourseCard.jsx` |
| **Purpose** | Reusable card displaying enrolled course with progress, next class, and actions |
| **Props** | `title` (string), `subject` (string), `progress` (number), `nextClass` (string), `teacher` (string), `href` (string) |
| **Events** | `onClick` |
| **Dependencies** | `next/link`, `Progress`, `Badge`, `lucide-react` (BookOpen, Clock) |
| **Used In** | Student dashboard, courses page (future) |
| **Status** | Planned |

---

### AttendanceCard

| Field | Value |
|-------|-------|
| **Name** | `AttendanceCard` |
| **Folder** | `components/cards/AttendanceCard.jsx` |
| **Purpose** | Summary card showing attendance percentage and recent record |
| **Props** | `percentage` (number), `present` (number), `absent` (number), `total` (number), `period` (string) |
| **Events** | `onViewDetails` |
| **Dependencies** | `Progress`, `Badge`, `lucide-react` (CalendarCheck) |
| **Used In** | Student dashboard, attendance page (future) |
| **Status** | Planned |

---

### AssignmentCard

| Field | Value |
|-------|-------|
| **Name** | `AssignmentCard` |
| **Folder** | `components/cards/AssignmentCard.jsx` |
| **Purpose** | Card showing assignment details, deadline, and submission status |
| **Props** | `title` (string), `subject` (string), `deadline` (string), `status` (`pending`, `submitted`, `graded`, `overdue`), `marks` (number), `maxMarks` (number) |
| **Events** | `onSubmit`, `onView` |
| **Dependencies** | `Badge`, `Button`, `lucide-react` (ClipboardList, Clock, CheckCircle) |
| **Used In** | Student dashboard, assignments page (future) |
| **Status** | Planned |

---

### CertificateCard

| Field | Value |
|-------|-------|
| **Name** | `CertificateCard` |
| **Folder** | `components/cards/CertificateCard.jsx` |
| **Purpose** | Card displaying earned certificate with download action |
| **Props** | `title` (string), `courseName` (string), `issuedDate` (string), `downloadUrl` (string) |
| **Events** | `onDownload`, `onView` |
| **Dependencies** | `Button`, `lucide-react` (Award, Download) |
| **Used In** | Student dashboard, certificates page (future) |
| **Status** | Planned |

---

### ResultCard

| Field | Value |
|-------|-------|
| **Name** | `ResultCard` |
| **Folder** | `components/cards/ResultCard.jsx` |
| **Purpose** | Card showing exam result with score, rank, and subject breakdown |
| **Props** | `examName` (string), `score` (number), `maxScore` (number), `rank` (number), `date` (string), `subjects` (array) |
| **Events** | `onViewDetails` |
| **Dependencies** | `Badge`, `Progress`, `lucide-react` (Trophy, BarChart3) |
| **Used In** | Student dashboard, results page (future) |
| **Status** | Planned |

---

### ProfileCard

| Field | Value |
|-------|-------|
| **Name** | `ProfileCard` |
| **Folder** | `components/cards/ProfileCard.jsx` |
| **Purpose** | User profile summary with avatar, name, role, and quick info |
| **Props** | `name` (string), `email` (string), `role` (string), `avatarUrl` (string), `batch` (string), `phone` (string) |
| **Events** | `onEdit` |
| **Dependencies** | `Avatar`, `Button`, `Badge`, `lucide-react` (Mail, Phone, Edit) |
| **Used In** | Profile page, student/teacher/admin dashboards (future) |
| **Status** | Planned |

---

## Teacher

> Location: `components/teacher/`

---

### TeacherSidebar

| Field | Value |
|-------|-------|
| **Name** | `TeacherSidebar` |
| **Folder** | `components/teacher/TeacherSidebar.jsx` |
| **Purpose** | Teacher panel navigation with links to dashboard, batches, assignments, attendance, etc. |
| **Props** | `activeRoute` (string), `collapsed` (boolean) |
| **Events** | `onNavigate`, `onCollapse` |
| **Dependencies** | `Sidebar`, `lucide-react` (LayoutDashboard, Users, ClipboardList, Calendar, Video, FileText) |
| **Used In** | `app/teacher/layout.jsx` (future) |
| **Status** | Planned |

---

### TeacherHeader

| Field | Value |
|-------|-------|
| **Name** | `TeacherHeader` |
| **Folder** | `components/teacher/TeacherHeader.jsx` |
| **Purpose** | Teacher dashboard top bar with batch selector, notifications, and profile |
| **Props** | `teacherName` (string), `batches` (array), `activeBatch` (string), `notificationCount` (number) |
| **Events** | `onBatchChange`, `onNotificationClick`, `onProfileClick` |
| **Dependencies** | `Topbar`, `Select`, `Avatar` |
| **Used In** | `app/teacher/page.jsx` (future) |
| **Status** | Planned |

---

### StudentTable

| Field | Value |
|-------|-------|
| **Name** | `StudentTable` |
| **Folder** | `components/teacher/StudentTable.jsx` |
| **Purpose** | Searchable, paginated table of students in a batch |
| **Props** | `students` (array of `{ id, name, email, attendance, status }`), `onRowClick` (function), `searchable` (boolean) |
| **Events** | `onRowClick`, `onSearch`, `onSort` |
| **Dependencies** | `Table`, `Input`, `Pagination`, `Avatar`, `Badge` |
| **Used In** | Teacher batch detail, admin user management (future) |
| **Status** | Planned |

---

### AttendanceTable

| Field | Value |
|-------|-------|
| **Name** | `AttendanceTable` |
| **Folder** | `components/teacher/AttendanceTable.jsx` |
| **Purpose** | Interactive table for marking and viewing batch attendance by date |
| **Props** | `students` (array), `date` (string), `records` (object), `editable` (boolean) |
| **Events** | `onMarkAttendance`, `onDateChange`, `onBulkMark` |
| **Dependencies** | `Table`, `Checkbox`, `Calendar`, `Button`, `Badge` |
| **Used In** | Teacher attendance page, admin reports (future) |
| **Status** | Planned |

---

### AssignmentManager

| Field | Value |
|-------|-------|
| **Name** | `AssignmentManager` |
| **Folder** | `components/teacher/AssignmentManager.jsx` |
| **Purpose** | Create, edit, and manage assignments with submission tracking |
| **Props** | `assignments` (array), `batchId` (string) |
| **Events** | `onCreate`, `onEdit`, `onDelete`, `onGrade` |
| **Dependencies** | `Table`, `Dialog`, `Button`, `Input`, `Textarea`, `DatePicker`, `Badge` |
| **Used In** | Teacher assignments page (future) |
| **Status** | Planned |

---

### ExamManager

| Field | Value |
|-------|-------|
| **Name** | `ExamManager` |
| **Folder** | `components/teacher/ExamManager.jsx` |
| **Purpose** | Create and manage exams with result publishing |
| **Props** | `exams` (array), `batchId` (string) |
| **Events** | `onCreate`, `onEdit`, `onDelete`, `onPublishResults` |
| **Dependencies** | `Table`, `Dialog`, `Button`, `Input`, `DatePicker`, `Badge` |
| **Used In** | Teacher exams page, admin exams (future) |
| **Status** | Planned |

---

## Admin

> Location: `components/admin/`

---

### AdminSidebar

| Field | Value |
|-------|-------|
| **Name** | `AdminSidebar` |
| **Folder** | `components/admin/AdminSidebar.jsx` |
| **Purpose** | Admin panel navigation with links to all management sections |
| **Props** | `activeRoute` (string), `collapsed` (boolean) |
| **Events** | `onNavigate`, `onCollapse` |
| **Dependencies** | `Sidebar`, `lucide-react` (LayoutDashboard, Users, BookOpen, CreditCard, BarChart3, Bell, Settings) |
| **Used In** | `app/admin/layout.jsx` (future) |
| **Status** | Planned |

---

### AdminHeader

| Field | Value |
|-------|-------|
| **Name** | `AdminHeader` |
| **Folder** | `components/admin/AdminHeader.jsx` |
| **Purpose** | Admin dashboard top bar with institute name, search, and system actions |
| **Props** | `instituteName` (string), `adminName` (string), `notificationCount` (number) |
| **Events** | `onSearch`, `onNotificationClick`, `onSettingsClick`, `onLogout` |
| **Dependencies** | `Topbar`, `Avatar`, `Button` |
| **Used In** | `app/admin/page.jsx` (future) |
| **Status** | Planned |

---

### AnalyticsCards

| Field | Value |
|-------|-------|
| **Name** | `AnalyticsCards` |
| **Folder** | `components/dashboard/AnalyticsCards.jsx` |
| **Purpose** | Grid of stat cards with trend indicators for admin dashboard |
| **Props** | `stats` (array of `{ label, value, change, trend, icon }`) |
| **Events** | `onCardClick` |
| **Dependencies** | `lucide-react`, `Charts`, `@/lib/utils` (`cn`) |
| **Used In** | Admin dashboard, analytics page (future) |
| **Status** | Planned |

---

### UserTable

| Field | Value |
|-------|-------|
| **Name** | `UserTable` |
| **Folder** | `components/admin/UserTable.jsx` |
| **Purpose** | Admin user management table with search, filter, role badges, and actions |
| **Props** | `users` (array of `{ id, name, email, role, status, joinedAt }`), `onEdit` (function), `onDeactivate` (function) |
| **Events** | `onEdit`, `onDeactivate`, `onSearch`, `onFilter`, `onSort` |
| **Dependencies** | `Table`, `Input`, `Select`, `Pagination`, `Avatar`, `Badge`, `Button`, `Dialog` |
| **Used In** | Admin user management page (future) |
| **Status** | Planned |

---

### CourseManager

| Field | Value |
|-------|-------|
| **Name** | `CourseManager` |
| **Folder** | `components/admin/CourseManager.jsx` |
| **Purpose** | CRUD interface for managing courses, batches, and teacher assignments |
| **Props** | `courses` (array), `teachers` (array) |
| **Events** | `onCreate`, `onEdit`, `onDelete`, `onAssignTeacher` |
| **Dependencies** | `Table`, `Dialog`, `Button`, `Input`, `Textarea`, `Select`, `Badge` |
| **Used In** | Admin course management page (future) |
| **Status** | Planned |

---

### PaymentTable

| Field | Value |
|-------|-------|
| **Name** | `PaymentTable` |
| **Folder** | `components/admin/PaymentTable.jsx` |
| **Purpose** | Fee and payment tracking table with status filters and export |
| **Props** | `payments` (array of `{ id, student, amount, status, method, date }`), `onExport` (function) |
| **Events** | `onExport`, `onFilter`, `onSearch`, `onSort` |
| **Dependencies** | `Table`, `Input`, `Select`, `Pagination`, `Badge`, `Button` |
| **Used In** | Admin payments page (future) |
| **Status** | Planned |

---

### AnnouncementManager

| Field | Value |
|-------|-------|
| **Name** | `AnnouncementManager` |
| **Folder** | `components/admin/AnnouncementManager.jsx` |
| **Purpose** | Create, edit, publish, and archive institute announcements |
| **Props** | `announcements` (array of `{ id, title, content, status, publishedAt }`) |
| **Events** | `onCreate`, `onEdit`, `onPublish`, `onArchive`, `onDelete` |
| **Dependencies** | `Table`, `Dialog`, `Button`, `Input`, `Textarea`, `Badge`, `Switch` |
| **Used In** | Admin announcements page (future) |
| **Status** | Planned |

---

## Naming Conventions

### Component Names

| Rule | Example | Anti-Pattern |
|------|---------|--------------|
| PascalCase for components | `CourseCard`, `StudentSidebar` | `courseCard`, `student-sidebar` |
| Descriptive and specific | `AttendanceTable` | `Table`, `MyTable` |
| Role prefix for panels | `StudentHeader`, `AdminSidebar` | `Header`, `Sidebar` |
| No generic names | `AssignmentManager` | `Manager`, `Component` |

### File Names

| Rule | Example |
|------|---------|
| Match component name exactly | `CourseCard.jsx` exports `CourseCard` |
| One component per file | `Button.jsx` contains only `Button` |
| PascalCase file names | `StudentSidebar.jsx` |
| Index files avoided | Use explicit file names, not `index.jsx` |

### Variables and Functions

| Rule | Example | Anti-Pattern |
|------|---------|--------------|
| camelCase for variables | `const activeRoute = "/"` | `const ActiveRoute` |
| camelCase for functions | `function handleSubmit()` | `function HandleSubmit()` |
| camelCase for hooks | `useAuth`, `useAttendance` | `UseAuth` |
| UPPER_SNAKE for constants | `const MAX_FILE_SIZE = 5242880` | `const maxFileSize` |
| Boolean prefix with `is`/`has`/`show` | `isOpen`, `hasError`, `showModal` | `open`, `error`, `modal` |

### Props

| Rule | Example |
|------|---------|
| camelCase | `notificationCount`, `onSubmit` |
| Event handlers prefixed with `on` | `onClick`, `onChange`, `onNavigate` |
| Boolean props prefixed with `is`/`show`/`disabled` | `isLoading`, `showHeader`, `disabled` |
| Render props suffixed with `Render` | `renderItem`, `renderEmpty` |

### Reusability First

- Before creating `StudentCourseCard`, check if `CourseCard` in `components/cards/` can accept a `variant="student"` prop.
- Before creating `AdminTable`, check if `Table` with composition can serve the purpose.
- Domain folders (`student/`, `teacher/`, `admin/`) are for components that **cannot** be shared across roles.

### No Duplicate Components

- Search this registry and `components/` before creating anything new.
- If two components differ only in data, use props instead of duplicating.
- If a homepage component becomes reusable, refactor it to `components/cards/` or `components/common/` and update this registry.

---

## Component Rules

### Architecture

1. **Components must remain reusable.** Accept data via props; never hardcode domain-specific data in shared components.
2. **No business logic inside UI components.** API calls, data fetching, and state management belong in pages, hooks, or services — not in `ui/` or `cards/`.
3. **Keep components small and modular.** Target under 150 lines. Split into sub-components when exceeding 300 lines.
4. **Prefer composition over duplication.** Build complex UIs by composing small primitives, not by copying code.

### Styling

5. **Use Tailwind CSS only.** No inline styles, no CSS modules. Use `cn()` for conditional classes.
6. **Use Lucide React icons.** No other icon libraries. Import only the icons you need.
7. **Support dark mode.** Use shadcn CSS variables (`bg-background`, `text-foreground`, `border-border`) in all dashboard and form components.

### Quality

8. **Follow accessibility best practices.** Semantic HTML, ARIA labels, keyboard navigation, focus states, color contrast.
9. **Add comments where necessary.** Only for non-obvious logic — not for self-explanatory code.
10. **Register before building.** Add an entry to this file with status `In Progress` before writing component code.
11. **Update after building.** Change status to `Complete` and fill in actual props, dependencies, and usage locations.

### Client vs Server

12. **Server components by default.** Only add `"use client"` when the component uses hooks, state, event handlers, or browser APIs.
13. **Push `"use client"` down.** If only a small part needs interactivity, extract it into a client sub-component.

### Dependencies

14. **Minimize dependencies.** Prefer composing existing components over adding new npm packages.
15. **Import from aliases.** Use `@/components/ui/Button`, not relative paths like `../../ui/Button`.

---

## Future Components

> Add new component entries below as the project grows. Follow the registry format above.

### Planned Common Components

| Name | Folder | Purpose | Status |
|------|--------|---------|--------|
| `EmptyState` | `components/common/EmptyState.jsx` | Placeholder when lists have no data | Planned |
| `ErrorState` | `components/common/ErrorState.jsx` | Error display with retry action | Planned |
| `PageHeader` | `components/common/PageHeader.jsx` | Page title with breadcrumbs and actions | Planned |
| `SearchBar` | `components/common/SearchBar.jsx` | Search input with debounce and clear | Planned |
| `FileUpload` | `components/common/FileUpload.jsx` | Drag-and-drop file upload with preview | Planned |
| `ConfirmDialog` | `components/common/ConfirmDialog.jsx` | Reusable confirmation modal | Planned |
| `StatCard` | `components/dashboard/StatCard.jsx` | Single metric card with icon and trend | Planned |
| `NotificationBell` | `components/common/NotificationBell.jsx` | Bell icon with unread count badge | Planned |
| `VideoPlayer` | `components/common/VideoPlayer.jsx` | Wrapped video player for recorded classes | Planned |
| `ThemeToggle` | `components/common/ThemeToggle.jsx` | Light/dark mode switch | Planned |

### Registration Template

When adding a new component, copy this template:

```markdown
### ComponentName

| Field | Value |
|-------|-------|
| **Name** | `ComponentName` |
| **Folder** | `components/[folder]/ComponentName.jsx` |
| **Purpose** | Brief description of what this component does |
| **Props** | List all props with types |
| **Events** | List all event handlers |
| **Dependencies** | List imported components and libraries |
| **Used In** | List pages or parent components |
| **Status** | Planned / In Progress / Complete |
```

---

## Registry Summary

| Category | Total | Complete | In Progress | Planned |
|----------|-------|----------|-------------|---------|
| UI | 27 | 0 | 0 | 27 |
| Layout | 7 | 2 | 0 | 5 |
| Home | 11 | 11 | 0 | 0 |
| Student | 8 | 0 | 0 | 8 |
| Teacher | 6 | 0 | 0 | 6 |
| Admin | 7 | 0 | 0 | 7 |
| Common (future) | 10 | 0 | 0 | 10 |
| **Total** | **76** | **13** | **0** | **63** |

---

*Update this registry whenever components are created, modified, moved, or deprecated.*

*Last updated: July 2026*
