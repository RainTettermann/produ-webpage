"use client";

import { useLanguage } from "./LanguageProvider";
import { LANGS } from "@/lib/i18n";

type Props = {
  className?: string;
  size?: "sm" | "md";
};

export function LanguageToggle({ className, size = "md" }: Props) {
  const { lang, setLang } = useLanguage();

  const pad = size === "sm" ? "px-2 py-1 text-[10px]" : "px-2.5 py-1.5 text-[11px]";

  return (
    <div
      role="group"
      aria-label="Language"
      className={[
        "inline-flex items-center border border-produ-ink-600 font-mono uppercase tracking-[0.2em]",
        className ?? ""
      ].join(" ")}
    >
      {LANGS.map((code) => {
        const active = code === lang;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={[
              "transition-colors",
              pad,
              active
                ? "bg-produ-white text-produ-black"
                : "text-produ-ink-300 hover:text-produ-white"
            ].join(" ")}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
}
