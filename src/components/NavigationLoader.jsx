import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function NavigationLoader({ children }) {
    const [isNavigating, setIsNavigating] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Start loading when location changes
        setIsNavigating(true);
        
        // End loading after a short delay
        const timer = setTimeout(() => {
            setIsNavigating(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [location]);

    // Intercept all link clicks to show loader
    useEffect(() => {
        const handleLinkClick = (e) => {
            const target = e.target.closest('a');
            if (target && target.href && !target.href.startsWith('#')) {
                // Only show loader for internal navigation
                if (target.href.includes(window.location.origin)) {
                    setIsNavigating(true);
                }
            }
        };

        document.addEventListener('click', handleLinkClick);
        return () => document.removeEventListener('click', handleLinkClick);
    }, []);

    return (
        <>
            {children}
            {isNavigating && (
                <div className="fixed top-0 left-0 w-full h-1 z-50">
                    <div className="h-full bg-[#1082df] animate-pulse" 
                         style={{ 
                             background: 'linear-gradient(90deg, #1082df, #3aa0ff, #1082df)',
                             backgroundSize: '200% 100%',
                             animation: 'loading-bar 1s infinite'
                         }}>
                    </div>
                </div>
            )}
            
            <style jsx>{`
                @keyframes loading-bar {
                    0% { background-position: 200% 0; }
                    100% { background-position: -200% 0; }
                }
            `}</style>
        </>
    );
}

export default NavigationLoader;