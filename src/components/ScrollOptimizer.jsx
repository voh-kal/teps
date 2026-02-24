import { useEffect } from 'react';

function ScrollOptimizer({ children }) {
    useEffect(() => {
        let ticking = false;
        
        // Throttle scroll events to prevent white screen during fast scrolling
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    // Add any scroll-related optimizations here
                    ticking = false;
                });
                ticking = true;
            }
        };

        // Add smooth scrolling behavior
        const addSmoothScrolling = () => {
            document.documentElement.style.scrollBehavior = 'smooth';
        };

        // Prevent layout shifts during scroll
        const preventLayoutShift = () => {
            const style = document.createElement('style');
            style.textContent = `
                * {
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                }
                
                img {
                    -webkit-transform: translateZ(0);
                    transform: translateZ(0);
                }
                
                .loading-placeholder {
                    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
                    background-size: 200% 100%;
                    animation: loading 1.5s infinite;
                }
                
                @keyframes loading {
                    0% {
                        background-position: 200% 0;
                    }
                    100% {
                        background-position: -200% 0;
                    }
                }
            `;
            document.head.appendChild(style);
        };

        addSmoothScrolling();
        preventLayoutShift();
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <>{children}</>;
}

export default ScrollOptimizer;