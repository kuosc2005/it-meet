import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useEvents } from '@/components/custom/EventContext'
import { ImagePlaceholder } from './EventList'
import { Calendar, ArrowRight } from 'lucide-react'

export default function UpcomingEventsSection() {
  const { events } = useEvents()

  const upcomingEvents = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    return events
      .filter((event) => {
        if (!event.fullDate || event.fullDate === 'TBD') return false

        const eventDate = new Date(event.fullDate)
        eventDate.setHours(0, 0, 0, 0)

        return !event.isCompleted && eventDate > today
      })
      .map((event) => {
        const eventDate = new Date(event.fullDate)
        eventDate.setHours(0, 0, 0, 0)
        return { ...event, eventDate }
      })
      .sort((a, b) => a.eventDate - b.eventDate)
      .slice(0, 3) // Take only next 3-4 events
  }, [events])

  // categories from the upcoming events
  const eventCategories = useMemo(() => {
    return upcomingEvents.map((event, index) => ({
      id: event.id.toString(),
      label: event.title,
      event: event,
    }))
  }, [upcomingEvents])

  const [selectedCategory, setSelectedCategory] = useState(
    eventCategories.length > 0 ? eventCategories[0].id : null,
  )

  const currentEvent = useMemo(() => {
    return eventCategories.find((cat) => cat.id === selectedCategory)?.event || null
  }, [eventCategories, selectedCategory])

  // to if there are any upcoming events at all
  const hasAnyUpcomingEvents = eventCategories.length > 0
  if (!hasAnyUpcomingEvents) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-b from-[#0A0E1A] via-[#171A23] to-[#0A0E1A] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-3 mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#369fff] to-[#12dc9f]">
              Upcoming Events
            </h1>
            <div className="w-48 rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5"></div>
          </div>
          <div className="text-center py-20 text-gray-400 rounded-2xl border-2 border-white/10 bg-[#1E222D]/30">
            <p className="text-xl mb-2">All events have concluded</p>
            <p className="text-sm text-gray-500">
              Thank you for your participation! Check back for future events.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className=" min-h-[50vh] w-full bg-[#171A23] py-12">
      <div className="max-w-6xl mx-auto px-8 min-[450px]:px-16 sm:px-20 lg:px-28">
        {/* HEADER */}
        <div className="flex flex-col items-center gap-3 mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#369fff] to-[#12dc9f] p-1">
            Upcoming Events
          </h1>
          <div className="w-48 rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5"></div>
        </div>

        <div className="p-5 py-2 group w-full flex justify-end">
          <Link
            to={`/events`}
            className="display max-[450px]:hidden flex items-center p-5 pr-0 gap-2 text-black self-end text-end"
          >
            <span className="font-medium text-xs sm:text-sm text-gray-300">More Events</span>
            <ArrowRight className="bg-[#12dc9f] group-hover:bg-[#369fff] group-hover:scale-110 p-[2px]  text-xl font-bold rounded-full" />
          </Link>
        </div>

        {/* CATEGORY TABS */}
        <div className="grid max-[450px]:grid-cols-2 grid-cols-3 gap-3 sm:gap-4">
          {eventCategories.map((category) => {
            const isActive = selectedCategory === category.id

            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  max-[500px]:px-1 p-3 sm:p-4 rounded-xl border-2 transition-all duration-300
                  flex items-center gap-1 sm:gap-3 text-left
                  ${
                    isActive
                      ? 'border-[#12dc9f] shadow-lg'
                      : 'bg-[#1E222D]/50 border-white/10 hover:border-[]/50'
                  }
                  cursor-pointer hover:scale-[1.02] overflow-scroll hide-scrollbar
                `}
              >
                <span
                  className={`text-xs sm:text-sm font-medium sm:font-semibold ${isActive ? 'text-white' : 'text-gray-300'}`}
                >
                  {category.label}
                </span>
              </button>
            )
          })}

          <Link
            to={`/events`}
            className="display min-[450px]:hidden flex items-center p-2 gap-2 text-black group"
          >
            <span className="font-medium text-xs sm:text-sm text-gray-300">More Events</span>
            <ArrowRight className="bg-[#12dc9f] p-[2px] group-hover:right-10 text-xl font-bold rounded-full" />
          </Link>
        </div>

        {/* EVENT DISPLAY */}
        {currentEvent ? (
          <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-center justify-center">
              <div className="relative py-6 sm:py-8 md:py-12 px-0">
                {/* Status Badge */}
                {currentEvent.isClosingSoon && (
                  <div className="inline-flex items-center gap-1 sm:gap-2 px-2 md:px-4 py-2 rounded-full bg-amber-500/20 border border-[#f59e0b]/50 mb-4">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-[#f59e0b] font-medium sm:font-semibold max-[450px]:text-[8px] text-xs sm:text-sm">
                      Closing Soon
                    </span>
                  </div>
                )}
                {/* Title */}
                <h2 className="text-lg md:text-xl lg:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#369fff] to-[#12dc9f]">
                  {currentEvent.title}
                </h2>

                {/* For mobile view, width less than sm */}
                <div className="w-full pb-4 sm:hidden flex items-center justify-center lg:justify-end">
                  <ImagePlaceholder imgSrc={currentEvent.imgSrc} alt={currentEvent.title} />
                </div>
                {/* Description */}
                <p className="text-gray-300 text-sm md:text-base mb-8 max-w-lg leading-relaxed  line-clamp-2">
                  {currentEvent.description}
                </p>
                {/* Event Date */}
                <div className="flex items-center gap-2 text-[#369fff] mb-8">
                  <Calendar className="w-5 h-5" />
                  <span className="text-sm sm:text-base">
                    {currentEvent.eventDate.toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    to={`/events/${currentEvent.title.toLowerCase().replace(/ /g, '-')}`}
                    rel="noopener noreferrer"
                    className="px-5 sm:px-7 py-3 rounded-lg font-semibold text-white
                      bg-gradient-to-r from-[#369fff] to-[#12dc9f]
                      transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    Interested
                  </Link>
                </div>
              </div>
              {/* For more than sm width */}
              <div className="sm:w-3/5 md:w-2/5 flex justify-center lg:justify-end">
                <ImagePlaceholder imgSrc={currentEvent.imgSrc} alt={currentEvent.title} />
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400 rounded-2xl border-2 border-white/10 bg-[#1E222D]/30">
            <p className="text-xl mb-2">No upcoming events in this category</p>
            <p className="text-sm text-gray-500">Check other categories for more events!</p>
          </div>
        )}
      </div>
    </div>
  )
}
