import { prisma } from "@/lib/prisma";
import { HeroSection } from "@/components/hero-section";
import { ClassesSection } from "@/components/classes-section";

export const dynamic = "force-dynamic";

export default async function Home() {
  const classes = await prisma.class.findMany({
    include: { instructor: true },
    orderBy: { name: "asc" },
    take: 3,
  });

  return (
    <>
      <HeroSection />
      <ClassesSection classes={classes} />
    </>
  );
}
