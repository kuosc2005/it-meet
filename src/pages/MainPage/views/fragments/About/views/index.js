import React from 'react'
import TitleLine from '../../../../../../components/TitleLine'
import "./About.sass"
import data from '../data/index.json'
import logo from '../../../../../../assets/png/logo/light (L)/logo_light_main.png'

export default function About() {
    return (
        <div className='About'>
            <div className='title'>
                <h1>About IT Meet</h1>
                <TitleLine />
            </div>
            <div className='contents'>
                <p className='description'>
                    {
                        (
                            <span style={{ color: "var(--primary-green)" }}>
                                {data.description.split(" ").slice(0, 2).join(" ")}
                            </span>)
                    }

                    {" " + data.description.split(" ").slice(2).join(" ")}
                </p>
                <img className='image' src={logo} alt='IT Meet Logo' />
            </div>
        </div>
    )
}
