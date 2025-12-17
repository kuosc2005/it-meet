import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useEvents } from '@/components/custom/EventContext'

export default function UpcomingEventsSection() {
  const { events } = useEvents()

  const upcomingEvents = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return events
      .map((event) => {
        if (!event.fullDate || event.fullDate === 'TBD') return null
        const eventDate = new Date(event.fullDate)
        eventDate.setHours(0, 0, 0, 0)
        return { ...event, eventDate }
      })
      .filter((event) => event && event.eventDate >= today)
      .map((event) => {
        const diffTime = event.eventDate.getTime() - today.getTime()
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        let statusColor = 'bg-green-500'
        if (diffDays <= 2) statusColor = 'bg-orange-400'

        return { ...event, statusColor }
      })
      .sort((a, b) => a.eventDate - b.eventDate)
      .slice(0, 2)
  }, [events])

  if (upcomingEvents.length === 0) return null

  return (
    <section className="w-full bg-[#171A23] py-12 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#369fff] to-[#12dc9f]">
            Upcoming Events
          </h1>
          <p className="text-gray-400 pt-4 pb-12">
            What's happening next — mark your calendar
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingEvents.map((event) => (
            <Link
              key={event.id}
              to={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}
              className="block w-full"
            >
              {/* CARD */}
              <div
                className="relative bg-[#161A24] border-2 border-white/20
                rounded-tl-3xl
                w-full h-[350px] flex flex-col overflow-hidden
                transition-all duration-300 hover:scale-105
                hover:border-[#369fff]/50
                hover:shadow-[0_0_20px_rgba(54,159,255,0.4),0_0_30px_rgba(18,220,159,0.3)]"
              >

                {/* DATE BADGE — FLUSH TOP LEFT */}
                <div
                  className="absolute top-0 left-0 z-10 w-14 h-14 rounded-full
                 
                  flex flex-col items-center justify-center"
                >
                  <span className="text-[10px] text-gray-400 uppercase">
                    {event.eventDate.toLocaleDateString('en-US', { month: 'short' })}
                  </span>
                  <span className="text-lg font-bold text-white leading-none">
                    {event.eventDate.getDate()}
                  </span>
                </div>

                {/* STATUS DOT */}
                <span
                  className={`absolute top-3 right-3 w-3 h-3 rounded-full ${event.statusColor} animate-pulse`}
                />

                {/* IMAGE */}
                <div className="relative h-[180px] p-6 shrink-0">
                  <img
                    src={event.imgSrc}
                    alt={event.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                </div>

                {/* CONTENT */}
                <div className="p-4 flex flex-col gap-1 pb-10">
                  <h3
                    className="text-base md:text-lg font-bold
                    bg-gradient-to-r from-[#369FFF] to-[#14C58F]
                    bg-clip-text text-transparent leading-tight"
                  >
                    {event.title}
                  </h3>

                  <p className="text-xs text-gray-400 line-clamp-3">
                    {event.description}
                  </p>
                </div>

                {/* APPLY NOW — BOTTOM LEFT */}
                <div
                  className="absolute bottom-3 left-3
                  px-5 py-2.5 rounded-md text-xs font-semibold
                  text-black bg-gradient-to-r from-[#369fff] to-[#12dc9f]
                  shadow-md transition-all duration-200
                  hover:scale-105"
                >
                  Apply Now →
                </div>
              </div>
            </Link>
          ))}

          {/* SEE MORE */}
          <div className="flex items-center justify-center min-h-[180px] bg-[#161A24] rounded-2xl">
            <Link
              to="/events"
              className="px-14 py-4 rounded-full text-lg font-bold
              bg-gradient-to-r from-[#369fff] to-[#12dc9f] text-black
              transition-all duration-300 hover:scale-105"
            >
              See More Events →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
