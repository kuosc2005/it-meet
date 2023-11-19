import React from 'react';
import TitleLine from '../../../../../../components/TitleLine';
// import './PreEvents.sass'
import Slider from '../../../../../../components/Slider';

import { useEvents } from '../hooks';
import SliderItem from '../../../../../../components/SliderItem/views';

export default function Events() {
  const { event } = useEvents();

  return (
    <div className='PreEvents margin-center'>
      <div className='title'>
        <h1>Events</h1>
        <TitleLine />
      </div>
      <div className='carousel'>
        <Slider>
          {event.map((element, index) => {
            return (
              <SliderItem
                id={element.$id}
                key={index}
                title={element.title}
                description={element.description}
                src={element.photo}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
