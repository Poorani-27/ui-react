import React from 'react';
import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      < SubHeading title="Tamil Cultural Essence" />
      <h1 className='app__header-h1'>Restaurant of Traditional Delights</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>Step into a culinary journey that celebrates the rich heritage of Tamil Nadu's traditional cuisine. Arusuvaai is more than just a restaurant; it is a portal to the soul-stirring flavors that have been passed down through generations. Situated in the heart of the city, our restaurant is a humble ode to the culinary treasures of the Tamil culture.</p>
      <button type='button' className='custom__button'> Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
  <img src={images.welcome} alt=""  style={{borderRadius:"30px", border:"2px solid blueviolet"}}/>
    </div>
  </div>
);

export default Header;
