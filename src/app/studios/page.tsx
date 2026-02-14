"use client"

import { useState } from "react";
import { studiosData } from "@/data/studiosData";
import StudiosIntro from "@/components/studiosIntro/StudiosIntro";
import StudioLocationFilter from "@/components/studioLocationFilter/StudioLocationFilter";
import StudioCard from "@/components/studioCard/StudioCard";


export default function StudiosPage() {

    const [selectedLocation, setSelectedLocation] = useState("all");

    const filteredStudios = 
        selectedLocation === "all" 
        ? studiosData 
        : studiosData.filter((eachStudio) => 
            eachStudio.location.toLowerCase() === selectedLocation);


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
                            <StudioCard eachStudio={eachStudio}/>
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
