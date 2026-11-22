"use client";

import React from "react";
import Image from "next/image";
import { ARABIKA_CASE_STUDY } from "@/data/siteContent";
import { Network, Layers, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function FlagshipSection() {
  const iconMap = [Network, Layers, Sparkles];
  const badges = [
    "12 OUTLETS · 40 M365 SEATS",
    "ERP & HRMS (~150 STAFF)",
    "PROCESS OPTIMIZATION & AUTOMATION",
  ];

  // Restrained category status presentation
  const statusDetails = [
    { label: "STATUS: ACTIVE OPERATIONS", icon: CheckCircle2, color: "text-telemetry-green" },
    { label: "STATUS: IMPLEMENTED & EVALUATED", icon: CheckCircle2, color: "text-telemetry-green" },
    { label: "STATUS: PLANNED ROADMAP", icon: ArrowUpRight, color: "text-cloud-blue" },
  ];

  const sections = ARABIKA_CASE_STUDY.sections;

  return (
    <section
      id="case-study"
      className="scroll-mt-24 sm:scroll-mt-28 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto border-t border-paper-border"
    >
      {/* Section Sub-Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs font-semibold text-safety-amber tracking-wider uppercase">
          {ARABIKA_CASE_STUDY.tag}
        </span>
        <span className="h-[1px] w-12 bg-safety-amber/40" />
        <span className="font-mono text-xs text-carbon-muted tracking-wider uppercase">
          BUSINESS TECHNOLOGY & IT MANAGEMENT
        </span>
      </div>

      {/* Flagship Hero Card */}
      <div className="rounded-2xl bg-paper-card border border-paper-border overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-16">
          {/* Left Column: Case Study Header & Narrative */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-safety-amber/15 text-safety-amber border border-safety-amber/30 font-mono text-xs font-bold uppercase">
                {ARABIKA_CASE_STUDY.organization}
              </span>
              <span className="font-mono text-xs text-carbon-muted font-medium">
                {ARABIKA_CASE_STUDY.scope}
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-carbon-text uppercase tracking-tight leading-[1.05]">
              {ARABIKA_CASE_STUDY.title}
            </h2>

            <p className="text-base sm:text-lg font-body text-carbon-text/90 leading-relaxed">
              {ARABIKA_CASE_STUDY.summary}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 font-mono text-xs text-carbon-muted">
              <span className="px-3 py-1 rounded bg-carbon-text/5 border border-paper-border font-semibold text-carbon-text">
                ROLE: {ARABIKA_CASE_STUDY.role.toUpperCase()}
              </span>
              <span className="text-carbon-muted/40">·</span>
              <span>{ARABIKA_CASE_STUDY.duration.toUpperCase()}</span>
            </div>
          </div>

          {/* Right Column: Arabika Coffee Workspace Dashboard Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-paper-border aspect-[16/10] sm:aspect-[4/3] shadow-md bg-white">
              <Image
                src="/assets/generated-visuals/Arabika Coffee Workspace Dashboard.png"
                alt="Arabika Coffee Workspace Dashboard"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex items-end p-5">
                <div>
                  <p className="font-mono text-[11px] text-white font-bold tracking-widest uppercase">
                    ARABIKA COFFEE WORKSPACE DASHBOARD
                  </p>
                  <p className="font-mono text-[10px] text-white/70">
                    ARABIKA CAFE · 12 OUTLETS ECOSYSTEM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categorized Scope Grid - Asymmetric Editorial Layout */}
        <div className="border-t border-paper-border bg-white/60 p-8 sm:p-12 lg:p-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-safety-amber font-bold">
                SYSTEMS EXECUTION FRAMEWORK
              </p>
              <h3 className="font-display font-bold text-2xl text-carbon-text uppercase mt-1">
                OPERATIONAL SCOPE & DELIVERABLES
              </h3>
            </div>
            <span className="font-mono text-xs text-carbon-muted">
              3 STRATEGIC INITIATIVES
            </span>
          </div>

          {/* Asymmetric Editorial Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
            {/* Column 1 (Desktop: left column, width span 5) - Card 1: Responsibilities */}
            {sections[0] && (
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-paper-cream border border-paper-border hover:border-carbon-text/20 hover:shadow-sm transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-safety-amber/10 text-safety-amber">
                      {React.createElement(iconMap[0], { className: "w-6 h-6" })}
                    </div>
                    <span className="font-mono text-[11px] font-bold text-carbon-muted/70 tracking-widest uppercase">
                      DOMAIN // 01
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg sm:text-xl text-carbon-text uppercase mb-2 leading-snug">
                    {sections[0].category}
                  </h4>

                  <div className="mb-6">
                    <span className="inline-block px-2.5 py-1 rounded bg-carbon-text/5 text-carbon-text font-mono text-[10px] font-bold tracking-wider uppercase border border-paper-border">
                      {badges[0]}
                    </span>
                  </div>

                  <ul className="space-y-3 font-body">
                    {sections[0].items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs sm:text-sm text-carbon-text/90 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="text-safety-amber flex-shrink-0 mt-1 font-bold">•</span>
                        <span className="text-carbon-muted text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-paper-border flex items-center justify-between font-mono text-[10px]">
                  <span className="uppercase tracking-widest font-semibold text-carbon-muted">
                    {statusDetails[0].label}
                  </span>
                  {React.createElement(statusDetails[0].icon, {
                    className: `w-3.5 h-3.5 ${statusDetails[0].color}`,
                  })}
                </div>
              </div>
            )}

            {/* Column 2 (Desktop: right column, width span 7, row-span-2) - Card 2: Implemented Systems & Evaluations */}
            {sections[1] && (
              <div className="lg:col-span-7 lg:row-span-2 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border-2 border-safety-amber/40 shadow-md relative transition-all duration-300">
                <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-safety-amber text-white font-mono text-[10px] font-bold tracking-widest uppercase shadow-sm">
                  FLAGSHIP DEPLOYMENT
                </div>

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-safety-amber text-white shadow-sm">
                      {React.createElement(iconMap[1], { className: "w-6 h-6" })}
                    </div>
                    <span className="font-mono text-[11px] font-bold text-carbon-muted/70 tracking-widest uppercase">
                      DOMAIN // 02
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-xl sm:text-2xl text-carbon-text uppercase mb-2 leading-snug">
                    {sections[1].category}
                  </h4>

                  <div className="mb-6">
                    <span className="inline-block px-2.5 py-1 rounded bg-carbon-text/5 text-carbon-text font-mono text-[10px] font-bold tracking-wider uppercase border border-paper-border">
                      {badges[1]}
                    </span>
                  </div>

                  <ul className="space-y-4 font-body">
                    {sections[1].items.map((item, itemIdx) => {
                      const hasColon = item.includes(":");
                      let prefix = "";
                      let text = item;

                      if (hasColon) {
                        const parts = item.split(":");
                        prefix = parts[0];
                        text = parts.slice(1).join(":");
                      }

                      return (
                        <li
                          key={itemIdx}
                          className="text-xs sm:text-sm text-carbon-text/90 leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="text-safety-amber flex-shrink-0 mt-1 font-bold">•</span>
                          <div>
                            {prefix ? (
                              <>
                                <strong className="font-semibold text-carbon-text block font-mono text-xs uppercase tracking-wide mb-0.5">
                                  {prefix}
                                </strong>
                                <span className="text-carbon-muted text-xs leading-relaxed">
                                  {text.trim()}
                                </span>
                              </>
                            ) : (
                              <span className="text-carbon-muted text-xs leading-relaxed">
                                {item}
                              </span>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-paper-border flex items-center justify-between font-mono text-[10px]">
                  <span className="uppercase tracking-widest font-semibold text-carbon-muted">
                    {statusDetails[1].label}
                  </span>
                  {React.createElement(statusDetails[1].icon, {
                    className: `w-3.5 h-3.5 ${statusDetails[1].color}`,
                  })}
                </div>
              </div>
            )}

            {/* Column 1 continued (Desktop: left column below Card 1, width span 5) - Card 3: Future Initiatives */}
            {sections[2] && (
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-paper-cream border border-paper-border hover:border-carbon-text/20 hover:shadow-sm transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-safety-amber/10 text-safety-amber">
                      {React.createElement(iconMap[2], { className: "w-6 h-6" })}
                    </div>
                    <span className="font-mono text-[11px] font-bold text-carbon-muted/70 tracking-widest uppercase">
                      DOMAIN // 03
                    </span>
                  </div>

                  <h4 className="font-display font-bold text-lg sm:text-xl text-carbon-text uppercase mb-2 leading-snug">
                    {sections[2].category}
                  </h4>

                  <div className="mb-6">
                    <span className="inline-block px-2.5 py-1 rounded bg-carbon-text/5 text-carbon-text font-mono text-[10px] font-bold tracking-wider uppercase border border-paper-border">
                      {badges[2]}
                    </span>
                  </div>

                  <ul className="space-y-3 font-body">
                    {sections[2].items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="text-xs sm:text-sm text-carbon-text/90 leading-relaxed flex items-start gap-2.5"
                      >
                        <span className="text-safety-amber flex-shrink-0 mt-1 font-bold">•</span>
                        <span className="text-carbon-muted text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-paper-border flex items-center justify-between font-mono text-[10px]">
                  <span className="uppercase tracking-widest font-semibold text-carbon-muted">
                    {statusDetails[2].label}
                  </span>
                  {React.createElement(statusDetails[2].icon, {
                    className: `w-3.5 h-3.5 ${statusDetails[2].color}`,
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
