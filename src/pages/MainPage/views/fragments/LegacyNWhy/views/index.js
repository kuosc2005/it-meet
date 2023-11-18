import React from 'react';
import TitleLine from '../../../../../../components/TitleLine';
import legacy from '../../../../../../assets/legacy.svg';
import bro from '../../../../../../assets/bro.svg';
import data from '../data/index.json';
import './LegacyNWhy.sass';

export default function LegacyNWhy() {
  return (
    <div className='LegacyNWhy margin-center'>
      <div className='Legacy'>
        <div className='title'>
          <h1>Our legacy</h1>
          <TitleLine />
        </div>
        <img src={legacy} alt='' />
      </div>
      <div className='Why'>
        <div className='title'>
          <h1>Why IT Meet?</h1>
          <TitleLine />
        </div>
        <div className='contents'>
          <img src={bro} alt='' />
          <div className='points'>
            {data.why.map((val, index) => (
              <div className='whyPoints' key={index}>
                <span className='triangle' />
                <p>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
