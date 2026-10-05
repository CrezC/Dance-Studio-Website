import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function ClassDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const danceClass = await prisma.class.findUnique({
    where: { slug },
    include: { instructor: true },
  });

  if (!danceClass) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{danceClass.name}</h1>
      <p className="mt-2 text-black/60 dark:text-white/60">
        {danceClass.dayOfWeek} · {danceClass.startTime}–{danceClass.endTime}
      </p>
      <p className="mt-6 text-black/80 dark:text-white/80">{danceClass.description}</p>

      <dl className="mt-8 grid grid-cols-2 gap-y-3 text-sm">
        <dt className="text-black/50 dark:text-white/50">Instructor</dt>
        <dd>{danceClass.instructor.name}</dd>
        <dt className="text-black/50 dark:text-white/50">Price</dt>
        <dd>{danceClass.price}</dd>
        <dt className="text-black/50 dark:text-white/50">Availability</dt>
        <dd className="capitalize">{danceClass.availability.toLowerCase()}</dd>
      </dl>

      <Link
        href={danceClass.registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-block rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
      >
        Register Now
      </Link>
    </div>
  );
}
