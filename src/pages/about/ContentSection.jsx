function ContentSection() {
    return (
        <section className="bg-white py-16 md:py-24 relative">
            {/* Background Image */}
                <div className="absolute bottom-0 left-2/5 transform -translate-x-1/2">
                    <img src="/2boxes.svg" alt="" className="h-[100px]" />
                </div>
            <div className="max-w-7xl mx-auto px-6 md:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* First Column - Bigger */}
                    <div className="md:col-span-1">
                        {/* Main Header with Left Border */}
                        <div className="mb-8">
                            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-4 border-l-4 border-[#1082DF] pl-6">
                                Why TEPS
                            </h2>
                            <p className="text-[14px] text-gray-600 leading-relaxed">
                                As event curators with over a decade of experience, we have encountered a diverse array of challenges in Africa. We realized that these challenges were not unique to us; they were continent-wide challenges faced by event organisers & owners looking to curate global standard events.
                            </p>
                            <p className="text-[14px] text-gray-600 leading-relaxed mb-6">
                                We decided to build solutions to automate the event organising process, while helping organisers & owners save time, costs, and resources. That's how TEPS was born. An end-to-end event management system for everyone by event organisers.
                            </p>
                        </div>

                        {/* Two Equal Columns Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* First Sub-column */}
                            <div>
                                <h3 className="text-[14px] font-bold text-gray-900 mb-3 border-l-4 border-[#1082DF] pl-6">
                                    Our Mission
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    To empower event organisers & owners with tools to create personalised experiences for their attendees
                                </p>
                            </div>

                            {/* Second Sub-column */}
                            <div>
                                <h3 className="text-[14px] font-bold text-gray-900 mb-3 border-l-4 border-[#1082DF] pl-6">
                                    Our Vision
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    To inspire and power great experiences, one event at a time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Second Column - Image with White Container and Shadow */}
                    <div className="md:col-span-1 flex justify-center items-start">
                        <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm w-full">
                            <img
                                src="/about_teps.png"
                                alt="TEPS Dashboard Interface"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContentSection;