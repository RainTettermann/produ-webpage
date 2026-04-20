import { Reveal } from "./Reveal";

type SectionHeaderProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
};

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "mx-auto max-w-3xl text-center" : "";
  return (
    <div className={["max-w-4xl", alignClass].join(" ")}>
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-produ-ink-300">
          <span className="text-produ-accent">{index}</span>
          <span className="h-px w-8 bg-produ-ink-600" aria-hidden />
          <span>{eyebrow}</span>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-6 font-sans text-display-md font-bold uppercase tracking-tightest text-produ-white">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-produ-ink-200 md:text-xl">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
