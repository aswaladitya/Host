Hey, Cortana. // Dashboard.js

import React, { useState } from "react";
import "../../assets/css/toggle/main.css"; // Adjusted path
import "../../assets/css/nav.css"; // Adjusted path
import "../../assets/css/load.css"; // Adjusted path
import "https://kit.fontawesome.com/0985d929cd.js";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard"; // Assuming you have this component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}




const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginWithGoogle = () => {
    // Firebase authentication logic here
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Firebase logout logic here
    setIsLoggedIn(false);
  };

  return (
    <div className="dashboard-container">
      <nav id="menu" className="menu">
        <div className="actionbar">
          <div className="menu-actionbar-div">
            <button id="menuBtn" className="menu-btn">
              <i className="fas fa-bars menu-icon"></i>
            </button>
            <h3 className="menuText actionbar-title">Dashboard</h3>
          </div>
        </div>
        <ul className="optionsBar">
          <li className="menuItem">
            <a href="/index.html" className="menuOption menu-home">
              <i className="fas fa-home menu-icon"></i>
              <h5 className="menuText menu-label">Home</h5>
            </a>
          </li>
          <li className="menuBreak">
            <hr className="menu-hr" />
          </li>
          <li className="menuItem">
            <a href="/content.html">
              <button className="menuOption menu-product">
                <i className="fa-solid fa-book menu-icon"></i>
                <h5 className="menuText menu-label">Content</h5>
              </button>
            </a>
          </li>
          <li className="menuItem">
            <a href="/games.html">
              <button className="menuOption menu-game">
                <i className="fa-solid fa-gamepad menu-icon"></i>
                <h5 className="menuText menu-label">Games</h5>
              </button>
            </a>
          </li>
          <li className="menuItem">
            <a href="/community.html">
              <button className="menuOption menu-community">
                <i className="fa-solid fa-users menu-icon"></i>
                <h5 className="menuText menu-label">Community</h5>
              </button>
            </a>
          </li>
          <li className="menuItem">
            <a href="/pay/pay.html">
              <button className="menuOption menu-settings">
                <i className="fas fa-cart-shopping menu-icon"></i>
                <h5 className="menuText menu-label">Enroll</h5>
              </button>
            </a>
          </li>
          <li className="menuItem">
            <a href="/settings.html">
              <button className="menuOption menu-settings">
                <i className="fa-solid fa-gear menu-icon"></i>
                <h5 className="menuText menu-label">Settings</h5>
              </button>
            </a>
          </li>
        </ul>
        <div className="menuUser">
          <a href="/dashboard.html" className="menu-user-link">
            <div className="user-avatar">
              <img src="../../images/user.jpg" alt="User" /> {/* Adjusted path */}
            </div>
            <h5 className="Username menuText">A. Maurya</h5>
            <p className="menuText menu-chevron">
              <i className="fas fa-chevron-right"></i>
            </p>
          </a>
        </div>
        <div className="themeBar">
          <div className="theme-wrapper">
            <button id="themeChangeBtn" className="theme-btn">
              <i className="fas theme-icon"></i>
            </button>
          </div>
        </div>
      </nav>
      <br />
      <div id="content" className="dashboard">
        {!isLoggedIn ? (
          <button id="login-btn" onClick={loginWithGoogle}>
            Login with Google
          </button>
        ) : (
          <button id="logout-btn" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
