import React from 'react'
import "./footer.css"
import {AiFillInstagram} from "react-icons/ai"
import {GrFacebook} from "react-icons/gr"
import {AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>

        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='footer__socials'>
            <a href="https://www.facebook.com/profile.php?id=100001946206375"><GrFacebook/></a>
            <a href="https://www.instagram.com/isfndyr.pldv/"><AiFillInstagram/></a>
            <a href="https://www.linkedin.com/in/isfandiar-poladov-575437228/"><AiFillLinkedin/></a>
        </div>

        <div className='footer__copyright'>
          <small>&copy; Poladov Isfendiyar, portfolio website</small>
        </div>
      
    </footer>
  )
}

export default Footer