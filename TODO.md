# Digiwell — Development Roadmap

> **Purpose:** Complete development checklist for the Digiwell coaching management platform. Check off items as they are completed. AI assistants should update this file after finishing tasks.

**Legend:** ✅ Done · 🟡 In Progress · ⬜ Not Started

---

## Table of Contents

1. [Homepage](#homepage)
2. [Authentication](#authentication)
3. [Student Panel](#student-panel)
4. [Teacher Panel](#teacher-panel)
5. [Admin Panel](#admin-panel)
6. [Courses](#courses)
7. [Attendance](#attendance)
8. [Assignments](#assignments)
9. [Notes](#notes)
10. [Certificates](#certificates)
11. [Payments](#payments)
12. [Live Classes](#live-classes)
13. [Recorded Classes](#recorded-classes)
14. [Notifications](#notifications)
15. [Analytics](#analytics)
16. [Backend](#backend)
17. [Database](#database)
18. [API](#api)
19. [Deployment](#deployment)
20. [Infrastructure & Tooling](#infrastructure--tooling)

---

## Homepage

> Route: `/` · Components: `components/home/`

### Landing Page Sections

- [x] Navbar with responsive mobile menu
- [x] Hero section with headline, CTAs, and hero image
- [x] Stats section (students, success rate, courses, lessons)
- [x] Courses preview section (4 program categories)
- [x] Why Choose Digiwell section
- [x] Testimonials section
- [x] Faculty showcase section
- [x] Gallery section
- [x] Demo class booking banner
- [x] Announcements section
- [x] FAQ section
- [x] Contact section
- [x] Footer with links and branding

### Homepage Enhancements

- [ ] SEO meta tags (Open Graph, Twitter cards)
- [ ] Structured data (JSON-LD for organization)
- [ ] Smooth scroll behavior for anchor links
- [ ] Page transition animations between routes
- [ ] Cookie consent banner
- [ ] Accessibility audit and fixes (WCAG AA)
- [ ] Performance optimization (Lighthouse ≥ 90)

### Standalone Public Pages

- [ ] About page (`/about`)
- [ ] Contact page (`/contact`) — standalone form with validation
- [ ] FAQ page (`/faq`) — full FAQ with search
- [ ] Faculty page (`/faculty`) — detailed faculty profiles
- [ ] Gallery page (`/gallery`) — full image gallery with lightbox
- [ ] Results page (`/results`) — institute results showcase
- [ ] Announcements page (`/announcements`) — public announcements feed
- [ ] Demo class booking page (`/demo-class`) — booking form with confirmation

---

## Authentication

> Routes: `/login`, `/signup` · Middleware: `middleware.js`

### Login

- [ ] Login page UI (`app/login/page.jsx`)
- [ ] Email/password login form
- [ ] Form validation (client-side)
- [ ] "Remember me" checkbox
- [ ] "Forgot password" link
- [ ] Error state handling (invalid credentials)
- [ ] Loading state during authentication
- [ ] Redirect to role-specific dashboard after login
- [ ] Social login placeholders (Google — future)

### Signup

- [ ] Signup page UI (`app/signup/page.jsx`)
- [ ] Registration form (name, email, phone, password, role selection)
- [ ] Form validation (client-side)
- [ ] Password strength indicator
- [ ] Terms and conditions acceptance
- [ ] Email verification flow (future)
- [ ] Redirect to login or dashboard after signup

### Session Management

- [ ] Authentication context provider (`context/AuthContext.jsx`)
- [ ] Session persistence (cookies/tokens)
- [ ] Auto-logout on session expiry
- [ ] Protected route middleware in `middleware.js`
- [ ] Role-based route access (student, teacher, admin)
- [ ] Auth hook (`hooks/useAuth.js`)

### Password Recovery

- [ ] Forgot password page
- [ ] Password reset email flow
- [ ] Reset password page with token validation

---

## Student Panel

> Route: `/student` · Components: `components/student/`

### Dashboard

- [ ] Student dashboard layout (`app/student/layout.jsx`)
- [ ] Dashboard overview page (`app/student/page.jsx`)
- [ ] Welcome header with student name and batch info
- [ ] Enrolled courses summary cards
- [ ] Upcoming classes widget
- [ ] Pending assignments widget
- [ ] Recent attendance summary
- [ ] Quick action buttons (join class, view notes, submit assignment)
- [ ] Announcement feed on dashboard

### Student Navigation

- [ ] Sidebar navigation component
- [ ] Mobile-responsive sidebar (collapsible)
- [ ] Active route highlighting
- [ ] Notification bell with unread count
- [ ] Profile dropdown menu
- [ ] Logout functionality

### Student Profile

- [ ] Profile page (`app/profile/page.jsx`)
- [ ] View/edit personal information
- [ ] Profile photo upload
- [ ] Change password
- [ ] View enrolled batches and courses

### Student Settings

- [ ] Settings page (`app/settings/page.jsx`)
- [ ] Notification preferences
- [ ] Theme preference (light/dark — future)
- [ ] Language preference (future)

---

## Teacher Panel

> Route: `/teacher` · Components: `components/teacher/`

### Dashboard

- [ ] Teacher dashboard layout (`app/teacher/layout.jsx`)
- [ ] Dashboard overview page (`app/teacher/page.jsx`)
- [ ] Assigned batches overview
- [ ] Today's schedule widget
- [ ] Pending grading queue
- [ ] Attendance summary for the week
- [ ] Quick actions (start class, create assignment, mark attendance)

### Teacher Navigation

- [ ] Sidebar navigation component
- [ ] Mobile-responsive sidebar
- [ ] Batch switcher dropdown
- [ ] Notification bell
- [ ] Profile dropdown menu

### Batch Management

- [ ] View assigned batches and student lists
- [ ] Batch detail page with student roster
- [ ] Student performance overview per batch
- [ ] Export student list (CSV)

### Content Management

- [ ] Upload study notes for a batch
- [ ] Create and publish assignments
- [ ] Schedule live classes
- [ ] Upload recorded class videos
- [ ] Create and manage exams

---

## Admin Panel

> Route: `/admin` · Components: `components/admin/`

### Dashboard

- [ ] Admin dashboard layout (`app/admin/layout.jsx`)
- [ ] Dashboard overview page (`app/admin/page.jsx`)
- [ ] Institute overview stats (total students, teachers, courses, revenue)
- [ ] Recent admissions widget
- [ ] Fee collection summary
- [ ] Attendance overview chart
- [ ] Quick actions (add student, create course, send announcement)

### Admin Navigation

- [ ] Sidebar navigation with all admin sections
- [ ] Mobile-responsive sidebar
- [ ] Role indicator and institute name
- [ ] System status indicators

### User Management

- [ ] Student list with search, filter, and pagination
- [ ] Add/edit/deactivate student
- [ ] Teacher list with search and filter
- [ ] Add/edit/deactivate teacher
- [ ] Bulk import students (CSV upload)
- [ ] Assign students to batches

### Course Management

- [ ] Course list with CRUD operations
- [ ] Create/edit course (title, description, syllabus, fee, duration)
- [ ] Assign teachers to courses
- [ ] Manage course batches and schedules
- [ ] Course enrollment management

### Institute Settings

- [ ] Institute profile (name, logo, address, contact)
- [ ] Academic year configuration
- [ ] Fee structure templates
- [ ] Announcement management (create, edit, publish)
- [ ] System configuration

---

## Courses

> Routes: `/courses`, `/course/[id]`

### Course Listing

- [ ] Courses page UI (`app/courses/page.jsx`)
- [ ] Course cards with category, level, and description
- [ ] Filter by category (Foundation, Science, Commerce, Competitive)
- [ ] Filter by class level
- [ ] Search courses by name
- [ ] Sort by popularity, date, fee
- [ ] Pagination

### Course Detail

- [ ] Course detail page (`app/course/[id]/page.jsx`)
- [ ] Course overview (description, syllabus, duration, fee)
- [ ] Assigned faculty list
- [ ] Batch schedule and availability
- [ ] Student testimonials for the course
- [ ] Enrollment CTA (login required)
- [ ] Related courses section

### Course Enrollment

- [ ] Enrollment form (select batch, confirm details)
- [ ] Fee summary before enrollment
- [ ] Enrollment confirmation page
- [ ] Enrollment history in student panel

### Course Content (Teacher/Admin)

- [ ] Curriculum builder (modules and topics)
- [ ] Attach notes, assignments, and recordings to modules
- [ ] Publish/unpublish course content
- [ ] Course progress tracking per student

---

## Attendance

> Route: `/attendance`

### Attendance Marking (Teacher)

- [ ] Attendance page UI (`app/attendance/page.jsx`)
- [ ] Select batch and date
- [ ] Student list with present/absent/late toggle
- [ ] Bulk mark all present/absent
- [ ] Save attendance record
- [ ] Edit past attendance (with audit log)

### Attendance Viewing (Student)

- [ ] Personal attendance calendar view
- [ ] Monthly attendance percentage
- [ ] Attendance history list
- [ ] Low attendance alerts

### Attendance Reports (Admin/Teacher)

- [ ] Batch-wise attendance report
- [ ] Student-wise attendance summary
- [ ] Date range filter
- [ ] Export attendance report (CSV/PDF)
- [ ] Attendance trend chart

### Live Class Attendance

- [ ] Auto-mark attendance on live class join
- [ ] Manual override for live class attendance
- [ ] Late join detection

---

## Assignments

> Route: `/assignments`

### Assignment Creation (Teacher)

- [ ] Assignments page UI (`app/assignments/page.jsx`)
- [ ] Create assignment form (title, description, deadline, batch, attachments)
- [ ] Rich text description editor
- [ ] File attachment upload
- [ ] Set maximum marks
- [ ] Publish assignment to batch

### Assignment Submission (Student)

- [ ] View assigned assignments with deadlines
- [ ] Submit assignment (text + file upload)
- [ ] View submission status (pending, submitted, graded)
- [ ] Resubmit before deadline (if allowed)
- [ ] View graded feedback and marks

### Assignment Grading (Teacher)

- [ ] View submissions per assignment
- [ ] Grade submission with marks and feedback
- [ ] Bulk grading interface
- [ ] Late submission flagging
- [ ] Assignment analytics (submission rate, average score)

### Assignment Management (Admin)

- [ ] View all assignments across batches
- [ ] Assignment completion reports
- [ ] Export assignment data

---

## Notes

> Route: `/notes`

### Notes Upload (Teacher)

- [ ] Notes page UI (`app/notes/page.jsx`)
- [ ] Upload notes (PDF, images, documents)
- [ ] Organize notes by subject and topic
- [ ] Tag notes with batch/course
- [ ] Edit note metadata (title, description, tags)

### Notes Access (Student)

- [ ] Browse notes by subject and topic
- [ ] Search notes by keyword
- [ ] Filter by course/batch
- [ ] Download notes
- [ ] View notes inline (PDF viewer)

### Notes Management (Admin)

- [ ] View all uploaded notes
- [ ] Approve/reject notes before publishing (optional workflow)
- [ ] Storage usage monitoring
- [ ] Bulk delete/archive notes

---

## Certificates

> Route: `/certificates`

### Certificate Generation

- [ ] Certificates page UI (`app/certificates/page.jsx`)
- [ ] Certificate template design
- [ ] Auto-generate on course completion
- [ ] Manual certificate generation (admin)
- [ ] Certificate preview before issuance

### Certificate Access (Student)

- [ ] View earned certificates
- [ ] Download certificate (PDF)
- [ ] Share certificate (link/image)
- [ ] Verify certificate authenticity (public verification page)

### Certificate Management (Admin)

- [ ] Certificate template editor
- [ ] Bulk certificate generation
- [ ] Revoke certificate
- [ ] Certificate issuance log

---

## Payments

> Route: `/payments` (future dedicated route)

### Fee Management (Admin)

- [ ] Define fee structures per course/batch
- [ ] Create fee schedules (monthly, quarterly, one-time)
- [ ] Apply discounts and scholarships
- [ ] Generate invoices
- [ ] Track payment status per student

### Payment Collection (Student/Parent)

- [ ] View fee dues and payment history
- [ ] Online payment integration (Razorpay/Stripe — TBD)
- [ ] Payment receipt download
- [ ] Payment reminder notifications

### Payment Reports (Admin)

- [ ] Revenue dashboard
- [ ] Outstanding dues report
- [ ] Payment collection trends
- [ ] Export financial reports

---

## Live Classes

> Route: `/live-classes`

### Class Scheduling (Teacher/Admin)

- [ ] Live classes page UI (`app/live-classes/page.jsx`)
- [ ] Schedule live class (title, batch, date/time, duration)
- [ ] Recurring class schedule support
- [ ] Edit/cancel scheduled classes
- [ ] Integration with video platform (Zoom/Google Meet — TBD)

### Joining Live Classes (Student/Teacher)

- [ ] View upcoming live classes
- [ ] Join live class button (with link/iframe)
- [ ] Live class in-progress indicator
- [ ] Auto-attendance on join

### Live Class Management

- [ ] Class recording toggle
- [ ] Chat/Q&A during live class (future)
- [ ] Screen sharing support (via video platform)
- [ ] Post-class summary and recording link

---

## Recorded Classes

> Route: `/recorded-classes`

### Upload & Management (Teacher)

- [ ] Recorded classes page UI (`app/recorded-classes/page.jsx`)
- [ ] Upload recorded video (or link to recording)
- [ ] Add metadata (title, subject, topic, batch, date)
- [ ] Organize by course module
- [ ] Edit/delete recordings

### Viewing (Student)

- [ ] Browse recorded classes by subject/topic
- [ ] Search recorded classes
- [ ] Video player with playback controls
- [ ] Watch progress tracking (resume where left off)
- [ ] Bookmark/save for later

### Admin

- [ ] Storage usage dashboard
- [ ] Content moderation (approve before publish)
- [ ] Viewership analytics per recording

---

## Notifications

> In-app notifications across all panels

### Notification System

- [ ] Notification context/provider
- [ ] Notification bell component with unread badge
- [ ] Notification dropdown/list
- [ ] Mark as read/unread
- [ ] Mark all as read
- [ ] Notification preferences in settings

### Notification Triggers

- [ ] New assignment posted
- [ ] Assignment graded
- [ ] Assignment deadline reminder (24h before)
- [ ] Live class starting soon (15 min before)
- [ ] New notes uploaded
- [ ] Attendance marked
- [ ] Fee payment due/overdue
- [ ] New announcement published
- [ ] Exam results published
- [ ] Certificate issued

### Email Notifications (Future)

- [ ] Email notification service integration
- [ ] Email templates for each notification type
- [ ] Unsubscribe/preferences management

---

## Analytics

> Admin and teacher analytics dashboards

### Student Analytics

- [ ] Individual student performance dashboard
- [ ] Attendance trends over time
- [ ] Assignment score trends
- [ ] Exam performance history
- [ ] Course completion progress

### Batch Analytics (Teacher)

- [ ] Batch performance overview
- [ ] Average attendance rate
- [ ] Assignment submission rates
- [ ] Score distribution charts
- [ ] Top/bottom performers

### Institute Analytics (Admin)

- [ ] Total enrollment trends
- [ ] Revenue analytics
- [ ] Course popularity rankings
- [ ] Teacher performance metrics
- [ ] Retention and dropout rates
- [ ] Export analytics reports

### Dashboard Charts

- [ ] Line charts for trends
- [ ] Bar charts for comparisons
- [ ] Pie charts for distributions
- [ ] Date range selector
- [ ] Chart library integration (Recharts or Chart.js — TBD)

---

## Backend

> Server-side logic and services

### Project Setup

- [ ] Choose backend approach (Next.js API routes vs. separate backend)
- [ ] Environment variable configuration (`.env.local`)
- [ ] Error handling middleware
- [ ] Request validation layer
- [ ] Logging setup

### Authentication Backend

- [ ] User registration endpoint
- [ ] Login endpoint with JWT/session
- [ ] Password hashing (bcrypt)
- [ ] Token refresh mechanism
- [ ] Password reset flow
- [ ] Role-based authorization middleware

### Business Logic Services

- [ ] User service (`services/userService.js`)
- [ ] Course service (`services/courseService.js`)
- [ ] Attendance service (`services/attendanceService.js`)
- [ ] Assignment service (`services/assignmentService.js`)
- [ ] Notes service (`services/notesService.js`)
- [ ] Payment service (`services/paymentService.js`)
- [ ] Notification service (`services/notificationService.js`)
- [ ] Analytics service (`services/analyticsService.js`)

### File Storage

- [ ] File upload endpoint
- [ ] Cloud storage integration (AWS S3 / Cloudinary — TBD)
- [ ] File type and size validation
- [ ] Secure file access (signed URLs)

---

## Database

> Data persistence layer

### Setup

- [ ] Choose database (PostgreSQL recommended)
- [ ] Choose ORM (Prisma recommended)
- [ ] Database connection configuration
- [ ] Migration tooling setup
- [ ] Seed data for development

### Schema Design

- [ ] Users table (id, name, email, phone, password, role, status)
- [ ] Institutes table (id, name, logo, address, settings)
- [ ] Courses table (id, title, description, category, fee, institute_id)
- [ ] Batches table (id, course_id, name, schedule, teacher_id)
- [ ] Enrollments table (student_id, batch_id, status, enrolled_at)
- [ ] Attendance table (student_id, batch_id, date, status)
- [ ] Assignments table (id, title, description, batch_id, deadline, max_marks)
- [ ] Submissions table (assignment_id, student_id, content, marks, feedback)
- [ ] Notes table (id, title, file_url, subject, batch_id, uploaded_by)
- [ ] Live classes table (id, title, batch_id, scheduled_at, duration, link)
- [ ] Recorded classes table (id, title, video_url, batch_id, topic)
- [ ] Exams table (id, title, batch_id, date, max_marks)
- [ ] Results table (exam_id, student_id, marks, rank)
- [ ] Certificates table (id, student_id, course_id, issued_at, template)
- [ ] Payments table (id, student_id, amount, status, method, paid_at)
- [ ] Notifications table (id, user_id, type, message, read, created_at)
- [ ] Announcements table (id, title, content, institute_id, published_at)

### Data Management

- [ ] Database indexes for performance
- [ ] Soft delete pattern for user-facing records
- [ ] Audit log for sensitive operations
- [ ] Database backup strategy

---

## API

> RESTful or tRPC API endpoints

### API Structure

- [ ] API route organization (`app/api/` or separate server)
- [ ] Consistent response format (success, error, pagination)
- [ ] API versioning strategy
- [ ] Rate limiting
- [ ] CORS configuration

### Core Endpoints

- [ ] `POST /api/auth/login`
- [ ] `POST /api/auth/signup`
- [ ] `POST /api/auth/logout`
- [ ] `POST /api/auth/forgot-password`
- [ ] `GET /api/users/me`
- [ ] `PUT /api/users/me`
- [ ] `GET /api/courses`
- [ ] `GET /api/courses/:id`
- [ ] `POST /api/courses` (admin)
- [ ] `GET /api/batches`
- [ ] `GET /api/batches/:id/students`
- [ ] `POST /api/enrollments`
- [ ] `GET /api/attendance`
- [ ] `POST /api/attendance`
- [ ] `GET /api/assignments`
- [ ] `POST /api/assignments`
- [ ] `POST /api/assignments/:id/submit`
- [ ] `PUT /api/assignments/:id/grade`
- [ ] `GET /api/notes`
- [ ] `POST /api/notes`
- [ ] `GET /api/live-classes`
- [ ] `POST /api/live-classes`
- [ ] `GET /api/recorded-classes`
- [ ] `POST /api/recorded-classes`
- [ ] `GET /api/notifications`
- [ ] `PUT /api/notifications/:id/read`
- [ ] `GET /api/analytics/dashboard`
- [ ] `POST /api/payments`
- [ ] `GET /api/certificates`
- [ ] `POST /api/certificates/generate`

### API Documentation

- [ ] API documentation (Swagger/OpenAPI or README)
- [ ] Request/response examples
- [ ] Authentication documentation

---

## Deployment

> Production deployment and DevOps

### Environment Setup

- [ ] Production environment variables
- [ ] Staging environment setup
- [ ] Environment-specific configuration

### Hosting

- [ ] Choose hosting platform (Vercel recommended for Next.js)
- [ ] Configure custom domain
- [ ] SSL certificate setup
- [ ] CDN configuration for static assets

### CI/CD

- [ ] GitHub Actions workflow (lint, build, test)
- [ ] Automatic deployment on merge to main
- [ ] Preview deployments for pull requests
- [ ] Database migration on deploy

### Monitoring

- [ ] Error tracking (Sentry or similar)
- [ ] Performance monitoring
- [ ] Uptime monitoring
- [ ] Log aggregation

### Production Checklist

- [ ] Security headers configured
- [ ] Rate limiting enabled
- [ ] Database connection pooling
- [ ] Image optimization verified
- [ ] Build size audit
- [ ] Lighthouse audit passing
- [ ] Backup and recovery tested

---

## Infrastructure & Tooling

> Shared components and developer experience

### shadcn/ui Components

- [ ] Install Button component
- [ ] Install Input component
- [ ] Install Card component
- [ ] Install Dialog/Modal component
- [ ] Install Dropdown Menu component
- [ ] Install Table component
- [ ] Install Tabs component
- [ ] Install Toast/Sonner component
- [ ] Install Form component
- [ ] Install Select component
- [ ] Install Badge component
- [ ] Install Avatar component
- [ ] Install Sheet component (mobile sidebar)
- [ ] Install Calendar component (attendance)
- [ ] Install Progress component

### Shared Components

- [ ] Page header component (title, breadcrumbs, actions)
- [ ] Empty state component
- [ ] Loading skeleton component
- [ ] Error state component
- [ ] Pagination component
- [ ] Search input component
- [ ] Data table component
- [ ] Stat card component
- [ ] Confirmation dialog component
- [ ] File upload component

### Global Pages

- [ ] Proper loading page (`app/loading.jsx`)
- [ ] Proper 404 page (`app/not-found.jsx`)
- [ ] Global error boundary (`app/error.jsx`)

### Developer Experience

- [ ] Prettier configuration
- [ ] Git hooks (husky + lint-staged)
- [ ] VS Code workspace settings
- [ ] Component storybook (optional)

---

## Progress Summary

| Module | Status | Progress |
|--------|--------|----------|
| Homepage | ✅ Complete | 13/13 sections done |
| Authentication | ⬜ Not Started | 0/20 tasks |
| Student Panel | ⬜ Not Started | 0/18 tasks |
| Teacher Panel | ⬜ Not Started | 0/14 tasks |
| Admin Panel | ⬜ Not Started | 0/18 tasks |
| Courses | ⬜ Not Started | 0/16 tasks |
| Attendance | ⬜ Not Started | 0/14 tasks |
| Assignments | ⬜ Not Started | 0/14 tasks |
| Notes | ⬜ Not Started | 0/10 tasks |
| Certificates | ⬜ Not Started | 0/10 tasks |
| Payments | ⬜ Not Started | 0/10 tasks |
| Live Classes | ⬜ Not Started | 0/12 tasks |
| Recorded Classes | ⬜ Not Started | 0/10 tasks |
| Notifications | ⬜ Not Started | 0/14 tasks |
| Analytics | ⬜ Not Started | 0/14 tasks |
| Backend | ⬜ Not Started | 0/16 tasks |
| Database | ⬜ Not Started | 0/22 tasks |
| API | ⬜ Not Started | 0/30 tasks |
| Deployment | ⬜ Not Started | 0/16 tasks |
| Infrastructure | ⬜ Not Started | 0/22 tasks |

---

*Update this file as tasks are completed. Mark items with `[x]` when done.*

*Last updated: July 2026*
