import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designing Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating Prototype</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Testing Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Proper Structuring/Labelling</p>
            </li>
            
              
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Front-End Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Back-End Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Full stact Developer(All layer)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Build sites according to client needs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Troubleshoot Websites</p>
            </li>
            
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Creating Content to match customer interest.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Writing and reviewing content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimize Search Engine Optimization</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Monitoring increase in Web traffic. </p>
            </li>
            
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services