import { PrismaClient } from "@prisma/client";

// Reuse the client across hot reloads in dev so we don't exhaust DB
// connections every time Next.js recompiles a route.
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
