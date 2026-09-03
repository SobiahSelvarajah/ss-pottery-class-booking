import FeaturedCard1 from "../featured/FeaturedCard1";
import FeaturedCard2 from "../featured/FeaturedCard2";
import FeaturedCard3 from "../featured/FeaturedCard3";


export default function FeaturedCards() {
    return(
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeaturedCard1 />
            <FeaturedCard2 />
            <FeaturedCard3 />
        </div>
    )
}