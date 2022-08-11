import React from 'react'
import './about.css'
import ME from '../../assets/IMG-9456.jpg';
import {FaAward} from 'react-icons/fa';
import {HiUsers} from 'react-icons/hi';
import {AiOutlineFolderOpen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
       <div className="container about__container">
        <div className="about__me">
         <div className="about__me-image">
           <img src={ME} alt="Manik" />
         </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1 year of experience</small>
          </article>
          <article className='about__card'>
            <HiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>5 clients</small>
          </article>
          <article className='about__card'>
            <AiOutlineFolderOpen className='about__icon'/>
            <h5>Projects</h5>
            <small>7+ completed</small>
          </article>
        </div>
        <p>
          Hi I am Manik Adhikari. I am a recent graduate from Federation University Australia. I specialize in software engineering. I am looking for a job as a software developer / web developer. I also have certification in AWS Cloud Practioner as I am interested in cloud computing and AWS services. 
        </p>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>

    </section>
  )
}

export default About