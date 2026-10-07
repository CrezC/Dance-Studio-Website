import { faqs } from "@/lib/data";

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
      <h1 className="font-serif text-4xl tracking-tight text-foreground">FAQ</h1>
      <dl className="mt-8 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="font-medium text-foreground">{faq.question}</dt>
            <dd className="mt-1 text-muted-foreground">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
