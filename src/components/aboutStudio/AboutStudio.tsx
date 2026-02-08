import AboutStudioIntro from "../aboutStudioIntro/AboutStudioIntro"
import AboutStudioCards from "../aboutStudioCards/AboutStudioCards"


export default function AboutStudio() {
    return(
        <section className="bg-clay-sand/30">
            <div className="max-w-6xl mx-auto 
                            px-10 py-20">
                <AboutStudioIntro />
                <AboutStudioCards />           
            </div>
        </section>
    )
}