import React from 'react'
import FAQItem from './components/FAQItem'
import './QnA.sass'
import useFAQ from '../hooks/useFAQ'

export default function QnA() {
    const { qna } = useFAQ()
    return (
        <div className='QnA margin-center'>
            <div className='faq box'>
                <h2>Frequently Asked Questions</h2>
                {qna.map(val => (<FAQItem question={val.question} answer={val.answer} />))}
            </div>
            <div className="haveQuestions box">
                <h2>Have questions? Let’s talk.</h2>
                <div className='onei'>

                    <div className='input'>
                        <p>Full name*</p>
                        <input required placeholder="Type your name" />
                    </div>
                    <div className='input'>
                        <p>Your email address*</p>
                        <input color='secondary'
                            required placeholder="Type your email address" />
                    </div>
                </div>
                <div className='input'>
                    <p>Your message*</p>
                    <input placeholder="Type your message" />
                </div>
                <button className='submit'>Submit</button>
            </div>
        </div>
    )
}
