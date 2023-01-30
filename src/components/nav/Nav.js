import React from 'react';
import {BiHome} from 'react-icons/bi';
import {AiOutlineUser} from 'react-icons/ai';
import {MdWorkOutline} from 'react-icons/md';
import {BsCodeSlash} from 'react-icons/bs';
import {HiUserGroup} from 'react-icons/hi';
import {BiMessageSquareDetail} from 'react-icons/bi';
import './nav.css';
import {useState, useEffect} from 'react';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#header');

    useEffect(() => {
        const handleScroll = () => {
            const headerSection = document.querySelector('#header');
            const aboutSection = document.querySelector('#about');
            const skillsSection = document.querySelector('#skills');
            const portfolioSection = document.querySelector('#portfolio');
            const activitiesSection = document.querySelector('#activities');
            const contactSection = document.querySelector('#contact');

            if (headerSection.getBoundingClientRect().top > 0) {
                setActiveNav('#header');
            }
            else if (aboutSection.getBoundingClientRect().top < window.innerHeight * 0.6 && aboutSection.getBoundingClientRect().top > 0) {
                setActiveNav('#about');
            } else if (skillsSection.getBoundingClientRect().top < window.innerHeight * 0.6 && skillsSection.getBoundingClientRect().top > 0) {
                setActiveNav('#skills');
            } else if (portfolioSection.getBoundingClientRect().top < window.innerHeight * 0.6 && portfolioSection.getBoundingClientRect().top > 0) {
                setActiveNav('#portfolio');
            } else if (activitiesSection.getBoundingClientRect().top < window.innerHeight * 0.6 && activitiesSection.getBoundingClientRect().top > 0) {
                setActiveNav('#activities');
            } else if (contactSection.getBoundingClientRect().top < window.innerHeight * 0.6 && contactSection.getBoundingClientRect().top > 0) {
                setActiveNav('#contact');
            } 

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [setActiveNav]);

    return (
        <nav>
            <a href='#header' onClick={() => setActiveNav("#header")} className={activeNav === '#header'? 'active': ''}><BiHome/></a>
            <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active': ''}><AiOutlineUser/></a>
            <a href='#skills' onClick={() => setActiveNav('#skills')} className={activeNav === '#skills'? 'active': ''}><MdWorkOutline/></a>
            <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio'? 'active': ''}><BsCodeSlash/></a>
            <a href='#activities' onClick={() => setActiveNav('#activities')} className={activeNav === '#activities'? 'active': ''}><HiUserGroup/></a>
            <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active': ''}><BiMessageSquareDetail/></a>
            </nav>
    )
}

export default Nav