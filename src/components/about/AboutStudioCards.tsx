import AboutStudioCard1 from "../about/AboutStudioCard1";
import AboutStudioCard2 from "../about/AboutStudioCard2";
import AboutStudioCard3 from "../about/AboutStudioCard3";


export default function AboutStudioCards() {
    return(
        <div className="grid md:grid-cols-3 gap-8">
            <AboutStudioCard1 />
            <AboutStudioCard2 />
            <AboutStudioCard3 />
        </div>         
    )
}