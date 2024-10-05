import React from 'react'

export default function MainEventPage() {
  return (
    <div className="flex flex-col overflow-hidden p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]">
      <div className="flex flex-col items-center gap-2 md:gap-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
          MAIN-EVENTS
        </h1>
        <div className="w-full rounded-full bg-[#14C58F] h-1.5 md:h-2 lg:h-2.5"></div>
      </div>
    </div>
  )
}
