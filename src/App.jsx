import Footer from './components/custom/Footer'
import Team from './pages/Team'
import Prospectus from './pages/Prospectus'
import Navbar from './components/custom/Navbar'
import NotFoundPage from './pages/NotFoundPage'
import Events from './pages/Events'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} errorElement={<NotFoundPage />}/>
        <Route path="/events" element={<Events />} errorElement={<NotFoundPage />}/>
        <Route path="/teams" element={<Team />} errorElement={<NotFoundPage />}/>
        <Route path="/prospectus" element={<Prospectus />} errorElement={<NotFoundPage />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
