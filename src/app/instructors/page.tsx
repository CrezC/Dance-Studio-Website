import Image from "next/image";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default async function InstructorsPage() {
  const instructors = await prisma.instructor.findMany({
    include: { classes: { orderBy: { name: "asc" } } },
    orderBy: { name: "asc" },
  });

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 lg:px-8 lg:pt-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Instructors</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl tracking-tight text-balance text-foreground sm:text-5xl">
          Taught by working dancers, not just teachers.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Every instructor at Cadence still performs, choreographs, or competes — they bring
          that into the room every class.
        </p>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map((instructor) => (
              <div key={instructor.slug} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-4">
                  {instructor.photoUrl ? (
                    <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-muted">
                      <Image
                        src={instructor.photoUrl}
                        alt={instructor.name}
                        fill
                        sizes="56px"
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent/10 font-serif text-lg text-accent"
                    >
                      {initials(instructor.name)}
                    </span>
                  )}
                  <h2 className="font-serif text-xl text-card-foreground">{instructor.name}</h2>
                </div>

                <p className="mt-4 text-sm text-muted-foreground">{instructor.bio}</p>

                {instructor.classes.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
                    {instructor.classes.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/classes/${c.slug}`}
                        className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-accent"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {instructors.length === 0 && (
              <p className="text-muted-foreground">No instructors yet.</p>
            )}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="font-serif text-3xl tracking-tight text-foreground">Ready to train with them?</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Browse the schedule and find a class that fits.
          </p>
          <Link
            href="/classes"
            className={cn(buttonVariants({ size: "lg" }), "mt-6 h-12 rounded-full px-7 text-base")}
          >
            Browse Classes
          </Link>
        </div>
      </section>
    </div>
  );
}
