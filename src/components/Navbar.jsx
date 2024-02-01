import React from "react";
import "../styles/styles.css";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="nav-bar">
      <NavLink to="/home" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/trending" className="nav-link">
        Trending
      </NavLink>
      <NavLink to="/events" className="nav-link">
        Events
      </NavLink>
      <NavLink to="/news" className="nav-link">
        News
      </NavLink>
      <NavLink to="/community" className="nav-link">
        Community
      </NavLink>
      <NavLink to="/login" className="nav-link">
        Log in
      </NavLink>
    </div>
  );
}
