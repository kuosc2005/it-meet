import React from 'react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Link } from 'react-router-dom'

export default function EventList({ events }) {
  return (
    <div className="flex flex-col p-6 gap-6 bg-[#171A23] min-h-screen">
      {events.map((event) => (
        <Card
          key={event.id}
          className="bg-[#171A23] text-white border-none flex flex-row justify-between items-center p-4"
        >
          <div className="flex-grow">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl sm:text-3xl font-bold leading-tight tracking-wide bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent mb-1 sm:mb-2">
                {event.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-sm">
                {event.description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex gap-2 pt-4">
              <button className="bg-gradient-to-r from-[#369FFF] to-[#14C58F] text-black px-5 py-1.5 rounded hover:bg-[#00cc99] transition-colors">
                APPLY
              </button>
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
          <div className="w-24 h-24 bg-gray-500 rounded-full relative overflow-hidden flex-shrink-0">
            <img src={event.imgSrc} alt={event.title} className="w-full h-full object-cover" />
          </div>
        </Card>
      ))}
    </div>
  )
}
