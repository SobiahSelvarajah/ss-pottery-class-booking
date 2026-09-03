import FooterCompanyHeading from "../footer/FooterCompanyHeading";
import FooterCompanyLinks from "../footer/FooterCompanyLinks";


export default function FooterCompany() {
    return(
        <nav aria-label="Footer navigation - Company links">
            <FooterCompanyHeading />
            <FooterCompanyLinks />
        </nav>
    )
}