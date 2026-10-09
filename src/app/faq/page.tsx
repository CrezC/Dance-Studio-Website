import Link from "next/link";
import { faqs } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FaqPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 lg:px-8 lg:pt-20">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">FAQ</p>
        <h1 className="mt-6 max-w-2xl font-serif text-4xl tracking-tight text-balance text-foreground sm:text-5xl">
          Good to know before you drop in.
        </h1>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <dl className="divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((faq) => (
              <div key={faq.question} className="px-6 py-6">
                <dt className="font-serif text-lg text-card-foreground">{faq.question}</dt>
                <dd className="mt-2 text-muted-foreground">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="font-serif text-3xl tracking-tight text-foreground">Still have a question?</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            We&apos;re happy to help — reach out and we&apos;ll get back to you.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "mt-6 h-12 rounded-full px-7 text-base")}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
