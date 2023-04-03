// noinspection BadExpressionStatementJS

import React from "react";
import './footer.css';
import "../../index.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
    return (
        <footer>
           <a href="#" className="footer__logo">Egator</a>
           <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experiences">Experience</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#portifolio">Portifolio</a></li>
            <li><a href="#testimonials">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
            </ul> 

            <div className="footer__socials">
                <a href="https://facebook.com"><FaFacebookF/></a>
                <a href="https://instagram.com"><FiInstagram/></a>
                <a href="https://twitter.com"><IoLogoTwitter/></a>
            </div>

            <div className="footer__copyright">
<small>&copy; Egator Tuitorials || All Rights Reserved</small>

            </div>
        </footer>
  
    )
}
export default Footer