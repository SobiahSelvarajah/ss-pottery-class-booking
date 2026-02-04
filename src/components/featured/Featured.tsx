

export default function Featured() {
    return (
        <section>
            <header>
                <h2>Featured Classes</h2>
                <p>Hand-picked pottery sessions led by skilled makers across local studios.</p>
            </header>
            <div>
                <article>
                    <img
                        src="/images/wheel-throwing.jpg"
                        alt="Shaping clay on wheel"
                    />
                    <div>
                        <h3>Wheel Throwing Basics</h3>
                        <p>Learn the fundamentals of centering, shaping, and trimming on the wheel.</p>
                        <p>Beginner · 2 hours</p>
                        <a href="#">View class</a>
                    </div>
                </article>
                <article>
                    <img
                        src="/images/plates.jpg"
                        alt="image of plates"
                    />
                    <div>
                        <h3>Hand-Building with Clay</h3>
                        <p>Explore slab, coil, and pinch techniques to create unique forms.</p>
                        <p>All levels · 2.5 hours</p>
                        <a href="#">View class</a>
                    </div>
                </article>
                <article>
                    <img
                        src="/images/pots-and-bowls.jpg"
                        alt="image of pots and bowls"
                    />
                    <div>
                        <h3>Glazing & Finishing</h3>
                        <p>Discover glazing techniques and surface finishes for your fired pieces.</p>
                        <p>Intermediate · 1.5 hours</p>
                        <a>View class</a>
                    </div>
                </article>
            </div>
        </section>
    )
}
