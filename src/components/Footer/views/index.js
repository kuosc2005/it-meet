import React from 'react'
import './Footer.sass'
import logo from '../../../assets/svg/logo/dark (D)/logo_dark_main.svg'
import data from '../data/index.json'
import location from '../../../assets/location.svg'
import mail from '../../../assets/mail.svg'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='contents'>
                <div className='logo'>
                    <img src={logo} alt='It meet logo' />
                </div>
                <div className='contacts'>
                    <h3 className='contacts'>Contact us</h3>
                    <div className='post'>
                        {data.contacts.map(val => (
                            <div>
                                <p className='name'>{val.name}</p>
                                <p>{val.post}</p>
                                <p>{val.of}</p>
                                <p>{val.contact}</p>
                            </div>
                        ))}
                    </div>
                    <div className='add'>
                        <img src={location} />
                        <p>Kathmandu University,<br />
                            Dhulikhel, Kavre</p>
                    </div>
                    <div className='add'>
                        <img src={mail} />
                        <p>itmeet@ku.edu.np</p>
                    </div>

                </div>
                <div className='guidelines'>
                    <p>Brand guidelines</p>
                    <p>Brand assets</p>
                    <p className='followus'>Follow us on</p>
                    <div className='icons'>
                        {data.socials.map(val => (
                            <img src={require(`../../../assets/${val.name}.svg`)} />
                        ))}
                    </div>
                    <p className='gos'>#geekoutinstyle</p>
                </div>
            </div>
            <p>
                Copyright © 2023 IT Meet. All rights reserved.
            </p>
        </div>
    )
}
