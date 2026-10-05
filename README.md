# Dance Studio Website

A website for a local dance/fitness studio and event rental space: class
browsing with external registration links, instructor info, a liability
waiver flow, and an event rental inquiry form. Built with Next.js (App
Router), TypeScript, Tailwind CSS, and Prisma (SQLite in dev).

See the [product design doc](#) for the full scope and MVP decisions.

## Pages

- `/` — Home
- `/about` — About the studio
- `/classes`, `/classes/[slug]` — Class listing and detail (DB-backed)
- `/instructors` — Instructor bios (DB-backed)
- `/event-rental` — Event rental info + inquiry form (writes to DB)
- `/faq` — FAQ
- `/contact` — Contact info

## Data model

Defined in `prisma/schema.prisma`:

- `Instructor`, `Class` — course catalog shown on the site
- `EventRentalInquiry` — submissions from the event rental contact form
- `WaiverSubmission` — schema in place for the liability waiver e-signature
  flow (not yet wired to a UI)

Dev database is SQLite (zero setup); swap the `datasource` in
`schema.prisma` to Postgres for production without changing the models.

## Status

Routing, data model, and the class/instructor/event-rental pages are wired
to the database. Not yet built: real content/design, the admin CMS, the
waiver e-signature UI, and payment integration (see the execution plan in
the design doc).

## Getting Started

```bash
npm install
cp .env.example .env
npm run db:migrate   # creates prisma/dev.db and applies migrations
npm run db:seed       # seeds sample instructors/classes
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run db:migrate` — create/apply Prisma migrations
- `npm run db:seed` — seed the database with sample data
- `npm run db:studio` — browse the database in Prisma Studio
