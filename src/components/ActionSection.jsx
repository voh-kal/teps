import config from "../config/api";


function ActionSection({header, subheader, onScheduleDemo}) {
    return (         
            <section className="bg-[rgba(0,0,0,0.05)] py-16 md:py-24">
                <div className="max-w-4xl mx-auto px-6 md:px-8">
                    <div className="bg-white rounded-2xl p-12 md:p-16 text-center shadow-xl">
                        <h2 className="text-3xl md:text-3xl font-bold text-black mb-6">
                            {header}
                        </h2>
                        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
                            {subheader}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a href={config.getApiUrl(config.endpoints.SIGN_UP)} className="bg-[#1082df] text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 min-w-[160px]">
                                Create event now
                            </a>
                            <button 
                                onClick={onScheduleDemo}
                                className="border-2 border-gray-800 text-gray-800 px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 min-w-[160px]"
                                aria-label="Schedule a demo with TEPS"
                            >
                                Schedule Demo
                            </button>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default ActionSection;