import { PrismaClient } from "@prisma/client";

// avoids creating multiple prisma (db) connections
const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export const prisma = 
    globalForPrisma.prisma ??
    new PrismaClient({
        log: ["query"],
    });

// in production
// creates a single instance normally
if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
};