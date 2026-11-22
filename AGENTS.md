# AGENTS.md — Persistent Project Instructions & Development Standards (Audited & Final)

This document establishes the mandatory operational guidelines, coding standards, visual quality criteria, and content integrity rules for any AI agent or software engineer working in the `anik-dash-portfolio` repository.

---

## 1. Project Identity & Positioning Mandate

- **Professional Subject:** Anik Dash
- **Authoritative Professional Title:** **IT Manager | Cloud & DevOps | Business Technology**
- **Location:** Natunbazar, Dhaka, Bangladesh (Display verified location only; NEVER invent GPS coordinates, latitude/longitude, or unconfirmed public locations).
- **Core Narrative:** Anik bridges the gap between enterprise business operations and modern cloud infrastructure. He combines active IT Management leadership (managing daily IT operations across 12 outlets, Microsoft 365 administration for 40 user licenses, ongoing HRMS implementation for ~150 employees, and technology procurement at Arabika Cafe) with hands-on Cloud and DevOps engineering (AWS Solutions Architect, AWS AI Practitioner, Azure Administrator Associate, Docker, Kubernetes, CI/CD, and Linux).
- **Primary Design Reference:** [johnbolster.design](https://www.johnbolster.design/) (Used as an interaction, kinetic, and editorial layout benchmark—**NOT for direct duplication**).
- **Visual Identity:** **Systems Engineering Rigor meets Constructivist Editorial Layout**. The website must look like an architectural journal for an infrastructure leader, featuring warm paper cream, matte obsidian black, cloud blue, and safety amber accents.

---

## 2. Content Integrity & Zero-Hallucination Policy

> [!IMPORTANT]
> **Strict Content Fidelity:** You must NEVER invent, assume, or extrapolate personal details, job titles, companies, project metrics, client names, dates, degrees, or certifications.

1. **Source of Truth:** All biographical data, career history, metrics, certifications, and project repositories must be drawn strictly and verbatim from:
   - `docs/PROFILE.md`
   - `docs/SITE_CONTENT.md`
2. **Missing Information Protocol:** If a project or experience detail is not documented in `docs/PROFILE.md`, do not manufacture it. Use the verified descriptions documented in `docs/SITE_CONTENT.md` or explicitly flag it for user clarification.
3. **Strict Verified Metrics:**
   - **12 OUTLETS — IT OPERATIONS:** Daily hardware, network, and IT operations managed across 12 outlets at Arabika Cafe.
   - **~150 EMPLOYEES — HRMS IMPLEMENTATION SCOPE:** Employee scope for the ongoing HRMS and biometric attendance system implementation. **NEVER imply that Anik directly manages or employs all 150 employees.**
   - **40 MICROSOFT 365 USER LICENSES:** Exactly `40` user licenses administered across organizational email, subscriptions, and access permissions.
   - **07 PROFESSIONAL CERTIFICATIONS:** Exactly `7` formal industry credentials (AWS Solutions Architect Associate, AWS AI Practitioner, Azure Administrator Associate, Linux Foundation LFS101, OCI AI Associate, OCI Foundations Associate, GitHub Actions KodeKloud).
4. **Verified Career Timeline Chronology:**
   - `May 2019 – Apr 2024`: B.Sc. in Computer Science & Engineering (Premier University, Chittagong).
   - `Sep 2024 – Aug 2025`: **Professional Development** (Cloud Architecture, DevOps Engineering & Independent Open-Source Projects). **NEVER present this period as a formal employment position or company.**
   - `Nov 2025 – Oct 2026`: Junior System Engineer (Magnus Corporation Ltd. – Level 1 OMS support, server & network deployments under AMC/SLA, technical documentation).
   - `Nov 2026 – Present`: IT Manager (Arabika Cafe – 12 outlets, 40 M365 user licenses, ongoing HRMS rollout for ~150 employees).
5. **Arabika Cafe Case Study Structure:**
   - Must strictly maintain 4 separate categories:
     1. **Current Responsibilities:** Daily operations across 12 outlets, 40 M365 user licenses, procurement & budget planning, vendor coordination & SLA compliance, security & asset inventory.
     2. **Ongoing Implementations:** Leading HRMS and biometric attendance system rollout for approximately 150 employees.
     3. **Evaluations & Planning:** Business applications requirements analysis, solution evaluations, and quotation comparison frameworks.
     4. **Future Digital Transformation Initiatives:** Technology adoption roadmap, workflow optimization, and business automation.
6. **Prohibited Claims & Visuals:**
   - **NEVER claim "99.9% uptime"** or any unverified uptime statistics.
   - **NEVER claim a "centralized network architecture across all 12 outlets"** without verified architectural documentation.
   - **NEVER invent operational improvements, financial savings, ROI percentages, automated payroll pipelines, zero licensing discrepancies, or unverified business outcomes.**
   - **NEVER present ongoing implementations as completed deployments.**
   - **NEVER include visual elements implying live system monitoring, NOC/SOC status indicators, or simulated infrastructure health status.**

---

## 3. Technology Stack & Architectural Guidelines

- **Framework:** Next.js 15 (App Router, current stable)
- **Language:** TypeScript 5 (strict mode, zero `any` types)
- **Styling:** Tailwind CSS v3.4 (Strict use of design tokens defined in `docs/DESIGN_SPEC.md`)
- **Animation & Motion:** Framer Motion v11
- **Smooth Scroll:** Lenis (`lenis` v1.1.x)
- **Iconography:** Lucide React
- **Hosting:** Vercel Edge Network

### Component Architecture Rules
1. **Server vs. Client Components:** Default to Next.js Server Components. Mark components with `'use client'` ONLY when requiring browser hooks (`useState`, `useEffect`, event listeners).
2. **Semantic HTML:** Every section must utilize semantic tags (`<header>`, `<nav>`, `<main>`, `<section id="...">`, `<article>`, `<aside>`, `<footer>`).
3. **Asset Resilience (Zero-Assumption Policy):**
   - Do NOT assume raster certification badges, project screenshots, or mandatory profile photos exist.
   - Build modular code-rendered components (SVG badge shields, YAML configuration blocks, terminal schematics) that look world-class with zero missing image dependencies.
4. **Clean File Structure:**
   - Components must be organized into `layout/`, `sections/`, `ui/`, and `motion/`.
   - Data must be decoupled into typed data files in `data/` (`siteContent.ts`, `projects.ts`, `timeline.ts`, `certs.ts`).

---

## 4. Visual Quality & Motion Engineering (Simplified & Accessible)

1. **Editorial Design Direction:**
   - Oversized, architectural display typography (`Syne` / `Bebas Neue` / `Cabinet Grotesk`).
   - Clean, legible editorial body copy (`Plus Jakarta Sans`).
   - Technical metadata tags (`JetBrains Mono`).
   - Asymmetric 12-column grid arrangements with intentional, generous whitespace.
2. **Simplified Motion Principles (Performance & Accessibility First):**
   - **KEEP:** Smooth scrolling (Lenis), clean scroll-triggered entrance reveals (`whileInView`), typography masking, subtle parallax on media, project card hover states, and smooth navigation transitions.
   - **REDUCE / REMOVE:**
     - Remove excessive 3D card tilts and 3D perspective grids.
     - Remove continuous full-page decorative SVG pipeline looping animations.
     - Remove complex split-flap/slot-machine typography scrambles; use clean typography reveals.
     - Remove unnecessary pinned horizontal scrolling; use clean, accessible vertical chronological layouts.
3. **Motion Physics & Easing:**
   - Entrance fades & reveals: `duration: 0.5s, ease: [0.22, 1, 0.36, 1]`
   - Interactive buttons & links: `transition: all 0.2s ease`
   - Only animate GPU-composited properties: `transform` (`translate3d`, `scale`) and `opacity`. NEVER animate layout geometry (`width`, `height`, `top`, `left`, `margin`, `padding`).
4. **Reduced Motion Compliance:**
   - Every animation must respect `prefers-reduced-motion: reduce`. Replace animated transforms with instantaneous opacity fades for users who prefer reduced motion.

---

## 5. Accessibility (a11y) & Performance Standards

1. **Color Contrast:**
   - All text on paper-cream (`#F5F3EF`) must maintain at least `7:1` contrast (AAA).
   - All text on obsidian-black (`#0B0D11`) must maintain at least `7:1` contrast (AAA).
   - UI elements and badges must maintain at least `4.5:1` contrast (AA).
2. **Keyboard Navigation:**
   - All interactive elements (`<button>`, `<a>`, `<input>`) must feature visible `:focus-visible` architectural focus rings.
   - Fullscreen navigation modal must support `Escape` key close and maintain focus trapping.
3. **Screen Readers & ARIA:**
   - Icon-only buttons (menu toggle, social links, copy button) must have descriptive `aria-label` attributes.
   - Visual decorative SVG paths and badges must carry `aria-hidden="true"`.
4. **Performance Targets:**
   - Target 95+ score on Google Lighthouse across Performance, Accessibility, Best Practices, and SEO.
   - Cumulative Layout Shift (CLS): `0.00`.
   - First Contentful Paint (FCP): $< 0.8\text{s}$.

---

## 6. Pre-Implementation Review Checklist

Before beginning any code implementation, verify that:
- [x] Live reference website thoroughly analyzed and documented in `docs/REFERENCE-AUDIT.md`.
- [x] Asset inventory and zero-assumption strategy audited in `docs/ASSET-INVENTORY.md`.
- [x] Design specification updated and simplified in `docs/DESIGN_SPEC.md`.
- [x] Text, copy, and data models formulated with strict data accuracy in `docs/SITE_CONTENT.md`.
- [x] Development roadmap and testing gates updated in `docs/IMPLEMENTATION_PLAN.md`.
- [x] All persistent rules and data accuracy constraints codified in `AGENTS.md`.
- [ ] Explicit user review and final approval received before writing code.
