import FeaturedCard2Image from "./FeaturedCard2Image";
import FeaturedCard2Text from "./FeaturedCard2Text";


export default function FeaturedCard2() {
    return(
        <article className="group overflow-hidden rounded-3xl bg-stone-50 shadow-md transition hover:-translate-y-3 hover:shadow-lg">
            <FeaturedCard2Image />
            <FeaturedCard2Text />
        </article>
    )
}