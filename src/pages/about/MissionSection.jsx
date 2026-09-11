import { useState } from 'react'

const TABS = [
    {
        label: 'Our Mission',
        heading: 'Our Company’s Mission',
        body: 'To empower event organizers & owners with tools to create personalized experiences for their attendees from invitation to insights. To empower event organizers & owners with tools to create personalized experiences for their attendees from invitation to insights. To empower event organizers & owners with tools to create personalized experiences for their attendees from invitation to insights.',
    },
    {
        label: 'Our Vision',
        heading: 'Our Company’s Vision',
        body: 'To inspire and power great experiences, one event at a time.',
    },
    {
        label: 'Our Goal',
        heading: 'Our Goal',
        body: 'Build technology that grows with our clients. To continue developing TEPS around the real needs of organisations delivering events at different scales and across different markets.',
    },
]

function MissionSection() {
    const [activeTab, setActiveTab] = useState(0)
    const active = TABS[activeTab]

    return (
        <section className="bg-white dark:bg-[#121212] py-16 md:py-24 relative overflow-hidden">
            {/* bottom-right ambient glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-24 -right-16 h-48 w-48 md:-bottom-32 md:h-46 md:w-46 rounded-full bg-[#2012E89E] blur-3xl"
            />

            <div className="max-w-7xl mx-auto px-6 md:px-8">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                    {/* First Column - Bigger */}
                    <div className="md:col-span-1">
                        {/* Main Header with Left Border */}
                        <div className="mb-8">
                            <p className="text-[14px] font-bold text-[#1082DF] uppercase tracking-wider">
                                OUR MISSION
                            </p>
                            <h2 className="text-3xl sm:text-4xl pt-5 font-bold text-gray-900 dark:text-white mb-4 ">
                                To Power Businesses <br /> Behind Successful Events
                            </h2>

                        </div>

                        {/* Pills Navigation */}
                        <div className="flex space-x-4 mb-8">
                            {TABS.map((tab, i) => (
                                <button
                                    key={tab.label}
                                    type="button"
                                    onClick={() => setActiveTab(i)}
                                    className={`py-2 px-4 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                                        activeTab === i
                                            ? 'bg-[#1082DF] text-white hover:bg-[#0d6bcf], shadow-2xl '
                                            : 'bg-white text-gray-700 hover:bg-gray-300, shadow-2xl '
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                        {/* Content */}
                        <div className="text-gray-600 dark:text-white leading-relaxed text-sm">
                            <h5 className="font-bold text-[18px] mb-2">{active.heading}</h5>
                            <p>{active.body}</p>
                        </div>


                    </div>

                    {/* Second Column - Image with White Container and Shadow */}
                    <div className="md:col-span-1 flex justify-center items-start">
                        <div className="w-full">
                            <img
                                src="/business.svg"
                                alt="Teps power business"
                                className="w-full h-auto rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MissionSection;
