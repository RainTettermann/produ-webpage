export const SECTION_IDS = {
  hero: "home",
  about: "about",
  services: "services",
  process: "process",
  work: "work",
  why: "why",
  contact: "contact"
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

export const NAV_ITEMS: { id: SectionId; label: string; index: string }[] = [
  { id: SECTION_IDS.about, label: "About", index: "01" },
  { id: SECTION_IDS.services, label: "Services", index: "02" },
  { id: SECTION_IDS.process, label: "Process", index: "03" },
  { id: SECTION_IDS.work, label: "Work", index: "04" },
  { id: SECTION_IDS.why, label: "Why PRODU", index: "05" },
  { id: SECTION_IDS.contact, label: "Contact", index: "06" }
];
