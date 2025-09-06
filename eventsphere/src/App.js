import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './pages/Home.js';
import EventDetail from './pages/EventDetail.js';
import Contact from './pages/Contact.js';
import Footer from './components/Footer.js';
import UpcomingEvents from './pages/UpcomingEvents.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const allEvents = [
    {
      id: 1,
      name: "Tech Innovation Summit 2025",
      date: "March 15, 2025 - 9:00 AM",
      venue: "Lahore Expo Center",
      description: "Join industry leaders for a day of innovation and technology insights that will shape the future of Pakistan's tech industry. Discover cutting-edge technologies and network with professionals.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Digital Marketing Masterclass",
      date: "March 20, 2025 - 2:00 PM",
      venue: "Virtual Event",
      description: "Learn advanced digital marketing strategies from industry experts and transform your online presence. Master social media, SEO, and content marketing techniques.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Startup Networking Night",
      date: "March 25, 2025 - 7:00 PM",
      venue: "The Workplace, Karachi",
      description: "Connect with fellow entrepreneurs and potential investors in Pakistan's most vibrant startup ecosystem. Build meaningful partnerships and discover new opportunities.",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      name: "Photography Workshop",
      date: "April 2, 2025 - 10:00 AM",
      venue: "Shalimar Gardens, Lahore",
      description: "Master the art of outdoor photography in beautiful settings with professional photographers. Learn composition, lighting, and post-processing techniques in this hands-on workshop.",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop"
    },
    {
      id: 5,
      name: "Music Festival 2025",
      date: "April 10, 2025 - 6:00 PM",
      venue: "National Stadium, Karachi",
      description: "A spectacular evening of live music featuring local and international artists across multiple genres. Experience unforgettable performances in an amazing atmosphere.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop"
    },
    {
      id: 6,
      name: "Business Leadership Conference",
      date: "April 18, 2025 - 9:30 AM",
      venue: "Pearl Continental Hotel, Islamabad",
      description: "Insights from successful business leaders and executives on modern leadership challenges. Learn strategic planning, team management, and growth strategies.",
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop"
    },
    {
      id: 7,
      name: "AI & Machine Learning Summit",
      date: "April 25, 2025 - 10:00 AM",
      venue: "University of Lahore",
      description: "Explore the latest trends in artificial intelligence and machine learning with hands-on workshops. Discover how AI is transforming industries and creating new opportunities.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
    },
    {
      id: 8,
      name: "Food & Culture Festival",
      date: "May 5, 2025 - 4:00 PM",
      venue: "Minar-e-Pakistan Ground",
      description: "Celebrate Pakistani cuisine and cultural diversity with traditional food, music, and performances. Experience the rich heritage and flavors of Pakistan in this vibrant festival.",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop"
    },
    {
      id: 9,
      name: "Fitness & Wellness Expo",
      date: "May 12, 2025 - 8:00 AM",
      venue: "Karachi Sports Complex",
      description: "Discover the latest in fitness, nutrition, and wellness trends. A comprehensive expo featuring fitness equipment, health supplements, and wellness services.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop"
    },
    {
      id: 10,
      name: "E-commerce Growth Summit",
      date: "May 20, 2025 - 11:00 AM",
      venue: "Packages Mall, Lahore",
      description: "Learn strategies to scale your online business successfully. Expert-led sessions on e-commerce trends, digital payments, and customer acquisition strategies.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      id: 11,
      name: "Climate Action Workshop",
      date: "May 28, 2025 - 9:00 AM",
      venue: "Islamabad Convention Center",
      description: "Join the movement for environmental sustainability and climate action. Learn about sustainable practices, renewable energy, and conservation initiatives.",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=250&fit=crop"
    },
    {
      id: 12,
      name: "Youth Leadership Forum",
      date: "June 8, 2025 - 10:30 AM",
      venue: "LUMS University, Lahore",
      description: "Empowering young leaders with skills for tomorrow's challenges. Interactive sessions, mentorship opportunities, and leadership development workshops for youth.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop"
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      name: "Tech Innovation Summit 2025",
      date: "March 15, 2025 - 9:00 AM",
      venue: "Lahore Expo Center",
      description: "Join industry leaders for a day of innovation and technology insights.",
      fullDescription: "The Tech Innovation Summit 2025 brings together the brightest minds in technology.",
      location: "Lahore Expo Center, Lahore, Pakistan",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      name: "Digital Marketing Masterclass",
      date: "March 20, 2025 - 2:00 PM",
      venue: "Virtual Event",
      description: "Learn advanced digital marketing strategies from industry experts.",
      fullDescription: "This comprehensive digital marketing masterclass covers everything from social media marketing to SEO optimization.",
      location: "Online - Zoom Platform",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      name: "Startup Networking Night",
      date: "March 25, 2025 - 7:00 PM",
      venue: "The Workplace, Karachi",
      description: "Connect with fellow entrepreneurs and potential investors.",
      fullDescription: "An exclusive networking event designed for startup founders, investors, and entrepreneurs.",
      location: "The Workplace, Gulshan-e-Iqbal, Karachi, Pakistan",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop"
    }
  ];

  const [search, setSearch] = useState('Search events');
  const [searchUpcomingEvent, setSearchUpcomingEvent] = useState('Search upcoming Event');

  const setSearchFunction = (value) => {
    setSearch(value);
  };

  const setSearchUpcomingFunction = (value) => {
    setSearchUpcomingEvent(value);
  };

  return (
    <div>
      <Router>
        <Navigation />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home
                allEvents={allEvents} 
                search={search} 
                setSearch={setSearchFunction}
              />
            }
          />
          <Route 
            path="/upcomingEvents" 
            element={
              <UpcomingEvents 
                upcomingEvents={upcomingEvents} 
                search={searchUpcomingEvent} 
                setSearch={setSearchUpcomingFunction}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/eventDetail" element={<EventDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;