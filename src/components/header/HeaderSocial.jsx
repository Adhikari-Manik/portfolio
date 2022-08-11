import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {BsFacebook} from 'react-icons/bs';



const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target = '_blank' ><BsLinkedin/></a>
        <a href="http://github.com" target = '_blank' > <FaGithub/></a>
        <a href="http://facebook.com" target = '_blank' ><BsFacebook/></a>


    </div>
  )
}

export default HeaderSocial