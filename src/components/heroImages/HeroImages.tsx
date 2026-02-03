

export default function HeroImages() {
    return(
        <div className="mt-5 md:mt-10 lg:mt-15 flex 
                        flex-col gap-5 md:flex-row">
            <img 
                src="/images/hero-img-1.jpg" 
                alt="Hands shaping clay on pottery wheel"
                className="w-full md:w-1/2 rounded-xl object-cover"
            />
            <img 
                src="/images/hero-img-2.jpg" 
                alt="Man doing pottery"
                className="w-full md:w-1/2 rounded-xl object-cover"
            />
        </div>
    )
}