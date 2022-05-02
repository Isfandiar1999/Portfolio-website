import React from 'react'
import "./header.css"
import CTA from "./CTA"
// import ME from "../../assets/mee.jpg"
import ME from "../../assets/ispan.jpg"
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Salam, mən</h5>
        <h1>Poladov Isfendiyar</h1>
        <h5 className='text-light'>Front-End Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt="me)" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header