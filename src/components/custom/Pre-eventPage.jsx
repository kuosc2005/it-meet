import { Card } from '@/components/ui/card'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function PreEventPage({ preEvents, mainEvents }) {

  const combinedEvents = [
    ...preEvents.map(e => ({ ...e, _key: `pre-${e.id}` })),
    ...mainEvents.map(e => ({ ...e, _key: `main-${e.id}` }))
  ]

  return (
    <div className="flex flex-col items-center px-16 pb-12 gap-2 md:gap-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
        EVENTS
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12 w-full mt-5 md:mt-8">
        {combinedEvents.map((event) => (
          <div key={event._key}>
            <Link
              to={`/events/${event.title.toLowerCase().replace(/ /g, '-')}`}
              state={{ eventData: event }}
              className="block"
            >
              <div className="bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-0.5 rounded-lg hover:translate-y-[-8px] transition-all duration-500 shadow-lg">
                <Card className="bg-[#1A1E28] text-white rounded-lg w-full max-h-[14rem] shadow-lg flex flex-col items-center p-4">

                  <div className="flex items-center justify-start w-full">
                    <div
                      className="bg-white rounded-full overflow-hidden flex-shrink-0"
                      style={{ width: '3rem', height: '3rem' }}
                    >
                      <img
                        src={event.imgSrc}
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h2 className="ml-4 text-sm sm:text-base md:text-lg font-bold tracking-wide bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent truncate">
                      {event.title}
                    </h2>
                  </div>

                </Card>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

PreEventPage.propTypes = {
  preEvents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    })
  ).isRequired,

  mainEvents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      imgSrc: PropTypes.string,
      day: PropTypes.string,
    })
  ).isRequired,
}
