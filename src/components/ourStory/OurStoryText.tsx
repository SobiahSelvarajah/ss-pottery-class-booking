import OurStoryHeading from "../ourStory/OurStoryHeading";
import OurStoryDesc from "../ourStory/OurStoryDesc";
import AboutButton from "../about/AboutButton";


export default function OurStoryText() {
    return(
        <div className="mx-auto max-w-3xl text-left lg:text-center">
            <OurStoryHeading />
            <OurStoryDesc />
            <AboutButton />
        </div>
    )
}