import React from 'react'
import './SponsorItem.sass'

export default function SponsorItem({ tier, title, logo }) {
    return (
        <div className='SponsorItem' style={{
            width:`
            ${
                tier==="gold"?"320px":tier=="silver"?"256px":tier==="bronze"?"200px":"156px"
            }
            `
        }}>
            <img src={logo}/>
            <div>
                <h1>
                    {title}
                </h1>
                <p>{tier}</p>
            </div>
        </div>
    )
}
