import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const dynamic = "force-dynamic";

export default async function AdminInstructorsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const instructors = await prisma.instructor.findMany({
    include: { _count: { select: { classes: true } } },
    orderBy: { name: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-3xl tracking-tight text-foreground">Instructors</h1>
          <p className="mt-2 text-sm text-muted-foreground">{instructors.length} total</p>
        </div>
        <Link href="/admin/instructors/new" className={cn(buttonVariants(), "rounded-full px-5")}>
          New instructor
        </Link>
      </div>

      {error === "has-classes" && (
        <p className="mt-6 rounded-lg border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
          Can&apos;t delete an instructor who still has classes assigned. Reassign or delete those
          classes first.
        </p>
      )}

      <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
        {instructors.map((instructor) => (
          <Link
            key={instructor.id}
            href={`/admin/instructors/${instructor.id}/edit`}
            className="flex items-center justify-between gap-4 px-6 py-5 transition-colors hover:bg-muted/50"
          >
            <p className="font-serif text-lg text-card-foreground">{instructor.name}</p>
            <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
              {instructor._count.classes} {instructor._count.classes === 1 ? "class" : "classes"}
            </span>
          </Link>
        ))}
        {instructors.length === 0 && (
          <p className="px-6 py-10 text-center text-muted-foreground">No instructors yet.</p>
        )}
      </div>
    </div>
  );
}
