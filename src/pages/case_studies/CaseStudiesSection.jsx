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
                        <h2 className="text-3xl md:text-5xl font-bold text-black dark:text-white mb-4">
                            Explore more success stories
                        </h2>
                        <p className="text-[15px] text-black/60 dark:text-white/60 max-w-3xl mx-auto">
                           It was a wonderful year with our esteemed partners
                            </p>
                    </div>

                    {/* Case Study Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study) => (
                            <button
                                key={study.id}
                                type="button"
                                onClick={() => openModal(study)}
                                className="group relative h-[598px] w-full overflow-hidden rounded-3xl bg-ink bg-cover bg-center text-left"
                                style={{ backgroundImage: `url(${study.image})` }}
                            >
                                {/* dark overlay gradient, bottom to just above the text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 from-0% to-transparent to-45%" />

                                {/* event logo, top left */}
                                <img
                                    src="/teps_logo.svg"
                                    alt="Event logo"
                                    className="absolute left-4 top-4 h-9 w-auto "
                                />

                                {/* title + see case study row, bottom */}
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <h3 className="text-3xl font-semibold text-white" style={{lineHeight:"2rem"}}>
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
