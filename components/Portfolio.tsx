"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { SECTION_IDS } from "@/lib/sections";
import { useT } from "./LanguageProvider";

const IMAGES: Record<string, { src: string; tall?: boolean }> = {
  P01: { src: "/imagery/SEASIDE_CHRIS_LAKE.png", tall: true },
  P02: { src: "/imagery/ILS_23_Loojangulava.jpg" },
  P03: { src: "/imagery/PRODU_X.jpg" },
  P04: { src: "/imagery/mm_koue.jpg", tall: true },
  P05: { src: "/imagery/Nublu_Live.png" },
  P06: { src: "/imagery/TDS_22.jpg" }
};

export function Portfolio() {
  const t = useT();

  return (
    <section
      id={SECTION_IDS.work}
      className="relative scroll-mt-20 border-t border-produ-ink-700 bg-produ-black py-24 md:py-32"
    >
      <div className="container-wide">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <SectionHeader
            index={t.work.index}
            eyebrow={t.work.eyebrow}
            title={
              <>
                {t.work.titleTop}
                <br />
                <span className="text-produ-ink-300">{t.work.titleBottom}</span>
              </>
            }
          />
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-produ-ink-300">
              {t.work.selection}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-6 md:gap-4">
          {t.work.projects.map((p, i) => {
            const meta = IMAGES[p.id] ?? { src: "/imagery/SEASIDE_CHRIS_LAKE.png" };
            return (
              <ProjectCard
                key={p.id}
                project={{
                  id: p.id,
                  name: p.name,
                  category: p.category,
                  year: p.year,
                  description: p.description,
                  image: meta.src,
                  tall: meta.tall
                }}
                index={i}
              />
            );
          })}
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col gap-4 border-t border-produ-ink-700 pt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-produ-ink-300 md:flex-row md:items-center md:justify-between">
            <span>{t.work.more}</span>
            <a
              href="#contact"
              className="text-produ-white underline-offset-4 transition-colors hover:underline"
            >
              {t.work.cta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  description: string;
  image: string;
  tall?: boolean;
};

function ProjectCard({
  project,
  index
}: {
  project: Project;
  index: number;
}) {
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
          <div className="absolute inset-0 bg-gradient-to-t from-produ-black/80 via-produ-black/20 to-transparent" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[11px] uppercase tracking-[0.2em] text-produ-ink-100">
            <span>{project.id}</span>
            <span className="text-produ-ink-200">{project.year}</span>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-3 p-6 md:p-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-produ-white">
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
          className="absolute bottom-0 left-0 h-px w-0 bg-produ-white transition-[width] duration-700 ease-out group-hover:w-full"
        />
      </motion.article>
    </Reveal>
  );
}
