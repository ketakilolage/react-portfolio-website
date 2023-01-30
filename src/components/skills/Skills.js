import React from 'react';
import './skills.css';
import {HiShieldCheck} from 'react-icons/hi';

const Skills = () => {
    return (
        <section id='skills'>
            <h5>How I Rank</h5>
            <h2>My Skills</h2>
            <div className='container skills__container'>
                <div className='skills__backend'>
                <h5>Backend Development</h5>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <HiShieldCheck className='skills__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light'>Advanced</small>     
                            </div>
                        </article>
                        <article className='skills__details'>
                            <HiShieldCheck className='skills__details-icon' />
                            <div>
                                <h4>SQL</h4>
                                <small className='text-light'>Advanced</small>     
                            </div>
                        </article>
                        <article className='skills__details'>
                            <HiShieldCheck className='skills__details-icon' />
                            <div>
                                <h4>Java</h4>
                                <small className='text-light'>Advanced</small>     
                            </div>
                        </article>
                        <article className='skills__details'>
                            <HiShieldCheck className='skills__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Advanced</small>     
                            </div>
                        </article>
                        <article className='skills__details'>
                            <HiShieldCheck className='skills__details-icon' />
                            <div>
                                <h4>Docker</h4>
                                <small className='text-light'>Intermediate</small>     
                            </div>
                        </article>
                        <article className='skills__details'>
                            <HiShieldCheck className='skills__details-icon' />
                            <div>
                                <h4>Git</h4>
                                <small className='text-light'>Intermediate</small>     
                            </div>
                        </article>
                    </div>
                    
                </div>

                <div className='skills__frontend'>
                    <h5>Frontend Development</h5>
                    <div className='skills__content'>
                        <article className='skills__details'>
                            <HiShieldCheck className='skills__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>     
                            </div>
                        </article>
                        <article className='skills__details'>
                            <HiShieldCheck className='skills__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Advanced</small>     
                            </div>
                        </article>
                        <article className='skills__details'>
                            <HiShieldCheck className='skills__details-icon' />
                            <div>                            
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>     
                            </div>
                        </article>
                        <article className='skills__details'>
                            <HiShieldCheck className='skills__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light'>Beginner</small>     
                            </div>
                        </article>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default Skills