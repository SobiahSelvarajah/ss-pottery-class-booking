import Link from "next/link";


export default function FooterExploreLinks() {
    return(
        <ul className="space-y-2 font-body text-neutral-light">
            <li>
                <Link 
                    href="/studios" 
                    className="transition-colors duration-300 hover:text-neutral-white"
                >
                    Studios
                </Link>
            </li>
            <li>
                <Link 
                    href="/studios" 
                    className="transition-colors duration-300 hover:text-neutral-white"
                >
                    Book a session
                </Link>
            </li>
            <li>
                <a 
                    href="https://github.com/SobiahSelvarajah/ss-pottery-class-booking"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 hover:text-neutral-white"
                >
                    View Source Code
                </a>
            </li>
        </ul>
    );
}