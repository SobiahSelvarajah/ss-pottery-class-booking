import FeaturedHeading from "../featuredHeading/FeaturedHeading";


export default function FeaturedIntro() {
    return(
        <header className="mb-12 max-w-2xl">
            <FeaturedHeading />
            <p className="font-body text-stone-700">Hand-picked pottery sessions led by skilled makers across local studios.</p>
        </header>
    )
}