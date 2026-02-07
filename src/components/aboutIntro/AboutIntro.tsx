import AboutIntroHeading from "../aboutIntroHeading/AboutIntroHeading";


export default function AboutIntro() {
    return(
        <section className="max-w-4xl mx-auto px-10 
                            py-20 text-center">
            <header>
                <AboutIntroHeading />
                <p className="text-lg md:text-xl 
                              text-neutral-mid 
                              leading-relaxed">
                    A place to discover pottery, 
                    connect with local studios, 
                    and create something 
                    meaningful with 
                    your hands.
                </p>
            </header>
        </section>
    )
}