"use client";

import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SectionHeader } from "./SectionHeader";
import { SECTION_IDS } from "@/lib/sections";
import { useT } from "./LanguageProvider";

export function Services() {
  const t = useT();

  return (
    <section
      id={SECTION_IDS.services}
      className="relative scroll-mt-20 border-t border-produ-ink-700 bg-produ-black py-24 md:py-32"
    >
      <div className="container-wide">
        <SectionHeader
          index={t.services.index}
          eyebrow={t.services.eyebrow}
          title={
            <>
              {t.services.titleTop}
              <br />
              <span className="text-produ-ink-300">{t.services.titleBottom}</span>
            </>
          }
          description={t.services.description}
        />

        <div className="mt-16 grid gap-px bg-produ-ink-700 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => (
            <ServiceCard
              key={s.code}
              index={i}
              total={t.services.items.length}
              code={s.code}
              title={s.title}
              description={s.description}
              tags={s.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  code,
  title,
  description,
  tags,
  index,
  total
}: {
  code: string;
  title: string;
  description: string;
  tags: string[];
  index: number;
  total: number;
}) {
  return (
    <Reveal delay={0.04 * index} className="relative">
      <motion.article
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="group relative flex h-full flex-col bg-produ-black p-8 md:p-10"
      >
        {/* hover bar */}
        <span
          aria-hidden
          className="absolute left-0 top-0 h-px w-0 bg-produ-white transition-[width] duration-500 ease-out group-hover:w-full"
        />

        <header className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em]">
          <span className="text-produ-ink-400">{code}</span>
          <span className="text-produ-ink-500">
            {String(index + 1).padStart(2, "0")} /{" "}
            {total.toString().padStart(2, "0")}
          </span>
        </header>

        <h3 className="mt-10 font-sans text-2xl font-bold uppercase leading-tight tracking-tighter text-produ-white md:text-3xl">
          {title}
        </h3>

        <p className="mt-5 text-sm leading-relaxed text-produ-ink-200 md:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2 pt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="border border-produ-ink-600 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-produ-ink-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.article>
    </Reveal>
  );
}
