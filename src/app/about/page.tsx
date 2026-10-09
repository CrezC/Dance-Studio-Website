import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, UsersRound } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const values = [
  {
    icon: Heart,
    title: "Community first",
    description: "We built Cadence as a place where dancers show up for each other, not just for class.",
  },
  {
    icon: Sparkles,
    title: "Technique with joy",
    description: "Serious training doesn't have to feel heavy — our instructors teach rigor without the ego.",
  },
  {
    icon: UsersRound,
    title: "All levels welcome",
    description: "Whether it's your first class or your fifteenth year dancing, there's a spot on the floor for you.",
  },
];

const hours = [
  { day: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
  { day: "Saturday", time: "9:00 AM – 6:00 PM" },
  { day: "Sunday", time: "11:00 AM – 4:00 PM" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">About Cadence</p>
            <h1 className="mt-6 font-serif text-4xl tracking-tight text-balance text-foreground sm:text-5xl">
              A studio built around the floor, not the mirror.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Cadence opened in 2014 with one studio room and a handful of regulars. Over a
              decade later, we&apos;re still run by working dancers and instructors who believe
              training should feel like coming home, not auditioning. Today we teach ballet,
              contemporary, salsa, and hip hop to students from age 6 to 60, and rent out our
              space for events when the dancers aren&apos;t using it.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-muted">
              <Image
                src="/images/hero-dancer.png"
                alt="A dancer mid-leap in the Cadence studio"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">What we believe</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <value.icon className="size-4" aria-hidden="true" />
                </span>
                <h2 className="mt-4 font-serif text-xl text-card-foreground">{value.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">Visit the studio</p>
              <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground">Location &amp; hours</h2>
              <p className="mt-4 text-muted-foreground">
                123 Main Street, Suite 2<br />
                Springfield, ST 00000
              </p>
              <p className="mt-2 text-muted-foreground">(555) 123-4567</p>
              <Link
                href="/contact"
                className={cn(buttonVariants({ variant: "outline" }), "mt-6 rounded-full px-5")}
              >
                Get directions
              </Link>
            </div>
            <dl className="divide-y divide-border rounded-2xl border border-border">
              {hours.map((row) => (
                <div key={row.day} className="flex items-center justify-between px-6 py-4">
                  <dt className="text-foreground">{row.day}</dt>
                  <dd className="text-muted-foreground">{row.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center lg:px-8">
          <h2 className="font-serif text-3xl tracking-tight text-foreground">Come dance with us</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Drop in for a class, no experience required.
          </p>
          <Link
            href="/classes"
            className={cn(buttonVariants({ size: "lg" }), "mt-6 h-12 rounded-full px-7 text-base")}
          >
            Browse Classes
          </Link>
        </div>
      </section>
    </div>
  );
}
