import { notFound } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { buttonVariants } from "@/components/ui/button";
import { AvailabilityBadge } from "@/components/class-card";
import { cn } from "@/lib/utils";

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
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-serif text-4xl tracking-tight text-foreground">{danceClass.name}</h1>
        <AvailabilityBadge availability={danceClass.availability} />
      </div>
      <p className="mt-2 text-muted-foreground">
        {danceClass.dayOfWeek} · {danceClass.startTime}–{danceClass.endTime}
      </p>
      <p className="mt-6 text-foreground">{danceClass.description}</p>

      <dl className="mt-8 grid grid-cols-2 gap-y-3 border-t border-border pt-6 text-sm">
        <dt className="text-muted-foreground">Instructor</dt>
        <dd className="text-foreground">{danceClass.instructor.name}</dd>
        <dt className="text-muted-foreground">Price</dt>
        <dd className="text-foreground">{danceClass.price}</dd>
      </dl>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={danceClass.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-7 text-base")}
        >
          Register Now
        </Link>
        <Link
          href="/waiver"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "h-12 rounded-full bg-transparent px-7 text-base",
          )}
        >
          Complete Liability Waiver
        </Link>
      </div>
    </div>
  );
}
