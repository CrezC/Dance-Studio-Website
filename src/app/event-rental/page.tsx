export default function EventRentalPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Event Rental</h1>
      <p className="mt-6 text-black/70 dark:text-white/70">
        Photos, amenities, and pricing for renting the studio space go here.
      </p>

      <form className="mt-10 space-y-4" action="#" method="post">
        <h2 className="text-lg font-medium">Request Information</h2>
        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 dark:border-white/20 dark:bg-transparent"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 dark:border-white/20 dark:bg-transparent"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            Tell us about your event
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="mt-1 w-full rounded-md border border-black/15 px-3 py-2 dark:border-white/20 dark:bg-transparent"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
        >
          Submit Inquiry
        </button>
      </form>
    </div>
  );
}
