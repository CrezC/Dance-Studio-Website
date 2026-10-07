import type { Class, Instructor } from "@prisma/client";
import { ClassCard } from "@/components/class-card";

export function ClassesSection({
  classes,
  title = "Featured classes",
  description = "Drop in or save with a class pack. All levels welcome unless noted.",
}: {
  classes: (Class & { instructor: Instructor })[];
  title?: string;
  description?: string;
}) {
  return (
    <section id="classes" aria-labelledby="classes-heading" className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">This week</p>
            <h2 id="classes-heading" className="mt-3 font-serif text-4xl tracking-tight text-foreground">
              {title}
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">{description}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c) => (
            <ClassCard key={c.slug} danceClass={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
