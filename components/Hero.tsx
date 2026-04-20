"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";
import { useRef } from "react";
import { Button } from "./Button";
import { SECTION_IDS } from "@/lib/sections";

export function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const reduce = useReducedMotion();
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
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-produ-black pb-16 pt-32 md:pb-24"
    >
      {/* === Atmospheric layers === */}
      {/* Deep radial "stage light" glow */}
      <motion.div
        aria-hidden
        style={{ y: yBg }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_40%,rgba(26,232,95,0.10),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_20%,rgba(46,123,255,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_10%_90%,rgba(233,30,140,0.06),transparent_70%)]" />
      </motion.div>

      {/* Grid lines */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #2a2a2a 1px, transparent 1px), linear-gradient(to bottom, #2a2a2a 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0.9), transparent 70%)"
        }}
      />

      {/* Scan line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute inset-x-0 h-[2px] animate-scan bg-gradient-to-b from-transparent via-produ-accent/30 to-transparent" />
      </div>

      {/* Grain */}
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <motion.div
        style={{ opacity }}
        className="container-wide relative z-10 w-full"
      >
        {/* Top meta strip */}
        <div className="mb-12 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-produ-ink-300 md:mb-20">
          <span className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping bg-produ-accent opacity-60" />
              <span className="relative h-2 w-2 bg-produ-accent" />
            </span>
            Studio live — Tallinn
          </span>
          <span className="hidden md:inline text-produ-ink-400">
            Audiovisual · Stage · Installation
          </span>
        </div>

        <motion.h1
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
          className="font-sans text-display-xl font-black uppercase leading-[0.88] tracking-tightest text-produ-white"
        >
          Built for the
          <br />
          <span className="relative inline-block">
            <span className="relative z-10">moment</span>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1], delay: 0.6 }}
              className="absolute -bottom-1 left-0 z-0 h-[0.12em] w-full origin-left bg-produ-accent md:-bottom-2"
            />
          </span>
          <br />
          <span className="text-produ-ink-300">the room remembers.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.5 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-produ-ink-200 md:text-xl"
        >
          PRODU is an audiovisual production studio designing stages, light, and
          spatial experiences for alternative and electronic music — where
          engineering, visual language, and live energy meet.
        </motion.p>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: 0.7 }}
          className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
        >
          <Button href={`#${SECTION_IDS.services}`} variant="primary">
            View services
          </Button>
          <Button href={`#${SECTION_IDS.contact}`} variant="ghost">
            Get in touch
          </Button>
        </motion.div>

        {/* Bottom meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-20 grid grid-cols-2 gap-6 border-t border-produ-ink-700 pt-8 md:grid-cols-4"
        >
          {[
            ["Since", "2019"],
            ["Stages built", "40+"],
            ["Festivals", "Seaside, ILS, MM"],
            ["Coverage", "EU · BALT"]
          ].map(([label, value]) => (
            <div key={label}>
              <div className="eyebrow">{label}</div>
              <div className="mt-2 font-sans text-base font-medium text-produ-white md:text-lg">
                {value}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-produ-ink-400">
          Scroll
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
