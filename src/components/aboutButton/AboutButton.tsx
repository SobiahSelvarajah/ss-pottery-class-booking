

export default function AboutButton() {
    return(
        <a
            href="/about"
            aria-label="Learn more about Kiln & Clay"
            className="
                inline-block
                border-b-2 border-clay-brown
                font-montserrat text-sm 
                font-medium uppercase tracking-wide
                text-clay-brown
                transition-colors duration-200
                hover:text-clay-dark
                hover:border-clay-dark
            "
        >
            Learn more
        </a>  
    )
}
