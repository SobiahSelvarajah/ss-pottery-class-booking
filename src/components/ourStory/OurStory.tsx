

export default function OurStory() {
    return(
        <section className="bg-clay-light px-10 py-20 md:px-15 lg:px-25">
            <div className="mx-auto max-w-3xl text-left lg:text-center">
                <h2 className="mb-6 font-montserrat text-3xl font-semibold text-clay-dark md:text-4xl">
                    Our Story
                </h2>
                <p className="mb-8 font-helvetica text-base leading-relaxed text-neutral-dark md:text-lg">
                    Kiln & Clay was created to make pottery feel welcoming, not intimidating.
                    <br/>
                    We connect curious beginners and growing makers with local studios,
                    thoughtful teachers, and hands-on experiences worth slowing down for.
                </p>
                <a
                    href="/about"
                    aria-label="Learn more about Kiln & Clay"
                    className="
                        inline-block
                        border-b-2 border-clay-brown
                        font-montserrat text-sm 
                        font-medium uppercase tracking-wide
                        text-clay-brown
                        transition-colors duration-200
                        hover:text-clay-dark
                        hover:border-clay-dark
                    "
                >
                    Learn more
                </a>               
            </div>
        </section>
    )
}