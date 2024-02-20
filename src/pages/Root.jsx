import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { LoginContext } from "../contexts";

export default function Root() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <div className="main-container">
        <Header />
        <Navbar />
        <div className="content-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </LoginContext.Provider>
  );
}
