

export default function ExperienceSteps() {
    return(
        <div className="grid gap-5 lg:gap-10 
                        md:grid-cols-3 lg:grid-cols-1">
            <section className="rounded-2xl bg-white 
                                p-6 shadow-sm">
                <h3 className="font-heading text-xl mb-2">
                    Step 1: Discover
                </h3>
                <p className="font-body text-neutral-mid">
                    Browse pottery classes 
                    and studios near you.
                </p>
            </section>
            <section className="rounded-2xl bg-white 
                                p-6 shadow-sm">
                <h3 className="font-heading text-xl mb-2">
                    Step 2: Book
                </h3>
                <p className="font-body text-neutral-mid">
                    Choose a class that fits your 
                    schedule and skill level.
                </p>
            </section>
            <section className="rounded-2xl bg-white 
                                p-6 shadow-sm">
                <h3 className="font-heading text-xl mb-2">
                    Step 3: Create
                </h3>
                <p className="font-body text-neutral-mid">
                    Get hands-on and bring your 
                    clay ideas to life.
                </p>
            </section>                    
        </div>
    )
}