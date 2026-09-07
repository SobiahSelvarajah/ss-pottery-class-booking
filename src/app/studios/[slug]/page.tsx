import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import StudioBookingClient from "./StudioBookingClient";
import { ensureFutureSessions } from "@/lib/ensureFutureSessions";


// defining parameters
type PageProps = {
    params: Promise<{ slug: string }>;
};

// async to allow db calls
// {params} -> destructures dynamic route parameter
// PageProps -> applies the param defined
// so if /studios/clay-room is visited
// then params.slug === "clay-room"
export default async function StudioPage({ params }: PageProps) {

    const { slug } = await params;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // fetch studio first so we can ensure future sessions
    const studioDetails = await prisma.studio.findUnique({
        where: { slug },
    });

    // if studio slug doesn't exist
    if (!studioDetails) return notFound();

    // ensure a rolling 60-day booking window
    await ensureFutureSessions(studioDetails.id);

    // fetch studio with current sessions and booking totals
    const studio = await prisma.studio.findUnique({
        where: { slug },

        include: {
            sessions: {
                where: {
                    date: {
                        gte: today,
                    },
                },
                orderBy: {
                    date: "asc",
                },
                include: {
                    bookings: {
                        where: {
                            status: {
                                in: ["PENDING", "CONFIRMED"],
                            },
                        },
                        select: {
                            guests: true,
                        },
                    },
                },
            },
        },
    });


    // if studio slug doesn't exist
    // return notFound page
    if (!studio) return notFound();

    // return studio booking client component here
    // returning client component
    // Server component data fetching + client component UI
    return <StudioBookingClient studio={studio} />;
}