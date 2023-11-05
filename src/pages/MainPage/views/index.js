import React from 'react'
import Home from './fragments/Home/views'
import About from './fragments/About/views'
import LegacyNWhy from './fragments/LegacyNWhy/views'
import PreEvents from './fragments/PreEvents/views'
import Events from './fragments/Events/views'
import Sponsors from './fragments/Sponsors/views'
import Maps from './fragments/Maps/views'
import QnA from './fragments/QnA/views'

export default function MainPage() {
    return (
        <div
            className='MainPage'
        >
            <Home />
            <About />
            <LegacyNWhy />
            <PreEvents />
            <Events />
            <Sponsors />
            <QnA />
            <Maps />
        </div>
    )
}
