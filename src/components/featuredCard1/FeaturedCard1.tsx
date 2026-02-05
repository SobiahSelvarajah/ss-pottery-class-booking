import FeaturedCard1Image from "../featuredCard1Image/FeaturedCard1Image";
import FeaturedCard1Text from "../featuredCard1Text/FeaturedCard1Text";


export default function FeaturedCard1() {
    return(
        <article className="group overflow-hidden rounded-3xl 
                            bg-stone-50 shadow-md transition 
                            hover:-translate-y-3 hover:shadow-lg">
            <FeaturedCard1Image />
            <FeaturedCard1Text />
        </article>
    )
}