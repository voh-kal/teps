import { useState, useEffect } from 'react';
import { ArrowRight, Users, Calendar, Zap, Tag, QrCode, Shield, Globe, BarChart, Settings, Clock, Target, ChevronLeft, ChevronRight, Star, ChevronDown, ChevronUp, X } from 'lucide-react';
import ActionSection from '../../components/ActionSection';
import config from '../../config/api';

// Carousel Component
function CarouselComponent() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const carouselData = [
        {
            id: 1,
            image: "/alte_frame.svg",
            title: "Alte Cultural Festival",
            description: "Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit ametr",
            company: "The Podium, Ikeja , Lagos",
        },
        {
            id: 2,
            image: "/checkin.svg",
            title: "Chrystallis Conversations",
            description: "Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit ametr",
            company: "Eko Hotel & Suit, Victorial Island, Lagos",
        },
        {
            id: 3,
            image: "/event_4.svg",
            title: "RenewHer",
            description: "Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit amet consectetur. Ornare et augue facilisis Vitae enim ac auctor consequat orci Lorem ipsum dolor sit ametr",
            company: "The Monarch Event Center, Lekki",
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length);
    };

    return (
        <div className="relative p-4 md:p-8 lg:p-12">
            {/* Previous Button - Left Side */}
            <button
                onClick={prevSlide}
                className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-200 transition-colors duration-300 z-10 bg-black bg-opacity-30 rounded-full p-2"
            >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Next Button - Right Side */}
            <button
                onClick={nextSlide}
                className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-200 transition-colors duration-300 z-10 bg-black bg-opacity-30 rounded-full p-2"
            >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <div className='px-4 md:px-8 lg:px-12'>
                {/* Carousel Container with fade transition */}
                <div className="relative">
                    {carouselData.map((slide, index) => (
                        <div 
                            key={slide.id} 
                            className={`transition-opacity duration-500 ${
                                index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
                            }`}
                        >
                            <div className="max-w-6xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-center">
                                    {/* Left side - Image */}
                                    <div className="relative md:col-span-1">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full max-w-sm mx-auto md:max-w-none object-cover rounded-xl"
                                        />
                                    </div>

                                    {/* Right side - Text Content */}
                                    <div className="space-y-3 md:space-y-2 md:col-span-2 text-center md:text-left">
                                        <h3 className="font-semibold text-white text-xl md:text-lg lg:text-xl">
                                            {slide.title}
                                        </h3>
                                        <p className="text-sm md:text-[13px] lg:text-[14px] text-white">
                                            {slide.company}
                                        </p>
                                        <p className="text-white text-sm md:text-[14px] lg:text-[15px] leading-relaxed max-w-2xl mx-auto md:mx-0">
                                            "{slide.description}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {carouselData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-blue-300'
                                }`}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

// Testimonial Slider Component
function TestimonialSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const testimonials = [
        {
            id: 1,
            image: "/testimonial-user-1.jpg",
            name: "Sarah Johnson",
            comment: "TEPS made our corporate conference seamless. The registration process was smooth and the analytics helped us understand our attendees better.",
            stars: 5
        },
        {
            id: 2,
            image: "/testimonial-user-2.jpg",
            name: "Michael Adeyemi",
            comment: "Planning our wedding with TEPS was incredible. The guest management and RSVP tracking saved us so much time and stress.",
            stars: 5
        },
        {
            id: 3,
            image: "/testimonial-user-3.jpg",
            name: "Dr. Amina Mohammed",
            comment: "Our educational summit reached new heights. The platform handled complex scheduling effortlessly.",
            stars: 5
        },
        {
            id: 4,
            image: "/testimonial-user-4.jpg",
            name: "James Wilson",
            comment: "The QR code integration and real-time analytics made our music festival management incredibly efficient.",
            stars: 5
        },
        {
            id: 5,
            image: "/testimonial-user-5.jpg",
            name: "Grace Okafor",
            comment: "TEPS customer support is outstanding. They helped us every step of the way for our charity gala.",
            stars: 5
        },
        {
            id: 6,
            image: "/testimonial-user-6.jpg",
            name: "David Chen",
            comment: "The vendor management and POS integration made our trade show incredibly successful.",
            stars: 5
        }
    ];

    const testimonialsPerSlide = 2;
    const totalSlides = Math.ceil(testimonials.length / testimonialsPerSlide);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const getCurrentTestimonials = () => {
        const startIndex = currentSlide * testimonialsPerSlide;
        return testimonials.slice(startIndex, startIndex + testimonialsPerSlide);
    };

    return (
        <div className="relative">
            {/* Navigation Buttons */}
            <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white hover:text-[#1082df] transition-colors duration-300 z-10 rounded-full bg-blue-400 p-1 flex items-center justify-center"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-[#1082df] transition-colors duration-300 z-10 rounded-full bg-blue-400 p-1 flex items-center justify-center"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Testimonials Grid */}
            <div className="mx-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {getCurrentTestimonials().map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg">
                            {/* First Row - Image, Name, Stars */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                </div>
                                <div className="flex">
                                    {[...Array(testimonial.stars)].map((_, index) => (
                                        <Star key={index} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </div>

                            {/* Second Row - Comment */}
                            <p className="text-gray-600 text-sm leading-relaxed">
                                "{testimonial.comment}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Slide Indicators */}
            {/* <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentSlide ? 'bg-[#1082df]' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div> */}
        </div>
    );
}

// FAQ Component
function FAQComponent() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const faqs = [
        {
            id: 1,
            question: "How do I get started with TEPS?",
            answer: "Getting started with TEPS is simple! Sign up for a free account, choose your event type, and our intuitive setup wizard will guide you through creating your first event in minutes."
        },
        {
            id: 2,
            question: "What types of events can I manage with TEPS?",
            answer: "TEPS supports all types of events including conferences, weddings, festivals, corporate events, workshops, exhibitions, and more. Our platform adapts to any event size or format."
        },
        {
            id: 3,
            question: "Is there a limit to the number of attendees?",
            answer: "No, TEPS scales with your needs. Whether you're hosting 10 people or 10,000+, our platform handles events of all sizes seamlessly."
        },
        {
            id: 4,
            question: "How does the payment processing work?",
            answer: "TEPS integrates with secure payment gateways to process ticket sales and registrations. You can accept various payment methods including cards, bank transfers, and mobile payments."
        },
        {
            id: 5,
            question: "Can I customize my event pages?",
            answer: "Absolutely! TEPS offers extensive customization options. You can brand your event pages, customize registration forms, and create a unique experience that matches your event's identity."
        },
        {
            id: 6,
            question: "What support is available?",
            answer: "We provide 24/7 customer support through live chat, email, and phone. Our team is always ready to help you succeed with your events."
        }
    ];

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq) => (
                <div key={faq.id} className="border border-gray-600 rounded-lg">
                    <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors duration-300"
                    >
                        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                        {openFAQ === faq.id ? (
                            <ChevronUp className="w-5 h-5 text-gray-300" />
                        ) : (
                            <ChevronDown className="w-5 h-5 text-gray-300" />
                        )}
                    </button>

                    {openFAQ === faq.id && (
                        <div className="px-6 pb-6">
                            <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

function AboutSection() {
    // Video modal state
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
    // Zoho form modal state
    const [isZohoFormModalOpen, setIsZohoFormModalOpen] = useState(false);
    // Background images state
    const [currentBgIndex, setCurrentBgIndex] = useState(0);
    
    // Form state
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        eventType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const backgroundImages = [
        '/case_studies_1.svg',
        '/case_studies_2.svg',
        '/case_studies_3.svg',
        '/case_studies_4.svg',
        '/case_studies_5.svg',
    ];

    // Auto-slide background images
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBgIndex((prev) => (prev + 1) % backgroundImages.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [backgroundImages.length]);

    const openVideoModal = () => setIsVideoModalOpen(true);
    const closeVideoModal = () => setIsVideoModalOpen(false);
    const openZohoFormModal = () => setIsZohoFormModalOpen(true);
    const closeZohoFormModal = () => {
        setIsZohoFormModalOpen(false);
        setSubmitMessage('');
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            eventType: '',
            message: ''
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Create form data for Zoho submission
            const zohoFormData = new FormData();
            zohoFormData.append('First Name', formData.firstName);
            zohoFormData.append('Last Name', formData.lastName);
            zohoFormData.append('Email', formData.email);
            zohoFormData.append('Phone', formData.phone);
            zohoFormData.append('Company', formData.company);
            zohoFormData.append('Event Type', formData.eventType);
            zohoFormData.append('Description', formData.message);
            
            // Submit to Zoho
            const response = await fetch('https://crm.zoho.com/crm/WebFormServeServlet?rid=defa50f4e4a0eaf79a45e679f23fd0290f936c886c25f83f54feb575c3676f39dc527d62461617db0ce3d247e379f285gid8da87f8451f56c791fca0516c7f7a37099feca6b6fbfbbd6bfed652a357f48a1', {
                method: 'POST',
                body: zohoFormData,
                mode: 'no-cors'
            });
            
            setSubmitMessage('Thank you! We\'ll get back to you soon.');
            setTimeout(() => {
                closeZohoFormModal();
            }, 2000);
            
        } catch (error) {
            setSubmitMessage('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    // Box data array
    const boxesData = [
        {
            id: 1,
            icon: '/document.svg',
            title: "Custom Event Landing Pages",
            description: "Create a branded home for your event in minutes. Whether it’s selling tickets or collecting RSVPs, it will look like you, not us"
        },
        {
            id: 2,
            icon: '/ticket.svg',
            title: "Ticketing & Registration",
            description: "Sell paid tickets, manage free registrations, or handle complex tiers (Early Bird, VIP, Regular). We handle the payments; you handle the applause."
        },
        {
            id: 3,
            icon: '/calendar-edit.svg',
            title: "Vendor Management & POS",
            description: " Manage your food and merch vendors with integrated Point of Sale systems."
        },
        {
            id: 4,
            icon: '/timer.svg',
            title: "Speaker & Session Scheduling",
            description: "Manage multiple tracks, unlimited sessions, and speaker bios effortlessly."
        },
        {
            id: 5,
            icon: '/QrCode.svg',
            title: "Smart RSVP Management",
            description: "Perfect for invite-only events. Upload your guest list, send personalized links, and track who is a \"Yes,\" \"No,\" or \"Maybe\" in real-time."
        },
        {
            id: 6,
            icon: '/home_icon_8.svg',
            title: "Real-Time Analytics Dashboard",
            description: "Watch live data on who is checking in, spending money, and engaging."
        },
        {
            id: 7,
            icon: '/home_icon_6.svg',
            title: "WhatsApp & Email Communications",
            description: "Don't just email them. WhatsApp them. Send tickets, reminders, and updates directly to the device they never put down."
        },
        {
            id: 8,
            icon: '/home_icon_5.svg',
            title: "Waitlists",
            description: "Sold out? Auto-manage your waitlist and fill spots the second they open up"
        },
        {
            id: 9,
            icon: '/home_icon_4.svg',
            title: "Guest List Import",
            description: " Moving from Excel? One-click import puts your database right where it belongs."
        },
        {
            id: 10,
            icon: '/home_icon_3.svg',
            title: "Smart QR Codes (Payments & Tracking)",
            description: "Turn badges into wallets. Enable cashless payments and track exactly where attendees go."
        },
        {
            id: 11,
            icon: '/barcode.svg',
            title: "Discount Codes",
            description: "Create discount codes, and watch the sales soar"
        },
        {
            id: 12,
            icon: '/QrCode.svg',
            title: "3-Second Onsite Check-In",
            description: "Scan unique QR codes via our mobile app or kiosks. Get 1,000 guests in before the first song finishes."
        },
        {
            id: 13,
            icon: '/home_icon_2.svg',
            title: "Badge & Wristband Design",
            description: "Design professional badges or wristbands that print instantly upon arrival."
        },
        {
            id: 14,
            icon: '/scan.svg',
            title: "Exhibitor Lead Capture",
            description: "Design professional badges or wristbands that print instantly upon arrival."
        },
        {
            id: 15,
            icon: '/home_icon_7.svg',
            title: "Free Tech Support",
            description: "We are in the maze with you. Real humans, ready to help when you need it."
        },
        {
            id: 16,
            icon: '/home_icon_1.svg',
            title: "All-in Event App",
            description: "Your attendees' event companion. Put the agenda, speaker bios, networking, and live updates right in their pockets."
        }

    ];

    return (
        <>
            <section className="bg-white py-16 md:py-24 relative">
                {/* Background Images */}
                <div className="absolute left-0 top-0 h-full">
                    <img src="/exp_slant_1.svg" alt="" className="h-full object-cover" />
                </div>
                <div className="absolute right-0 top-0 h-full">
                    <img src="/exp_slant_2.svg" alt="" className="h-full object-cover" />
                </div>

                <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* First part - Text Content */}
                        <div className="space-y-4">
                            <h2 className="max-w-3xl text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
                                Experience the <br /> Power of <span className="text-[#1082df]">TEPS</span>
                            </h2>
                            <p className="text-[14px] text-gray-600 max-w-md">
                                TEPS is redefining how events are planned and managed. Built to adapt to every event type, TEPS gives you the tools you need to organize smarter, manage seamlessly, and deliver unforgettable experiences. With over 100+ users already planning successful events on TEPS, the results speak for themselves.
                            </p>
                            <div >
                                <a href='https://www.youtube.com/@powerofteps' className="flex items-center gap-2 text-[#1082df] font-semibold hover:gap-4 transition-all duration-300 group">
                                    <span className='text-[#000]'>See more videos</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>

                        {/* Second part - YouTube Video */}
                        <div className="relative">
                            <div className="cursor-pointer transition-transform hover:scale-105" onClick={openVideoModal}>
                                <img src="/video.svg" alt="Teps youtube video" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute -top-1/3 -right-[100px] h-full">
                    <img src="/drill_sun.svg" alt="" className="h-full object-cover" />
                </div>
                <div className='bg-[rgba(0,0,0,0.05)] h-[10px] w-full'></div>

                <div className='py-16 md:py-24 '>
                    <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                            <div className="relative">
                                <div>
                                    <img src="/teps_system.svg" alt="Teps event planning" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-[20px] md:text-[36px] font-extrabold text-gray-900 leading-tight">
                                    We know the drill. Event planning is a <span className="text-[#1082df]">Maze</span>
                                </h2>
                                <p className="text-[15px] text-gray-600">
                                    You’re juggling guest lists in spreadsheets, worrying about gatecrashers, and dreading the registration queue. You deserve to be in the maze with a partner who knows the way out.
                                </p>
                                <div >
                                    <button className="w-[165px] bg-[#1082df] text-white py-4 px-6 rounded-full text-sm" onClick={openZohoFormModal} aria-label="get started with TEPS">
                                        Let's Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-5xl mx-auto px-6 md:px-8 pt-12 md:pt-16 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <div className="group text-center space-y-4 p-6 bg-[#3AA0FF] rounded-lg transform transition-all duration-500 hover:-translate-y-4 hover:shadow-xl cursor-pointer">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                        <QrCode className="w-8 h-8 text-[#3AA0FF] transition-all duration-500" />
                                    </div>
                                </div>
                                <h3 className="text-md font-bold text-white mb-1 ">QR Code Integration</h3>
                                <p className="text-white text-[14px]">
                                    TEPS provided personalized QR codes for each attendee, enabling swift entry through simple scanning. Guests are happy when there's no delay.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="group text-center space-y-4 p-6 bg-[#3AA0FF] rounded-lg transform transition-all duration-500 hover:-translate-y-4 hover:shadow-xl cursor-pointer">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                        <Tag className="w-8 h-8 text-[#3AA0FF] transition-all duration-500" />
                                    </div>
                                </div>
                                <h3 className="text-[16px] font-bold text-white mb-1">Access Wrist Tags</h3>
                                <p className="text-white text-[14px]">
                                    TEPS provided personalized QR codes for each attendee, enabling swift entry through simple scanning. Guests are happy when there's no delay.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="group text-center space-y-4 p-6 bg-[#3AA0FF] rounded-lg transform transition-all duration-500 hover:-translate-y-4 hover:shadow-xl cursor-pointer">
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                        <img src="/accreditation.svg" alt="Exhibitor Accreditation" className="w-8 h-8 transition-all duration-500" />

                                    </div>
                                </div>
                                <h3 className="text-md font-bold text-white mb-1">Exhibitor Accreditation</h3>
                                <p className="text-white text-[14px]">
                                    TEPS streamlined the exhibitor accreditation process, ensuring authorized participation in the exhibition.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <div className="relative bg-cover bg-center bg-no-repeat py-[6rem] md:py-[10rem] overflow-hidden">
                    {/* Background Images Slider */}
                    {backgroundImages.map((bgImage, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
                                index === currentBgIndex 
                                    ? 'translate-y-0 opacity-100' 
                                    : index === (currentBgIndex - 1 + backgroundImages.length) % backgroundImages.length
                                        ? '-translate-y-full opacity-0'
                                        : 'translate-y-full opacity-0'
                            }`}
                            style={{ backgroundImage: `url('${bgImage}')` }}
                        />
                    ))}
                    
                    {/* Dark overlay */}
                    <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to left, rgba(255, 255, 255, 0), rgba(85, 85, 85, 0.46), rgba(0, 0, 0, 0.74))' }}></div>

                    {/* Content */}
                    <div className="max-w-4xl px-10 md:px-30 relative z-20">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                                Are you planning an Event?
                            </h2>
                            <p className="text-[15px] text-white max-w-md">
                                Plan and manage your events now with TEPS. Make use of our adaptive platform to host and manage your events, invite your guests and special guests, seamless check-ins and monitor the progress of your event from start to finish.
                            </p>
                            <div className='mt-[2rem]'>
                                <a href={config.getApiUrl(config.endpoints.SIGN_UP)}className="w-[140px] bg-white text-black font-semibold py-4 px-6 rounded-full text-sm">
                                    Create Event
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    {/* Slide Indicators */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                        {backgroundImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentBgIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    index === currentBgIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Bordered Section */}
            <section className="bg-[rgba(0,0,0,0.05)] py-16 md:py-24 space-y-10 relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute -top-1/3 -left-[100px] h-full">
                    <img src="/host_sun.svg" alt="" className="h-full object-cover" />
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="border-7 border-[#D9D9D9] p-8 md:p-12 rounded-[20px] bg-[#6B95FF30]">
                        {/* Header and Subheader */}
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-black mb-1">
                                Host your event easily and manage seamlessly
                            </h2>
                            <p className="text-sm text-[#000000A3]">
                                Smooth online registration and management processes.
                            </p>
                        </div>

                        {/* Content - Equally divided into 2 parts */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center ">
                            {/* First part - Text Content */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h5 className="text-1xl font-semibold text-black">
                                        Create Events
                                    </h5>
                                    <p className="text-[#000000A3]">
                                        Hosting and managing an event has never been easier. You can host simple and complex events, create custom landing pages and manage all your event activities in one place.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-1xl font-semibold text-black">
                                        Sell tickets
                                    </h5>
                                    <p className="text-[#000000A3]">
                                        Whether it is a free event, paid or both, you can easily create attendees and vendor booth tickets, sell and monitor sales all in one place.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-1xl font-semibold text-black">
                                        Set up a Team
                                    </h5>
                                    <p className="text-[#000000A3]">
                                        You can assign roles to team members for smooth event operations and lead capture.
                                    </p>
                                </div>
                            </div>
                            {/* Second part - Image */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-md">
                                    <img
                                        src="/family_day_out.svg"
                                        alt="Event Management Dashboard"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="border-7 border-[#D9D9D9] p-8 md:p-12 rounded-[20px] bg-[#6B95FF30]">
                        {/* Header and Subheader */}
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-black mb-1">
                                Awesome attendee experience
                            </h2>
                            <p className="text-sm text-[#000000A3]">
                                Give your attendees the best event experience
                            </p>
                        </div>

                        {/* Content - Equally divided into 2 parts */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center ">
                            {/* Second part - Image */}
                            <div className="flex justify-center">
                                <div className="w-full max-w-md">
                                    <img
                                        src="/checkin.svg"
                                        alt="Event Management Dashboard"
                                        className="w-full h-auto rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>
                            {/* First part - Text Content */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h5 className="text-1xl font-semibold text-black">
                                        Attendees
                                    </h5>
                                    <p className="text-[#000000A3]">
                                        Monitor attendees registration, ticket sales, RSVPs and be sure of who is attending your event.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-1xl font-semibold text-black">
                                        Check-Ins
                                    </h5>
                                    <p className="text-[#000000A3]">
                                        Control large crowds on-site with our fast check-in badges, or QR-codes and avoid long queues. Have your event perfectly coordinated.
                                    </p>
                                </div>
                                <div className="space-y-2">
                                    <h5 className="text-1xl font-semibold text-black">
                                        Communications
                                    </h5>
                                    <p className="text-[#000000A3]">
                                        Our platforms helps to keep close contact with attendees pre and post event, to keep attendees updated, answer questions, resolve any issue before, during or after an event and get adequate feedbacks.
                                    </p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>
            </section >

            {/* Centralized Content Section with Hoverable Boxes */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-6xl mx-auto px-6 md:px-8">
                    {/* Centralized Content */}
                    <div className="text-center mb-16">
                        {/* Logo */}
                        <div className="flex justify-center">
                            <div className="flex items-center justify-center">
                                <img src="/Icon-CirclesThree.svg" alt="" />
                            </div>
                        </div>

                        {/* Small Header */}
                        <p className="text-[24px] font-bold tracking-wide mb-4">
                            Our <span className='text-[#1082df]'>Features</span>
                        </p>

                        {/* Big Subheader */}
                        <h2 className="text-3xl md:text-4xl max-w-2xl mx-auto font-bold text-black mb-4">
                            Make use of our exciting tools to create and manage your events
                        </h2>

                        {/* Small Subheader */}
                        <p className="text-md text-[#000000A3] max-w-2xl mx-auto">
                            “Sell out the stadium or manage the VIP guest list. We do both.”

                        </p>
                    </div>

                    {/* Responsive Hoverable Boxes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {boxesData.map((box) => {
                            const FeatureIconUrl = box.icon;
                            return (
                                <div key={box.id} className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-100">
                                    <div className="text-center">
                                        <div className="w-16 h-16 flex items-center justify-center mx-auto mb-2  transition-colors duration-300">
                                            <img src={`${FeatureIconUrl}`} className="w-8 h-8 text-white transition-colors duration-300" alt='Teps features' />
                                        </div>
                                        <h3 className="text-[14px] font-bold text-black mb-1">{box.title}</h3>
                                        <p className="text-[#000000A3] text-[12px] ">
                                            {box.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <div className='bg-[rgba(0,0,0,0.05)] h-[30px] w-full'>
            </div>

            <section className="bg-white py-20 md:py-32 relative">
                {/* Background Image */}
                <div className="absolute bottom-0 left-1/3 transform -translate-x-1/2">
                    <img src="/2boxes.svg" alt="" className="object-contain" />
                </div>

                <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* First part - Text Content */}
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
                                TEPS is built for <br /> every <span className="text-[#1082df]">Experience</span>
                            </h2>
                            <p className="max-w-md text-[14px] text-gray-600 leading-relaxed">
                                TEPS adapts to every event type; from conferences to team retreats, concerts, sport events, festivals and even VIP events. Our platform is designed to support events of all sizes and formats with ease. Whether you are managing registration for 50 or 5,000 guests, TEPS makes the process smooth, intuitive, and stress-free.
                            </p>
                            <div >
                                <button className="w-[165px] bg-[#1082df] text-white py-4 rounded-full text-sm" onClick={openZohoFormModal} aria-label="get started with TEPS">
                                    Get Started
                                </button>
                            </div>
                        </div>

                        {/* Second part - YouTube Video */}
                        <div className="relative">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {/* First column, first row - elevated on md+ */}
                                <div className="md:-translate-y-8 transition-transform duration-300 hover:scale-105 hover:-translate-y-12">
                                    <img src="/built_1.svg" alt="Teps youtube video" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
                                </div>

                                {/* Second column, first row - normal */}
                                <div className="transition-transform duration-300 hover:scale-105 hover:translate-x-4">
                                    <img src="/built_2.svg" alt="Teps youtube video" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
                                </div>

                                {/* First column, second row - elevated and shifted left on md+ */}
                                <div className="md:-translate-y-8 md:-translate-x-4 transition-transform duration-300 hover:scale-105 hover:-translate-x-8">
                                    <img src="/built_3.svg" alt="Teps youtube video" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
                                </div>

                                {/* Second column, second row - shifted left on md+ */}
                                <div className="md:-translate-x-4 transition-transform duration-300 hover:scale-105 hover:translate-y-4">
                                    <img src="/built_4.svg" alt="Teps youtube video" className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blue Background Carousel Section */}
            <section className="bg-[#1082df] py-16 md:py-24 relative">
                <div className="absolute right-0 top-0 h-full">
                    <img src="/case_slant_1.svg" alt="" className="h-full object-cover" />
                </div>
                <div className="max-w-6xl mx-auto px-6 md:px-8">
                    {/* Centered Header and Subheader */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Our Case Studies
                        </h2>
                        <p className="text-[16px] text-white max-w-md mx-auto">
                            TEPS has helped over 200+ organizers to plan, manage and run their events smoothly and seamlessly.
                        </p>
                    </div>

                    {/* Carousel */}
                    <CarouselComponent />

                     <div className="text-center mt-16">
                        
                        <a href='/case-studies' className="bg-white text-[#19213D] px-8 py-4 rounded-full text-bold hover:bg-[#cccccc] transition-all duration-500">
                            See more
                        </a>
                    </div>
                </div>
            </section>

            {/* Ratings Section */}
            <section className="bg-[rgba(0,0,0,0.05)] py-16 md:py-24">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    {/* Centered Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-8">
                            What Our Users Say
                        </h2>

                        {/* 5 Stars and Rating */}
                        <div className="flex justify-center items-center mb-2 items-start">
                            {[...Array(5)].map((_, index) => (
                                <Star key={index} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
                            ))}
                            <h3 className="text-2xl font-bold text-black mb-4 mx-2">5.0</h3>
                        </div>



                        <p className="text-lg text-gray-600 max-w-md mx-auto">
                            Over 1,000+ event organizers trust TEPS to deliver exceptional experiences
                        </p>
                    </div>

                    {/* Testimonial Slider */}
                    <TestimonialSlider />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="bg-[#19213D] py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    {/* Header and Subheader */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Get answers to the most common questions about TEPS
                        </p>
                    </div>

                    <FAQComponent />

                    {/* Centered Call to Action */}
                    <div className="text-center mt-16">
                        <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto">
                            Still have questions? We're here to help you succeed.
                        </p>
                        <button className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#19213D] transition-all duration-300">
                            Contact Support
                        </button>
                    </div>
                </div>
            </section>

            <ActionSection header="Ready to organize the best event of your career?" subheader="Join the community of organizers who use the power of TEPS."/>

            {/* Video Modal */}
            {isVideoModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeVideoModal}>
                    <div className="relative w-full max-w-4xl mx-4 bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            onClick={closeVideoModal}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 z-10 bg-white rounded-full p-2 shadow-lg"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        
                        {/* Video Container */}
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                src="https://www.youtube.com/embed/WY0mbKFuG_o?rel=0&origin=https://eventeps.com"
                                title="TEPS Video"
                                className="absolute top-0 left-0 w-full h-full"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* Zoho Form Modal */}
            {isZohoFormModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={closeZohoFormModal}>
                    <div className="relative w-full max-w-2xl mx-4 bg-white rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#1082df] to-[#3AA0FF]">
                            <h2 className="text-xl font-semibold text-white">Get Started with TEPS</h2>
                            <button
                                onClick={closeZohoFormModal}
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        {/* Form Container */}
                        <div className="p-6">
                            {submitMessage ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-semibold text-gray-900">{submitMessage}</p>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                                First Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1082df] focus:border-transparent"
                                                placeholder="Enter your first name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                                Last Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1082df] focus:border-transparent"
                                                placeholder="Enter your last name"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1082df] focus:border-transparent"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1082df] focus:border-transparent"
                                                placeholder="Enter your phone number"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                                Company/Organization
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1082df] focus:border-transparent"
                                                placeholder="Enter your company name"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-1">
                                            Event Type
                                        </label>
                                        <select
                                            id="eventType"
                                            name="eventType"
                                            value={formData.eventType}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1082df] focus:border-transparent"
                                        >
                                            <option value="">Select event type</option>
                                            <option value="Conference">Conference</option>
                                            <option value="Wedding">Wedding</option>
                                            <option value="Corporate Event">Corporate Event</option>
                                            <option value="Festival">Festival</option>
                                            <option value="Workshop">Workshop</option>
                                            <option value="Exhibition">Exhibition</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Tell us about your event
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="3"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1082df] focus:border-transparent"
                                            placeholder="Brief description of your event needs..."
                                        ></textarea>
                                    </div>
                                    
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#1082df] text-white py-3 px-4 rounded-md font-medium hover:bg-[#0d6ebd] focus:outline-none focus:ring-2 focus:ring-[#1082df] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Submitting...
                                                </span>
                                            ) : (
                                                'Get Started with TEPS'
                                            )}
                                        </button>
                                    </div>
                                    
                                    <p className="text-xs text-gray-500 text-center">
                                        By submitting this form, you agree to receive communications from TEPS about our platform and services.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>

    );
}

export default AboutSection;