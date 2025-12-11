import React, { useMemo } from 'react'
import { Card } from '@/components/ui/card'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function EventPage({ events }) {

  const sortEvents = (eventList) => {
    return [...eventList].sort((a, b) => {
      const dayA = a.day
      const dayB = b.day
      const isNumA = !isNaN(parseFloat(dayA)) && isFinite(dayA)
      const isNumB = !isNaN(parseFloat(dayB)) && isFinite(dayB)

      if (isNumA && isNumB) return parseFloat(dayA) - parseFloat(dayB)
      if (isNumA && !isNumB) return -1
      if (!isNumA && isNumB) return 1
      return 0
    })
  }

  const sections = useMemo(() => {
    if (!events) return []

    const pre = events.filter((e) => e.category === 'pre_event')
    const main = events.filter((e) => e.category === 'main_event')
    const late = events.filter((e) => e.category === 'late_event')

    const result = []

    if (pre.length > 0) result.push({ title: 'PRE EVENTS', data: sortEvents(pre) })
    if (main.length > 0) result.push({ title: 'MAIN EVENTS', data: sortEvents(main) })
    if (late.length > 0) result.push({ title: 'LATE EVENTS', data: sortEvents(late) })

    return result
  }, [events])

  return (
    <div className="flex flex-col items-center px-6 md:px-16 pb-12 gap-12 min-h-screen bg-[#171A23]">

      <div className="h-2"></div>

      {sections.map((section) => (
        <div key={section.title} className="w-full flex flex-col items-center">

          <h2 className="text-xl sm:text-2xl md:text-3xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f] uppercase mb-8 text-center">
            {section.title}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12 w-full">
            {section.data.map((event) => (
              <div key={event.id}>
                <Link
                  to={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}
                  state={{ eventData: event }}
                  className="block group h-full"
                >
                  {/* Wrapper */}
                  <div className="bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-0.5 rounded-lg hover:translate-y-[-8px] transition-all duration-500 shadow-lg h-full">

                    {/* Card: Balanced Padding (p-5) */}
                    <Card className="bg-[#1A1E28] border-none text-white rounded-lg w-full h-full shadow-lg flex flex-col justify-center p-5">

                      <div className="flex items-center w-full">
                        {/* Image: Balanced Size (3.25rem) */}
                        <div
                          className="bg-white rounded-full overflow-hidden flex-shrink-0"
                          style={{ width: '3.25rem', height: '3.25rem' }}
                        >
                          <img
                            src={event.imgSrc}
                            alt={event.title}
                            className="w-full h-full object-cover p-0.5"
                          />
                        </div>

                        {/* Text: Readable but not huge */}
                        <h2 className="ml-4 text-lg sm:text-xl font-bold tracking-wide bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent truncate flex-grow">
                          {event.title}
                        </h2>

                        {/* Arrow */}
                        <div className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#12dc9f"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                        </div>
                      </div>

                    </Card>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}

      {sections.length === 0 && (
        <div className="text-gray-400 mt-20">No events found.</div>
      )}
    </div>
  )
}

EventPage.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
      day: PropTypes.string,
      category: PropTypes.string,
    })
  ).isRequired,
}