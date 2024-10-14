import Expectation from '@/components/custom/Expectation'
import MainEventPage from '@/components/custom/Main-eventPage'
import PreEventPage from '@/components/custom/Pre-eventPage'
import Banner from '@/components/custom/Banner'
import EventList from '@/components/custom/EventList'

import React from 'react'

const Events = () => {
  return (
    <div className="flex flex-col overflow-hidden p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]">
      <div className="space-y-4">
        <div>
          <Banner />
        </div>

        <div>
          <EventList />
        </div>
        <div>
          <PreEventPage />
        </div>
        <div>
          <MainEventPage />
        </div>
        <div>
          <Expectation />
        </div>
      </div>
    </div>
  )
}

export default Events
