
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // custom CSS
import peaceImg from '../assets/peace2.jpg';
import diversityImg from '../assets/DIVERSITYc.jpg';
import envImg from '../assets/env2c.jpg';
import newLogo from '../assets/logo.jpg';  // adjust the path if necessary
import cleanUpImg from '../assets/Clean-Up_Drive.jpg'; 
import ecoWorkshopImg from '../assets/Eco_Awareness_Workshop.avif';
import TreePlantImg from '../assets/Tree_Plantation_Drive.avif';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <Container>
          <h1 className="display-4 text-white">Welcome to Green Pulse India</h1>
          <p className="lead text-white">
            Building a greener tomorrow through awareness, action, and community.
          </p>
          <Link to="/signup">
            <Button className="btn-lg move-down" variant="success">
              Join Us
            </Button>
          </Link>
        </Container>
      </section>

      {/* Foundation Name Section */}
      <div className="container1">
        <h1 className="foundation-name">Green Pulse India</h1>
      </div>

      {/* Mission and Vision Section */}
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            {/* Mission Section */}
            <div id="mission">
              <h5 className="section-title text-success">Our Mission</h5>
              <p>
                At the Green Pulse India, we are more than an organization — we are a movement for change. Founded in 2023,
                we are a national non-profit committed to creating a sustainable future where people and the planet thrive together.
                With innovation, collaboration, and a passion for protecting our world, we are building a better tomorrow, one action at a time.
              </p>
            </div>

            {/* Vision Section */}
            <div id="vision">
              <h5 className="section-title text-success">Our Vision</h5>
              <p>Our vision rests on three interconnected pillars:</p>
              <ul>
                <li><span className="text-success fw-bold">🌿 Environmental Protection</span> – Safeguarding our planet’s natural resources through impactful projects and advocacy.</li>
                <li><span className="text-warning fw-bold">🧡 Diversity & Inclusion</span> – Creating a global network of changemakers, united by their unique perspectives and shared commitment to sustainability.</li>
                <li><span className="text-primary fw-bold">🕊 Peace</span> – Building a world where humans coexist peacefully with nature and each other.</li>
              </ul>
              <p>Through hands-on initiatives, educational programmes, and community-driven events, we empower individuals to take meaningful action and become guardians of the Earth.</p>
            </div>
          </div>

          {/* Logo and Video Section */}
          <div className="col-md-4 text-center">
            <img 
    src={newLogo}  // Use the imported image variable
    alt="Green Pulse India New Logo" 
    className="img-fluid mb-3" 
    style={{ maxWidth: '80%' }} 
  />
            <div className="ratio ratio-16x9">
              <iframe src="https://www.youtube.com/embed/your_video_id" title="Green Pulse India Video" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="events-section py-5 bg-light">
        <Container>
          <h2 className="section-title text-center mb-4">Upcoming Events</h2>
          <div className="row">
            {/* Event Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={TreePlantImg} className="card-img-top" alt="Tree Plantation" />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Tree Plantation Drive</h5>
                  <p className="card-text">Join us to plant trees and make your city greener.</p>
                  <Button variant="success" className="mt-auto">Join</Button>
                </div>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={ecoWorkshopImg} className="card-img-top" alt="Eco Awareness Workshop" />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Eco Awareness Workshop</h5>
                  <p className="card-text">Learn and spread the word about eco-friendly living.</p>
                  <Button variant="success" className="mt-auto">Join</Button>
                </div>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img src={cleanUpImg} className="card-img-top" alt="Cleanup Drive" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Clean-Up Drive</h5>
                  <p className="card-text">Let’s clean our parks and public spaces together.</p>
                  <Button variant="success" className="mt-auto">Join</Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* What We Do Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5">WHAT WE DO</h2>
          <div className="row text-center">
            {/* Environment Protection Card */}
            <div className="col-md-4 col-sm-12 mb-4">
              <div className="card text-bg-success text-white card h-100 shadow-sm mb-3 card-custom-size">
                <div className="card-body">
                 <img src={envImg} className="card-img-fixed img-fluid d-block mx-auto mb-3" alt="Environment Protection" />
                  <h5 className="card-title">ENVIRONMENT PROTECTION</h5>
                  <p className="card-text">
                    At the Green Earth Action Foundation, we are devoted to protecting our planet and fostering universal awareness of environmental issues. Through education, advocacy, and grassroots efforts, we empower communities to embrace sustainable living.
                  </p>
                </div>
              </div>
            </div>

            {/* Diversity and Inclusion Card */}
            <div className="col-md-4 col-sm-12 mb-4">
              <div className="card text-bg-success text-white card h-100 shadow-sm mb-3 card-custom-size">
                <div className="card-body">
                 <img src={diversityImg} className="card-img-fixed img-fluid d-block mx-auto mb-3" alt="Diversity and Inclusion" />
                  <h5 className="card-title">DIVERSITY AND INCLUSION</h5>
                  <p className="card-text">
                    "Our values the richness of human diversity and the essential role it plays in shaping a better world. We promote equity, inclusion, and shared understanding to ensure that all voices contribute to a thriving and sustainable future."
                  </p>
                </div>
              </div>
            </div>

            {/* Peace Card */}
            <div className="col-md-4 col-sm-12 mb-4">
              <div className="card text-bg-success text-white card h-100 shadow-sm mb-3 card-custom-size">
                <div className="card-body">
                    
                  <img src={peaceImg} className="card-img-fixed img-fluid d-block mx-auto mb-3" alt="Peace" />

                  <h5 className="card-title">PEACE</h5>
                  <p className="card-text">
                    "Achieving global peace and security is at the core of our mission. We firmly believe that development, sustainability, and a hopeful future are only possible in a world free from conflict. We work to nurture empathy, build alliances, and empower voices that advocate for justice and nonviolence across all communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
