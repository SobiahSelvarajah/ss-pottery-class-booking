"use client";

import StudioCarousel from "../studioCarousel/StudioCarousel";
import StudioCardText from "../studioCardText/StudioCardText";

type Studio = {
    id: number;
    name: string;
    location: string;
    area: string;
    city: string;
    description: string;
    images: string[];
    alt: string;
};

type StudioCardProps = {
    eachStudio: Studio;
};

export default function StudioCard({eachStudio}: StudioCardProps) {
    return(
        <article className="flex flex-col h-full rounded-2xl 
                            border border-neutral-light 
                            bg-neutral-white overflow-hidden 
                            transition-all duration-300 ease-out 
                            hover:shadow-xl hover:-translate-y-1">
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
            {/* link to booking page once set up */}
            <div className="mt-auto px-5 pb-5">
                <span className="inline-block text-sm font-medium text-clay-brown transition-colors group-hover:text-clay-dark">Book studio →</span>
            </div>
        </article>
    )
}
