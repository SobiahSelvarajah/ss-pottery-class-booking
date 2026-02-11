"use client"

import { useState } from "react"
import StudiosIntro from "@/components/studiosIntro/StudiosIntro";
import { studiosData } from "@/data/studiosData";


export default function StudiosPage() {

    const [selectedLocation, setSelectedLocation] = useState("all");

    const filteredStudios = 
        selectedLocation === "all" ? studiosData : studiosData.filter((eachStudio) => eachStudio.location.toLowerCase() === selectedLocation);


    return(
        <main className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 py-15 bg-clay-light text-neutral-dark">
            <StudiosIntro />

            {/* location filter */}
            <section className="px-4 py-6">
                <div className="max-w-6xl mx-auto">
                    <label htmlFor="location" className="block text-sm font-medium text-neutral-dark mb-2">Filter by location:</label> 
                    <select id="location" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="w-full md:w-64 border border-neutral-light rounded-md px-3 py-2 bg-neutral-white text-neutral-dark focus:outline-none focus:ring-2 focus:ring-clay-brown transition">
                        <option value="all">All locations</option>
                        <option value="hackney">Hackney</option>
                        <option value="greenwich">Greenwich</option>
                        <option value="islington">Islington</option>
                        <option value="peckham">Peckham</option>                    
                    </select>                      
                </div>
            </section>

            {/* studios list */}
            <section>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* studio card */}
                    {filteredStudios.map((eachStudio) => (
                        <li key={eachStudio.id}>
                            <article className="flex flex-col h-full rounded-2xl border border-neutral-light bg-neutral-white overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                                {/* img carousel gallery */}
                                <div className="relative aspect-4/3 bg-clay-sand overflow-hidden">
                                    <button aria-label="Previous img" className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-neutral-white/80 px-2 py-1 text-sm shadow opacity-0 group-hover:opacity-100 transition-opacity">←</button>
                                    <img src={eachStudio.images[0]} alt={eachStudio.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"/>
                                    <button aria-label="Next img" className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-neutral-white/80 px-2 py-1 text-sm shadow opacity-0 group-hover:opacity-100 transition-opacity">→</button>
                                </div>

                                {/* text */}
                                <header className="px-5 pt-5">
                                    <h2 className="text-lg font-medium text-clay-dark">{eachStudio.name}</h2>
                                    <p className="mt-1 text-sm text-neutral-mid">{eachStudio.area}, {eachStudio.city}</p>
                                </header>
                                <p className="px-5 pb-6 mt-3 text-sm text-neutral-dark">{eachStudio.description}</p>
                                
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