"use client"

import { useState } from "react";

type StudioCarouselProps = {
    images: string[];
    alt: string
};


export default function StudioCarousel({images, alt}: StudioCarouselProps) {

    const [currentImgIndex, setCurrentImgIndex] = useState(0);

    // prev - previous value of current index
    const previousImg = () => {
        setCurrentImgIndex((prev) => 
            prev === 0 
                ? images.length - 1 
                : prev - 1
            )
    };

    const nextImg = () => {
        setCurrentImgIndex((prev) => 
            prev === images.length - 1 
                ? 0 
                : prev + 1
            )
    };

    return(
        <div className="relative w-full h-64 overflow-hidden rounded-xl group">

            {/* image */}
            <img 
                src={images[currentImgIndex]} 
                alt={alt} 
                className="w-full h-full object-cover transition duration-500 ease-in-out"
            />

            {/* left button */}
            <button 
                onClick={previousImg} 
                aria-label="Previous img" 
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-neutral-white/80 backdrop-blur-sm text-clay-dark rounded-full w-9 h-9 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition"
            >
                ←
            </button>
            
            {/* right button */}
            <button 
                onClick={nextImg} 
                aria-label="Next img" 
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-neutral-white/80 backdrop-blur-sm text-clay-dark rounded-full w-9 h-9 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition"
            >
                →
            </button>

            {/* dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2.5 h-2.5 rounded-full transition 
                            ${index === currentImgIndex
                                ? "bg-clay-brown"
                                : "bg-neutral-light"
                            }
                        `}
                    ></div>
                ))}
            </div>
        </div>
    )
}