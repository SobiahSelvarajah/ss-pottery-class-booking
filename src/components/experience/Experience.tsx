import ExperienceHeading from "../experienceHeading/ExperienceHeading";



export default function Experience() {
    return(
        <article className="bg-clay-light px-10 py-20 md:px-15 lg:px-25">
            <ExperienceHeading />
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="overflow-hidden rounded-3xl">
                    <img
                        src="/images/pottery-wheel.jpg"
                        alt="Hands shaping clay on a pottery wheel"
                        className="h-[40vh] md:h-[50vh] lg:h-[65vh] w-full object-cover"
                    />
                </div>            
                <div className="grid gap-5 lg:gap-10 md:grid-cols-3 lg:grid-cols-1">
                    <section className="rounded-2xl bg-white p-6 shadow-sm">
                        <h3 className="font-heading text-xl mb-2">
                            Step 1: Discover
                        </h3>
                        <p className="font-body text-neutral-mid">
                            Browse pottery classes and studios near you.
                        </p>
                    </section>
                    <section className="rounded-2xl bg-white p-6 shadow-sm">
                        <h3 className="font-heading text-xl mb-2">
                            Step 2: Book
                        </h3>
                        <p className="font-body text-neutral-mid">
                            Choose a class that fits your schedule and skill level.
                        </p>
                    </section>
                    <section className="rounded-2xl bg-white p-6 shadow-sm">
                        <h3 className="font-heading text-xl mb-2">
                            Step 3: Create
                        </h3>
                        <p className="font-body text-neutral-mid">
                            Get hands-on and bring your clay ideas to life.
                        </p>
                    </section>                    
                </div>
            </div>
        </article>
    )
}