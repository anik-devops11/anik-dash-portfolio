"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function SvgPipelineTrace() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (!mounted || prefersReducedMotion) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 w-full h-full overflow-visible hidden md:block"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1D4ED8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#EA580C" stopOpacity="0.8" />
          </linearGradient>
          <filter id="pipelineGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Subtle Background Guide Track */}
        <path
          d="M 120 180 Q 450 120, 850 320 T 1320 280 C 1380 400, 1100 600, 720 540 S 180 750, 140 880"
          stroke="rgba(29, 78, 216, 0.06)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />

        {/* Dynamic Scrubbed Active Pipeline Path */}
        <motion.path
          d="M 120 180 Q 450 120, 850 320 T 1320 280 C 1380 400, 1100 600, 720 540 S 180 750, 140 880"
          stroke="url(#pipelineGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          filter="url(#pipelineGlow)"
          style={{
            pathLength: pathLength,
          }}
        />
      </svg>
    </div>
  );
}
