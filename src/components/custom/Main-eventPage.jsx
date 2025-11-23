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
    <div
      // id="main"
      className="flex flex-col overflow-hidden px-16 pt-10 sm:p-6 md:p-8 gap-6 items-center justify-center min-h-screen bg-[#171A23]"
    >
      <h1 className="text-xl sm:text-2xl md:text-3xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
        MAIN-EVENTS
      </h1>
     <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 sm:gap-10 w-[clamp(22rem,72vw,72rem)] mt-3 sm:mt-4 md:mt-8">
     {events.map((event) => (
          <Link
            key={event.id}
            to={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}
            state={{ eventData: event }}
            className="block"
          >
            <div className="bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-0.5 rounded-2xl hover:translate-y-[-8px] transition-all duration-500 shadow-[0_0_4px_1px_rgba(20,197,143,0.5)]">
              <Card className="bg-[#1A1E28] text-white rounded-2xl h-[26rem] md:h-[30rem] lg:h-[28rem] xl:h-[29rem] overflow-hidden flex flex-col">
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
                <CardFooter className="flex flex-col items-center p-2 sm:p-3 mt-3 md:mt-2 flex-grow">
                  <CardTitle className="text-lg sm:text-xl font-bold leading-tight tracking-wide text-center bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="px-2 pt-3 md:pt-4 pb-2 text-sm text-center overflow-y-auto max-h-[200px] sm:max-h-[250px]">
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