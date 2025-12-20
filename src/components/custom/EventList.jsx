import React, { useEffect, useMemo, useState } from 'react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ImagePlaceholder = ({ imgSrc, alt }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="bg-[#1A1E28] w-full max-w-sm aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden relative shadow-lg border border-white/5 group-hover:scale-[1.02] transition-transform duration-500">
        <img src={imgSrc} alt={alt} className="w-full h-full object-contain absolute inset-0 p-2" />
      </div>
    </div>
  )
}

ImagePlaceholder.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

const ChevronIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

ChevronIcon.propTypes = {
  isOpen: PropTypes.bool,
}

const getMonthName = (dateStr) => {
  if (!dateStr || dateStr === 'TBD') return ''
  try {
    const date = new Date(dateStr)
    if (isNaN(date.getTime())) return ''
    return date.toLocaleString('default', { month: 'short' }).toUpperCase()
  } catch (e) {
    return ''
  }
}

const EventRow = ({ event }) => {
  const [isExpanded, setIsExpanded] = useState(!event.isCompleted)

  const getStatusConfig = () => {
    // 1. Event Completed (Gray)
    if (event.isCompleted) {
      return {
        showBadge: true,
        theme: 'gray',
        color: '#94a3b8',
        bg: 'bg-slate-500',
        text: 'text-slate-400',
        label: 'Event Completed',
        pulse: false,
        gradientTitle: 'text-slate-500',
        borderColor: '#334155',
      }
    }

    // 2. Event Running (Green, Pulsing)
    if (event.isRunning) {
      return {
        showBadge: true,
        theme: 'green',
        color: '#12dc9f',
        bg: 'bg-[#12dc9f]',
        text: 'text-[#12dc9f]',
        label: 'Event Running',
        pulse: true,
        gradientTitle: 'bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent',
        borderColor: '#12dc9f',
      }
    }

    // 3. Registration Closed (Red) - 
    if (event.isRegistrationClosed) {
      return {
        showBadge: true,
        theme: 'red',
        color: '#ef4444', // Tailwind red-500
        bg: 'bg-red-500',
        text: 'text-red-500',
        label: 'Registration Closed',
        pulse: false,
        gradientTitle:
          'bg-gradient-to-r from-[#369FFF] to-[#60a5fa] bg-clip-text text-transparent',
        borderColor: '#ef4444',
      }
    }

    // 4. Closing Soon (Orange, Pulsing)
    if (event.isClosingSoon) {
      return {
        showBadge: true,
        theme: 'orange',
        color: '#f59e0b',
        bg: 'bg-amber-500',
        text: 'text-amber-500',
        label: 'Closing Soon',
        pulse: true,
        gradientTitle: 'bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent',
        borderColor: '#f59e0b',
      }
    }

    // 5. Registration Open (Green, Pulsing)
    if (event.isApplicationOpen) {
      return {
        showBadge: true,
        theme: 'green',
        color: '#12dc9f',
        bg: 'bg-[#12dc9f]',
        text: 'text-[#12dc9f]',
        label: 'Registration Open',
        pulse: true,
        gradientTitle: 'bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent',
        borderColor: '#12dc9f',
      }
    }

    // 6. Default (Blue)
    return {
      showBadge: false,
      theme: 'blue',
      color: '#369FFF',
      label: '',
      pulse: false,
      gradientTitle: 'bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent',
      borderColor: '#369FFF',
    }
  }

  const config = getStatusConfig()
  const monthName = getMonthName(event.fullDate)

  const toggleExpand = () => {
    if (event.isCompleted) {
      setIsExpanded(!isExpanded)
    }
  }

  return (
    <div className="relative pl-16 md:pl-28 group">
      {/* Date Circle Node */}
      <div className="absolute left-4 md:left-8 top-0 transform -translate-x-1/2 flex flex-col items-center">
        <div
          className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#171A23] border-[3px] transition-colors duration-500 flex flex-col items-center justify-center z-10 
          ${event.isCompleted ? 'border-slate-700 shadow-none' : 'shadow-[0_0_15px_rgba(54,159,255,0.3)]'}`}
          style={{ borderColor: event.isCompleted ? undefined : undefined }}
        >
          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 rounded-full border-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
            style={{
              borderColor: event.isCompleted ? '#334155' : config.borderColor,
            }}
          ></div>

          {/* Base Border */}
          <div
            className={`absolute inset-0 rounded-full border-[3px] ${event.isCompleted ? 'border-slate-700' : 'border-[#369FFF]'} opacity-100 group-hover:opacity-0 transition-opacity duration-300`}
          ></div>

          {/* Date Content */}
          <div className="z-10 flex flex-col items-center justify-center leading-none">
            {monthName && (
              <span
                className={`text-[9px] md:text-[10px] font-bold uppercase tracking-wider mb-[1px] ${event.isCompleted ? 'text-slate-500' : 'text-gray-300'
                  }`}
              >
                {monthName}
              </span>
            )}
            <span
              className={`font-bold text-lg md:text-xl transition-colors duration-300 ${event.isCompleted ? 'text-slate-500' : 'text-white'
                }`}
            >
              {event.day || '00'}
            </span>
          </div>
        </div>
      </div>

      {/* Connector Line */}
      <div
        className="absolute left-8 md:left-14 top-6 w-8 md:w-14 h-[1px] opacity-50 transition-colors duration-300"
        style={{
          background: `linear-gradient(to right, ${event.isCompleted ? '#475569' : '#369FFF'
            }, transparent)`,
        }}
      ></div>

      <div className="flex flex-col gap-8 items-start">
        <div className="w-full flex flex-col justify-start pt-1">
          <Card className="bg-transparent border-none shadow-none p-0 w-full">
            <CardHeader
              className={`p-0 pb-3 ${event.isCompleted ? 'cursor-pointer' : ''}`}
              onClick={toggleExpand}
            >
              {/* Badge Section */}
              {(config.showBadge || event.isCompleted) && (
                <div className="mb-3 flex justify-between items-center pr-4">
                  <div className="flex justify-start">
                    {config.showBadge && (
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest border transition-colors duration-300
                        ${config.text} border-current bg-opacity-10`}
                        style={{
                          backgroundColor: `${config.color}1A`,
                          borderColor: `${config.color}4D`,
                          boxShadow: config.pulse ? `0 0 10px ${config.color}26` : 'none',
                        }}
                      >
                        <span className="relative flex h-2 w-2">
                          {config.pulse && (
                            <span
                              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                              style={{ backgroundColor: config.color }}
                            ></span>
                          )}
                          <span
                            className="relative inline-flex rounded-full h-2 w-2"
                            style={{ backgroundColor: config.color }}
                          ></span>
                        </span>
                        {config.label}
                      </span>
                    )}
                  </div>

                  {event.isCompleted && (
                    <div className="text-gray-400 hover:text-white transition-colors">
                      <ChevronIcon isOpen={isExpanded} />
                    </div>
                  )}
                </div>
              )}

              <CardTitle
                className={`text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-wide transition-all duration-300 ${config.gradientTitle
                  } ${!event.isCompleted && 'group-hover:translate-x-2'}`}
              >
                {event.title}
              </CardTitle>
            </CardHeader>

            <div
              className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
              <div className="overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-8 items-start pt-2">
                  <div className="w-full lg:w-3/5">
                    <CardContent className="p-0">
                      <CardDescription className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed text-pretty">
                        {event.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-0 pt-6">
                      {event.isCompleted ? (
                        <button
                          disabled
                          className="px-6 py-2 font-medium text-slate-500 border border-slate-700 rounded-lg cursor-not-allowed"
                        >
                          <span className="uppercase tracking-widest text-sm">Closed</span>
                        </button>
                      ) : (
                        <Link
                          to={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}
                          state={{ eventData: event }}
                          className="inline-block"
                        >
                          {/* BUTTON LOGIC */}
                          {event.isApplicationOpen ? (
                            <a href={event.formLink} target="_blank" rel="noopener noreferrer">
                              <button
                                className={`relative px-6 py-2 overflow-hidden font-medium border rounded-lg shadow-inner group/btn hover:text-black transition-all duration-300 ease-out
                                  ${config.text}`}
                                style={{
                                  borderColor: config.color,
                                  color: config.color,
                                }}
                              >
                                <span
                                  className="absolute inset-0 w-full h-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                                  style={{
                                    background: `linear-gradient(to right, ${config.color}, #369FFF)`,
                                  }}
                                ></span>
                                <span className="relative uppercase tracking-widest text-sm z-10 group-hover/btn:text-black">
                                  Register
                                </span>
                              </button>
                            </a>
                          ) : event.isRegistrationClosed ? (
                            <button
                              className={`relative px-6 py-2 overflow-hidden font-medium border rounded-lg shadow-inner group/btn hover:text-black transition-all duration-300 ease-out
                                  ${config.text}`}
                              style={{
                                borderColor: config.color,
                                color: config.color,
                              }}
                            >
                              <span
                                className="absolute inset-0 w-full h-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                                style={{
                                  background: `linear-gradient(to right, ${config.color}, #369FFF)`,
                                }}
                              ></span>
                              <span className="relative uppercase tracking-widest text-sm z-10 group-hover/btn:text-black">
                                See More
                              </span>
                            </button>
                          ) : (
                            // View Details (e.g., TBD or No Form Link)
                            <button
                              className={`relative px-6 py-2 overflow-hidden font-medium border rounded-lg shadow-inner group/btn hover:text-black transition-all duration-300 ease-out
                              ${config.text}`}
                              style={{
                                borderColor: config.color,
                                color: config.color,
                              }}
                            >
                              <span
                                className="absolute inset-0 w-full h-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
                                style={{
                                  background: `linear-gradient(to right, ${config.color}, #369FFF)`,
                                }}
                              ></span>
                              <span className="relative uppercase tracking-widest text-sm z-10 group-hover/btn:text-black">
                                View Details
                              </span>
                            </button>
                          )}
                        </Link>
                      )}
                    </CardFooter>
                  </div>
                  <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                    <ImagePlaceholder imgSrc={event.imgSrc} alt={event.title} />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

EventRow.propTypes = {
  event: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    imgSrc: PropTypes.string.isRequired,
    day: PropTypes.string,
    fullDate: PropTypes.string,
    isApplicationOpen: PropTypes.bool,
    isClosingSoon: PropTypes.bool,
    isRegistrationClosed: PropTypes.bool,
    isCompleted: PropTypes.bool,
    isRunning: PropTypes.bool,
    formLink: PropTypes.string,
  }).isRequired,
}

export default function EventList({ events }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [events])

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      const dateA = a.fullDate && a.fullDate !== 'TBD' ? new Date(a.fullDate) : new Date(8640000000000000);
      const dateB = b.fullDate && b.fullDate !== 'TBD' ? new Date(b.fullDate) : new Date(8640000000000000);
      return dateA - dateB;
    })
  }, [events])

  return (
    <div className="relative flex flex-col p-6 py-12 bg-[#171A23] min-h-screen overflow-hidden">
      <div className="w-full max-w-6xl mx-auto relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#369fff] via-[#12dc9f] to-[#171A23] opacity-70"></div>
        <div className="flex flex-col gap-16">
          {sortedEvents.map((event) => (
            <EventRow key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  )
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
}

