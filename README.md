# PRODU — Studio Website

A modern, premium one-page site for **PRODU**, a creative audiovisual
production studio. Built with Next.js 14 (App Router), React, TypeScript,
Tailwind CSS and Framer Motion.

The design is dark-first, cinematic and minimal, aligned with the PRODU
brand system (monochrome, stencil-O display mark, single signal-green
accent).

---

## Stack

- **Next.js 14** (App Router, React Server Components)
- **React 18** + **TypeScript**
- **Tailwind CSS** with PRODU design tokens (`tailwind.config.ts`)
- **Framer Motion** for reveals, parallax, hover and micro-motion
- Self-hosted **Helvetica Neue** + **PRODU Display** fonts
- Semantic HTML, responsive from 360 px up

---

## Quick start

```bash
# 1. Install deps
npm install

# 2. Run dev server
npm run dev
# → http://localhost:3000

# 3. Production build
npm run build
npm run start
```

Requires **Node 18.17+** (Next 14 minimum).

---

## Structure

```
produ-web/
├─ app/
│  ├─ layout.tsx        # <html>, metadata, Open Graph, fonts
│  ├─ page.tsx          # one-page composition
│  └─ globals.css       # @font-face, utilities, grain/scan effects
├─ components/
│  ├─ Navbar.tsx        # sticky nav, scroll-spy, mobile menu
│  ├─ Hero.tsx          # parallax, stage-light glows, scan line
│  ├─ About.tsx
│  ├─ Services.tsx      # 6 discipline cards, hover accent bar
│  ├─ Process.tsx       # 4 steps
│  ├─ Portfolio.tsx     # magazine-grid project cards (grayscale → color on hover)
│  ├─ WhyProdu.tsx
│  ├─ Contact.tsx       # inquiry form (wire to endpoint)
│  ├─ Footer.tsx
│  ├─ Logo.tsx          # inline SVG wordmark + monogram
│  ├─ Button.tsx
│  ├─ SectionHeader.tsx
│  └─ Reveal.tsx        # motion wrapper respecting prefers-reduced-motion
├─ lib/
│  └─ sections.ts       # section IDs + nav items
└─ public/
   ├─ fonts/            # Helvetica Neue + PRODU Display
   ├─ logos/
   └─ imagery/          # placeholder portfolio images
```

---

## Design tokens

Brand tokens live in two places:

- CSS variables in `app/globals.css` (fonts, base background, accent)
- Tailwind theme in `tailwind.config.ts` (colour scale, motion, type scale)

The accent is a single token — `produ-accent` (`#1AE85F` — signal green).
Keep it as a single jolt per surface. Do not combine it with other brand
signal colours (laser red, UV magenta, cyan blue, amber) in the same
composition.

---

## Wiring the contact form

`components/Contact.tsx` ships with a UI-only `onSubmit` stub. Replace it
with your transport of choice:

- **Resend** (`/app/api/contact/route.ts` + `POST` `fetch`)
- **Formspree**, **Basin**, **Plunk** (single-endpoint POST)
- **Custom SMTP** behind a Next.js route handler

Update the state machine (`idle / sending / sent / error`) accordingly.

---

## SEO

- Metadata, Open Graph and Twitter configured in `app/layout.tsx`.
- Each section uses semantic `<section>` + `id` for anchor links.
- Replace `metadataBase` URL with the live domain before deploy.
- Drop an `og.jpg` (1200 × 630) in `/public` and point `metadata.openGraph.images` to it.

---

## i18n (EN → ET)

Copy is currently in English and lives inline in each component. The
structure is already clean per-section, so adding Estonian is a matter of:

1. Lift strings into `lib/copy.en.ts` and `lib/copy.et.ts`.
2. Switch on locale (e.g. `next-intl` or a simple `?lang=et` toggle).
3. Translate — the brand voice is the same in both languages:
   confident, aesthetic, minimal.

---

## Deployment

Zero config on **Vercel**:

```bash
vercel --prod
```

The site works equally well on any Node 18+ host (Netlify, Fly, Render).
Static export is also viable (`output: "export"`) if you move the form to
an external endpoint.

---

## License

© PRODU. All rights reserved. Brand assets belong to PRODU.
