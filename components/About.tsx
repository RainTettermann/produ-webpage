"use client";

import { Reveal } from "./Reveal";
import { SECTION_IDS } from "@/lib/sections";
import { LogoMark } from "./Logo";

const PILLARS = [
  {
    label: "Technical production",
    copy: "Rigging, power, video, light, kinetics. We engineer shows that hold up to real-world load and real-world deadlines."
  },
  {
    label: "Visual design",
    copy: "Art direction for live: content systems, motion design, lighting language, colour, and on-brand visual hierarchy."
  },
  {
    label: "Spatial thinking",
    copy: "Every venue has a geometry. We read it — sightlines, height, acoustics, flow — and compose the experience around it."
  },
  {
    label: "Installation craft",
    copy: "Site-specific objects, screens, and light. Pieces that work as artwork on their own and as environment when the room fills."
  },
  {
    label: "Live experience",
    copy: "From doors open to close. Tempo, pacing, surprise, and the quiet moments between. Production as dramaturgy."
  }
];

export function About() {
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
                <span className="text-produ-accent">01</span>
                <span className="h-px w-8 bg-produ-ink-600" aria-hidden />
                <span>About / What is PRODU</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-6 font-sans text-display-md font-bold uppercase tracking-tightest text-produ-white">
                A creative AV studio —<br />
                <span className="text-produ-ink-300">
                  technical, spatial, intentional.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 hidden lg:block">
                <LogoMark className="h-24 w-24 text-produ-ink-700" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <p className="text-xl leading-relaxed text-produ-ink-100 md:text-2xl">
                PRODU is a creative audiovisual studio working at the
                intersection of technical production, visual design and
                spatial thinking. We design, build and run live experiences —
                from festival main stages and club nights to installations
                and long-form environments.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-produ-ink-300 md:text-lg">
                Our focus is alternative and electronic music culture: rooms
                where sound, light and space have to behave as one medium.
                We&apos;re not a vendor. We&apos;re a studio that shapes how
                the moment feels.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-px bg-produ-ink-700 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <Reveal key={p.label} delay={0.05 * i} className="bg-produ-black p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-produ-white">
                      {p.label}
                    </h3>
                    <span className="font-mono text-[11px] text-produ-ink-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-produ-ink-200 md:text-base">
                    {p.copy}
                  </p>
                </Reveal>
              ))}
              {/* fills the grid neatly when 5 items */}
              <div className="hidden bg-produ-black sm:block" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
