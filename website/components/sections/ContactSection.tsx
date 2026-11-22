"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/data/siteContent";
import { Copy, Check, Phone, Mail, ArrowUpRight, Github, Linkedin, Terminal, MapPin } from "lucide-react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "Cloud & DevOps Telemetry Terminal [v2.4.0]",
    "Type 'help' for available commands or 'certs' to list credentials.",
  ]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    switch (cmd) {
      case "help":
        response = "Available commands: status, certs, projects, contact, clear";
        break;
      case "status":
        response = "ACTIVE: IT Manager @ Arabika Cafe (12 Outlets, ~150 Employees HRMS Scope, 40 M365 Licenses).";
        break;
      case "certs":
        response = "CERTIFIED: AWS Solutions Architect, AWS AI Practitioner, Azure Admin (AZ-104), Linux LFS101, OCI Foundations/AI, GitHub Actions.";
        break;
      case "projects":
        response = "5 PRODUCTION REPOSITORIES: Docker DevEnv, Redis OTP, Secure AWS Static Site, Serverless Image Resizer, Resume Builder.";
        break;
      case "contact":
        response = `Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone}`;
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        response = `Command not recognized: '${cmd}'. Type 'help' for available commands.`;
    }

    setTerminalHistory((prev) => [...prev, `anik@cloud-ops:~$ ${cmd}`, response]);
    setTerminalInput("");
  };

  return (
    <footer
      id="contact"
      className="py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto border-t border-paper-border"
    >
      {/* Section Sub-Tag */}
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-xs font-semibold text-cloud-blue tracking-wider uppercase">
          09 / SYSTEM COMMUNICATION
        </span>
        <span className="h-[1px] w-12 bg-cloud-blue/30" />
        <span className="font-mono text-xs text-carbon-muted tracking-wider uppercase">
          DIRECT CONTACT TERMINAL
        </span>
      </div>

      {/* Main Headline */}
      <div className="max-w-4xl mb-16">
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-carbon-text uppercase tracking-tight leading-[0.95]">
          LET&apos;S BUILD RESILIENT SYSTEMS
        </h2>
        <p className="mt-6 text-carbon-text/80 font-body text-lg sm:text-xl leading-relaxed">
          Open to executive IT management discussions, cloud modernization initiatives, and technology leadership opportunities.
        </p>
      </div>

      {/* Contact Interactive Hub */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
        {/* Left: Email, Phone & Direct Channels */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          {/* Email Copy Card */}
          <div className="p-8 rounded-2xl bg-paper-card border border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
            <div>
              <p className="font-mono text-xs text-carbon-muted uppercase tracking-widest mb-1">
                PRIMARY EMAIL
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-display font-bold text-xl sm:text-2xl text-carbon-text hover:text-cloud-blue transition-colors break-all"
              >
                {PERSONAL_INFO.email}
              </a>
            </div>

            <button
              onClick={handleCopyEmail}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex-shrink-0 ${
                copied
                  ? "bg-telemetry-green text-white shadow-md"
                  : "bg-carbon-text text-paper-cream hover:bg-cloud-blue shadow-sm"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>COPIED!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY EMAIL</span>
                </>
              )}
            </button>
          </div>

          {/* Phone & Location Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="p-6 rounded-xl bg-paper-card border border-paper-border hover:border-cloud-blue/40 transition-colors group flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-cloud-blue/10 flex items-center justify-center text-cloud-blue group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-carbon-muted uppercase tracking-widest">
                  DIRECT PHONE
                </p>
                <p className="font-mono text-sm font-bold text-carbon-text group-hover:text-cloud-blue transition-colors">
                  {PERSONAL_INFO.phone}
                </p>
              </div>
            </a>

            <div className="p-6 rounded-xl bg-paper-card border border-paper-border flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-safety-amber/10 flex items-center justify-center text-safety-amber">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="font-mono text-[10px] text-carbon-muted uppercase tracking-widest">
                  LOCATION BASE
                </p>
                <p className="font-mono text-xs font-bold text-carbon-text">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-paper-border bg-paper-card hover:bg-white text-carbon-text font-mono text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <Linkedin className="w-4 h-4 text-[#0077B5]" />
              <span>LINKEDIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-carbon-muted" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-paper-border bg-paper-card hover:bg-white text-carbon-text font-mono text-xs font-semibold uppercase tracking-wider transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GITHUB</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-carbon-muted" />
            </a>
          </div>
        </div>

        {/* Right: Interactive Terminal CLI */}
        <div className="lg:col-span-5 rounded-2xl bg-obsidian-black border border-white/10 p-6 text-white font-mono text-xs shadow-xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cloud-electric" />
              <span className="font-semibold text-white/90">INTERACTIVE SHELL</span>
            </div>
            <span className="text-[10px] text-white/40">cloud-ops-cli</span>
          </div>

          {/* Terminal Output */}
          <div className="space-y-2 h-44 overflow-y-auto mb-4 text-white/80 pr-2">
            {terminalHistory.map((line, lIdx) => (
              <p
                key={lIdx}
                className={
                  line.startsWith("anik@")
                    ? "text-cloud-electric font-semibold"
                    : line.startsWith("ACTIVE:") || line.startsWith("CERTIFIED:")
                    ? "text-telemetry-green"
                    : "text-white/70"
                }
              >
                {line}
              </p>
            ))}
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 pt-2 border-t border-white/10">
            <span className="text-telemetry-green font-bold">anik@cloud-ops:~$</span>
            <input
              type="text"
              value={terminalInput}
              onChange={(e) => setTerminalInput(e.target.value)}
              placeholder="type 'help'..."
              className="flex-1 bg-transparent text-white focus:outline-none placeholder-white/30"
              aria-label="Terminal input"
            />
          </form>
        </div>
      </div>

      {/* Bottom Colophon Bar */}
      <div className="pt-12 border-t border-paper-border flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-mono text-xs text-carbon-muted">
        <div>
          <span>© 2026 ANIK DASH. ALL RIGHTS RESERVED.</span>
          <span className="mx-2 text-carbon-muted/40">|</span>
          <span>LOCATION: {PERSONAL_INFO.location.toUpperCase()}</span>
        </div>

        <div className="text-[11px] text-carbon-muted/80">
          ENGINEERED WITH NEXT.JS 15, TAILWIND CSS & FRAMER MOTION
        </div>
      </div>
    </footer>
  );
}
