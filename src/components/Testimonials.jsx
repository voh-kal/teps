import { useState } from 'react'
import { IconQuote, IconChevronLeft, IconChevronRight } from './Icons.jsx'

function Testimonials({ testimonials = [], logos = [] }) {
    const [activeIndex, setActiveIndex] = useState(0)
    const total = testimonials.length

    const goTo = (index) => setActiveIndex(((index % total) + total) % total)
    const goPrev = () => goTo(activeIndex - 1)
    const goNext = () => goTo(activeIndex + 1)

    if (total === 0) return null
    const active = testimonials[activeIndex]

    return (
        <section className="bg-white py-24 transition-colors duration-300 dark:bg-[#0F0F0F]">
            <div className="mx-auto max-w-4xl px-6 lg:px-10">
                <div className="flex items-center gap-4 sm:gap-8">
                    <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Previous testimonial"
                        className="flex h-11 w-11 shrink-0 items-center justify-center text-ink/50 transition-colors hover:text-blue dark:text-white/50 dark:hover:text-blue"
                    >
                        <IconChevronLeft className="h-6 w-6" />
                    </button>

                    <div className="flex-1 text-center">
                        <IconQuote className="mx-auto h-9 w-9 text-blue" />
                        <p className="mt-6 text-lg leading-relaxed text-ink dark:text-white sm:text-xl">
                            {active.quote}
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-3">
                            <img
                                src={active.logo}
                                alt={active.name}
                                className="h-10 w-10 rounded-full bg-white object-contain"
                            />
                            <span className="text-sm font-semibold text-ink dark:text-white">
                                {active.name}
                            </span>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={goNext}
                        aria-label="Next testimonial"
                        className="flex h-11 w-11 shrink-0 items-center justify-center text-ink/50 transition-colors hover:text-blue dark:text-white/50 dark:hover:text-blue"
                    >
                        <IconChevronRight className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* infinite loop of client logos */}
            {logos.length > 0 && (
                <div className="mt-16 overflow-hidden pt-4">
                    <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16">
                        {[...logos, ...logos].map((logo, i) => (
                            <img
                                key={`${logo.name}-${i}`}
                                src={logo.src}
                                alt={logo.name}
                                className="h-8 w-auto shrink-0 object-contain transition-opacity hover:opacity-90"
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    )
}

export default Testimonials
