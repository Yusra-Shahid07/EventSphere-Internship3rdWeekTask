// import React from "react";
// import "./EventDetail.css";
// import { useLocation, useNavigate } from "react-router-dom";
// export default function EventDetail() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const eventData = location.state;
//   const goHome = () => {
//     navigate("/");
//   };

//   const registerEvent = () => {
//     alert("✅ RSVP button clicked!");
//   };
//   return (
//     <div>
//       <div id="eventDetail" className="event-detail">
//         <div className="detail-container">
//           <button className="back-btn" onClick={goHome}>
//             ← Back to Home
//           </button>
//           <div className="detail-header glass">
//             <div className="detail-banner" id="detailBanner">
//               {eventData.icon}
//             </div>
//             <h1 className="detail-title" id="detailTitle">
//               {eventData.name}
//             </h1>
//             <div className="detail-meta">
//               <div className="meta-item">
//                 📅 <span id="detailDate">{eventData.date}</span>
//               </div>
//               <div className="meta-item">
//                 📍 <span id="detailVenue">{eventData.venue}</span>
//               </div>
//             </div>
//           </div>

//           <div className="detail-content glass">
//             <div className="detail-description" id="detailDescription">
//               Full event description will appear here...
//             </div>

        
//             <div className="map-container">
//               {eventData.venue.toLowerCase().includes("online") ||
//               eventData.venue.toLowerCase().includes("zoom") ||
//               eventData.venue.toLowerCase().includes("meet") ||
//               eventData.venue.toLowerCase().includes("virtual") ? (
//                 <p>
//                   🌐 This is a virtual event. No physical location map
//                   available.
//                 </p>
//               ) : (
//                 <iframe
//                   title="event-location"
//                   width="100%"
//                   height="300"
//                   style={{ border: 0, borderRadius: "12px" }}
//                   loading="lazy"
//                   allowFullScreen
//                   src={`https://www.google.com/maps?q=${encodeURIComponent(
//                     eventData.venue
//                   )}&output=embed`}
//                 ></iframe>
//               )}
//             </div>
//             <button className="rsvp-btn" onClick={registerEvent}>
//               RSVP / Register Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import "./EventDetail.css";
import { useLocation, useNavigate } from "react-router-dom";

export default function EventDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const eventData = location.state;
  const [showModal, setShowModal] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const goHome = () => {
    navigate("/");
  };

  const registerEvent = () => {
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    setRegistrationData({
      ...registrationData,
      [e.target.name]: e.target.value
    });
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!registrationData.name || !registrationData.email) {
      alert("Please fill in all required fields");
      return;
    }
    
    // Here you would normally send data to your backend
    console.log("Registration Data:", registrationData);
    
    // Success message
    alert(`🎉 Successfully registered for ${eventData.name}!\nConfirmation will be sent to ${registrationData.email}`);
    
    // Close modal and reset form
    setShowModal(false);
    setRegistrationData({ name: '', email: '', phone: '' });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div id="eventDetail" className="event-detail">
        <div className="detail-container">
          <button className="back-btn" onClick={goHome}>
            ← Back to Home
          </button>
          <div className="detail-header glass">
            <div className="detail-banner" id="detailBanner">
              {eventData.icon}
            </div>
            <h1 className="detail-title" id="detailTitle">
              {eventData.name}
            </h1>
            <div className="detail-meta">
              <div className="meta-item">
                📅 <span id="detailDate">{eventData.date}</span>
              </div>
              <div className="meta-item">
                📍 <span id="detailVenue">{eventData.venue}</span>
              </div>
            </div>
          </div>

          <div className="detail-content glass">
            <div className="detail-description" id="detailDescription">
              Full event description will appear here...
            </div>

            <div className="map-container">
              {eventData.venue.toLowerCase().includes("online") ||
              eventData.venue.toLowerCase().includes("zoom") ||
              eventData.venue.toLowerCase().includes("meet") ||
              eventData.venue.toLowerCase().includes("virtual") ? (
                <p>
                  🌐 This is a virtual event. No physical location map
                  available.
                </p>
              ) : (
                <iframe
                  title="event-location"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: "12px" }}
                  loading="lazy"
                  allowFullScreen
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    eventData.venue
                  )}&output=embed`}
                ></iframe>
              )}
            </div>
            <button className="rsvp-btn" onClick={registerEvent}>
              RSVP / Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Registration Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content glass" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Register for {eventData.name}</h2>
              <button className="close-btn" onClick={closeModal}>×</button>
            </div>
            
            <form onSubmit={submitRegistration} className="registration-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={registrationData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={registrationData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={registrationData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="form-actions">
                <button type="button" onClick={closeModal} className="cancel-btn">
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  Complete Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}