import React, { useState, useEffect } from 'react'
import ItmeetLogo from '../../assets/images/itmeetlogo.webp'
import { FaBars, FaX } from 'react-icons/fa6'
import { useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'


export default function Navbar() {

  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [tilt, setTilt] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    {
      id: 1,
      title: 'Home',
      url: '/',
      subItems: [
        { id: 1, title: 'About', url: '#about' },
        { id: 2, title: 'Sponsors', url: '#sponsors' },
        { id: 3, title: 'FAQs', url: '#faqs' },
        { id: 4, title: 'Map', url: '#locations' },
        { id: 5, title: 'Contact', url: '#contacts' },
      ],
    },
    { id: 2, title: 'Team', url: '/teams' },
    { id: 3, title: 'Prospectus', url: '/prospectus' },
    { id: 4, title: 'Events', url: '/events' },
  ];
  
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
    if(url.startsWith("#")){
      return location.hash === url;
    }else{
      return location.pathname === url;
    }
  }

  const items = (classes) => {
    return (
      <div className={`${classes} items-center`}>
        {navItems.map((item) => (
          <>
            {item.subItems && item.url==="/" ? (
              <a
              className={`uppercase text-sm sm:text-base md:text-lg hover:text-[#14C58F] cursor-pointer relative group ${
                isActive(item.url) ? 'text-[#14C58F]' : 'text-white'}`}
              key={item.id}
              href={item.url}
            >
              <div className="flex items-center gap-2">
                {item.title} {' '} 
                {location.pathname === '/' && (
                    <ChevronDown className="bg-gray-800 rounded-full w-4 h-4" />
                  )}
              </div>
              {location.pathname === '/' && (
              <div className="hidden space-y-3 w-44 absolute z-10 p-5 bg-[#1f222c] group-hover:block transform duration-700">
                {item.subItems.map((subItem) => {
                  return (
                    <a
                        key={subItem.id}
                        href={subItem.url}
                        className={`flex flex-col hover:text-[#14C58F] uppercase text-sm sm:text-base md:text-lg ${
                          isActive(subItem.url) ? 'text-[#14C58F]' : 'text-white'
                        }`}
                      >
                        {subItem.title}
                      </a>
                  )
                })}
              </div>
              )}
            </a>
            ): (
              <NavLink
              key={item.id}
              to={item.url}
              className={`hover:text-[#14C58F] uppercase text-sm sm:text-base md:text-lg ${
                isActive(item.url) ? 'text-[#14C58F]' : 'text-white'
              }`}
            >
              {item.title}
            </NavLink>
            )}
          </>
        ))}
      </div>
    )
  }
  return (
    <>
      <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-[#171A23]/80 backdrop-blur-md' : 'bg-[#171A23]'}`}>
        <div className="flex justify-between items-center font-medium text-slate-100 py-3 px-6 sm:px-10 md:py-4 lg:py-5 md:px-16 lg:px-20">
          <div className='lg:w-[20%]'>
          <a href="/">
            <img
              src={ItmeetLogo}
              alt="itmeetlogo"
              className="object-contain w-[100px] cursor-pointer"
            />
          </a>
          </div>
          <div>
          {items(' justify-between space-x-6 lg:flex hidden')}
          </div>
          <div className='rounded-3xl hidden lg:flex bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-[1px]'>
          <div className="text-white bg-[#171A23] p-2 px-4 rounded-3xl flex items-center z-20 gap-4">
              <h1 className='text-sm'>Follow us</h1>
              <a
                href="https://www.facebook.com/KUITMEET/"
                className="hover:scale-110 hover:text-gray-300 transition-all duration-500"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kuitmeet/"
                className="hover:scale-110 hover:text-gray-300 transition-all duration-500"
              >
                <FaSquareInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/kuitmeet/"
                className="hover:scale-110 hover:text-gray-300 transition-all duration-500"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/kuitmeet"
                className="hover:scale-110 hover:text-gray-300 transition-all duration-500"
              >
                <FaSquareXTwitter className="w-5 h-5" />
              </a>
            </div>
            </div>

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
          className={`w-full h-auto p-3 bg-[#171A23]/80 backdrop-blur-md text-white fixed z-50`}
          onClick={() => setters()}
        >
          {items('flex flex-col justify-center space-y-5 p-5 font-semibold text-slate-200')}
          <div className='lg:hidden'>
          <div className="text-white flex justify-center bg-transparent p-2 px-4 rounded-3xl items-center z-20 gap-4">
              <h1 className='text-base font-semibold'>Follow us</h1>
              <a
                href="https://www.facebook.com/KUITMEET/"
                className="hover:scale-110 hover:text-gray-300 transition-all duration-500"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/kuitmeet/"
                className="hover:scale-110 hover:text-gray-300 transition-all duration-500"
              >
                <FaSquareInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/kuitmeet/"
                className="hover:scale-110 hover:text-gray-300 transition-all duration-500"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/kuitmeet"
                className="hover:scale-110 hover:text-gray-300 transition-all duration-500"
              >
                <FaSquareXTwitter className="w-5 h-5" />
              </a>
            </div>
            </div>
        </div>
      )}
    </>
  )
}
