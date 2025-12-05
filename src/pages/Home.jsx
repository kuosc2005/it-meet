import HeroPage from './HeroPage'
import AboutPage from './AboutPage'
import LocationPage from './Location'
import FAQ from './FAQ-Page'
import LandingComponent from '@/components/custom/Landing'
import SponsorPage from './SponsorsPage'
import Interested from '@/components/custom/Interested'

const Home = () => {
  return (
    <div>
      {/* <HeroPage /> */}
      <LandingComponent />
      <AboutPage />
      {/* <SponsorPage /> */}
      <FAQ />
      <Interested />
      <LocationPage />
    </div>
  )
}

export default Home
