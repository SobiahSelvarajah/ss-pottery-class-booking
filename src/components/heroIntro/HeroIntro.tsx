

export default function HeroIntro() {
    return(
        <div className="flex flex-col gap-6 md:flex-row
                        md:items-center md:justify-between">
            <h1 className="font-heading text-4xl md:text-5xl 
                           text-neutral-black max-w-md">
                Discover Clay Art
            </h1>
            <p className="font-body text-lg text-neutral-dark 
                          max-w-md md:text-right">
                Explore local pottery classes and 
                enhance your skills at Kiln & Clay.
            </p>
        </div>
    )
}