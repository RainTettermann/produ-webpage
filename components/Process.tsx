"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { SECTION_IDS } from "@/lib/sections";
import { useT } from "./LanguageProvider";

export function Process() {
  const t = useT();

  return (
    <section
      id={SECTION_IDS.process}
      className="relative scroll-mt-20 border-t border-produ-ink-700 bg-produ-ink-900 py-24 md:py-32"
    >
      {/* subtle ambient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(40% 60% at 85% 10%, rgba(255,255,255,0.04), transparent 70%)"
        }}
      />

      <div className="container-wide relative">
        <SectionHeader
          index={t.process.index}
          eyebrow={t.process.eyebrow}
          title={
            <>
              {t.process.titleTop}
              <br />
              <span className="text-produ-ink-300">{t.process.titleBottom}</span>
            </>
          }
          description={t.process.description}
        />

        <ol className="mt-16 grid gap-px bg-produ-ink-700 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <Reveal key={step.index} delay={0.06 * i} as="li" className="bg-produ-ink-900">
              <article className="group relative flex h-full flex-col p-8 md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-5xl font-black tracking-tightest text-produ-white md:text-6xl">
                    {step.index}
                  </span>
                  <span
                    aria-hidden
                    className="h-2 w-2 bg-produ-white opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>

                <h3 className="mt-10 font-sans text-xl font-bold uppercase tracking-tighter text-produ-white md:text-2xl">
                  {step.name}
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-produ-white">
                  {step.summary}
                </p>
                <p className="mt-6 text-sm leading-relaxed text-produ-ink-200 md:text-base">
                  {step.body}
                </p>

                <span
                  aria-hidden
                  className="mt-auto block h-px w-12 origin-left scale-x-50 bg-produ-ink-500 transition-transform duration-500 group-hover:scale-x-100"
                />
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
