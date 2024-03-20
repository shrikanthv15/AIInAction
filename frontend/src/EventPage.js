import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './EventPage.css';
import './tick.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
const EventPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation (in milliseconds)
      once: false, // Set to true if you want the animation to occur only once
    });
  }, []);
  
 
  return (
    
    <div className="EventPage">
    
     
    <div className='overview' data-aos="fade-up">
  <div className='eventimg' data-aos="fade-right"></div>
  <div className='eventtext' data-aos="fade-right">

        <h1 style={{ fontSize: "79px", marginLeft: '-0.3%' }}><strong>Event Overview</strong></h1>
        <h3  className='.anta-regular' style={{color: "grey", fontSize: "22px"}}>We bring to you an AI action packed day to London on 15th of April 2024 
        to get you to master the AI techniques, learn about AI 
        use cases and meet AI focused London startups and investors.</h3>
        </div>
        </div>
        <button class="learn-more">
  <span class="circle" aria-hidden="true">
  <span class="icon arrow"></span>
  </span>
  <span class="button-text">&nbsp;&nbsp; View Schedule</span>
</button>
      <div className='texts'>
        <div data-aos="fade-up"  className='textsforevent'>
          <h1>Join us for a 4-hour interactive workshop designed to introduce professionals from diverse industries to the transformative power of AI-driven tools for practical business use.</h1>
        <br></br>
        <h2>During the workshop delivered by Arifa Khan and Mark Turrell, you will:</h2>
        <ul>
        <p>Discover real-world practical examples of AI in action, such as creating proposals, developing business and communications plans, and crafting marketing materials.</p>
        <p>Experiment with cutting-edge generative tools like ChatGPT, Midjourney and others to enhance efficiency, creativity, and decision-making in day-to-day operations.</p>
        <p>Participate in guided practice and real-world applications, using the tools yourself to gain hands-on experience.</p>
        <p>Connect with like-minded professionals and continue the conversation beyond the workshop in our AI in Action online community.</p>
        <p>Don’t miss out on this opportunity to join us and experience the magic of AI and creativity. Take the first step toward a future where intelligent tools become an integral part of your success story.</p>
        <p>In addition, we will also be discussing some other exciting tools during the workshop such as 10Web, Durable, Mixo, Perplexity, Consensus.</p>
        </ul>
       </div>
</div>


      </div>
         
            
       
       
  );
}

export default EventPage;