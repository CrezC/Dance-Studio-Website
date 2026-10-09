import { Mail, Phone } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { updateInquiryStatus } from "./actions";

export const dynamic = "force-dynamic";

const statusStyles: Record<string, string> = {
  NEW: "bg-emerald-50 text-emerald-800 ring-emerald-200",
  CONTACTED: "bg-amber-50 text-amber-800 ring-amber-200",
  CLOSED: "bg-muted text-muted-foreground ring-border",
};

const actionButtonClass =
  "rounded-full border border-border px-3 py-1.5 text-sm text-foreground transition-colors hover:bg-muted";

export default async function AdminEventRentalPage() {
  const inquiries = await prisma.eventRentalInquiry.findMany({
    orderBy: { submittedAt: "desc" },
  });

  return (
    <div>
      <h1 className="font-serif text-3xl tracking-tight text-foreground">Event rental inquiries</h1>
      <p className="mt-2 text-sm text-muted-foreground">{inquiries.length} total</p>

      <div className="mt-8 space-y-4">
        {inquiries.map((inquiry) => (
          <div key={inquiry.id} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="font-serif text-xl text-card-foreground">{inquiry.name}</p>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Mail className="size-3.5" aria-hidden="true" />
                    {inquiry.email}
                  </span>
                  {inquiry.phone && (
                    <span className="flex items-center gap-1.5">
                      <Phone className="size-3.5" aria-hidden="true" />
                      {inquiry.phone}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Submitted {inquiry.submittedAt.toLocaleString()}
                </p>
              </div>
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[inquiry.status]}`}
              >
                {inquiry.status}
              </span>
            </div>
            <p className="mt-4 text-foreground">{inquiry.message}</p>
            <div className="mt-4 flex gap-2 border-t border-border pt-4">
              {inquiry.status !== "CONTACTED" && (
                <form action={updateInquiryStatus.bind(null, inquiry.id, "CONTACTED")}>
                  <button type="submit" className={actionButtonClass}>
                    Mark contacted
                  </button>
                </form>
              )}
              {inquiry.status !== "CLOSED" && (
                <form action={updateInquiryStatus.bind(null, inquiry.id, "CLOSED")}>
                  <button type="submit" className={actionButtonClass}>
                    Mark closed
                  </button>
                </form>
              )}
              {inquiry.status !== "NEW" && (
                <form action={updateInquiryStatus.bind(null, inquiry.id, "NEW")}>
                  <button type="submit" className={actionButtonClass}>
                    Reopen
                  </button>
                </form>
              )}
            </div>
          </div>
        ))}
        {inquiries.length === 0 && (
          <p className="rounded-2xl border border-border bg-card p-6 text-center text-muted-foreground">
            No inquiries yet.
          </p>
        )}
      </div>
    </div>
  );
}
