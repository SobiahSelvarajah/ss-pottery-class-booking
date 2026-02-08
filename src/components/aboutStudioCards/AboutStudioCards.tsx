import AboutStudioCard1 from "../aboutStudioCard1/AboutStudioCard1";


export default function AboutStudioCards() {
    return(
        <div className="grid md:grid-cols-3 gap-8">
            <AboutStudioCard1 />

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
    )
}