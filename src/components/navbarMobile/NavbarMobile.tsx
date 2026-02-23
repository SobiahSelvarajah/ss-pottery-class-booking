"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


export default function NavbarMobile() {

    // navbar initial state
    const [navbarOpen, setNavbarOpen] = useState(false);

    // body scroll lock
    useEffect(() => {
        if (navbarOpen) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = "";
        }

        // in case component unmounts whilst open
        return () => {
            document.body.style.overflow = "";
        }
    }, [navbarOpen]);

    return(
        <div className="md:hidden px-2">

            {/* hamburger button */}
            <button 
                aria-label={navbarOpen ? "Close navbar" : "Open navbar"} 
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="relative w-8 h-8 flex flex-col 
                           justify-center items-center 
                           gap-1.5 focus:outline-none"
            >
                {/* first line */}
                <span
                    className={`block h-0.5 w-6 bg-neutral-white 
                                origin-center transform transition-all 
                                duration-300 ease-in-out 
                                ${navbarOpen ? "rotate-45 translate-y-2" : ""}
                    `}
                />

                {/* second line */}
                <span
                    className={`block h-0.5 w-6 bg-neutral-white 
                                transition-all duration-300 
                                ease-in-out 
                                ${navbarOpen ? "opacity-0" : "opacity-100"}
                    `}
                />

                {/* third line */}
                <span
                    className={`block h-0.5 w-6 bg-neutral-white 
                                transform transition-all 
                                duration-300 ease-in-out 
                                ${navbarOpen ? "-rotate-45 -translate-y-2" : ""}
                    `}
                />
            </button>

            {/* overlay */}
            <div
                onClick={() => setNavbarOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm 
                            transition-opacity duration-300 z-40 
                            ${navbarOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
            />

            {/* slide effect */}
            <div
                className={`fixed top-0 right-0 h-full w-64 
                            bg-clay-dark text-neutral-white 
                            shadow-xl transform transition-transform 
                            duration-300 ease-in-out z-50 
                            ${navbarOpen ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className="flex flex-col h-full p-6">
                    <nav className="flex flex-col gap-12 text-lg mt-30">
                        <Link 
                            href="/" 
                            onClick={() => setNavbarOpen(false)}
                        >Home
                        </Link>
                        <Link 
                            href="/about" 
                            onClick={() => setNavbarOpen(false)}
                        >About
                        </Link>
                        <Link 
                            href="/bookings" 
                            onClick={() => setNavbarOpen(false)}
                        >Bookings
                        </Link>
                        <Link 
                            href="/studios" 
                            onClick={() => setNavbarOpen(false)}
                        >Studios
                        </Link>
                        <Link 
                            href="contact" 
                            onClick={() => setNavbarOpen(false)}
                        >Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </div>
    )
}