import React from 'react'
import ITMeetLogo from '@/assets/images/itmeetlogo.svg'
import Activities from '@/components/custom/Legacy'
import EventGallery from '@/components/custom/EventGallery'

export default function AboutPage() {
  return (
    <div
      id="about"
      className="flex flex-col overflow-hidden p-6 sm:p-8 md:p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]"
    >
      <div className="flex flex-col items-center gap-2 md:gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
          ABOUT IT MEET
        </h1>
        <div className="w-full rounded-full bg-gradient-to-r from-[#369fff] to-[#12dc9f] h-1.5 md:h-2 lg:h-2.5"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 lg:mt-16 gap-12 lg:gap-16 w-full">
        {/* Mobile Logo */}
        <div className="lg:hidden flex justify-center mb-6">
          <img
            src={ITMeetLogo}
            alt="IT Meet Logo"
            className="object-contain w-[180px] sm:w-[240px] md:w-[280px] transform transition-transform duration-500 hover:scale-105 shadow-md"
          />
        </div>

        {/* Paragraph Container */}
        <div className="lg:max-w-3xl bg-[#1f2230]/50 p-6 md:p-8 rounded-xl shadow-md">
          <p className="text-sm sm:text-base md:text-base xl:text-lg leading-relaxed text-gray-300 text-justify">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
              IT MEET
            </span>{' '}
            is an annual, national-level event organized by Kathmandu University Computer Club
            (KUCC), celebrating recent achievements in information and technology. It brings
            together tech enthusiasts from all over Nepal. This year, IT Meet continues its
            tradition of promoting the creative zeal of technical personnel, providing a premier
            platform to share innovative ideas and compete in workshops, competitions, and
            networking sessions. Our vision is to empower future change-makers with insights into
            the tech world, helping them emerge not only with technical skills but also personal
            growth.
          </p>
        </div>

        {/* Desktop Logo */}
        <div className="hidden lg:flex justify-center w-[45%] -ml-6">
          <img
            src={ITMeetLogo}
            alt="IT Meet Logo"
            className="object-contain w-[450px] md:w-[550px] transform transition-transform duration-500 hover:scale-105 shadow-lg"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 md:gap-3 my-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
          Our Legacy
        </h1>
        <div className="pt-10">
          <Activities />
        </div>
      </div>
      {/* <div className="flex flex-col justify-center items-center gap-2 md:gap-3 mt-1"> */}
      {/*   <h2 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]"> */}
      {/*     Event Gallery */}
      {/*   </h2> */}
      {/* </div> */}
      {/* <div className="mt-5"> */}
      {/*   <EventGallery /> */}
      {/* </div> */}
    </div>
  )
}
