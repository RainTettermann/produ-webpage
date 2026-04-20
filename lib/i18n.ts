/**
 * PRODU — bilingual content (ET / EN)
 * All user-facing strings live here. Components read via useT().
 */

export type Lang = "et" | "en";

export const LANGS: Lang[] = ["et", "en"];

type NavItem = { id: string; label: string; index: string };

export type Dictionary = {
  nav: {
    items: NavItem[];
    cta: string;
    menuOpen: string;
    menuClose: string;
    backToTop: string;
  };
  hero: {
    status: string;
    tagline: string;
    title: string[]; // three lines, last is muted
    subtitle: string;
    scroll: string;
  };
  about: {
    index: string;
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    lead: string;
    body: string;
  };
  services: {
    index: string;
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    items: { code: string; title: string; description: string; tags: string[] }[];
  };
  process: {
    index: string;
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    steps: { index: string; name: string; summary: string; body: string }[];
  };
  work: {
    index: string;
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    selection: string;
    more: string;
    cta: string;
    projects: { id: string; name: string; category: string; year: string; description: string }[];
  };
  why: {
    index: string;
    eyebrow: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    reasons: { index: string; title: string; body: string; keyword: string }[];
  };
  contact: {
    index: string;
    eyebrow: string;
    titleLines: string[];
    lead: string;
    studio: string;
    social: string;
    location: string;
    locationValue: string;
    availability: string;
    availabilityValue: string;
    inquiry: string;
    optional: string;
    name: string;
    email: string;
    emailPlaceholder: string;
    project: string;
    message: string;
    messagePlaceholder: string;
    reply: string;
    sending: string;
    sent: string;
    error: string;
    submit: string;
    thanks: string;
  };
  footer: {
    description: string;
    navigate: string;
    contact: string;
    status: string;
    rights: string;
  };
};

const NAV_ET: NavItem[] = [
  { id: "about", label: "Meist", index: "01" },
  { id: "work", label: "Tööd", index: "02" },
  { id: "services", label: "Teenused", index: "03" },
  { id: "process", label: "Protsess", index: "04" },
  { id: "why", label: "Miks PRODU", index: "05" },
  { id: "contact", label: "Kontakt", index: "06" }
];

const NAV_EN: NavItem[] = [
  { id: "about", label: "About", index: "01" },
  { id: "work", label: "Selected works", index: "02" },
  { id: "services", label: "Services", index: "03" },
  { id: "process", label: "Process", index: "04" },
  { id: "why", label: "Why PRODU", index: "05" },
  { id: "contact", label: "Contact", index: "06" }
];

export const DICTIONARIES: Record<Lang, Dictionary> = {
  et: {
    nav: {
      items: NAV_ET,
      cta: "Alusta projekti",
      menuOpen: "Ava menüü",
      menuClose: "Sulge menüü",
      backToTop: "PRODU — tagasi algusesse"
    },
    hero: {
      status: "Stuudio avatud — Tallinn",
      tagline: "Lava · Ruum · Valgus",
      title: ["Loome", "hetki, mida", "ruum mäletab."],
      subtitle:
        "PRODU on loov audiovisuaalne stuudio. Kujundame lavasid, valgust ja ruume, kus heli, pilt ja energia käituvad ühe materjalina.",
      scroll: "Keri"
    },
    about: {
      index: "01",
      eyebrow: "Meist",
      titleTop: "Loov AV-stuudio —",
      titleBottom: "tehniline, ruumiline, tahtlik.",
      lead:
        "PRODU sünnib hetkest, kus tehnika kohtub tundega. Kujundame ja ehitame kogemusi, mis muudavad ruumi — festivalilavast kuni installatsioonini, ööklubist kaasaegse lavastuseni.",
      body:
        "Me pole tarnija, me oleme stuudio. Loome keele, milles valgus, heli ja ruum räägivad koos — ja jätame hetke, mis kestab kauem kui sündmus ise."
    },
    services: {
      index: "03",
      eyebrow: "Teenused",
      titleTop: "Mida me teeme —",
      titleBottom: "viis suunda, üks stuudio.",
      description:
        "Töötame kogu ahela ulatuses — ideest teostuseni. Läbiv joon on maitse ja tehniline täpsus.",
      items: [
        {
          code: "01",
          title: "Loovad kontseptsioonid",
          description:
            "Kujundame narratiivi, visuaalse keele ja tundehetked, mis annavad igale sündmusele oma hääle.",
          tags: ["Kontseptsioon", "Kunstisuund", "Narratiiv"]
        },
        {
          code: "02",
          title: "Lavadisain",
          description:
            "Skulptuuriline lavaarhitektuur — struktuur, siluett ja valgusest kantud vorm, mis elab nii publiku kui kaamera silmis.",
          tags: ["Lava-arhitektuur", "Skulptuur", "Visuaal"]
        },
        {
          code: "03",
          title: "Ruumidisain",
          description:
            "Ruumi kui instrumendi loomine: sisenemine, rütm, vaade ja atmosfäär — ruum, mis viib publiku läbi loo.",
          tags: ["Ruumiline kogemus", "Atmosfäär", "Detail"]
        },
        {
          code: "04",
          title: "Sündmuse produktsioon",
          description:
            "Tehniline ja loov juhtimine algusest lõpuni — plaan, meeskond, teostus ja täpsus reaalsetes tingimustes.",
          tags: ["Produktsioon", "Meeskond", "Teostus"]
        },
        {
          code: "05",
          title: "Audiovisuaalsed lahendused",
          description:
            "Valgus, video, LED, projektsioon ja meediasüsteemid — spetsialistide tehtud lahendused, mis töötavad koos muusikaga.",
          tags: ["Valgus", "Video", "LED", "Meedia"]
        }
      ]
    },
    process: {
      index: "04",
      eyebrow: "Protsess",
      titleTop: "Kuidas me töötame —",
      titleBottom: "neli etappi, üks stuudio hääl.",
      description:
        "Me ei tarni tehnikat. Ehitame terviklikke kogemusi — loov ja tehniline pool on samades kätes, algusest lõpuni.",
      steps: [
        {
          index: "01",
          name: "Kontseptsioon",
          summary: "Brief, viited, ambitsioon.",
          body:
            "Alustame tundest, mida õhtu peab tekitama. Publik, ruum, muusika, eelarve — kõik koondub ühe loovbriefi alla, mida kogu meeskond jagab."
        },
        {
          index: "02",
          name: "Disain",
          summary: "Lava, valgus, liikumine, sisu.",
          body:
            "Visuaalne keel, lavaarhitektuur, valguslahendus ja sisusüsteemid. Disainime kõike ühe tervikuna — iga kiht teadvustab teist."
        },
        {
          index: "03",
          name: "Teostus",
          summary: "Inseneritöö, ehitus, programmeerimine.",
          body:
            "Rigid, elekter, video, valgus, kineetika ja juhtimine. Planeerime logistika, ehitame erilahendused ja programmeerime show'd nii kaua, kuni see käitub."
        },
        {
          index: "04",
          name: "Elamus",
          summary: "Show, energia, turvalisus.",
          body:
            "Õhtul juhime sündmust: cue'd, ajastus, publiku reaktsioon ja planeerimata hetked. Pärast dokumenteerime, õpime ja kanname edasi."
        }
      ]
    },
    work: {
      index: "02",
      eyebrow: "Valitud tööd",
      titleTop: "Hetked, mida ehitasime —",
      titleBottom: "ruumidele, mis loevad.",
      selection: "Valik — 2022–2024",
      more: "Rohkem tulemas — portfoolio kasvab pidevalt.",
      cta: "Küsi case study →",
      projects: [
        {
          id: "P01",
          name: "Seaside — peasava visuaalid",
          category: "Festival · Visuaalid",
          year: "2024",
          description:
            "Generatiivne visuaalne keel elektroonilise muusikafestivali peasavale — sisusüsteem, mis elab tempo, värvi ja silmapiiri rütmis."
        },
        {
          id: "P02",
          name: "Loojangulava — immersiivne lava",
          category: "Lavakontseptsioon",
          year: "2023",
          description:
            "Immersiivne loojangulava välifestivalile. Skulptuursed LED-jooned, kihilisus ja õhkkond — ilma eesmise trussita."
        },
        {
          id: "P03",
          name: "PRODU X — valgusinstallatsioon",
          category: "LED-installatsioon",
          year: "2024",
          description:
            "Modulaarne LED-objekt ühest korduvast ühikust. Stuudio monogrammi kineetiline joonistus arhitektuurses mõõtkavas."
        },
        {
          id: "P04",
          name: "MM KÕUE — kohaspetsiifiline AV",
          category: "Kohaspetsiifiline keskkond",
          year: "2023",
          description:
            "Kohaspetsiifiline audiovisuaalne keskkond: ruum, heli ja pind — käsitletud ühe pideva instrumendina."
        },
        {
          id: "P05",
          name: "Nublu — live show",
          category: "Tuur · Live visuaalid",
          year: "2024",
          description:
            "Live-show kunstisuund: valguskäsud, sisu, lavaplaan. Disainitud reisima areenide ja festivaliväljade vahel."
        },
        {
          id: "P06",
          name: "TDS — klubi residentuur",
          category: "Klubi · Residentuur",
          year: "2022",
          description:
            "Pidev klubi residentuur — paindlik valguse ja video rigg, mis lubab igal külalisel ruumi oma keeles ümber maalida."
        }
      ]
    },
    why: {
      index: "05",
      eyebrow: "Miks PRODU",
      titleTop: "Mida sa saad —",
      titleBottom: "stuudio, mitte tarnija.",
      description:
        "Neli põhjust, miks kliendid tagasi tulevad. Need pole müügiargumendid — need on stuudio luu ja liha.",
      reasons: [
        {
          index: "01",
          title: "Loov ja tehniline ühe katuse all",
          body:
            "Laval kukub kõik kokku, kui loov ja tehniline räägivad eri keeles. PRODU-s räägivad nad sama keelt — ja istuvad samas ruumis.",
          keyword: "integreeritud"
        },
        {
          index: "02",
          title: "Tugev visuaalne identiteet",
          body:
            "Iga show saab kunstisuuna. Me ei renderda timeline'i — me kujundame tunde, ilme ja mälupildi, mis kuulub just sellele õhtule.",
          keyword: "kunstiline"
        },
        {
          index: "03",
          title: "Erilahendused, mitte kataloog",
          body:
            "Ehitame, mida idee vajab — mitte seda, mis sobib rendi-nimekirja. Eritellimusel tootmine ja programmeerimine, kui tavaline vastus ei kõlba.",
          keyword: "eritellimus"
        },
        {
          index: "04",
          title: "Teostus, millele võib panuse panna",
          body:
            "Ajagraafikud, load-in'id, varuplaanid, show-cue'd. Produktsiooni vaiksemat poolt võtame sama tõsiselt kui loovat. See eristab ambitsiooni spektaaklist.",
          keyword: "usaldusväärne"
        }
      ]
    },
    contact: {
      index: "06",
      eyebrow: "Kontakt",
      titleLines: ["Loome koos", "midagi,", "mida tasub meeles pidada."],
      lead:
        "Festivali peasava, albumi esitlus, klubiresidentuur, alaline installatsioon — kui see elab ruumis koos heli, valguse ja inimestega, saame aidata.",
      studio: "Stuudio",
      social: "Sotsiaalmeedia",
      location: "Asukoht",
      locationValue: "Tallinn · Ülemaailmne",
      availability: "Saadavus",
      availabilityValue: "Broneeritav 2026",
      inquiry: "Projektipäring",
      optional: "Kõik väljad on valikulised",
      name: "Sinu nimi",
      email: "E-post",
      emailPlaceholder: "sina@label.com",
      project: "Projekt / sündmus",
      message: "Räägi oma ideest",
      messagePlaceholder: "Koht, kuupäev, maht, viited…",
      reply: "Vastame 48 tunni jooksul",
      sending: "Saadan…",
      sent: "Saadetud — varsti ühenduses.",
      error: "Midagi läks valesti. Kirjuta meile otse.",
      submit: "Saada päring",
      thanks: "Aitäh"
    },
    footer: {
      description:
        "PRODU on audiovisuaalne produktsioonistuudio, mis ehitab lava-, valgus- ja ruumikogemusi alternatiiv- ja elektroonilise muusika kultuuris.",
      navigate: "Navigeeri",
      contact: "Kontakt",
      status: "Stuudio staatus — saadaval",
      rights: "Kõik õigused kaitstud."
    }
  },
  en: {
    nav: {
      items: NAV_EN,
      cta: "Start a project",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      backToTop: "PRODU — back to top"
    },
    hero: {
      status: "Studio live — Tallinn",
      tagline: "Stage · Space · Light",
      title: ["We build", "moments the", "room remembers."],
      subtitle:
        "PRODU is a creative audiovisual studio. We design stages, light and spaces where sound, image and energy behave as one medium.",
      scroll: "Scroll"
    },
    about: {
      index: "01",
      eyebrow: "About",
      titleTop: "A creative AV studio —",
      titleBottom: "technical, spatial, intentional.",
      lead:
        "PRODU begins where technique meets feeling. We design and build experiences that change the room — from festival stages to installations, clubs to contemporary productions.",
      body:
        "We are not a vendor. We are a studio. We create a language in which light, sound and space speak together — and leave a moment that lasts longer than the event itself."
    },
    services: {
      index: "03",
      eyebrow: "Services",
      titleTop: "What we do —",
      titleBottom: "five disciplines, one studio.",
      description:
        "We work across the stack — from idea to delivery. The through-line is taste and technical rigour.",
      items: [
        {
          code: "01",
          title: "Creative concepts",
          description:
            "We shape the narrative, the visual language and the emotional beats that give every event its own voice.",
          tags: ["Concept", "Art direction", "Narrative"]
        },
        {
          code: "02",
          title: "Stage design",
          description:
            "Sculptural stage architecture — structure, silhouette and light-carried form that reads for both audience and camera.",
          tags: ["Stage architecture", "Sculpture", "Visual"]
        },
        {
          code: "03",
          title: "Space design",
          description:
            "The space as instrument: entrance, rhythm, sightline and atmosphere — a room that walks the audience through a story.",
          tags: ["Spatial experience", "Atmosphere", "Detail"]
        },
        {
          code: "04",
          title: "Event production",
          description:
            "Technical and creative direction end-to-end — plan, crew, execution and precision under real-world conditions.",
          tags: ["Production", "Crew", "Execution"]
        },
        {
          code: "05",
          title: "Audiovisual solutions",
          description:
            "Light, video, LED, projection and media systems — engineered solutions that work in dialogue with the music.",
          tags: ["Light", "Video", "LED", "Media"]
        }
      ]
    },
    process: {
      index: "04",
      eyebrow: "Process",
      titleTop: "How we work —",
      titleBottom: "four stages, one studio voice.",
      description:
        "PRODU doesn't just supply equipment. We build complete experiences — creative and technical held by the same hands, start to finish.",
      steps: [
        {
          index: "01",
          name: "Concept",
          summary: "Brief, reference, ambition.",
          body:
            "We start with the feeling the night has to produce. Audience, venue, music, budget — everything feeds a single creative brief the whole team can point at."
        },
        {
          index: "02",
          name: "Design",
          summary: "Stage, light, motion, content.",
          body:
            "Visual language, stage architecture, lighting scheme and content systems. We design as one object — every layer aware of every other layer."
        },
        {
          index: "03",
          name: "Delivery",
          summary: "Engineering, build, programming.",
          body:
            "Rigging, power, video, lighting, kinetics and control. We plan the logistics, fabricate the custom bits and program the show until it behaves."
        },
        {
          index: "04",
          name: "Experience",
          summary: "Show time, show energy, show safety.",
          body:
            "On the night we run it: cues, timing, crowd response, the unplanned moments. Then we document, debrief and turn it into craft for the next one."
        }
      ]
    },
    work: {
      index: "02",
      eyebrow: "Selected works",
      titleTop: "Moments we built —",
      titleBottom: "for rooms that matter.",
      selection: "A selection — 2022–2024",
      more: "More work coming — portfolio in progress.",
      cta: "Request case studies →",
      projects: [
        {
          id: "P01",
          name: "Seaside — mainstage visuals",
          category: "Festival · Visuals",
          year: "2024",
          description:
            "A generative visual language for an electronic music festival mainstage — content system built around tempo, colour and horizon line."
        },
        {
          id: "P02",
          name: "Loojangulava — immersive stage",
          category: "Stage concept",
          year: "2023",
          description:
            "Immersive sunset stage concept for an outdoor festival. Sculptural LED lines, layered atmospherics, zero front trusses."
        },
        {
          id: "P03",
          name: "PRODU X — light installation",
          category: "Custom LED installation",
          year: "2024",
          description:
            "Modular LED object built from a single repeated unit. A kinetic drawing of the studio monogram at architectural scale."
        },
        {
          id: "P04",
          name: "MM KÕUE — site-specific AV",
          category: "Site-specific environment",
          year: "2023",
          description:
            "Site-specific audiovisual environment: the space, the sound and the surface treated as one continuous instrument."
        },
        {
          id: "P05",
          name: "Nublu — live show",
          category: "Tour · Live visuals",
          year: "2024",
          description:
            "Touring live-show art direction: lighting cues, content, stage plot. Designed to travel between arenas and festival fields."
        },
        {
          id: "P06",
          name: "TDS — club residency",
          category: "Club · Residency",
          year: "2022",
          description:
            "Ongoing club residency — a flexible lighting and video rig that lets each guest re-paint the room in their own visual language."
        }
      ]
    },
    why: {
      index: "05",
      eyebrow: "Why PRODU",
      titleTop: "What you get —",
      titleBottom: "a studio, not a supplier.",
      description:
        "Four reasons clients keep coming back. They're not pitch points; they're how the studio is set up, at the bone level.",
      reasons: [
        {
          index: "01",
          title: "Creative and technical under one roof",
          body:
            "Stages fall apart when creative and technical speak different languages. At PRODU they speak the same one, and they live in the same studio.",
          keyword: "integrated"
        },
        {
          index: "02",
          title: "A strong visual identity",
          body:
            "Every show gets art direction. We don't render what's on the timeline — we compose a look, a mood and a memory that belongs to the night.",
          keyword: "art-directed"
        },
        {
          index: "03",
          title: "Custom solutions, not catalogue",
          body:
            "We build what the idea needs, not what fits a rental list. Custom fabrication, custom programming, custom control when the stock answer isn't good enough.",
          keyword: "bespoke"
        },
        {
          index: "04",
          title: "Execution you can bet on",
          body:
            "Timelines, load-ins, backup plans, show cues. The quiet parts of production we treat as seriously as the creative. That's what separates ambition from spectacle.",
          keyword: "reliable"
        }
      ]
    },
    contact: {
      index: "06",
      eyebrow: "Contact",
      titleLines: ["Let's build", "something", "worth remembering."],
      lead:
        "Festival mainstage, album release, club residency, permanent installation — if it lives in a room with sound, light and people, we can help design and build it.",
      studio: "Studio",
      social: "Social",
      location: "Location",
      locationValue: "Tallinn · Worldwide",
      availability: "Availability",
      availabilityValue: "Booking 2026",
      inquiry: "Project inquiry",
      optional: "All fields optional",
      name: "Your name",
      email: "Email",
      emailPlaceholder: "you@label.com",
      project: "Project / event",
      message: "Tell us about the idea",
      messagePlaceholder: "Venue, date, scope, references…",
      reply: "Reply within 48h",
      sending: "Sending…",
      sent: "Sent — talk soon.",
      error: "Something broke. Email us directly.",
      submit: "Send inquiry",
      thanks: "Thanks"
    },
    footer: {
      description:
        "PRODU is an audiovisual production studio building stage, light, and spatial experiences for alternative and electronic music culture.",
      navigate: "Navigate",
      contact: "Contact",
      status: "Studio status — available",
      rights: "All rights reserved."
    }
  }
};
