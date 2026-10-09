import Link from "next/link";
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
    { label: "Classes", value: classCount, href: "/admin/classes" },
    { label: "Instructors", value: instructorCount, href: "/admin/instructors" },
    { label: "New rental inquiries", value: newInquiryCount, href: "/admin/event-rental" },
    { label: "Signed waivers", value: waiverCount, href: "/admin/waivers" },
  ];

  return (
    <div>
      <h1 className="font-serif text-3xl tracking-tight text-foreground">Dashboard</h1>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
          >
            <p className="font-serif text-4xl text-card-foreground">{card.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{card.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
