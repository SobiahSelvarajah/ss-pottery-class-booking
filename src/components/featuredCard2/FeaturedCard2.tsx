import FeaturedCard2Image from "../featuredCard2Image/FeaturedCard2Image";
import FeaturedCard2Text from "../featuredCard2Text/FeaturedCard2Text";


export default function FeaturedCard2() {
    return(
        <article className="group overflow-hidden rounded-3xl 
                            bg-stone-50 shadow-md transition 
                            hover:-translate-y-3 hover:shadow-lg">
            <FeaturedCard2Image />
            <FeaturedCard2Text />
        </article>
    )
}