import React, { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { CurrentUserContext, LoginContext } from "../contexts";

export default function Root() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <div className="main-container">
          <Header />
          <Navbar />
          <div className="content-container">
            <Outlet />
          </div>
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </LoginContext.Provider>
  );
}
