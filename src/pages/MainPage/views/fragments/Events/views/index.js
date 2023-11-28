import React from 'react';
import TitleLine from '../../../../../../components/TitleLine';
import './Grid.sass'

import { useEvents } from '../hooks';
import GridItem from '../../../../../../components/GridItem/views';

export default function Events() {
  const { event } = useEvents();

  return (
    <div className='PreEvents margin-center'>
      <div className='title'>
        <h1>Events</h1>
        <TitleLine />
      </div>
      <div class="Grid">
          {event.map((element, index) => {
            return (
              <GridItem
                id={element.$id}
                key={index}
                title={element.title}
                description={element.description}
                src={element.photo}
              />
            );
          })}
      </div>
    </div>
  );
}
