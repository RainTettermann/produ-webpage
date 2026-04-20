"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { SECTION_IDS } from "@/lib/sections";

const REASONS = [
  {
    index: "01",
    title: "Creative + technical under one roof",
    body:
      "Stages fall apart when creative and technical speak different languages. At PRODU they speak the same one, and they live in the same studio.",
    keyword: "integrated"
  },
  {
    index: "02",
    title: "A strong visual identity",
    body:
      "Every show gets art direction. We don't render what's on the timeline — we compose a look, a mood and a memory that belongs to the night.",
    keyword: "art-directed"
  },
  {
    index: "03",
    title: "Custom solutions, not catalogue",
    body:
      "We build what the idea needs, not what fits a rental list. Custom fabrication, custom programming, custom control when the stock answer isn't good enough.",
    keyword: "bespoke"
  },
  {
    index: "04",
    title: "Execution you can bet on",
    body:
      "Timelines, load-ins, backup plans, show cues. The quiet parts of production we treat as seriously as the creative. That's what separates ambition from spectacle.",
    keyword: "reliable"
  }
];

export function WhyProdu() {
  return (
    <section
      id={SECTION_IDS.why}
      className="relative scroll-mt-20 border-t border-produ-ink-700 bg-produ-black py-24 md:py-32"
    >
      <div className="container-wide">
        <SectionHeader
          index="05"
          eyebrow="Why PRODU"
          title={
            <>
              What you get —<br />
              <span className="text-produ-ink-300">a studio, not a supplier.</span>
            </>
          }
          description="Four reasons clients keep coming back. They're not pitch points; they're how the studio is set up, at the bone level."
        />

        <div className="mt-16 grid gap-px bg-produ-ink-700 md:mt-20 md:grid-cols-2">
          {REASONS.map((r, i) => (
            <Reveal key={r.index} delay={0.05 * i} className="bg-produ-black">
              <article className="group relative flex h-full items-start gap-6 p-8 md:p-10">
                <span
                  aria-hidden
                  className="mt-2 h-2 w-2 shrink-0 bg-produ-accent transition-transform duration-500 group-hover:scale-150"
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
