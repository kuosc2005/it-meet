import React, { createContext, useContext, useState } from 'react';
import Bg from '@/assets/images/pngbg.png'

const EventContext = createContext();


export const EventProvider = ({ children }) => {
  const [mainEvents] = useState([
    {
      id: 1,
      imgSrc: 'https://picsum.photos/200/300',
      title: 'KU HACKFEST',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit porta, aliquam nibh eu, fermentum tortor. Suspendisse commodo massa metus, at sodales felis sollicitudin quis.',
      formLink: '',
    },
    
  ]);

  const [preEvents] = useState([
    { id: 1, imgSrc: 'https://picsum.photos/200/300', title: 'KU HACKFEST' },
    { id: 2, imgSrc: 'https://picsum.photos/200/300', title: 'AR TREASURE HUNT' },
    { id: 3, imgSrc: 'https://picsum.photos/200/300', title: 'LINE FOLLOWING ROBOT' },
    
  ]);

  const [listEvents] = useState([
    { id: 1, imgSrc: {Bg}, title: 'KU HACKFEST', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit porta, aliquam nibh eu, fermentum tortor. Suspendisse commodo massa metus, at sodales felis sollicitudin quis.' },
    { id: 2, imgSrc: {Bg}, title: 'EMPOWER HER', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac elit porta, aliquam nibh eu, fermentum tortor. Suspendisse commodo massa metus, at sodales felis sollicitudin quis.' },
    
  ]);

  return (
    <EventContext.Provider value={{ mainEvents, preEvents, listEvents }}>
      {children}
    </EventContext.Provider>
  );
};


export const useEvents = () => useContext(EventContext);
