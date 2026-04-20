"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";
import { SECTION_IDS } from "@/lib/sections";
import { useT } from "./LanguageProvider";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
  const t = useT();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <section
      id={SECTION_IDS.hero}
      ref={ref}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-produ-black pb-20 pt-32 md:pb-28"
    >
      {/* === Atmospheric layers === */}
      <motion.div
        aria-hidden
        style={{ y: yBg }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(255,255,255,0.06),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_20%,rgba(255,255,255,0.04),transparent_70%)]" />
      </motion.div>

      {/* Grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0.9), transparent 70%)"
        }}
      />

      {/* Grain */}
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <motion.div
        style={{ opacity }}
        className="container-wide relative z-10 w-full"
      >
        {/* Top meta strip — trimmed */}
        <div className="mb-14 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-produ-ink-300 md:mb-20">
          <span className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping bg-produ-white opacity-50" />
              <span className="relative h-1.5 w-1.5 bg-produ-white" />
            </span>
            {t.hero.status}
          </span>
          <span className="hidden md:inline text-produ-ink-400">
            {t.hero.tagline}
          </span>
        </div>

        <motion.h1
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
          className="font-sans text-display-xl font-black uppercase leading-[0.88] tracking-tightest text-produ-white"
        >
          {t.hero.title[0]}
          <br />
          {t.hero.title[1]}
          <br />
          <span className="text-produ-ink-300">{t.hero.title[2]}</span>
        </motion.h1>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.5 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-produ-ink-200 md:text-xl"
        >
          {t.hero.subtitle}
        </motion.p>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-produ-ink-400">
          {t.hero.scroll}
          <motion.span
            className="block h-8 w-px bg-produ-ink-500"
            initial={{ scaleY: 0, originY: 0 }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
