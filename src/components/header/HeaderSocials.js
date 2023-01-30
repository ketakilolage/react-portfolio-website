import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://www.linkedin.com/in/klolage234/' target='_blank'><BsLinkedin/></a>
            <a href='https://github.com/ketakilolage' target='_blank'><BsGithub/></a>
        </div>
    )
}

export default HeaderSocials