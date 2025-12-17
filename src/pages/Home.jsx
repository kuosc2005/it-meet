import HeroPage from './HeroPage'
import AboutPage from './AboutPage'
import LocationPage from './Location'
import FAQ from './FAQ-Page'
import LandingComponent from '@/components/custom/Landing'
import SponsorPage from './SponsorsPage'
import UpcomingEventsSection from '@/components/custom/UpcomingEventsSection'

const Home = () => {
  return (
    <div>
      {/* <HeroPage /> */}
      <LandingComponent />
      <AboutPage />
      <UpcomingEventsSection />
      <SponsorPage />
      <FAQ />
      <LocationPage />
    </div>
  )
}

export default Home
