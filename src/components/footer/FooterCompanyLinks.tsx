import Link from "next/link";


export default function FooterCompanyLinks() {
    return(
        <ul className="space-y-2 font-body text-neutral-light">
            <li>
                <Link 
                    href="/" 
                    className="hover:text-neutral-white transition"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                    href="/about" 
                    className="hover:text-neutral-white transition"
                >
                    About
                </Link>
            </li>
            <li>
                <Link 
                    href="/contact" 
                    className="hover:text-neutral-white transition"
                >
                    Contact
                </Link>
            </li>
        </ul>
    )
}