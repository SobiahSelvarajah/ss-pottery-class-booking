import NavbarLogo from "../navbarLogo/NavbarLogo";
import NavbarLinks from "../navbarLinks/NavbarLinks";
import NavbarMobile from "../navbarMobile/NavbarMobile";


export default function Navbar() {
    return(
        <header className="bg-clay-dark shadow-sm">
            <nav className="mx-auto px-7 md:px-15 lg:px-25
                            py-8 flex items-center 
                            justify-between">
                <NavbarLogo />
                <NavbarLinks />

                {/* mobile responsive */}
                <NavbarMobile />
            </nav>            
        </header>
    )
}