import { caseStudies } from "../../data/caseStudies";
import { IconArrowRight } from "../../components/Icons";

const REASONS = [
  {
    number: "864",
    text: "Attendees",
  },
  {
    number: "11",
    text: "Ministers Received",
  },
  {
    number: "64%",
    text: "Check-In Rate",
  },
  {
    number: "90%",
    text: "Client Satisfaction",
  },
];

const GALLERY = [
  {
 
    src: "/case_id1.png",
  },
  {
  
    src: "/case_id2.png",
  },
  {

    src: "/case_id3.png",
  },
  {

    src: "/case_id2.png",
  },
];



function CaseStudySection() {
  return (
    <section className="bg-[#F9F9F9] py-16 transition-colors duration-300 dark:bg-[#181818] md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* centered header */}
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl font-semibold text-black dark:text-white sm:text-5xl lg:text-[60px]">
            How Presidential Launch Of World  Bank-Supported Developmental  Programmes Use TEPS Access Control Software
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#333333] dark:text-white/70">
            TEPS managed the registration, categorisation, and check-in of high-level attendees, including government officials, ministers, and other distinguished delegates. We facilitated pre-event communications, provided real-time registration insights, and managed on-site check-in while ensuring seamless differentiation between regular attendees and VIP government officials. Customised badges were also deployed to clearly identify attendee categories and support efficient access control throughout the event.
          </p>
        </div>

        {/* 4-column numbered row */}
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {REASONS.map((reason) => (
            <div key={reason.number} className="text-center">
              <span className="font-display text-4xl font-bold text-[#1082DF] sm:text-5xl lg:text-[64px]">
                {reason.number}
              </span>
              <p className="mt-3 text-[14px] leading-relaxed text-[#333333] dark:text-white/70">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* full-bleed infinite image slider, no controls */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] mt-16 w-screen overflow-hidden">
        <div className="flex w-max shrink-0 animate-marquee-slow items-center gap-5 pr-5">
          {[...GALLERY, ...GALLERY].map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="relative h-[146px] w-[269px] shrink-0 overflow-hidden rounded-2xl sm:h-[200px] sm:w-[368px] lg:h-[269px] lg:w-[496px]"
            >
              <img
                src={item.src}
                alt={item.name}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* centered CTA below the slider */}
      {/* <div className="mt-12 flex justify-center">
        <button
          type="button"
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-[12px] border border-black px-7 py-3.5 text-sm font-semibold text-black transition-colors duration-300 dark:border-white dark:text-white"
        >
          <span className="absolute inset-0 -translate-x-full bg-black transition-transform duration-300 ease-out group-hover:translate-x-0 dark:bg-white" />
          <span className="relative z-10 flex items-center gap-2 transition-colors duration-300 group-hover:text-white dark:group-hover:text-black">
            View Case Study
            <IconArrowRight className="h-4 w-4" />
          </span>
        </button>
      </div> */}
    </section>
  );
}

export default CaseStudySection;
