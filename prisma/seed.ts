import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const jane = await prisma.instructor.upsert({
    where: { slug: "jane-doe" },
    update: {},
    create: {
      slug: "jane-doe",
      name: "Jane Doe",
      bio: "10+ years teaching contemporary and ballet.",
    },
  });

  const john = await prisma.instructor.upsert({
    where: { slug: "john-smith" },
    update: {},
    create: {
      slug: "john-smith",
      name: "John Smith",
      bio: "Specializes in hip-hop and youth classes.",
    },
  });

  await prisma.class.upsert({
    where: { slug: "contemporary-intro" },
    update: {},
    create: {
      slug: "contemporary-intro",
      name: "Contemporary — Intro",
      description: "A beginner-friendly introduction to contemporary dance.",
      dayOfWeek: "Tuesday",
      startTime: "18:00",
      endTime: "19:00",
      price: "$20 / class",
      availability: "OPEN",
      registrationUrl: "https://example.com/register/contemporary-intro",
      instructorId: jane.id,
    },
  });

  await prisma.class.upsert({
    where: { slug: "hip-hop-youth" },
    update: {},
    create: {
      slug: "hip-hop-youth",
      name: "Hip-Hop — Youth (8–12)",
      description: "High-energy hip-hop class for kids.",
      dayOfWeek: "Thursday",
      startTime: "16:30",
      endTime: "17:30",
      price: "$18 / class",
      availability: "LIMITED",
      registrationUrl: "https://example.com/register/hip-hop-youth",
      instructorId: john.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
