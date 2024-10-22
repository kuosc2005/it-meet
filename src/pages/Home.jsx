import HeroPage from './HeroPage'
import AboutPage from './AboutPage'
import LocationPage from './Location'
import FAQ from './FAQ-Page'

const Home = () => {
  return (
    <div>
      <HeroPage />
      <AboutPage />
      {/* <SponsorPage /> */}
      <FAQ />
      <LocationPage />
    </div>
  )
}

export default Home
