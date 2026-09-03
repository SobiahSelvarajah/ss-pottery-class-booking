import AboutIntro from "@/components/about/AboutIntro";
import AboutStory from "@/components/about/AboutStory";
import AboutPurpose from "@/components/about/AboutPurpose";
import AboutStudio from "@/components/about/AboutStudio";


export default function AboutPage() {
    return (
        <main className="bg-clay-light text-neutral-dark">
            <AboutIntro />
            <AboutStory />
            <AboutPurpose />
            <AboutStudio />
        </main>
    );
};