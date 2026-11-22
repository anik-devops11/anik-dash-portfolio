"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { CERTIFICATIONS } from "@/data/siteContent";
import { ShieldCheck, ArrowUpRight } from "lucide-react";

// Official logos for the certification providers/platforms
const ISSUER_LOGOS: Record<
  string,
  { src: string; alt: string; width: number; height: number; scaleClass?: string }
> = {
  aws: {
    src: "/assets/issuer-logos/aws.svg",
    alt: "Amazon Web Services (AWS)",
    width: 32,
    height: 20,
    scaleClass: "scale-110",
  },
  azure: {
    src: "/assets/issuer-logos/azure.svg",
    alt: "Microsoft Azure",
    width: 22,
    height: 22,
  },
  linux: {
    src: "/assets/issuer-logos/linuxfoundation.svg",
    alt: "Linux Foundation",
    width: 20,
    height: 20,
  },
  oracle: {
    src: "/assets/issuer-logos/oracle.svg",
    alt: "Oracle Cloud Infrastructure (OCI)",
    width: 28,
    height: 18,
    scaleClass: "scale-105",
  },
  github: {
    src: "/assets/issuer-logos/github.svg",
    alt: "GitHub",
    width: 22,
    height: 22,
  },
};

export default function CredentialsSection() {
  // Accessible, high-contrast category styling (>7:1 text contrast on light card)
  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case "aws":
        return {
          badge: "text-[#7A3E00] bg-[#FFF3E0] border-[#B86800]/30",
          issuerTag: "text-[#854400] bg-[#FFF3E0]/70",
          accentBorder: "group-hover:border-[#B86800]/40",
          dot: "bg-[#B86800]",
        };
      case "azure":
        return {
          badge: "text-[#004E8C] bg-[#EBF3FC] border-[#0078D4]/30",
          issuerTag: "text-[#005A9E] bg-[#EBF3FC]/70",
          accentBorder: "group-hover:border-[#0078D4]/40",
          dot: "bg-[#0078D4]",
        };
      case "oracle":
        return {
          badge: "text-[#991B1B] bg-[#FEF2F2] border-[#DC2626]/30",
          issuerTag: "text-[#B91C1C] bg-[#FEF2F2]/70",
          accentBorder: "group-hover:border-[#DC2626]/40",
          dot: "bg-[#DC2626]",
        };
      case "linux":
        return {
          badge: "text-zinc-900 bg-zinc-100 border-zinc-300",
          issuerTag: "text-zinc-700 bg-zinc-100/70",
          accentBorder: "group-hover:border-zinc-500/40",
          dot: "bg-zinc-800",
        };
      case "github":
        return {
          badge: "text-slate-900 bg-slate-100 border-slate-300",
          issuerTag: "text-slate-700 bg-slate-100/70",
          accentBorder: "group-hover:border-slate-500/40",
          dot: "bg-slate-800",
        };
      default:
        return {
          badge: "text-cloud-dark bg-cloud-blue/10 border-cloud-blue/30",
          issuerTag: "text-cloud-blue bg-cloud-blue/10",
          accentBorder: "group-hover:border-cloud-blue/40",
          dot: "bg-cloud-blue",
        };
    }
  };

  return (
    <section
      id="credentials"
      className="scroll-mt-24 sm:scroll-mt-28 py-24 sm:py-32 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto border-t border-paper-border"
    >
      {/* Section Sub-Tag */}
      <div className="flex items-center gap-3 mb-8">
        <span className="font-mono text-xs font-semibold text-cloud-blue tracking-wider uppercase">
          08 / ACCREDITATIONS
        </span>
        <span className="h-[1px] w-12 bg-cloud-blue/30" />
        <span className="font-mono text-xs text-carbon-muted tracking-wider uppercase">
          FORMAL CREDENTIALS
        </span>
      </div>

      {/* Section Headline */}
      <div className="max-w-3xl mb-16">
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-carbon-text tracking-tight uppercase leading-[1.05]">
          VERIFIED INDUSTRY CERTIFICATIONS
        </h2>
        <p className="mt-4 text-carbon-muted font-body text-base sm:text-lg">
          Accredited credentials across cloud architecture, administration, containerization, and open-source foundations.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {CERTIFICATIONS.map((cert, idx) => {
          const styles = getCategoryStyles(cert.category);
          const logo = ISSUER_LOGOS[cert.category] || ISSUER_LOGOS.aws;

          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06 * idx, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className={`p-6 sm:p-7 rounded-2xl bg-paper-card border border-paper-border ${styles.accentBorder} hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative`}
            >
              <div>
                {/* Header: Official Organization Logo + Badge Code & Issue Date */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    {/* Official Provider Logo Container */}
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden bg-white border border-paper-border shadow-xs p-1 flex items-center justify-center flex-shrink-0 group-hover:border-carbon-text/20 transition-colors">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={logo.width}
                        height={logo.height}
                        className={`object-contain max-h-5 max-w-7 ${logo.scaleClass || ""}`}
                      />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${styles.dot}`} />
                      <span
                        className={`px-2.5 py-0.5 rounded font-mono text-[11px] font-bold tracking-wider uppercase border ${styles.badge}`}
                      >
                        {cert.badgeCode}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-medium text-carbon-muted">
                    {cert.issueDate}
                  </span>
                </div>

                {/* Credential Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-carbon-text uppercase mb-3 group-hover:text-cloud-blue transition-colors leading-snug">
                  {cert.title}
                </h3>

                {/* Issuer Badge Plaque */}
                <div className="mb-6 flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-carbon-muted font-medium">
                    ISSUER:
                  </span>
                  <span className="font-mono text-xs font-semibold text-carbon-text">
                    {cert.issuer}
                  </span>
                </div>
              </div>

              {/* Bottom Verification Link */}
              <div className="pt-4 border-t border-paper-border">
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-paper-cream/80 hover:bg-paper-cream border border-paper-border hover:border-cloud-blue/40 font-mono text-xs font-semibold text-carbon-text hover:text-cloud-blue transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cloud-blue"
                  aria-label={`Verify ${cert.title} on official issuer website`}
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-telemetry-green flex-shrink-0" />
                    <span className="tracking-wider uppercase">VERIFY CREDENTIAL</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-carbon-muted group-hover/link:text-cloud-blue group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
