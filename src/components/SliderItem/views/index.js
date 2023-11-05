import React from 'react'
import './SliderItem.sass'
import { useNavigate } from 'react-router-dom'

export default function SliderItem({ id, key, src, title, description }) {
    const navigate = useNavigate()
    return (
        <div className='SliderItem' key={key} onClick={() => {
            return navigate(`/events/${id}`)
        }}>
            <img src={src} alt={`Event ${key}`} />
            <div className="down-content">
                <h3>{title}</h3>
                <p>
                    {description.split("").splice(0, 100).join("") + "..."}
                </p>

            </div>
        </div>
    )
}
