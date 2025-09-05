import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UpcomingEvents.css";

export default function UpcomingEvents(props) {
  const navigate = useNavigate();
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLearnMore = (eventData) => {
    navigate(`/eventDetail`, { state: eventData });
  };

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === "") {
      setFilteredEvents([]);
    } else {
      const result = props.upcomingEvents.filter((event) => {
        return (
          event.name.toLowerCase().includes(value.toLowerCase()) ||
          event.date.toLowerCase().includes(value.toLowerCase()) ||
          event.venue.toLowerCase().includes(value.toLowerCase()) ||
          event.description.toLowerCase().includes(value.toLowerCase())
        );
      });
      setFilteredEvents(result);
    }
  };

  const EventCard = ({ event, index }) => (
    <div className="event-card">
      <div className="event-image-container">
        <img 
          src={event.image}
          alt={event.name}
          className="event-image"
          onError={(e) => {
            const fallbackImages = [
              "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=250&fit=crop",
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop",
              "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
              "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop"
            ];
            e.target.src = fallbackImages[index % fallbackImages.length];
          }}
        />
        <div className="event-overlay"></div>
      </div>

      <div className="event-content">
        <h3 className="event-title">{event.name}</h3>
        
        <div className="event-meta">
          <div className="meta-item">
            <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{event.date}</span>
          </div>
          <div className="meta-item">
            <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{event.venue}</span>
          </div>
        </div>

        <p className="event-description">{event.description}</p>

        <button className="learn-more-btn" onClick={() => handleLearnMore(event)}>
          <span>Learn More</span>
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );

  const eventsToDisplay = filteredEvents.length > 0 ? filteredEvents : props.upcomingEvents;

  return (
    <div className="upcoming-events-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Upcoming Events
          </h1>
          <p className="hero-subtitle">
            Don't miss out on these exciting events happening soon. 
            Reserve your spot and join us for unforgettable experiences!
          </p>

          <div className="search-section">
            <div className="search-container">
              <div className="search-input-wrapper">
                <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search upcoming events..."
                  value={searchTerm}
                  onChange={handleSearchInput}
                />
              </div>
            </div>
            
            <div className="search-tags">
              {['Technology', 'Marketing', 'Business', 'Workshop', 'Networking'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleSearchInput({ target: { value: tag } })}
                  className="search-tag"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results Info */}
      {filteredEvents.length > 0 && (
        <section className="search-results-section">
          <div className="events-container">
            <div className="search-results-info">
              <div className="results-badge">
                <div className="results-count-circle">
                  {filteredEvents.length}
                </div>
                <div className="results-text">
                  <div className="results-count-text">
                    {filteredEvents.length === 1 ? 'Upcoming Event Found' : 'Upcoming Events Found'}
                  </div>
                  <div className="results-search-term">
                    Searching for: <span className="highlight">"{searchTerm}"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events Section */}
      <section className="events-section">
        <div className="events-container">
          {filteredEvents.length === 0 && (
            <div className="section-header">
              <h2 className="section-title">All Upcoming Events</h2>
              <p className="section-subtitle">
                Get ready for these amazing events coming up soon
              </p>
            </div>
          )}
          
          <div className="events-grid">
            {eventsToDisplay.map((event, index) => (
              <EventCard key={`upcoming-${event.id}`} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <h3 className="cta-title">Ready to Attend?</h3>
            <p className="cta-subtitle">
              Register for upcoming events and be part of something amazing!
            </p>
            <button className="cta-button">
              View All Events
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}