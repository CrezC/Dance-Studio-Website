import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ClassForm } from "../../class-form";
import { updateClass, deleteClass } from "../../actions";
import { ConfirmDeleteButton } from "../../../confirm-delete-button";

export default async function EditClassPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { id } = await params;
  const { error } = await searchParams;

  const [danceClass, instructors] = await Promise.all([
    prisma.class.findUnique({ where: { id } }),
    prisma.instructor.findMany({ orderBy: { name: "asc" } }),
  ]);

  if (!danceClass) {
    notFound();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-3xl tracking-tight text-foreground">Edit class</h1>
        <ConfirmDeleteButton
          action={deleteClass.bind(null, id)}
          confirmMessage={`Delete "${danceClass.name}"? This can't be undone.`}
        >
          Delete class
        </ConfirmDeleteButton>
      </div>
      <ClassForm
        action={updateClass.bind(null, id)}
        instructors={instructors}
        danceClass={danceClass}
        error={error}
      />
    </div>
  );
}
