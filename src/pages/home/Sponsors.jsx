import { useEffect, useRef } from "react";
import LazyImage from "../../components/LazyImage";

function Sponsors() {
    const scrollRef = useRef(null);

    const sponsors = [
        '/sponsor1.svg', '/sponsor2.svg', '/sponsor3.svg', '/sponsor4.svg',
        '/sponsor5.svg', '/sponsor6.svg', '/sponsor7.svg', '/sponsor8.svg',
        '/sponsor9.svg', '/sponsor10.svg', '/sponsor11.svg', '/sponsor12.svg',
        '/sponsor13.svg', '/sponsor14.svg', '/sponsor15.svg',
    ];

    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        // Get actual width of ONE set of sponsors
        const singleSetWidth = el.scrollWidth / 2;

        let start = null;
        const duration = 40000; // 40 seconds
        let animFrame;

        function step(timestamp) {
            if (!start) start = timestamp;
            const elapsed = (timestamp - start) % duration;
            const progress = elapsed / duration;
            el.style.transform = `translateX(-${progress * singleSetWidth}px)`;
            animFrame = requestAnimationFrame(step);
        }

        animFrame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(animFrame);
    }, []);

    return (
        <div className="bg-[rgba(0,0,0,0.05)] py-16">
            <div className="max-w-7xl mx-auto text-center">
                <div className="px-6 md:px-8 mb-12">
                    <h2 className="max-w-4xl mx-auto text-1xl md:text-2xl font-semibold">
                        <span className="font-extrabold">100+</span> companies manage their events with TEPS
                    </h2>
                </div>

                <div className="relative overflow-hidden">
                    {/* Left gradient */}
                    {/* <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[rgba(0,0,0,0.05)] to-transparent z-10 pointer-events-none" /> */}
                    {/* Right gradient */}
                    {/* <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[rgba(0,0,0,0.05)] to-transparent z-10 pointer-events-none" /> */}

                    <div ref={scrollRef} className="flex" style={{ width: 'max-content' }}>
                        {[...sponsors, ...sponsors].map((sponsor, index) => (
                            <div key={index} className="flex-shrink-0 w-[200px] md:w-[250px]">
                                <LazyImage
                                    src={sponsor}
                                    alt={`Sponsor ${(index % sponsors.length) + 1}`}
                                    className="h-[100px] object-contain mx-auto"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;