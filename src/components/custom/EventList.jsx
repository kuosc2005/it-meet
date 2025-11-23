import { useEffect } from 'react'
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
    <div className="relative w-full h-full">
      <div className="bg-gray-200 w-full aspect-[16/9] md:h-[12rem] lg:h-[16rem] rounded-br-[80px] overflow-hidden relative">
        <img src={imgSrc} alt={alt} className="w-full h-full object-contain absolute inset-0" />
      </div>
    </div>
  )
}

ImagePlaceholder.propTypes = {
  imgSrc: PropTypes.string.isRequired, // Require imgSrc to be a string
  alt: PropTypes.string.isRequired, // Require alt to be a string
}

export default function EventList({ events }) {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [events])

  return (
    <div
      className="flex flex-col p-6 gap-3 md:gap-4 lg:gap-12 bg-[#171A23] min-h-screen"
    >
      {events.map(
        (event, index) => (
          console.log('Event:', event),
          (
            <Card key={event.id} className="bg-[#171A23] text-white border-none flex p-4">
              <div className={`grid lg:grid-cols-2 gap-2 lg:gap-4 w-full`}>
                <div
                  className={`${
                    index % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-2'
                  } flex flex-col justify-between`}
                >
                  <div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight tracking-wide bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent mb-1 sm:mb-2">
                        {event.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 text-sm sm:text-base lg:text-lg text-pretty">
                        {event.description}
                      </CardDescription>
                    </CardContent>
                  </div>
                  <CardFooter className="flex gap-2 pt-4">
                    <Link
                      to={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}
                      state={{ eventData: event }}
                      className="p-[1px] rounded border-none bg-gradient-to-r from-[#369FFF] to-[#14C58F]"
                    >
                      <button className="bg-[#171A23] text-[#00ffbb] px-5 py-1 rounded border border-transparent hover:bg-[#00ffbb] hover:text-black transition-colors">
                        MORE
                      </button>
                    </Link>
                  </CardFooter>
                </div>
                <div
                  className={`w-full lg:w-auto p-4 lg:flex-grow ${
                    index % 2 === 0
                      ? 'lg:ml-auto order-2 lg:order-last'
                      : 'lg:mr-auto order-2 lg:order-first'
                  }`}
                >
                  <ImagePlaceholder imgSrc={event.imgSrc} alt={event.title} />
                </div>
              </div>
            </Card>
          )
        )
      )}
    </div>
  )
}

EventList.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // Validate id as required number
      title: PropTypes.string.isRequired, // Validate title as required string
      description: PropTypes.string.isRequired, // Validate description as required string
      imgSrc: PropTypes.string.isRequired, // Validate imgSrc as required string
    })
  ).isRequired, // Validate events as a required array of objects
}
