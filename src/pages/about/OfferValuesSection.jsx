import { IconSparkline, IconCompass, IconUsers } from '../../components/Icons.jsx'

const CORE_VALUES = [
    {
        icon: '/core1.svg',
        title: 'Excellence',
        body: 'We strive for perfection in every detail, ensuring your event exceeds expectations and creates lasting memories.',
    },
    {
        icon: '/core2.svg',
        title: 'Innovation',
        body: 'We embrace cutting-edge technology and creative solutions to bring fresh, unique experiences to your events.',
    },
    {
        icon: '/core3.svg',
        title: 'Passion',
        body: 'Our genuine love for creating exceptional experiences drives us to go above and beyond for every client.',
    },
]

function OfferValuesSection() {
    return (
        <>
            {/* sub-section 1: what we offer */}
            <section className="bg-[#FAFAFA] dark:bg-[#121212] py-16 md:py-24 relative overflow-hidden">
                {/* top-right ambient glow */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-16 h-48 w-48 md:-top-32 md:h-46 md:w-46 rounded-full bg-[#2012E89E] blur-3xl"
                />

                {/* decorative half-circle: rises up behind the cards, dips down into the section below.
                    Spans exactly the content container's width (same left/right edges as the cards),
                    not the full viewport. */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="relative mx-auto h-full max-w-7xl px-6 md:px-8">
                        <div
                            aria-hidden="true"
                            className="absolute inset-x-0 bottom-0 h-[300px] w-full  bg-[#1082DF] dark:bg-[#050F27] md:h-[380px] [border-radius:50%_50%_0_0/100%_100%_0_0]"
                        />
                    </div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
                    <div className="max-w-2xl mx-auto text-center mb-14">
                        <h2 className="text-3xl sm:text-4xl font-bold text-[#071440] dark:text-white mb-4">What We Offer</h2>
                        <p className="text-[#5D5D5D] dark:text-white text-base leading-relaxed">
                            TEPS provides a total event management package from start to finish.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-2xl transition-transform duration-300 hover:-translate-y-4">
                            <div className="flex items-center mb-4">
                                <img src="/num_1.svg" alt="one software" />
                            </div>
                            <h3 className="text-[24px] font-bold text-[#071440] mb-4 text-left max-w-[250px]">
                                One Seamless Event Management Platform
                            </h3>
                            <p className='text-[14px] text-[#5D5D5D]'>Plan, manage and deliver exceptional events from one powerful platform. From registration and ticketing to attendee engagement, access control and post event insights, TEPS gives you eeryting you need to create seamless experiences and manage every stage of your event with ease.</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-2xl transition-transform duration-300 hover:-translate-y-4">
                            <div className="flex items-center mb-4">
                                <img src="/num_2.svg" alt="effortless feeling" />
                            </div>
                            <h3 className="text-[24px] font-bold text-[#071440] mb-4 text-left max-w-[250px]">
                                Access Control Services
                            </h3>
                            <p className="text-[#5D5D5D] text-[14px]">Ensure smooth, secure, and efficient entry with reliable access control solutions designed to keep your event moving. From smart technology to experienced on-ground support, we make every check-in effortless while putting the attendee experience first.</p>
                        </div>

                        <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-2xl max-w-md transition-transform duration-300 hover:-translate-y-4">
                            <div className="flex items-center mb-4">
                                <img src="/num_3.svg" alt="intelligence data" />
                            </div>
                            <h3 className="text-[24px] font-bold text-[#071440] mb-4 text-left max-w-[300px]">
                                Event Intelligence
                            </h3>
                            <p className="text-[#5D5D5D] text-[14px]">Turn event activity into actionable insights. TEPS captures meaningful attendee data across the event journey, helping you understand movement, engagement, access patterns, and overall event performance.</p>

                        </div>
                    </div>
                </div>
            </section>

            {/* sub-section 2: core values */}
            <section className="relative bg-[#1082DF] dark:bg-[#050F27] pb-20  md:pb-28">
                <div className="relative max-w-7xl mx-auto px-6 md:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-14 md:mb-20">
                        Our Core Values
                    </h2>

                    <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-0">
                        {CORE_VALUES.map((value, index) => {
                            const Icon = value.icon
                            return (
                                <div
                                    key={value.title}
                                    style={{ zIndex: index === 1 ? 3 : index === 0 ? 2 : 1 }}
                                    className={`relative flex aspect-square w-56 shrink-0 flex-col items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 text-center backdrop-blur-sm sm:w-80 ${index > 0 ? 'md:-ml-10' : ''}`}
                                >
                                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                                        <img src={value.icon} alt={value.title} className="h-8 w-8" />
                                    </span>
                                    <h3 className="font-display text-lg font-semibold text-white">{value.title}</h3>
                                    <p className="text-sm leading-relaxed text-blue-100">{value.body}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default OfferValuesSection
