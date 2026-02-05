import FeaturedCard3Image from "../featuredCard3Image/FeaturedCard3Image";
import FeaturedCard3Text from "../featuredCard3Text/FeaturedCard3Text";


export default function FeaturedCard3() {
    return(
        <article className="group overflow-hidden rounded-3xl 
                            bg-stone-50 shadow-md transition 
                            hover:-translate-y-3 hover:shadow-lg">
            <FeaturedCard3Image />
            <FeaturedCard3Text />
        </article>
    )
}