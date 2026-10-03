# Dance Studio Website

A website for a local dance/fitness studio and event rental space: class
browsing with external registration links, instructor info, a liability
waiver flow, and an event rental inquiry form. Built with Next.js (App
Router), TypeScript, and Tailwind CSS.

See the [product design doc](#) for the full scope and MVP decisions.

## Pages

- `/` — Home
- `/about` — About the studio
- `/classes`, `/classes/[slug]` — Class listing and detail
- `/instructors` — Instructor bios
- `/event-rental` — Event rental info + inquiry form
- `/faq` — FAQ
- `/contact` — Contact info

## Status

Early scaffold: routing, types (`src/lib/types.ts`), and placeholder data
(`src/lib/data.ts`) are in place. Not yet built: real content/design, the
admin CMS, liability waiver e-signature flow, and payment integration (see
the execution plan in the design doc).

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
