import React from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import "../styles/styles.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <img src="logo.png" alt="Logo" className="logo" />
      <Link to="/">
        <h1>Togethr - Community portal</h1>
      </Link>
      <DarkModeToggle />
    </header>
  );
}

export default Header;
