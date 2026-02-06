

export default function NavbarLinks() {
    return(
        <ul 
            className="hidden md:flex space-x-8 
                       text-neutral-white 
                       font-sans font-normal">
            <li>
                <a 
                    href="/about" 
                    className="hover:underline 
                               hover:text-clay-sand 
                               transition-colors">
                    About
                </a>
            </li>
            <li>
                <a 
                    href="/classes" 
                    className="hover:underline 
                               hover:text-clay-sand 
                               transition-colors">
                    Classes
                </a>
            </li>
            <li>
                <a 
                    href="/studios" 
                    className="hover:underline 
                               hover:text-clay-sand 
                               transition-colors">
                    Studios
                </a>
            </li>
            <li>
                <a 
                    href="/contact" 
                    className="hover:underline 
                               hover:text-clay-sand 
                               transition-colors">
                    Contact
                </a>
            </li>
        </ul>
    )
}