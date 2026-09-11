import Statistics from "../../components/Statistics";
function WhySection({ onScheduleDemo }) {
    return (
        <>
            <section className="bg-white dark:bg-[#121212] py-16 md:py-24 relative">

                <div className="max-w-7xl mx-auto px-6 md:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        {/* First Column - Bigger */}
                        <div className="md:col-span-1 flex justify-center items-start">
                            <div className="w-full">
                                <img
                                    src="/why.svg"
                                    alt="TEPS Dashboard Interface"
                                    className="w-full h-auto rounded-lg"
                                />
                            </div>
                        </div>


                        {/* Second Column - Image with White Container and Shadow */}
                        <div className="md:col-span-1">
                            {/* Main Header with Left Border */}
                            <div className="mb-8">
                                <p className="text-[14px] font-bold text-[#1082DF] uppercase tracking-wider">
                                    ABOUT US
                                </p>
                                <h2 className="text-3xl sm:text-5xl pt-3 font-bold text-gray-900 dark:text-white mb-4 ">
                                    Why TEPS
                                </h2>
                                <p className="text-[14px] text-gray-600 dark:text-white leading-relaxed">
                                    As event curators with over a decade of experience, we have encountered a diverse array of challenges in Africa. We realized that these challenges were not unique to us; they were continent-wide challenges faced by event organisers & owners looking to curate global standard events. We decided to build solutions to automate the event organizing process, while helping organisers & owners save time, costs, and resources. That's how TEPS was born. An end-to-end event management system for everyone by event organizers.
                                </p>
                                <button
                                    type="button"
                                    onClick={onScheduleDemo}
                                    className="inline-flex items-center justify-center rounded-full bg-blue my-10 px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
                                >
                                    Schedule Demo
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* Experience Section */}
            <Statistics color="bg-[#1082DF]" statHeader="Our Experience" statSubHeader="Years of expertise in delivering successful events across diverse industries" statSubHeaderClass="text-lg text-blue-100 max-w-3xl mx-auto" statHeaderClass="text-4xl md:text-5xl font-bold text-white mb-4" />
        </>
    );
}

export default WhySection;