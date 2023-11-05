import React, { useState } from 'react'
import './FAQItem.sass'
import addIcon from '../../../../../../../../assets/addIcon.svg'

export default function FAQItem({ question, answer }) {
    const [active, setActive] = useState(false)
    return (
        <div className='FAQItem'>
            <div className='heading'>
                <p><strong>{question}</strong></p>
                <img src={addIcon} onClick={() => {
                    setActive(!active)
                }} />
            </div>
            <p className={`answer ${active ? "active" : ""}`}>{answer}</p>

        </div>
    )
}
