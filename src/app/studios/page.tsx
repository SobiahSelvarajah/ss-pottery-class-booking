

export default function StudiosPage() {
    return(
        <main>
            {/* intro */}
            <section>
                <header>
                    <h1>Studios</h1>
                    <p>Discover independent pottery studios offering thoughtfully led classes and workshops</p>
                </header>
            </section>

            {/* location filter */}
            <section>
                <label htmlFor="location">Filter by location</label> 
                <select id="location" name="location">
                    <option value="all">All locations</option>
                    <option value="hackney">Hackney</option>
                    <option value="greenwich">Greenwich</option>
                    <option value="islington">Islington</option>
                    <option value="peckham">Peckham</option>                    
                </select>       
            </section>

            {/* studios list */}
            <section>
                <ul>
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
                            <article>
                                {/* img carousel gallery */}
                                <div>
                                    <button aria-label="Previous img">←</button>
                                    <img src="" alt={eachStudio.alt} />
                                    <button aria-label="Next img">→</button>
                                </div>

                                {/* text */}
                                <header>
                                    <h2>{eachStudio.name}</h2>
                                    <p>{eachStudio.location}</p>
                                </header>
                                <p>{eachStudio.desc}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}