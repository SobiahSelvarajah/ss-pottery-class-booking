

export default function Footer() {
    return(
        <footer className="bg-clay-dark text-neutral-white px-10 py-20 md:px-15 lg:px-25">
            <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
                <h2 className="font-heading text-2xl mb-4">Connect with us <br/>for more information.</h2>
                <nav aria-label="Footer navigation - Explore links">
                    <h3 className="font-heading text-lg mb-4 underline underline-offset-4">
                        Explore
                    </h3>
                    <ul className="space-y-2 font-body text-neutral-light">
                        <li><a href="#" className="hover:text-neutral-white transition">Classes</a></li>
                        <li><a href="#" className="hover:text-neutral-white transition">Studios</a></li>
                        <li><a href="#" className="hover:text-neutral-white transition">Workshops</a></li>
                    </ul>
                </nav>
                <nav aria-label="Footer navigation - Company links">
                    <h3 className="font-heading text-lg mb-4 underline underline-offset-4">About Kiln & Clay</h3>
                    <ul className="space-y-2 font-body text-neutral-light">
                        <li><a href="#" className="hover:text-neutral-white transition">About</a></li>
                        <li><a href="#" className="hover:text-neutral-white transition">Contact</a></li>
                        <li><a href="#" className="hover:text-neutral-white transition">FAQs</a></li>
                    </ul>
                </nav>
            </div>
            <div className="mt-16 border-t border-neutral-mid pt-6 text-left">
                <p className="font-body text-sm text-neutral-light">
                    © 2026 Kiln & Clay. All rights reserved.
                </p>
            </div>
        </footer>
    )
}