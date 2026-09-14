import { useState } from 'react'
import { flushSync } from 'react-dom'
import { IconMic, IconTicket, IconGlobe, IconSparkline, IconUsers } from '../../components/Icons.jsx'

const TABS = ['Before event', 'During event', 'After event']

const CONTENT = {
  'Before event': [
    {
      icon: IconTicket,
      title: 'Custom Event Website',
      body: 'Create a fully branded event website that makes a lasting first impression. Showcase your event details, speakers, agenda, sponsors, tickets, and updates in one beautiful, mobile-friendly destination, designed to boost registrations and deliver a seamless attendee experience.',
      image: '/r1.png',
    },
    {
      icon: IconGlobe,
      title: 'Invitation',
      body: 'Make every invitation feel personal with beautifully branded designs tailored to your event. Reach guests instantly through emails and shareable links, monitor RSVPs in real time, automate reminders, and keep everyone informed from the first invite to event day. ',
      image: '/r2.svg',
    },
    {
      icon: IconUsers,
      title: 'Registration',
      body: 'Give your attendees a smooth registration experience that gets them to sign up in minutes. Customize registration forms, collect information that matters, automate confirmations and manage every registration from one intuitive dashboard.',
      image: '/r4.svg',
    },
    {
      icon: IconSparkline,
      title: 'Ticketing',
      body: 'Power every event with flexible ticketing solution designed to maximize registrations. Create tickets, set dynamic pricing, accept secure payments, monitor sales in real-time and deliver digital tickets through one seamless experience.',
      image: '/r3.svg',
    },
    {
      icon: IconMic,
      title: 'Event Communication',
      body: 'Keep your audience connected from registration to the final farewell. Share event updates, reminders, announcements and important alerts instantly to keep everyone informed at every step of the way.',
      image: '/r5.svg',
    },
  ],
  'During event': [
    {
      icon: IconMic,
      title: 'Attendee Management',
      body: 'Keep every attendee organized from registration to the event floor. Track registrations, manage attendee information, monitor engagement and give your team a clear view of the people who matter the most at your event.',
      image: '/r6.svg',
    },
    {
      icon: IconUsers,
      title: 'Speaker & Exhibitor Management',
      body: 'Bring every key stakeholder into one streamlined workflow. Manage speaker profiles, sponsor commitments, exhibitor details, and communications while keeping everyone aligned throughout the event lifecycle.',
      image: '/r7.svg',
    },
    {
      icon: IconTicket,
      title: 'Check-In',
      body: 'Turn arrival into a seamless first impression. Speed up guest entry with efficient check-in, real-time attendance tracking, and easy verification, giving your team more control while getting attendees into the event faster.',
      image: '/r8.svg',
    },
    {
      icon: IconGlobe,
      title: 'All-In App',
      body: 'Put the entire event experience in your attendees’ hands. From event information and schedules to speakers, exhibitors, networking, and updates, the All-In App keeps everything they need just a tap away.',
      image: '/r9.svg',
    },
    {
      icon: IconSparkline,
      title: 'Accreditation & Access Control',
      body: 'Make access simple, secure, and seamless. Assign credentials, manage access levels, and control who gets into specific areas of your event with a system built to keep check-in and security running smoothly.',
      image: '/r10.svg',
    },
  ],
  'After event': [
    {
      icon: IconGlobe,
      title: 'Event Intelligence',
      body: 'Turn registrations, attendance, engagement and operational data into useful insight. Understand what happened, measure performance and make better decisions for your next event.',
      image: '/r11.svg',
    },
    {
      icon: IconUsers,
      title: 'Attendee Engagement Report',
      body: 'See how attendees interacted with your event across sessions, activities and touchpoints. Understand audience interests and use the insight to improve future programming.',
      image: '/r12.svg',
    },
    {
      icon: IconSparkline,
      title: 'Post Event Engagement',
      body: 'Collect targeted feedback, measure attendee satisfaction and understand what worked and what needs to improve.',
      image: '/r13.svg',
    },
    {
      icon: IconTicket,
      title: 'Lead Management',
      body: 'Capture, organise and follow up with event leads. Track interactions, qualify prospects and connect event activity to business opportunities.',
      image: '/r14.svg',
    },
    {
      icon: IconMic,
      title: 'Sales Reports and ROI',
      body: 'Get a clear view of your event’s financial performance with detailed sales reports and ROI insights. Track revenue, ticket sales, expenses, and profitability to understand what worked and make smarter decisions for your next event.',
      image: '/r15.svg',
    },
  ],
}

// expanded: alone in its column, shows body + image and fills the column.
// otherwise: paired with another card in its column, shows body only, splits the column evenly.
function PhaseCard({ data, expanded, onHover, viewTransitionName }) {
  const Icon = data.icon
  return (
    <div
      onMouseEnter={onHover}
      style={{ viewTransitionName }}
      className={`group relative flex flex-1 cursor-pointer flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-500 ${
        expanded ? 'border-blue' : 'border-ink/8'
      } ${expanded ? 'p-6' : 'p-5'}`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue/10 ${
            expanded ? 'text-blue' : 'text-ink'
          }`}
        >
          <Icon className="h-5 w-5" />
        </span>
        <h3
          className={`font-display text-[15px] font-semibold ${expanded ? 'text-blue' : 'text-ink'}`}
        >
          {data.title}
        </h3>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate">{data.body}</p>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          expanded ? 'mt-5 max-h-[420px] flex-1 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="w-full overflow-hidden rounded-xl">
          <img src={data.image} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  )
}

const DEFAULT_COLUMNS = [[0], [1, 2], [3, 4]]

// Exactly one column is ever "solo" (its one card expanded, showing the image); the other
// two hold a compact pair each. Hovering a compact card makes its own column solo (evicting
// its pair-mate) and hands that pair-mate to whichever column was previously solo - so a
// card only ever swaps into the column that currently has room, never anywhere else.
function nextColumns(prev, i) {
  const soloIdx = prev.findIndex((col) => col.length === 1)
  if (prev[soloIdx][0] === i) return prev
  const colIdx = prev.findIndex((col) => col.includes(i))
  const partner = prev[colIdx].find((c) => c !== i)
  return prev.map((col, idx) => {
    if (idx === colIdx) return [i]
    if (idx === soloIdx) return [...col, partner]
    return col
  })
}

export default function PhasesSection() {
  const [tab, setTab] = useState('Before event')
  const [columns, setColumns] = useState(DEFAULT_COLUMNS)

  const cards = CONTENT[tab]

  // Swapping a card between columns reparents its DOM node, so a plain CSS transition can't
  // animate the move - wrap the update in a View Transition (with a graceful fallback) so the
  // browser morphs each card smoothly from its old position/size to its new one.
  function handleHover(i) {
    const next = nextColumns(columns, i)
    if (next === columns) return
    if (typeof document.startViewTransition !== 'function') {
      setColumns(next)
      return
    }
    document.startViewTransition(() => flushSync(() => setColumns(next)))
  }

  function handleTabChange(t) {
    setTab(t)
    setColumns(DEFAULT_COLUMNS)
  }

  return (
    <section className="relative isolate overflow-hidden bg-[#5e6f7d24] py-24 backdrop-blur-xl transition-colors duration-300 dark:bg-gradient-to-b dark:from-black dark:to-[#202020]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/50 blur-[120px]"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
         
          <h2 className="mt-5 font-display text-[60px] font-semibold text-ink dark:text-paper">
            From Invitations To Insights
          </h2>
          <p className="mx-auto max-w-2xl mt-4 text-base leading-relaxed text-slate dark:text-slate-light">
            Great events don't happen by accident. Eventrix powers every stage — from the first save-the-date to the final attendee report — so you can focus on creating unforgettable experiences.
          </p>
        </div>

        {/* pill tabs */}
        <div className="mx-auto mt-10 flex w-fit gap-1 rounded-full border border-blue bg-white p-1">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => handleTabChange(t)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                tab === t
                  ? 'bg-blue text-white'
                  : 'text-slate hover:text-ink'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:items-stretch">
          {columns.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-5">
              {column.map((i) => (
                <PhaseCard
                  key={cards[i].title}
                  data={cards[i]}
                  expanded={column.length === 1}
                  onHover={() => handleHover(i)}
                  viewTransitionName={`phase-card-${i}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}