import Link from "next/link";
import { classes, instructors } from "@/lib/data";

export default function ClassesPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Classes</h1>
      <ul className="mt-8 divide-y divide-black/10 dark:divide-white/10">
        {classes.map((c) => {
          const instructor = instructors.find((i) => i.slug === c.instructorSlug);
          return (
            <li key={c.slug} className="py-6">
              <Link href={`/classes/${c.slug}`} className="text-lg font-medium hover:underline">
                {c.name}
              </Link>
              <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                {c.dayOfWeek} · {c.time} · {instructor?.name} · {c.price}
              </p>
              <p
                className={`mt-1 text-xs uppercase tracking-wide ${
                  c.availability === "full" ? "text-red-600" : "text-green-700"
                }`}
              >
                {c.availability}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
