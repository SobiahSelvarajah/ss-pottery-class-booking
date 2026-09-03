"use client";

import { useState } from "react";
import type { Studio } from "@prisma/client";
import StudioLocationFilter from "./StudioLocationFilter";
import StudioCard from "./StudioCard";

type StudiosClientProps = {
    studios: Studio[];
};

export default function StudiosClient({ studios }: StudiosClientProps) {
    const [selectedLocation, setSelectedLocation] = useState("all");

    const filteredStudios = 
        selectedLocation === "all"
        ? studios
        : studios.filter((eachStudio) =>
            eachStudio.location.toLowerCase() === selectedLocation)

    
    return (
        <>
            <StudioLocationFilter
                selectedLocation={selectedLocation}
                onChange={setSelectedLocation}
            />
            <section>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredStudios.map((eachStudio) => (
                        <li key={eachStudio.id}>
                            <StudioCard eachStudio={eachStudio} />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}