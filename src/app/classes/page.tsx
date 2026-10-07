import { prisma } from "@/lib/prisma";
import { ClassesSection } from "@/components/classes-section";

export const dynamic = "force-dynamic";

export default async function ClassesPage() {
  const classes = await prisma.class.findMany({
    include: { instructor: true },
    orderBy: { name: "asc" },
  });

  return (
    <ClassesSection
      classes={classes}
      title="All classes"
      description="Browse the full schedule. Drop in or save with a class pack."
    />
  );
}
