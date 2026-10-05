import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { testimonials } from "@/lib/data";

export const dynamic = "force-dynamic";

export default async function Home() {
  const classes = await prisma.class.findMany({
    orderBy: { name: "asc" },
    take: 4,
  });

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <section className="py-12 text-center sm:text-left">
        <h1 className="text-4xl font-semibold tracking-tight">Studio Name</h1>
        <p className="mt-4 max-w-2xl text-lg text-black/70 dark:text-white/70">
          Dance and fitness classes for every age and level, plus event
          rental space for your next gathering.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 sm:justify-start">
          <Link
            href="/classes"
            className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
          >
            Browse Classes
          </Link>
          <Link
            href="/event-rental"
            className="rounded-full border border-black/10 px-5 py-3 text-sm font-medium dark:border-white/20"
          >
            Event Rental
          </Link>
        </div>
      </section>

      <section className="py-12">
        <h2 className="text-2xl font-semibold">Upcoming Classes</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {classes.map((c) => (
            <li
              key={c.slug}
              className="rounded-lg border border-black/10 p-5 dark:border-white/10"
            >
              <Link href={`/classes/${c.slug}`} className="font-medium hover:underline">
                {c.name}
              </Link>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                {c.dayOfWeek} · {c.startTime}–{c.endTime} · {c.price}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {testimonials.length > 0 && (
        <section className="py-12">
          <h2 className="text-2xl font-semibold">What Students Say</h2>
          <ul className="mt-6 space-y-4">
            {testimonials.map((t) => (
              <li key={t.author} className="italic text-black/70 dark:text-white/70">
                &ldquo;{t.quote}&rdquo; — {t.author}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
