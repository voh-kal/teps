import { useState } from 'react';
import CaseStudyModal from './CaseStudyModal';
import { IconArrowRight } from '../../components/Icons';
import { caseStudies } from '../../data/caseStudies';
import { Link } from 'react-router-dom';

function CaseStudiesSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCase, setSelectedCase] = useState(null);

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
            <section className="bg-white py-16 transition-colors duration-300 dark:bg-[#212121] md:py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    {/* centralised header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl lg:text-[60px] font-bold text-black dark:text-white mb-4">
                            Explore more success stories
                        </h2>
                     
                    </div>

                    {/* Case Study Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study) => (
                            <button
                                key={study.id}
                                type="button"
                                onClick={() => openModal(study)}
                                className="group relative h-[300px] w-full overflow-hidden rounded-3xl bg-ink bg-cover bg-center text-left shadow-2xl sm:h-[360px] lg:h-[420px]"
                                style={{ backgroundImage: `url(${study.image})` }}
                            >
                                {/* flat dark overlay, matching the highlights carousel cards */}
                                <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/60" />

                                {/* title + see case study row, bottom */}
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <h3 className="line-clamp-2 text-base font-semibold text-white sm:text-lg">
                                        {study.title}
                                    </h3>
                                    <div className="mt-3 flex items-center justify-end gap-2">
                                        <span className="text-sm font-medium text-white">
                                            See Case Study
                                        </span>
                                        <span className="flex h-9 w-9 shrink-0 -rotate-45 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:rotate-0">
                                            <IconArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link to='/blog' className="bg-[#1082DF] text-white px-6 py-4 rounded-full hover:bg-[#1082dfb0] hover:text-[#19213D] transition-all duration-300">
                            Visit our blog page →
                        </Link>
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
