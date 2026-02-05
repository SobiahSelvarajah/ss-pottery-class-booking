import FeaturedCard1 from "../featuredCard1/FeaturedCard1";
import FeaturedCard2 from "../featuredCard2/FeaturedCard2";


export default function FeaturedCards() {
    return(
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeaturedCard1 />
            <FeaturedCard2 />
            <article className="group overflow-hidden rounded-3xl bg-stone-50 shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                <img
                    src="/images/pots-and-bowls.jpg"
                    alt="image of pots and bowls"
                    className="h-56 w-full object-cover"
                />
                <div className="p-7">
                    <h3 className="font-heading text-xl mb-2 text-stone-900">Glazing & Finishing</h3>
                    <p className="font-body text-stone-600 mb-4">Discover glazing techniques and surface finishes for your fired pieces.</p>
                    <p className="mb-6 text-sm text-stone-500">Intermediate · 1.5 hours</p>
                    <a className="inline-block rounded-full border border-stone-400 px-6 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-800 hover:text-stone-50">View class</a>
                </div>
            </article>
        </div>
    )
}