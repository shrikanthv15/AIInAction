import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import EventPage from './EventPage';
import './HomePage.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import { Helmet } from 'react-helmet';
import SpeakerPage from './SpeakerPage';
import AboutUs from './AboutUs';
const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation (in milliseconds)
      once: false, // Set to true if you want the animation to occur only once
    });
  }, []);
 
  return (
    <div className='HomePage'>
<Helmet>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
<link
  href="https://fonts.googleapis.com/css2?family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
/>
{/* Add more font links if needed */}
</Helmet>

<div className='firstdiv'>
<div className='blackbg'>
<div className='genai'>
  <h1 className="gen" data-aos="fade-left" data-aos-duration='2500' >ACT</h1>
  <h1 className="era" data-aos="fade-down" data-aos-delay='500' data-aos-duration='2500'>ION</h1>
  <h1 className="tive" data-aos="fade-up" data-aos-duration='2500' data-aos-delay='1000'>&nbsp;IN</h1>
  <h2 className="ai" data-aos="fade-left" data-aos-duration='2500'data-aos-delay='1500'>AI</h2>
</div>

</div>
<div className='textbg'>
  <h1 className='title'>UNLEASHING CREATIVITY THROUGH AI </h1>
<h3 className='para'>AI is the inflection point in the ongoing technological revolution.

The use of AI is projected to unlock $16 trillion in productivity by 2030.

AI has the potential to bring enormous positive value.

Weaving AI into personal and organisational productivity is necessary for survival.

Businesses struggle with complexities of bringing AI initiatives to fruition.

94% of business leaders surveyed in 2022 say AI is critical to success.

AI tools if mastered early can give you an edge in this transformational era.</h3>
</div>
</div>
<div className='flexing'><EventPage/>
</div>
<div className='speakerpage'>
  <SpeakerPage/>
</div>
<div className='aboutus'>
  <AboutUs/>
</div>
</div>

);
}

export default HomePage;