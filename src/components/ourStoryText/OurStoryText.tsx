import OurStoryHeading from "../ourStoryHeading/OurStoryHeading";
import OurStoryDesc from "../ourStoryDesc/OurStoryDesc";
import AboutButton from "../aboutButton/AboutButton";


export default function OurStoryText() {
    return(
        <div className="mx-auto max-w-3xl 
                        text-left lg:text-center">
            <OurStoryHeading />
            <OurStoryDesc />
            <AboutButton />
        </div>
    )
}