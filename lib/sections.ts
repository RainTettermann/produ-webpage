/**
 * PRODU — section id registry.
 * Labels live in lib/i18n.ts (DICTIONARIES[lang].nav.items).
 */
export const SECTION_IDS = {
  hero: "home",
  about: "about",
  work: "work",
  services: "services",
  process: "process",
  why: "why",
  contact: "contact"
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];
