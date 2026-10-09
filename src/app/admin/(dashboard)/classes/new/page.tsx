import { prisma } from "@/lib/prisma";
import { ClassForm } from "../class-form";
import { createClass } from "../actions";

export default async function NewClassPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;
  const instructors = await prisma.instructor.findMany({ orderBy: { name: "asc" } });

  return (
    <div>
      <h1 className="font-serif text-3xl tracking-tight text-foreground">New class</h1>
      <ClassForm action={createClass} instructors={instructors} error={error} />
    </div>
  );
}
