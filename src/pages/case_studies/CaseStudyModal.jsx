import { X, MapPin, Clock } from 'lucide-react';
import LazyImage from '../../components/LazyImage';

function CaseStudyModal({ caseStudy, onClose }) {
    const modalData = caseStudy.modalData;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[95vh] sm:max-h-[90vh] mx-2 sm:mx-4">
                {/* Modal Header */}
                <div className="flex justify-end p-3 sm:p-4">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-black hover:text-gray-700 transition-colors rounded-full p-2"
                    >
                        <X size={16}/>
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-3 sm:p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 h-[calc(95vh-60px)] sm:h-[calc(90vh-80px)] overflow-hidden">
                    {/* Left Column (1/3) */}
                    <div className="lg:col-span-1 space-y-4 sm:space-y-6">
                        {/* Case Study Image */}
                        <div>
                            <LazyImage 
                                src={modalData.image} 
                                alt={modalData.title}
                                className="w-full h-[200px] sm:h-[250px] lg:h-[293px] object-cover rounded-lg"
                            />
                        </div>

                        {/* Host Information */}
                        {/* <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Hosted by
                            </h3>
                            <hr className="border-gray-300 mb-4" />
                            
                           
                            <div className="flex items-center space-x-3">
                                <LazyImage 
                                    src={modalData.hostImage} 
                                    alt={modalData.hostName}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <span className="text-gray-800 font-medium">
                                    {modalData.hostName}
                                </span>
                            </div>
                        </div> */}
                    </div>

                    {/* Right Column (2/3) - Scrollable */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6 overflow-y-auto pr-1 sm:pr-2">
                        {/* Title and Description */}
                        <div>
                            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                                {modalData.title}
                            </h2>
                        </div>

                        {/* Event Details */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {/* Location */}
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <MapPin size={18} className="text-gray-500 flex-shrink-0" />
                                <span className="text-sm sm:text-base text-gray-700">{modalData.location}</span>
                            </div>

                            {/* Time */}
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <Clock size={18} className="text-gray-500 flex-shrink-0" />
                                <span className="text-sm sm:text-base text-gray-700">{modalData.time}</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                                {modalData.subtitle}
                            </h2>
                            <hr className="border-gray-300" />
                        </div>

                        <div>
                            <h4 className='text-base sm:text-lg font-semibold text-gray-900 mb-2'>Setting the Stage</h4>
                            <p className="text-sm sm:text-base text-[#000000A3] leading-relaxed">{modalData.setting}</p>
                        </div>

                        <div>
                            <h4 className='text-base sm:text-lg font-semibold text-gray-900 mb-2'>The Challenge</h4>
                            <p className="text-sm sm:text-base text-[#000000A3] leading-relaxed">{modalData.challenge}</p>
                        </div>

                        <div>
                            <h4 className='text-base sm:text-lg font-bold text-blue-600 mb-2'>TEPS</h4>
                            <p className="text-sm sm:text-base text-[#000000A3] whitespace-pre-line leading-relaxed">{modalData.teps}</p>
                        </div>

                         <div>
                            <h4 className='text-base sm:text-lg font-semibold text-gray-900 mb-2'>Collaboration in Action</h4>
                            <p className="text-sm sm:text-base text-[#000000A3] whitespace-pre-line leading-relaxed">{modalData.collaboration}</p>
                        </div>

                         <div>
                            <h4 className='text-base sm:text-lg font-semibold text-gray-900 mb-2'>Results and Insights</h4>
                            <p className="text-sm sm:text-base text-[#000000A3] whitespace-pre-line leading-relaxed">{modalData.result}</p>
                        </div>

                         <div>
                            <h4 className='text-base sm:text-lg font-semibold text-gray-900 mb-2'>Takeaway</h4>
                            <p className="text-sm sm:text-base text-[#000000A3] leading-relaxed">{modalData.takeaway}</p>
                        </div>

                        {/* Event Images */}
                        {modalData.eventImages && modalData.eventImages.length > 0 && (
                            <div>
                                <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">
                                    Event Gallery
                                </h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                                    {modalData.eventImages.map((image, index) => (
                                        <div key={index}>
                                            <LazyImage 
                                                src={image} 
                                                alt={`Event ${index + 1}`}
                                                className="w-full h-[120px] sm:h-[150px] lg:h-[172px] object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                                            />
                                        </div>
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