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
        <h1 className="font-serif text-3xl tracking-tight text-foreground">Instructors</h1>
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

      <div className="mt-8 overflow-hidden rounded-2xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Classes</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {instructors.map((instructor) => (
              <tr key={instructor.id}>
                <td className="px-4 py-3 text-foreground">{instructor.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{instructor._count.classes}</td>
                <td className="px-4 py-3 text-right">
                  <Link
                    href={`/admin/instructors/${instructor.id}/edit`}
                    className="text-primary hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
            {instructors.length === 0 && (
              <tr>
                <td colSpan={3} className="px-4 py-8 text-center text-muted-foreground">
                  No instructors yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
