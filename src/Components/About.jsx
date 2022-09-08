import React from 'react';
import imgAbout from '../images/home__about.png'

function About() {
  return (
    <section id='about'>
      <div className='about-image'>
        <img src={imgAbout} alt="man exercising" />
      </div>
      <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quae iste sit, delectus quidem, natus saepe beatae obcaecati adipisci, officia dolorem architecto qui rem laudantium.</p>
        <button>READ MORE</button>
      </div>
    </section>
  );
}

export default About;
