import { useState } from "react";
import { IconPlay, IconChevronLeft, IconChevronRight } from "../../components/Icons";

const HIGHLIGHTS = [
  { image: "/event1.png", title: "Alte Cultural Festival" },
  { image: "/event2.png", title: "Demo Day: NPI 3.0" },
  { image: "/event3.png", title: "RenewHer Gala & Awards" },
  { image: "/event4.png", title: "Epic Show 2025" },
  { image: "/event5.png", title: "Jameson Distillery Tour" },
];

function Card({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      key={item.title}
      className="animate-fade-in relative h-[300px] w-full overflow-hidden rounded-3xl bg-ink bg-cover bg-center shadow-2xl sm:h-[420px] lg:h-[560px]"
      style={{ backgroundImage: `url(${item.image})` }}
      aria-label={item.title}
    >
      <div className="absolute inset-0 bg-black/45" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
        <IconPlay className="ml-1 h-6 w-6 text-white" />
      </span>
      <span className="absolute inset-x-0 bottom-0 p-5 text-left text-base font-semibold text-white sm:text-lg">
        {item.title}
      </span>
    </button>
  );
}

function HighLightSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = HIGHLIGHTS.length;

  const goTo = (index) => setActiveIndex(((index % total) + total) % total);
  const goPrev = () => goTo(activeIndex - 1);
  const goNext = () => goTo(activeIndex + 1);

  const activeItem = HIGHLIGHTS[activeIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[#3A72FF17] py-24 transition-colors duration-300 dark:bg-[#060617]">
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        {/* centered header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-black dark:text-white sm:text-5xl lg:text-[64px]">
            Event Highlights For You
          </h2>

        </div>

        {/* single full-width card, with prev/next arrows overlaid on its edges */}
        <div className="relative mt-12">
          <Card item={activeItem} onClick={() => {}} />

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous highlight"
            className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            <IconChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next highlight"
            className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
          >
            <IconChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* indicator below the slider */}
        <div className="mt-8 flex justify-center gap-2">
          {HIGHLIGHTS.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Go to ${item.title}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-6 bg-blue"
                  : "w-2 bg-black/20 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighLightSection;
