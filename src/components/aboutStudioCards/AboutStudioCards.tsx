import AboutStudioCard1 from "../aboutStudioCard1/AboutStudioCard1";
import AboutStudioCard2 from "../aboutStudioCard2/AboutStudioCard2";
import AboutStudioCard3 from "../aboutStudioCard3/AboutStudioCard3";


export default function AboutStudioCards() {
    return(
        <div className="grid md:grid-cols-3 gap-8">
            <AboutStudioCard1 />
            <AboutStudioCard2 />
            <AboutStudioCard3 />
        </div>         
    )
}