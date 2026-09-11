import { useEffect, useState } from 'react'
import { IconMap, IconCalendar } from '../../components/Icons.jsx'
import config from '../../config/api'

function formatEventDate(dateStr) {
  const date = new Date(dateStr)
  if (Number.isNaN(date.getTime())) return dateStr
  const day = date.getDate()
  const month = date.toLocaleString('en-US', { month: 'long' })
  const year = date.getFullYear()
  return `${day} ${month}, ${year}`
}

function getEventLink(event) {
  const path = `/registration_form/${event.eventId}/${event.formId}`
  return `${config.API_BASE_URL}${path}`
}

export default function UpcomingEventsSection() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true)
        const response = await fetch(config.getApiUrl(config.endpoints.UPCOMING_EVENT))
        const data = await response.json()
        if (data.success) {
          const transformed = data.data.slice(0, 3).map((event) => ({
            id: event.event_id,
            eventId: event.eventId,
            formId: event.formId,
            formRsvp: event.form_rsvp,
            title: event.event_title,
            location: event.location,
            date: formatEventDate(event.date),
            image: event.event_banner,
          }))
          setEvents(transformed)
        } else {
          setError('Failed to fetch upcoming events')
        }
      } catch {
        setError('Network error while fetching upcoming events')
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return (
    <section className="bg-green-50 py-24 transition-colors duration-300 dark:bg-[#202020]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-ink sm:text-4xl dark:text-white">Events Powered by TEPS</h2>
          <p className="mt-4 text-base leading-relaxed text-slate dark:text-white">
            See events currently powered by TEPS
          </p>
        </div>

        {loading && (
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="h-56 w-full rounded-2xl bg-ink/10 dark:bg-white/10" />
                <div className="mt-5 h-6 w-3/4 rounded bg-ink/10 dark:bg-white/10" />
                <div className="mt-4 h-4 w-1/2 rounded bg-ink/10 dark:bg-white/10" />
              </div>
            ))}
          </div>
        )}

        {!loading && error && (
          <p className="mt-14 text-center text-sm text-slate dark:text-white">{error}</p>
        )}

        {!loading && !error && events.length === 0 && (
          <p className="mt-14 text-center text-sm text-slate dark:text-white">No upcoming events right now — check back soon.</p>
        )}

        {!loading && !error && events.length > 0 && (
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {events.map((event) => (
              <div key={event.id} className="flex flex-col">
                <div className="h-56 w-full overflow-hidden rounded-2xl">
                  <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink dark:text-white">{event.title}</h3>

                <div className="mt-4 flex items-center justify-between gap-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-sm text-slate dark:text-white">
                      <IconMap className="h-4 w-4 shrink-0" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate dark:text-white">
                      <IconCalendar className="h-4 w-4 shrink-0" />
                      <span>{event.date}</span>
                    </div>
                  </div>

                  <a
                    href={getEventLink(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center justify-center rounded-full border border-black px-5 py-2 text-sm font-semibold text-black dark:border-white dark:text-white"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
