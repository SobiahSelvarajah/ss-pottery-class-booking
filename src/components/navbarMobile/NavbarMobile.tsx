

export default function NavbarMobile() {
    return(
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
    )
}