import { useState } from "react";
import { IconPlay, IconChevronLeft, IconChevronRight } from "../../components/Icons";

const HIGHLIGHTS = [
  { image: "/event1.png", title: "Alte Cultural Festival" },
  { image: "/event2.png", title: "Demo Day: NPI 3.0" },
  { image: "/event3.png", title: "RenewHer Gala & Awards" },
  { image: "/event4.png", title: "Epic Show 2025" },
  { image: "/event5.png", title: "Jameson Distillery Tour" },
];

function Card({ item, size, onClick }) {
  const isActive = size === "active"
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative shrink-0 overflow-hidden rounded-3xl bg-ink bg-cover bg-center transition-all duration-500 ease-out shadow-2xl   ${
        isActive
          ? "h-95 w-85 border-[3px] border-blue sm:h-105 sm:w-120 lg:h-120 lg:w-170"
          : "h-90 w-65 opacity-60"
      }`}
      style={{ backgroundImage: `url(${item.image})` }}
      aria-label={item.title}
    >
      <div className="absolute inset-0 bg-black/45" />
      {isActive && (
        <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
          <IconPlay className="ml-1 h-6 w-6 text-white" />
        </span>
      )}
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

  const prevItem = HIGHLIGHTS[((activeIndex - 1) % total + total) % total];
  const activeItem = HIGHLIGHTS[activeIndex];
  const nextItem = HIGHLIGHTS[(activeIndex + 1) % total];

  return (
    <section className="relative isolate overflow-hidden bg-[#3A72FF17] py-24 transition-colors duration-300 dark:bg-[#060617]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* centered header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-black dark:text-white sm:text-5xl lg:text-[64px]">
            Event Highlights For You
          </h2>
         
        </div>

        {/* controls above the slider, pinned to the extreme ends */}
        <div className="mt-12 flex items-center justify-between">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous highlight"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:bg-black hover:text-white dark:border-white/15 dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <IconChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next highlight"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 text-black transition-colors hover:bg-black hover:text-white dark:border-white/15 dark:text-white dark:hover:bg-white dark:hover:text-black"
          >
            <IconChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* 3-card slider: broken out of the max-w-7xl container to the full viewport width
            (full-bleed). Side cards sit a fixed 70px from the active card (not pinned to
            the viewport edges), so on narrower large screens the shrink-0 cards overflow
            this wrapper and get clipped symmetrically, while on very wide screens they
            simply sit at that fixed 70px gap, fully visible. */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-10 w-screen overflow-hidden">
          <div className="flex items-center justify-center gap-4 lg:gap-[70px]">
            <div className="hidden lg:block">
              <Card item={prevItem} size="side" onClick={goPrev} />
            </div>
            <Card item={activeItem} size="active" onClick={() => {}} />
            <div className="hidden lg:block">
              <Card item={nextItem} size="side" onClick={goNext} />
            </div>
          </div>
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
