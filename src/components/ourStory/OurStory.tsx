import OurStoryHeading from "../ourStoryHeading/OurStoryHeading";
import OurStoryDesc from "../ourStoryDesc/OurStoryDesc";

export default function OurStory() {
    return(
        <section className="bg-clay-light px-10 py-20 md:px-15 lg:px-25">
            <div className="mx-auto max-w-3xl text-left lg:text-center">
                <OurStoryHeading />
                <OurStoryDesc />
                <a
                    href="/about"
                    aria-label="Learn more about Kiln & Clay"
                    className="
                        inline-block
                        border-b-2 border-clay-brown
                        font-montserrat text-sm 
                        font-medium uppercase tracking-wide
                        text-clay-brown
                        transition-colors duration-200
                        hover:text-clay-dark
                        hover:border-clay-dark
                    "
                >
                    Learn more
                </a>               
            </div>
        </section>
    )
}