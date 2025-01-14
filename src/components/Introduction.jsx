import React, { useState } from "react";
import "../styles/Introduction.css";
import MyImage from "../assets/images/selfie.jpg";

const Introduction = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="introduction">
      {/* Floating Navigation */}
      <div className="floating-nav">
        <div className="logo"><a href="#">Home</a></div>
        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="menu-toggle" onClick={handleToggle}>
          ☰
        </div>
      </div>

      {/* Main Content */}
      <div className="intro-left">
        <h1 className="intro-heading">Hi, I'm Aditya Vishwakarma</h1>
        <p className="intro-description">
          A passionate developer crafting innovative solutions.
        </p>
        <div className="intro-buttons">
          <button className="primary-btn"><a href="#contact">Hire Me</a></button>
          <button className="secondary-btn">View Resume</button>
        </div>
      </div>
      <div className="intro-right">
        {/* Replace the image URL below with your preferred one */}
        <img
          src={MyImage}
          alt="Aditya"
          className="intro-image"
        />
      </div>
    </div>

    
  );
};

export default Introduction;
