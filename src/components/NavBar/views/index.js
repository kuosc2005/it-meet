import React, { useState, useEffect } from 'react';
import Logo from '../../../assets/png/logo/dark (D)/logo_dark_main.png';
import data from '../data/index.json';
import { Link } from 'react-router-dom';
import './NavBar.sass';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ isInMainPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setIsMenuOpen(true);
    });
  });
  const [navActive, setNavActive] = useState(' ');
  const navigate = useNavigate();
  return (
    <div className={`${isMenuOpen ? '' : 'active'} NavBar`}>
      {isInMainPage ? (
        <div className='image'>
          <img
            src={Logo}
            alt='IT meet logo'
            onClick={() => {
              navigate('/#');
            }}
          />
        </div>
      ) : null}
      <div className='contents'>
        {data.map((val, index) => {
          return (
            <a href={val.link} key={index}>
              <p>{val.title}</p>
            </a>
          );
        })}
      </div>
      <div
        className={isMenuOpen ? 'burger' : 'burger close'}
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <span className='line s1' />
        <span className='line s2' />
        <span className='line s3' />
      </div>
    </div>
  );
}
