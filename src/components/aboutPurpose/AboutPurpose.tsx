import AboutPurposeText from "../aboutPurposeText/AboutPurposeText";
import AboutPurposeImage from "../aboutPurposeImage/AboutPurposeImage";


export default function AboutPurpose() {
    return(
        <section className="max-w-6xl mx-auto px-10 
                            py-20 grid md:grid-cols-2 
                            gap-12 items-center">
            <AboutPurposeText />
            <AboutPurposeImage />
        </section>
    )
}