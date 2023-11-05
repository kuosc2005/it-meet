import React from 'react'
import TitleLine from '../../../../../../components/TitleLine'
import './PreEvents.sass'
import Slider from '../../../../../../components/Slider'

import { usePreEvents } from '../hooks'
import SliderItem from '../../../../../../components/SliderItem/views'

export default function PreEvents() {
    const { preEvents } = usePreEvents()
    return (
        <div className='PreEvents margin-center'>
            <div className='title'>
                <h1>Pre-events</h1>
                <TitleLine />
            </div>
            <div className='carousel'>
                <Slider >
                    {
                        preEvents.map((element, index) => {
                            return (
                                <SliderItem id={element.$id} key={index} title={element.title} description={element.description} src={element.photo} />
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}
