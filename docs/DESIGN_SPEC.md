# Technical & Visual Design Specification: Anik Dash Portfolio (Audited & Final)

**Positioning:** IT Manager | Cloud & DevOps | Business Technology  
**Verified Location:** Natunbazar, Dhaka, Bangladesh (Derived strictly from `docs/PROFILE.md`)  
**Design Reference:** [johnbolster.design](https://www.johnbolster.design/) (Kinetic & Editorial Benchmark — *Bespoke Adaptation, Zero Duplication*)  
**Primary Tech Stack:** Next.js 15 (App Router, current stable), TypeScript 5, Tailwind CSS v3.4, Framer Motion v11, Lenis Scroll, Lucide React

---

## 1. Visual Identity & Brand Philosophy

Anik Dash’s portfolio embodies **Systems Engineering Rigor merged with Constructivist Editorial Layout**. It presents an architectural, high-density journal for an IT management and cloud infrastructure leader.

### Core Visual Pillars
1. **Editorial Architecture:** Clean asymmetric 12-column grids, oversized condensed display typography, and intentional, generous whitespace.
2. **Thematic Contrast Shifts:** Seamless background shifts between **Warm Paper Cream** (`#F5F3EF`) for editorial reading sections and **Matte Obsidian Black** (`#0B0D11`) for deep technical metrics and capabilities.
3. **Dual-Discipline Positioning:** Balanced presentation of executive IT leadership (12-outlet daily operations, 40 Microsoft 365 user licenses, ongoing HRMS implementation for ~150 employees, procurement, and vendor SLAs) alongside hands-on Cloud/DevOps engineering (AWS Solutions Architect, Azure Administrator Associate, Docker, Kubernetes, CI/CD, and Linux).
4. **Pipeline-Inspired Visual Elements:** Subtle, linear structural accents and circuit-like dividers that guide the eye without ornamental clutter or simulated monitoring dashboards.
5. **Simplified, High-Performance Motion:** Performant, accessible micro-interactions prioritizing legibility, speed, and responsiveness.

---

## 2. Design Tokens & Styling System

### A. Color Palette

| Token Name | Hex Code | HSL / RGB | Usage & Semantic Context | Contrast Ratio |
| :--- | :--- | :--- | :--- | :--- |
| `paper-cream` | `#F5F3EF` | `hsl(40, 20%, 95%)` | Primary light canvas background. Non-glare editorial paper. | Base Canvas |
| `paper-card` | `#ECE9E2` | `hsl(40, 18%, 91%)` | Secondary light surface for cards, code panels, and subtle elevation. | Subtle boundary |
| `obsidian-black` | `#0B0D11` | `hsl(220, 21%, 5%)` | Inverted dark canvas background (Metrics, Capabilities, Fullscreen Menu). | Base Dark Canvas |
| `obsidian-card` | `#151921` | `hsl(220, 22%, 11%)` | Secondary dark surface for cards and terminal blocks. | High contrast |
| `carbon-text` | `#121316` | `hsl(220, 11%, 8%)` | Primary typography color on light backgrounds. Ultra-deep graphite. | 16.2:1 (AAA) |
| `cloud-blue` | `#1D4ED8` | `hsl(224, 76%, 48%)` | Enterprise cloud accent (AWS/Azure, active indicators, primary CTAs). | 7.1:1 on cream |
| `electric-blue` | `#3B82F6` | `hsl(217, 91%, 60%)` | Dark mode accent for glowing badges, active links, and hover states. | 8.5:1 on obsidian |
| `safety-amber` | `#EA580C` | `hsl(20, 91%, 48%)` | Secondary accent for case study highlights and active deployment tags. | 5.2:1 on cream |
| `border-subtle` | `rgba(18, 19, 22, 0.08)` | `hsl(220, 11%, 8%, 0.08)` | Hairline dividers and architectural grid lines on light backgrounds. | Structure |

*(Note: All visual elements implying live system monitoring, NOC/SOC status indicators, or simulated telemetry health status have been removed).*

---

### B. Typography Hierarchy

```
┌────────────────────────────────────────────────────────┐
│  DISPLAY HEADINGS: Syne / Cabinet Grotesk / Bebas Neue │
│  Massive, condensed, architectural, tight tracking     │
├────────────────────────────────────────────────────────┤
│  BODY & LABELS: Plus Jakarta Sans / Inter              │
│  Crystal-clear legibility, generous line height        │
├────────────────────────────────────────────────────────┤
│  TECHNICAL METADATA & CODE: JetBrains Mono             │
│  Calibrated metrics, timestamps, tags, terminal specs  │
└────────────────────────────────────────────────────────┘
```

| Hierarchy Level | Font Family | Size (Desktop / Mobile) | Weight | Line Height | Tracking |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (Display 01)** | Syne / Bebas Neue | `clamp(3.5rem, 9.5vw, 9.5rem)` | 800 / Black | `0.9` | `-0.03em` |
| **Section Headings (Display 02)** | Syne / Cabinet Grotesk | `clamp(2.25rem, 5vw, 5rem)` | 700 / Bold | `0.95` | `-0.02em` |
| **Project Titles (Heading 03)** | Syne / Plus Jakarta Sans | `clamp(1.5rem, 2.5vw, 2.5rem)` | 700 / Bold | `1.1` | `-0.01em` |
| **Lead Paragraphs** | Plus Jakarta Sans | `1.125rem / 1.0rem` | 500 / Medium | `1.6` | `0em` |
| **Editorial Body Text** | Plus Jakarta Sans | `1.0rem / 0.9375rem` | 400 / Normal | `1.65` | `0.01em` |
| **Metadata & System Labels** | JetBrains Mono | `0.8125rem / 0.75rem` | 500 / Medium | `1.4` | `0.08em (Caps)` |

---

### C. Motion Guidelines (Simplified, Accessible & Performant)

The animation system is strictly optimized for **performance, legibility, and zero visual gimmicks**:

#### Preserved Kinetic Elements:
1. **Lenis Smooth Inertia Scroll:** Virtual wheel smoothing for a fluid, continuous feel on desktop and mobile.
2. **Scroll-Triggered Reveals:** Clean entrance fades (`opacity: 0, y: 16` $\rightarrow$ `opacity: 1, y: 0`) using Framer Motion `whileInView` with `viewport: { once: true, margin: "-10%" }`.
3. **Typography Masking:** Display headlines reveal via clean CSS `overflow-hidden` container masks.
4. **Subtle Parallax on Media:** Gentle differential scroll rate (0.8x) on case study visuals and profile framing.
5. **Interactive Project Cards:** Tactile border highlights, subtle scale (`scale(1.02)`), and link arrow translations (`translateX(4px)`).
6. **Navigation Transitions:** Smooth modal backdrop blur and staggered link fades.
7. **Scroll Progress Indicator:** Clean right-edge progress rail with section pips and active highlight.

#### Strictly Prohibited & Removed Elements:
- ❌ **No simulated live infrastructure health status or blinking monitoring dots.**
- ❌ **No unconfirmed geographical coordinates or GPS readouts.**
- ❌ **No continuous decorative full-page SVG line loops.**
- ❌ **No 3D card tilt or 3D perspective grids.**
- ❌ **No complex split-flap / letter scramble typography.**
- ❌ **No pinned horizontal scrolling.**

#### Reduced Motion Compliance:
Under `@media (prefers-reduced-motion: reduce)`, all transitions default to instantaneous opacity changes (`duration: 0.1s`).

---

## 3. Information Architecture & Section Hierarchy (9 Chapters)

```
[01 FIXED HEADER & SCROLL PROGRESS RAIL] (Persistent Global Controls)
           │
           ▼
[02 HERO SECTION]
• Architectural Headline: ANIK DASH
• Verified Positioning: IT Manager | Cloud & DevOps | Business Technology
• Verified Location: Natunbazar, Dhaka, Bangladesh
• Primary CTAs: [Inspect Work ⟶] & [Get in Touch]
           │
           ▼
[03 EXECUTIVE PROFILE: DUAL DISCIPLINE]
• Modular Visual Frame (Studio Portrait or Architectural Monogram)
• Enterprise IT Operations Leadership + Cloud Infrastructure Rigor
• 12 Outlets, 40 M365 Licenses, Procurement, Cloud Engineering
           │
           ▼
[04 OPERATIONAL METRICS: SCALE & SCOPE]
• Canvas Shift to Obsidian Black (#0B0D11)
• 12 OUTLETS — IT OPERATIONS
• ~150 EMPLOYEES — HRMS IMPLEMENTATION SCOPE
• 40 MICROSOFT 365 USER LICENSES
• 07 PROFESSIONAL CERTIFICATIONS
           │
           ▼
[05 ARABIKA CAFE: IT MANAGEMENT & BUSINESS TECH CASE STUDY]
• Editorial Case Study Card
• 1. Current Responsibilities (12 Outlets, 40 M365 Licenses, Procurement, Vendors, Security)
• 2. Ongoing Implementations (HRMS & Biometric System for ~150 Employees)
• 3. Evaluations & Planning (Business Applications, Quotation Comparison Standards)
• 4. Future Digital Transformation Initiatives (Workflow Optimization, Process Automation)
           │
           ▼
[06 CAREER EVOLUTION TIMELINE: 2019 – 2026]
• Accessible Vertical Chronological Rail (No horizontal pinning)
• May 2019 – Apr 2024: Premier University (B.Sc. in CSE)
• Sep 2024 – Aug 2025: Professional Development (Cloud & DevOps Certs & Projects)
• Nov 2025 – Oct 2026: Magnus Corporation Ltd. (Junior System Engineer)
• Nov 2026 – Present: Arabika Cafe (IT Manager)
           │
           ▼
[07 TECHNICAL CAPABILITIES MATRIX]
• Clean 2D Grid Panels (No 3D perspective grids)
• 4 Domains: IT Management, Cloud Computing, DevOps Automation, Operating Systems
           │
           ▼
[08 FEATURED PRODUCTION PROJECTS]
• Asymmetric Editorial Cards for 5 Verified Public GitHub Repositories
• Problem Context, Engineered Solution, Architecture Specs, and Direct GitHub Links
• 01: Docker Based Developer Environment
• 02: Redis-based OTP Verification System
• 03: Secure Static Site Deployment on AWS
• 04: Serverless Image Resizing & Watermarking on AWS
• 05: AWS Serverless Resume Builder
           │
           ▼
[09 ACCREDITED CERTIFICATIONS WALL]
• 7 High-Contrast SVG Plaques with Direct Credly / Vendor Verification Links
• AWS SAA, AWS AIP, Azure AZ-104, Linux LFS101, OCI AI, OCI Foundations, GitHub Actions
           │
           ▼
[10 CONTACT & FOOTER]
• Clean Headline: LET'S BUILD RESILIENT SYSTEMS (Opacity reveal)
• Verified Email with One-Click Copy Pill (anikdasprivate@gmail.com)
• Verified Phone (+8801849-587793) & Location (Natunbazar, Dhaka, Bangladesh)
• Verified Social Channels: LinkedIn & GitHub
• Accessible CLI Terminal Prompt (help, certs, projects, contact, clear)
```

---

## 4. Component Specifications

### Component 01: Header & Scroll Progress Rail
- **Header:** Fixed at top, subtle backdrop blur (`bg-paper-cream/80 backdrop-blur-md`). Left: `ANIK DASH` in bold display font with professional role subtitle. Right: `MENU` button with two thin horizontal bars opening the fullscreen overlay.
- **Scroll Progress Rail:** Fixed on the right browser edge on desktop. Displays subtle calibrated ticks (`01` to `09`) with active section label and dot indicator. Clicking jumps smoothly to the target section.

### Component 02: Hero Section (01 HERO)
- **Title:** `ANIK DASH` in massive architectural condensed font (`clamp(3.5rem, 9.5vw, 9.5rem)`).
- **Positioning Badges:** `IT MANAGER · CLOUD & DEVOPS · BUSINESS TECHNOLOGY`.
- **Value Statement:** Clear, unembellished summary derived strictly from `docs/PROFILE.md`.
- **Location:** `Natunbazar, Dhaka, Bangladesh`.
- **CTAs:** `INSPECT WORK ⟶` and `GET IN TOUCH`.

### Component 03: Executive Profile (02 IDENTITY)
- **Visual Column:** Modular container supporting `assets/profile-photo/anik-profile.png` with clean architectural border, or an SVG monogram/glyph fallback.
- **Content Column:** Delineates IT Management & Business Operations alongside Cloud & DevOps Engineering.

### Component 04: Operational Metrics (03 METRICS)
- **Canvas:** Smooth transition to Obsidian Black (`#0B0D11`).
- **4 Verified Stat Blocks:**
  1. `12` | `OUTLETS — IT OPERATIONS` (Daily IT infrastructure, network, and hardware operations managed across 12 outlets).
  2. `~150` | `EMPLOYEES — HRMS IMPLEMENTATION SCOPE` (Employee scope for the ongoing HRMS and biometric attendance system implementation).
  3. `40` | `MICROSOFT 365 USER LICENSES` (Microsoft 365 business user licenses, subscriptions, email, and access permissions administered).
  4. `07` | `PROFESSIONAL CERTIFICATIONS` (Formal industry credentials earned across AWS, Azure, OCI, Linux Foundation, and GitHub).

### Component 05: Arabika Cafe Case Study (04 CASE STUDY)
- Structured editorial layout clearly separating the 4 categories:
  - **1. Current Responsibilities:** Daily IT operations across 12 outlets; Microsoft 365 administration (40 licenses); IT procurement and budget planning; vendor coordination and SLA compliance; IT security, access control, and technical documentation.
  - **2. Ongoing Implementations:** Leading HRMS and biometric attendance system rollout for approximately 150 employees (requirements gathering, system configuration, employee data preparation, testing, and progress tracking).
  - **3. Evaluations & Planning:** Business applications requirements analysis, solution evaluations, and quotation comparison frameworks.
  - **4. Future Digital Transformation Initiatives:** Process improvement, workflow optimization, and business automation adoption roadmap.

### Component 06: Career Evolution Timeline (05 TIMELINE)
- **Layout:** Vertical chronological timeline rail with node pips and milestone cards.
- **Milestones:**
  - `May 2019 – Apr 2024`: B.Sc. in CSE (Premier University, Chittagong).
  - `Sep 2024 – Aug 2025`: Professional Development (Cloud & DevOps Certifications & Open-Source Projects).
  - `Nov 2025 – Oct 2026`: Junior System Engineer (Magnus Corporation Ltd.).
  - `Nov 2026 – Present`: IT Manager (Arabika Cafe).

### Component 07: Technical Capabilities Matrix (06 CAPABILITIES)
- 4 clear 2D grid cards for: IT Management & Business Technology, Cloud Computing & Serverless, DevOps & Infrastructure Automation, Operating Systems & Programming.

### Component 08: Featured Production Projects (07 PROJECTS)
- Asymmetric editorial cards for Anik's 5 verified repositories. Includes problem context, engineered solution, architectural highlights, tech pills, simulated YAML/terminal spec box, and direct GitHub links.

### Component 09: Accredited Certifications Wall (08 CREDENTIALS)
- High-contrast SVG credential plaques for all 7 verified certifications with direct links to Credly, Microsoft Learn, Oracle CertView, and KodeKloud.

### Component 10: Contact Terminal & Footer (09 CONTACT)
- Headline: `LET'S BUILD RESILIENT SYSTEMS`.
- Email: `anikdasprivate@gmail.com` + One-Click `COPY EMAIL` pill button.
- Phone: `+8801849-587793` + direct `tel:` link.
- Location: `Natunbazar, Dhaka, Bangladesh`.
- Socials: LinkedIn & GitHub.
- Accessible CLI prompt (`help`, `certs`, `projects`, `contact`, `clear`).

---

## 5. Responsive Breakpoints

- **Desktop ($\ge 1280\text{px}$):** Asymmetric 12-column grid, right progress rail, side-by-side card layouts.
- **Tablet ($768\text{px} - 1279\text{px}$):** 2-column stacked layouts, condensed right progress rail.
- **Mobile ($< 768\text{px}$):** Single-column vertical flow, full-width touch cards, 44px minimum tap targets, right rail collapses into top progress bar.

---

## 6. Performance & Quality Targets

- **Lighthouse Targets:** 95+ Performance, 100 Accessibility, 100 Best Practices, 100 SEO.
- **Cumulative Layout Shift (CLS):** `0.00`.
- **First Contentful Paint (FCP):** $< 0.8\text{s}$.
- **Accessibility:** Complete WCAG 2.1 AA compliance with visible keyboard focus rings.
