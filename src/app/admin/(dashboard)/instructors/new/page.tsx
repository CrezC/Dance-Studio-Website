import { InstructorForm } from "../instructor-form";
import { createInstructor } from "../actions";

export default async function NewInstructorPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  return (
    <div>
      <h1 className="font-serif text-3xl tracking-tight text-foreground">New instructor</h1>
      <InstructorForm action={createInstructor} error={error} />
    </div>
  );
}
