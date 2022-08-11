import React from 'react'
import './header.css';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import ME from '../../assets/IMG_5497.JPG';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h2>Manik Adhikari</h2>
        <h5 className='text-light'>FullStack Developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
            <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'> Scroll Down </a>
      </div>
    </header>
  )
}

export default Header