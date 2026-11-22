"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import FullscreenNavModal from "./FullscreenNavModal";
import { PERSONAL_INFO } from "@/data/siteContent";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-paper-cream/90 backdrop-blur-md py-4 border-b border-paper-border shadow-sm"
          : "bg-transparent py-6"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex items-center justify-between">
          {/* Brand Left */}
          <a
            href="#hero"
            className="group flex items-center gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cloud-blue rounded-sm"
            aria-label="Anik Dash Portfolio Homepage"
          >
            {/* Approved Monogram Emblem */}
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0">
              <Image
                src="/assets/generated-visuals/ANIK DASH Tech Monogram Emblem.png"
                alt="ANIK DASH Tech Monogram Emblem"
                fill
                sizes="(max-width: 640px) 32px, 36px"
                className="object-contain"
                priority
              />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-carbon-text group-hover:text-cloud-blue transition-colors duration-200 leading-tight">
                {PERSONAL_INFO.name.toUpperCase()}
              </span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="font-mono text-[10px] tracking-wider text-carbon-muted uppercase">
                  IT MANAGER · CLOUD & DEVOPS
                </span>
              </div>
            </div>
          </a>

          {/* Controls Right */}
          <div className="flex items-center gap-6">
            {/* Location Tag (Desktop only) */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-paper-border bg-paper-card/60 font-mono text-[11px] text-carbon-muted">
              <span>{PERSONAL_INFO.location.toUpperCase()}</span>
            </div>

            {/* Menu Trigger */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-3 group py-2 px-4 rounded-full bg-paper-card/80 hover:bg-paper-card border border-paper-border shadow-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cloud-blue"
              aria-label="Open navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="font-mono text-xs font-bold tracking-widest text-carbon-text uppercase group-hover:text-cloud-blue transition-colors">
                MENU
              </span>
              <div className="w-5 h-3.5 flex flex-col justify-between items-end">
                <span className="w-5 h-[2px] bg-carbon-text rounded-full transition-all duration-200 group-hover:w-3 group-hover:bg-cloud-blue" />
                <span className="w-3 h-[2px] bg-carbon-text rounded-full transition-all duration-200 group-hover:w-5 group-hover:bg-cloud-blue" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Navigation Drawer */}
      <FullscreenNavModal
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
