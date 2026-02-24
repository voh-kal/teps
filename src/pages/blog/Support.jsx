function Support({ onScheduleDemo }) {
    return (
        <section className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-6 md:px-8">
                <div className="bg-[#19213D] p-12 md:p-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center ">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:col-span-2">
                            For more Enquiries <br /> and Support
                        </h2>
                        <div className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto md:mb-0">
                            <button 
                                onClick={onScheduleDemo}
                                className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300 min-w-[160px]"
                                aria-label="Schedule a demo with TEPS"
                            >
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Support;