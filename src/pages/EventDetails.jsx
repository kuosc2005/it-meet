import React from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'

export default function EventDetails() {
  const { eventTitle } = useParams()
  const location = useLocation()
  const event = location.state?.eventData

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
      <p className="text-lg mb-6 max-w-2xl text-center">{event.description}</p>
      <button className="bg-gradient-to-r from-[#369FFF] to-[#14C58F] text-white font-bold py-2 px-4 rounded">
        Apply to Event
      </button>
      <Link to="/events" className="mt-8 text-[#369FFF] hover:underline">
        Back to Events
      </Link>
    </div>
  )
}
