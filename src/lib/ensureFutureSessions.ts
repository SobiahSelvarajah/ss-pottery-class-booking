import { prisma } from "@/lib/prisma";

const BOOKING_WINDOW_DAYS = 60;

export async function ensureFutureSessions(studioId: string) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const sessions = [];

    for (let i = 1; i <= BOOKING_WINDOW_DAYS; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        // skip mondays
        if (date.getDay() === 1) continue;

        sessions.push(
            {
                studioId,
                date,
                timeSlot: "MORNING" as const,
            },
            {
                studioId,
                date,
                timeSlot: "AFTERNOON" as const,
            },
            {
                studioId,
                date,
                timeSlot: "EVENING" as const,
            }
        );
    }

    await prisma.session.createMany({
        data: sessions,
        skipDuplicates: true,
    });
}