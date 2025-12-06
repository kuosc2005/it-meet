import React from 'react'
import ITMeetLogo from '@/assets/images/itmeetlogo.svg'
import Activities from '@/components/custom/Carousel'
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
      <div className="flex flex-col lg:flex-row justify-center items-center mt-5 sm:mt-7 md:mt-9 lg:mt-12 gap-8 lg:gap-20">
        <div className="lg:hidden flex justify-center">
          <img
            src={ITMeetLogo}
            alt="itmeetlogodark"
            className="object-contain w-[160px] sm:w-[240px] md:w-[300px]"
            width={1000}
            height={1000}
          />
        </div>
        <div className="lg:w-full">
          <p className="text-xs sm:text-sm md:text-base xl:text-lg leading-8 text-justify font-normal text-gray-500">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
              IT MEET
            </span>{' '}
            is an annual, national-level event organized by Kathmandu University Computer Club
            (KUCC) with the intent of celebrating recent achievements in information and technology,
            that brings together tech enthusiasts from all over Nepal. This year, IT Meet aims to
            continue its tradition of promoting the creative zeal of technical personnel, providing
            a premier platform to share innovative ideas and compete with their peers in a variety
            of activities, including workshops, competitions, and networking sessions. Our vision is
            to provide future change-makers with a platform to delve deep into the insights of the
            tech world, emerging not only with technical skills and knowledge about hardware and
            computers but also with personal growth.
          </p>
        </div>
        <div className="hidden lg:flex w-full justify-center">
          <img
            src={ITMeetLogo}
            alt="itmeetlogodark"
            className="object-contain w-[600px]"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 md:gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
          Our Legacy
        </h1>
      </div>
      <div className="mt-5">
        <Activities />
      </div>
      {/* <div className="flex flex-col justify-center items-center gap-2 md:gap-3"> */}
      {/*   <h1 className="text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]"> */}
      {/*     Flashback: IT MEET */}
      {/*   </h1> */}
      {/* </div> */}
      {/* <div className="mt-5"> */}
      {/*   <EventGallery /> */}
      {/* </div>{' '} */}
    </div>
  )
}
