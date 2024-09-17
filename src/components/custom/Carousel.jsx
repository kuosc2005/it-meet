import React from 'react'
import { FaCalendarDays, FaSackDollar, FaSchoolFlag, FaGraduationCap } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa'
import { BiSolidNetworkChart, BiSolidSchool } from 'react-icons/bi'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const events = [
  {
    id: 1,
    icon: <FaCalendarDays className="w-10 h-10 text-[#369fff]" />,
    participation: '25+',
    title: 'Events',
  },
  {
    id: 2,
    icon: <FaUsers className="w-10 h-10 text-[#369fff]" />,
    participation: '10k+',
    title: 'Participants',
  },
  {
    id: 3,
    icon: <FaSackDollar className="w-10 h-10 text-[#369fff]" />,
    participation: 'Rs. 500k',
    title: 'Prize Pool',
  },
  {
    id: 4,
    icon: <BiSolidSchool className="w-10 h-10 text-[#369fff]" />,
    participation: '7+',
    title: 'School Participations',
  },
  {
    id: 5,
    icon: <BiSolidNetworkChart className="w-10 h-10 text-[#369fff]" />,
    participation: '5+',
    title: 'IT College Participations',
  },
  {
    id: 6,
    icon: <FaSchoolFlag className="w-10 h-10 text-[#369fff]" />,
    participation: '9+',
    title: '+2 College Participations',
  },
  {
    id: 7,
    icon: <FaGraduationCap className="w-10 h-10 text-[#369fff]" />,
    participation: '3+',
    title: 'Univeristy Participations',
  },
]

export default function App() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))
  return (
    <div>
      <Carousel 
        plugins={[plugin.current]} 
        className="w-full max-w-sm sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[80rem]"
        opts={{ align: "start", loop: true }}
      >
        <CarouselContent className="-ml-1">
          {events.map((event) => (
            <CarouselItem key={event.id} className="pl-1 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
              <div className="p-5">
                <Card className="flex flex-col items-center justify-center w-full h-[210px] shadow-lg border border-green-500 bg-slate-100 hover:scale-105 duration-500 transition-all rounded-3xl">
                  <CardContent className="flex flex-col justify-center items-center space-y-3 p-4">
                    <span>{event.icon}</span>
                    <div className="text-[#14C58F] font-bold text-4xl text-wrap text-center">
                        {event.participation}
                    </div>
                    <div className="text-gray-500 font-semibold text-2xl text-wrap text-center">
                        {event.title}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
