import React from 'react'
import TitleLine from '../../../../../../components/TitleLine'
import './Sponsors.sass'
import { Link } from 'react-router-dom'

export default function Sponsors() {
    return (
        <div className='Sponsors margin-center'>
            <div className='title'>
                <h1>Our sponsors</h1>
                <TitleLine />
            </div>
            <div className='sponsorList'>

            </div>
            <div className='becomeSponsor'>
                <h2 style={{ color: "var(--mid-grey)" }}>Become a sponsor</h2>
                <p>Email us at</p>
                <p>
                    <Link to="/"><strong>itmeet@ku.edu.np</strong></Link >
                </p>
            </div>
        </div>
    )
}
