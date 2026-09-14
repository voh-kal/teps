import { useState } from 'react'
import { IconArrowRight } from '../../components/Icons.jsx'
import { Link } from 'react-router-dom'
import { caseStudies } from '../../data/caseStudies'
import CaseStudyModal from '../case_studies/CaseStudyModal'

const PANELS = [
  {
    caseStudyId: 2,
    borderColor: '#2012E8',
    title: 'How TEPS Created a Seamless Registration Experience for Nigeria\'s Leading Innovation Showcase',
    paragraph:
      'The NSIA Prize for Innovation Demo Day brings together innovators, investors, government stakeholders and partners to celebrate breakthrough Nigerian innovation.',
    image: '/use1.svg',
    logo: '/dl26.png',
  },
  {
    caseStudyId: 5,
    borderColor: '#24622B',
    title: 'How TEPS Powered Vendor Operations for a High-Volume Brand Experience',
    paragraph:
      'The Jameson Distillery Tour (JDOT 2025) is a multi-city experiential series designed to celebrate craft, culture, and community through immersive brand experiences and curated partnerships.....',
    image: '/use2.svg',
    logo: '/dl18.png',
  },
  {
    caseStudyId: 3,
    borderColor: '#FD56AC',
    title: 'How  TEPS Powered a Presidential-Level Guest Journey At RenewHer Gala and Awards',
    paragraph:
      'The Renew HER Gala & Awards is one of the most anticipated high-level events of the year, hosting over 600 distinguished guests, VIPs, and government officials....',
    image: '/use3.svg',
    logo: '/re1.svg',
  },
  {
    caseStudyId: 1,
    borderColor: '#F5A818',
    title: 'How TEPS Kept The Culture Moving Without Slowing Guests Down At Alte 4.0',
    paragraph:
      'Alte Culture Fest is one of Lagos\' leading cultural festivals celebrating music, fashion, art and creative expression.',
    image: '/use4.svg',
    logo: '/dl14.png',
  },
]

// the row uses gap-4 (1rem) between cards; flex-basis percentages don't account for
// that gap on their own, so shrink-0 cards would overflow the row by the total gap
// width, clipping whichever card ends up on the right edge. Subtract it here instead.
const ROW_GAP_REM = (PANELS.length - 1) * 1
const ACTIVE_BASIS = `calc((100% - ${ROW_GAP_REM}rem) * 0.6)`
const COMPACT_BASIS = `calc((100% - ${ROW_GAP_REM}rem) * ${(0.4 / (PANELS.length - 1)).toFixed(4)})`

export default function UseCasesSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [selectedCase, setSelectedCase] = useState(null)

  const openCaseModal = (caseStudyId) => {
    const match = caseStudies.find((study) => study.id === caseStudyId)
    if (match) setSelectedCase(match)
  }

  return (
    <section id="use-cases" className="bg-white py-24 transition-colors duration-300 dark:bg-[#202020]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
            Case Study
          </span>
          <h2 className="text-[#000000] mt-5 mb-4 font-display text-3xl font-semibold text-ink sm:text-4xl dark:text-white">
            Trusted by Organisations That Delivers Exceptional Events
          </h2>
          <p className="text-[14px] text-[#000000] leading-relaxed text-slate dark:text-white">
            See how organisations have used TEPS to simplify event operations, improve guest experiences and gain greater visibility across their events.
          </p>
        </div>

        {/* mobile/tablet: a plain vertical stack, always expanded (no hover state to rely on) */}
        <div className="mt-14 flex flex-col gap-4 lg:hidden">
          {PANELS.map((panel) => (
            <div
              key={panel.title}
              className="relative h-72 w-full overflow-hidden rounded-2xl border-2"
              style={{ borderColor: panel.borderColor }}
            >
              <img src={panel.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
              <div className="relative z-10 flex h-full flex-col items-start p-6">
                <img
                  src={panel.logo}
                  alt={`${panel.title} logo`}
                  className="h-6 w-auto self-start object-contain"
                />
                <h3 className="mt-4 self-start font-display text-xl font-semibold text-white">
                  {panel.title}
                </h3>
                <div className="mt-auto flex w-full min-w-0 items-end justify-between gap-4 self-stretch">
                  <p className="min-w-0 text-sm leading-relaxed text-white/80">
                    {panel.paragraph}
                  </p>
                  <button
                    type="button"
                    onClick={() => openCaseModal(panel.caseStudyId)}
                    aria-label={`View case study: ${panel.title}`}
                    className="flex h-9 w-9 shrink-0 -rotate-45 items-center justify-center rounded-full bg-white text-black transition-transform hover:rotate-0"
                  >
                    <IconArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* desktop: hover-to-expand accordion row */}
        <div className="mt-14 hidden h-[420px] gap-4 overflow-hidden rounded-3xl lg:flex">
          {PANELS.map((panel, i) => {
            const isActive = i === activeIdx
            return (
              <div
                key={panel.title}
                onMouseEnter={() => setActiveIdx(i)}
                className="relative shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2 transition-[flex-basis] duration-500 ease-out"
                style={{ flexBasis: isActive ? ACTIVE_BASIS : COMPACT_BASIS, borderColor: panel.borderColor }}
              >
                <img src={panel.image} alt="" className="absolute inset-0 h-full w-full object-cover" />

                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive ? 'bg-gradient-to-r from-ink via-ink/50 to-ink/10' : 'bg-ink/60'
                  }`}
                />

                <div className="relative z-10 flex h-full flex-col items-start p-6">
                  {isActive ? (
                    <>
                      <img
                        src={panel.logo}
                        alt={`${panel.title} logo`}
                        className="h-6 w-auto self-start object-contain  "
                      />
                      <h3 className="max-w-sm mt-4 self-start font-display text-2xl font-semibold text-white">
                        {panel.title}
                      </h3>
                      <div className="mt-auto flex w-full min-w-0 items-end justify-between gap-4 self-stretch">
                        <p className="min-w-0 text-sm w-4/6 leading-relaxed text-white/80">
                          {panel.paragraph}
                        </p>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            openCaseModal(panel.caseStudyId)
                          }}
                          aria-label={`View case study: ${panel.title}`}
                          className="flex h-9 w-9 shrink-0 -rotate-45 items-center justify-center rounded-full bg-white text-black transition-transform hover:rotate-0"
                        >
                          <IconArrowRight className="h-4 w-4" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <img
                        src={panel.logo}
                        alt={`${panel.title} logo`}
                        className="h-8 w-auto object-contain  "
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 rounded-[15px] border border-black bg-transparent px-7 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-ink"
          >
            View Case Studies
            <IconArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </section>
  )
}
