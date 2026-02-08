import AboutIntro from "@/components/aboutIntro/AboutIntro";
import AboutStory from "@/components/aboutStory/AboutStory";
import AboutWhatWeDo from "@/components/aboutWhatWeDo/AboutWhatWeDo";
import AboutStudio from "@/components/aboutStudio/AboutStudio";


export default function AboutPage() {
    return(
        <main className="bg-clay-light text-neutral-dark">
            <AboutIntro />
            <AboutStory />
            <AboutWhatWeDo />
            <AboutStudio />
        </main>
    )
}