

export default function StudiosPage() {
    return(
        <main className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-20 py-15 bg-clay-light text-neutral-dark">
            {/* intro */}
            <section className="mb-15">
                <header className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-clay-dark">Studios</h1>
                    <p className="mt-5 text-neutral-mid">Discover independent pottery studios offering thoughtfully led classes and workshops</p>
                </header>
            </section>

            {/* location filter */}
            <section className="mb-11">
                <label htmlFor="location">Filter by location:</label> 
                <select id="location" name="location" className="w-full sm:w-64 rounded-lg border border-neutral-light bg-neutral-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-clay-brown transition-shadow">
                    <option value="all">All locations</option>
                    <option value="hackney">Hackney</option>
                    <option value="greenwich">Greenwich</option>
                    <option value="islington">Islington</option>
                    <option value="peckham">Peckham</option>                    
                </select>       
            </section>

            {/* studios list */}
            <section>
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* studio card */}
                    {/* data set */}
                    {[
                        {
                            name: "Clay Room Studio",
                            location: "Hackney, London",
                            desc: "A warm, community-led studio focused on wheel throwing and beginner-friendly classes.",
                            alt: "Clay Room studio pottery wheels", 
                        },
                        {
                            name: "Earth & Fire",
                            location: "Greenwich, London",
                            desc: "An intimate studio specialising in hand-building and small group workshops.",
                            alt: "Earth & Fire studio handmade ceramics",
                        },
                        {
                            name: "Kiln House",
                            location: "Islington, London",
                            desc: "Contemporary ceramics studio offering structured courses for all skill levels.",
                            alt: "Kiln House studio interior with shelves",
                        },
                        {
                            name: "South Clay Studio",
                            location: "Peckham, London",
                            desc: "A relaxed, welcoming space focused on creative exploration and community learning.",
                            alt: "South Clay Studio pottery class in progress",
                        },
                    ].map((eachStudio) => (
                        <li key={eachStudio.name} className="group">
                            <article className="flex flex-col h-full rounded-2xl border border-neutral-light bg-neutral-white overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1">
                                {/* img carousel gallery */}
                                <div className="relative aspect-4/3 bg-clay-sand overflow-hidden">
                                    <button aria-label="Previous img" className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-neutral-white/80 px-2 py-1 text-sm shadow opacity-0 group-hover:opacity-100 transition-opacity">←</button>
                                    <img src="" alt={eachStudio.alt} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"/>
                                    <button aria-label="Next img" className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full bg-neutral-white/80 px-2 py-1 text-sm shadow opacity-0 group-hover:opacity-100 transition-opacity">→</button>
                                </div>

                                {/* text */}
                                <header className="px-5 pt-5">
                                    <h2 className="text-lg font-medium text-clay-dark">{eachStudio.name}</h2>
                                    <p className="mt-1 text-sm text-neutral-mid">{eachStudio.location}</p>
                                </header>
                                <p className="px-5 pb-6 mt-3 text-sm text-neutral-dark">{eachStudio.desc}</p>
                                
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