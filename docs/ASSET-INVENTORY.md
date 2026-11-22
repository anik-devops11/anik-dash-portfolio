# Asset Inventory & Strategy: Anik Dash Portfolio

This document provides a comprehensive audit of all assets in the project workspace, their current status, resolution, and usage recommendations.

---

## 1. Zero-Assumption Asset Policy

In accordance with strict portfolio engineering standards:
1. **Never assume professional photography is mandatory:** The design supports Anik's studio photograph (`anik-profile.png`) when present, but includes an architectural monogram and constructivist telemetry glyph fallback so the layout never breaks if a photo is withheld or changed.
2. **Never assume raster certification badge images are available:** Instead of relying on PNG/JPEG badge graphics, the system renders **code-drawn SVG credential plaques** using verified issuer colorways (AWS, Microsoft Azure, Oracle Cloud, Linux Foundation, GitHub) paired with **official third-party verification links** (Credly, Microsoft Learn, Oracle CertView, KodeKloud).
3. **Never assume project UI screenshots are available:** Instead of placeholder images, technical projects are represented by **interactive architectural schematics, YAML specifications, and live simulated terminal/IDE output windows** directly linked to their public GitHub repositories.

---

## 2. Workspace Asset Audit

### A. Current Local Files
| File Path | Description | Dimensions / Quality | Strategy & Integration |
| :--- | :--- | :--- | :--- |
| `assets/profile-photo/anik-profile.png` | Studio portrait of Anik Dash with spectacles in black button-down shirt. | High-resolution (`1875 KB`) | **Optional / Modular.** Primary visual for Identity section with graceful SVG architectural monogram fallback. |
| `assets/generated-visuals/Abstract Cloud Computing Collage.png` | Bauhaus/constructivist geometric collage (cobalt, safety amber, cloud silhouette). | Ultra High-res (`2903 KB`, 16:9) | **Flagship & Architecture Graphic.** High-impact editorial hero for the Arabika Multi-Outlet Case Study. |
| `assets/generated-visuals/Geometric Architect’s Creative Workspace.png` | Photorealistic modern architectural desk setup with Studio Display. | Ultra High-res (`2618 KB`, 16:9) | **Editorial Visual.** Available for background context or engineering discipline showcase. |
| `references/john-bolster/*` | Video recording (`desktop-interactions.mp4`) and 4 screenshots. | Reference Benchmark | Interaction and motion reference only. |

---

## 3. Essential vs. Deferrable Asset Matrix

| Asset Category | Current Availability | Essential for Launch? | Recommended Implementation Strategy |
| :--- | :--- | :--- | :--- |
| **Profile Visual** | `anik-profile.png` exists in `assets/profile-photo/` | **Yes (Modular)** | Support both `anik-profile.png` and an architectural monogram/glyph so the site functions with or without photo assets. |
| **Project Visuals** | `assets/project-screenshots/` is empty | **No (Code-Rendered)** | **Essential:** Use styled code-rendered architecture schematics, YAML configuration blocks, and direct GitHub links. **Defer:** Raster UI screenshots. |
| **Architecture Flowcharts** | `assets/project-diagrams/` is empty | **No (Code-Rendered)** | Render responsive SVG flowcharts and terminal status blocks directly in components. |
| **Certification Badges** | No PNG badge files | **No (Code-Rendered)** | Render high-contrast SVG badge shields with direct Credly, Microsoft Learn, Oracle, and KodeKloud links. |
| **Downloadable Resume** | No PDF file in repository | **Optional** | Link directly to verified LinkedIn and email, or provide a clean printable route (`/resume`). |

---

## 4. Discrepancy & Verification Notes
1. **Professional Title:** `docs/PROFILE.md` states *"IT Manager | Cloud & DevOps Enthusiast"*, while the user prompt establishes the authoritative executive positioning: **"IT Manager | Cloud & DevOps | Business Technology"**. This title is adopted across all planning files.
2. **Total Certifications:** Exactly **7** credentials verified in `docs/PROFILE.md` (AWS Solutions Architect, AWS AI Practitioner, Azure Administrator Associate, Linux LFS101, OCI AI Associate, OCI Foundations Associate, GitHub Actions).
3. **Current Role:** Arabika Cafe (November 2026 – Present) represents Anik's active, current position across 12 outlets, 150 employees, and 40 Microsoft 365 seats.
