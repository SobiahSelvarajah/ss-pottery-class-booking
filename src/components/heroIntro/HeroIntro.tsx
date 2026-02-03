import HeroHeading from "../heroHeading/HeroHeading";


export default function HeroIntro() {
    return(
        <div className="flex flex-col gap-6 md:flex-row
                        md:items-center md:justify-between">
            <HeroHeading />
            <p className="font-body text-lg text-neutral-dark 
                          max-w-md md:text-right">
                Explore local pottery classes and 
                enhance your skills at Kiln & Clay.
            </p>
        </div>
    )
}