
export default function Hero() {
    return(
        <section className="bg-clay-bg px-6 py-16 md:px-12 lg:px-20">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <h1 className="font-heading text-4xl md:text-5xl text-neutral-black max-w-md">
                    Discover Clay Art
                </h1>
                <p className="font-body text-lg text-neutral-dark max-w-md md:text-right">
                    Explore local pottery classes and enhance your skills at Kiln & Clay.
                </p>
            </div>
            <div className="mt-10 flex flex-col gap-5 md:flex-row">
                <img 
                    src="/images/hero-img-1.jpg" 
                    alt="Hands shaping clay on pottery wheel"
                    className="w-full md:w-1/2 rounded-xl object-cover"
                />
                <img 
                    src="/images/hero-img-2.jpg" 
                    alt="Man doing pottery"
                    className="w-full md:w-1/2 rounded-xl object-cover"
                />
            </div>
        </section>
    )
}