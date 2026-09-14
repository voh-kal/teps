export default function CtaBannerSection({ onScheduleDemo }) {
  return (
    <section className="bg-white pb-24 pt-16 transition-colors duration-300 lg:pt-44">
      <div className="mx-auto max-w-[1269px] px-6 lg:px-10">
        <div className="flex flex-col items-center lg:flex-row">
          {/* overlapping photo - sits above the card and is vertically centered against it */}
          <div className="relative z-10 h-[300px] w-full max-w-[604px] shrink-0 overflow-hidden rounded-[2rem] lg:h-[436px] lg:w-[604px]">
            <img
              src="/epic.png"
              alt="Team at an event registration booth"
              className="h-full w-full object-cover"
            />
          </div>

          {/* blue gradient card - left padding reserves room so the photo never covers the text.
              At lg+ pulled left via negative margin to overlap the photo by exactly 387px
              (604 + 1052 - 1269), while flex's items-center keeps both segments centered. */}
          <div className="min-h-[420px] w-full rounded-[2rem] bg-gradient-to-br from-blue to-ink py-14 pl-8 pr-8 sm:pr-14 lg:-ml-[387px] lg:h-[515px] lg:w-[1052px] lg:pl-[420px]">
            <div className="flex h-full max-w-xl flex-col justify-center">
              <h2 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Ready To Power Your Next Event?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/85 sm:text-base">
                Whether you are planning a conference, summit, festival, concert, government
                programme or celebration, TEPS provides the infrastructure to help you deliver a
                more organised, connected and successful event.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                
                <button
                  type="button"
                  onClick={onScheduleDemo}
                  className="inline-flex items-center justify-center rounded-[10px] border border-white px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
