import React from 'react'
import Logo from '../../../assets/png/logo/dark (D)/logo_dark_main.png'
import data from '../data/index.json'
import { Link } from 'react-router-dom'
import './NavBar.sass'
import { useNavigate } from 'react-router-dom'

export default function NavBar
    ({ isInMainPage }) {
    const navigate = useNavigate()
    return (
        <div className="NavBar" >
            {isInMainPage ? <div className='image'>
                <img src={Logo} alt='IT meet logo' onClick={() => {
                    navigate("/")
                }} />
            </div> : null}
            <div className='contents'>
                {data.map(val => {
                    return (
                        <Link to={val.link}>
                            <p>{val.title}</p>
                        </Link>
                    )
                })}
            </div>
        </div >
    )
}
