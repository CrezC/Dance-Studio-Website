import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
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
        <h1 className="font-serif text-3xl tracking-tight text-foreground">Classes</h1>
        <Link href="/admin/classes/new" className={cn(buttonVariants(), "rounded-full px-5")}>
          New class
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl border border-border">
        <table className="w-full text-left text-sm">
          <thead className="bg-muted text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Instructor</th>
              <th className="px-4 py-3 font-medium">Schedule</th>
              <th className="px-4 py-3 font-medium">Availability</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {classes.map((c) => (
              <tr key={c.id}>
                <td className="px-4 py-3 text-foreground">{c.name}</td>
                <td className="px-4 py-3 text-muted-foreground">{c.instructor.name}</td>
                <td className="px-4 py-3 text-muted-foreground">
                  {c.dayOfWeek} · {c.startTime}–{c.endTime}
                </td>
                <td className="px-4 py-3 text-muted-foreground capitalize">
                  {c.availability.toLowerCase()}
                </td>
                <td className="px-4 py-3 text-right">
                  <Link href={`/admin/classes/${c.id}/edit`} className="text-primary hover:underline">
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
            {classes.length === 0 && (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                  No classes yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
