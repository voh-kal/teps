import { useState, useEffect } from 'react';
import config from '../../config/api';
import { useCreateEvent } from '../../hooks/useCreateEvent';

function Hero({ onScheduleDemo }) {
    const { handleCreateEvent } = useCreateEvent();

    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const texts = [
        'Generate QR Code',
        'Create Event',
        'Communicate with Attendees',
        'Schedule Sessions',
        'Manage Registrations',
        'Send Notifications',
        'Track Analytics'
    ];

    useEffect(() => {
        const timeout = setTimeout(() => {
            const current = texts[currentIndex];

            if (isDeleting) {
                setCurrentText(prev => prev.substring(0, prev.length - 1));
            } else {
                setCurrentText(prev => current.substring(0, prev.length + 1));
            }

            if (!isDeleting && currentText === current) {
                setTimeout(() => setIsDeleting(true), 2000);
            } else if (isDeleting && currentText === '') {
                setIsDeleting(false);
                setCurrentIndex(prev => (prev + 1) % texts.length);
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [currentText, currentIndex, isDeleting, texts]);

    return (
        <div className="relative bg-cover bg-center bg-no-repeat py-20" style={{ backgroundImage: "url('/home_bg.jpg')" }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
                <div className="py-12 md:py-16">
                    <h1 className="text-4xl md:text-7xl font-bold mb-8 text-white max-w-5xl mx-auto ">Your #1 Platform for Seamless Events in Nigeria</h1>
                    <div className="mt-[3rem] space-y-[5rem]">
                        <div className="h-16 flex items-center justify-center">
                            <span className="bg-white/30 text-[#37B3E8] px-6 py-3 rounded-full text-lg font-medium inline-block min-w-[280px] text-[14px]">
                                {currentText}
                                <span className="animate-pulse">|</span>
                            </span>
                        </div>
                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                            <button onClick={handleCreateEvent} className="bg-gradient-to-r from-[#2226FD] to-[#3AC4FF] border-2 border-[#3AC4FF] text-white px-6 py-3 rounded-full hover:opacity-90 transition text-center w-[245px] text-[16px] font-semibold">
                                Create Event
                            </button>
                            <button
                                onClick={onScheduleDemo}
                                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-[#2226FD] transition text-center w-[245px] text-[16px] font-semibold"
                                aria-label="Schedule a demo with TEPS"
                            >
                                Schedule a Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;