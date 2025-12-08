import { FaCalendarDays, FaSackDollar, FaSchoolFlag, FaGraduationCap } from 'react-icons/fa6'
import { FaUsers } from 'react-icons/fa'
import { BiSolidNetworkChart, BiSolidSchool } from 'react-icons/bi'
import { Card, CardContent } from '@/components/ui/card'
// import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
// import Autoplay from 'embla-carousel-autoplay'

const keyData = [
  {
    id: 1,
    icon: <FaSackDollar className="w-6 h-6 text-[#369fff]" />,
    participation: 'Rs. 500k',
    title: 'Prize Pool',
  },

  {
    id: 2,
    icon: <FaCalendarDays className="w-6 h-6 text-[#369fff]" />,
    participation: '25+',
    title: 'Events',
  },
  {
    id: 3,
    icon: <FaUsers className="w-6 h-6 text-[#369fff]" />,
    participation: '10k+',
    title: 'Participants',
  },
]

const institutionsData = [
  {
    id: 1,
    icon: <BiSolidSchool className="w-6 h-6 text-[#369fff]" />,
    participation: '7+',
    title: 'School Participations',
  },
  {
    id: 2,
    icon: <BiSolidNetworkChart className="w-6 h-6 text-[#369fff]" />,
    participation: '5+',
    title: 'IT College Participations',
  },
  {
    id: 3,
    icon: <FaSchoolFlag className="w-6 h-6 text-[#369fff]" />,
    participation: '9+',
    title: '+2 College Participations',
  },
  {
    id: 4,
    icon: <FaGraduationCap className="w-6 h-6 text-[#369fff]" />,
    participation: '3+',
    title: 'Univeristy Participations',
  },
]

//Component for Institutions
const InstitutionChart = ({ data }) => {
  const total = data.reduce((sum, item) => sum + parseInt(item.participation), 0)

  return (
    <div className="h-full p-[2px] group rounded-2xl bg-gradient-to-br to-[#12dc9f] from-[#171A23] hover:to-[#12dc9f]/60 hover:from-[#171A23]  overflow-scroll hide-scrollbar">
      <div className="flex flex-col justify-around h-full w-full bg-[#171A23] p-4 pb-0 rounded-2xl px-8">
        <div className="space-y-7 py-9 md:py-0">
          {data.map((institution) => (
            <div
              key={institution.id}
              className="flex  max-[260px]:flex-col items-center justify-between space-x-12 max-[300px]:space-x-8 max-[260px]:space-x-5"
            >
              <div className="flex flex-col items-start w-full">
                <span>{institution.icon}</span>
                <span className="text-primary-foreground/90 font-base max-[310px]:text-sm">
                  {institution.title}
                </span>
              </div>
              <span className="text-white font-base text-3xl max-[360px]:text-2xl max-[300px]:text-xl max-[280px]:text-base">
                {institution.participation}
              </span>
            </div>
          ))}
        </div>
        <div className="flex justify-end py-5 md:py-0">
          <span className="text-[#12dc9f] group-hover:text-[#12dc9f]/80 font-semibold text-xl max-[280px]:text-lg max-[250px]:text-sm">
            {total}+ INSTITUTIONS
          </span>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 text-primary-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1">
          {keyData.map((item) => (
            <Card
              key={item.id}
              className="bg-[#171A23] p-2 rounded-2xl text-primary-foreground cursor-pointer"
            >
              <CardContent className="flex max-[320px]:flex-col items-center justify-between py-6  gap-10 bg-gradient-to-br hover:from-[#171A23]/30 hover:to-[#12dc9f]/50 from-[#171A23]/20 to-[#12dc9f] rounded-2xl">
                <div className="flex flex-col items-start space-y-10 max-[320px]:space-y-0 text-left">
                  <span className="text-xl bg-[#171A23] p-3 rounded-full">{item.icon}</span>
                  <span className="font-medium text-lg max-[365px]:text-base max-[200px]:text-xs text-white/80">
                    {item.title}
                  </span>
                </div>

                <div className="font-base text-3xl max-[365px]:text-2xl max-[280px]:text-xl text-right pr-2">
                  {item.participation}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="md:col-span-1">
          <InstitutionChart data={institutionsData} />
        </div>
      </div>
    </div>
  )
}
