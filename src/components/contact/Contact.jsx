import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6bghp4l', 'template_kd223fd', form.current, 'kb4kx7IZddDZTNp-e')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
           <article className="contact__option">
             <AiOutlineMail className='contact__option-icon'/>
             <h4>Email</h4>
             <h5>manikadhikari10@gmail.com</h5>
             <a href="mailto:manikadhikari10@gmail.com" target='_blank'>Send me a message</a>
           </article>
           <article className="contact__option">
             <AiFillLinkedin className='contact__option-icon'/>
             <h4>LinkedIn</h4>
             <h5>Manik Adhikari</h5>
             <a href="https://www.linkedin.com/in/manik-adhikari-554284177/" target='_blank'>Send me a message</a>
           </article>
           <article className="contact__option">
             <FaWhatsapp className='contact__option-icon'/>
             <h4>Whats App</h4>
             <h5>manikadhikari10@gmail.com</h5>
             <a href="https://api.whatsapp.com/send?phone=+61452168125" target='_blank'>Send me a message</a>
           </article>
        </div>
        {/*End of COntact */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="name" placeholder='Your Full Name' required />
          <input type="email" placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact