import React from 'react';
import './Events.css';
import bg from '../assets/two.avif';

import envDayImg from '../assets/world-envday.jpg';
import cleanCampImg from '../assets/Event_CleanUp.jpg';
import earthDayImg from '../assets/Event_EarthDay.avif';
import schoolWorkshopImg from '../assets/Event_school.jpg';

const Events = () => {
  const upcomingEvents = [
    {
      title: 'World Environment Day Plantation Drive',
      date: 'June 5, 2025',
      location: 'Pune, Maharashtra',
      description: 'Join us in planting 500 saplings to celebrate World Environment Day!',
      image: envDayImg,
    },
    {
      title: 'Clean Green Camp',
      date: 'July 20, 2025',
      location: 'Nagpur, Maharashtra',
      description: 'A community cleanup and plantation initiative with volunteers.',
      image: cleanCampImg,
    },
  ];

  const pastEvents = [
    {
      title: 'Earth Day Forest Rebuild',
      date: 'April 22, 2025',
      location: 'Satara, Maharashtra',
      description: 'Planted over 1,000 native trees in a degraded forest area.',
      image: earthDayImg,
    },
    {
      title: 'School Eco Workshop',
      date: 'March 15, 2025',
      location: 'Mumbai, Maharashtra',
      description: 'An awareness and tree planting program in local schools.',
      image: schoolWorkshopImg,
    },
  ];

  return (
    <div className="events-page" style={{ backgroundImage: `url(${bg})` }}>
      <header className="events-header">
        <h1>Our Events</h1>
        <p>Explore our upcoming and past green initiatives.</p>
      </header>

      <section className="events-section">
        <h2>Upcoming Events</h2>
        <div className="event-list">
          {upcomingEvents.map((event, index) => (
            <div className="event-card upcoming" key={index}>
              <img src={event.image} alt={event.title} className="event-image" />
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="events-section">
        <h2>Past Events</h2>
        <div className="event-list">
          {pastEvents.map((event, index) => (
            <div className="event-card past" key={index}>
              <img src={event.image} alt={event.title} className="event-image" />
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
