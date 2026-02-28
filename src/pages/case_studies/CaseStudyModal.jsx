import { X, MapPin, Clock } from 'lucide-react';
import LazyImage from '../../components/LazyImage';

function CaseStudyModal({ caseStudy, onClose }) {
    const modalData = caseStudy.modalData;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2">
            <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh]">
                {/* Modal Header */}
                <div className="flex justify-end p-2">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-black hover:text-gray-700 transition-colors rounded-full p-1 "
                    >
                        <X size={12}/>
                    </button>
                </div>

                {/* Modal Content */}
                <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-8 h-[calc(90vh-80px)]">
                    {/* Left Column (1/3) */}
                    <div className="md:col-span-1 space-y-6">
                        {/* Case Study Image */}
                        <div>
                            <LazyImage 
                                src={modalData.image} 
                                alt={modalData.title}
                                className="w-full h-[293px] object-cover rounded-lg"
                            />
                        </div>

                        {/* Host Information */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                Hosted by
                            </h3>
                            <hr className="border-gray-300 mb-4" />
                            
                            {/* Host Profile */}
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
                        </div>
                    </div>

                    {/* Right Column (2/3) - Scrollable */}
                    <div className="md:col-span-2 space-y-6 overflow-y-auto pr-2">
                        {/* Title and Description */}
                        <div>
                            <h2 className="text-1xl md:text-2xl font-bold text-gray-900 mb-4">
                                {modalData.title}
                            </h2>
                            
                        </div>

                        {/* Event Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {/* Location */}
                            <div className="flex items-center space-x-3">
                                <MapPin size={20} className="text-gray-500" />
                                <span className="text-gray-700">{modalData.location}</span>
                            </div>

                            {/* Time */}
                            <div className="flex items-center space-x-3">
                                <Clock size={20} className="text-gray-500" />
                                <span className="text-gray-700">{modalData.time}</span>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
                                {modalData.subtitle}
                            </h2>
                            <hr />
                        </div>

                        <div>
                            <h4>Setting the Stage</h4>
                            <p>{modalData.setting}</p>
                        </div>

                        <div>
                            <h4>The Challenge</h4>
                            <p>{modalData.challenge}</p>
                        </div>

                        {/* Event Images */}
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                Event Gallery
                            </h4>
                            <div className="grid grid-cols-3 gap-4">
                                {modalData.eventImages.map((image, index) => (
                                    <div key={index}>
                                        <LazyImage 
                                            src={image} 
                                            alt={`Event ${index + 1}`}
                                            className="w-full h-[172px] object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CaseStudyModal;