import Footer from './components/custom/Footer'
import Navbar from './components/custom/Navbar'
import AboutPage from './pages/AboutPage'
import FAQ from './pages/FAQ-Page'
import HeroPage from './pages/HeroPage'
import MainEventPage from './components/custom/Main-eventPage'
import PreEventPage from './components/custom/Pre-eventPage'
import SponsorPage from './pages/SponsorsPage'
import LocationPage from './pages/Location'
import Events from './pages/Events'

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <section id="about">
        <AboutPage />
      </section>
      {/* <section id="events">
        <Events />
      </section> */}
      {/*
      <section id="sponsors">
        <SponsorPage />
      </section> */}
      <section id="faq">
        <FAQ />
      </section>
      <section id="locations">
        <LocationPage />
      </section>
      <section id="contacts">
        <Footer />
      </section>
    </>
  )
}

export default App
