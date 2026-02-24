import { useState } from 'react';

function ScheduleDemo({ isOpen, onClose }) {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 h-[90vh] overflow-hidden relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
                    aria-label="Close"
                >
                    ×
                </button>

                {/* Modal Header */}
                <div className="mb-4 flex-shrink-0">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Schedule a Demo</h2>
                    <p className="text-gray-600">Book a personalized demo to see how TEPS can transform your events.</p>
                </div>

                {/* Loading State */}
                {!iframeLoaded && (
                    <div className="flex items-center justify-center py-8 flex-1">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mr-3"></div>
                        <div className="text-gray-500">Loading booking calendar...</div>
                    </div>
                )}

                {/* Direct Iframe Embed */}
                <div className="flex-1 relative">
                    <iframe
                        src="https://tidycal.com/power"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="rounded-lg"
                        onLoad={() => setIframeLoaded(true)}
                        style={{ 
                            opacity: iframeLoaded ? 1 : 0,
                            transition: 'opacity 0.3s ease'
                        }}
                        title="Schedule a Demo with TEPS"
                    ></iframe>
                </div>

            </div>
        </div>
    );
}

export default ScheduleDemo;