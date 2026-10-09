# Dance Studio Website

A website for a local dance/fitness studio and event rental space: class
browsing with external registration links, instructor info, a liability
waiver flow, an event rental inquiry form, and an admin area to manage it
all. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Prisma
(Postgres).

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

## Status

Routing, data model, the public pages, the waiver flow, and a basic admin
CRUD are all wired up and DB-backed. Not yet built: real studio content
(the address, pricing, and studio story are placeholders), payment
integration, and the full instructor onboarding/account flow (deferred to
V2 per the design doc).

## Getting Started

You need a Postgres database — either local or a free hosted one (see
[Deploying](#deploying) for a hosted option that also works for local dev).

```bash
npm install
cp .env.example .env   # set DATABASE_URL, ADMIN_PASSWORD, ADMIN_SESSION_SECRET
npm run db:migrate     # applies migrations
npm run db:seed        # seeds sample instructors/classes
npm run dev
```

Open [http://localhost:3000](http://localhost:3000), or
[http://localhost:3000/admin](http://localhost:3000/admin) for the admin
area (log in with the `ADMIN_PASSWORD` from your `.env`).

### Local Postgres with Docker

If you don't already have Postgres running locally:

```bash
docker run --name dance-studio-db -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=dance_studio -p 5432:5432 -d postgres:16
```

Then set `DATABASE_URL="postgresql://postgres:postgres@localhost:5432/dance_studio?schema=public"`
in `.env`.

## Deploying

Deployed on [Vercel](https://vercel.com):

1. Push this repo to GitHub (already done) and import it in Vercel.
2. Add a Postgres database — easiest is Vercel's **Storage** tab → add the
   **Neon** (Postgres) integration, which sets `DATABASE_URL` for you
   automatically. (Neon's free tier works fine for this project and for
   local dev too, if you'd rather not run Postgres locally.)
3. In **Settings → Environment Variables**, add `ADMIN_PASSWORD` and
   `ADMIN_SESSION_SECRET` (generate the latter with `openssl rand -hex 32`).
4. Deploy. The build runs `prisma migrate deploy` automatically (see
   `package.json`), so the database schema is created/updated on every
   deploy — no manual migration step needed.
5. Run `npm run db:seed` once against the production `DATABASE_URL` (or
   just add your real classes/instructors through `/admin` instead of
   seeding).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — runs `prisma migrate deploy`, then the production build
- `npm run lint` — ESLint
- `npm run db:migrate` — create/apply Prisma migrations (dev)
- `npm run db:seed` — seed the database with sample data
- `npm run db:studio` — browse the database in Prisma Studio
