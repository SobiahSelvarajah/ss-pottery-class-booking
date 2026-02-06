import NavbarLogo from "../navbarLogo/NavbarLogo";
import NavbarLinks from "../navbarLinks/NavbarLinks";


export default function Navbar() {
    return(
        <header className="bg-clay-dark shadow-sm">
            <nav className="mx-auto px-7 md:px-15 lg:px-25
                            py-8 flex items-center 
                            justify-between">
                <NavbarLogo />
                <NavbarLinks />

                {/* mobile responsive */}
                <div className="md:hidden px-2">
                    <button aria-label="Open navbar">
                        <svg
                            className="w-6 h-6 text-neutral-white"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M4 8h16M4 16h16"
                            />
                        </svg>
                    </button>
                </div>
            </nav>            
        </header>
    )
}