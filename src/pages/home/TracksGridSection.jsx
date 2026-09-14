const TRACKS = [
  {
    tag: 'Plan',
    title: 'Simplified Management Platform',
    body: 'Create your event and choose the capabilities you need to run your event.',
    image: '/how1.svg',
  },
  {
    tag: 'Invite',
    title: 'Invitation & Registration Integrations',
    body: 'Manage invitations, RSVPs, registrations and ticketing.',
    image: '/how2.svg',
  },
  {
    tag: 'Welcome',
    title: 'Premium Access Control',
    body: 'Manage accreditation, access control and check-in with our fast onsite and self check-in software.',
    image: '/how3.svg',
  },
  {
    tag: 'Engage',
    title: 'All-In Event App',
    body: 'Keep attendees informed and connected during live event with TEPS awesome ALL-IN App.',
    image: '/how4.svg',
  },
  {
    tag: 'Improve',
    title: 'Data, Leads & Insights',
    body: 'Use Event Intelligence and reporting to make every event better than the last.',
    image: '/how5.svg',
  },
  {
    tag: 'Support',
    title: '100% Team Support',
    body: 'TEPS provides you with both onsite and online support team to ensure that your event run smoothly.',
    image: '/how6.png',
  },
]

export default function TracksGridSection() {
  return (
    <section id="what-we-offer" className="py-24 dark:bg-black transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-block rounded-full bg-blue px-5.5 py-2.5 text-[15px]  text-white">
            what we offer
          </span>
          <h2 className="mt-5 mb-4 font-display text-4xl text-ink dark:text-paper sm:text-6xl">
            How TEPS Works
          </h2>
          <p className="text-[14px] text-[#242424] dark:text-white">From planning to post-event insights, TEPS supports the systems behind every stage of your event.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((track) => (
            <article
              key={track.title}
              className="group overflow-hidden rounded-2xl border border-ink/8 shadow-2xl bg-white transition-shadow duration-300 hover:shadow-xl dark:border-paper/10 dark:bg-[#181818]"
            >
              <div className="p-6">
                <span className="inline-block rounded-full bg-blue-500/5 text-blue px-3 py-1 text-[10px] uppercase tracking-[0.14em]">
                  {track.tag}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink dark:text-white">
                  {track.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate dark:text-[#DCDCDC]">
                  {track.body}
                </p>
                <div className="h-[219px] w-full overflow-hidden mt-10">
                  <img
                    src={track.image}
                    alt=""
                    className="h-full w-full  transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}