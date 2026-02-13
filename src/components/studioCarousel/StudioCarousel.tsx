
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
        setCurrentImgIndex((prev) => prev === 0 ? images.length - 1 : prev - 1)
    };

    const nextImg = () => {
        setCurrentImgIndex((prev) => prev === images.length - 1 ? 0 : prev + 1)
    };

    return(
        <div>

            {/* image */}
            <img src={images[currentImgIndex]} alt={alt} />

            {/* left button */}
            <button onClick={previousImg} aria-label="Previous img">←</button>
            
            {/* right button */}
            <button onClick={nextImg} aria-label="Next img">→</button>
        </div>
    )
    
}