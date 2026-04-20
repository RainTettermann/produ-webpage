"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { SECTION_IDS } from "@/lib/sections";
import { Button } from "./Button";
import { useT } from "./LanguageProvider";

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
  const t = useT();
  const [state, setState] = useState<FormState>("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    try {
      await new Promise((r) => setTimeout(r, 900));
      setState("sent");
    } catch {
      setState("error");
    }
  };

  return (
    <section
      id={SECTION_IDS.contact}
      className="relative scroll-mt-20 overflow-hidden border-t border-produ-ink-700 bg-produ-black py-24 md:py-32"
    >
      {/* atmospheric backdrop */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 1.5 }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_60%,rgba(255,255,255,0.05),transparent_70%)]" />
      </motion.div>

      <div className="container-wide relative">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-produ-ink-300">
                <span className="text-produ-white">{t.contact.index}</span>
                <span className="h-px w-8 bg-produ-ink-600" aria-hidden />
                <span>{t.contact.eyebrow}</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="mt-6 font-sans text-display-lg font-black uppercase leading-[0.92] tracking-tightest text-produ-white">
                {t.contact.titleLines[0]}<br />
                {t.contact.titleLines[1]}<br />
                <span className="text-produ-white">{t.contact.titleLines[2]}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-produ-ink-200">
                {t.contact.lead}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <div className="eyebrow">{t.contact.studio}</div>
                  <a
                    href="mailto:hello@produ.studio"
                    className="mt-3 block font-sans text-lg font-medium text-produ-white transition-colors hover:text-produ-ink-200"
                  >
                    hello@produ.studio
                  </a>
                </div>
                <div>
                  <div className="eyebrow">{t.contact.social}</div>
                  <a
                    href="https://instagram.com/produ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 block font-sans text-lg font-medium text-produ-white transition-colors hover:text-produ-ink-200"
                  >
                    @produ
                  </a>
                </div>
                <div>
                  <div className="eyebrow">{t.contact.location}</div>
                  <p className="mt-3 font-sans text-lg font-medium text-produ-white">
                    {t.contact.locationValue}
                  </p>
                </div>
                <div>
                  <div className="eyebrow">{t.contact.availability}</div>
                  <p className="mt-3 flex items-center gap-2 font-sans text-lg font-medium text-produ-white">
                    <span className="h-2 w-2 animate-slow-pulse bg-produ-white" />
                    {t.contact.availabilityValue}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-6 border border-produ-ink-700 bg-produ-ink-900/80 p-8 backdrop-blur md:p-10"
                aria-label={t.contact.inquiry}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-produ-ink-300">
                    {t.contact.inquiry}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-produ-ink-400">
                    {t.contact.optional}
                  </span>
                </div>

                <Field
                  id="name"
                  label={t.contact.name}
                  value={values.name}
                  onChange={(v) => setValues({ ...values, name: v })}
                />
                <Field
                  id="email"
                  type="email"
                  label={t.contact.email}
                  placeholder={t.contact.emailPlaceholder}
                  value={values.email}
                  onChange={(v) => setValues({ ...values, email: v })}
                />
                <Field
                  id="project"
                  label={t.contact.project}
                  value={values.project}
                  onChange={(v) => setValues({ ...values, project: v })}
                />
                <Field
                  id="message"
                  label={t.contact.message}
                  placeholder={t.contact.messagePlaceholder}
                  textarea
                  value={values.message}
                  onChange={(v) => setValues({ ...values, message: v })}
                />

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <div
                    className="font-mono text-[11px] uppercase tracking-[0.2em] text-produ-ink-300"
                    role="status"
                    aria-live="polite"
                  >
                    {state === "idle" && t.contact.reply}
                    {state === "sending" && t.contact.sending}
                    {state === "sent" && (
                      <span className="text-produ-white">{t.contact.sent}</span>
                    )}
                    {state === "error" && (
                      <span className="text-produ-red">{t.contact.error}</span>
                    )}
                  </div>
                  <Button
                    type="submit"
                    variant="solid"
                    disabled={state === "sending"}
                  >
                    {state === "sent" ? t.contact.thanks : t.contact.submit}
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  type = "text",
  textarea,
  placeholder
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  textarea?: boolean;
  placeholder?: string;
}) {
  return (
    <label htmlFor={id} className="group flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-produ-ink-300 transition-colors group-focus-within:text-produ-white">
        {label}
      </span>
      {textarea ? (
        <textarea
          id={id}
          name={id}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="resize-none border-b border-produ-ink-600 bg-transparent py-2 font-sans text-base text-produ-white placeholder-produ-ink-500 transition-colors focus:border-produ-white focus:outline-none"
          placeholder={placeholder ?? ""}
        />
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-b border-produ-ink-600 bg-transparent py-2 font-sans text-base text-produ-white placeholder-produ-ink-500 transition-colors focus:border-produ-white focus:outline-none"
          placeholder={placeholder ?? ""}
        />
      )}
    </label>
  );
}
