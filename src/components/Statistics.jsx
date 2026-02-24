function Statistics({ color, statHeader, statSubHeader, statHeaderClass, statSubHeaderClass }) {
    return (
        <>
            <section className={`${color} py-10 md:py-16`}>
                <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
                    {/* Header */}
                    <div className="mb-16">
                        <h2 className={`${statHeaderClass}`}>
                            {statHeader}
                        </h2>
                        <p className={`${statSubHeaderClass}`}>
                            {statSubHeader}
                        </p>
                    </div>

                    {/* Statistics Row */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">100+</h3>
                            <p className="text-blue-100 text-lg">Events Hosted</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">50+</h3>
                            <p className="text-blue-100 text-lg">Business Partners</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">20k+</h3>
                            <p className="text-blue-100 text-lg">Attendees managed</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-5xl md:text-6xl font-bold text-white mb-2">98%</h3>
                            <p className="text-blue-100 text-lg">Client Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Statistics
