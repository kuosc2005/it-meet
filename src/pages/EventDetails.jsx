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
import { ArrowLeft, ExternalLink, Download } from 'lucide-react'
import ITMeetLogo from '@/assets/images/itmeetlogo.svg'

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
      <div className="min-h-screen bg-[#171A23] flex flex-col items-center justify-center text-white gap-4">
        <h2 className="text-2xl font-bold text-gray-400">Event not found</h2>
        <Link to="/events" className="text-[#369FFF] hover:underline">Return to Events</Link>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#171A23] text-white p-6 md:p-12">

      <div className="bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-0.5 rounded-xl shadow-2xl w-full max-w-6xl">

        <Card className="bg-[#1A1E28] border-none rounded-[10px] shadow-none p-6 md:p-10 w-full flex flex-col items-center relative min-h-[60vh]">

          <CardHeader className="flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-between w-full border-b border-gray-800 pb-8">
            <img src={ITMeetLogo} alt="IT Meet logo" className="w-auto h-8 sm:h-10 opacity-80" />

            <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f] text-center md:text-right">
              {event.title}
            </CardTitle>
          </CardHeader>

          <CardContent className="w-full mt-8 md:mt-12">
            <div className="grid grid-cols-1 lg:grid-cols-[20rem_auto] gap-10 lg:gap-16 items-start">

              <div className="flex justify-center lg:justify-start">
                <div className="bg-white rounded-2xl p-6 shadow-lg w-full max-w-sm aspect-square flex items-center justify-center">
                  <img
                    src={event.imgSrc}
                    alt={event.title}
                    className="object-contain w-full h-full"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap gap-4 mb-2">
                  <span className="bg-[#1e2433] text-[#369FFF] px-4 py-1.5 rounded-full text-sm font-semibold border border-[#369FFF]/30">
                    Day: {event.day || 'TBD'}
                  </span>
                  <span className="bg-[#1e2433] text-[#12dc9f] px-4 py-1.5 rounded-full text-sm font-semibold border border-[#12dc9f]/30 uppercase">
                    {event.category.replace('_', ' ')}
                  </span>
                </div>

                <CardDescription className="text-base sm:text-lg text-gray-300 leading-relaxed text-justify md:text-left">
                  {event.details || event.description}
                </CardDescription>
              </div>

            </div>
          </CardContent>

          <CardFooter className="flex flex-col sm:flex-row items-center justify-center w-full gap-6 mt-12 pt-8 border-t border-gray-800">

            <Link
              to="/events"
              className="w-full sm:w-auto min-w-[160px] flex items-center justify-center gap-2 bg-[#1e2433] border border-gray-700 text-gray-300 font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back
            </Link>

            {event.isApplicationOpen ? (
              <a
                href={event.formLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-w-[180px] flex items-center justify-center gap-2 bg-gradient-to-r from-[#369FFF] to-[#14C58F] text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(18,220,159,0.4)] hover:-translate-y-1 transition-all duration-300"
              >
                Apply Now
                <ExternalLink size={20} />
              </a>
            ) : (
              <button
                disabled
                className="w-full sm:w-auto min-w-[180px] flex items-center justify-center gap-2 bg-gray-700 text-gray-400 font-bold py-3 px-6 rounded-lg cursor-not-allowed"
              >
                Applications Closed
              </button>
            )}

            {event.coc && (
              <a
                href={event.coc}
                download="Code_of_Conduct.pdf"
                className="w-full sm:w-auto flex items-center justify-center gap-2 text-[#369FFF] hover:text-[#12dc9f] hover:underline mt-4 sm:mt-0"
              >
                <Download size={18} />
                Code of Conduct
              </a>
            )}

          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

export default EventDetails