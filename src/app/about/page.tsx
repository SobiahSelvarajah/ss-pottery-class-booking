import AboutIntro from "@/components/aboutIntro/AboutIntro";
import AboutStory from "@/components/aboutStory/AboutStory";
import AboutWhatWeDo from "@/components/aboutWhatWeDo/AboutWhatWeDo";
import AboutMeetStudio from "@/components/aboutMeetStudio/AboutMeetStudio";


export default function AboutPage() {
    return(
        <main className="bg-clay-light text-neutral-dark">
            <AboutIntro />
            <AboutStory />
            <AboutWhatWeDo />
            <AboutMeetStudio />
        </main>
    )
}