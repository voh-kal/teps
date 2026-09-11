import { useEffect, useRef, useState } from 'react'
import { IconUsers, IconGlobe, IconCalendar, IconSparkline } from './Icons.jsx'

const STATS = [
    {
        icon: IconUsers,
        value: 100,
        suffix: '+',
        label: 'Events hosted across 10 countries',
    },
    {
        icon: IconGlobe,
        value: 50,
        suffix: '+',
        label: 'Happy clients & organizations',
    },
    {
        icon: IconCalendar,
        value: 20,
        suffix: 'k+',
        label: 'Attendees managed',
    },
    {
        icon: IconSparkline,
        value: 4,
        suffix: '',
        label: 'Years of client satisfaction',
    },
]

function CountUpNumber({ value, suffix, duration = 1600 }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const started = useRef(false)

    useEffect(() => {
        const node = ref.current
        if (!node) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting || started.current) return
                started.current = true
                const start = performance.now()

                function tick(now) {
                    const progress = Math.min((now - start) / duration, 1)
                    const eased = 1 - Math.pow(1 - progress, 3)
                    setCount(Math.round(eased * value))
                    if (progress < 1) requestAnimationFrame(tick)
                }

                requestAnimationFrame(tick)
                observer.disconnect()
            },
            { threshold: 0.4 }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [value, duration])

    return (
        <span ref={ref}>
            {count.toLocaleString()}
            {suffix}
        </span>
    )
}

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
                    <div className="mt-14 grid grid-cols-1 divide-y divide-white/15 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
                        {STATS.map((stat) => {
                            const Icon = stat.icon
                            return (
                                <div key={stat.label} className="flex items-center justify-center gap-3 px-8 py-8 text-center">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                                        <Icon className="h-5 w-5" />
                                    </span>
                                    <div className="flex flex-col items-center">
                                        <span className="font-display text-[64px] font-semibold text-white sm:text-4xl ">
                                            <CountUpNumber value={stat.value} suffix={stat.suffix} />
                                        </span>
                                        <p className="mt-2 max-w-[150px] text-[14px] leading-relaxed text-blue-100">{stat.label}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Statistics
