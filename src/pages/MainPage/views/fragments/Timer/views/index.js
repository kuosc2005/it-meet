import React from 'react'
import "./Timer.sass"
import TitleLine from '../../../../../../components/TitleLine'
import { useTimer } from '../hooks'
export default function Timer() {
    const { time } = useTimer()
    return (
        <div className='Timer'>
            <div className='box'>
                <h2>See you in</h2>
                <TitleLine />
                <div className='timer'>
                    <div className="date" >
                        <p className="value">{time.days < 10 ? "0" + time.days : time.days}</p>
                        <p>days</p>
                    </div>
                    <div className="date" >
                        <p className="value">{time.hours < 10 ? "0" + time.hours : time.hours}</p>
                        <p>hours</p>
                    </div>
                    <div className="date" >
                        <p className="value">{time.minutes < 10 ? "0" + time.minutes : time.minutes}</p>
                        <p>minutes</p>
                    </div>
                    <div className="date" >
                        <p className="value">{time.seconds < 10 ? "0" + time.seconds : time.seconds}</p>
                        <p>seconds</p>
                    </div>

                </div>

                <div className='border' />
            </div>
        </div>
    )
}
