import FooterHeading from "./FooterHeading";
import FooterExplore from "./FooterExplore";
import FooterCompany from "./FooterCompany";


export default function FooterContent() {
    return(
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
            <FooterHeading />
            <FooterExplore />
            <FooterCompany />
        </div>
    )
}