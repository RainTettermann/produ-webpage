"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { SECTION_IDS } from "@/lib/sections";
import { useT } from "./LanguageProvider";

export function WhyProdu() {
  const t = useT();

  return (
    <section
      id={SECTION_IDS.why}
      className="relative scroll-mt-20 border-t border-produ-ink-700 bg-produ-black py-24 md:py-32"
    >
      <div className="container-wide">
        <SectionHeader
          index={t.why.index}
          eyebrow={t.why.eyebrow}
          title={
            <>
              {t.why.titleTop}
              <br />
              <span className="text-produ-ink-300">{t.why.titleBottom}</span>
            </>
          }
          description={t.why.description}
        />

        <div className="mt-16 grid gap-px bg-produ-ink-700 md:mt-20 md:grid-cols-2">
          {t.why.reasons.map((r, i) => (
            <Reveal key={r.index} delay={0.05 * i} className="bg-produ-black">
              <article className="group relative flex h-full items-start gap-6 p-8 md:p-10">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 bg-produ-white transition-transform duration-500 group-hover:scale-150"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-sans text-4xl font-black tracking-tightest text-produ-white md:text-5xl">
                      {r.index}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-produ-ink-400">
                      {r.keyword}
                    </span>
                  </div>

                  <h3 className="mt-8 font-sans text-xl font-bold uppercase tracking-tighter text-produ-white md:text-2xl">
                    {r.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-produ-ink-200 md:text-base">
                    {r.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
