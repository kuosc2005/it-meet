import { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import HelloTiger from '@/assets/images/hello-tiger-faq.webp'
import WhiteSmiley from '@/assets/images/white-smiley.webp'
import GreenSmiley from '@/assets/images/green-smiley.webp'
// import Faq_what_else from "../components/custom/what_else.jsx"

const qna = [
  {
    id: 1,
    quest: 'What is IT MEET?',
    ans: 'IT MEET is a non-profit, student-organized university-level tech meetup held annually at Kathmandu University, Dhulikhel. It is a collaborative effort of the Kathmandu University Computer Club (KUCC) and the Department of Computer Science and Engineering (DoCSE). IT MEET focuses on celebrating recent achievements in the field of information and technology, providing opportunities for tech enthusiasts to share innovative ideas, compete with their peers, and gain real-world experience.',
  },
  {
    id: 2,
    quest: 'When and where will IT MEET 2024 take place?',
    ans: 'IT MEET 2024 will be held at Kathmandu University, Dhulikhel, on December 6 and 7.',
  },
  {
    id: 3,
    quest: 'What is the theme of IT MEET 2024?',
    ans: 'Refresh, Reimagine and Innovate',
  },
  {
    id: 4,
    quest: 'What types of events and competitions can I expect at IT MEET 2024?',
    ans: 'IT MEET 2024 will feature a variety of tech and non-tech-related events, including Coding challenges, Codecamps, Robomaze, Project Exhibition, Panel Discussion, and many more. You can visit our website and official social media pages for more information.',
  },
  {
    id: 5,
    quest: 'How can I participate in the different events of IT MEET 2024?',
    ans: 'To register for different events at IT MEET 2024, please stay informed by following our official social media pages, where we will regularly post updates about event registrations.',
  },
  {
    id: 6,
    quest: 'Is IT MEET only for students of Kathmandu University?',
    ans: "IT MEET is open to students from various schools, colleges, and universities. If you're 16 years or older and currently in high school, college, or graduate school, you can participate in IT MEET 2024.",
  },
  {
    id: 7,
    quest: 'Are there any age restrictions for participants?',
    ans: 'There is no age restriction for participants of IT MEET 2024. It is a tech festival where we invite people from diverse backgrounds.',
  },
  {
    id: 8,
    quest:
      'If I am interested in becoming a sponsor for IT MEET 2024 or have sponsorship-related inquiries, how can I get in touch with the organizers?',
    ans: 'If you are interested in becoming a sponsor for IT MEET 2024 or have inquiries about sponsorship packages, please visit the “Our Sponsors” section on our website or you can reach us directly through itmeet@ku.edu.np.',
  },
  {
    id: 9,
    quest: 'How can I contact the organizers if I have questions or need assistance?',
    ans: "If you have any questions or need assistance, feel free to contact us at itmeet@ku.edu.np.com. You can also connect with us on our official social media accounts (Facebook, Instagram, LinkedIn, and Twitter), and we'll be happy to assist you promptly.",
  },
]

export default function FAQ() {
  // initially about the event section is shown.
  const [selectedFaqQts, setSelectedFaqQts] = useState('about-the-event')

  const hanldeFaqQtsChange = (event) => {
    setSelectedFaqQts(event.target.id)
  }

  return (
    <>
      <div
        id="faqs"
        className="flex flex-col overflow-hidden p-6 sm:p-8 md:p-10 py-10 md:py-20 lg:px-20 items-center justify-center min-h-screen bg-[#171A23]"
      >
        <div className="flex flex-col items-center gap-2 md:gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
            FAQs
          </h1>
          <div className="w-full rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2 lg:h-2.5"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-0 md:mt-5 xl:px-32">
          <div className="flex flex-row w-full h-28 sm:h-36 lg:h-[400px] items-center">
            <div className="flex flex-row lg:flex-col gap-8 w-[80%] h-[100px] lg:h-[400px] m-auto whitespace-nowrap overflow-x-auto hide-scrollbar">
              <div
                id="about-the-event"
                className="flex flex-row gap-4 lg:h-26 items-center relative"
                onClick={hanldeFaqQtsChange}
              >
                <div className="lg:w-24 relative">
                  <img
                    id="about-the-event"
                    src={HelloTiger}
                    alt="Hello Tiger"
                    className={`w-24 absolute top-[-45px] ${selectedFaqQts === 'about-the-event' ? 'visible' : 'invisible'}`}
                  />
                </div>
                <img
                  id="about-the-event"
                  src={selectedFaqQts === 'about-the-event' ? GreenSmiley : WhiteSmiley}
                  className="max-w-[40px] md:max-w-[50px] hover:cursor-pointer"
                />
                <button
                  id="about-the-event"
                  className={`hover:cursor-auto text-xl md:text-2xl ${selectedFaqQts === 'about-the-event' ? 'text-[#14C58F]' : 'text-white'}`}
                >
                  About the Event
                </button>
              </div>
              <div
                id="event-logistics"
                className="flex flex-row gap-4 lg:h-26 items-center relative"
                onClick={hanldeFaqQtsChange}
              >
                <div className="lg:w-24 relative">
                  <img
                    id="event-logistics"
                    src={HelloTiger}
                    alt="Hello Tiger"
                    className={`w-24 absolute top-[-45px] ${selectedFaqQts === 'event-logistics' ? 'visible' : 'invisible'}`}
                  />
                </div>
                <img
                  id="event-logistics"
                  src={selectedFaqQts === 'event-logistics' ? GreenSmiley : WhiteSmiley}
                  className="max-w-[40px] md:max-w-[50px] hover:cursor-pointer"
                />
                <button
                  id="event-logistics"
                  className={`hover:cursor-default text-xl md:text-2xl ${selectedFaqQts === 'event-logistics' ? 'text-[#14C58F]' : 'text-white'}`}
                >
                  Event Logistics
                </button>
              </div>
              <div
                id="participation-guidelines"
                className="flex flex-row gap-4 lg:h-26 items-center relative"
                onClick={hanldeFaqQtsChange}
              >
                <div className="lg:w-24 relative">
                  <img
                    id="participation-guidelines"
                    src={HelloTiger}
                    alt="Hello Tiger"
                    className={`w-24 absolute top-[-45px] ${selectedFaqQts === 'participation-guidelines' ? 'visible' : 'invisible'}`}
                  />
                </div>
                <img
                  id="participation-guidelines"
                  src={selectedFaqQts === 'participation-guidelines' ? GreenSmiley : WhiteSmiley}
                  className="max-w-[40px] md:max-w-[50px] hover:cursor-pointer"
                />
                <button
                  id="participation-guidelines"
                  className={`hover:cursor-default text-xl md:text-2xl ${selectedFaqQts === 'participation-guidelines' ? 'text-[#14C58F]' : 'text-white'}`}
                >
                  Participation Guidelines
                </button>
              </div>
              <div
                id="other"
                className="flex flex-row gap-4 lg:h-26 items-center relative"
                onClick={hanldeFaqQtsChange}
              >
                <div className="lg:w-24 relative">
                  <img
                    id="other"
                    src={HelloTiger}
                    alt="Hello Tiger"
                    className={`w-24 absolute top-[-45px] ${selectedFaqQts === 'other' ? 'visible' : 'invisible'}`}
                  />
                </div>
                <img
                  id="other"
                  src={selectedFaqQts === 'other' ? GreenSmiley : WhiteSmiley}
                  className="max-w-[40px] md:max-w-[50px] hover:cursor-pointer"
                />
                <button
                  id="other"
                  className={`hover:cursor-default text-xl md:text-2xl ${selectedFaqQts === 'other' ? 'text-[#14C58F]' : 'text-white'}`}
                >
                  Other
                </button>
              </div>
            </div>
          </div>
          <div className="w-full custom-scrollbar lg:w-1/2 h-[400px] lg:h-[500px] space-y-3 rounded-2xl lg:rounded-3xl overflow-y-scroll bg-[#171A23] text-white p-6 sm:p-8 md:p-10 lg:px-10 xl:px-12">
            <div className="space-y-3 sm:space-y-5">
              {qna.map((item) => (
                <Accordion key={item.id} type="single" collapsible className="w-full">
                  <AccordionItem value={item.id.toString()}>
                    <AccordionTrigger className="text-lg sm:text-xl text-start">
                      {item.quest}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm sm:text-base font-semibold text-gray-300">
                      {item.ans}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <Faq_what_else /> */}
    </>
  )
}
