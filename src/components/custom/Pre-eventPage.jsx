
import { Card } from '@/components/ui/card'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function PreEventPage({ events }) {
  PreEventPage.propTypes = {
    events: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        // Add other properties of preEvent if needed
      })
    ).isRequired,
  };
  return (
    <div 
      // id="pre-events" 
      className="flex flex-col items-center px-16 gap-2 md:gap-4">
      <h1 className="text-xl sm:text-2xl md:text-3xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f] mb-4">
        PRE-EVENTS
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12 w-full mt-8">
        {events.map((preEvent) => (
          <div
          key={preEvent.id}>
          {/* <Link
            key={preEvent.id}
            to={`/events/${preEvent.title.toLowerCase().replace(/ /g, '-')}`}
            state={{ eventData: preEvent }}
            className="block "
          > */}
            <div className="bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-0.5 rounded-lg hover:translate-y-[-8px] transition-all duration-500 shadow-lg w-full sm:min-w-[16rem] md:min-w-[18rem] lg:min-w-[1rem] xl:min-w-[18rem] mx-auto">
              <Card className="bg-[#1A1E28] text-white rounded-lg w-full h-full max-h-[12rem] lg:max-h-[14rem] shadow-lg flex flex-col items-center p-4">
                <div className="flex items-center justify-center w-full">
                  {/* <div
                    className="bg-white rounded-full overflow-hidden flex-shrink-0"
                    style={{ width: '3rem', height: '3rem' }}
                  >
                    <img
                      // src={preEvent.imgSrc}
                      alt={preEvent.title}
                      className="w-full h-full object-cover"
                    />
                  </div> */}
                  <h2 className="ml-4 text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-bold tracking-wide bg-gradient-to-r from-[#369FFF] to-[#14C58F] bg-clip-text text-transparent truncate">
                    {preEvent.title}
                  </h2>
                </div>
              </Card>
            </div>
          {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  )
}

