import Link from "next/link";
import { Clock, User } from "lucide-react";
import type { Availability, Class, Instructor } from "@prisma/client";
import { cn } from "@/lib/utils";

const availabilityStyles: Record<Availability, { label: string; className: string; dot: string }> = {
  OPEN: {
    label: "Open",
    className: "bg-emerald-50 text-emerald-800 ring-emerald-200",
    dot: "bg-emerald-600",
  },
  LIMITED: {
    label: "Limited",
    className: "bg-amber-50 text-amber-800 ring-amber-200",
    dot: "bg-amber-500",
  },
  FULL: {
    label: "Full",
    className: "bg-muted text-muted-foreground ring-border",
    dot: "bg-muted-foreground",
  },
};

export function AvailabilityBadge({ availability }: { availability: Availability }) {
  const style = availabilityStyles[availability];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset",
        style.className,
      )}
    >
      <span aria-hidden="true" className={cn("size-1.5 rounded-full", style.dot)} />
      {style.label}
    </span>
  );
}

export function ClassCard({
  danceClass,
}: {
  danceClass: Class & { instructor: Instructor };
}) {
  const { name, dayOfWeek, startTime, endTime, instructor, price, availability, registrationUrl } =
    danceClass;
  const isFull = availability === "FULL";

  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5">
      <div className="flex items-start justify-end gap-4">
        <AvailabilityBadge availability={availability} />
      </div>

      <h3 className="mt-3 font-serif text-2xl leading-tight text-card-foreground">{name}</h3>

      <ul className="mt-5 flex flex-col gap-2.5 text-sm text-muted-foreground">
        <li className="flex items-center gap-2.5">
          <Clock aria-hidden="true" className="size-4" />
          <span>
            {dayOfWeek} · {startTime}–{endTime}
          </span>
        </li>
        <li className="flex items-center gap-2.5">
          <User aria-hidden="true" className="size-4" />
          <span>
            <span className="sr-only">Instructor: </span>
            {instructor.name}
          </span>
        </li>
      </ul>

      <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
        <p className="font-serif text-xl text-card-foreground">{price}</p>
        <Link
          href={registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
            isFull
              ? "border border-border bg-transparent text-foreground hover:bg-muted"
              : "bg-primary text-primary-foreground hover:bg-primary/85",
          )}
        >
          {isFull ? "Join waitlist" : "Register"}
          <span className="sr-only"> for {name}</span>
        </Link>
      </div>
    </article>
  );
}
