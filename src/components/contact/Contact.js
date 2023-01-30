import React from 'react';
import './contact.css';
import {MdOutlineMail} from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ii1odcp', 'template_a7k2d3q', form.current, 'G6r3OYUBd0YbuR4Pf')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        e.target.reset();
    };

    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>klolage@usc.edu</h5>
                        <a href='mailto:klolage@usc.edu' target='_blank'>Send An Email</a>
                    </article>
                    <article className='contact__option'>
                        <MdOutlineMail className='contact__option-icon' />
                        <h4>LinkedIn</h4>
                        <a href='https://www.linkedin.com/in/klolage234/'>Connect with Me</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='5' placeholder='Your Message' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contact