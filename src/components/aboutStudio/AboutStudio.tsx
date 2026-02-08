import AboutStudioIntro from "../aboutStudioIntro/AboutStudioIntro"


export default function AboutStudio() {
    return(
        <section className="bg-clay-sand/30">
            <div className="max-w-6xl mx-auto px-10 py-20">
                <AboutStudioIntro />

                <div className="grid md:grid-cols-3 gap-8">
                    <article className="bg-clay-light p-8 rounded-lg">
                        <h3 className="text-xl font-medium mb-3">
                            Local & Independent
                        </h3>
                        <p className="text-neutral-mid leading-relaxed">
                            Each studio on Kiln & Clay is independently run and deeply rooted in its local creative community.
                        </p>
                    </article>

                    <article className="bg-clay-light p-8 rounded-lg">
                        <h3 className="text-xl font-medium mb-3">
                            Skilled Makers
                        </h3>
                        <p className="text-neutral-mid leading-relaxed">
                            Classes are led by experienced ceramicists who love sharing their knowledge and process.
                        </p>
                    </article>

                    <article className="bg-clay-light p-8 rounded-lg">
                        <h3 className="text-xl font-medium mb-3">
                            Welcoming Spaces
                        </h3>
                        <p className="text-neutral-mid leading-relaxed">
                            From beginners to experienced makers, our studios provide inclusive, supportive environments.
                        </p>
                    </article>
                </div>                    
            </div>
        </section>
    )
}