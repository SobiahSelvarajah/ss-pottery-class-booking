import FooterCompanyHeading from "../footerCompanyHeading/FooterCompanyHeading";
import FooterCompanyLinks from "../footerCompanyLinks/FooterCompanyLinks";


export default function FooterCompany() {
    return(
        <nav aria-label="Footer navigation - Company links">
            <FooterCompanyHeading />
            <FooterCompanyLinks />
        </nav>
    )
}