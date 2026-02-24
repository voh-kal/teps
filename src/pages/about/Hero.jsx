

function Hero() {

    return (
        <div className="relative bg-cover bg-top bg-no-repeat py-20" style={{ backgroundImage: "url('/about.jpg')" }}>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-80"></div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-6 md:px-8 text-center relative z-10">
                <div className="py-12 md:py-16">
                    <h1 className="text-4xl md:text-7xl font-bold mb-8 text-white max-w-5xl mx-auto ">About TEPS</h1>
                    <div className="mt-[3rem] space-y-[5rem]">
                        <div className="h-16 flex items-center justify-center">
                           <p className='text-white max-w-3xl'>The Experience Plug systems. We are your platform for seamless events, designed by event professionals for everyone; novice or experienced event organizers & owners. Our features include: ticketing, event registration, custom email marketing to attendees, RSVP management, Multiple information stored in Attendee Unique QR Codes, Dashboard for analytics and insights, and lots more</p>
                        </div>
                       
                            <a href="/about" className="bg-white px-6 py-4 rounded-full hover:bg-[#ccc] hover:text-[#2226FD] transition text-center w-[245px] text-[14px] font-semibold">
                                Connect with Us
                            </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;