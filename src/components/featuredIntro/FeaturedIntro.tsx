import FeaturedHeading from "../featuredHeading/FeaturedHeading";
import FeaturedDesc from "../featuredDesc/FeaturedDesc";


export default function FeaturedIntro() {
    return(
        <header className="mb-12 max-w-2xl">
            <FeaturedHeading />
            <FeaturedDesc />
        </header>
    )
}