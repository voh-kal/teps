import { useEffect, useRef, useState } from 'react'
import { IconUsers, IconGlobe, IconCalendar, IconSparkline } from '../../components/Icons.jsx'

const LOGOS = [
  { src: '/dl1.png', name: 'Logo 1' },
  { src: '/dl2.png', name: 'Logo 2' },
  { src: '/dl3.png', name: 'Logo 3' },
  { src: '/dl4.png', name: 'Logo 4' },
  { src: '/dl5.png', name: 'Logo 5' },
  { src: '/dl6.png', name: 'Logo 6' },
  { src: '/dl7.png', name: 'Logo 7' },
  { src: '/dl8.png', name: 'Logo 8' },
  { src: '/dl9.png', name: 'Logo 9' },
  { src: '/dl10.png', name: 'Logo 10' },
  { src: '/dl11.png', name: 'Logo 11' },
  { src: '/dl12.png', name: 'Logo 12' },
  { src: '/dl13.png', name: 'Logo 13' },
  { src: '/dl14.png', name: 'Logo 14' },
  { src: '/dl15.png', name: 'Logo 15' },
  { src: '/dl16.png', name: 'Logo 16' },
  { src: '/dl17.png', name: 'Logo 17' },
  { src: '/dl18.png', name: 'Logo 18' },
  { src: '/dl20.png', name: 'Logo 20' },
  { src: '/dl21.png', name: 'Logo 21' },
  { src: '/dl22.png', name: 'Logo 22' },
  { src: '/dl23.png', name: 'Logo 23' },
  { src: '/dl24.png', name: 'Logo 24' },
  { src: '/dl25.png', name: 'Logo 25' },
]

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
    label: 'years of client satisfaction',
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

export default function StatsSection() {
  return (
    <section className="bg-[#F6F6F6] py-24 transition-colors duration-300 dark:bg-[#0F0F0F]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-semibold text-ink sm:text-5xl dark:text-white lg:text-[60px]">
            Proven Across Complex Events
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate dark:text-white">
            By organisations delivering conferences, summits, festivals, concerts, corporate events and high-stakes experiences, TEPS provides the systems that make exceptional events feel effortless.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-ink/10 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="flex items-center justify-center gap-3 px-8 py-8 text-center">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex flex-col items-center">
                  <span className="text-[64px] font-semibold text-[#3A72FF]" style={{fontFamily:"Degular", marginBottom:"-10px"}}>
                    <CountUpNumber value={stat.value} suffix={stat.suffix} />
                  </span>
                  <p className=" max-w-[150px] text-[14px] leading-relaxed text-slate dark:text-white">{stat.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* infinite logo marquee */}
        <div className="mt-16 overflow-hidden pt-12">
          <div className="flex w-max shrink-0 animate-marquee items-center gap-16 pr-16">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <img
                key={`${logo.name}-${i}`}
                src={logo.src}
                alt={logo.name}
                className="h-11 w-auto shrink-0 object-contain  transition-opacity hover:opacity-90"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
