import HeroIntro from "../heroIntro/HeroIntro";
import HeroImages from "../heroImages/HeroImages";

export default function Hero() {
    return(
        <section className="bg-clay-light px-10 py-20 md:px-15 lg:px-25">
            <HeroIntro />
            <HeroImages />
        </section>
    )
}