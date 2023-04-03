import React from "react"
import './header.css'
import "../../index.css"
import CTA from './CTA'
import ME from '../../assets/me.png'
import Headersocial from './HeaderSocial'

const Header = () => {
    return (
    <header>

    <div class="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kemmie Mtagwaba</h1>
        <h5 className="text-light"> Full Stack Developer</h5>
<CTA/>
<Headersocial/>
<div className="me">
    <img src= {ME} alt="me"/>
</div>
<a href="#contact" className='scroll__down'>ScrollDown</a>
</div>
    </header>
    )
}
export default Header
