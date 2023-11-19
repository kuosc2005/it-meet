import { useEvent } from '../hooks/useEvent';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import './EventPage.sass';
import location from '../../../assets/location-outline.svg';
import time from '../../../assets/time-outline.svg';
import calander from '../../../assets/calendar-outline.svg';
import gold from '../../../assets/gold.svg';
import silver from '../../../assets/silver.svg';
import bronze from '../../../assets/bronze.svg';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';

export default function EventPage() {
  const { event } = useEvent();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <LazyLoad>
      <div className='EventPage'>
        <div className='contents'>
          <div className='details'>
            {event[0] ? (
              <>
                <div className='heading'>
                  <h2>{event[0] ? event[0].title : null}</h2>
                  <div className='eventManager'>
                    {event[0]
                      ? event[0].em_name
                        ? event[0].em_name.map((value, index) => (
                            <p key={index}>
                              {value + ' (' + event[0].em_phone[index] + ') '}
                            </p>
                          ))
                        : null
                      : null}
                  </div>
                </div>
                <div className='description'>
                  {event[0] ? event[0].description : null}
                </div>
                <br />
                <div className='registration-info'>
                  {event[0] ? (
                    event[0].registration_fee ? (
                      <p>
                        {'Registration Fee: Rs. ' + event[0].registration_fee}
                      </p>
                    ) : null
                  ) : null}
                  <br />
                  {`Application deadline : ${moment(event[0]?.registerby)
                    .utcOffset('+0545')
                    .format('YYYY/MM/DD kk:mm:ss')}`}
                </div>
              </>
            ) : (
              <div className='loader'>
                <CircularProgress
                  sx={{ color: '#12dc9f' }}
                  thickness={10}
                  size={100}
                />
              </div>
            )}
          </div>
          <div className='img-container'>
            <img
              src={event[0] ? event[0].photo : null}
              alt={event[0] ? event[0].title : null}
              onLoad={() => setIsLoading(false)}
            />
            <Link
              to={event[0] ? event[0].register : null}
              target='_blank'
              rel='noopener noreferrer'
            >
              Apply Now
            </Link>
            {isLoading && (
              <CircularProgress
                sx={{ color: '#12dc9f', position: 'absolute', zIndex: 90 }}
                thickness={10}
                size={100}
              />
            )}
          </div>
        </div>
        {event[0] && (
          <div className='more-info'>
            <div className='location'>
              <div className='row'>
                <img style={{ color: 'black' }} src={time} alt='icon' />
                <p>
                  {event[0]
                    ? moment(event[0].datetime)
                        .utcOffset('+0545')
                        .format('YYYY/MM/DD')
                    : null}
                </p>
              </div>
              <div className='row'>
                <img style={{ color: 'black' }} src={time} alt='icon' />
                <p>
                  {event[0]
                    ? moment(event[0].datetime)
                        .utcOffset('+0545')
                        .format('kk:mm:ss') + ' onwards'
                    : null}
                </p>
              </div>
              <div className='row'>
                <img style={{ color: 'black' }} src={location} alt='icon' />
                <p>{event[0] ? event[0].venue : null}</p>
              </div>
            </div>
            {event[0] ? (
              event[0].prizepool ? (
                <div className='prize'>
                  <h2>Prize pool</h2>
                  <h3 className='prizepool'>
                    <strong>RS :</strong> {event[0].prizepool}
                  </h3>
                  {event[0].first_prize ? (
                    <div className='prizeElement'>
                      <img src={gold} alt='gold medal' />
                      <h3>Winner : {event[0].first_prize}</h3>
                    </div>
                  ) : null}
                  {event[0].second_prize ? (
                    <div className='prizeElement'>
                      <img src={silver} alt='second medal' />
                      <h4>{'      1st Runner up :' + event[0].second_prize}</h4>
                    </div>
                  ) : null}
                  {event[0].third_prize ? (
                    <div className='prizeElement'>
                      <img src={bronze} alt='bronze medal' />
                      <h5>2nd Runner up : {event[0].third_prize}</h5>
                    </div>
                  ) : null}
                  <div className='border' />
                </div>
              ) : null
            ) : null}
          </div>
        )}
      </div>
    </LazyLoad>
  );
}
