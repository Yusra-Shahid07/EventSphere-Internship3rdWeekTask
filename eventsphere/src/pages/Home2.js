// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Home.css";

// export default function Home(props) {
//   const navigate = useNavigate();
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   function searchEvents() {
//     if (searchTerm.trim() === "") {
//       setFilteredEvents([]);   
//       return;
//     }
    
//     const result = props.allEvents.filter((event) => {
//       return (
//         event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         event.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         event.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         event.category.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     });
//     setFilteredEvents(result);
//   }

//   const handleSearchInput = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     props.setSearch(value);
    
//     // Auto search as user types
//     if (value.trim() === "") {
//       setFilteredEvents([]);
//     } else {
//       const result = props.allEvents.filter((event) => {
//         return (
//           event.name.toLowerCase().includes(value.toLowerCase()) ||
//           event.date.toLowerCase().includes(value.toLowerCase()) ||
//           event.venue.toLowerCase().includes(value.toLowerCase()) ||
//           event.description.toLowerCase().includes(value.toLowerCase()) ||
//           event.category.toLowerCase().includes(value.toLowerCase())
//         );
//       });
//       setFilteredEvents(result);
//     }
//   };

//   const handleLearnMore = (eventData) => {
//     navigate(`/eventDetail`, { state: eventData });
//   };

//   const EventCard = ({ event, index }) => (
//     <div key={index} className="event-card glass">
//       <div className="event-image">
//         <img 
//           src={event.image || `https://images.unsplash.com/photo-${1500000000000 + index}?w=400&h=250&fit=crop`}
//           alt={event.name}
//           onError={(e) => {
//             // Fallback images based on category
//             const fallbackImages = {
//               technology: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
//               marketing: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
//               networking: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
//               workshop: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop",
//               music: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
//               business: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop",
//               cultural: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop",
//               health: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
//               environment: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?w=400&h=250&fit=crop",
//               education: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop"
//             };
//             e.target.src = fallbackImages[event.category] || "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=250&fit=crop";
//           }}
//         />
//         <div className="event-overlay">
//           <span className="event-icon">{event.icon}</span>
//         </div>
//         <div className="event-category">
//           {event.category}
//         </div>
//       </div>
//       <div className="event-content">
//         <h3 className="event-title">{event.name}</h3>
//         <div className="event-meta">
//           <div className="meta-item">
//             <span className="meta-icon">📅</span>
//             <span>{event.date}</span>
//           </div>
//           <div className="meta-item">
//             <span className="meta-icon">📍</span>
//             <span>{event.venue}</span>
//           </div>
//         </div>
//         <p className="event-description">{event.description}</p>
//         <button 
//           className="learn-more-btn" 
//           onClick={() => handleLearnMore(event)}
//         >
//           Learn More
//         </button>
//       </div>
//     </div>
//   );

//   return (
//     <div className="home-container">
//       <section className="hero">
//         <div className="hero-content glass">
//           <h1>Discover Amazing Events</h1>
//           <p>
//             Find incredible events happening around you. From concerts to conferences, 
//             workshops to festivals - discover what's next in your city!
//           </p>

//           <div className="search-container">
//             <div className="search-box">
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search events, venues, or dates..."
//                 value={searchTerm}
//                 onChange={handleSearchInput}
//               />
//               <button className="search-btn" onClick={searchEvents}>
//                 <span>🔍</span>
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filtered Events Section */}
//       {filteredEvents.length > 0 && (
//         <section className="events-section">
//           <div className="section-header">
//             <h2 className="section-title">Search Results</h2>
//             <div className="search-results-info">
//               <div className="results-count">
//                 <span className="count-number">{filteredEvents.length}</span>
//                 <span className="count-text">
//                   {filteredEvents.length === 1 ? 'event' : 'events'} found matching your search
//                 </span>
//               </div>
//               <div className="search-term">
//                 Searching for: <span>"{searchTerm}"</span>
//               </div>
//             </div>
//           </div>
//           <div className="events-grid">
//             {filteredEvents.map((event, index) => (
//               <EventCard key={`filtered-${event.id}`} event={event} index={index} />
//             ))}
//           </div>
//         </section>
//       )}

//       {/* All Events Section */}
//       <section className="events-section" id="scrollHere">
//         <div className="section-header">
//           <h2 className="section-title">All Events</h2>
//           <p className="section-subtitle">
//             Discover all the amazing events we have lined up for you
//           </p>
//         </div>
//         <div className="events-grid">
//           {props.allEvents.map((event, index) => (
//             <EventCard key={`all-${event.id}`} event={event} index={index} />
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }



















// import React, { useState } from "react";
// import './Home2.css';
// export default function Home2(props) {
//   const [filteredEvents, setFilteredEvents] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

  

//   const handleSearchInput = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
    
//     if (value.trim() === "") {
//       setFilteredEvents([]);
//     } else {
//       const result = props.allEvents.filter((event) => {
//         return (
//           event.name.toLowerCase().includes(value.toLowerCase()) ||
//           event.date.toLowerCase().includes(value.toLowerCase()) ||
//           event.venue.toLowerCase().includes(value.toLowerCase()) ||
//           event.description.toLowerCase().includes(value.toLowerCase()) ||
//           event.category.toLowerCase().includes(value.toLowerCase())
//         );
//       });
//       setFilteredEvents(result);
//     }
//   };

//   const getCategoryColor = (category) => {
//     const colors = {
//       technology: "from-blue-500 to-purple-600",
//       marketing: "from-green-500 to-teal-600",
//       networking: "from-orange-500 to-red-600",
//       workshop: "from-indigo-500 to-blue-600",
//       music: "from-pink-500 to-rose-600",
//       business: "from-gray-600 to-gray-800",
//       cultural: "from-yellow-500 to-orange-600"
//     };
//     return colors[category] || "from-gray-500 to-gray-700";
//   };

//   const EventCard = ({ event, index }) => (
//     <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-gray-100">
//       {/* Image Section */}
//       <div className="relative h-56 overflow-hidden">
//         <img 
//           src={event.image}
//           alt={event.name}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//           onError={(e) => {
//             const fallbackImages = {
//               technology: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=250&fit=crop",
//               marketing: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
//               networking: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=250&fit=crop",
//               workshop: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=250&fit=crop",
//               music: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop",
//               business: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=400&h=250&fit=crop",
//               cultural: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=250&fit=crop"
//             };
//             e.target.src = fallbackImages[event.category] || "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=250&fit=crop";
//           }}
//         />
        
//         {/* Overlay gradient */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
//         {/* Category badge */}
//         <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(event.category)} backdrop-blur-sm`}>
//           {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
//           {event.name}
//         </h3>
        
//         {/* Event Meta */}
//         <div className="space-y-2 mb-4">
//           <div className="flex items-center text-gray-600 text-sm">
//             <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//             </svg>
//             {event.date}
//           </div>
//           <div className="flex items-center text-gray-600 text-sm">
//             <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             {event.venue}
//           </div>
//         </div>

//         <p className="text-gray-700 text-sm leading-relaxed mb-6 line-clamp-3">
//           {event.description}
//         </p>

//         {/* Action Button */}
//         <button className={`w-full py-3 px-4 rounded-xl font-semibold text-white bg-gradient-to-r ${getCategoryColor(event.category)} hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}>
//           Learn More & Register
//         </button>
//       </div>

//       {/* Hover effect border */}
//       <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-colors duration-300 pointer-events-none" />
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
//       {/* Hero Section */}
//       <section className="relative py-20 px-4">
//         <div className="max-w-6xl mx-auto text-center">
//           <div className="mb-8">
//             <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
//               Discover Amazing Events
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
//               Find incredible events happening around you. From concerts to conferences, 
//               workshops to festivals - discover what's next in your city!
//             </p>
//           </div>

//           {/* Enhanced Search Bar */}
//           <div className="max-w-2xl mx-auto mt-12">
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
//                 <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 className="w-full pl-14 pr-6 py-5 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 shadow-lg"
//                 placeholder="Search events, venues, categories, or dates..."
//                 value={searchTerm}
//                 onChange={handleSearchInput}
//               />
//             </div>
            
//             {/* Search suggestions */}
//             <div className="flex flex-wrap justify-center gap-2 mt-6">
//               {['Technology', 'Music', 'Business', 'Workshop', 'Networking'].map((tag) => (
//                 <button
//                   key={tag}
//                   onClick={() => handleSearchInput({ target: { value: tag } })}
//                   className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 shadow-sm border border-gray-200 hover:border-blue-200"
//                 >
//                   {tag}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Search Results Section */}
//       {filteredEvents.length > 0 && (
//         <section className="py-16 px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-lg border border-gray-100">
//                 <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
//                   {filteredEvents.length}
//                 </div>
//                 <div className="text-left">
//                   <p className="text-lg font-semibold text-gray-900">
//                     {filteredEvents.length === 1 ? 'Event Found' : 'Events Found'}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     Searching for: <span className="font-medium text-blue-600">"{searchTerm}"</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredEvents.map((event, index) => (
//                 <EventCard key={`filtered-${event.id}`} event={event} index={index} />
//               ))}
//             </div>
//           </div>
//         </section>
//       )}

//       {/* All Events Section */}
//       <section className="py-16 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               All Events
//             </h2>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               Discover all the amazing events we have lined up for you
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {props.allEvents.map((event, index) => (
//               <EventCard key={`all-${event.id}`} event={event} index={index} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action Section */}
//       <section className="py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
//             <h3 className="text-3xl md:text-4xl font-bold mb-4">
//               Ready to Join Amazing Events?
//             </h3>
//             <p className="text-xl mb-8 opacity-90">
//               Don't miss out on the best events in your city. Stay updated and never miss an event again!
//             </p>
//             <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-300 shadow-lg">
//               Subscribe to Updates
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }












import React, { useState } from "react";
import './Home2.css';

export default function Home2(props) {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === "") {
      setFilteredEvents([]);
    } else {
      const result = props.allEvents.filter((event) => {
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

        <button className="learn-more-btn">
          <span>Learn More</span>
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Discover Amazing Events
          </h1>
          <p className="hero-subtitle">
            Find incredible events happening around you. From concerts to conferences, 
            workshops to festivals - discover what's next in your city!
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
                  placeholder="Search events, venues, or dates..."
                  value={searchTerm}
                  onChange={handleSearchInput}
                />
              </div>
            </div>
            
            <div className="search-tags">
              {['Technology', 'Music', 'Business', 'Workshop', 'Networking'].map((tag) => (
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

      {/* Search Results Section */}
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
                    {filteredEvents.length === 1 ? 'Event Found' : 'Events Found'}
                  </div>
                  <div className="results-search-term">
                    Searching for: <span className="highlight">"{searchTerm}"</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="events-grid">
              {filteredEvents.map((event, index) => (
                <EventCard key={`filtered-${event.id}`} event={event} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Events Section */}
      <section className="events-section">
        <div className="events-container">
          <div className="section-header">
            <h2 className="section-title">All Events</h2>
            <p className="section-subtitle">
              Discover all the amazing events we have lined up for you
            </p>
          </div>
          
          <div className="events-grid">
            {props.allEvents.map((event, index) => (
              <EventCard key={`all-${event.id}`} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card">
            <h3 className="cta-title">Ready to Join Amazing Events?</h3>
            <p className="cta-subtitle">
              Don't miss out on the best events in your city. Stay updated and never miss an event again!
            </p>
            <button className="cta-button">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}