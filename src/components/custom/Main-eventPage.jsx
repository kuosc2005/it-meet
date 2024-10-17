import React from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import ITMeetLogo from '@/assets/images/itmeetlogo.webp'

export default function MainEventPage({ events }) {
  return (
    <div className="flex flex-col overflow-hidden px-16 sm:p-6 md:p-8 gap-6 items-center justify-center min-h-screen bg-[#171A23]">
      <h1 className="text-xl sm:text-2xl md:text-3xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f] mb-4">
        MAIN-EVENTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full">
        {events.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}
            state={{ eventData: event }}
            className="block"
          >
            <div className="bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-0.5 rounded-2xl shadow-[0_0_4px_1px_rgba(20,197,143,0.5)]">
              <Card className="bg-[#1A1E28] text-white rounded-2xl h-full flex flex-col">
                <CardHeader className="flex items-start justify-start p-4 sm:p-6">
                  <img src={ITMeetLogo} alt="IT Meet logo" className="w-auto h-6 sm:h-8" />
                </CardHeader>
                <CardContent className="flex-none flex items-center justify-center p-1">
                  <div className="relative w-full aspect-square max-w-[160px] ">
                    <div className="absolute inset-0 bg-white rounded-full overflow-hidden">
                      <img
                        src={event.imgSrc}
                        alt={`${event.title} Image`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col items-center p-2 sm:p-3 flex-grow">
                  <CardTitle className="text-lg sm:text-xl font-bold leading-tight tracking-wide text-center bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent mb-1 sm:mb-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="px-1 pt-1 pb-2 text-xs sm:text-sm text-center overflow-y-auto max-h-[100px] sm:max-h-[120px]">
                    {event.description}
                  </CardDescription>
                </CardFooter>
              </Card>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}