import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const availabilityLabel: Record<string, string> = {
  OPEN: "open",
  LIMITED: "limited",
  FULL: "full",
};

export default async function ClassesPage() {
  const classes = await prisma.class.findMany({
    include: { instructor: true },
    orderBy: { name: "asc" },
  });

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Classes</h1>
      <ul className="mt-8 divide-y divide-black/10 dark:divide-white/10">
        {classes.map((c) => (
          <li key={c.slug} className="py-6">
            <Link href={`/classes/${c.slug}`} className="text-lg font-medium hover:underline">
              {c.name}
            </Link>
            <p className="mt-1 text-sm text-black/60 dark:text-white/60">
              {c.dayOfWeek} · {c.startTime}–{c.endTime} · {c.instructor.name} · {c.price}
            </p>
            <p
              className={`mt-1 text-xs uppercase tracking-wide ${
                c.availability === "FULL" ? "text-red-600" : "text-green-700"
              }`}
            >
              {availabilityLabel[c.availability]}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
