import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SpeakerPage.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const SpeakerPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation (in milliseconds)
      once: false, // Set to true if you want the animation to occur only once
    });
  }, []);


 
  return (

    <div className='SpeakerPage'>
       <div className='speakertitle' >
        <h1>Our Speakers</h1>
       </div>
       <div>
       <div style={{ display: "flex", width: "100%", height: '100%',justifyContent: "center", marginLeft: "10%" }}>
         
          <div style={{ width: "100%", height: '100%' }}>
          <div className="pastspeakers" style={{width: "5%",height: '10%', backgroundImage: 'url("https://www.smileexpo.eu/public/upload/news/i_wanted_to_change_the_status_quo_with_blockchain_the_story__15422850079828_image.jpg")'}} data-aos="fade-up">
          
          </div>
          <h5
          data-aos="fade-up"
             style={{
                position: 'absolute',
                left: '15%',
                top: "45%",
                fontSize: '100%',
                color: 'rgb(111, 47, 109)',
                
              }}
            className="wixui-rich-text__text"

          >
            Arifa Khan
          </h5>
          </div>
      
        </div>
       </div>
    </div>
    
);
}

export default SpeakerPage;