import { IconBell, IconCalendar, IconUsers } from '../../components/Icons.jsx'

const FLOATING_CARDS = [
  {
    icon: IconBell,
    iconBg: 'bg-red-500',
    title: 'Announcement',
    subtitle: 'The venue for the expo session has been changed.',
    className: 'left-0 top-[22%] -translate-x-[15%]',
  },
  {
    icon: IconCalendar,
    iconBg: 'bg-yellow-400',
    title: 'Agendas',
    subtitle: 'The Tech Expo · 16th July, 2026 · 2pm',
    className: 'right-0 top-[46%] translate-x-[15%]',
  },
  {
    icon: IconUsers,
    iconBg: 'bg-blue',
    title: 'Joanna Green',
    subtitle: 'Head of Marketing, Oracle',
    className: 'left-0 bottom-[8%] -translate-x-[10%]',
  },
]

const PEEK_CARDS = [
  {
    title: 'Self Check-In',
    image: '/lift1.svg',
  },
  {
    title: 'Chat',
    image: '/lift2.png',
  },
  {
    title: 'Engage',
    image: '/lift3.svg',
  },
]

export default function AllInSection() {
  return (
    <section id="all-in" className="relative isolate overflow-hidden bg-white pt-24 dark:bg-[#202020] transition-colors duration-300">
      {/* image positioned at the top of the section */}
      <div className="mx-auto mb-14 w-full overflow-hidden rounded-3xl sm:h-80 about_absolute1">
        <img
          src="/top-image3.svg"
          alt="Delegates gathered on the main stage floor"
          className="h-full w-full dark:invert"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">
          {/* left column */}
          <div>
            <span className="inline-block rounded-full bg-blue/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-blue">
              All-In
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[1.08] text-ink dark:text-paper sm:text-5xl">
              Experience The All-In Power Engagement
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-slate dark:text-white">
              TEPS powers the infrastructure. ALL-IN powers engagement. Together, they deliver one
              connected event experience. From agendas and speaker profiles to networking,
              notifications, live updates and interactive experiences, ALL-IN keeps attendees
              informed, connected and engaged before, during and after your event.
            </p>
            <a
              href="#all-in"
              className="mt-8 inline-flex items-center justify-center rounded-[10px] bg-blue px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
            >
              Discover All-In
            </a>
          </div>

          {/* right column: phone mockup + floating UI cards */}
          <div className="relative flex justify-center ">
            <img
                src="/phone.svg"
                alt="TEPS app preview on a phone"
                className="h-full w-full object-cover"
              />
            <img
              src="/notify1.svg"
              alt=""
              className="animate-notify1 absolute left-0 top-[22%] z-10 w-48 opacity-0 sm:w-72"
            />
            <img
              src="/notify2.svg"
              alt=""
              className="animate-notify2 absolute right-0 top-[35%] z-10 w-48 opacity-0 sm:w-72"
            />
            <img
              src="/notify3.svg"
              alt=""
              className="animate-notify3 absolute bottom-[33%] left-0 z-10 w-48 opacity-0 sm:w-72"
            />
          </div>
        </div>

        {/* peeking cards: only the top peeks out by default, hover grows the window to reveal more */}
        <div style={{ width: '75%' }}>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-4">
            {PEEK_CARDS.map((card) => (
              <div key={card.title} className="relative mx-auto h-20 w-full">
                {/* fixed-height flow anchor so growing the card on hover doesn't push the page layout down */}
                <div className="absolute inset-x-0 bottom-0 h-20 overflow-hidden rounded-t-2xl shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.25)] transition-[height] duration-500 ease-out hover:z-10 hover:h-40">
                  <img
                    src={card.image}
                    alt={`${card.title} preview`}
                    className="absolute inset-x-0 top-0 h-64 w-full object-cover object-top"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  )
}
