# Dance Studio Website

A website for a local dance/fitness studio and event rental space: class
browsing with external registration links, instructor info, a liability
waiver flow, an event rental inquiry form, and an admin area to manage it
all. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Prisma
(SQLite in dev).

See the [product design doc](#) for the full scope and MVP decisions.

## Pages

- `/` — Home
- `/about` — About the studio
- `/classes`, `/classes/[slug]` — Class listing and detail (DB-backed)
- `/instructors` — Instructor bios (DB-backed)
- `/event-rental` — Event rental info + inquiry form (writes to DB)
- `/waiver` — Liability waiver e-signature (self or parent/guardian for a minor)
- `/faq` — FAQ
- `/contact` — Contact info
- `/admin` — Password-protected dashboard (see below)

## Admin area

`/admin` is gated behind a single shared password (`ADMIN_PASSWORD` in
`.env`) — there's no per-user login yet, just one studio-owner account, via
a signed session cookie (see `src/lib/auth.ts` and `src/proxy.ts`).

- **Dashboard** (`/admin`) — counts for classes, instructors, new rental
  inquiries, and signed waivers
- **Classes** (`/admin/classes`) — add/edit/delete, matching the MVP's
  "Admin can manage classes" requirement
- **Instructors** (`/admin/instructors`) — add/edit/delete (blocked if the
  instructor still has classes assigned)
- **Event Rental** (`/admin/event-rental`) — view inquiries, mark
  contacted/closed
- **Waivers** (`/admin/waivers`) — read-only list of signed waivers (it's a
  compliance record, not editable data)

## Data model

Defined in `prisma/schema.prisma`:

- `Instructor`, `Class` — course catalog shown on the site
- `EventRentalInquiry` — submissions from the event rental contact form
- `WaiverSubmission` — signed liability waivers, including the waiver text
  version signed and (when available) the signer's IP

Dev database is SQLite (zero setup); swap the `datasource` in
`schema.prisma` to Postgres for production without changing the models.

## Status

Routing, data model, the public pages, the waiver flow, and a basic admin
CRUD are all wired up and DB-backed. Not yet built: real content/design
for every page, payment integration, and the full instructor
onboarding/account flow (deferred to V2 per the design doc).

## Getting Started

```bash
npm install
cp .env.example .env   # then set a real ADMIN_PASSWORD and ADMIN_SESSION_SECRET
npm run db:migrate     # creates prisma/dev.db and applies migrations
npm run db:seed        # seeds sample instructors/classes
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), or
[http://localhost:3000/admin](http://localhost:3000/admin) for the admin
area (log in with the `ADMIN_PASSWORD` from your `.env`).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run db:migrate` — create/apply Prisma migrations
- `npm run db:seed` — seed the database with sample data
- `npm run db:studio` — browse the database in Prisma Studio
