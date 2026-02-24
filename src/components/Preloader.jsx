import { useState, useEffect } from 'react';

function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            // Small delay to ensure smooth transition
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        };

        // Check if page is already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    // Show preloader for route changes
    useEffect(() => {
        const handleRouteChange = () => {
            setIsLoading(true);
            setTimeout(() => setIsLoading(false), 300);
        };

        // Listen for popstate (browser back/forward)
        window.addEventListener('popstate', handleRouteChange);
        
        return () => {
            window.removeEventListener('popstate', handleRouteChange);
        };
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
            {/* Centered Logo with Rotating Circles */}
            <div className="relative flex items-center justify-center">
                {/* Outer Circle - Clockwise Rotation */}
                <div 
                    className="absolute w-32 h-32 rounded-full border-4 border-transparent border-t-[#4284f4]"
                    style={{
                        animation: 'spin 2s linear infinite'
                    }}
                ></div>
                
                {/* Inner Circle - Counter-clockwise Rotation */}
                <div 
                    className="absolute w-20 h-20 rounded-full border-4 border-transparent border-t-[#35e9e9]"
                    style={{
                        animation: 'spin 1.5s linear infinite reverse'
                    }}
                ></div>
                
                {/* TEPS Logo - Centered */}
                <div className="w-12 h-12 z-10 relative">
                    <img 
                        src="/teps_logo.svg" 
                        alt="TEPS Logo" 
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default Preloader;