import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useEvents } from '@/components/custom/EventContext' // Import the useEvents hook
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#171A23] text-white p-8">
      <h1 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
        {event.title}
      </h1>
      <img
        src={event.imgSrc}
        alt={event.title}
        className="w-64 h-64 object-cover rounded-full mb-6"
      />
      <p className="text-lg mb-6 max-w-2xl text-center">{event.details}</p>
      {/* <button className="bg-gradient-to-r from-[#369FFF] to-[#14C58F] text-white font-bold py-2 px-4 rounded">
          Apply to Event
        </button> */}
      <Link to="/events" className="mt-8 text-[#369FFF] hover:underline">
        Back to Events
      </Link>

      {event.coc && (
        <a
          href={event.coc}
          download="Code_of_Conduct.pdf"
          className="mt-8 text-[#369FFF] hover:underline"
        >
          Code of Conduct
        </a>
      )}
    </div>
  )
}
export default EventDetails
