import { Car, DoorOpen, Layers, Maximize2, Music2, Users } from "lucide-react";
import { submitEventRentalInquiry } from "./actions";
import { Button } from "@/components/ui/button";

const amenities = [
  { icon: Layers, label: "Sprung hardwood floors" },
  { icon: Maximize2, label: "Wall-to-wall mirrors" },
  { icon: Music2, label: "Professional sound system" },
  { icon: DoorOpen, label: "Private changing rooms" },
  { icon: Car, label: "Free street parking" },
  { icon: Users, label: "Capacity up to 60 guests" },
];

const pricingTiers = [
  { label: "Hourly", price: "$75", note: "2-hour minimum" },
  { label: "Half-day", price: "$300", note: "up to 4 hours" },
  { label: "Full-day", price: "$550", note: "up to 8 hours" },
];

const rentalFaqs = [
  {
    question: "Can I bring my own sound equipment?",
    answer:
      "Our house sound system covers most events, but you're welcome to bring your own setup if you prefer.",
  },
  {
    question: "Is a deposit required?",
    answer:
      "Yes — a 50% deposit holds your date, with the remainder due the day of your event.",
  },
  {
    question: "Is the space suitable for performances?",
    answer:
      "Yes. The sprung floor and full-wall mirrors work well for rehearsals, showcases, and recitals alike.",
  },
];

export default async function EventRentalPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { submitted } = await searchParams;

  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 lg:px-8 lg:pt-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Event Rental</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl tracking-tight text-balance text-foreground sm:text-5xl">
          Rent the studio for your next rehearsal, showcase, or celebration.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          When our classes aren&apos;t in session, the floor is yours — for dance rehearsals,
          photo and video shoots, workshops, or private events.
        </p>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="font-serif text-3xl tracking-tight text-foreground">Amenities</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map((amenity) => (
              <div
                key={amenity.label}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <amenity.icon className="size-4" aria-hidden="true" />
                </span>
                <span className="text-card-foreground">{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="font-serif text-3xl tracking-tight text-foreground">Pricing</h2>
          <p className="mt-2 text-muted-foreground">
            Rates below are a starting point — message us for multi-day or recurring bookings.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div key={tier.label} className="rounded-2xl border border-border bg-card p-6 text-center">
                <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {tier.label}
                </p>
                <p className="mt-2 font-serif text-4xl text-card-foreground">{tier.price}</p>
                <p className="mt-1 text-sm text-muted-foreground">{tier.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <h2 className="font-serif text-3xl tracking-tight text-foreground">Rental FAQ</h2>
          <dl className="mt-8 space-y-6">
            {rentalFaqs.map((faq) => (
              <div key={faq.question}>
                <dt className="font-medium text-foreground">{faq.question}</dt>
                <dd className="mt-1 text-muted-foreground">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <h2 className="font-serif text-3xl tracking-tight text-foreground">Request pricing &amp; availability</h2>
          <p className="mt-2 text-muted-foreground">
            Tell us about your event and we&apos;ll follow up with availability and a quote.
          </p>

          {submitted ? (
            <p className="mt-8 rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground">
              Thanks! We received your inquiry and will follow up by email soon.
            </p>
          ) : (
            <form className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8" action={submitEventRentalInquiry}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Tell us about your event
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Event type, preferred date, expected guest count..."
                  className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground outline-none focus:border-ring focus:ring-3 focus:ring-ring/30"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 rounded-full px-7 text-base">
                Submit Inquiry
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
