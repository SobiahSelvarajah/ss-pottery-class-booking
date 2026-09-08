import FeaturedClass1 from "./FeaturedClass1";
import FeaturedClass2 from "./FeaturedClass2";
import FeaturedClass3 from "./FeaturedClass3";


export default function FeaturedClasses() {
    return(
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeaturedClass1 />
            <FeaturedClass2 />
            <FeaturedClass3 />
        </div>
    )
}