import { submitEventRentalInquiry } from "./actions";
import { Button } from "@/components/ui/button";

export default async function EventRentalPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { submitted } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <h1 className="font-serif text-4xl tracking-tight text-foreground">Event Rental</h1>
      <p className="mt-6 text-muted-foreground">
        Photos, amenities, and pricing for renting the studio space go here.
      </p>

      {submitted ? (
        <p className="mt-10 rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground">
          Thanks! We received your inquiry and will follow up by email soon.
        </p>
      ) : (
        <form className="mt-10 space-y-4" action={submitEventRentalInquiry}>
          <h2 className="font-serif text-xl text-foreground">Request Information</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground"
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
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground"
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
              className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground"
            />
          </div>
          <Button type="submit" size="lg" className="h-12 rounded-full px-7 text-base">
            Submit Inquiry
          </Button>
        </form>
      )}
    </div>
  );
}
