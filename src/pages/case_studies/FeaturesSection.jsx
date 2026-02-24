function FeaturesSection() {
    const challenges = [
        {
            id: 1,
            logo: '/number_1.svg',
            description: 'Ensuring quick and hassle-free entry for a large number of attendees.'
        },
        {
            id: 2,
            logo: '/number_2.svg',
            description: 'Distinguishing different guest categories for access control.'
        },
        {
            id: 3,
            logo: '/number_3.svg',
            description: 'Vendors accountability'
        }
    ];

    const solutions = [
        {
            id: 1,
            logo: '/features_1.svg',
            title: 'QR Code Integration',
            description: 'TEPS provided personalized QR codes for each attendee, enabling swift entry through simple scanning. Guests are happy when there\'s no delay.'
        },
        {
            id: 2,
            logo: '/features_2.svg',
            title: 'Access Wrist Tags',
            description: 'TEPS provided personalized QR codes for each attendee, enabling swift entry through simple scanning. Guests are happy when there\'s no delay.'
        },
        {
            id: 3,
            logo: '/features_0.svg',
            title: 'Exhibitor Accreditation',
            description: 'TEPS streamlined the exhibitor accreditation process, ensuring authorized participation in the exhibition.'
        }
    ];


    return (
        <>

            <section className="bg-[#F5F5DC] py-8 md:py-12">
                <div className="max-w-5xl mx-auto px-6 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            The Challenges
                        </h2>
                        <p className="text-[15px] text-gray-600 max-w-3xl mx-auto">
                           We understand how challeging it is to coordinate an event properly
                        </p>
                    </div>

                    {/* Features Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {challenges.map((challenge) => (
                            <div
                                key={challenge.id}
                                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Logo */}
                                <div className="flex justify-center mb-6">
                                    <img
                                        src={challenge.logo}
                                        alt="TEPS Logo"
                                        className="w-[41px] h-[41px] object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <p className="text-gray-600 text-[15px]">
                                        {challenge.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </section>
            <section className="bg-[#F5F5DC] py-8 md:py-12">
                <div className="max-w-5xl mx-auto px-6 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                           How we solved them
                        </h2>
                        <p className="text-[15px] text-gray-600 max-w-3xl mx-auto">
                           TEPS has an awesome way of ensuring your event runs smoothly from start to finish
                        </p>
                    </div>

                    {/* Features Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">                      
                        {solutions.map((solution) => (
                            <div
                                key={solution.id}
                                className="bg-[#3AA0FF] p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                {/* Logo */}
                                <div className="flex justify-center mb-6">
                                    <img
                                        src={solution.logo}
                                        alt="TEPS Logo"
                                        className="w-[41px] h-[41px] object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-[16px] font-bold text-white mb-2">
                                        {solution.title}
                                    </h3>
                                    <p className="text-white text-[14px]">
                                        {solution.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>

    );
}

export default FeaturesSection;