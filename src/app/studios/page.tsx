

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
                <label htmlFor="location">
                    <option value="all">All locations</option>
                    <option value="hackney">Hackney</option>
                    <option value="greenwich">Greenwich</option>
                    <option value="islington">Islington</option>
                    <option value="peckham">Peckham</option>
                </label>
            </section>

            {/* studios list */}
            <section>
                <ul>
                    {/* studio 1 */}
                    <li>
                        <article>
                            {/* img carousel - clay room studio img gallery */}
                            <div>
                                <button aria-label="Previous img">←</button>
                                <img src="" alt="Clay Room studio pottery wheels" />
                                <button aria-label="Next img">→</button>
                            </div>
                            <header>
                                <h2>Clay Room Studio</h2>
                                <p>Hackney, London</p>
                            </header>
                            <p>A warm, community-led studio focused on wheel throwing and beginner-friendly classes.</p>
                        </article>
                    </li>

                    {/* studio 2 */}
                    <li>
                        <article>
                            {/* img carousel - earth & fire img gallery */}
                            <div>
                                <button aria-label="Previous img">←</button>
                                <img src="" alt="Earth & Fire studio handmade ceramics" />
                                <button aria-label="Next img">→</button>
                            </div>
                            <header>
                                <h2>Earth & Fire</h2>
                                <p>Greenwich, London</p>
                            </header>
                            <p>An intimate studio specialising in hand-building and small group workshops.</p>
                        </article>
                    </li>

                    {/* studio 3 */}
                    <li>
                        <article>
                            {/* img carousel - kiln house img gallery */}
                            <div>
                                <button aria-label="Previous img">←</button>
                                <img src="" alt="Kiln House studio interior with shelves" />
                                <button aria-label="Next img">→</button>
                            </div>
                            <header>
                                <h2>Kiln House</h2>
                                <p>Islington, London</p>
                            </header>
                            <p>Contemporary ceramics studio offering structured courses for all skill levels.</p>
                        </article>
                    </li>

                    {/* studio 4 */}
                    <li>
                        <article>
                            {/* img carousel - south clay studio img gallery */}
                            <div>
                                <button aria-label="Previous img">←</button>
                                <img src="" alt="South Clay Studio pottery class in progress" />
                                <button aria-label="Next img">→</button>
                            </div>
                            <header>
                                <h2>South Clay Studio</h2>
                                <p>Peckham, London</p>
                            </header>
                            <p>A relaxed, welcoming space focused on creative exploration and community learning.</p>
                        </article>
                    </li>
                </ul>
            </section>
        </main>
    )
}