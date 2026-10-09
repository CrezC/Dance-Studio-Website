import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { studioInfo } from "@/lib/data";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit us",
    lines: studioInfo.addressLines,
  },
  {
    icon: Phone,
    title: "Call us",
    lines: [studioInfo.phone],
    href: studioInfo.phoneHref,
  },
  {
    icon: Mail,
    title: "Email us",
    lines: [studioInfo.email],
    href: `mailto:${studioInfo.email}`,
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 lg:px-8 lg:pt-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Contact</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl tracking-tight text-balance text-foreground sm:text-5xl">
          Questions before your first class?
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Reach out any time — we usually respond within a day.
        </p>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {contactCards.map((card) => {
              const content = (
                <>
                  <span className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <card.icon className="size-4" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 font-serif text-lg text-card-foreground">{card.title}</h2>
                  {card.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </>
              );

              return card.href ? (
                <Link
                  key={card.title}
                  href={card.href}
                  className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
                >
                  {content}
                </Link>
              ) : (
                <div key={card.title} className="rounded-2xl border border-border bg-card p-6">
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <dl className="divide-y divide-border rounded-2xl border border-border">
              {studioInfo.hours.map((row) => (
                <div key={row.day} className="flex items-center justify-between px-6 py-4">
                  <dt className="text-foreground">{row.day}</dt>
                  <dd className="text-muted-foreground">{row.time}</dd>
                </div>
              ))}
            </dl>
            <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-dashed border-border bg-muted/50 text-center">
              <div className="text-muted-foreground">
                <MapPin className="mx-auto size-6" aria-hidden="true" />
                <p className="mt-2 text-sm">Map embed placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
