import OurStoryHeading from "../ourStoryHeading/OurStoryHeading";
import OurStoryDesc from "../ourStoryDesc/OurStoryDesc";
import LearnMoreButton from "../learnMoreButton/LearnMoreButton";


export default function OurStoryText() {
    return(
        <div className="mx-auto max-w-3xl 
                        text-left lg:text-center">
            <OurStoryHeading />
            <OurStoryDesc />
            <LearnMoreButton />
        </div>
    )
}