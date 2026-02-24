
import { useState, useEffect } from 'react';

function Hero() {
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    const [nextBgIndex, setNextBgIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);
    
    // Array of background images
    const backgroundImages = [
        '/case_studies_1.svg',
        '/case_studies_2.svg',
        '/case_studies_3.svg',
        '/case_studies_4.svg',
        '/case_studies_5.svg',
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            
            // Calculate next image index
            const nextIndex = (currentBgIndex + 1) % backgroundImages.length;
            setNextBgIndex(nextIndex);
            
            // After transition completes, update current image
            setTimeout(() => {
                setCurrentBgIndex(nextIndex);
                setIsTransitioning(false);
            }, 500); // Full transition duration
        }, 5000);

        return () => clearInterval(interval);
    }, [currentBgIndex, backgroundImages.length]);

    return (
        <div className="relative overflow-hidden py-36">
            {/* Current Background Image (base layer) */}
            <div 
                className="absolute inset-0 bg-cover bg-top bg-no-repeat"
                style={{ backgroundImage: `url('${backgroundImages[currentBgIndex]}')` }}
            >
                {/* Dark overlay for current image */}
                <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>

            {/* Next Background Image (slides up from bottom) */}
            <div 
                className={`absolute inset-0 bg-cover bg-top bg-no-repeat transform transition-transform duration-500 ease-in-out ${
                    isTransitioning ? 'translate-y-0' : 'translate-y-full'
                }`}
                style={{ backgroundImage: `url('${backgroundImages[nextBgIndex]}')` }}
            >
                {/* Dark overlay for next image */}
                <div className="absolute inset-0 bg-black opacity-80"></div>
            </div>

            {/* Content - Fixed position, doesn't move with background */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-20 space-y-14">
                <div className="w-[119px] mx-auto">
                    <img src="/teps_logo.svg" alt="TEPS Logo" className="w-full" />
                </div>

                <div className=" max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-5xl font-bold text-white ">Experience the Power of TEPS in Action</h1>
                </div>
            </div>
        </div>
    );
}

export default Hero;