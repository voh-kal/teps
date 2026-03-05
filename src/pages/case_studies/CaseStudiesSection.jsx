import { useState } from 'react';
import CaseStudyModal from './CaseStudyModal';

function CaseStudiesSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCase, setSelectedCase] = useState(null);

    const caseStudies = [
        {
            id: 1,
            image: '/event_2.svg',
            title: 'Alte Cultural Festival',
            description: 'Alte Culture Fest isn\'t just another Lagos event; it\'s a movement. A big community that promotes identity shaped by self-expression, music, and creative freedom. TEPS was right in the mix, making sure the flow matched the energy with seamless ticketing, QR codes for instant access, and real-time dashboards.',
            modalData: {
                image: '/event_2.svg',
                title: 'Alte Cultural Festival 2023',
                subtitle: 'The TEPS Way!',
                setting: 'Alte Culture Fest isn\'t just another Lagos event; it\'s a movement. A big community that promotes identity shaped by self-expression, music, and creative freedom. This year\'s edition, powered by Q21 Solutions, brought that culture to life once again, and TEPS was right in the mix, making sure the flow matched the energy. Because when a festival means this much to the people, the last thing anyone wants is ticket stress or entry wahala ruining the vibe.',
                challenge: 'Most large-scale festivals have their fair share of last-minute rushes, name changes, guest list tweaks, sponsor updates, and ticket surges (the build before the fun). Our goal was simple: keep the gates open, the data accurate, and the energy uninterrupted.',
                teps: 'The solution started long before event day, built on clear communication and precision. A customized event page made ticket selection and payment quick, while QR codes ensured instant access on arrival. Behind the scenes, live dashboards tracked sales and entry flow in real time, so updates were seamless and queues stayed light.\nBut the real difference came from the people. A team ready to move with the rhythm of the event, coordinating, communicating, and even hosting fun games and interactive activities to keep the mood alive. From the tech that powered the gates to the hands that kept things running, everything was designed to flow.',
                collaboration: 'By the time gates opened at Muri Okunola Park, every route had been mapped, every risk flagged, and every system tested. Communication stayed open, support stayed real-time, and the experience stayed as smooth as the artist lineup. It wasn’t just an organization.\nIt was orchestration.',
                result: 'The results spoke for themselves. Hundreds of tickets sold, zero glitches, and a steady stream of happy guests flowing freely through the park. But beyond the numbers, the real win was the feeling. People walked in smiling, not stressed. As one guest put it:\n“From copping my ticket online to walking through the gates, everything just worked. I could focus on the music, the art, the people, the experience.”',
                takeaway: 'Because at the end of the day, that’s what it’s all about. When rhythm meets precision and attention to detail, great events happen. That’s the TEPS way, creating trackable, successful experiences that feel effortless. ',
                location: 'Muri Okunola Park, Lagos',
                time: 'December 2023',
                hostName: 'Sarah Johnson',
                hostImage: '/host.svg',
                eventImages: ['/event_2.svg', '/event_2.svg', '/event_2.svg']
            }
        },
        {
            id: 2,
            image: '/event_3.svg',
            title: 'Demo Day',
            description: 'The NSIA Prize for Innovation Demo Day is the grand finale of the NSIA Prize for Innovation (NPI). A national innovation competition by the Nigeria Sovereign Investment Authority (NSIA) designed to uncover, support, and fund early-stage Nigerian innovators building solutions to pressing national challenges.....',
            modalData: {
                image: '/event_3.svg',
                title: 'Demo Day',
                subtitle: 'NSIA Prize for Innovation (NPI 3.0)',
                setting: 'The NSIA Prize for Innovation Demo Day is the grand finale of the NSIA Prize for Innovation (NPI). A national innovation competition by the Nigeria Sovereign Investment Authority (NSIA) designed to uncover, support, and fund early-stage Nigerian innovators building solutions to pressing national challenges.\nAs a high-profile event bringing together startup founders, investors, government stakeholders, partners, and media, the organizers required a smooth, structured, and reliable registration system capable of managing multiple guest tiers without friction.',
                challenge: 'With a diverse guest list that included startup founders, investors, government officials, partners, and media representatives, the event required a registration system that could handle multiple tiers of access without friction. The organizers needed to ensure that each guest received the appropriate level of access while maintaining a seamless check-in process on the day of the event.',
                teps: 'TEPS provided a comprehensive solution that combined a user-friendly registration platform with real-time check-in capabilities. The registration process was streamlined to allow for easy sign-up, while the check-in system ensured that guests were quickly verified and granted access according to their designated tier. TEPS\'s platform allowed for efficient management of guest data, reducing wait times and enhancing the overall experience for attendees.',
                collaboration: 'TEPS worked closely with the event organizers to understand the specific needs of each guest tier and to customize the registration and check-in processes accordingly. This collaboration ensured that the system was tailored to the unique requirements of the event, providing a seamless experience for all attendees.',
                result: 'The result was a smooth and efficient registration and check-in process that enhanced the overall experience for attendees. Guests were able to quickly register and check in without any issues, allowing them to focus on the event itself rather than logistical challenges.',
                takeaway: 'At TEPS, we understand that every event is unique, and we are committed to providing tailored solutions that meet the specific needs of our clients. By combining technology with a deep understanding of event dynamics, we are able to create seamless experiences that allow attendees to focus on what matters most – the event itself.',
                location: 'Abuja, Nigeria',
                time: 'October 22, 2023',
                hostName: 'Michael Chen',
                hostImage: '/host.svg',
                eventImages: ['/event_3.svg', '/event_3.svg', '/event_3.svg']
            }
        },
        {
            id: 3,
            image: '/event_4.svg',
            title: 'RenewHer: The Presidential Women Health Transformative Initiative.',
            description: 'The Renew HER Gala & Awards hosted over 600 distinguished guests, VIPs, and government officials across two venues—Eagle Square and State House Banquet Hall. TEPS coordinated movement, security, technology, and people with precision for this Presidential-level event.',
            modalData: {
                image: '/event_4.svg',
                title: 'RenewHer: The Presidential Women Health Transformative Initiative.',
                subtitle: 'TWO VENUES, ONE SEAMLESS JOURNEY: HOW TEPS DELIVERED RENEWHER GALA & AWARDS.',  
                setting: 'The Renew HER Gala & Awards is one of the most anticipated high-level events of the year, hosting over 600 distinguished guests, VIPs, and government officials. With a two-venue format—Eagle Square for arrivals and accreditation, and the State House Banquet Hall for the main event—the organizers needed an access-management partner capable of coordinating movement, security, technology, and people with precision. TEPS was brought in to map a flawless guest journey end-to-end.',
                challenge: 'Executing a Presidential-level event across two sensitive, high-traffic locations came with complex logistical demands. The flow required real-time coordination between check-in teams, transport operations, accreditation desks, and security units. The team needed to manage 600+ guests arriving at different points, run parallel check-in operations, issue and track access cards, support walk-ins and plus-ones, and facilitate continuous communication between Eagle Square and State House. Any delay in logistics, technology, or communication could disrupt the event\'s strict schedule and security requirements.',
                teps: 'TEPS approached the event with a mix of platform intelligence and human-level planning. \nProduct-Side Excellence included Real-Time Check-in Dashboard enabling quick verification of 600+ guests across two independent check-in points, Instant Registration Capability with onsite laptops pre-loaded with TEPS registration for immediate addition of plus-ones and last-minute guests, Backup Systems with offline spreadsheets ensuring seamless check-ins, and Access-Control System with pre-printed, trackable access cards. \nTeam-Side Execution featured a 16-person operations team deployed across both locations, with a 7-man check-in unit at Eagle Square and a 7-man unit at State House for VIP/VVIP arrivals.',
                collaboration: 'From the walkthrough to event day, TEPS worked closely with event planners, protocol teams, and State House security.',
                result: 'The results were frictionless guest processing, reduced congestion, high-profile guests experiencing discreet rapid check-in, real-time updates preventing delays, and full transparency for security and event planners. The organizers commended TEPS for handling this complex, high-security event "with confidence, clarity, and complete control."',
                takeaway: 'At TEPS, every event—whether an intimate gathering or a Presidential-level gala—is an opportunity to turn complexity into clarity. By combining data-driven tools, thoughtful design, and an agile operations team, TEPS continues to deliver event experiences where every guest moves through the journey seamlessly, securely, and effortlessly.',
                location: 'Eagle Square & State House Banquet Hall, Abuja',
                time: 'November 2023',
                hostName: 'Elena Rodriguez',
                hostImage: '/host.svg',
                eventImages: ['/event_4.svg', '/event_4.svg', '/event_4.svg']
            }
        },
        {
            id: 4,
            image: '/self_checkin.svg',
            title: 'Epic Show 2025',
            description: 'Epic Show 2025, hosted by Fashions Finest Africa, brought together emerging designers, industry leaders, and cultural tastemakers for a two-day fashion and business experience. From runway showcases to funding conversations, the event spotlighted innovation, sustainability, and the next generation of.....',
            modalData: {
                image: '/self_checkin.svg',
                title: 'Epic Show 2025',
                subtitle: 'How TEPS Powered a Seamless Fashion Experience at Epic Show 2025',
                setting: 'Epic Show 2025, hosted by Fashions Finest Africa, brought together emerging designers, industry leaders, and cultural tastemakers for a two-day fashion and business experience.\nFrom runway showcases to funding conversations, the event spotlighted innovation, sustainability, and the next generation of African fashion talent. With a diverse audience of designers, buyers, investors, media, and fashion enthusiasts, the organizers needed a registration and access solution that could handle multiple guest tiers while maintaining a seamless experience. TEPS was engaged to ensure that every attendee—from VIPs to walk-ins—could navigate the event with ease.',
                challenge: 'The complexity of Epic Show 2025 stemmed from its diverse audience and multi-faceted programming. The event required a registration system that could manage different guest tiers, including VIPs, designers, buyers, investors, media, and general attendees. Additionally, the organizers needed to ensure a smooth check-in process on the day of the event to prevent bottlenecks and enhance the overall experience.',
                teps: 'With hundreds of guests, designers, media, and VIP attendees expected at Epic Show 2025, organizers needed a fast and organized check-in system to avoid long queues and confusion at the entrance.\nTEPS provided a digital check-in system that allowed:\n - Fast Guest Verification: QR code scanning enabled quick verification of tickets and guest information, reducing wait times and improving flow.\n- Tiered Access Control: The system was configured to recognize different guest tiers, ensuring that VIPs, designers, buyers, investors, media, and general attendees were directed to the appropriate areas without confusion.\n- Real-Time Updates: Event staff had access to real-time data on guest arrivals and check-ins, allowing them to manage the flow of attendees effectively and address any issues promptly.',
                collaboration: 'TEPS worked closely with the event organizers to understand the specific needs of each guest tier and to customize the registration and check-in processes accordingly. This collaboration ensured that the system was tailored to the unique requirements of the event, providing a seamless experience for all attendees.',
                result: 'The result was a smooth and efficient registration and check-in process that enhanced the overall experience for attendees. Guests were able to quickly register and check in without any issues, allowing them to focus on the event itself rather than logistical challenges.',
                takeaway: 'At TEPS, we understand that every event is unique, and we are committed to providing tailored solutions that meet the specific needs of our clients. By combining technology with a deep understanding of event dynamics, we are able to create seamless experiences that allow attendees to focus on what matters most – the event itself.',
                location: 'The Podium, Lekki, Lagos',
                time: 'July 5–6, 2025',
                eventImages: ['/event_1.svg', '/event_1.svg', '/event_1.svg']
            }
        },
        {
            id: 5,
            image: '/jameson.svg',
            title: 'Jameson Distillery Tour (JDOT 2025)',
            subtitle: 'How TEPS Engineered Seamless Multi-City Vendor Management for the Jameson Distillery Tour (JDOT 2025)',
            description: 'The Jameson Distillery Tour (JDOT 2025) is a multi-city experiential series designed to celebrate craft, culture, and community through immersive brand experiences and curated partnerships. Executing an activation of this scale required tight coordination between vendors, internal teams, and stakeholders operating simultaneously across multiple locations.',
            modalData: {
                image: '/jameson.svg',
                title: 'Jameson Distillery Tour (JDOT 2025)',
                setting: 'The Jameson Distillery Tour (JDOT 2025) is a multi-city experiential series designed to celebrate craft, culture, and community through immersive brand experiences and curated partnerships. Executing an activation of this scale required tight coordination between vendors, internal teams, and stakeholders operating simultaneously across multiple locations. To maintain consistency, transparency, and efficiency, TEPS was engaged to manage vendor onboarding, on-site operations, and post-event reconciliation for the entire tour.',
                challenge: 'The complexity of JDOT 2025 stemmed from its scale and mobility—multiple cities, multiple vendor categories, varying operational conditions, and the need for standardized reporting. Ensuring that every partner met compliance requirements, that on-site activities were executed smoothly, and that financial reconciliation remained fast and error-free required an advanced, unified system. Without a structured approach, data silos, miscommunication, and inconsistent vendor performance could easily disrupt the experience.',
                teps: 'TEPS built a structured vendor management system that combined platform automation with disciplined field operations across multiple tour cities.\nOn the product side, vendor onboarding was anchored by a centralized vendor form connected directly to the TEPS database, ensuring that all submitted data was accurate, standardized, and immediately usable without manual re-entry. To maintain visibility across the entire tour, TEPS deployed the JDOT Vendor Tracking Sheet — a live, cloud-based tool that provided real-time updates on vendor approvals, compliance records, and activation status city by city. Financial accountability was handled through Digital Voucher Log Sheets, which tracked every vendor transaction, redemption, and stock movement in a format accessible both digitally and on paper, reducing the risk of discrepancies. Daily Summary Sheets added another layer of oversight, enabling real-time reporting on incidents, performance metrics, and operational insights as each tour stop unfolded.\nOn the team side, TEPS deployed a coordinated staffing roster that clearly defined zones, shifts, and individual responsibilities across all cities, leaving no ambiguity around who owned what. On-site teams worked directly alongside vendors, monitoring live operations and enforcing standardized TEPS protocols to maintain consistency regardless of location. After each tour stop, TEPS led structured post-event debriefs that went beyond a simple review — these sessions fed into a thorough reconciliation cycle where voucher logs, tracking sheets, and performance notes were consolidated into a single, transparent financial and operational report, ensuring clean closure at every stage of the tour.',
                collaboration: 'The partnership between TEPS and the Jameson team was anchored in seamless communication and aligned processes. From onboarding to the final review, TEPS worked closely with JDOT management to synchronize vendor expectations, compliance requirements, and support needs across every city. Cloud-based tools ensured everyone—from field teams to headquarters—was looking at the same information in real time. Together, both teams refined workflows, monitored operations, and ensured that every vendor interaction reflected Jameson’s commitment to excellence and authenticity.',
                result: 'The TEPS X Jameson collaboration significantly elevated the operational standard of the JDOT 2025 tour through standardized vendor management, real-time data visibility, and automated processes that reduced human error and reconciliation delays. Clear documentation strengthened accountability and trust across all teams and vendors, while streamlined financial processes ensured accurate and timely settlements across every city on the tour. The result, as noted by a key stakeholder, was a tour that was "smoother, clearer, and far more efficient than previous editions.',
                takeaway: 'At TEPS, every event is an opportunity to turn complex operations into seamless experiences powered by data, design, and teamwork. The Jameson Distillery Tour (JDOT 2025) demonstrated how combining smart technology with structured processes can transform multi-city vendor management into an efficient, transparent, and scalable system—setting a new benchmark for experiential brand activations across Nigeria and beyond.',
                location: 'Innovation Hub, Austin',
                time: 'October 22, 2023',
                hostName: 'Michael Chen',
                hostImage: '/host.svg',
                eventImages: ['/event_5.svg', '/event_5.svg', '/event_5.svg']
            }
        },
        {
            id: 6,
            image: '/event_1.svg',
            title: 'Nigerian International Aviation Show',
            description: 'The Nigeria Air Show, held in Abuja in December 2025, required a professional check-in solution capable of managing over 3,000 attendees across a three-day event. The organizers needed a system that would eliminate queues, enable seamless on-site registration, and provide accurate, verifiable attendance data.....',
            modalData: {
                image: '/event_1.svg',
                title: 'Nigerian International Aviation Show',
                subtitle: 'TEPS Takes Flight: Seamless Check-In for the Nigerian International Aviation Show',
                setting: 'The Nigeria Air Show, held in Abuja in December 2025, required a professional check-in solution capable of managing over 3,000 attendees across a three-day event. ',
                challenge: 'The organizers needed a system that would eliminate queues, enable seamless on-site registration, and provide accurate, verifiable attendance data.',
                teps: 'TEPS deployed a structured digital check-in platform supported by trained on-ground personnel. Our team ensured smooth crowd control, efficient registration, and real-time tracking of every guest entering the venue.',
                collaboration: 'TEPS worked closely with event organizers, security teams, and venue staff to coordinate check-in logistics, manage crowd flow, and ensure a seamless experience for all attendees.',
                result: 'Every guest was accounted for. Every data point was captured. The result was a smooth, professional arrival experience supported by accurate, data-backed reporting.',
                takeaway: ' This proves that large-scale events can be both seamless and measurable when powered by the right system.',
                location: 'Abuja, Nigeria',
                time: 'November 8-11, 2023',
                hostName: 'Elena Rodriguez',
                hostImage: '/host.svg',
                eventImages: ['/event_6.svg', '/event_6.svg', '/event_6.svg']
            }
        }
    ];

    const openModal = (caseStudy) => {
        setSelectedCase(caseStudy);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCase(null);
    };

    return (
        <>
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                            Our Featured Scenarios
                        </h2>
                        <p className="text-[15px] text-gray-600 max-w-3xl mx-auto">
                           It was a wonderful year with our esteemed partners
                            </p>
                    </div>

                    {/* Case Study Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudies.map((study, index) => (
                            <div 
                                key={study.id} 
                                className={`bg-white ${index % 3 === 1 ? 'md:mt-8' : ''}`}
                            >
                                {/* Card Image */}
                                <div className="mb-3">
                                    <img 
                                        src={study.image} 
                                        alt={study.title}
                                        className="w-full h-[385px] object-cover rounded-lg"
                                    />
                                </div>

                                {/* Card Content */}
                                <div className="text-left px-3">
                                    <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                                        {study.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-[13px] leading-relaxed">
                                        {study.description}
                                    </p>
                                    
                                    {/* See More Button */}
                                    <button
                                        onClick={() => openModal(study)}
                                        className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
                                    >
                                        See More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">                        
                        <a href='/blog' className="bg-[#1082DF] text-white px-6 py-4 rounded-full hover:bg-[#1082dfb0] hover:text-[#19213D] transition-all duration-300">
                            Visit our blog page →
                        </a>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && selectedCase && (
                <CaseStudyModal 
                    caseStudy={selectedCase}
                    onClose={closeModal}
                />
            )}
        </>
    );
}

export default CaseStudiesSection;