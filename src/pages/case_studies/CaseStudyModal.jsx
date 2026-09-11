import { X, MapPin, Clock } from 'lucide-react';
import LazyImage from '../../components/LazyImage';

function SectionHeading({ children }) {
    return (
        <h4 className="inline-block border-b-2 border-blue pb-1 text-base font-semibold text-blue">
            {children}
        </h4>
    );
}

function CaseStudyModal({ caseStudy, onClose }) {
    const modalData = caseStudy.modalData;
    const tepsWay = [modalData.teps, modalData.collaboration].filter(Boolean).join('\n\n');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-2 sm:p-4">
            <div className="relative w-full max-w-2xl">
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
                >
                    <X size={18} />
                </button>

                <div className="max-h-[95vh] w-full overflow-y-auto rounded-2xl bg-white dark:bg-[#161616]">
                    {/* banner image with title overlay */}
                    <div className="relative h-56 w-full overflow-hidden rounded-t-2xl sm:h-64">
                        <LazyImage
                            src={modalData.image}
                            alt={modalData.title}
                            className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/40" />
                        <h2 className="absolute inset-x-6 bottom-6 text-center font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
                            {modalData.title}
                        </h2>
                    </div>

                    <div className="p-6 sm:p-8">
                        <h3 className="text-lg font-bold text-ink dark:text-white">About Event</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate dark:text-white/70">
                            {modalData.setting}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="shrink-0 text-blue" />
                                <span className="text-sm text-slate dark:text-white/80">{modalData.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="shrink-0 text-blue" />
                                <span className="text-sm text-slate dark:text-white/80">{modalData.time}</span>
                            </div>
                        </div>

                        <hr className="my-6 border-ink/10 dark:border-white/10" />

                        <h2 className="text-center font-display text-xl font-bold leading-snug text-ink dark:text-white sm:text-2xl">
                            {modalData.subtitle}
                        </h2>

                        <div className="mt-6 space-y-6">
                            <div>
                                <SectionHeading>The Challenge</SectionHeading>
                                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate dark:text-white/70">
                                    {modalData.challenge}
                                </p>
                            </div>

                            <div>
                                <SectionHeading>TEPS Way</SectionHeading>
                                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate dark:text-white/70">
                                    {tepsWay}
                                </p>
                            </div>

                            <div>
                                <SectionHeading>The result</SectionHeading>
                                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate dark:text-white/70">
                                    {modalData.result}
                                </p>
                            </div>

                            <div>
                                <SectionHeading>The takeaway:</SectionHeading>
                                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate dark:text-white/70">
                                    {modalData.takeaway}
                                </p>
                            </div>
                        </div>

                        {modalData.eventImages && modalData.eventImages.length > 0 && (
                            <div className="mt-8">
                                <h4 className="mb-4 text-lg font-bold text-ink dark:text-white">Photo Highlights</h4>
                                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                                    {modalData.eventImages.map((image, index) => (
                                        <LazyImage
                                            key={index}
                                            src={image}
                                            alt={`Event ${index + 1}`}
                                            className="h-[110px] w-full rounded-lg object-cover sm:h-[130px]"
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudyModal;
