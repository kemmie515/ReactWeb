import React from "react"
import './contact.css'
import "../../index.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
    const form =useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_q05cn5d', 'template_3eh58nn', form.current, 'q5InsB6ALNrS4-Bss')
          e.target.reset()
      };
 return (
 <section id="contact">
    <h5>Get In Touch</h5>
<h2>Contact  Me</h2>

<div className="container contact__container">
<div className="contact__options">
<article className="contact__option">
<MdOutlineEmail className="contact__option-icon"/>
<h4>Email</h4>
<h5>dummyegatory@gmail.com</h5>
<a href="mailto:contact@gmail.com" target="blank">Send a mail</a>
</article>

<article className="contact__option">
<RiMessengerLine className="contact__option-icon"/>
<h4>Messenger</h4>
<h5>Kemmie tuitorials</h5>
<a href="https://m.me/kemmie" target="blank">Send a messeage</a>
</article>

<article className="contact__option">
<BsWhatsapp className="contact__option-icon"/>
<h4>WhatsApp</h4>
<h5>0734945354</h5>
<a href="https://api.whatsapp.com/send?phone+255734945354" target="blank">Send a mail</a>
</article>
</div>
<form ref={form} onSubmit={sendEmail}>
    <input type="text" name="name" placeholder="Your Full Name" required />
    <input type="email" name="email" placeholder="Your Email" required />
<textarea name="message" row="7" placeholder="Your Message" required></textarea>
<button type="submit" className="btn btn-primary">Send Message</button>
</form>
</div>
 </section>
 )
}
export default Contact