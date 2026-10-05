import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function InstructorsPage() {
  const instructors = await prisma.instructor.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Instructors</h1>
      <ul className="mt-8 space-y-8">
        {instructors.map((instructor) => (
          <li key={instructor.slug}>
            <h2 className="text-lg font-medium">{instructor.name}</h2>
            <p className="mt-1 text-black/70 dark:text-white/70">{instructor.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
