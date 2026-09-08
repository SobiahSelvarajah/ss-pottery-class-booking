import Link from "next/link";


export default function FooterExploreLinks() {
    return(
        <ul className="space-y-2 font-body text-neutral-light">
            <li>
                <Link 
                    href="/studios" 
                    className="hover:text-neutral-white transition"
                >
                    Studios
                </Link>
            </li>
            <li>
                <Link 
                    href="/studios" 
                    className="hover:text-neutral-white transition"
                >
                    Book a session
                </Link>
            </li>
        </ul>
    );
}