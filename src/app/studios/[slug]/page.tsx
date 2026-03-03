import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
// when studio booking is created, import here


// defining parameters
type PageProps = {
    params: { slug: string };
};

// async to allow db calls
// {params} -> sestructures dynamic route parameter
// PageProps -> applies the param defined
// so if /studios/clay-room is visited
// then params.slug === "clay-room"
export default async function StudioPage({ params }: PageProps) {
    // fetch studio from db
    const studio = await prisma.studio.findUnique({
        where: { slug: params.slug },
        // fetch its related sessions
        include: {
            sessions: {
                orderBy: { date: "asc" },
            },
        },
    });

    // if studio slug doesn't exist
    // return notFound page
    if (!studio) return notFound();


    // return studio booking client component here
    // returning client component
    // Server component data fetching + client component UI
};