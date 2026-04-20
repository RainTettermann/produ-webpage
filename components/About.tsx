"use client";

import { Reveal } from "./Reveal";
import { SECTION_IDS } from "@/lib/sections";
import { LogoMark } from "./Logo";
import { useT } from "./LanguageProvider";

export function About() {
  const t = useT();

  return (
    <section
      id={SECTION_IDS.about}
      className="relative scroll-mt-20 border-t border-produ-ink-700 bg-produ-black py-24 md:py-32"
    >
      <div className="container-wide">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-produ-ink-300">
                <span className="text-produ-white">{t.about.index}</span>
                <span className="h-px w-8 bg-produ-ink-600" aria-hidden />
                <span>{t.about.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-6 font-sans text-display-md font-bold uppercase tracking-tightest text-produ-white">
                {t.about.titleTop}
                <br />
                <span className="text-produ-ink-300">
                  {t.about.titleBottom}
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 hidden lg:block">
                <LogoMark className="h-24 w-24 text-produ-ink-700" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xl leading-relaxed text-produ-ink-100 md:text-2xl">
                {t.about.lead}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 text-base leading-relaxed text-produ-ink-300 md:text-lg">
                {t.about.body}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
