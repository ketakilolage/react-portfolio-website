import React from 'react';
import './footer.css';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <a href='#' className='footer__logo'>Ketaki Lolage</a>

            <div className='footer__copyright'>
                <small>&copy; Ketaki Lolage. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer