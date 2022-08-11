import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/hotel.PNG';
import IMG2 from '../../assets/news.PNG';
import IMG3 from '../../assets/api.PNG';
import IMG4 from '../../assets/game.PNG'




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>This is a portfolio item</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target= '_blank'> Hotel Website</a>
            <a href="https://manik-hotelwebsite.netlify.app/
" className='btn btn-primary' target= '_blank'> Live Demo</a>
            </div>
        </article>
        <article className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>This is a portfolio item</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target= '_blank'> News Website</a>
            <a href="https://news-website-manik.netlify.app/
" className='btn btn-primary' target= '_blank'> Live Demo</a>

            </div>
        </article>
        <article className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>This is a portfolio item</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target= '_blank'> Accounting Website</a>
            <a href="https://edge-ledger-05e874.netlify.app/
" className='btn btn-primary' target= '_blank'> Live Demo</a>
            </div>
            
        </article>
        <article className='portfolio__items'>
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
            <h3>This is a portfolio item</h3>
            <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn' target= '_blank'> Game Guesser</a>
            <a href=" https://guess-game-manik.netlify.app/
" className='btn btn-primary' target= '_blank'> Live Demo</a>

            </div>
            
          

        </article>
      </div>
    </section>
  )
}

export default Portfolio