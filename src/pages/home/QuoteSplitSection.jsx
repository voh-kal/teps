import { IconArrowRight } from '../../components/Icons.jsx'

export default function QuoteSplitSection({ onScheduleDemo }) {
  return (
    <section className="relative isolate overflow-hidden py-24 dark:bg-[#131010f7] transition-colors duration-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue/40 blur-[110px]"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-4 lg:px-10">
        {/* left column */}
        <div className="relative z-10 max-w-lg">
          <span className="inline-flex items-center rounded-full bg-blue px-5 py-4 text-xs font-semibold tracking-wide text-white">
            For Event Pros
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold text-ink dark:text-paper sm:text-4xl">
            Built for Organisations That Run Events.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate dark:text-slate-light">
            From conferences and exhibitions to concerts, weddings, and festivals, TEPS equips event organizers, agencies, venues, and enterprises with everything they need to plan, promote, manage, and measure successful events. Streamline operations, enhance attendee experiences, and grow your event business. All from one powerful event management platform.
          </p>
          <button
            type="button"
            onClick={onScheduleDemo}
            className="group relative mt-8 inline-flex items-center justify-center gap-2 overflow-hidden rounded-[12px] border border-blue bg-transparent px-7 py-3.5 text-sm font-semibold text-blue"
          >
            <span className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 ease-out group-hover:translate-x-0" />
            <span className="relative z-10 flex items-center gap-2">
              Book a Demo
              <IconArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>

        {/* right column: image + encroaching glass quote card */}
        <div className="relative lg:pl-10">
          <div className="h-[420px] w-full overflow-hidden rounded-3xl sm:h-[480px]">
            <img
              src="/sasha.png"
              alt="Delegates talking between sessions"
              className="h-full w-full"
            />
          </div>

          {/* glass card, pulled left so it encroaches into the text column */}
          <div className="glass-card animate-card-bounce absolute -bottom-8 left-0 w-[88%] max-w-sm rounded-2xl p-6 shadow-2xl sm:left-6 lg:-left-16">
            <p className="text-[17px] italic leading-snug ">
              “TEPS handled the access and accreditation process for the Africa Live Entertainment Conference (ALEC), and the experience was excellent. They brought the organization, responsiveness, and on-the-ground adaptability that a live event demands, which made the process smooth for both our team and our attendees, and helped the whole event run seamlessly. I'd happily recommend TEPS to any organizer looking for a reliable access and event technology partner.”
            </p>
            <div className="mt-5 flex items-center gap-3">
              <img
                src="/tto.jpeg"
                alt="ceo"
                className="h-11 w-11 rounded-[50%] object-cover"
              />
              <div>
                <p className="text-sm font-medium ">Sasha P.</p>
                <p className="text-xs">Founder & Convener, ALEC | CEO, Purplefire Entertainment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}