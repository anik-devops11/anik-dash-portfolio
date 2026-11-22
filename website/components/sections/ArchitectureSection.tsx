"use client";

import React from "react";
import { motion } from "framer-motion";
import { CAPABILITY_DOMAINS } from "@/data/siteContent";
import { Server, Cloud, Cpu, Terminal, CheckCircle2, Layers } from "lucide-react";

export default function ArchitectureSection() {
  const iconMap = [Server, Cloud, Cpu, Terminal];

  return (
    <section
      id="architecture"
      className="py-24 sm:py-32 px-6 sm:px-10 md:px-16 bg-obsidian-black text-white relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Sub-Tag */}
        <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
          <span className="font-mono text-xs font-semibold text-cloud-electric tracking-wider uppercase">
            06 / TECHNICAL CAPABILITIES
          </span>
          <span className="h-[1px] w-12 bg-cloud-electric/40" />
          <span className="font-mono text-xs text-white/60 tracking-wider uppercase">
            SYSTEMS TOPOLOGY & SKILLS MATRIX
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-[1.05]">
            SYSTEMS ARCHITECTURE & CAPABILITIES
          </h2>
          <p className="mt-4 text-white/70 font-body text-base sm:text-lg">
            Structured taxonomy of core technical competencies spanning enterprise IT operations, multi-cloud platforms, and containerized DevOps automation.
          </p>
        </div>

        {/* 4 Pillars Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAPABILITY_DOMAINS.map((domain, idx) => {
            const Icon = iconMap[idx];

            return (
              <motion.div
                key={domain.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 rounded-2xl bg-obsidian-card border border-white/10 hover:border-cloud-electric/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-cloud-blue/15 flex items-center justify-center text-cloud-electric group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-[11px] text-white/40 tracking-widest uppercase">
                      DOMAIN // 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white uppercase mb-2">
                    {domain.category}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/60 font-body leading-relaxed mb-6">
                    {domain.description}
                  </p>
                </div>

                {/* Skills Tags List */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
                  {domain.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/80 font-mono text-xs hover:border-cloud-electric/50 hover:bg-white/10 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
