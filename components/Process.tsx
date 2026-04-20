"use client";

import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { SECTION_IDS } from "@/lib/sections";

const STEPS = [
  {
    index: "01",
    name: "Concept",
    summary: "Brief, reference, ambition.",
    body:
      "We start with the feeling the night has to produce. Audience, venue, music, budget — everything feeds a single creative brief that the whole team can point at."
  },
  {
    index: "02",
    name: "Design",
    summary: "Stage, light, motion, content.",
    body:
      "Visual language, stage architecture, lighting scheme and content systems. We design as one object — every layer aware of every other layer."
  },
  {
    index: "03",
    name: "Delivery",
    summary: "Engineering, build, programming.",
    body:
      "Rigging, power, video, lighting, kinetics and control. We plan the logistics, fabricate the custom bits and program the show until it behaves."
  },
  {
    index: "04",
    name: "Experience",
    summary: "Show time, show energy, show safety.",
    body:
      "On the night, we run it: cues, timing, crowd response, the unplanned moments. Then we document, debrief and turn it into craft for the next one."
  }
];

export function Process() {
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
            "radial-gradient(40% 60% at 85% 10%, rgba(26,232,95,0.06), transparent 70%)"
        }}
      />

      <div className="container-wide relative">
        <SectionHeader
          index="03"
          eyebrow="Process"
          title={
            <>
              How we work —<br />
              <span className="text-produ-ink-300">four stages, one studio voice.</span>
            </>
          }
          description="PRODU doesn’t just supply equipment. We build complete experiences, end-to-end — creative and technical held by the same hands."
        />

        <ol className="mt-16 grid gap-px bg-produ-ink-700 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.index} delay={0.06 * i} as="li" className="bg-produ-ink-900">
              <article className="group relative flex h-full flex-col p-8 md:p-10">
                <div className="flex items-baseline justify-between">
                  <span className="font-sans text-5xl font-black tracking-tightest text-produ-white md:text-6xl">
                    {step.index}
                  </span>
                  <span
                    aria-hidden
                    className="h-2 w-2 bg-produ-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>

                <h3 className="mt-10 font-sans text-xl font-bold uppercase tracking-tighter text-produ-white md:text-2xl">
                  {step.name}
                </h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-produ-accent">
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
