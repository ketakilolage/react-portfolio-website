import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpeg';
import {MdWorkOutline} from 'react-icons/md';
import {BsCodeSlash} from 'react-icons/bs';
import {HiUserGroup} from 'react-icons/hi';

const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='About Me Image' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <MdWorkOutline className='about__icon'/>
                            <h5>Experience</h5>
                            <small>2+ Years in Software Engineering</small>
                        </article>

                        <article className='about__card'>
                            <BsCodeSlash className='about__icon'/>
                            <h5>Education</h5>
                            <small>University of Southern California</small>
                            <small>Master of Science in Computer Science, May 2023</small>
                        </article>

                    </div>

                    <p>
                        I am a Software Engineering professional 
                        with a penchant for scalable backend design,
                        RESTful microservice architecture and machine learning.
                    </p>
                    <p> I am currently looking for an opportunity to demonstrate my strengths
                        in these domains, and help organizations build impactful products and services.
                    </p>

                    <a href='#contact' className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About