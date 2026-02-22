import { PrismaClient } from "@prisma/client";

// avoids creating multiple prisma (db) connections
// by storing it globally
const globalForPrisma = globalThis as unknown as {
    // global object may have prisma stored
    prisma: PrismaClient | undefined;
};

// if globalForPrisma exists, use
// else create new PrismaClient
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