import { useRef, useState } from 'react'
import { IconPlay } from '../../components/Icons.jsx'

export default function VideoSection() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  return (
    <section id="experience-teps" className="relative isolate overflow-hidden bg-white py-24 dark:bg-black transition-colors duration-300">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/40 blur-[110px] dark:bg-green-400/15"
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink dark:text-paper sm:text-5xl">
            Experience The Power of TEPS
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate dark:text-slate-light">
            Take a closer look at how TEPS helps manage the systems behind your event.
          </p>
        </div>

        <div className="relative mx-auto mt-14 aspect-[1088/582] w-full max-w-[1088px] overflow-hidden rounded-3xl">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/digc4dvpr/video/upload/v1789137774/wlc_e7vda6.mp4"
            className="h-full w-full object-cover"
            playsInline
            onClick={togglePlay}
            onEnded={() => setIsPlaying(false)}
          />
          <button
            type="button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause the TEPS walkthrough video' : 'Play the TEPS walkthrough video'}
            className={`absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/80 text-white transition-all hover:scale-105 ${
              isPlaying ? 'pointer-events-none opacity-0' : 'opacity-100'
            }`}
          >
            <IconPlay className="ml-1 h-7 w-7" />
          </button>
        </div>

        {/* <div className="mt-10 flex justify-center">
          <a
            href="#schedule-demo"
            className="inline-flex items-center justify-center rounded-full bg-blue px-7 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-85"
          >
            Schedule a Demo
          </a>
        </div> */}
      </div>
    </section>
  )
}
