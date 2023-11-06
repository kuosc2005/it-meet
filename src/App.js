import './App.css';
import NavBar from './components/NavBar/views';
import MainPage from './pages/MainPage/views';
import DatabaseState from './context/databaseContext/database.state';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer/views';
import EventPage from './pages/EventsPage/views';
import { useEffect, useState } from 'react';

function App() {
  const [home, setHome] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0);
  let location = useLocation()
  useEffect(() => {
    if (location.pathname != "/" || scrollPosition > 50) {
      return setHome(true)
    }
    return setHome(false)
  }, [location, scrollPosition])
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (

    <DatabaseState>
      <div className="App">
        <NavBar isInMainPage={home} />
        <Routes>
          <Route path='' element={
            <MainPage />} />
          <Route path='/events/:id' element={
            <EventPage />} />
        </Routes>
        <Footer id="contacts" />
      </div>
    </DatabaseState>
  );
}

export default App;
