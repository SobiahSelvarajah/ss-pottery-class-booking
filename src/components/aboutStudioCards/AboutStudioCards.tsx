import AboutStudioCard1 from "../aboutStudioCard1/AboutStudioCard1";
import AboutStudioCard2 from "../aboutStudioCard2/AboutStudioCard2";


export default function AboutStudioCards() {
    return(
        <div className="grid md:grid-cols-3 gap-8">
            <AboutStudioCard1 />
            <AboutStudioCard2 />

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