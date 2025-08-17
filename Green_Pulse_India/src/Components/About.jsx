

// About.jsx
import React from 'react';
import './About.css'; // Optional: Create this file to style your page
import bg from '../assets/hue.jpg';

const About = () => {
  return (
    <div className="about-page"style={{ backgroundImage: `url(${bg})` }}>
      <header className="about-header">
        <h1>About Green Pulse</h1>
        <p>
          Green Pulse India is dedicated to promoting sustainable planting efforts for a greener future.
        </p>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At Green Pulse, our mission is to empower communities and individuals to take active roles in combating climate change 
          through tree plantation, ecological education, and sustainable practices.
        </p>
        {/* <img src="-mission-image.jpg" alt="Mission" /> */}
      </section>

      <section className="vision-section">
        <h2>Our Vision</h2>
        <p>
          We envision a world where every person contributes to environmental conservation, ensuring a lush, green, and 
          breathable planet for generations to come.
        </p>
        {/* Add vision-related image below */}
        {/* <img src="path-to-your-vision-image.jpg" alt="Vision" /> */}
      </section>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <p>
          Our team is a passionate group of environmentalists, volunteers, and community leaders committed to bringing 
          sustainable change.
        </p>
        {/* You can create team cards or grid here */}
        {/* <img src="path-to-your-team-image.jpg" alt="Team" /> */}
      </section>

      <section className="impact-section">
        <h2>Our Impact</h2>
        <p>
          Since our inception, we have planted over 100,000 trees across various regions in India, 
          partnered with local communities, and conducted over 500 awareness drives.
        </p>
        {/* Optional stats/infographics/image */}
        {/* <img src="path-to-your-impact-image.jpg" alt="Impact" /> */}
      </section>

      
    </div>
  );
};

export default About;
