"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { SECTION_IDS } from "@/lib/sections";
import { useT } from "./LanguageProvider";
import { LanguageToggle } from "./LanguageToggle";

export function Navbar() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>(SECTION_IDS.hero);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section scroll-spy
  useEffect(() => {
    const ids = [SECTION_IDS.hero, ...t.nav.items.map((n) => n.id)];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (targets.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, [t.nav.items]);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-black/75 backdrop-blur-md border-b border-produ-ink-700"
          : "bg-transparent border-b border-transparent"
      ].join(" ")}
    >
      <nav className="container-wide flex h-16 items-center justify-between md:h-20">
        <button
          onClick={() => scrollTo(SECTION_IDS.hero)}
          className="group flex items-center gap-3"
          aria-label={t.nav.backToTop}
        >
          <Logo className="h-4 w-auto text-produ-white md:h-5" />
          <span
            aria-hidden
            className="h-1.5 w-1.5 bg-produ-white transition-opacity duration-300 group-hover:opacity-60"
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {t.nav.items.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollTo(item.id)}
                  className={[
                    "group relative px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors",
                    isActive
                      ? "text-produ-white"
                      : "text-produ-ink-300 hover:text-produ-white"
                  ].join(" ")}
                >
                  <span className="mr-2 text-produ-ink-500">{item.index}</span>
                  {item.label}
                  <span
                    aria-hidden
                    className={[
                      "absolute -bottom-px left-4 right-4 h-px origin-left transition-transform duration-300 bg-produ-white",
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    ].join(" ")}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle size="sm" />
          <button
            onClick={() => scrollTo(SECTION_IDS.contact)}
            className="group relative inline-flex items-center gap-2 border border-produ-white/80 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-produ-white transition-colors hover:bg-produ-white hover:text-produ-black"
          >
            <span className="h-1.5 w-1.5 bg-produ-white" aria-hidden />
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile trigger + language */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle size="sm" />
          <button
            className="flex h-10 w-10 items-center justify-center"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="relative block h-3 w-6">
              <span
                className={[
                  "absolute left-0 top-0 block h-px w-full bg-white transition-transform duration-300",
                  open ? "translate-y-[6px] rotate-45" : ""
                ].join(" ")}
              />
              <span
                className={[
                  "absolute left-0 bottom-0 block h-px w-full bg-white transition-transform duration-300",
                  open ? "-translate-y-[6px] -rotate-45" : ""
                ].join(" ")}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:hidden border-t border-produ-ink-700 bg-produ-black"
          >
            <ul className="container-wide flex flex-col py-4">
              {t.nav.items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="flex w-full items-center justify-between py-4 text-left font-mono text-[13px] uppercase tracking-[0.18em] text-produ-white"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-produ-ink-500">{item.index}</span>
                      {item.label}
                    </span>
                    <span aria-hidden className="text-produ-ink-400">→</span>
                  </button>
                </li>
              ))}
              <li className="mt-4">
                <button
                  onClick={() => scrollTo(SECTION_IDS.contact)}
                  className="inline-flex w-full items-center justify-center gap-2 border border-produ-white bg-produ-white px-5 py-3 font-mono text-[12px] uppercase tracking-[0.2em] text-produ-black"
                >
                  <span className="h-1.5 w-1.5 bg-produ-black" aria-hidden />
                  {t.nav.cta}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
