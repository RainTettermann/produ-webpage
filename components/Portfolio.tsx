"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { SECTION_IDS } from "@/lib/sections";

type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tall?: boolean;
};

const PROJECTS: Project[] = [
  {
    id: "P01",
    name: "Seaside — Mainstage visuals",
    category: "Festival · Visuals",
    year: "2024",
    description:
      "A generative visual language for an electronic music festival mainstage — content system built around tempo, color and horizon line.",
    image: "/imagery/SEASIDE_CHRIS_LAKE.png",
    tall: true
  },
  {
    id: "P02",
    name: "Loojangulava — Immersive stage",
    category: "Stage concept",
    year: "2023",
    description:
      "Immersive sunset-stage concept for an outdoor festival. Sculptural LED lines, layered atmospherics, zero front trusses.",
    image: "/imagery/ILS_23_Loojangulava.jpg"
  },
  {
    id: "P03",
    name: "PRODU X — Light installation",
    category: "Custom LED installation",
    year: "2024",
    description:
      "Modular LED object built from a single repeated unit. A kinetic drawing of the studio monogram at architectural scale.",
    image: "/imagery/PRODU_X.jpg"
  },
  {
    id: "P04",
    name: "MM KÕUE — Site-specific AV",
    category: "Site-specific environment",
    year: "2023",
    description:
      "Site-specific audiovisual environment: the space, the sound and the surface treated as one continuous instrument.",
    image: "/imagery/mm_koue.jpg",
    tall: true
  },
  {
    id: "P05",
    name: "Nublu — Live show",
    category: "Tour · Live visuals",
    year: "2024",
    description:
      "Touring live-show art direction: lighting cues, content, stage plot. Designed to travel between arenas and festival fields.",
    image: "/imagery/Nublu_Live.png"
  },
  {
    id: "P06",
    name: "TDS — Club residency",
    category: "Club · Residency",
    year: "2022",
    description:
      "Ongoing club residency — a flexible lighting and video rig that lets each guest re-paint the room in their own visual language.",
    image: "/imagery/TDS_22.jpg"
  }
];

export function Portfolio() {
  return (
    <section
      id={SECTION_IDS.work}
      className="relative scroll-mt-20 border-t border-produ-ink-700 bg-produ-black py-24 md:py-32"
    >
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <SectionHeader
            index="04"
            eyebrow="Selected work"
            title={
              <>
                Moments we built —<br />
                <span className="text-produ-ink-300">for rooms that matter.</span>
              </>
            }
          />
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-produ-ink-300">
              A selection — 2022 – 2024
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-6 md:gap-4">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <Reveal>
          <div className="mt-16 flex items-center justify-between border-t border-produ-ink-700 pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-produ-ink-300">
            <span>More work coming — portfolio in progress.</span>
            <a
              href="#contact"
              className="text-produ-white underline-offset-4 transition-colors hover:text-produ-accent hover:underline"
            >
              Request case studies →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
  // custom layout: alternating wider/tall cells for magazine feel
  const span =
    index === 0
      ? "md:col-span-4 md:row-span-2"
      : project.tall
      ? "md:col-span-2 md:row-span-2"
      : "md:col-span-2 md:row-span-1";

  return (
    <Reveal delay={0.05 * (index % 3)} className={span}>
      <motion.article
        whileHover="hover"
        className="group relative flex h-full min-h-[320px] flex-col overflow-hidden bg-produ-ink-900 md:min-h-[360px]"
      >
        <div className="relative aspect-[4/3] w-full flex-1 overflow-hidden md:aspect-auto">
          <motion.div
            variants={{
              hover: { scale: 1.05 }
            }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover grayscale transition-[filter] duration-700 group-hover:grayscale-0"
              priority={index < 2}
            />
          </motion.div>
          {/* overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-produ-black/80 via-produ-black/20 to-transparent" />
          {/* top meta */}
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[11px] uppercase tracking-[0.2em] text-produ-ink-100">
            <span>{project.id}</span>
            <span className="text-produ-ink-200">{project.year}</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 p-6 md:p-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-produ-accent">
            {project.category}
          </span>
          <h3 className="font-sans text-xl font-bold uppercase tracking-tighter text-produ-white md:text-2xl">
            {project.name}
          </h3>
          <p className="max-w-lg text-sm leading-relaxed text-produ-ink-200">
            {project.description}
          </p>
        </div>

        <span
          aria-hidden
          className="absolute bottom-0 left-0 h-px w-0 bg-produ-accent transition-[width] duration-700 ease-out group-hover:w-full"
        />
      </motion.article>
    </Reveal>
  );
}
