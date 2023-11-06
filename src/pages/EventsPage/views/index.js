import { useEvent } from '../hooks/useEvent';
import moment from "moment/moment";
import { useEffect } from 'react';
import './EventPage.sass';
import location from '../../../assets/location-outline.svg'
import time from '../../../assets/time-outline.svg'
import calander from '../../../assets/calendar-outline.svg'

export default function EventPage() {
  const { event } = useEvent()
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='EventPage'>
      <div className='contents'>
        <div className='details'>
          <div className='heading'>
            <h2 >{event[0] ? event[0].title : null}</h2  >
            <div className='eventManager'>{event[0]
              ? event[0].em_name
                ? event[0].em_name.map((value, index) => (
                  <p>
                    {value + " (" + event[0].em_phone[index] + ") "}
                  </p>
                ))
                : null
              : null}</div>
          </div>

          <div className='description'>
            {event[0] ? event[0].description : null}
          </div>
          <br />
          <div className='registration-info'>
            {event[0] ? event[0].registration_fee ?
              <p>
                {"Registration Fee: Rs. " + event[0].registration_fee}
              </p> : null
              : null}
            <br />
            {`Application Deadline : ${event[0]
              ? moment(event[0].date_time)
                .utcOffset("+0545")
                .format("YYYY/MM/DD kk:mm:ss")
              : null}`}
          </div>
        </div>
        <div className='img-container'>
          <img src={event[0] ? event[0].photo : null} alt={event[0] ? event[0].title : null} />
          <p >
            Apply Now
          </p>
        </div>
      </div>
      <div className='more-info'>
        <div className='locationPrize'>
          <div className='location'>
            <div className='row'>
              <img style={{ color: 'black' }} src={location} alt='icon' />
              <p>
                {event[0] ? event[0].venue : null}
              </p>
            </div>
            <div className='row'>
              <img style={{ color: 'black' }} src={time} alt='icon' />
              <p>
                {event[0] ? moment(event[0].date_time)
                  .utcOffset("+0545")
                  .format("YYYY/MM/DD") : null}
              </p>
            </div>
            <div className='row'>
              <img style={{ color: 'black' }} src={time} alt='icon' />
              <p>
                {event[0] ? moment(event[0].date_time)
                  .utcOffset("+0545")
                  .format("kk:mm:ss") + " onwards" : null}
              </p>
            </div>
          </div>
          {event[0] ? (
            event[0].prizepool ? (
              <div className='prize'>
                <h3>Prize Pool</h3>
                <h4>RS. 32000</h4>
                <h5>
                  <strong>Prize Pool:</strong> {event[0].prizepool}
                </h5>
              </div>
            ) : null
          ) : null}</div>
      </div>
    </div>
  );
}
