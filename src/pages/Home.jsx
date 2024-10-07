import React from 'react'
import HeroPage from './HeroPage'
import AboutPage from './AboutPage'
import SponsorPage from './SponsorsPage'
import FAQ from './FAQ-Page'
import LocationPage from './Location'

const Home = () => {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      <SponsorPage />
      <FAQ />
      <LocationPage />
    </div>
  )
}

export default Home
