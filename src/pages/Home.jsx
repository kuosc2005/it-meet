import HeroPage from './HeroPage'
import AboutPage from './AboutPage'
import LocationPage from './Location'
import FAQ from './FAQ-Page'
import LandingComponent from '@/components/custom/Landing'
import SponsorPage from './SponsorsPage'
import ARpreviewCard from '@/components/custom/ARpreviewCard'
const Home = () => {
  return (
    <div>
      {/* <HeroPage /> */}
      <LandingComponent />
      <AboutPage />
      {/* <SponsorPage /> */}
      <FAQ />
      <ARpreviewCard />

      <LocationPage />
    </div>
  )
}

export default Home
