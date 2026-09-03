import FeaturedHeading from "../featured/FeaturedHeading";
import FeaturedDesc from "../featured/FeaturedDesc";


export default function FeaturedIntro() {
    return(
        <header className="mb-12 max-w-2xl">
            <FeaturedHeading />
            <FeaturedDesc />
        </header>
    )
}