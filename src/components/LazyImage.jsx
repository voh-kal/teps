import { useState, useRef, useEffect } from 'react';

function LazyImage({ src, alt, className, placeholder = null }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    return (
        <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
            {/* Placeholder */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 loading-placeholder">
                    {placeholder && (
                        <div className="absolute inset-0 flex items-center justify-center">
                            {placeholder}
                        </div>
                    )}
                </div>
            )}
            
            {/* Actual Image */}
            {isInView && (
                <img
                    src={src}
                    alt={alt}
                    className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
                    onLoad={handleLoad}
                    loading="lazy"
                />
            )}
        </div>
    );
}

export default LazyImage;