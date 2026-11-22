# Engineering Implementation Plan: Anik Dash Portfolio (Audited & Final)

**Target Platform:** Production Personal Portfolio for Anik Dash (IT Manager | Cloud & DevOps | Business Technology)  
**Architecture:** Next.js 15 (App Router, current stable), TypeScript 5, Tailwind CSS v3.4, Framer Motion v11, Lenis v1.1.x, Lucide React  
**Hosting Target:** Vercel Edge Network  
**Status:** Pre-Implementation Planning (Awaiting Final User Approval)

---

## 1. Technical Stack & Verified Dependencies

| Layer | Selected Package | Verified Compatible Version | Architecture Justification |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js | `v15.x` (App Router) | Static site generation, server components, edge optimization, zero layout shift. |
| **Language** | TypeScript | `v5.x` | Strict typing for projects, certifications, timeline milestones, and data models. |
| **Styling** | Tailwind CSS | `v3.4.x` | Custom design tokens, fluid typography clamps, high-contrast accessible color system. |
| **Animation Engine**| Framer Motion | `v11.x` | Declarative `whileInView` reveals, opacity masks, spring physics for interactive controls. |
| **Scroll Engine**| Lenis | `lenis v1.1.x` | Lightweight inertia scrolling for desktop wheel and mobile touch, respecting `prefers-reduced-motion`. |
| **Iconography** | Lucide React | `v0.460.x` | Clean, lightweight SVG stroke icons matching the technical engineering aesthetic. |

---

## 2. Multi-Stage Development Roadmap (Audited & Verified)

```
Stage 1: Setup & Environment Scaffolding
   │
Stage 2: Design Tokens, Fonts & Layout Shell
   │
Stage 3: Smooth Scroll (Lenis) & Scroll Progress Indicator
   │
Stage 4: Header, Fullscreen Nav & Right-Side Progress Rail
   │
Stage 5: Hero Section (Architectural Title & Verified Bio)
   │
Stage 6: Executive Profile (Dual-Focus Narrative & Modular Frame)
   │
Stage 7: Operational Metrics (Obsidian Black Shift & 4 Verified Stats)
   │
Stage 8: Arabika Cafe Case Study (4 Clearly Separated Categories)
   │
Stage 9: Career Evolution Timeline (Vertical Rail: Education, Dev, Experience)
   │
Stage 10: Technical Capabilities Matrix (Clean 2D Grid Panels)
   │
Stage 11: Featured Technical Projects (5 Verified Repositories + Schematics)
   │
Stage 12: Professional Certifications Wall (7 Verified SVG Plaques)
   │
Stage 13: Terminal Footer & Contact (Clean Typography & One-Click Copy)
   │
Stage 14: Mobile Layout Adaptations & Touch Optimization
   │
Stage 15: Accessibility, Performance & Lighthouse Audit (WCAG AA)
   │
Stage 16: Production Build & Vercel Deployment Verification
```

---

### Detailed Stage Specifications

#### Stage 1: Setup & Tooling Configuration
- Verify Next.js 15 project setup in `website/` with TypeScript, Tailwind CSS, ESLint, and PostCSS.
- Verified dependencies: `framer-motion`, `lenis`, `lucide-react`, `clsx`, `tailwind-merge`.
- Strict typing in `tsconfig.json` with `@/*` aliases.

#### Stage 2: Design Tokens, Typography & Layout Shell
- Tailwind tokens:
  - `paper-cream: #F5F3EF`, `obsidian-black: #0B0D11`, `cloud-blue: #1D4ED8`, `safety-amber: #EA580C`.
- Typography via `next/font`:
  - Display: `Syne` / `Bebas Neue`
  - Body: `Plus Jakarta Sans`
  - Monospace: `JetBrains Mono`
- Base CSS resets, focus-visible rings, and theme classes in `globals.css`.

#### Stage 3: Smooth Scroll (Lenis) & Scroll Progress Indicator
- Implement `LenisProvider` with `prefers-reduced-motion` override.
- Build clean, lightweight scroll progress indicator tracking viewport scroll percentage without decorative SVG line clutter.

#### Stage 4: Header, Fullscreen Nav & Right-Side Progress Rail
- Build `Header`:
  - Fixed top bar with logotype and animated menu icon.
  - Zero live infrastructure monitoring or fake NOC/SOC status indicators.
- Build `ScrollProgressRail`:
  - Right-margin rail with calibrated ticks (`01` to `09`) and active section indicator.
- Build `FullscreenNavModal`:
  - Fullscreen overlay with staggered link reveals for rapid section jumping.

#### Stage 5: Hero Section (01 HERO)
- Architectural layout with oversized `ANIK DASH` display typography.
- Positioning: `IT MANAGER · CLOUD & DEVOPS · BUSINESS TECHNOLOGY`.
- Verified location: `Natunbazar, Dhaka, Bangladesh`.
- Dual CTAs: `INSPECT WORK ⟶` and `GET IN TOUCH`.

#### Stage 6: Executive Profile & Dual Discipline (02 IDENTITY)
- Asymmetric 2-column layout.
- Modular frame: supports studio portrait (`anik-profile.png`) with clean architectural border, or an SVG monogram fallback.
- Editorial narrative balancing IT Management leadership with Cloud/DevOps engineering.

#### Stage 7: Operational Metrics (03 METRICS)
- Canvas transitions smoothly to Obsidian Black (`#0B0D11`).
- 4 strictly verified metric blocks:
  1. `12` | `OUTLETS — IT OPERATIONS` (Daily IT infrastructure, network, and hardware operations managed across 12 outlets).
  2. `~150` | `EMPLOYEES — HRMS IMPLEMENTATION SCOPE` (Employee scope for the ongoing HRMS and biometric attendance system implementation).
  3. `40` | `MICROSOFT 365 USER LICENSES` (Microsoft 365 business user licenses, subscriptions, email, and access permissions administered).
  4. `07` | `PROFESSIONAL CERTIFICATIONS` (Formal industry credentials earned across AWS, Azure, OCI, Linux Foundation, and GitHub).
- **Zero unverified uptime claims or speculative percentages.**

#### Stage 8: Arabika Cafe Case Study (04 CASE STUDY)
- Structured editorial case study clearly separating:
  - **1. Current Responsibilities:** Daily IT operations across 12 outlets; Microsoft 365 administration (40 licenses); IT procurement and budget planning; vendor coordination and SLA compliance; IT security, access control, and technical documentation.
  - **2. Ongoing Implementations:** Leading HRMS and biometric attendance system rollout for approximately 150 employees (requirements gathering, system configuration, employee data preparation, testing, and progress tracking).
  - **3. Evaluations & Planning:** Business applications requirements analysis, solution evaluations, and quotation comparison frameworks.
  - **4. Future Digital Transformation Initiatives:** Process improvement, workflow optimization, and business automation adoption roadmap.
- **Zero claims of centralized network topology, automated payroll pipelines, or unverified business outcomes.**

#### Stage 9: Career Evolution Timeline (05 TIMELINE)
- Clean, accessible **vertical chronological rail** (no pinned horizontal scrolling).
- 4 clearly defined milestones:
  - `May 2019 – Apr 2024`: B.Sc. in Computer Science & Engineering (Premier University, Chittagong).
  - `Sep 2024 – Aug 2025`: Professional Development (Cloud & DevOps Certifications & Independent Open-Source Projects).
  - `Nov 2025 – Oct 2026`: Junior System Engineer (Magnus Corporation Ltd. – Level 1 OMS support, server & network deployments under AMC/SLA, technical documentation).
  - `Nov 2026 – Present`: IT Manager (Arabika Cafe – 12 outlets, 40 M365 licenses, ongoing HRMS rollout for ~150 employees).

#### Stage 10: Technical Capabilities Matrix (06 CAPABILITIES)
- Clean 2D grid panels (no excessive 3D perspective grids).
- 4 domains: IT Management & Business Technology, Cloud Computing & Serverless, DevOps & Infrastructure Automation, Operating Systems & Programming.

#### Stage 11: Featured Technical Projects (07 PROJECTS)
- Alternating editorial cards for Anik's 5 verified public GitHub repositories:
  1. Docker Based Developer Environment
  2. Redis-based OTP Verification System
  3. Secure Static Site Deployment on AWS
  4. Serverless Image Resizing & Watermarking on AWS
  5. AWS Serverless Resume Builder
- Includes problem context, engineered solution, architectural highlights, tech pills, and direct repository links.

#### Stage 12: Professional Certifications Wall (08 CREDENTIALS)
- High-contrast SVG credential plaques for all 7 verified certifications with direct links to Credly, Microsoft Learn, Oracle CertView, and KodeKloud.

#### Stage 13: Contact Terminal & Footer (09 CONTACT)
- Headline: `LET'S BUILD RESILIENT SYSTEMS` (clean opacity reveal, no split-flap scrambling).
- One-click copy email button with instant `COPIED!` feedback.
- Phone link (`+8801849-587793`), verified location (`Natunbazar, Dhaka, Bangladesh`), and social profiles (LinkedIn, GitHub).
- Accessible simulated CLI terminal prompt (`anik@workstation:~$ `).

#### Stage 14: Responsive Optimization & Mobile Drawer Adaptation
- Reflow asymmetric grids into clean single-column layouts for mobile viewports.
- 44px minimum tap targets.

#### Stage 15: Accessibility & Performance Audit
- WCAG 2.1 AA validation across all color tokens and typography.
- `@media (prefers-reduced-motion)` verification.
- Target 95+ score on Google Lighthouse.

#### Stage 16: Production Build & Vercel Verification
- Final production build check with zero TypeScript or linting errors.

---

## 3. Quality & Verification Gates

- [ ] **Gate 1 (Data Accuracy):** Zero unverified uptime claims, zero invented ROI figures, exact 40 M365 licenses, exact 12 outlets, exact ~150 HRMS employee scope, exact 7 certifications.
- [ ] **Gate 2 (Case Study Separation):** Clear distinction between current responsibilities, ongoing HRMS rollout, evaluations & planning, and future digital transformation.
- [ ] **Gate 3 (Career Timeline Accuracy):** 2024–2025 presented strictly as Professional Development (not a formal employment position), verified education and employment tenures intact.
- [ ] **Gate 4 (Motion & Monitoring Simplification):** Zero decorative continuous SVG lines, zero 3D tilt, zero split-flap scrambles, zero simulated monitoring/NOC indicators, zero GPS coordinates.
- [ ] **Gate 5 (Asset Resilience):** Zero dependency on missing raster badges or UI screenshots.
- [ ] **Gate 6 (Accessibility & Build):** Clean Next.js 15 production build with zero warnings and full keyboard navigation.
