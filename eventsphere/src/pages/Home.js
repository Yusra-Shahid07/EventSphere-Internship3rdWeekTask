import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
export default function Home(props) {
  const navigate=useNavigate();
  const [fliteredEvents, setFliteredEvents] = useState([]);
  function searchEvents() {
    const searchTerm = document
      .getElementById("searchInput")
      .value.toLowerCase();
      if (searchTerm.trim() === "") {
    setFliteredEvents([]);   
    return;
  }
    const result=props.allEvents.filter((event) =>
    {
      return(
        event.name.toLowerCase().includes(searchTerm) ||
        event.date.toLowerCase().includes(searchTerm) ||
        event.venue.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm)
      );
      })
    setFliteredEvents(result);
  }
  const handleLearnMore=(eventData)=>{
    navigate(`/eventDetail`,{state:eventData});
  }

  return (
    <div>
      <div id="home" className="page">
        <section className="hero">
          <div className="hero-content glass">
            <h1>Discover Events</h1>
            <p>
              Find amazing events happening around you. From concerts to
              conferences, workshops to festivals - discover what's next!
            </p>

            <div className="search-container">
              <div className="search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search events..."
                  id="searchInput"
                  onChange={(e) => {
                    props.setSearch(e.target.value);
                  }}
                />
                <button className="search-btn" onClick={searchEvents}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </section>
          {/* Filtered Events */}
        <section className="events-section">
          <h2 className="section-title">Filtered Events</h2>
          <div className="events-grid">
            {fliteredEvents.length > 0 ? (
              fliteredEvents.map((event, index) => (
                <div key={index}>
                  <div className="event-image">{event.icon}</div>
                  <div className="eventdetail">
                    <div className="event-title">{event.name}</div>
                    <div className="event-meta">
                      <div className="meta-item">📅 {event.date}</div>
                      <div className="meta-item">📍 {event.venue}</div>
                    </div>
                    <div className="event-description">{event.description}</div>
                    <button className="learn-more-btn">Learn More</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No matching events ❌</p>
            )}
          </div>
        </section>
        <section className="events-section" id="scrollHere">
          <h2 className="section-title">All Events</h2>
          <div className="events-grid" id="eventsGrid">
            {props.allEvents.map((event, index) => (
              <div>
                <div className="event-image">{event.icon}</div>
                <div className="eventdetail">
                  <div className="event-title">{event.name}</div>
                  <div className="event-meta">
                    <div className="meta-item">📅 {event.date}</div>
                    <div className="meta-item">📍 {event.venue}</div>
                  </div>
                  <div className="event-description">{event.description}</div>
                  <button className="learn-more-btn" onClick={()=>{handleLearnMore(event)}}>Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
