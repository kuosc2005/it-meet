import React from 'react'
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

export default function PreEventPage() {
  const preEvents = [
    {
      id: 1,
      imgSrc: '',
      title: 'KU HACKFEST',
    },
    {
      id: 2,
      imgSrc: '',
      title: 'WE SHIELD CYBER',
    },
    {
      id: 3,
      imgSrc: '',
      title: 'AR TREASURE HUNT',
    },
    {
      id: 4,
      imgSrc: '',
      title: 'LINE FOLLOWING ROBOT',
    },
  ]

  return (
    <div className="flex flex-col overflow-hidden p-8 py-16 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]">
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
          PRE-EVENTS
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12 w-full mt-8">
          {preEvents.map((preEvent) => (
            <div
              key={preEvent.id}
              className="bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-0.5 rounded-lg shadow-lg w-full sm:min-w-[16rem] md:min-w-[18rem] lg:min-w-[1rem] xl:min-w-[18rem] mx-auto"
            >
              <Card className="bg-[#1A1E28] text-white rounded-lg w-full h-full max-h-[12rem] lg:max-h-[14rem] shadow-lg flex flex-col items-center p-4">
                <div className="flex items-center justify-center w-full">
                  <div
                    className="bg-white rounded-full overflow-hidden flex-shrink-0"
                    style={{ width: '3rem', height: '3rem' }}
                  >
                    <img
                      src={preEvent.imgSrc}
                      alt={preEvent.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="ml-4 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-bold tracking-wide bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent truncate">
                    {preEvent.title}
                  </h2>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
