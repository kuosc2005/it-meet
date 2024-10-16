import React from 'react'
import Expectation from '@/components/custom/Expectation'
import MainEventPage from '@/components/custom/Main-eventPage'
import PreEventPage from '@/components/custom/Pre-eventPage'
import Banner from '@/components/custom/Banner'
import EventList from '@/components/custom/EventList'

const Events = () => {
  const mainEvents = [
    {
      id: 1,
      imgSrc: '',
      title: 'KU HACKFEST',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut labore et dolore magna aliqua.',
      formLink: '',
    },
  ]

  const preEvents = [
    {
      id: 1,
      imgSrc: '',
      title: 'KU HACKFEST',
    },
  ]

  const listEvents = [
    {
      id: 1,
      imgSrc: '',
      title: 'KU HACKFEST',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]

  return (
    <div className="flex flex-col overflow-hidden p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]">
      <div className="space-y-4">
        <Banner />
        <EventList events={listEvents} />
        <PreEventPage events={preEvents} />
        <MainEventPage events={mainEvents} />
      </div>
    </div>
  )
}

export default Events
