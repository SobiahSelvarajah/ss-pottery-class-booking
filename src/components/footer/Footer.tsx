import FooterContent from "../footerContent/FooterContent";
import FooterCopyright from "../footerCopyright/FooterCopyright";

export default function Footer() {
    return(
        <footer className="bg-clay-dark text-neutral-white 
                            px-10 py-20 md:px-15 lg:px-25">
            <FooterContent />
            <FooterCopyright />
        </footer>
    )
}