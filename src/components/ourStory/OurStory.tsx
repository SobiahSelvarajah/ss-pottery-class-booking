import OurStoryHeading from "../ourStoryHeading/OurStoryHeading";
import OurStoryDesc from "../ourStoryDesc/OurStoryDesc";
import LearnMoreButton from "../learnMoreButton/LearnMoreButton";

export default function OurStory() {
    return(
        <section className="bg-clay-light px-10 py-20 md:px-15 lg:px-25">
            <div className="mx-auto max-w-3xl text-left lg:text-center">
                <OurStoryHeading />
                <OurStoryDesc />
                <LearnMoreButton />       
            </div>
        </section>
    )
}