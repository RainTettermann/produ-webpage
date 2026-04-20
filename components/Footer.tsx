"use client";

import { Logo } from "./Logo";
import { NAV_ITEMS, SECTION_IDS } from "@/lib/sections";

export function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-produ-ink-700 bg-produ-black">
      <div className="container-wide py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo className="h-5 w-auto text-produ-white md:h-6" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-produ-ink-300">
              PRODU is an audiovisual production studio building stage,
              light, and spatial experiences for alternative and electronic
              music culture.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow">Navigate</h4>
            <ul className="mt-5 space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="font-mono text-[12px] uppercase tracking-[0.16em] text-produ-ink-200 transition-colors hover:text-produ-white"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="eyebrow">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm text-produ-ink-200">
              <li>
                <a
                  href="mailto:hello@produ.studio"
                  className="underline-offset-4 transition-colors hover:text-produ-white hover:underline"
                >
                  hello@produ.studio
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/produ"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline-offset-4 transition-colors hover:text-produ-white hover:underline"
                >
                  @produ — instagram
                </a>
              </li>
              <li className="text-produ-ink-400">Tallinn · Worldwide</li>
            </ul>
            <button
              onClick={() => scrollTo(SECTION_IDS.contact)}
              className="mt-8 inline-flex items-center gap-2 border border-produ-ink-500 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-produ-white transition-colors hover:border-produ-white"
            >
              <span className="h-1.5 w-1.5 bg-produ-accent" aria-hidden />
              Start a project
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start gap-4 border-t border-produ-ink-700 pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-produ-ink-400 md:flex-row md:items-center md:justify-between">
          <span>© {year} PRODU. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-slow-pulse bg-produ-accent" aria-hidden />
            Studio status — available
          </span>
        </div>
      </div>
    </footer>
  );
}
