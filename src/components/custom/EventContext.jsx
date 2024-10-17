import React, { createContext, useContext, useState } from 'react';

const EventContext = createContext();


export const EventProvider = ({ children }) => {
  const [mainEvents] = useState([
    {
      id: 1,
      imgSrc: '',
      title: 'KU HACKFEST',
      description: 'Lorem ipsum dolor sit amet...',
      formLink: '',
    },
    
  ]);

  const [preEvents] = useState([
    { id: 1, imgSrc: '', title: 'KU HACKFEST' },
    { id: 2, imgSrc: '', title: 'AR TREASURE HUNT' },
    { id: 2, imgSrc: '', title: 'LINE FOLLOWING ROBOT' },
    
  ]);

  const [listEvents] = useState([
    { id: 1, imgSrc: '', title: 'KU HACKFEST', description: '...' },
    { id: 2, imgSrc: '', title: 'EMPOWER HER', description: '...' },
    
  ]);

  return (
    <EventContext.Provider value={{ mainEvents, preEvents, listEvents }}>
      {children}
    </EventContext.Provider>
  );
};


export const useEvents = () => useContext(EventContext);
