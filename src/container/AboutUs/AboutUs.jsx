import React from 'react';


import {images} from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about' >
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt=""/>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="" className='spoon__img' />
        <p className='p__opensans'>Arusuvaai is not just a restaurant; it is a manifestation of our deep-rooted passion for preserving and promoting the rich culinary heritage of Tamil Nadu. Founded in 2022, our vision was to create a haven where the timeless flavors of Tamil tradition could be relished by locals and visitors alike.Inspired by the vibrant culture and diverse regional influences, Arusuvaai is a celebration of the art of cooking that has been passed down through generations. Our founder, <b>POORANI TAMILVASAN</b>, envisioned a place where people could experience the authentic tastes of Tamil Nadu's traditional dishes, keeping the soul of the cuisine intact while embracing the modern culinary techniques.We extend a warm welcome to all who seek to indulge in the flavors of Tamil tradition. Join us at Arusuvaai, and let your taste buds embark on a remarkable journey through the captivating world of authentic Tamil cuisine. </p>
     <button type='button' className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife  flex__center'>
        <img src={images.knife} alt="knife" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>History</h1>
        <img src={images.spoon} alt="" className='spoon__img' />
        <p className='p__opensans'> Flavors of Tradition is steeped in the rich cultural tapestry of Tamil Nadu. The restaurant was established in 2022 by <b>POORANI TAMILVASAN</b>, a passionate individual who shared a deep love for their Tamil heritage and its culinary treasures.The journey of Arusuvaai began with the founder's desire to create a unique dining experience that would showcase the diverse and authentic flavors of Tamil Nadu's traditional cuisine. she envisioned a place where locals and visitors alike could savor the age-old recipes that had been cherished by Tamil families for generations. Arusuvaai stands as a testament to the rich heritage of Tamil Nadu's culinary artistry. It continues to be a place where cherished recipes are transformed into memorable experiences for all who step through its doors. As the restaurant continues its journey, it remains dedicated to preserving the authentic taste of Tamil culture .</p>
     <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
