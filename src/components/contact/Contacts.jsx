import React from 'react'
import "./contacts.css"
import {GrMail} from "react-icons/gr"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
// import emailjs from "emailjs-com"
import emailjs from '@emailjs/browser'

const Contacts = () => {
  
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();



    emailjs.sendForm('service_fsl19lq', 'template_4gd3gn6', form.current, 'H3EsAbGzvKWt2NvTU')
      .then((result) => {
          // console.log(result.text);
          alert("Mesaj gonderildi")
      }, (error) => {
          // console.log(error.text);
          alert(error.text)
      });

      e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Menimle elaqe saxlaya</h5>
      <h2>Bilersiniz</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <GrMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>isfendiyarpoladov@gmail.com</h5>
            <a href="mailto:isfendiyarpoladov@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Poladov(a) Isfendiyar(Aygun)</h5>
            <a href="https://m.me/aygun.poladova.334" target="_blank">Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+994705921810</h5>
            <a href="https://api.whatsapp.com/send?phone=0705921810" target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contacts