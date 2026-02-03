import HeroHeading from "../heroHeading/HeroHeading";
import HeroDesc from "../heroDesc/HeroDesc";


export default function HeroIntro() {
    return(
        <div className="flex flex-col gap-6 md:flex-row
                        md:items-center md:justify-between">
            <HeroHeading />
            <HeroDesc />
        </div>
    )
}