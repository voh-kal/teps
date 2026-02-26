function Sponsors() {
    const sponsors = [
        '/sponsor1.svg',
        '/sponsor2.svg',
        '/sponsor3.svg',
        '/sponsor4.svg',
        '/sponsor5.svg',
        '/sponsor6.svg',
        '/sponsor7.svg',
        '/sponsor8.svg',
        '/sponsor9.svg',
        '/sponsor10.svg',
        '/sponsor11.svg',
        '/sponsor12.svg',
        '/sponsor13.svg',
        '/sponsor14.svg',
        '/sponsor15.svg',
    ];

    return (
        <div className="bg-[rgba(0,0,0,0.05)] py-16">
            <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
                <h2 className="max-w-4xl mx-auto text-1xl md:text-2xl font-semibold mb-12">
                    <span className="font-extrabold">100+</span> companies manage their events with TEPS
                </h2>
                
                {/* Infinite Loop Slider */}
                <div className="relative overflow-hidden">
                    <div className="flex animate-infinite-scroll">
                        {/* First set */}
                        {sponsors.map((sponsor, index) => (
                            <div key={`first-${index}`} className="flex-shrink-0 w-[200px] md:w-[250px]">
                                <img 
                                    src={sponsor} 
                                    alt={`Sponsor ${index + 1}`} 
                                    className="h-[121px] object-contain mx-auto" 
                                />
                            </div>
                        ))}
                        {/* Second set - exact duplicate */}
                        {sponsors.map((sponsor, index) => (
                            <div key={`second-${index}`} className="flex-shrink-0 w-[200px] md:w-[250px]">
                                <img 
                                    src={sponsor} 
                                    alt={`Sponsor ${index + 1}`} 
                                    className="h-[121px] object-contain mx-auto" 
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