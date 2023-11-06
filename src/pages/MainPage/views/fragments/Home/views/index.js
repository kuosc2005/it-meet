import React from 'react'
import './Home.sass'
import logo from '../../../../../../assets/svg/logo/dark (D)/logo_dark_slogan_vertical.svg'
import icons from '../../../../../../assets/p1icons.svg'
import charcater from '../../../../../../assets/p1character.png'
import ellipse from '../../../../../../assets/ellips.png'
import Timer from '../../Timer/views'

export default function Home() {
    return (
        <>
            <div className='Home'>
                <div className='logo'>
                    <img src={logo} alt='Logo' />
                </div>
                <div className='contents'>
                    <div>
                        <h1>Decmeber</h1>
                        <h1 className='date'>3 & 4</h1>
                    </div>
                    <div>
                        <h3><span className='at'>@</span> Kathmandu University</h3>
                        <p>Dhulikhel, Kavrepalanchok</p>
                    </div>
                </div>
                <img src={ellipse} className='ellipse' />
                <div className='absolutes'>
                    <img className='icons' src={icons} />
                    <img className='character' src={charcater} />
                </div>
                <Timer />
            </div>
        </>
    )
}
