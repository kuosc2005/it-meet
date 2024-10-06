import React, { useState, useEffect } from 'react'
import ItmeetLogo from '../../assets/images/itmeetlogo.webp'
import { FaBars, FaX } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'

const navItems = [
  {
    id: 1,
    title: 'About',
    url: '#about',
  },
  // {
  //   id: 2,
  //   title: "events",
  //   url: "#events",
  // },
  // {
  //   id: 3,
  //   title: "Sponsors",
  //   url: "#sponsors",
  // },
  {
    id: 4,
    title: 'FAQ',
    url: '#faq',
  },
  {
    id: 5,
    title: 'Map',
    url: '#locations',
  },
  {
    id: 6,
    title: 'Contact',
    url: '#contacts',
  },
]

export default function Navbar() {

  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [tilt, setTilt] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // function to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const setters = () => {
    setOpen(!open)
    setTilt(true)

    setTimeout(() => {
      setTilt(false)
    }, 100)
  }

  // function for active path
  const isActive  = (url)=> {
    return location.hash === url;
  }

  const items = (classes) => {
    return (
      <div className={`${classes} items-center`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className={`hover:text-[#14C58F] uppercase text-sm sm:text-base md:text-lg ${
              isActive(item.url) ? 'text-[#14C58F]' : 'text-white'
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>
    )
  }
  return (
    <>
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-[#171A23]/80 backdrop-blur-md' : 'bg-[#171A23]'}`}>
        <div className="flex justify-between items-center font-semibold text-slate-100 py-3 px-6 sm:px-10 md:py-4 lg:py-5 md:px-16 lg:px-20">
          <a href="#">
            <img
              src={ItmeetLogo}
              alt="itmeetlogo"
              className="object-contain w-[100px] cursor-pointer"
            />
          </a>

          {items(' justify-between space-x-6 lg:flex hidden')}

          <div className=" lg:hidden font-extrabold text-2xl md:text-3xl rounded-full hover:bg-slate-900 bg-opacity-5 text-primary-foreground ">
            {open ? (
              <FaX
                onClick={() => setters()}
                className={`transform transition-all duration-300 ease-in-out ${tilt ? 'rotate-0 scale-[1.15]' : '-rotate-90 scale-100'}`}
              />
            ) : (
              <FaBars
                onClick={() => setters()}
                className={`transform transition-all duration-300 ease-in-out ${tilt ? 'rotate-90 scale-[1.15]' : 'rotate-0 scale-100'}`}
              />
            )}
          </div>
        </div>
      </nav>

      {open && (
        <div
          className={`w-full h-auto bg-[#171A23]/80 backdrop-blur-md text-white fixed z-50`}
          onClick={() => setters()}
        >
          {items('flex flex-col justify-center space-y-5 p-5 font-semibold text-slate-200')}
        </div>
      )}
    </>
  )
}
