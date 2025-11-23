import { useEvents } from '@/components/custom/EventContext';
import MainEventPage from '@/components/custom/Main-eventPage';
import PreEventPage from '@/components/custom/Pre-eventPage';
import EventList from '@/components/custom/EventList';
import Banner from '@/components/custom/Banner';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';


const Events = () => {
  const { mainEvents, preEvents, listEvents } = useEvents();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div className="flex flex-col overflow-hidden p-10 py-20 lg:px-20 gap-8 items-center justify-center min-h-screen bg-[#171A23]">
      <div className="space-y-4 md:space-y-8">
        <Banner />
        <EventList events={listEvents} />
        <PreEventPage events={preEvents} />
        <MainEventPage events={mainEvents} />
      </div>
    </div>
  );
};

export default Events;