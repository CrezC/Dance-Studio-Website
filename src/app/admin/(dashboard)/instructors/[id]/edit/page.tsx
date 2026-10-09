import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { InstructorForm } from "../../instructor-form";
import { updateInstructor, deleteInstructor } from "../../actions";
import { ConfirmDeleteButton } from "../../../confirm-delete-button";

export default async function EditInstructorPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { id } = await params;
  const { error } = await searchParams;

  const instructor = await prisma.instructor.findUnique({ where: { id } });

  if (!instructor) {
    notFound();
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-serif text-3xl tracking-tight text-foreground">Edit instructor</h1>
        <ConfirmDeleteButton
          action={deleteInstructor.bind(null, id)}
          confirmMessage={`Delete "${instructor.name}"? This can't be undone.`}
        >
          Delete instructor
        </ConfirmDeleteButton>
      </div>
      <InstructorForm action={updateInstructor.bind(null, id)} instructor={instructor} error={error} />
    </div>
  );
}
