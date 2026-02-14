"use client"

import { useState } from "react";
import { studiosData } from "@/data/studiosData";
import StudiosIntro from "@/components/studiosIntro/StudiosIntro";
import StudioLocationFilter from "@/components/studioLocationFilter/StudioLocationFilter";
import StudioCarousel from "@/components/studioCarousel/StudioCarousel";
import StudioCardText from "@/components/studioCardText/StudioCardText";


export default function StudiosPage() {

    const [selectedLocation, setSelectedLocation] = useState("all");

    const filteredStudios = 
        selectedLocation === "all" 
        ? studiosData 
        : studiosData.filter((eachStudio) => eachStudio.location.toLowerCase() === selectedLocation);


    return(
        <main className="max-w-7xl mx-auto px-5 
                         sm:px-6 lg:px-20 py-15 
                         bg-clay-light 
                         text-neutral-dark">
            <StudiosIntro />

            {/* location filter */}
            <StudioLocationFilter 
                selectedLocation={selectedLocation}
                onChange={setSelectedLocation}
            />

            {/* studios list */}
            <section>
                <ul className="grid grid-cols-1 sm:grid-cols-2 
                               lg:grid-cols-3 gap-8">
                    {/* studio card */}
                    {filteredStudios.map((eachStudio) => (
                        <li key={eachStudio.id}>
                            <article className="flex flex-col h-full rounded-2xl 
                                                border border-neutral-light 
                                                bg-neutral-white overflow-hidden 
                                                transition-all duration-300 ease-out 
                                                hover:shadow-xl hover:-translate-y-1">
                                
                                {/* img carousel gallery */}
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
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}



// tasks to be handled:
{/* 
    - Link to bookings page
*/}
