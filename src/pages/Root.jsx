import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Navbar />
        <div className="content-container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
