"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/data/siteContent";
import { Github, ArrowUpRight, Terminal, CheckCircle2, Layers, Cpu, Server, Shield, FileText } from "lucide-react";

export default function ProjectsSection() {
  const getProjectIcon = (id: string) => {
    switch (id) {
      case "dev-env":
        return Cpu;
      case "otp-service":
        return Server;
      case "secure-static-aws":
        return Shield;
      case "serverless-image":
        return Layers;
      case "resume-builder":
        return FileText;
      default:
        return Terminal;
    }
  };

  return (
    <section
      id="projects"
      className="py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto border-t border-paper-border"
    >
      {/* Section Sub-Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs font-semibold text-cloud-blue tracking-wider uppercase">
          07 / PRODUCTION REPOSITORIES
        </span>
        <span className="h-[1px] w-12 bg-cloud-blue/30" />
        <span className="font-mono text-xs text-carbon-muted tracking-wider uppercase">
          VERIFIED ENGINEERING PROJECTS
        </span>
      </div>

      {/* Section Headline */}
      <div className="max-w-3xl mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-carbon-text tracking-tight uppercase leading-[1.05]">
          FEATURED TECHNICAL PROJECTS
        </h2>
        <p className="mt-4 text-carbon-muted font-body text-base sm:text-lg">
          Production-tested implementations showcasing containerization, cloud infrastructure security, and serverless architectures.
        </p>
      </div>

      {/* Projects List - Asymmetric Staggered Presentation */}
      <div className="space-y-12 sm:space-y-16">
        {PROJECTS.map((project, idx) => {
          const Icon = getProjectIcon(project.id);
          const isEven = idx % 2 === 0;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 sm:p-12 rounded-2xl bg-paper-card border border-paper-border hover:border-cloud-blue/40 transition-all duration-300 shadow-sm"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                {/* Left/Main Column: Specification & Narrative */}
                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                  <div>
                    {/* Index & Category */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs font-bold text-cloud-blue">
                        {project.number} / 05
                      </span>
                      <span className="text-carbon-muted/40 font-mono text-xs">/</span>
                      <span className="font-mono text-xs text-carbon-muted uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-carbon-text uppercase mb-4 leading-snug">
                      {project.title}
                    </h3>

                    {/* Problem & Solution */}
                    <div className="space-y-3 font-body text-sm text-carbon-text/90 leading-relaxed">
                      <p>
                        <strong className="font-semibold text-carbon-text font-mono text-xs uppercase tracking-wider block text-carbon-muted mb-1">
                          PROBLEM CONTEXT:
                        </strong>
                        {project.problemStatement}
                      </p>

                      <p>
                        <strong className="font-semibold text-carbon-text font-mono text-xs uppercase tracking-wider block text-carbon-muted mb-1">
                          ENGINEERED SOLUTION:
                        </strong>
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  {/* Architectural Highlights */}
                  <div className="pt-4 border-t border-paper-border space-y-2">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-carbon-muted font-semibold">
                      ARCHITECTURAL HIGHLIGHTS
                    </p>
                    {project.architecturalHighlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs font-mono text-carbon-muted">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cloud-blue flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills & GitHub CTA */}
                  <div className="pt-4 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-paper-cream border border-paper-border font-mono text-xs text-carbon-text font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-carbon-text text-paper-cream hover:bg-cloud-blue transition-colors duration-200"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                        VIEW REPOSITORY
                      </span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Architectural Schematic / Simulated Terminal Preview */}
                <div className="lg:col-span-5 rounded-xl bg-obsidian-black border border-white/10 p-5 text-white font-mono text-xs shadow-md">
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-[10px] text-white/40 tracking-wider">
                      SPEC // {project.id}.yaml
                    </span>
                  </div>

                  {/* Architecture Flow Preview */}
                  <div className="space-y-2 text-white/80">
                    <p className="text-cloud-electric"># Architecture Topology</p>
                    <p>
                      <span className="text-white/40">target:</span> {project.title}
                    </p>
                    <p>
                      <span className="text-white/40">stack:</span> [{project.technologies.join(", ")}]
                    </p>
                    <p>
                      <span className="text-white/40">status:</span> verified & tested
                    </p>
                    <div className="my-3 p-3 rounded bg-white/5 border border-white/10 text-[11px] text-telemetry-green leading-relaxed">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-cloud-electric" />
                        <span className="font-semibold text-white">SYSTEM DEPLOYMENT:</span>
                      </div>
                      <code>✓ Automated container / pipeline build passed</code>
                      <br />
                      <code>✓ Security policies & TTL rules active</code>
                      <br />
                      <code>✓ Monitoring & telemetry logging enabled</code>
                    </div>
                    <p className="text-white/40 text-[10px]">
                      Source repository: {project.githubUrl.split("/").slice(-2).join("/")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
