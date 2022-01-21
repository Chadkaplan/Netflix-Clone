import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="flex-container">
        <ul className="nav-left">
        {/* <a href="./netflixlogo.jpg"></a> */}
          <li className="nav-item">Home</li>
          <li className="nav-item">Tv Shows</li>
          <li className="nav-item">Movies</li>
          <li className="nav-item">New & Popular</li>
          <li className="nav-item">My List</li>
        </ul>
      <div className="nav-right">
        <h6 className="nav-item">Magnifying glass</h6>
        <h6 className="nav-item">Kids</h6>
        <h6 className="nav-item">Notifications</h6>
        <h6 className="nav-item">Profile Icon</h6>
      </div>
    </header>
  );
}
