import HeroPage from './HeroPage'
import AboutPage from './AboutPage'
import LocationPage from './Location'
import FAQ from './FAQ-Page'
import LandingComponent from '@/components/custom/Landing'
import SponsorPage from './SponsorsPage'
import Chatbot from '@/components/custom/Chatbot'

const Home = () => {
  return (
    <div>
      {/* <HeroPage /> */}
      <LandingComponent />
      <AboutPage />
      {/* <SponsorPage /> */}
      <FAQ />
      <LocationPage />
      <Chatbot />

    </div>
  )
}

export default Home
