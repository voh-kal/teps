import { useState } from 'react'
import { IconCompass, IconCalendar, IconUsers, IconMap } from '../../components/Icons.jsx'

const RAIL_ITEMS = [
  { icon: '/side1.png', label: 'Experience TEPS', targetId: 'experience-teps' },
  { icon: '/side2.png', label: 'What we offer', targetId: 'what-we-offer' },
  { icon: '/side3.png', label: 'Use cases', targetId: 'use-cases' },
  { icon: '/side4.png', label: 'FAQ', targetId: 'faq' },
]

const SPONSORS = [{'src': './l1.png', 'name': 'Sponsor 1'}, {'src': './l2.png', 'name': 'Sponsor 2'}, {'src': './l3.png', 'name': 'Sponsor 3'}, {'src': './l4.png', 'name': 'Sponsor 4'}, {'src': './l5.png', 'name': 'Sponsor 5'}, {'src': './l6.png', 'name': 'Sponsor 6'}, {'src': './l7.png', 'name': 'Sponsor 7'}, {'src': './l8.png', 'name': 'Sponsor 8'}, {'src': './l9.png', 'name': 'Sponsor 9'}, {'src': './l10.png', 'name': 'Sponsor 10'}, {'src': './l11.png', 'name': 'Sponsor 11'}, {'src': './l12.png', 'name': 'Sponsor 12'}, {'src': './l13.png', 'name': 'Sponsor 13'}, {'src': './l14.png', 'name': 'Sponsor 14'}, {'src': './l15.png', 'name': 'Sponsor 15'}, {'src': './l16.png', 'name': 'Sponsor 16'}, {'src': './l17.png', 'name': 'Sponsor 17'}, {'src': './l18.png', 'name': 'Sponsor 18'}]

export default function Hero({ onScheduleDemo }) {
  const [hovered, setHovered] = useState(null)

  const scrollToSection = (targetId) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className=" the_hero relative flex w-full items-center overflow-hidden bg-ink">
      {/* background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://res.cloudinary.com/digc4dvpr/video/upload/v1789162134/hero_video_1_iwjtsq.mp4"
      >
        <source
          src="https://res.cloudinary.com/digc4dvpr/video/upload/v1789162134/hero_video_1_iwjtsq.mp4"
          type="video/mp4"
        />
      </video>

      {/* dark overlay: darkest on the left, fading lighter toward the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#1a1a1a]/55 to-[#1a1a1a]/15" />
      <div className="absolute  from-black via-black/40 to-black/10" />

      {/* content */}
      <div className="relative z-10 w-full px-6 pb-20 sm:pb-0 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          
          <h1 className=" text-white mt-4 max-w-3xl font-display text-[42px] leading-[1.08] font-semibold text-paper sm:text-[56px] lg:text-[64px]">
            The Infrastructure Behind
            <br />
            Seamless Events.
          </h1>

          <p className=" text-white mt-6 max-w-2xl text-base leading-relaxed text-paper/70">
           TEPS provides the connected systems behind your event. From invitations and registration to ticketing, access control, engagement and Event Intelligence. </p>

          <div className="the_margin flex flex-wrap items-center gap-4">
            <a
              href="#tickets"
              className="the_btn_width inline-flex items-center justify-center rounded-[15px] bg-[#3A72FF] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#090949]"
            >
              Create Event
            </a>
            <button
              type="button"
              onClick={onScheduleDemo}
              className="the_btn_width text-white inline-flex items-center justify-center rounded-[15px] border border-[#3A72FF] px-7 py-3.5 text-sm font-semibold text-blue-light hover:bg-[#090949]transition-colors"
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>

      {/* vertical icon rail, extreme right */}
      <div className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 lg:right-10 lg:flex">
        {RAIL_ITEMS.map((item, i) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className="relative flex items-center"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <span
                className={`text-black absolute right-full mr-3 whitespace-nowrap rounded-md bg-paper px-3 py-1.5 text-xs font-medium text-ink shadow-lg transition-all duration-200 ${
                  hovered === i ? 'opacity-100 translate-x-0' : 'pointer-events-none translate-x-2 opacity-0'
                }`}
              >
                {item.label}
              </span>
              <button
                type="button"
                onClick={() => scrollToSection(item.targetId)}
                aria-label={item.label}
                className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                  hovered === i
                    ? 'border-blue bg-[white] text-white'
                    : 'border-paper/25 bg-[aliceblue] text-paper/80 hover:border-paper/50'
                }`}
              >
                <img
                    key={`${item.label}-${i}`}
                    src={item.icon}
                    alt={item.label}
                    className="h-[18px] w-[18px]" 
                />
              </button>
            </div>
          )
        })}
      </div>

      {/* sponsor marquee, bottom of hero */}
      <div className="absolute bottom-0 z-10 flex h-20 w-full items-center border-paper/10 bg-[#00000099]">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <div className="no-scrollbar flex overflow-hidden">
                <div className="flex w-max shrink-0 animate-marquee items-center gap-16 pr-16">
                    {[...SPONSORS, ...SPONSORS].map((sponsor, i) => (
                    <img
                        key={`${sponsor.name}-${i}`}
                        src={sponsor.src}
                        alt={sponsor.name}
                        className="h-11 w-auto shrink-0 object-contain transition-opacity "
                    />
                    ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}