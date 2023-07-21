import React from 'react';
import { SubHeading } from '../../components';
import { images} from '../../constants'
const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='#contact'>
    <div className='app__wrapper_info'>
      <SubHeading title="contact"/>
      <h1 className='headtext__cormorant' style={{marginBottom:"3rem"}}> Find Us</h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'> No 2/17 , Koratti, Slem Tirupattur Highway, Tirupattur - 635 602</p>
        <p className='p__cormorant' style={{color:"blueviolet", margin:"2rem 0"}}> Oening Hours</p>
        <p className='p__opensans'> Mon - Fri: 10:00 AM - 6:00 PM </p>
        <p className='p__opensans'> Sat - Snn: !0:00 AM - 8:00 PM</p>
      </div>
      <button type='button' className='custom__button'> Visit Us</button>
  </div>
  <div className='app__wrapper_img'>
    <img src={images.findus} alt="" />
  </div>
  </div>
);

export default FindUs;
