import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation (in milliseconds)
      once: false, // Set to true if you want the animation to occur only once
    });
  }, []);


 
  return (

    <div className='AboutUsPage'>
      <div className='aboutustitle' data-aos="fade-right">
        <h1>ABOUT US</h1>
      </div>
      <div className='aboutflex'>
        <div className='aufirstdiv'><h1>Address</h1>
        <br></br><h1>London</h1></div>
        <div><h1 className='auseconddiv'>Event Page</h1>
        <a className='colortext'
        
  href="https://lu.ma/embed-checkout/evt-iRMrqUnITisnH4e"
  target="_blank"
  class="luma-checkout--button"
  data-luma-action="checkout"
  data-luma-event-id="evt-ROmHBkswpJbElBK"
  style={{ textDecoration: 'None' ,position: 'absolute', left: "41%", fontSize: "25px", top: "29%" }}
>
  Register for Event
</a>

<script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js"></script></div>
        <div><h1 className='authirddiv'>Contact Us</h1>
        <a target="_blank" href="mailto:shri.vilvadrinath@gmail.com" style={{ color: 'black' }}>  <h1 className='authirddivtext' >Email Us</h1></a>
        </div>
      </div>
    </div>
    
);
}

export default AboutUs;