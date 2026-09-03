import AboutPurposeHeading from "./AboutPurposeHeading";
import AboutPurposeDesc from "./AboutPurposeDesc";


export default function AboutPurposeText() {
    return(
        <div className="order-2 md:order-1 sm:text-left md:text-right">
            <AboutPurposeHeading />
            <AboutPurposeDesc />
        </div>
    )
}