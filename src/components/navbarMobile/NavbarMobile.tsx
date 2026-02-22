"use client";

import { useState } from "react";
import Link from "next/link";


export default function NavbarMobile() {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return(
        <div className="md:hidden px-2">

            {/* hamburger button */}
            <button 
                aria-label={navbarOpen ? "Close navbar" : "Open navbar"} 
                onClick={() => setNavbarOpen(!navbarOpen)}
                className="p-2 rounded-md focus:outline-none 
                           focus:ring-2 focus:ring-clay-brown"
            >
                <svg
                    className="w-6 h-6 text-neutral-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {navbarOpen ? (
                        // icon when navbar open
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="M6 18L18 6M6 6l12 12"
                        />                        
                    ) : (
                        // icon when navbar closed
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 8h16M4 16h16"
                        />
                    )}
                </svg>
            </button>

            {/* dropdown menu */}
            {navbarOpen && (
                <div className="absolute top-full left-0 w-full 
                                bg-clay-dark text-neutral-white 
                                rounded-b-lg mt-2 shadow-lg z-50">
                    <ul className="flex flex-col">
                        <li className="border-b border-neutral-light">
                            <Link 
                                href="/" 
                                className="block px-4 py-3 transition 
                                           hover:bg-clay-brown">
                                Home
                            </Link>
                        </li>
                        <li className="border-b border-neutral-light">
                            <Link 
                                href="/about" 
                                className="block px-4 py-3 transition 
                                           hover:bg-clay-brown">
                                About
                            </Link>
                        </li>
                        <li className="border-b border-neutral-light">
                            <Link 
                                href="/bookings" 
                                className="block px-4 py-3 transition 
                                           hover:bg-clay-brown">
                                Bookings
                            </Link>
                        </li>
                        <li className="border-b border-neutral-light">
                            <Link 
                                href="/studios" 
                                className="block px-4 py-3 transition 
                                           hover:bg-clay-brown">
                                Studios
                            </Link>
                        </li>
                        <li>
                            <Link 
                                href="/contact" 
                                className="block px-4 py-3 transition 
                                           hover:bg-clay-brown">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}