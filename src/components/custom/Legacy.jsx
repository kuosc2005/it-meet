import { FaCalendarDays, FaSackDollar, FaSchoolFlag, FaGraduationCap } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa'
import { BiSolidNetworkChart, BiSolidSchool } from 'react-icons/bi'
import { Card, CardContent } from '@/components/ui/card'
// import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
// import Autoplay from 'embla-carousel-autoplay'

const keyData = [
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
]

const institutionsData = [
  {
    id: 1,
    icon: <BiSolidSchool className="w-10 h-10 text-[#369fff]" />,
    participation: '7+',
    title: 'School Participations',
  },
  {
    id: 2,
    icon: <BiSolidNetworkChart className="w-10 h-10 text-[#369fff]" />,
    participation: '5+',
    title: 'IT College Participations',
  },
  {
    id: 3,
    icon: <FaSchoolFlag className="w-10 h-10 text-[#369fff]" />,
    participation: '9+',
    title: '+2 College Participations',
  },
  {
    id: 4,
    icon: <FaGraduationCap className="w-10 h-10 text-[#369fff]" />,
    participation: '3+',
    title: 'Univeristy Participations',
  },
]

//Component for Institutions
const InstitutionChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + parseInt(item.participation), 0)

  return (
    <div className="bg-gradient-to-br from-[#369fff]/10 to-[#12dc9f]/10 rounded-3xl p-8 h-full flex flex-col justify-center hover:scale-105 hover:border duration-500 transition-all">
      <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#369fff] to-[#12dc9f]">
        Institution Network
      </h3>
      <div className="space-y-5">
        {data.map((institution) => (
          <div key={institution.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span>{institution.icon}</span>
              <span className="text-gray-300">{institution.title}</span>
            </div>
            <span className="text-[#14C58F] font-bold text-xl">{institution.participation}</span>
          </div>
        ))}
        <div className="border-t border-gray-600 pt-4 mt-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-300 font-semibold">Total Network:</span>
            <span className="text-[#12dc9f] font-bold text-2xl">{total}+ Institutions</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 space-y-4">
          {keyData.map((item) => (
            <div key={item.id} className="p-3">
              <div className="bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-[1px] rounded-3xl">
                <Card className="flex flex-col items-center justify-center w-full h-[200px] bg-[#171A23] hover:scale-105 hover:border duration-500 transition-all rounded-3xl">
                  <CardContent className="flex flex-col justify-center items-center space-y-4 p-6">
                    <span className="scale-125">{item.icon}</span>
                    <div className="text-[#14C58F] font-bold text-3xl md:text-4xl text-wrap text-center">
                      {item.participation}
                    </div>
                    <div className="text-gray-400 font-semibold text-lg md:text-xl text-wrap text-center">
                      {item.title}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-6">
          <InstitutionChart data={institutionsData} />
        </div>
      </div>
    </div>
  )
}

// export default function App() {
//   const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: false }))
//   return (
//     <div>
//       <Carousel
//         plugins={[plugin.current]}
//         className="w-full max-w-sm sm:max-w-[35rem] md:max-w-[45rem] lg:max-w-[60rem] xl:max-w-[80rem]"
//         opts={{ align: "start", loop: true }}
//       >
//         <CarouselContent className="-ml-1">
//           {events.map((event) => (
//             <CarouselItem key={event.id} className="pl-1 sm:basis-1/2 md:basis-1/3 xl:basis-1/4">
//               <div className="p-5">
//                 <div className='bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-[1px] rounded-3xl'>
//                 <Card className="flex flex-col items-center justify-center w-full h-[210px] bg-[#171A23] hover:scale-105 hover:border duration-500 transition-all rounded-3xl">
//                   <CardContent className="flex flex-col justify-center items-center space-y-3 p-4">
//                     <span>{event.icon}</span>
//                     <div className="text-[#14C58F] font-bold text-4xl text-wrap text-center">
//                         {event.participation}
//                     </div>
//                     <div className="text-gray-500 font-semibold text-2xl text-wrap text-center">
//                         {event.title}
//                     </div>
//                   </CardContent>
//                 </Card>
//                 </div>
//               </div>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//       </Carousel>
//     </div>
//   )
// }
