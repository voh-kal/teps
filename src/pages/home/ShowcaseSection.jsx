import { IconMic, IconUsers, IconPlay, IconGlobe, IconCalendar } from '../../components/Icons.jsx'

const GALLERY = [
  { src: '/event1.png', name: 'Event 1' },
  { src: '/event2.png', name: 'Event 2' },
  { src: '/event3.png', name: 'Event 3' },
  { src: '/event4.png', name: 'Event 4' },
  { src: '/event5.png', name: 'Event 5' },
  { src: '/event6.png', name: 'Event 6' },
]

export default function ShowcaseSection() {
  return (
    <section className="relative bg-paper pb-24 pt-12 dark:bg-[#202020] transition-colors duration-300 sm:py-24">
      {/* image positioned at the top of the section */}
      <div className="aspect-1440/381 max-h-80 overflow-hidden rounded-3xl about_absolute">
        <img
          src="/top-image2.svg"
          alt="Delegates gathered on the main stage floor"
          className="h-full w-full object-cover dark:invert"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mt-6 ">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-paper sm:text-5xl lg:text-[60px]">
            Everything You Need to Power Your Event.
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-base leading-relaxed text-slate dark:text-white">
            From the opening keynote to the last closing set, every room is built for people
            to actually talk to each other. Here's a look at what last year felt like.
          </p>
        </div>

        {/* infinitely scrolling image row: breaks out of the max-w-7xl container to bleed full viewport width */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-14 w-screen overflow-hidden pt-4">
          <div className="flex w-max shrink-0 animate-marquee-slow items-center gap-5 pr-5">
            {[...GALLERY, ...GALLERY].map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="relative z-0 h-[371px] w-[316px] shrink-0 overflow-hidden rounded-2xl  transition-transform duration-500 ease-out hover:z-10 hover:-translate-y-4 dark:border-paper/10"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}