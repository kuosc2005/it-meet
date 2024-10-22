import React, { useState, useEffect } from 'react'
import ItmeetLogo from '../../assets/images/itmeetlogo.webp'
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { FaFacebook, FaSquareInstagram, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: 'Home',
      url: '/',
      subItems: [
        { id: 1, title: 'About', url: 'about' },
        { id: 2, title: 'Sponsors', url: 'sponsors' },
        { id: 3, title: 'FAQs', url: 'faqs' },
        { id: 4, title: 'Map', url: 'locations' },
        { id: 5, title: 'Contact', url: 'contacts' },
      ],
    },
    { id: 2, title: 'Team', url: '/teams' },
    { id: 3, title: 'Prospectus', url: '/prospectus' },
    { id: 4, 
      title: 'Events', 
      url: '/events', 
      subItems: [
        {id:1, title:'Upcoming Events', url:'upcoming'},
        {id:2, title:'Pre Events', url:'pre-events'},
        {id:3, title:'Main Events', url:'main'},
      ]},
  ];

  const location = useLocation()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
    setHomeSubmenuOpen(false)
  }

  const toggleSubmenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };

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

  // function for active path
  const isActive = (url) => {
    if (url.startsWith('#')) {
      return location.hash === url
    } else {
      return location.pathname === url
    }
  }

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-[#171A23]/80 backdrop-blur-md' : 'bg-[#171A23]'
      }`}
    >
      <div className="flex justify-between items-center font-medium text-slate-100 py-3 px-6 sm:px-10 md:py-4 lg:py-5 md:px-16 lg:px-20">
        {/* Logo */}
        <div className="lg:w-[20%]">
          <a href="/">
            <img
              src={ItmeetLogo}
              alt="itmeetlogo"
              className="object-contain w-[100px] cursor-pointer"
            />
          </a>
        </div>
        {/* ................Desktop View ............... */}
        <div className="items-center gap-6 lg:flex hidden">
          {navItems.map((item) => (
             <React.Fragment key={item.id}>
              {(item.subItems && item.url === '/' && location.pathname === '/') || (item.url === '/events' && location.pathname === '/events') ? (
                <NavLink
                  className={`uppercase text-sm sm:text-base md:text-lg hover:text-[#14C58F] cursor-pointer relative group ${
                    isActive(item.url) ? 'text-[#14C58F]' : 'text-white'
                  }`}
                  key={item.id}
                  to={item.url}
                >
                  <div className="flex items-center gap-2">
                    {item.title}{' '}
                    {(location.pathname === '/' || location.pathname === '/events') && (
                      <ChevronDown className="bg-gray-800 rounded-full w-4 h-4" />
                    )}
                  </div>
                  {(location.pathname === '/' || location.pathname === '/events') && (
                    <div className="hidden space-y-3 w-44 absolute z-10 p-5 bg-[#1f222c] group-hover:block transform duration-700">
                      {item.subItems.map((subItem) => {
                        return (
                          <div
                            key={subItem.id}
                            onClick={() => {
                              const element = document.getElementById(subItem.url)
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' })
                              }
                            }}
                            className={`flex flex-col hover:text-[#14C58F] uppercase text-sm sm:text-base md:text-lg cursor-pointer ${
                              isActive(subItem.url) ? 'text-[#14C58F]' : 'text-white'
                            }`}
                          >
                            {subItem.title}
                          </div>
                        )
                      })}
                    </div>
                  )}
                </NavLink>
              ) : (
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
            </React.Fragment>
          ))}
        </div>

        <div className="rounded-3xl hidden lg:flex bg-gradient-to-l from-[#369FFF] to-[#17C58F] p-[1px]">
          <div className="text-white bg-[#171A23] p-2 px-4 rounded-3xl flex items-center z-20 gap-4">
            <h1 className="text-sm">Follow us</h1>
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

        {/* ................Mobile View ............... */}
        <div className="flex lg:hidden items-center z-50">
          <button onClick={toggleMobileMenu} className="text-white">
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden`}>
        <div
          className={`w-full flex flex-col space-y-2 sm:space-y-3 h-auto p-5 bg-[#171A23]/80 backdrop-blur-md text-white fixed z-50`}
        >
          <div className="gap-5 sm:gap-6 items-start lg:hidden flex flex-col font-semibold text-slate-200">
            {navItems.map((item) => (
              <React.Fragment key={item.id}>
                {(item.subItems && item.url === '/' && location.pathname === '/') || (item.url === '/events' && location.pathname === '/events') ? (
                  <NavLink
                    className={`uppercase text-base sm:text-lg hover:text-[#14C58F] cursor-pointer ${
                      isActive(item.url) ? 'text-[#14C58F]' : 'text-white'
                    }`}
                    key={item.id}
                    to={`${location.pathname === '/' ? '#' : item.url}`}
                    onClick={toggleSubmenu}
                  >
                    <div
                      className="flex items-center gap-2"
                    >
                      {item.title}{' '}
                      {(location.pathname === '/' || location.pathname === '/events') && (
                        <ChevronDown className="bg-gray-800 rounded-full w-4 h-4" />
                      )}
                    </div>
                    {(location.pathname === '/' || location.pathname === '/events') && (
                      <div
                        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                          isSubmenuOpen
                            ? 'max-h-60 flex flex-col mt-3 space-y-2'
                            : 'hidden'
                        }`}
                      >
                        {item.subItems.map((subItem) => {
                          return (
                            <div
                              key={subItem.id}
                              onClick={() => {
                                const element = document.getElementById(subItem.url)
                                if (element) {
                                  element.scrollIntoView({ behavior: 'smooth' })
                                }
                              }}
                              className={`hover:text-[#14C58F] uppercase border-b border-gray-500 ml-4 text-sm sm:text-base cursor-pointer ${
                                isActive(subItem.url) ? 'text-[#14C58F]' : 'text-white'
                              }`}
                            >
                              {subItem.title}
                            </div>
                          )
                        })}
                      </div>
                    )}
                  </NavLink>
                ) : (
                  <NavLink
                    key={item.id}
                    to={item.url}
                    className={`hover:text-[#14C58F] uppercase text-base sm:text-lg ${
                      isActive(item.url) ? 'text-[#14C58F]' : 'text-white'
                    }`}
                  >
                    {item.title}
                  </NavLink>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Social Media */}
          <div className="text-white flex justify-start bg-transparent py-2 rounded-3xl items-center z-20 gap-4">
            <h1 className="text-lg font-semibold">Follow us</h1>
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
    </nav>
  )
}

export default Navbar
