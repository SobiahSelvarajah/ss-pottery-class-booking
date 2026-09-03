import { prisma } from "@/lib/prisma";
import StudiosIntro from "@/components/studio/StudiosIntro";
import StudiosClient from "@/components/studio/StudiosClient";


// Prisma runs on server component
// server components can't run useState
// solution - keep data fetching in server component
//          - move filtering logic to a small client component

export default async function StudiosPage() {

    const studios = await prisma.studio.findMany() 

    return (
        <main className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 py-15 bg-clay-light text-neutral-dark">
            <StudiosIntro />
            <StudiosClient studios={studios} />
        </main>
    );
};