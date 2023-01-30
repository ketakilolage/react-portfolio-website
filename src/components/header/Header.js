import React from 'react';
import CTA from './CTA';
import ME from '../../assets/me-transparent.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
    return (
        <header>
            <div className='container header__container' id='header'>
                <h5>Hi, my name is</h5>
                <h1>Ketaki Lolage</h1>
                <h5 className='text-light'>I enjoy building products</h5>
                <CTA />
                <HeaderSocials />
                <div className='me'>
                    <img src={ME} alt="me" />
                </div>

                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header