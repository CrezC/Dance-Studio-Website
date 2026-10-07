import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section aria-labelledby="hero-heading" className="mx-auto max-w-7xl px-6 pt-12 pb-20 lg:px-8 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Dance studio &middot; Est. 2014
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-5xl leading-[1.02] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl"
          >
            Move with <em className="text-accent">intention.</em> Dance with joy.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            Ballet, contemporary, salsa, and hip hop for every level, taught by working
            artists in a sunlit studio built for movement.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/classes"
              className={cn(buttonVariants({ size: "lg" }), "h-12 rounded-full px-7 text-base")}
            >
              Browse Classes
              <ArrowRight data-icon="inline-end" />
            </Link>
            <Link
              href="/event-rental"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 rounded-full bg-transparent px-7 text-base",
              )}
            >
              Event Rental
            </Link>
          </div>
          <dl className="mt-14 flex gap-10 border-t border-border pt-8">
            {[
              { value: "40+", label: "Weekly classes" },
              { value: "12", label: "Instructors" },
              { value: "2,000", label: "sq ft studio" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-serif text-3xl text-foreground">{stat.value}</dd>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted">
            <Image
              src="/images/hero-dancer.png"
              alt="A dancer mid-leap in a sunlit studio with oak floors"
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
