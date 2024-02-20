import React, { useContext } from "react";
import "../styles/styles.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowTrendUp,
  faCalendarDays,
  faNewspaper,
  faPeopleGroup,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { LoginContext } from "../contexts";

export default function Navbar() {
  const { loggedIn, setLoggedIn } = useContext(LoginContext);

  return (
    <div className="nav-bar">
      <NavLink to="/trending" className="nav-link">
        <span>
          <FontAwesomeIcon icon={faArrowTrendUp} />
        </span>
        <p>Trending</p>
      </NavLink>
      <NavLink to="/events" className="nav-link">
        <span>
          <FontAwesomeIcon icon={faCalendarDays} />
        </span>
        <p>Events</p>
      </NavLink>
      <NavLink to="/news" className="nav-link">
        <span>
          <FontAwesomeIcon icon={faNewspaper} />
        </span>
        <p>News</p>
      </NavLink>
      <NavLink to="/community" className="nav-link">
        <span>
          <FontAwesomeIcon icon={faPeopleGroup} />
        </span>
        <p>Community</p>
      </NavLink>
      <NavLink to="/login" className="nav-link">
        <span>
          <FontAwesomeIcon icon={faUser} />
        </span>
        {loggedIn ? (
          <p onClick={() => setLoggedIn(false)}>Logout</p>
        ) : (
          <p>Login</p>
        )}
      </NavLink>
    </div>
  );
}
