"use client";

import React from "react";
import { motion } from "framer-motion";
import { TIMELINE_NODES } from "@/data/siteContent";
import { GraduationCap, Cloud, Server, Briefcase, CheckCircle2, GitCommit } from "lucide-react";

export default function TimelineSection() {
  const iconMap = {
    academic: GraduationCap,
    certification: Cloud,
    engineering: Server,
    leadership: Briefcase,
  };

  return (
    <section
      id="timeline"
      className="py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto border-t border-paper-border"
    >
      {/* Section Sub-Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs font-semibold text-cloud-blue tracking-wider uppercase">
          05 / CAREER EVOLUTION
        </span>
        <span className="h-[1px] w-12 bg-cloud-blue/30" />
        <span className="font-mono text-xs text-carbon-muted tracking-wider uppercase">
          CHRONOLOGICAL PROGRESSION
        </span>
      </div>

      {/* Section Headline */}
      <div className="max-w-3xl mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-carbon-text tracking-tight uppercase leading-[1.05]">
          THE TECHNICAL JOURNEY (2019 – 2026)
        </h2>
        <p className="mt-4 text-carbon-muted font-body text-base sm:text-lg">
          From computer science academic foundations to hands-on cloud/DevOps engineering and enterprise IT management leadership.
        </p>
      </div>

      {/* Vertical Pipeline Rail & Timeline Nodes */}
      <div className="relative border-l-2 border-cloud-blue/30 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
        {TIMELINE_NODES.map((node, idx) => {
          const Icon = iconMap[node.type];

          return (
            <motion.div
              key={node.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Node Pip on Vertical Rail */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-paper-cream border-2 border-cloud-blue flex items-center justify-center group-hover:scale-125 group-hover:bg-cloud-blue transition-all duration-200">
                <span className="w-2 h-2 rounded-full bg-cloud-blue group-hover:bg-white transition-colors" />
              </div>

              {/* Node Card */}
              <div className="p-6 sm:p-8 rounded-xl bg-paper-card border border-paper-border hover:border-cloud-blue/40 transition-colors shadow-sm">
                {/* Year Stamp & Organization */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded bg-cloud-blue/10 text-cloud-blue font-mono text-xs font-bold">
                      {node.year}
                    </span>
                    <span className="font-mono text-xs text-carbon-muted uppercase">
                      // {node.period}
                    </span>
                  </div>

                  <span className="font-mono text-xs text-carbon-muted uppercase font-semibold">
                    {node.organization}
                  </span>
                </div>

                {/* Title & Role */}
                <h3 className="font-display font-bold text-xl sm:text-2xl text-carbon-text uppercase mb-2">
                  {node.title}
                </h3>

                <p className="font-mono text-xs text-cloud-blue font-semibold uppercase mb-4">
                  ROLE: {node.role}
                </p>

                <p className="text-sm font-body text-carbon-text/90 leading-relaxed mb-4">
                  {node.description}
                </p>

                {/* Highlights List */}
                <div className="pt-4 border-t border-paper-border flex flex-col space-y-1.5">
                  {node.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs font-mono text-carbon-muted">
                      <CheckCircle2 className="w-3.5 h-3.5 text-telemetry-green flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
