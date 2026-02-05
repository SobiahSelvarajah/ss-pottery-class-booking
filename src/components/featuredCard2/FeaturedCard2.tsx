

export default function FeaturedCard2() {
    return(
        <article className="group overflow-hidden rounded-3xl bg-stone-50 shadow-md transition hover:-translate-y-3 hover:shadow-lg">
            <img
                src="/images/plates.jpg"
                alt="image of plates"
                className="h-56 w-full object-cover"
            />
            <div className="p-7">
                <h3 className="font-heading text-xl mb-2 text-stone-900">Hand-Building with Clay</h3>
                <p className="font-body text-stone-600 mb-4">Explore slab, coil, and pinch techniques to create unique forms.</p>
                <p className="mb-6 text-sm text-stone-500">All levels · 2.5 hours</p>
                <a href="#" className="inline-block rounded-full border border-stone-400 px-6 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-800 hover:text-stone-50">View class</a>
            </div>
        </article>
    )
}