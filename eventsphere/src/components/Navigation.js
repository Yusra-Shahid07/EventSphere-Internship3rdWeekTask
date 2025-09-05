import React from 'react'
import "./Navigation.css";
import { NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
       <nav className="glass">
        <div className="nav-content">
            <a href="#" className="logo" >Event Sphere</a>

            <ul className="nav-links">
                <NavLink to="/" className={({isActive})=>(isActive?"active":"")} >Home</NavLink>
                <NavLink to ="/upcomingEvents" className={({isActive})=>(isActive?"active":"")} >Upcoming Events</NavLink>
                <NavLink to="/contact" className={({isActive})=>(isActive?"active":"")}>Contact</NavLink>
            </ul>
        </div>
    </nav>
    </div>
  )
}
