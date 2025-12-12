import Footer from './components/custom/Footer'
import Team from './pages/Team'
import Prospectus from './pages/Prospectus'
import Navbar from './components/custom/Navbar'
import NotFoundPage from './pages/NotFoundPage'
import Events from './pages/Events'
import { EventProvider } from './components/custom/EventContext'
import EventDetails from './pages/EventDetails'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ARView from './pages/ARView'
import ARNavigation from './pages/ARNavigation'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  const marketingARViewPath = '/marketing/ar-view'
  const isARPage = location.pathname === marketingARViewPath
  return (
    <>
      {isARPage ? (
        <ARView />
      ) : (
        <>
          <Navbar />
          <EventProvider>
            <Routes>
              <Route path="/" element={<Home />} errorElement={<NotFoundPage />} />
              <Route path="/events" element={<Events />} errorElement={<NotFoundPage />} />
              <Route
                path="/events/:eventTitle"
                element={<EventDetails />}
                errorElement={<NotFoundPage />}
              />
              <Route path="/teams" element={<Team />} errorElement={<NotFoundPage />} />
              <Route
                path="/ar-navigation"
                element={<ARNavigation />}
                errorElement={<NotFoundPage />}
              />
              {/* <Route path="/prospectus" element={<Prospectus />} errorElement={<NotFoundPage />} /> */}
            </Routes>
          </EventProvider>
          <Footer />
        </>
      )}
    </>
  )
}

export default App
