import React, { useEffect, useMemo } from 'react'
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

const ImagePlaceholder = ({ imgSrc, alt }) => {
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

export default function EventList({ events }) {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [events])

  const sortedEvents = useMemo(() => {
    return [...events].sort((a, b) => {
      const dayA = parseInt(a.day, 10)
      const dayB = parseInt(b.day, 10)

      const isANumber = !isNaN(dayA)
      const isBNumber = !isNaN(dayB)

      // If both are numbers: sort ascending 
      if (isANumber && isBNumber) {
        return dayA - dayB
      }

      // If A is not a number (TBD), move it to the end
      if (!isANumber && isBNumber) return 1

      // If B is not a number (TBD), move it to the end
      if (isANumber && !isBNumber) return -1
      return 0
    })
  }, [events])

  return (
    <div className="relative flex flex-col p-6 py-12 bg-[#171A23] min-h-screen overflow-hidden">
      <div className="w-full max-w-6xl mx-auto relative">

        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#369fff] via-[#12dc9f] to-[#171A23] opacity-30"></div>

        <div className="flex flex-col gap-16">
          {sortedEvents.map((event) => (
            <div key={event.id} className="relative pl-16 md:pl-28 group">

              <div className="absolute left-4 md:left-8 top-0 transform -translate-x-1/2 flex flex-col items-center">
                <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#171A23] border-[2px] border-[#369FFF] group-hover:border-[#12dc9f] transition-colors duration-500 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(54,159,255,0.3)] z-10">
                  <span className="text-white font-bold text-lg md:text-xl leading-none">
                    {event.day || '00'}
                  </span>
                </div>
              </div>

              <div className="absolute left-8 md:left-14 top-6 w-8 md:w-14 h-[1px] bg-gradient-to-r from-[#369FFF] to-transparent opacity-50"></div>

              <div className="flex flex-col lg:flex-row gap-8 items-start">

                <div className="w-full lg:w-3/5 flex flex-col justify-start pt-1">
                  <Card className="bg-transparent border-none shadow-none p-0">
                    <CardHeader className="p-0 pb-3">
                      <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-wide bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent group-hover:translate-x-2 transition-transform duration-300">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <CardDescription className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed text-pretty">
                        {event.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="p-0 pt-6">
                      <Link
                        to={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}
                        state={{ eventData: event }}
                        className="inline-block"
                      >
                        <button className="relative px-6 py-2 overflow-hidden font-medium text-[#12dc9f] border border-[#12dc9f] rounded-lg shadow-inner group hover:text-black hover:bg-[#12dc9f] transition-all duration-300 ease-out">
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#12dc9f] to-[#369FFF] opacity-0 group-hover:opacity-60 transition-opacity duration-300"></span>
                          <span className="relative uppercase tracking-widest text-sm">Interested</span>
                        </button>
                      </Link>
                    </CardFooter>
                  </Card>
                </div>

                <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
                  <ImagePlaceholder imgSrc={event.imgSrc} alt={event.title} />
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgSrc: PropTypes.string.isRequired,
      day: PropTypes.string,
    })
  ).isRequired,
}