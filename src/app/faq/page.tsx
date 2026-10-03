import { faqs } from "@/lib/data";

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">FAQ</h1>
      <dl className="mt-8 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <dt className="font-medium">{faq.question}</dt>
            <dd className="mt-1 text-black/70 dark:text-white/70">{faq.answer}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
