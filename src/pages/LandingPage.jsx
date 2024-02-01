import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="landing-page-container">
      <Link to="/home">
        <img src="logo.png" alt="logo" />
      </Link>
      <h1>Welcome to Togethr</h1>
    </section>
  );
}
