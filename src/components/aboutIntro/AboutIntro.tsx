import AboutIntroHeading from "../aboutIntroHeading/AboutIntroHeading";
import AboutIntroDesc from "../aboutIntroDesc/AboutIntroDesc";

export default function AboutIntro() {
    return(
        <section className="max-w-4xl mx-auto px-10 
                            py-20 text-center">
            <header>
                <AboutIntroHeading />
                <AboutIntroDesc />
            </header>
        </section>
    )
}