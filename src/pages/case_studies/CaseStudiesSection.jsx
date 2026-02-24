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
            description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
            modalData: {
                image: '/event_2.svg',
                title: 'Alte Cultural Festival 2023',
                description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
                location: 'Convention Center, San Francisco',
                time: 'September 15-17, 2023',
                hostName: 'Sarah Johnson',
                hostImage: '/host.svg',
                eventImages: ['/event_2.svg', '/event_2.svg', '/event_2.svg']
            }
        },
        {
            id: 2,
            image: '/event_3.svg',
            title: 'Demo Day',
            description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
            modalData: {
                image: '/event_3.svg',
                title: 'Demo Day',
                description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
                location: 'Innovation Hub, Austin',
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
            description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
            modalData: {
                image: '/event_4.svg',
                title: 'RenewHer: The Presidential Women Health Transformative Initiative.',
                description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
                location: 'World Trade Center, New York',
                time: 'November 8-11, 2023',
                hostName: 'Elena Rodriguez',
                hostImage: '/host.svg',
                eventImages: ['/event_4.svg', '/event_4.svg', '/event_4.svg']
            }
        },
        {
            id: 4,
            image: '/event_5.svg',
            title: 'Epic Show 2025',
            description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
            modalData: {
                image: '/event_5.svg',
                title: 'Epic Show 2025',
                description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
                location: 'Convention Center, San Francisco',
                time: 'September 15-17, 2023',
                hostName: 'Sarah Johnson',
                hostImage: '/host.svg',
                eventImages: ['/event_1.svg', '/event_1.svg', '/event_1.svg']
            }
        },
        {
            id: 5,
            image: '/event_6.svg',
            title: 'Chrystallis Conversations',
            description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
            modalData: {
                image: '/event_6.svg',
                title: 'Chrystallis Conversations',
                description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
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
            description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
            modalData: {
                image: '/event_1.svg',
                title: 'Nigerian International Aviation Show',
                description: 'Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci',
                location: 'World Trade Center, New York',
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