import FooterCompanyHeading from "../footerCompanyHeading/FooterCompanyHeading";


export default function FooterCompany() {
    return(
        <nav aria-label="Footer navigation - Company links">
            <FooterCompanyHeading />
            <ul className="space-y-2 font-body text-neutral-light">
                <li><a href="#" className="hover:text-neutral-white transition">About</a></li>
                <li><a href="#" className="hover:text-neutral-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-neutral-white transition">FAQs</a></li>
            </ul>
        </nav>
    )
}