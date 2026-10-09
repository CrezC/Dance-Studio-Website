import Link from "next/link";
import { Clock } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { AvailabilityBadge } from "@/components/class-card";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminClassesPage() {
  const classes = await prisma.class.findMany({
    include: { instructor: true },
    orderBy: { name: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl tracking-tight text-foreground">Classes</h1>
          <p className="mt-2 text-sm text-muted-foreground">{classes.length} total</p>
        </div>
        <Link href="/admin/classes/new" className={cn(buttonVariants(), "rounded-full px-5")}>
          New class
        </Link>
      </div>

      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
        {classes.map((c) => (
          <Link
            key={c.id}
            href={`/admin/classes/${c.id}/edit`}
            className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-muted/50"
          >
            <div>
              <p className="font-serif text-lg text-card-foreground">{c.name}</p>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Clock className="size-3.5" aria-hidden="true" />
                {c.dayOfWeek} · {c.startTime}–{c.endTime}
                <span className="text-muted-foreground/60">·</span>
                {c.instructor.name}
                <span className="text-muted-foreground/60">·</span>
                {c.price}
              </p>
            </div>
            <AvailabilityBadge availability={c.availability} />
          </Link>
        ))}
        {classes.length === 0 && (
          <p className="px-6 py-10 text-center text-muted-foreground">No classes yet.</p>
        )}
      </div>
    </div>
  );
}
