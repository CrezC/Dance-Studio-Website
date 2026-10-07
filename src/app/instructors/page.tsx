import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function InstructorsPage() {
  const instructors = await prisma.instructor.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <h1 className="font-serif text-4xl tracking-tight text-foreground">Instructors</h1>
      <ul className="mt-8 space-y-8">
        {instructors.map((instructor) => (
          <li key={instructor.slug} className="border-t border-border pt-6 first:border-t-0 first:pt-0">
            <h2 className="font-serif text-xl text-foreground">{instructor.name}</h2>
            <p className="mt-1 text-muted-foreground">{instructor.bio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
