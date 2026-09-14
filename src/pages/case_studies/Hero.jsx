import { useState } from "react";
import { IconArrowRight } from "../../components/Icons";
import { caseStudies } from "../../data/caseStudies";
import CaseStudyModal from "./CaseStudyModal";

function Hero({ onScheduleDemo }) {
  const [selectedCase, setSelectedCase] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const alteCase = caseStudies.find((study) => study.id === 1);
  const demoDayCase = caseStudies.find((study) => study.id === 2);

  const openCaseModal = (id) => {
    const match = caseStudies.find((study) => study.id === id);
    if (match) setSelectedCase(match);
  };

  return (<>
    <section className="relative isolate overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-[#202020]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-blue/40 blur-[110px]"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-4 lg:px-10">
        {/* left column */}
        <div className="relative z-10 max-w-lg">
          <span className="inline-block rounded-full bg-blue/10 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-blue">
            Case Study
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold text-black dark:text-white sm:text-4xl">
            Wondering if you can use TEPS for your events?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black dark:text-white">
            Discover how TEPS helps event organizers simplify planning, management, and delivery through one connected platform. From registration and ticketing to attendee engagement, vendor coordination, and event operations, TEPS brings every essential process together. Explore real-world case studies showing how organizations, event managers, and agencies use TEPS to streamline workflows, improve attendee experiences, and gain better visibility throughout their events. See how TEPS supports the entire event journey, helping teams stay organized, work smarter, engage audiences effectively, and make informed decisions before, during, and after every event.
          </p>
          <button
            type="button"
            onClick={onScheduleDemo}
            className="mt-8 inline-flex items-center justify-center rounded-[12px] bg-black px-7 py-3.5 text-sm font-semibold text-white transition-colors dark:bg-white dark:text-black"
          >
            Schedule a Demo
          </button>
        </div>

        {/* right column: stacked case study preview cards */}
        <div className="relative flex w-full flex-col gap-4 lg:pl-10">
          <div
            onMouseEnter={() => setActiveIndex(0)}
            className={`group relative w-full overflow-hidden rounded-3xl bg-ink bg-cover bg-center transition-[height] duration-500 ease-out ${
              activeIndex === 0 ? 'h-[364px]' : 'min-h-38.25 sm:h-38.25'
            }`}
            style={{ backgroundImage: `url(${alteCase?.image})` }}
          >
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative flex h-full items-end justify-between gap-4 p-6">
              <span className="w-[80%] text-lg font-semibold text-white">
                {alteCase?.title}
              </span>
              <button
                type="button"
                onClick={() => openCaseModal(1)}
                aria-label="View case study"
                className="flex h-11 w-11 shrink-0 -rotate-45 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:rotate-0"
              >
                <IconArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            onMouseEnter={() => setActiveIndex(1)}
            className={`group relative w-full overflow-hidden rounded-3xl bg-ink bg-cover bg-center transition-[height] duration-500 ease-out ${
              activeIndex === 1 ? 'h-[364px]' : 'min-h-38.25 sm:h-38.25'
            }`}
            style={{ backgroundImage: `url(${demoDayCase?.image})` }}
          >
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative flex h-full items-end justify-between gap-4 p-6">
              <span className="w-[80%] text-lg font-semibold text-white">
                {demoDayCase?.title}
              </span>
              <button
                type="button"
                onClick={() => openCaseModal(2)}
                aria-label="View case study"
                className="flex h-11 w-11 shrink-0 -rotate-45 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:rotate-0"
              >
                <IconArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {selectedCase && (
      <CaseStudyModal
        caseStudy={selectedCase}
        onClose={() => setSelectedCase(null)}
      />
    )}
  </>);
}

export default Hero;