import React, { useEffect } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useEvents } from '@/components/custom/EventContext'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'


const EventDetails = () => {
  const { eventTitle } = useParams()
  const { events } = useEvents()
  const location = useLocation()

  const event = events?.find((e) => e.title.toLowerCase().replace(/ /g, '-') === eventTitle)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  if (!event) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#171A23] text-white">
        Event not found
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#171A23] text-white p-8">
      <Card className="bg-[#1A1E28] rounded-lg shadow-lg p-3 md:p-8 max-w-6xl w-full flex flex-col items-center relative">
        <CardHeader className="flex space-y-5 lg:space-y-8 items-center justify-between w-full">
          <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
            {event.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="w-full mt-3 md:mt-4 lg:mt-5">
          <div className="grid grid-cols-1 lg:grid-cols-[24rem_auto] gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-0 lg:gap-x-12">
            <div className="bg-white p-2 md:p-4 rounded-lg flex items-center justify-center">
              <img
                src={event.imgSrc}
                alt={event.title}
                className="object-contain max-w-full max-h-[12rem] lg:max-h-[15rem]"
              />
            </div>
            <CardDescription className="text-sm sm:text-base text-justify text-gray-300 leading-relaxed">
              {event.details || event.description}
            </CardDescription>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center w-full space-y-4 mt-8">
          <div className="flex w-full justify-center space-x-6">
            <Link
              to="/events"
              className="w-full max-w-[12rem] bg-[#1e2433] border-2 border-[#369FFF] text-[#369FFF] font-bold py-2 px-4 rounded hover:shadow-lg transition duration-200 text-center"
            >
              Back to Events
            </Link>

            {event.isApplicationOpen ? (
              <a
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-[10rem] bg-gradient-to-r from-[#369FFF] to-[#14C58F] text-white font-bold py-2 px-4 rounded hover:shadow-lg transition duration-200 text-center"
              >
                Apply to Event
              </a>
            ) : (
              <button
                disabled
                className="w-full max-w-[10rem] bg-gray-700 text-gray-400 font-bold py-2 px-4 rounded cursor-not-allowed"
              >
                Opening soon!!
              </button>
            )}
          </div>

          {event.coc && (
            <a
              href={event.coc}
              download="Code_of_Conduct.pdf"
              className="text-[#369FFF] hover:underline"
            >
              Code of Conduct
            </a>
          )}
        </CardFooter>
      </Card>
    </div>
  )
}

export default EventDetails