import { waiverText } from "./waiver-content";
import { WaiverForm } from "./waiver-form";

export default async function WaiverPage({
  searchParams,
}: {
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { submitted } = await searchParams;

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <h1 className="font-serif text-4xl tracking-tight text-foreground">Liability Waiver</h1>
      <p className="mt-6 text-muted-foreground">
        Please read the waiver below and complete the form to sign electronically. A
        separate waiver is required for each participant.
      </p>

      <div className="mt-8 max-h-80 overflow-y-auto rounded-2xl border border-border bg-card p-6 text-sm whitespace-pre-line text-card-foreground">
        {waiverText}
      </div>

      {submitted ? (
        <p className="mt-10 rounded-2xl border border-border bg-card px-4 py-3 text-card-foreground">
          Thanks, your waiver has been signed and recorded.
        </p>
      ) : (
        <WaiverForm />
      )}
    </div>
  );
}
