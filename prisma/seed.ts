import { PrismaClient } from "@prisma/client";

// create a prisma instance
const prisma = new PrismaClient();

// seeds data
// runs once and exits
async function main() {

    // studio array
    const studios = [
        {
            name: "Clay Room Studio",
            slug: "clay-room-studio",
            location: "hackney",
            area: "Hackney",
            city: "London",
            description:
            "A warm, community-led studio focused on wheel throwing and beginner-friendly classes.",
            images: [
            "/images/studio1-1.jpg",
            "/images/studio1-2.jpg",
            "/images/studio1-3.jpg",
            ],
            alt: "Clay Room studio pottery wheels"
        },
        {
            name: "Earth & Fire",
            slug: "earth-and-fire",
            location: "greenwich",
            area: "Greenwich",
            city: "London",
            description:
            "An intimate studio specialising in hand-building and small group workshops.",
            images: [
            "/images/studio2-1.jpg",
            "/images/studio2-2.jpg",
            "/images/studio2-3.jpg",
            ],
            alt: "Earth & Fire studio handmade ceramics"
        },
        {
            name: "Kiln House",
            slug: "kiln-house",
            location: "islington",
            area: "Islington",
            city: "London",
            description:
            "Contemporary ceramics studio offering structured courses for all skill levels.",
            images: [
            "/images/studio3-1.jpg",
            "/images/studio3-2.jpg",
            "/images/studio3-3.jpg",
            ],
            alt: "Kiln House studio interior with shelves"
        },
        {
            name: "South Clay Studio",
            slug: "south-clay-studio",
            location: "peckham",
            area: "Peckham",
            city: "London",
            description:
            "A relaxed, welcoming space focused on creative exploration and community learning.",
            images: [
            "/images/studio4-1.jpg",
            "/images/studio4-2.jpg",
            "/images/studio4-3.jpg",
            ],
            alt: "South Clay Studio pottery class in progress"
        },
    ]

    // take each studio object in array
    // insert into db
    for (const studio of studios) {

        // upsert -> update or insert
        // if row with specified slug exists -> update it
        // if not -> create it
        await prisma.studio.upsert({

            // locate studio with this slug
            where:{slug: studio.slug},

            // no change if exists
            update: {},
            // create if it doesn't
            create: studio,
        })
    }
    console.log("🌱 Studios seeded");



    // fetch all studios from db 
    // return in array
    const allStudios = await prisma.studio.findMany();

    // today
    const today = new Date();

    // helper function to add days
    function addDays(date: Date, days: number) {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    // for each studio in the array
    for (const studio of allStudios) {

        // generate next 30 days
        for (let i = 1; i <= 30; i++) {

            const date = addDays(today,i);

            // skip mondays (0=sunday 1=monday)
            if (date.getDay() === 1) continue;

            // insert multiple rows into sessions table
            await prisma.session.createMany({

                // sessions array
                data: [
                    {
                        studioId: studio.id,
                        date,
                        timeSlot: "MORNING",
                    },
                    {
                        studioId: studio.id,
                        date,
                        timeSlot: "AFTERNOON",
                    },
                    {
                        studioId: studio.id,
                        date,
                        timeSlot: "EVENING",
                    },
                ],
                // can run it multiple times without duplicate creation
                skipDuplicates: true,
            });
        };
    };
    console.log("📅 Sessions seeded");
};


// run function
main() 
    // if anything fails, log the error
    .catch(console.error)
    // close db connection cleanly
    .finally(() => prisma.$disconnect())