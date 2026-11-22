"use client";

import React, { useState, useEffect } from "react";
import { NAV_ITEMS } from "@/data/siteContent";

export default function TelemetryRail() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (const item of NAV_ITEMS) {
        const id = item.href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside
      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end pointer-events-auto"
      aria-label="Section navigation rail"
    >
      <div className="flex flex-col items-end space-y-3 py-4 border-r border-carbon-text/15 pr-3">
        {NAV_ITEMS.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = activeSection === id;

          return (
            <button
              key={item.index}
              onClick={() => scrollTo(item.href)}
              className="group flex items-center gap-3 py-1 text-right focus:outline-none"
              aria-label={`Scroll to section ${item.label}`}
              aria-current={isActive ? "true" : undefined}
            >
              {/* Text label appears on active or hover */}
              <div
                className={`transition-all duration-200 ${
                  isActive
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                }`}
              >
                <span className="font-mono text-[10px] tracking-widest text-carbon-muted uppercase font-semibold">
                  {item.index} {item.label}
                </span>
              </div>

              {/* Tick Marker */}
              <div className="relative flex items-center justify-center">
                <span
                  className={`block transition-all duration-200 ${
                    isActive
                      ? "w-3 h-3 rounded-full bg-cloud-blue ring-4 ring-cloud-blue/20"
                      : "w-2 h-[2px] bg-carbon-text/30 group-hover:w-3 group-hover:bg-carbon-text"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Subtle rail coordinates footer */}
      <div className="mt-3 pr-3 text-right">
        <span className="font-mono text-[9px] text-carbon-muted/50 tracking-widest block">
          NAV // SECTIONS
        </span>
      </div>
    </aside>
  );
}
