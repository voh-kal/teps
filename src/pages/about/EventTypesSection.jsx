import Statistics from "../../components/Statistics";
import config from "../../config/api";

function EventTypesSection() {
    return (
        <>
            <section className="bg-gray-50 py-16 md:py-24 relative">
                {/* Background Image */}
                <div className="absolute bottom-0 right-0 ">
                    <img src="/2boxes_2.svg" alt="" className="object-contain" />
                </div>
                <div className="max-w-6xl mx-auto px-6 md:px-8">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        {/* Button-style Header with Gradient Border */}
                        <div className="inline-block mb-16">
                            <div className="bg-gradient-to-r from-[#1082DF] to-[#1082DF] rounded-full p-[1px]">
                                <div className="bg-[#f1f0ff] rounded-full px-3 py-2">
                                    <span className="text-[#1082DF] font-semibold text-[12px]">Types of Events</span>
                                </div>
                            </div>
                        </div>

                        {/* Big Subheader */}
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            We Adapt to every event
                        </h2>

                        {/* Small Subheader */}
                        <p className="max-w-3xl text-gray-600 max-w-3xl mx-auto">
                           From intimate gatherings to large-scale productions, we adapt to all event types and provide tailored features to help you manage your event seamlessly.
                        </p>
                    </div>

                    {/* Content - Two Rows */}
                    <div className="space-y-16">
                        {/* First Row - 2 Columns with Second Column Lower */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                            {/* First Column Card */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <div className="mb-6">
                                    <img
                                        src="/corporate.svg"
                                        alt="Corporate Conference"
                                        className="w-full h-[334px] object-cover rounded-xl"
                                    />
                                </div>
                                <div className="max-w-sm space-y-4 mx-auto text-center">
                                    <h5 className="text-1xl md:text-2xl mb-6 font-bold">Corporate & Professional Events</h5>
                                    <div className="flex flex-wrap gap-4 justify-center pb-5">
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Conferences</span>
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Exhibition shows</span>
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Seminars</span>
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Trade shows</span>
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Product Launch</span>
                                    </div>
                                </div>
                            </div>

                            {/* Second Column Card - Aligned Lower */}
                            <div className="md:mt-12 bg-white rounded-2xl p-6 shadow-lg">
                                <div className="mb-6">
                                    <img
                                        src="/entertainment.svg"
                                        alt="Wedding Celebration"
                                        className="w-full h-[334px] object-cover rounded-xl"
                                    />
                                </div>
                                <div className="max-w-sm space-y-4 mx-auto text-center">
                                    <h5 className="text-1xl md:text-2xl mb-6 font-bold">Entertainment & Lifestyle</h5>
                                    <div className="flex flex-wrap gap-4 justify-center pb-5">
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Festivals</span>
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Parties/Rave</span>
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Concerts</span>
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Award ceremonies</span>
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Comedy Shows</span>
                                        <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Premieres</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Second Row - Shifted Right with Different Layout */}
                        <div className="md:ml-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
                                {/* First Column Card */}
                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="mb-6">
                                        <img
                                            src="/social.svg"
                                            alt="Music Festival"
                                            className="w-full h-[334px] object-cover rounded-xl"
                                        />
                                    </div>
                                    <div className="max-w-md space-y-4  mx-auto text-center">
                                        <h5 className="text-1xl md:text-2xl mb-6 font-bold ">Private & Social Event</h5>
                                        <div className="flex flex-wrap gap-4 justify-center pb-5">
                                            <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Weddings</span>
                                            <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Birthday parties</span>
                                            <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Anniversaries</span>
                                            <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Naming ceremonies</span>
                                            <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Engagement parties</span>
                                            <span className="bg-[rgba(0,0,0,0.13)] rounded-md text-black text-[13px] px-3 py-2">Baby showers</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Second Column - Text Content */}
                                <div className="space-y-6 pt-6 max-w-md">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                                        One platform. Every Event. Perfectly managed
                                    </h3>
                                    <p className="text-[14px] text-[#000000BD] ">
                                       TEPS is a flexible event management platform designed to adapt to all event type by providing purpose-built tools for planning, registration, ticketing, guest management and on-site execution. Whatever you are hosting, TEPS scales and adjusts to match your needs. Create your event on TEPS and manage it confidently.
                                    </p>
                                    <a href={config.getApiUrl(config.endpoints.SIGN_UP)} className="bg-[#1082DF] text-white px-6 py-4 rounded-full font-semibold text-[15px] hover:bg-blue-700 transition-colors duration-300">
                                        Start an Event
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            What Sets Us Apart
                        </h2>
                        <p className="text-[18px] text-gray-600 max-w-3xl mx-auto">
                           TEPS provides a total event management package from start to finish.
                        </p>
                    </div>

                    {/* Three Equal Boxes */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                       
                        <div className="border border-gray-200 rounded-lg p-6 shadow-lg ">
                            <div className="flex items-center mb-4">
                                <span className="text-4xl font-bold text-gray-400 -mr-2">0</span>
                                <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-start pl-2">
                                    <span className="text-2xl font-bold text-white">1</span>
                                </div>
                            </div>
                            <h3 className="text-[24px] font-bold text-[#071440] mb-4 text-left max-w-[250px]">
                                One Software. From Invite to Entry.
                            </h3>
                            <ul className="text-[#5D5D5D] text-[15px] text-left">
                                <li>• Registration & ticketing</li>
                                <li>• E-Invite and RSVP</li>
                                <li>• Access control & check-in</li>
                                <li>• Onsite badge printing & tracking</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 shadow-lg">
                            <div className="flex items-center mb-4">
                                <span className="text-4xl font-bold text-gray-400 -mr-2">0</span>
                                <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-start pl-2">
                                    <span className="text-2xl font-bold text-white">1</span>
                                </div>
                            </div>
                            <h3 className="text-[24px] font-bold text-[#071440] mb-4 text-left max-w-[250px]">
                                Access That Feels Effortless.
                            </h3>
                            <p className="text-[#5D5D5D] text-[15px]">Great access control disappears.</p>
                            <ul className="text-[#5D5D5D] text-[15px] text-left">
                                <li>• Smart hardware</li>
                                <li>• Experienced team</li>
                                <li>• Guest Experience Priority</li>                               
                            </ul>
                            <p className="text-[#5D5D5D] text-[15px]">Behind the scenes, it’s structured. On the surface, it feels calm.</p>
                        </div>

                         <div className="border border-gray-200 rounded-lg p-6 shadow-lg  max-w-md">
                            <div className="flex items-center mb-4">
                                <span className="text-4xl font-bold text-gray-400 -mr-2">0</span>
                                <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-start pl-2">
                                    <span className="text-2xl font-bold text-white">1</span>
                                </div>
                            </div>
                            <h3 className="text-[24px] font-bold text-[#071440] mb-4 text-left max-w-[300px]">
                                Your Data = Intelligence
                            </h3>
                            <p className="text-[#5D5D5D] text-[15px]">Every interaction leaves a trace and TEPS captures it.</p>
                            <ul className="text-[#5D5D5D] text-[15px] text-left">
                                <li>• Who arrived</li>
                                <li>• When they arrived</li>
                                <li>• Where they went</li>
                                <li>• What access they used</li>                               
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <Statistics color="bg-[#1082DF]" statHeader="Our Experience" statSubHeader="Years of expertise in delivering successful events across diverse industries" statSubHeaderClass="text-lg text-blue-100 max-w-3xl mx-auto" statHeaderClass="text-4xl md:text-5xl font-bold text-white mb-4" />

            {/* Our Core Values Section */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Core Values
                        </h2>
                    </div>

                    {/* Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="text-center p-8">
                            <div className="mb-6">
                                <img
                                    src="/excellence.svg"
                                    alt="Innovation"
                                    className="w-16 h-16 mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Excellence
                            </h3>
                            <p className="text-gray-600 text-[14px]">
                                We strive for perfection in every detail, ensuring your event exceeds expectations and creates lasting memories.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="text-center p-8">
                            <div className="mb-6">
                                <img
                                    src="/innovation.svg"
                                    alt="Reliability"
                                    className="w-16 h-16 mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Innovation
                            </h3>
                            <p className="text-gray-600 text-[14px]">
                                We embrace cutting-edge technology and creative solutions to bring fresh, unique experiences to your events.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="text-center p-8">
                            <div className="mb-6">
                                <img
                                    src="/passion.svg"
                                    alt="Excellence"
                                    className="w-16 h-16 mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Passion
                            </h3>
                            <p className="text-gray-600 text-[14px]">
                               Our genuine love for creating exceptional experiences drives us to go above and beyond for every client.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EventTypesSection;