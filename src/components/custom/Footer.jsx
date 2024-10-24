import React from 'react'
import ItmeetLogo from '../../assets/images/itmeetlogo.webp'
import Background from "@/assets/images/boundary.webp"
import Tiger from "@/assets/images/hello_tiger.webp"
import Ellipse from "@/assets/images/ellipse.webp"
import data from './footerdata.json'
import {
  FaFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaLocationDot,
  FaEnvelope,
} from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
    <footer id='contacts' className="bg-[#171A23] h-full overflow-hidden">
    <h1 className="text-transparent bg-clip-text bg-gradient-to-l from-[#369fff] to-[#12dc9f] text-center font-semibold sm:mt-5 text-2xl sm:text-3xl lg:text-4xl">
            Contact Us
          </h1>
      <div className="flex flex-col mt-5 md:mt-0 space-y-12 md:flex-row justify-between items-center text-gray-400 py-3 sm:py-4 md:py-3 md:px-10 lg:px-12 xl:px-16">
        {/*left side */}
          <div className="flex flex-col space-y-2 sm:space-y-3 lg:space-y-5">
            <h1 className="text-[#12dc9f] text-center font-semibold text-xl sm:text-2xl md:text-xl lg:text-3xl">
              Follow us on
            </h1>
            <div className="flex justify-center space-x-4 sm:space-x-6 md:space-x-4 lg:space-x-8 text-2xl lg:text-3xl text-primary-foreground ">
              <a href={data.facebookLink} target="_blank">
                <FaFacebook className="hover:scale-90 hover:ease-in-out transition-all" />
              </a>
              <a href={data.instagramLink} target="_blank">
                <FaSquareInstagram className="hover:scale-90 hover:ease-in-out transition-all" />
              </a>
              <a href={data.twitterLink} target="_blank">
                <FaSquareXTwitter className="hover:scale-90 hover:ease-in-out transition-all" />
              </a>
              <a href={data.linkedinLink} target="_blank">
                <FaLinkedin className="hover:scale-90 hover:ease-in-out transition-all" />
              </a>
            </div>
        </div>

        {/* Middle part */}
        <div className="flex flex-col space-y-5 md:space-y-8 lg:space-y-10">
          {/* Coordinator and president */}
          <div className="flex space-x-6 lg:space-x-12 xl:space-x-24 text-center">
            <span className="text-primary-foreground">
              <h1 className="text-[#369fff] font-semibold text-xl sm:text-2xl md:text-xl lg:text-3xl">
                Ranjan Lamsal
              </h1>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">Coordinator,</p>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">IT Meet</p>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">
                {data.itMeetCoordinator}
              </p>
            </span>

            <span className="text-primary-foreground">
              <h1 className="text-[#369fff] font-semibold text-xl sm:text-2xl md:text-xl lg:text-3xl">
                Nirjal Bhurtel
              </h1>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">President,</p>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">KUCC</p>
              <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">
                {data.kuccPresident}
              </p>
            </span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center space-y-3 md:space-y-6 text-white">
            <div className="flex items-center space-x-4">
              <FaLocationDot className="w-5 h-6" />
              <span className="text-lg sm:text-xl md:text-lg lg:text-2xl font-normal">
                <p>Kathmandu University</p>
                <p>Dhulikhel, Kavre</p>
              </span>
            </div>
            <div>
              {/* Email */}
              <span className="flex items-center space-x-4 text-lg sm:text-xl md:text-lg lg:text-2xl text-primary-foreground">
                <a href="mailto:itmeet@ku.edu.np">
                  <FaEnvelope className="w-5 h-6" />
                </a>
                <p>itmeet@ku.edu.np</p>
              </span>
            </div>
          </div>
        </div>

        {/* Right part */}
        <div className="flex flex-col items-center space-y-3 md:space-y-6">
          <h1 className="text-white text-lg md:text-lg sm:text-xl lg:text-2xl">Brand Guidelines</h1>
          <h1 className="text-white text-lg md:text-lg sm:text-xl lg:text-2xl">Brand Assest</h1>
          <p className="text-lg sm:text-xl md:text-lg lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#369fff] to-[#12dc9f]">
            #geekoutinstyle
          </p>
        </div>
      </div>

      <p className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg flex font-semibold justify-center items-center mt-10">
        Copyright © 2024 IT Meet. All rights reserved.
      </p>
      <div className='relative mt-48 sm:mt-52 md:mt-60 lg:mt-72'>
      <img
            src={ItmeetLogo}
            alt="itmeetlogo"
            className="object-contain w-[130px] sm:w-[200px] md:w-[250px] lg:w-[300px] xl:w-[360px] absolute left-5 sm:left-12 md:left-20 lg:left-28 xl:left-36 bottom-0"
            width={1000}
            height={1000}
          />
        <img
            src={Background}
            alt="background"
            className="object-contain w-[110px] sm:w-[150px] md:w-[180px] lg:w-[220px] xl:w-[280px] absolute right-0 bottom-0 z-20"
            width={1000}
            height={1000}
          />
          <img
            src={Tiger}
            alt="tiger"
            className="object-contain w-[185px] sm:w-[240px] md:w-[290px] lg:w-[350px] xl:w-[440px] absolute right-0 bottom-0 z-10"
            width={1000}
            height={1000}
          />
          <img
            src={Ellipse}
            alt="ellipse"
            className="object-contain w-[190px] sm:w-[260px] md:w-[300px] lg:w-[370px] xl:w-[460px] absolute right-0 bottom-0"
            width={1000}
            height={1000}
          />
      </div>
    </footer>
    </>
  )
}
