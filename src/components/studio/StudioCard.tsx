"use client";

import Link from "next/link";
import type { Studio } from "@prisma/client";
import StudioCarousel from "./StudioCarousel";
import StudioCardText from "./StudioCardText";

type StudioCardProps = {
    eachStudio: Studio;
};


export default function StudioCard({eachStudio}: StudioCardProps) {
    return (
        <article className="flex flex-col h-full rounded-2xl border border-neutral-light bg-neutral-white overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
            
            {/* img carousel */}
            <StudioCarousel
                images={eachStudio.images}
                alt={eachStudio.alt}
            />
            {/* text */}
            <StudioCardText
                name={eachStudio.name}
                area={eachStudio.area}
                city={eachStudio.city}
                description={eachStudio.description}
            />  

            {/* direct to booking */}
            <div className="mt-auto px-5 pb-5">
                <Link
                    href={`/studios/${eachStudio.slug}`}
                    className="inline-block text-sm font-medium text-clay-brown hover:text-clay-dark transition-colors"
                >
                    Book studio →
                </Link>
            </div>
        </article>
    )
}