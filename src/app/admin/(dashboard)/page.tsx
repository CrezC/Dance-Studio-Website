import Link from "next/link";
import { CalendarRange, Users, Building2, FileCheck2 } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const [classCount, instructorCount, newInquiryCount, waiverCount] = await Promise.all([
    prisma.class.count(),
    prisma.instructor.count(),
    prisma.eventRentalInquiry.count({ where: { status: "NEW" } }),
    prisma.waiverSubmission.count(),
  ]);

  const cards = [
    { label: "Classes", value: classCount, href: "/admin/classes", icon: CalendarRange },
    { label: "Instructors", value: instructorCount, href: "/admin/instructors", icon: Users },
    {
      label: "New rental inquiries",
      value: newInquiryCount,
      href: "/admin/event-rental",
      icon: Building2,
    },
    { label: "Signed waivers", value: waiverCount, href: "/admin/waivers", icon: FileCheck2 },
  ];

  return (
    <div>
      <h1 className="font-serif text-3xl tracking-tight text-foreground">Dashboard</h1>
      <p className="mt-2 text-sm text-muted-foreground">An overview of the studio&apos;s site activity.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
          >
            <div className="flex items-center justify-between">
              <span className="flex size-9 items-center justify-center rounded-full bg-accent/10 text-accent">
                <card.icon className="size-4" aria-hidden="true" />
              </span>
            </div>
            <p className="mt-4 font-serif text-4xl text-card-foreground">{card.value}</p>
            <p className="mt-1 text-sm text-muted-foreground group-hover:text-foreground">
              {card.label}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
