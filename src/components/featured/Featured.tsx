import FeaturedIntro from "../featuredIntro/FeaturedIntro";
import FeaturedCards from "../featuredCards/FeaturedCards";


export default function Featured() {
    return (
        <section className="bg-stone-200/70 px-10 py-20 md:px-15 lg:px-25">
            <FeaturedIntro />
            <FeaturedCards />
        </section>
    )
}
