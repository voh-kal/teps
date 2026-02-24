function Hero({ header, subHeader }) {
    return (
        <section 
            className="py-30 md:py-32 mx-[10px] my-[10px] md:mx-[30px] md:my-[15px] text-center rounded-lg relative"
            style={{
                backgroundColor: '#19213D',
                backgroundImage: "url('/bg_teps.svg')",
                backgroundRepeat: 'repeat',
                backgroundSize: '30%',
                backgroundPosition: '0 0'
            }}
        >
           
            {/* <div className="absolute inset-0 bg-[#19213D] bg-opacity-80 rounded-lg"></div> */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 text-center relative z-10">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {header}
                    </h1>
                    <p className="text-xl text-blue-100 leading-relaxed">
                        {subHeader}
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Hero;