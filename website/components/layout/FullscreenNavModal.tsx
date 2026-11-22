"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, PERSONAL_INFO } from "@/data/siteContent";
import { X, ArrowUpRight, MapPin } from "lucide-react";

interface FullscreenNavModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FullscreenNavModal({ isOpen, onClose }: FullscreenNavModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleNavClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-obsidian-black/98 text-white flex flex-col justify-between p-6 sm:p-12 md:p-16 backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation Menu"
        >
          {/* Top Bar inside Modal */}
          <div className="flex items-center justify-between border-b border-white/15 pb-6">
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1.5 rounded-full bg-black/60 border border-white/20 font-mono text-xs font-bold tracking-wider text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                NAVIGATION // DIRECTORY
              </span>
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-2.5 group px-5 py-2.5 rounded-full bg-black/60 border border-white/25 hover:border-white hover:bg-black/90 transition-all duration-200 shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-cloud-electric"
              aria-label="Close navigation menu"
            >
              <span className="font-mono text-xs uppercase tracking-widest font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                CLOSE
              </span>
              <X className="w-4 h-4 text-white group-hover:rotate-90 group-hover:text-cloud-electric transition-all duration-200" />
            </button>
          </div>

          {/* Center Links Grid */}
          <div className="my-auto py-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 lg:col-span-8 flex flex-col space-y-2 sm:space-y-3">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="group flex items-baseline gap-4 sm:gap-6 text-left w-full py-1.5 hover:translate-x-3 transition-transform duration-200 focus:outline-none"
                  >
                    <span className="font-mono text-xs sm:text-sm text-cloud-electric font-bold tracking-wider drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]">
                      {item.index}
                    </span>
                    <span className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] group-hover:text-cloud-electric transition-colors duration-200">
                      {item.label}
                    </span>
                    <span className="hidden lg:inline-block font-mono text-xs font-semibold text-slate-200 tracking-wider ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/60 px-3 py-1 rounded-md border border-white/15 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                      // {item.description}
                    </span>
                  </button>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Information Panel */}
            <div className="hidden md:flex md:col-span-5 lg:col-span-4 flex-col justify-end">
              <div className="p-6 rounded-2xl bg-black/60 border border-white/20 backdrop-blur-md shadow-2xl space-y-6">
                <div>
                  <p className="font-mono text-xs text-cloud-electric uppercase tracking-widest mb-1.5 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    CURRENT ROLE
                  </p>
                  <p className="text-base font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    Arabika Cafe · 12 Outlets
                  </p>
                  <p className="text-xs text-slate-200 font-medium mt-0.5 leading-relaxed drop-shadow-sm">
                    IT Infrastructure, ERP Implementation & Digital Transformation
                  </p>
                </div>

                <div>
                  <p className="font-mono text-xs text-cloud-electric uppercase tracking-widest mb-2 font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                    ACCREDITED CREDENTIALS
                  </p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/15 text-white border border-white/25 shadow-sm drop-shadow-sm">
                      AWS SAA
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/15 text-white border border-white/25 shadow-sm drop-shadow-sm">
                      AWS AIP
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/15 text-white border border-white/25 shadow-sm drop-shadow-sm">
                      AZ-104
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/15 text-white border border-white/25 shadow-sm drop-shadow-sm">
                      LFS101
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/15 text-white border border-white/25 shadow-sm drop-shadow-sm">
                      OCI AI
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/15 text-white border border-white/25 shadow-sm drop-shadow-sm">
                      OCI FND
                    </span>
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white/15 text-white border border-white/25 shadow-sm drop-shadow-sm">
                      GH ACTIONS
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-white drop-shadow-sm">
                    <MapPin className="w-4 h-4 text-cloud-electric flex-shrink-0" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar inside Modal */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/15 pt-6">
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono font-semibold">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-black/60 border border-white/20 text-white hover:text-cloud-electric hover:border-cloud-electric/60 flex items-center gap-1.5 transition-all shadow-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cloud-electric" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-black/60 border border-white/20 text-white hover:text-cloud-electric hover:border-cloud-electric/60 flex items-center gap-1.5 transition-all shadow-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cloud-electric" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="px-4 py-2 rounded-full bg-black/60 border border-white/20 text-white hover:text-cloud-electric hover:border-cloud-electric/60 flex items-center gap-1.5 transition-all shadow-sm drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
              >
                <span>{PERSONAL_INFO.email}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-cloud-electric" />
              </a>
            </div>

            <div className="text-xs font-mono font-semibold text-slate-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
              NEXT.JS 15 · TAILWIND CSS · FRAMER MOTION
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
