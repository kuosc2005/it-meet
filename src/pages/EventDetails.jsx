import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEvents } from '@/components/custom/EventContext' // Import the useEvents hook
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

import ITMeetLogo from '@/assets/images/itmeetlogo.webp'

const EventDetails = () => {
  const { eventTitle } = useParams()
  const { mainEvents, preEvents, listEvents } = useEvents() // Get events from context
  const location = useLocation()

  // Combine all events into one array (you could also keep them separate)
  const allEvents = [...listEvents, ...mainEvents, ...preEvents]

  // Find the event that matches the eventTitle in the URL
  const event = allEvents.find((e) => e.title.toLowerCase().replace(/ /g, '-') === eventTitle)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#171A23] text-white p-8">
      <Card className="bg-[#1A1E28] rounded-lg shadow-lg p-6 max-w-6xl w-full flex flex-col items-center relative">
        <CardHeader className="flex items-center justify-between w-full">
          <img src={ITMeetLogo} alt="IT Meet logo" className="w-auto h-8 sm:h-10" />

          <CardTitle className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
            {event.title}
          </CardTitle>
        </CardHeader>

        <div className="w-full mt-4">
          <div className="relative">
            <div className="float-left mr-4 mb-2 bg-white p-4 rounded-lg w-[20rem] h-[10rem] flex items-center justify-center">
              <img
                src={event.imgSrc}
                alt={event.title}
                className="object-contain max-w-full max-h-full"
              />
            </div>
            <CardDescription className="text-md sm:text-lg text-justify">
              {event.details}
            </CardDescription>
            <div className="clear-both"></div>
          </div>
        </div>

        <CardFooter className="flex flex-col items-center w-full space-y-4 mt-8">
          <div className="flex w-full justify-center space-x-4">
            <Link
              to="/events"
              className="w-full max-w-[10rem] bg-[#1e2433] border-2 border-[#369FFF] text-[#369FFF] font-bold py-2 px-4 rounded hover:shadow-lg transition duration-200 text-center"
            >
              Back to Events
            </Link>

            {event.isApplicationOpen && (
              <Link
                to="/apply"
                className="w-full max-w-[10rem] bg-gradient-to-r from-[#369FFF] to-[#14C58F] text-white font-bold py-2 px-4 rounded hover:shadow-lg transition duration-200 text-center"
              >
                Apply to Event
              </Link>
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
