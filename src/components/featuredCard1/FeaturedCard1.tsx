import FeaturedCard1Image from "../featuredCard1Image/FeaturedCard1Image";


export default function FeaturedCard1() {
    return(
        <article className="group overflow-hidden rounded-3xl 
                            bg-stone-50 shadow-md transition 
                            hover:-translate-y-3 hover:shadow-lg">
            <FeaturedCard1Image />
            <div className="p-7">
                <h3 className="font-heading text-xl mb-2 text-stone-900">Wheel Throwing Basics</h3>
                <p className="font-body text-stone-600 mb-4">Learn the fundamentals of centering, shaping, and trimming on the wheel.</p>
                <p className="mb-6 text-sm text-stone-500">Beginner · 2 hours</p>
                <a href="#" className="inline-block rounded-full border border-stone-400 px-6 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-800 hover:text-stone-50">View class</a>
            </div>
        </article>
    )
}