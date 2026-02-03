import FooterContent from "../footerContent/FooterContent";


export default function Footer() {
    return(
        <footer className="bg-clay-dark text-neutral-white px-10 py-20 md:px-15 lg:px-25">
            <FooterContent />
            <div className="mt-16 border-t border-neutral-mid pt-6 text-left">
                <p className="font-body text-sm text-neutral-light">
                    © 2026 Kiln & Clay. All rights reserved.
                </p>
            </div>
        </footer>
    )
}