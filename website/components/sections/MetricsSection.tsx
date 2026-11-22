"use client";

import React from "react";
import { motion } from "framer-motion";
import { STAT_METRICS } from "@/data/siteContent";
import { CheckCircle2 } from "lucide-react";

export default function MetricsSection() {
  return (
    <section
      id="metrics"
      className="py-24 sm:py-32 px-6 sm:px-10 md:px-16 bg-obsidian-black text-white relative overflow-hidden"
    >
      {/* Background Subtle Grid & Accent Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cloud-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Sub-Tag */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-16 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-cloud-electric tracking-wider uppercase">
              03 / VERIFIED METRICS
            </span>
            <span className="h-[1px] w-12 bg-cloud-electric/40" />
            <span className="font-mono text-xs text-white/60 tracking-wider uppercase">
              OPERATIONAL SCOPE & CREDENTIALS
            </span>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-white/70">
            <span>VERIFIED FACTUAL METRICS</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight uppercase leading-[1.05]">
            OPERATIONAL SCALE & CREDENTIALS
          </h2>
          <p className="mt-4 text-white/70 font-body text-base sm:text-lg">
            Verifiable metrics drawn strictly from active IT management responsibilities and formal industry certifications.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STAT_METRICS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 rounded-xl bg-obsidian-card border border-white/10 hover:border-cloud-electric/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-mono text-[10px] text-white/40 tracking-widest block uppercase mb-3">
                  METRIC // 0{idx + 1}
                </span>

                <div className="flex items-baseline gap-1">
                  <span className="font-display font-extrabold text-5xl sm:text-6xl text-white group-hover:text-cloud-electric transition-colors">
                    {stat.metric}
                  </span>
                  {stat.suffix && (
                    <span className="font-display font-extrabold text-3xl sm:text-4xl text-cloud-electric">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-white/90 mt-3">
                  {stat.label}
                </p>
              </div>

              <p className="mt-4 pt-4 border-t border-white/5 text-xs text-white/60 font-body leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Verification Note */}
        <div className="mt-16 p-4 rounded-lg bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-white/60">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-cloud-electric" />
            <span>All operational metrics verified from documentation and formal certification credentials.</span>
          </div>
          <span className="text-[11px] text-white/40">AUDITED AS OF NOVEMBER 2026</span>
        </div>
      </div>
    </section>
  );
}
