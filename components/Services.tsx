"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { SECTION_IDS } from "@/lib/sections";

type Service = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  future?: boolean;
};

const SERVICES: Service[] = [
  {
    code: "S.01",
    title: "Audiovisual production",
    description:
      "Full-stack production for live events — technical planning, crew, equipment and on-site execution. One partner from first sketch to strike.",
    tags: ["Planning", "Crew", "Equipment", "On-site"]
  },
  {
    code: "S.02",
    title: "Stage & visual concept",
    description:
      "Stage architecture and visual identity for festivals, tours and one-night rooms. We design the silhouette, the language and the moments that get shared.",
    tags: ["Art direction", "Stage design", "Concept"]
  },
  {
    code: "S.03",
    title: "Light, video & screens",
    description:
      "Lighting design, LED and projection solutions, content pipelines and media servers. Spatial light that plays with — not against — the music.",
    tags: ["LD", "LED", "Projection", "Media servers"]
  },
  {
    code: "S.04",
    title: "Installations & spatial work",
    description:
      "Site-specific AV installations, light objects and immersive rooms. Pieces that turn architecture into instrument.",
    tags: ["Site-specific", "Immersive", "Objects"]
  },
  {
    code: "S.05",
    title: "Event technical & creative lead",
    description:
      "Creative and technical direction for events of any scale. We hold the vision, the timeline and the edge cases so the promoter doesn’t have to.",
    tags: ["Creative direction", "TD", "Production"]
  },
  {
    code: "S.06",
    title: "Permanent AV · VR · AR",
    description:
      "Fixed AV installations for venues, interactive environments and emerging format work — VR / AR / real-time. Longer horizons, deeper integration.",
    tags: ["Permanent", "Interactive", "Real-time"],
    future: true
  }
];

export function Services() {
  return (
    <section
      id={SECTION_IDS.services}
      className="relative scroll-mt-20 border-t border-produ-ink-700 bg-produ-black py-24 md:py-32"
    >
      <div className="container-wide">
        <SectionHeader
          index="02"
          eyebrow="Services"
          title={
            <>
              What we do —<br />
              <span className="text-produ-ink-300">six disciplines, one studio.</span>
            </>
          }
          description="We work across the stack: strategy, design, engineering and delivery. The through-line is taste and technical rigour."
        />

        <div className="mt-16 grid gap-px bg-produ-ink-700 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.code} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={0.04 * index} className="relative">
      <motion.article
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="group relative flex h-full flex-col bg-produ-black p-8 md:p-10"
      >
        {/* accent hover bar */}
        <span
          aria-hidden
          className="absolute left-0 top-0 h-px w-0 bg-produ-accent transition-[width] duration-500 ease-out group-hover:w-full"
        />

        <header className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="text-produ-ink-400">{service.code}</span>
          {service.future ? (
            <span className="inline-flex items-center gap-2 border border-produ-accent/40 px-2 py-1 text-[10px] text-produ-accent">
              <span className="h-1.5 w-1.5 animate-slow-pulse bg-produ-accent" />
              Future
            </span>
          ) : (
            <span className="text-produ-ink-500">
              {String(index + 1).padStart(2, "0")} / {SERVICES.length.toString().padStart(2, "0")}
            </span>
          )}
        </header>

        <h3 className="mt-10 font-sans text-2xl font-bold uppercase leading-tight tracking-tighter text-produ-white md:text-3xl">
          {service.title}
        </h3>

        <p className="mt-5 text-sm leading-relaxed text-produ-ink-200 md:text-base">
          {service.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2 pt-6">
          {service.tags.map((t) => (
            <span
              key={t}
              className="border border-produ-ink-600 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-produ-ink-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-10">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-produ-ink-300 transition-colors group-hover:text-produ-white">
            Capability detail
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </motion.article>
    </Reveal>
  );
}
