import AboutStoryImage from "./AboutStoryImage";
import AboutStoryText from "./AboutStoryText";


export default function AboutStory() {
    return(
        <section className="max-w-6xl mx-auto px-10 py-10 grid md:grid-cols-2 gap-15 items-center">
            <AboutStoryImage />
            <AboutStoryText />
        </section>
    )
}