"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/siteContent";
import { ArrowDown, ArrowUpRight, Terminal, Shield, Network, Activity } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 sm:pb-16 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Metadata Row with Approved Monogram Logo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-paper-border">
        <div className="flex items-center gap-3">
          {/* Balanced Monogram Emblem in Metadata Area */}
          <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0">
            <Image
              src="/assets/generated-visuals/ANIK DASH Tech Monogram Emblem.png"
              alt="ANIK DASH Tech Monogram Emblem"
              fill
              sizes="28px"
              className="object-contain"
              priority
            />
          </div>
          <span className="font-mono text-xs font-semibold tracking-wider text-cloud-blue uppercase">
            [SYS-ID: AD-2026]
          </span>
          <span className="text-carbon-muted/40 font-mono text-xs">/</span>
          <span className="font-mono text-xs tracking-wider text-carbon-muted uppercase">
            SYSTEMS ARCHITECTURE & IT LEADERSHIP
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-carbon-muted">
          <span className="w-2 h-2 rounded-full bg-cloud-blue"></span>
          <span>AVAILABLE FOR SELECT CONSULTING & LEADERSHIP</span>
        </div>
      </div>

      {/* Center Giant Display Typography */}
      <div className="my-auto py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Main Name */}
          <h1 className="font-display font-extrabold text-[15vw] sm:text-[13vw] md:text-[11vw] leading-[0.88] tracking-tighter text-carbon-text uppercase select-none">
            ANIK DASH
          </h1>

          {/* Subtitle Bar */}
          <div className="mt-6 md:mt-8 flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-xs sm:text-sm font-semibold tracking-wider text-carbon-text uppercase">
            <span className="px-3 py-1 rounded bg-cloud-blue/10 text-cloud-blue border border-cloud-blue/20">
              IT MANAGER
            </span>
            <span className="text-carbon-muted/40">·</span>
            <span className="px-3 py-1 rounded bg-carbon-text/5 text-carbon-text border border-paper-border">
              CLOUD & DEVOPS
            </span>
            <span className="text-carbon-muted/40">·</span>
            <span className="px-3 py-1 rounded bg-carbon-text/5 text-carbon-text border border-paper-border">
              BUSINESS TECHNOLOGY
            </span>
          </div>
        </motion.div>

        {/* Lead Bio & Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        >
          <div className="md:col-span-7">
            <p className="text-lg sm:text-xl md:text-2xl font-body text-carbon-text/90 leading-relaxed font-normal">
              Bridging the gap between enterprise business operations and modern cloud infrastructure.
              Leading multi-outlet IT environments, administering Microsoft 365 ecosystems, and architecting automated serverless solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollTo("#projects")}
                className="group flex items-center gap-3 px-6 py-3.5 rounded-full bg-carbon-text text-paper-cream hover:bg-cloud-blue transition-all duration-200 shadow-sm"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  INSPECT WORK
                </span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-paper-border bg-paper-card/70 hover:bg-paper-card text-carbon-text font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-4 h-4 text-carbon-muted" />
              </button>
            </div>
          </div>

          {/* Quick Metrics Capsule (Right Column) */}
          <div className="md:col-span-5 flex flex-col space-y-4 border-l-2 border-cloud-blue/30 pl-6 md:pl-8">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-carbon-muted">
                ACTIVE POSITION
              </p>
              <p className="text-base font-bold text-carbon-text mt-0.5">
                IT Manager @ Arabika Cafe
              </p>
              <p className="text-xs text-carbon-muted mt-0.5">
                12 Outlets · ERP & HRMS (~150 Employees) · 40 M365 Licenses
              </p>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-widest text-carbon-muted">
                VERIFIED CAPABILITIES
              </p>
              <p className="text-xs text-carbon-text font-mono mt-1 leading-relaxed">
                AWS Solutions Architect · Azure Admin · Linux Foundation · Docker · Kubernetes · CI/CD
              </p>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-cloud-blue font-semibold">
                <Shield className="w-3.5 h-3.5" />
                7 ACCREDITED CERTIFICATIONS
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar & Scroll Indicator */}
      <div className="pt-8 border-t border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-carbon-muted">
        <div>
          <span>LOCATION: {PERSONAL_INFO.location.toUpperCase()}</span>
        </div>

        <button
          onClick={() => scrollTo("#about")}
          className="group flex items-center gap-2 self-start sm:self-auto hover:text-cloud-blue transition-colors"
        >
          <span className="tracking-widest uppercase">SCROLL TO INSPECT ARCHITECTURE</span>
          <span className="w-4 h-4 rounded-full border border-carbon-muted/40 flex items-center justify-center group-hover:border-cloud-blue group-hover:translate-y-0.5 transition-all">
            <ArrowDown className="w-2.5 h-2.5" />
          </span>
        </button>
      </div>
    </section>
  );
}
