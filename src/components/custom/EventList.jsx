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

const ImagePlaceholder = ({ imgSrc, alt }) => (
  <div className="relative w-full h-full">
    <div className="bg-gray-200 w-full h-full lg:w-[500px] lg:h-[250px] rounded-br-[80px] overflow-hidden">
      <img src={imgSrc} alt={alt} className="w-full h-full object-cover" />
    </div>
    <div className="w-20 h-20 rounded-full border-4 border-[#171A23] absolute right-8 bottom-4 overflow-hidden">
      <img src={imgSrc} alt={alt} className="w-full h-full object-cover" />
    </div>
  </div>
)

export default function EventList({ events }) {
  return (
    <div id="upcoming" className="flex flex-col p-6 gap-6 bg-[#171A23] min-h-screen">
      {events.map((event, index) => (
        <Card key={event.id} className="bg-[#171A23] text-white border-none flex items-stretch p-4">
          <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} w-full`}>
            <div className="flex-grow w-[60%]">
              <CardHeader className="pb-2">
                <CardTitle className="text-3xl sm:text-xl font-bold leading-tight tracking-wide bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent mb-1 sm:mb-2">
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
            <div className="w-[40%] p-4">
              <ImagePlaceholder imgSrc={event.imgSrc} alt={event.title} />
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}