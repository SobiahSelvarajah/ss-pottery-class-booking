import FooterHeading from "../footerHeading/FooterHeading";
import FooterExplore from "../footerExplore/FooterExplore";

export default function FooterContent() {
    return(
        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
            <FooterHeading />
            <FooterExplore />
            <nav aria-label="Footer navigation - Company links">
                <h3 className="font-heading text-lg mb-4 underline underline-offset-4">About Kiln & Clay</h3>
                <ul className="space-y-2 font-body text-neutral-light">
                    <li><a href="#" className="hover:text-neutral-white transition">About</a></li>
                    <li><a href="#" className="hover:text-neutral-white transition">Contact</a></li>
                    <li><a href="#" className="hover:text-neutral-white transition">FAQs</a></li>
                </ul>
            </nav>
        </div>
    )
}