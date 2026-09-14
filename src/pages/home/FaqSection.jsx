import { useState } from 'react'

const FAQS = [
  {
    q: 'How quickly can we launch an event?',
    a: 'Most teams go from signup to a live event page in under a day, with guided setup for tickets, agenda and check-in.',
  },
  {
    q: 'Can attendees register without an app?',
    a: 'Yes. Registration, tickets and check-in all work directly in the browser, no app download required.',
  },
  {
    q: 'Does TEPS support multi-day events?',
    a: 'Multi-day and multi-track agendas are fully supported, with per-day schedules and session clash detection.',
  },
  {
    q: 'What happens after the event ends?',
    a: 'You get attendance reports, engagement analytics and session replays within 48 hours of close.',
  },
  {
    q: 'Is there a limit on attendee numbers?',
    a: 'No hard limit. TEPS scales from intimate meetups to festivals with tens of thousands of attendees.',
  },
  {
    q: 'Can we use our own domain and branding?',
    a: 'Yes, every event page, email and ticket can be fully branded to match your organization.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section id="faq" className="relative isolate z-10 bg-ink py-24">
      <img
        src="/merch.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-[#3A72FFFA] dark:bg-[#000000FA]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          
          <h2 className="mt-5 font-display text-4xl font-semibold text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div
                key={faq.q}
                className={`rounded-2xl  border-white/20 p-5 transition-colors duration-300 ${
                  isOpen ? 'bg-white' : 'bg-white/10'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-3 text-left"
                >
                  <span className={`text-sm font-semibold transition-colors duration-300 ${isOpen ? 'text-ink' : 'text-white'}`}>
                    {faq.q}
                  </span>
                  <span
                    className={`relative flex h-6 w-6 shrink-0 items-center justify-center  transition-colors duration-300 ${
                      isOpen ? 'border-blue' : 'border-white/40'
                    }`}
                  >
                    <span
                      className={`absolute h-[2px] w-3 rounded-full transition-colors duration-300 ${
                        isOpen ? 'bg-blue' : 'bg-white'
                      }`}
                    />
                    <span
                      className={`absolute h-3 w-[2px] rounded-full bg-white transition-all duration-300 ${
                        isOpen ? 'scale-y-0 opacity-0' : 'scale-y-100 opacity-100'
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'mt-3 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-relaxed text-slate">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* white card straddling this section's bottom edge and the section below (sm+ only; stays fully inside the section on mobile) */}
        <div className="relative mt-16 flex justify-center sm:-mb-24">
          <div className="relative z-20 flex w-full max-w-2xl flex-col items-center gap-5 rounded-3xl bg-white px-10 py-10 text-center shadow-2xl dark:bg-[#3A72FF] sm:translate-y-1/2">
            <p className="text-base text-3xl sm:text-4xl font-semibold text-ink dark:text-white">Have a Question? Talk to TEPS.</p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85 dark:border dark:border-white dark:bg-transparent"
            >
              Contact Our Support Team
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
