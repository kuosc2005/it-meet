import React from 'react'
import { useState, useEffect } from 'react'
import ITMeetLogo from '@/assets/images/itmeetlogo.webp'
import BGNeon from '@/assets/images/bgreen.webp'
import EllipeBG from "@/assets/images/Ellipse.webp"
import Mascot from '@/assets/images/hello_tiger.webp'
import HexaBg from '@/assets/images/hexabg.webp'
import Blocks from '@/assets/images/blocks.webp'
import BoundaryGreen from "@/assets/images/boundary.webp"
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'

export default function HeroPage() {
  const [eventDay, setEventDay] = useState(false)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    // const target = new Date('12/06/2024 23:59:59')
    const target = new Date("10/04/2024 23:37:00");
    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(d)

      const h = Math.floor((difference / (1000 * 60 * 60)) % 24)
      setHours(h)

      const m = Math.floor((difference / 1000 / 60) % 60)
      setMinutes(m)

      const s = Math.floor((difference / 1000) % 60)
      setSeconds(s)

      if (d <= 0 && h <= 0 && m <= 0 && s <= m) {
        setEventDay(true)
      }
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col overflow-hidden items-center justify-center min-h-[calc(100vh-3rem)] relative bg-[#171A23] px-4 sm:px-6 md:px-8">
      {eventDay ? (
        <>
          <div className="flex flex-col gap-6 sm:gap-6 md:gap-7 lg:gap-8 xl:gap-9 -mt-16 sm:mt-0 items-center justify-center z-20">
            {/* IT Meet Logo */}
            <div className="flex flex-col gap-6 sm:gap-8 items-center">
              <img
                src={ITMeetLogo}
                alt="itmeetlogo"
                className="object-contain w-[140px] sm:w-[180px] md:w-[200px] lg:w-[220px] xl:w-[250px]"
              />
              <div  className="flex flex-col gap-2 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl font-semibold">
                <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f] tracking-wider">
                  REFRESH,
                </h2>
                <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f] tracking-wider">
                  REIMAGINE &
                </h2>
                <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f] tracking-wider">
                  INNOVATE
                </h2>
              </div>
            </div>

            {/* Main Headings */}
            <div className="text-white flex flex-col gap-2 md:gap-3 xl:gap-4 z-10">
              <h2 className="text-[25px] sm:text-3xl md:text-4xl lg:text-5xl tracking-wider xl:text-5xl text-center font-semibold">
                DECEMBER
              </h2>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[130px] text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f] tracking-wider text-center font-bold">
                6 & 7
              </h1>
            </div>

            {/* Social Media Icons */}
            <div className="text-gray-400 flex items-center z-20 gap-4">
              <a
                href="https://www.facebook.com/KUITMEET/"
                className="hover:translate-y-0.5 hover:transition-all"
              >
                <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" />
              </a>
              <a
                href="https://www.instagram.com/kuitmeet/"
                className="hover:translate-y-0.5 hover:transition-all"
              >
                <FaSquareInstagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" />
              </a>
              <a
                href="https://www.linkedin.com/company/kuitmeet/"
                className="hover:translate-y-0.5 hover:transition-all"
              >
                <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" />
              </a>
              <a
                href="https://twitter.com/kuitmeet"
                className="hover:translate-y-0.5 hover:transition-all"
              >
                <FaSquareXTwitter className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" />
              </a>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center text-gray-300 text-center z-10">
              <h1 className="text-lg sm:text-xl lg:text-2xl flex gap-2 font-semibold tracking-wider">
                <span className="text-[#14C58F]">@</span>KATHMANDU UNIVERSITY
              </h1>
              <h2 className="font-medium tracking-wider text-sm sm:text-base lg:text-lg">
                Dhulikhel, Kavrepalanchok
              </h2>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-10">
            <img
              src={EllipeBG}
              alt="bgellipse"
              className="object-contain w-[200px] sm:w-[280px] md:w-[360px] lg:w-[420px] xl:w-[550px]"
            />
          </div>
          <div className="absolute bottom-0 right-0 z-10">
            <img
              src={Mascot}
              alt="mascot"
              className="object-contain w-[190px] sm:w-[260px] md:w-[320px] lg:w-[390px] xl:w-[500px]"
            />
          </div>
          <div className="absolute bottom-0 right-0 z-10">
            <img
              src={BoundaryGreen}
              alt="boundary"
              className="object-contain w-[100px] sm:w-[160px] md:w-[190px] lg:w-[230px] xl:w-[280px]"
            />
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-10 sm:gap-8 md:gap-10 xl:gap-12 items-center justify-center">
          {/* IT Meet Logo */}
          <div>
            <img
              src={ITMeetLogo}
              alt="itmeetlogo"
              className="object-contain w-[160px] sm:w-[200px] md:w-[230px] xl:w-[250px]"
            />
          </div>

          {/* Main Headings */}
          <div className="text-white flex flex-col gap-2 sm:gap-3 md:gap-4 z-10">
            <h2 className="text-center tracking-wider text-xl sm:text-2xl md:text-4xl font-semibold">
              MAKE{' '}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
                IT MEET
              </span>{' '}
              GREAT AGAIN
            </h2>
            <hr className="w-1/2 mx-auto" />
            <h1 className="text-4xl tracking-wider sm:text-6xl md:text-7xl xl:text-8xl text-center font-bold">
              COMING{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
                SOON
              </span>
            </h1>
          </div>

          {/* Timer */}
          <div className="text-white flex flex-col gap-2 sm:gap-3 md:gap-4 z-10">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
              <div className="flex flex-col items-center gap-1 rounded-lg border-2 border-[#12dc9f] bg-gradient-to-t from-[#172633] to-[#205041] p-2 sm:p-3 w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                <span className="font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
                  {days}
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">Days</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-lg border-2 border-[#369fff] bg-gradient-to-t from-[#172633] to-[#205041] p-2 sm:p-3 w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                <span className="font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
                  {hours}
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                  Hours
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-lg border-2 border-[#12dc9f] bg-gradient-to-t from-[#172633] to-[#205041] p-2 sm:p-3 w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                <span className="font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
                  {minutes}
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                  Minutes
                </span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-lg border-2 border-[#369fff] bg-gradient-to-t from-[#172633] to-[#205041] p-2 sm:p-3 w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px]">
                <span className="font-bold text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f]">
                  {seconds}
                </span>
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium">
                  Seconds
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="text-gray-400 flex items-center z-20 gap-4">
            <a
              href="https://www.facebook.com/KUITMEET/"
              className="hover:translate-y-0.5 hover:transition-all"
            >
              <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" />
            </a>
            <a
              href="https://www.instagram.com/kuitmeet/"
              className="hover:translate-y-0.5 hover:transition-all"
            >
              <FaSquareInstagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" />
            </a>
            <a
              href="https://www.linkedin.com/company/kuitmeet/"
              className="hover:translate-y-0.5 hover:transition-all"
            >
              <FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" />
            </a>
            <a
              href="https://twitter.com/kuitmeet"
              className="hover:translate-y-0.5 hover:transition-all"
            >
              <FaSquareXTwitter className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9" />
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center text-gray-300 text-center z-10">
            <h1 className="text-lg sm:text-xl lg:text-2xl flex gap-2 font-semibold tracking-wider">
              <span className="text-[#14C58F]">@</span>KATHMANDU UNIVERSITY
            </h1>
            <h2 className="font-medium tracking-wider text-sm sm:text-base lg:text-lg">
              Dhulikhel, Kavrepalanchok
            </h2>
          </div>
        </div>
      )}
      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 sm:-top-28 sm:-left-28 md:-top-32 md:-left-32 opacity-30 rotate-90">
        <img
          src={BGNeon}
          alt="bgneo"
          className="object-contain w-[300px] sm:w-[350px] md:w-[400px]"
        />
      </div>
      <div className="absolute -bottom-52 -right-44 sm:-bottom-56 sm:-right-60 md:-bottom-64 md:-right-64 rotate-12 opacity-30">
        <img
          src={BGNeon}
          alt="bgneo"
          className="object-contain w-[400px] sm:w-[500px] md:w-[550px] lg:w-[620px]"
        />
      </div>
      <div className="absolute -top-32 opacity-65 sm:opacity-75 md:opacity-85 lg:opacity-90 -right-6 sm:-top-18 sm:-right-8 md:-top-44 md:-right-10 lg:-top-24 lg:-right-8 -rotate-12 z-0">
        <img
          src={HexaBg}
          alt="hexa"
          className="object-contain w-[180px] sm:w-[220px] md:w-[250px]"
        />
      </div>
      <div className="absolute -bottom-32 opacity-65 sm:opacity-75 md:opacity-85 lg:opacity-90 -left-12 sm:-bottom-10 sm:-left-20 md:-bottom-10 md:-left-24 lg:-bottom-8 lg:-left-12 rotate-180 z-0">
        <img
          src={HexaBg}
          alt="hexa"
          className="object-contain w-[180px] sm:w-[220px] md:w-[250px]"
        />
      </div>
      <div className="absolute mx-auto z-0">
        <img
          src={Blocks}
          alt="blocks"
          className="object-contain w-[800px] sm:w-[1000px] md:w-[1200px]"
        />
      </div>
    </div>
  )
}
