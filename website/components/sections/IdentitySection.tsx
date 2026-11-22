"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Cloud, Server, Users, Layers, Cpu, Award } from "lucide-react";

export default function IdentitySection() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto border-t border-paper-border"
    >
      {/* Section Sub-Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs font-semibold text-cloud-blue tracking-wider uppercase">
          02 / EXECUTIVE PROFILE
        </span>
        <span className="h-[1px] w-12 bg-cloud-blue/30" />
        <span className="font-mono text-xs text-carbon-muted tracking-wider uppercase">
          DUAL-DISCIPLINE LEADERSHIP
        </span>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Portrait with Telemetry Frame */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* Background Architectural Card */}
            <div className="absolute -inset-3 rounded-2xl bg-paper-card border border-paper-border -rotate-1 pointer-events-none" />

            {/* Image Container */}
            <div className="relative rounded-xl overflow-hidden border border-paper-border bg-paper-card aspect-[4/5] shadow-lg">
              <Image
                src="/assets/profile-photo/anik-profile.png"
                alt="Anik Dash — IT Manager & Cloud DevOps Specialist"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center filter grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                priority
              />

              {/* In-Image Corner Telemetry */}
              <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-obsidian-black/85 backdrop-blur-md text-white border border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-sm">ANIK DASH</p>
                  <p className="font-mono text-[10px] text-white/70">IT MANAGER · ARABIKA CAFE</p>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-paper-border text-white/80 font-mono text-[10px]">
                  <span>VERIFIED</span>
                </div>
              </div>
            </div>

            {/* Floating Telemetry Chips */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -top-4 -right-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-md border border-paper-border text-carbon-text font-mono text-[11px]"
            >
              <Cloud className="w-3.5 h-3.5 text-cloud-blue" />
              <span>AWS SOLUTIONS ARCHITECT</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white shadow-md border border-paper-border text-carbon-text font-mono text-[11px]"
            >
              <Users className="w-3.5 h-3.5 text-safety-amber" />
              <span>12 OUTLETS · ~150 EMPLOYEES</span>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Editorial Narrative & Pillars */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-carbon-text uppercase tracking-tight leading-[1.05]">
            STRATEGIC IT LEADERSHIP MEETS CLOUD RIGOR
          </h2>

          <p className="text-base sm:text-lg font-body text-carbon-text/90 leading-relaxed">
            I am an IT Manager with a background in Computer Science and Engineering, combining IT management, business technology operations, cloud infrastructure, and DevOps engineering.
          </p>

          <p className="text-sm sm:text-base font-body text-carbon-muted leading-relaxed">
            Currently working at Arabika Cafe, I manage IT operations across 12 outlets, administer 40 Microsoft 365 user licenses, coordinate technology procurement, and lead major systems implementations including ERP software rollout and HRMS biometric attendance for ~150 employees.
          </p>

          {/* Dual Disciplines Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {/* Pillar A */}
            <div className="p-5 rounded-xl bg-paper-card border border-paper-border hover:border-cloud-blue/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-cloud-blue/10 flex items-center justify-center text-cloud-blue mb-3">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-carbon-text uppercase mb-2">
                Enterprise IT Operations
              </h3>
              <ul className="space-y-1.5 text-xs text-carbon-muted font-body">
                <li>• ERP software & HRMS biometric systems implementation</li>
                <li>• Multi-outlet infrastructure & operational governance</li>
                <li>• Microsoft 365 administration (40 user licenses)</li>
                <li>• Technology procurement & vendor SLA management</li>
              </ul>
            </div>

            {/* Pillar B */}
            <div className="p-5 rounded-xl bg-paper-card border border-paper-border hover:border-safety-amber/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-safety-amber/10 flex items-center justify-center text-safety-amber mb-3">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-carbon-text uppercase mb-2">
                Cloud Architecture & DevOps
              </h3>
              <ul className="space-y-1.5 text-xs text-carbon-muted font-body">
                <li>• Certified AWS Solutions Architect & AI Practitioner</li>
                <li>• Microsoft Certified: Azure Administrator Associate</li>
                <li>• Docker, Dev Containers & Kubernetes orchestration</li>
                <li>• Serverless event pipelines & GitHub Actions CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
